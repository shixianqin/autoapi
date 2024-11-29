import { kebabCase, pascalCase } from 'change-case'
import { alphanumericSort } from './alphanumeric-sort'
import type { FileItem, GeneratorOptions } from './types'

import {
  IDENTIFIERS,
  PARAMETER_IDENTIFIERS,
  PARAMETER_LOCATIONS,
  type ParameterLocations,
} from '../identifiers'

import {
  type Operation,
  type OperationTypes,
  Parser,
  type ParserHooks,
  type ParserResult,
  type PropertySignature,
} from '../parser'

import {
  genFileContent,
  genObjectTypeBody,
  genOperationComments,
  genTypeDeclaration,
  hasRequired,
  wrapNamespace,
} from './utils'

export * from './types'

export class Generator {
  private readonly _options: GeneratorOptions
  private readonly _namespaces: string[]

  constructor(options: GeneratorOptions) {
    this._options = options

    this._namespaces = [
      options.rootNamespace ? pascalCase(options.rootNamespace) : 'API',
      pascalCase(options.namespace),
    ]
  }

  async generate(parserHooks?: ParserHooks): Promise<FileItem[]> {
    const { _options, _namespaces } = this
    const files: FileItem[] = []
    const namespaceDir = kebabCase(_options.namespace)
    const parser = new Parser(_options)
    const result = await parser.parse(parserHooks)

    for (const [tag, operations] of result.operations) {
      const namespaces = _namespaces.concat(tag)
      const fileDir = namespaceDir + '/' + kebabCase(tag)
      const sortedOperations = alphanumericSort(operations, (item) => item.path + item.method)

      files.push(
        {
          dir: fileDir,
          name: 'index.ts',
          content: await this._genOperationsContent(sortedOperations, namespaces),
        },
        {
          dir: fileDir,
          name: 'types.d.ts',
          content: await this._genTypesContent(sortedOperations, namespaces),
        },
      )
    }

    files.push({
      dir: namespaceDir,
      name: 'schemas.d.ts',
      content: await this._genSchemasContent(result.schemas),
    })

    return files
  }

  /**
   * 构建请求方法模版
   * @param operation
   * @param namespaces
   * @private
   */
  private _genOperationDeclaration(operation: Operation, namespaces: string[]) {
    const typePrefix = [...namespaces, pascalCase(operation.name)].join('.')

    // 替换路径中的参数为模版字符串
    const path = operation.path.replace(/\{[^}]+}/g, (m) => {
      const name = m.substring(1, m.length - 1).trim()
      return `$\{${IDENTIFIERS.requestOptions}.${PARAMETER_IDENTIFIERS.path}.${name}}`
    })

    // options 参数
    const optionsParameter = this._genOptionsParameter(operation, typePrefix)

    // 适配器的调用参数
    const callArguments = [
      `"${operation.method}"`,
      path.indexOf('${') < 0 ? `"${path}"` : `\`${path}\``,
      IDENTIFIERS.requestOptions + (optionsParameter.required ? '' : '||{}'),
    ]

    // 将作为泛型参数的响应类型
    const responseType = this._genResponseType(operation, typePrefix)

    const declaration = [
      `export function ${operation.name}(${optionsParameter.parameter}) {`,
      `  return ${IDENTIFIERS.requestAdapter}<${responseType}>(${callArguments.join(',')})`,
      '}',
    ]

