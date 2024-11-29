import type { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { camelCase, pascalCase, snakeCase } from 'change-case'
import { skipParsing } from './skip-parsing'
import { genTypeBody } from '../generator/utils'
import { loadSource } from './load-source'

import {
  IDENTIFIERS,
  PARAMETER_IDENTIFIERS,
  PARAMETER_LOCATIONS,
  type ParameterLocations,
  type SchemaLocations,
} from '../identifiers'

import type {
  CompositeArray,
  IntersectionType,
  ObjectType,
  Operation,
  OperationMeta,
  ParameterObject,
  ParserHooks,
  ParserOptions,
  ParserResult,
  PathItemObject,
  PropertySignature,
  ReferenceMeta,
  ReferenceObject,
  ReferenceTarget,
  ReferenceType,
  RequestBodyTypes,
  RequestTypes,
  ResponseObject,
  ResponseTypes,
  SchemaObject,
  TypeDeclaration,
  TypeDefinition,
  UnionType,
} from './types'

import {
  eachPaths,
  fixCompositePropertyType,
  isEmptyObjectType,
  isObjectType,
  isRef,
  isV2ResponseObject,
  optimizeName,
  validateStatus,
} from './utils'

export * from './types'

export class Parser {
  private readonly _options: ParserOptions
  private readonly _referenceCache = new Map<string, ReferenceType>()
  private readonly _nameCounter = new Map<string, number>()
  private readonly _operations: ParserResult['operations'] = new Map()
  private readonly _schemas: ParserResult['schemas'] = new Map()
  private _hooks?: ParserHooks
  private _parsingLocation?: SchemaLocations
  private _document: OpenAPI.Document | null = null

  constructor(options: ParserOptions) {
    this._options = options
  }

  async parse(hooks?: ParserHooks): Promise<ParserResult> {
    const { _options } = this
    const document = await loadSource(_options.source, hooks)
    const tasks: Promise<void>[] = []
    const parsedPaths = new Set<string>()
    const getTag = this._getTag.bind(this)

    const start = (meta: OperationMeta, operation?: OpenAPI.Operation) => {
      tasks.push(this._parseOperation(meta, operation || {}))
    }

    this._document = document
    this._hooks = hooks

    /**
     * 解析文档中的 paths
     */
    eachPaths<PathItemObject, OpenAPI.Operation>(document?.paths, (path, method, pathItem, operation) => {
      const meta: OperationMeta = {
        originalPath: path,
        path,
        method,
        tags: operation.tags,
        summary: operation.summary,
        description: operation.description,
        docs: operation.externalDocs?.url,
        operationId: operation.operationId,
        deprecated: operation.deprecated,
      }

      // 是否跳过解析
      if (
        skipParsing(meta, {
          getTag,
          include: _options.include,
          exclude: _options.exclude,
        })
      ) {
        return
      }

      // 获取引用对象
      // #/components/pathItems
      if (isRef(pathItem)) {
        pathItem = this._getRefTarget<PathItemObject>(pathItem).target
      }

      const sharedParameters = pathItem.parameters

      // 合并共享参数结构
      if (sharedParameters) {
        // @ts-expect-error ignore forever
        operation.parameters = [
          ...sharedParameters,
          ...(operation.parameters || []),
        ]
      }

      // 更新 path
      meta.path = this._getPath(meta)

      // 标记已解析过的路径
      parsedPaths.add(method + meta.path)

      start(meta, operation)
    })

    /**
     * 解析自定义的 paths
     */
    eachPaths(_options.paths, (path, method) => {
      // 如果路径是存在于文档中并且已经解析过了的，则不再作为自定义接口来解析
      if (parsedPaths.has(method + path)) {
        return
      }

      start({
        originalPath: path,
        path,
        method,
        _customized: true,
      })
    })

    await Promise.all(tasks)

    return {
      document,
      operations: this._operations,
      schemas: this._schemas,
    }
  }

  /**
   * 获取路径, 默认使用文档中的路径，但是有的时候文档路径并不是实际想要的路径，所以允许自定义修正
   * @param meta
   * @private
   */
  private _getPath(meta: OperationMeta) {
    return this._options.getPath?.(meta) || meta.originalPath
  }

  /**
   * 获取类型的属性名称
   * 默认使用文档的 key，但是有时候文档的 key 可能并不是实际接口的 key，所以允许自定义修正
   * @example xxx.value, xxx.fields
   * @param name
   * @private
   */
  private _getPropertyName(name: string) {
    return this._options.getPropertyName?.(name, this._parsingLocation) || name
  }

  /**
   * 获取 tag（分组）
   * 默认使用文档的分组，或者 `Main`，然后也支持根据元信息来自定义分组
   * @param meta
   * @private
   */
  private _getTag(meta: OperationMeta) {
    return pascalCase(
      this._options.getTag?.(meta) || meta.tags?.[0] || 'Main',
    )
  }

  /**
   * 获取方法名（在一个分组内保证唯一）
   * 默认使用文档的 `operationId` 或者 `path`，并做了一些精简的优化处理
   * 但是这有的时候可能并不符合实际的场景，或者名称语意不够明确，所以允许根据元信息来自定义方法名
   * @private
   */
  private _getName(operation: Operation) {
    const { _options } = this
    const { tag } = operation
    const originName = _options.getName?.(operation) || operation.operationId || operation.path
    const name = this._optimizeName(operation, originName)

    // 安全命名
    return this._toSafeName(tag, name)
  }

  private _optimizeName(operation: Operation, originName: string) {
    const { _options } = this

    const name = _options.nameOptimization === false
      ? originName
      : optimizeName(operation, originName)

    switch (_options.nameCase) {
      case 'pascal': {
        return pascalCase(name)
      }

      case 'snake': {
        return snakeCase(name)
      }

      // case 'camel':
      default: {
        return camelCase(name)
      }
    }
  }

  /**
   * 为防止命名重复，使用命名计数器
   * @private
   */
  private _toSafeName(tag: string, name: string) {
    const key = tag + name
    const count = (this._nameCounter.get(key) || 0) + 1

    this._nameCounter.set(key, count)

    // 如果计数器大于 1，说明这个分组出现了重复的名称，这时候需要加上计数器，以确保名称唯一
    // 虽然这样保证了生成的方法名称不会重复，但可读性可能会降低
    // 一般来说这种情况很少出现。假设真的出现了，可以使用自定义命名调整，或者去修改对应的 openapi/swagger 文档的定义
    if (count > 1) {
      const safeName = name + count

      this._hooks?.onNameConflict?.({
        tag,
        count,
        name,
        renamedAs: safeName,
      })

      return safeName
    }

    return name
  }

  /**
   * 解析操作结构
   * @param meta
   * @param originalOperation
   * @private
   */
  private async _parseOperation(meta: OperationMeta, originalOperation: OpenAPI.Operation) {
    const { _operations } = this
    const tag = this._getTag(meta)

    const operation: Operation = {
      ...meta,
      tag,

      // 初始化名称为空，会在最后填充更新
      name: '',

      // 自定义操作不解析结构
      types: meta._customized
        ? {}
        : {
            ...this._parseParams(originalOperation),
            ...this._parseBodies(originalOperation),
            ...this._parseResponses(originalOperation),
          },
    }

    const items = _operations.get(tag)

    if (items) {
      items.push(operation)
    }
    else {
      _operations.set(tag, [operation])
    }

    // 执行自定义操作
    await this._customize(operation)

    const { types } = operation

    // 如果 formData 和 body 的结构一样，则 formData 直接引用 body 的类型
    if (types.formData && types.body && genTypeBody(types.formData) === genTypeBody(types.body)) {
      types.formData = pascalCase(PARAMETER_IDENTIFIERS.body)
    }

    // `name` 放在最后填充
    // 如果自定义的时候没有指定 `name`，则使用默认的命名规则
    if (!operation.name) {
      operation.name = this._getName(operation)
    }
  }

  /**
   * 自定义
   * @private
   */
  private async _customize(operation: Operation): Promise<void> {
    const handler = this._options.paths?.[operation.path]?.[operation.method]

    if (!handler) {
      return
    }

    let res: Partial<Operation> | void

    if (typeof handler === 'function') {
      try {
        res = await handler(operation)

        // 如果没有返回值或者返回值和原始值相同，则不做任何处理
        if (!res || res === operation) {
          return
        }
      }
      catch (err) {
        // 如果自定义的处理器报错了，则直接返回，就让其保持自定义前的状态
        // 不能中断，因为可能还有其他的操作需要解析
        return console.error(err)
      }
    }
    else {
      res = handler
    }

    // 合并结果
    Object.assign(operation, res, {
      types: Object.assign(operation.types, res.types),
    })
  }

  /**
   * params: path,query,header?,cookie?,(V2 only: body,formData)
   * @private
   */
  private _parseParams(originalOperation: OpenAPI.Operation) {
    const parameters = originalOperation.parameters || []

    const types: RequestTypes = {
      // header 默认参数
      [PARAMETER_IDENTIFIERS.header]: this._createDefaultHeaderParams(originalOperation),
    }

    const parseParameter = (parameter: ParameterObject) => {
      const location = parameter.in as ParameterLocations

      // 是否为有效的参数位置
      if (PARAMETER_LOCATIONS.indexOf(location) < 0) {
        return
      }

      this._parsingLocation = location

      // 只有 OpenAPI v2 才有 `in:body` 和 `in:formData`
      // 而在 OpenAPI v2 中，`in:body` 只能且只有一个，所以直接将类型解析为 `body`，而不是属性之一
      if (location === 'body') {
        types[PARAMETER_IDENTIFIERS.body] = this._parseSchema(parameter.schema)
        return
      }

      // header 参数强制为可选，因为一般情况下 header 更可能在适配器中统一传递
      if (location === 'header' && parameter.required) {
        parameter.required = false
      }

      const parameterIdentifier = PARAMETER_IDENTIFIERS[location]

      const objectType = (types[parameterIdentifier] as ObjectType) || (types[parameterIdentifier] = {
        type: 'object',
        properties: [],
      })

      objectType.properties.push({
        name: this._getPropertyName(parameter.name),
        type: this._parseSchema(parameter.schema || parameter),
        description: parameter.description,
        required: location === 'path' || parameter.required,
        deprecated: parameter.deprecated,
        schema: parameter.schema,
      })
    }

    for (let item of parameters) {
      if (isRef(item)) {
        item = this._getRefTarget<ParameterObject>(item).target
      }

      parseParameter(item)
    }

    return types
  }

  /**
   * 创建默认的 header 参数
   * @param originalOperation
   * @private
   */
  private _createDefaultHeaderParams(originalOperation: OpenAPI.Operation): ObjectType {
    let { mimeTypes } = this._getRequestBody(originalOperation)

    if (mimeTypes.length === 0) {
      mimeTypes = (originalOperation as OpenAPIV2.OperationObject).consumes || []
    }

    const properties: PropertySignature[] = [
      // 默认支持附加属性，用于接收其他 header 参数，因为文档中不一定定义了所有的 header 参数
      {
        name: 'P',
        type: null,
        additional: true,
      },
    ]

    // 支持 `Content-Type` 参数
    // 因为各种可序列化的 body 结构（xml，form-data，form-urlencoded）都被解析为了 JSON，但是传递时可能是需要为 XML，FormData，Query 字符串等
    // 所以需要指定 Content-Type，以在适配器中将 JSON 格式转换为其他的格式
    if (mimeTypes.length > 0) {
      properties.push(
        {
          name: 'Content-Type',
          type: `"${mimeTypes.join('"|"')}" | string`,
        },
      )
    }

    return {
      type: 'object',
      properties,
    }
  }

  private _getRequestBody(originalOperation: OpenAPI.Operation) {
    let { requestBody } = originalOperation as OpenAPIV3.OperationObject

    if (isRef(requestBody)) {
      requestBody = this._getRefTarget<OpenAPIV3.RequestBodyObject>(requestBody).target
    }

    const content = requestBody?.content || {}

    return {
      requestBody,
      content,
      mimeTypes: Object.keys(content),
    }
  }

  /**
   * requestBody (V3 only)
   * @private
   */
  private _parseBodies(originalOperation: OpenAPI.Operation): RequestBodyTypes {
    const { content, mimeTypes } = this._getRequestBody(originalOperation)

    if (mimeTypes.length === 0) {
      return {}
    }

    const bodies: TypeDefinition[] = []
    const types: RequestBodyTypes = {}

    for (const mimeType of mimeTypes) {
      const isFormData = mimeType === 'multipart/form-data'

      this._parsingLocation = isFormData ? 'formData' : 'body'

      const definition = this._parseSchema(content[mimeType]?.schema)

      if (isFormData) {
        types[PARAMETER_IDENTIFIERS.formData] = definition
      }
      else {
        bodies.push(definition)
      }
    }

    if (bodies.length > 0) {
      types[PARAMETER_IDENTIFIERS.body] = {
        type: 'union',
        items: bodies,
      }
    }

    return types
  }

  /**
   * 解析响应结构，包括成功响应和非成功响应
   */
  private _parseResponses(originalOperation: OpenAPI.Operation): ResponseTypes {
    const responses = originalOperation.responses || {}
    const codes = Object.keys(responses)
    const responsesAsProperties: PropertySignature[] = []
    const validCodes: string[] = []
    const validate = this._options.validateStatus || validateStatus

    this._parsingLocation = 'response'

    for (const code of codes) {
      const valid = validate(+code)

      // 不解析非成功响应
      if (!valid && !this._options.parseUnsuccessfulResponses) {
        continue
      }

      const definition = this._parseResponse(responses[code])

      if (!definition) {
        continue
      }

      if (valid) {
        validCodes.push(code)
      }

      responsesAsProperties.push({
        name: code,
        type: definition,
        required: true,
      })
    }

    // 当成功响应的数量大于 0，并且成功响应的数量等于全部响应的数量时，则认为只有成功响应的类型
    // 只有成功响应的类型时，直接返回联合类型
    if (validCodes.length > 0 && validCodes.length === responsesAsProperties.length) {
      return {
        [IDENTIFIERS.response]: {
          type: 'union',
          items: responsesAsProperties.map((item) => item.type),
        },
      }
    }

    const types: ResponseTypes = {}

    if (validCodes.length > 0) {
      const responsesName = pascalCase(IDENTIFIERS.responses)

      types[IDENTIFIERS.response] = {
        type: 'union',
        items: validCodes.map((code) => `${responsesName}[${code}]`),
      }
    }

    if (responsesAsProperties.length > 0) {
      types[IDENTIFIERS.responses] = {
        type: 'object',
        properties: responsesAsProperties,
      }
    }

    return types
  }

  /**
   * 解析响应结构
   */
  private _parseResponse(originalResponse: ResponseObject | ReferenceObject | undefined): TypeDefinition {
    if (!originalResponse) {
      return null
    }

    if (isRef(originalResponse)) {
      return this._parseRef(originalResponse)
    }

    // V2
    if (isV2ResponseObject(originalResponse)) {
      return this._parseSchema(originalResponse.schema)
    }

    // V3
    const items: TypeDefinition[] = Object
      .values(originalResponse.content || {})
      .filter(Boolean)
      .map((item) => {
        return this._parseSchema(item.schema)
      })

    if (items.length === 0) {
      return null
    }

    return {
      type: 'union',
      items: items,
    }
  }

  /**
   * 获取引用的元信息
   */
  private _getRefMeta<T = any>(ref: ReferenceObject): ReferenceMeta<T> {
    const { segments, target } = this._getRefTarget<T>(ref)
    let namespace: string

    switch (segments[0]) {
      // `definitions` 是 v2 版本，将其重命名为 `schemas`，以符合最新规范
      case 'definitions': {
        namespace = 'schemas'
        break
      }

      // v3 版本包裹了一层 `components`
      case 'components': {
        namespace = segments[1]
        break
      }

      // 最大兼容性，使用文档原始的名称
      default: {
        namespace = segments[0]
      }
    }

    return {
      namespace: '$' + camelCase(namespace),
      name: pascalCase(segments[segments.length - 1]),
      target: target,
    }
  }

  private _getRefTarget<T = any>(ref: ReferenceObject): ReferenceTarget<T> {
    const segments = ref.$ref.split('/').slice(1)
    let target: any = this._document

    for (const key of segments) {
      if (target) {
        target = target[key]
      }
    }

    return {
      segments,
      target: target || {},
    }
  }

  /**
   * 解析引用
   */
  private _parseRef<T = any>(ref: ReferenceObject): ReferenceType<T> {
    const cacheKey = ref.$ref
    const cached = this._referenceCache.get(cacheKey)

    if (cached) {
      return cached
    }

    const meta = this._getRefMeta<T>(ref)

    const referenceType: ReferenceType<T> = {
      type: 'reference',
      value: `${meta.namespace}.${meta.name}`,
      target: meta.target,

      // 初始化 body
      body: null,
    }

    // 缓存必须在下一次 `_parseRef` 之前更新，否则可能会出现无限递归
    this._referenceCache.set(cacheKey, referenceType)

    // 更新 body
    referenceType.body = this._parseRefSchema(meta)

    return referenceType
  }

  /**
   * 解析引用结构
   * @param meta
   * @private
   */
  private _parseRefSchema(meta: ReferenceMeta): TypeDefinition {
    const { target, namespace } = meta
    let body: TypeDefinition = null

    switch (namespace) {
      case '$responses': {
        body = this._parseResponse(target)
        break
      }

      case '$parameters':
      case '$headers': {
        body = this._parseSchema(target.schema)
        break
      }

      // case '$definitions':
      case '$schemas': {
        body = this._parseSchema(target)
        break
      }

      // $examples
      // $requestBodies
      // $securitySchemes
      // $links
      // $callbacks
    }

    const declaration: TypeDeclaration = {
      name: meta.name,
      body: body,
      description: target.description,
      deprecated: target.deprecated,
    }

    const declarations = this._schemas.get(namespace)

    if (declarations) {
      declarations.push(declaration)
    }
    else {
      this._schemas.set(namespace, [declaration])
    }

    return body
  }

  /**
   * 解析结构入口
   * 根据类型解析不同的结构，如：object, array, enum, ...，
   * 并且支持复合结构，如：anyOf, oneOf, allOf，
   * 以及引用结构，如：$ref，
   * 最终返回一个 `TypeItem`
   */
  private _parseSchema(schema: SchemaObject | ReferenceObject | undefined | null): TypeDefinition {
    if (!schema) {
      return null
    }

    if (isRef(schema)) {
      return this._parseRef(schema)
    }

    const normal = this._parseSchemaNormal(schema)
    const composite = this._parseSchemaComposite(schema, normal)

    if (normal && composite?.items.length) {
      // 当存在复合结构时，如果 object 的属性数量为 0，则直接返回复合结构
      if (isEmptyObjectType(normal)) {
        return composite
      }

      return {
        type: 'intersection',
        items: [normal, composite],
      }
    }

    return normal || composite
  }

  /**
   * 解析复合结构
   * anyOf, oneOf, allOf
   */
  private _parseSchemaComposite(schema: SchemaObject, normalType: TypeDefinition): IntersectionType | null {
    const { anyOf, oneOf, allOf } = schema

    // @ts-expect-error ignore forever
    const compositeSchemas = [anyOf, oneOf, allOf].filter<CompositeArray>(Boolean)

    if (compositeSchemas.length === 0) {
      return null
    }

    let compositeTypeItems = compositeSchemas
      .map((compositeArray): IntersectionType | UnionType => {
        // 只有 `allOf` 为交叉类型，其他都是联合类型
        return {
          type: compositeArray === allOf ? 'intersection' : 'union',
          items: compositeArray
            .map((schema) => {
              return this._parseSchema(schema)
            })
            .filter((definition) => {
              return isEmptyObjectType(definition) ? false : !!definition
            }),
        }
      })
      .filter((compositeTypeItem) => {
        return compositeTypeItem.items.length > 0
      })

    // 修正复合属性类型
    if (isObjectType(normalType)) {
      compositeTypeItems = fixCompositePropertyType(compositeTypeItems, normalType)
    }

    // 如果有多个复合类型的话，那么他们应该是交叉类型
    return {
      type: 'intersection',
      items: compositeTypeItems,
    }
  }

  /**
   * 解析普通结构
   * simple
   */
  private _parseSchemaNormal(schema: SchemaObject): TypeDefinition {
    if (schema.enum) {
      return {
        type: 'enum',
        items: schema.enum,
      }
    }

    let type = schema.type

    // 存在 `properties` 默认意味着类型是 `object`
    if (!type && (schema.properties || schema.required)) {
      type = 'object'
    }

    switch (type) {
      case 'integer':
      case 'number': {
        switch (schema.format) {
          case 'int64': {
            // `int64` 类型在生成 JSON 时会被转换为字符串，这是因为 JavaScript 的 Number 类型只能安全地表示 -2^53 到 2^53 之间的整数（即 Number.MAX_SAFE_INTEGER 和 Number.MIN_SAFE_INTEGER ）。而 int64 类型的值可能会超出这个范围，因此直接使用 JavaScript 的 Number 来存储可能会导致精度丢失。
            // 将 `int64` 转换为字符串可以避免精度丢失的问题。这在处理 JSON 序列化时尤为重要，因为在传输和解析过程中可以确保数据的完整性。
            return '(number | string)'
          }

          // case 'float':
          // case 'double':
          // case 'int32':
          default: {
            return 'number'
          }
        }
      }

      case 'string': {
        switch (schema.format) {
          case 'binary': {
            return '(ArrayBuffer | ArrayBufferView | Blob | Buffer | File)'
          }

          // case 'byte': // base64
          // case 'date':
          // case 'date-time':
          // case 'password':
          // case 'uuid':
          // case 'uri':
          default: {
            return 'string'
          }
        }
      }

      case 'boolean': {
        return 'boolean'
      }

      // V2
      case 'file': {
        return 'File'
      }

      case 'array': {
        return {
          type: 'array',
          items: this._parseSchemaArray(schema as OpenAPIV3.ArraySchemaObject),
        }
      }

      case 'object': {
        return this._parseSchemaObject(schema)
      }
    }

    return null
  }

  /**
   * 解析对象结构
   * type: object
   */
  private _parseSchemaObject(schema: SchemaObject): ObjectType {
    const properties = schema.properties || {}

    // 这里的 `required` 应该是字符串数组，但是有的文档可能错误的出现 `true`
    // 所以不能直接写为：schema.required || []
    const required = Array.isArray(schema.required) ? schema.required : []

    const keys = Object.keys(properties)
    const propertySignatures: PropertySignature[] = []

    for (const key of keys) {
      let schema = properties[key]
      let type: TypeDefinition

      if (isRef(schema)) {
        type = this._parseRef(schema)
        schema = type.target as SchemaObject
      }
      else {
        type = this._parseSchema(schema)
      }

      propertySignatures.push({
        name: this._getPropertyName(key),
        type: type,
        description: schema.description,
        required: required.includes(key),
        deprecated: schema.deprecated,
        schema: schema,
      })
    }

    // 在存在复合类型的时候，required 里面的字段可能比 properties 中的多
    // 所以需要特别的把这些缺少的字段补全
    for (const key of required) {
      if (keys.includes(key)) {
        continue
      }

      propertySignatures.push({
        name: key,
        required: true,
        type: 'any',
      })
    }

    const additional = this._parseSchemaObjectAdditional(schema)

    if (additional) {
      // 在其他属性存在可选的情况下，附属类型需要添加 `undefined` 约束
      if (additional.type && propertySignatures.some((item) => !item.required)) {
        additional.type = {
          type: 'union',
          items: [additional.type, 'undefined'],
        }
      }

      propertySignatures.push(additional)
    }

    return {
      type: 'object',
      properties: propertySignatures,
    }
  }

  /**
   * 解析对象的附属结构
   * additionalProperties
   */
  private _parseSchemaObjectAdditional(schema: SchemaObject): null | PropertySignature {
    let { additionalProperties: props } = schema

    if (!props) {
      return null
    }

    let type: TypeDefinition = null

    if (isRef(props)) {
      type = this._parseRef(props)
      props = type.target as SchemaObject
    }

    //
    else if (typeof props === 'object') {
      type = this._parseSchema(props)
    }

    // 当 props 为 true 时，重写为 `{}`
    else {
      props = {}
    }

    return {
      name: 'P',
      type: type,
      additional: true,
      description: props.description,
    }
  }

  /**
   * 解析数组结构
   * type: array
   */
  private _parseSchemaArray(schema: OpenAPIV3.ArraySchemaObject): TypeDefinition[] {
    const { items } = schema

    if (isRef(items)) {
      return [this._parseRef(items)]
    }

    if (items) {
      // `IJsonSchema` only
      if (Array.isArray(items)) {
        return items.map((item) => this._parseSchema(item))
      }

      const { type } = items

      // literal types
      if (Array.isArray(type)) {
        return type.map((item) => item === 'integer' ? 'number' : item)
      }

      //
      if (type) {
        return [this._parseSchema(items)]
      }
    }

    return []
  }
}