    return genOperationComments(operation) + declaration.join('\n')
  }

  /**
   * 构建请求方法的 options 参数
   * @param operation
   * @param typePrefix
   * @private
   */
  private _genOptionsParameter(operation: Operation, typePrefix: string) {
    const { requestConfig, requestContext } = this._options
    const { types } = operation
    const propertyMap: { [K in ParameterLocations]?: PropertySignature } = {}
    const properties: PropertySignature[] = []

    for (const location of PARAMETER_LOCATIONS) {
      const name = PARAMETER_IDENTIFIERS[location]
      const definition = types[name]

      const type = definition
        ? `${typePrefix}.${pascalCase(name)}`
        : location === 'header'
          ? 'Record<string, any>'
          : null

      if (!type) {
        continue
      }

      properties.push(
        propertyMap[location] = {
          name: name,
          type: type,
          required: hasRequired(definition),
        },
      )
    }

    if (!requestConfig?.disabled) {
      properties.push({
        name: IDENTIFIERS.requestConfig,
        type: IDENTIFIERS.requestConfigType,
        required: requestConfig?.required,
      })
    }

    if (!requestContext?.disabled) {
      properties.push({
        name: IDENTIFIERS.requestContext,
        type: IDENTIFIERS.requestContextType,
        required: requestContext?.required,
      })
    }

    // 如果其中一个属性是必填的，则整个 `options` 参数就是必填的
    const optionsRequired = properties.some((item) => item.required)

    // 如果同时存在 `formData` 和 `body`，则将他们全部设置为非必填，因为这两个属性是互斥的
    // 注意这个操作需要在 `optionsRequired` 判断之后进行，
    // 虽然把他们两个都设置为非必填了，但是只要原来有一个是必填的，整个 `options` 就还应该是必填的
    const { formData, body } = propertyMap

    if (formData && body) {
      body.required = false
      formData.required = false
    }

    return {
      required: optionsRequired,
      parameter: IDENTIFIERS.requestOptions + (optionsRequired ? ':' : '?:') + genObjectTypeBody(
        {
          type: 'object',
          properties,
        },
        true,
      ),
    }
  }

  private _genResponseType(operation: Operation, prefix: string) {
    if (!operation.types[IDENTIFIERS.response]) {
      return 'any'
    }

    // 拼接响应类型后缀
    const suffix = this._options.responseReturnPath
      ?.split('.')
      .filter(Boolean)
      .map((p) => p[0] === '[' && p[p.length - 1] === ']' ? p : `["${p}"]`)
      .join('')
      || ''

    return prefix + '.' + pascalCase(IDENTIFIERS.response) + suffix
  }

  /**
   * 构建 index.ts 文件内容
   * @param operations
   * @param namespaces
   * @private
   */
  private _genOperationsContent(operations: Operation[], namespaces: string[]) {
    const { _options } = this
    const { requestConfig, requestContext } = _options

    const declarations = operations.map((item) => {
      return this._genOperationDeclaration(item, namespaces)
    })

    const importSpecifiers: string[] = [IDENTIFIERS.requestAdapter]

    if (!requestConfig?.disabled) {
      importSpecifiers.push('type ' + IDENTIFIERS.requestConfigType)
    }

    if (!requestContext?.disabled) {
      importSpecifiers.push('type ' + IDENTIFIERS.requestContextType)
    }

    declarations.unshift(
      `import { ${importSpecifiers.join(', ')} } from "${_options.adapter}"`,
    )

    return genFileContent(declarations)
  }

  /**
   * 构建每个分组的 index.d.ts 文件内容
   * @param operations
   * @param namespaces
   * @private
   */
  private async _genTypesContent(operations: Operation[], namespaces: string[]) {
    const moduleDeclarations: string[] = []

    for (const item of operations) {
      const keys = alphanumericSort(Object.keys(item.types)) as (keyof OperationTypes)[]
      const typeDeclarations: string[] = []

      for (const key of keys) {
        let definition = item.types[key]

        // 如果是响应类型，且存在自定义 `ResponseWrapper`，则将其包裹在泛型中
        if (key === IDENTIFIERS.response && this._options.responseWrapper) {
          definition = {
            type: 'generic',
            name: IDENTIFIERS.responseWrapper,
            arguments: [definition],
          }
        }

        typeDeclarations.push(
          genTypeDeclaration({
            name: pascalCase(key),
            body: definition,
          }),
        )
      }

      moduleDeclarations.push(
        wrapNamespace(
          pascalCase(item.name),
          typeDeclarations,
        ),
      )
    }

    return genFileContent(moduleDeclarations, namespaces)
  }

  /**
   * 构建每个文档的的 schemas.d.ts 内容（引用类型）
   * @param schemas
   * @private
   */
  private _genSchemasContent(schemas: ParserResult['schemas']) {
    const { responseWrapper } = this._options
    const schemaNamespaces = alphanumericSort(Array.from(schemas.keys()))

    const moduleDeclarations = schemaNamespaces.map((name) => {
      const declarations = alphanumericSort(
        schemas.get(name) || [],
        (item) => item.name,
      )

      return wrapNamespace(
        name,
        declarations.map(genTypeDeclaration),
      )
    })

    // 如果存在自定义 responseRootType，则生成一个泛型类型声明
    if (responseWrapper) {
      moduleDeclarations.unshift(
        genTypeDeclaration({
          name: IDENTIFIERS.responseWrapper + '<T>',
          description: 'Customize response wrapper type',
          body: responseWrapper,
        }),
      )
    }

    return genFileContent(moduleDeclarations, this._namespaces)
  }
}
