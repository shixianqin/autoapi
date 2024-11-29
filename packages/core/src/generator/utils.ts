import { type Options as PrettierOptions, format } from 'prettier'
import { alphanumericSort } from './alphanumeric-sort'

import type {
  InferenceType,
  ObjectType,
  Operation,
  PropertySignature,
  TypeDeclaration,
  TypeDefinition,
} from '../parser'

/**
 * 数据验证的属性列表，这些属性会被转换为注释，以提高类型文档可读性
 */
const VALIDATION_KEYS: (keyof Required<PropertySignature>['schema'])[] = [
  'default',
  'format',
  'multipleOf',
  'maximum',
  'minimum',
  'maxLength',
  'minLength',
  'maxItems',
  'minItems',
  'maxProperties',
  'minProperties',
]

/**
 * 转换为安全的属性名，不符合规则的将会被包裹引号
 * @rule 必须以 `大小写字母`、`_`、`$` 开头，并且后面只能跟着 `大小写字母`、`数字`、`_`、`$`
 * @param key
 */
export function toSafeKey(key: string) {
  return /^[a-zA-Z_$][\w_$]*$/.test(key) ? key : JSON.stringify(key)
}

/**
 * 构建注释（多行）
 * @param rows
 */
export function genComments(rows: (string | number | boolean | undefined)[]) {
  const separator = '\n * '

  const comments = rows
    // @ts-expect-error ignore forever
    .filter<string>(Boolean)
    .map((item) => {
      return item.split(/\n\s*\*\s|\n/).join(separator)
    })
    .join(separator)

  if (comments) {
    // 转译注释内容中可能存在的破坏多行注释格式的 `*/` 字符
    const safeComments = comments.replace(/\*\//g, '*\\/')

    return `/**\n * ${safeComments}\n */\n`
  }

  return ''
}

/**
 * 构建请求方法的注释
 * @param operation
 */
export function genOperationComments(operation: Operation) {
  const { summary, description } = operation

  return genComments([
    description,
    summary && summary !== description && (description ? `@summary ${summary}` : summary),
    `@path \`${operation.originalPath}\``,
    operation.docs && `@docs ${operation.docs}`,
    operation.deprecated && '@deprecated',
  ])
}

/**
 * 判断类型是否存在必填项
 * @param definition
 */
export function hasRequired(definition: TypeDefinition | undefined) {
  if (definition && typeof definition === 'object') {
    switch (definition.type) {
      case 'generic':
      case 'enum': {
        return true
      }

      case 'inference': {
        return definition.required
      }

      case 'reference': {
        return hasRequired(definition.body)
      }

      case 'object': {
        return definition.properties.some((item) => item.required)
      }

      default: {
        return definition.items.some(hasRequired)
      }
    }
  }

  return !!definition
}

/**
 * 构建复合类型体
 * @param items
 * @param separator
 */
export function genCompositeTypeBody(items: TypeDefinition[], separator: '&' | '|' | ',') {
  const bodies = [...new Set(items.map(genTypeBody))]

  // 存在多个类型，才使用括号包裹（确保类型安全）
  // 因为 `interface` 的判断条件是以 `{` 开头
  // 所以当只有一个类型的时候不能包裹括号
  if (bodies.length > 1) {
    return `(${bodies.join(separator)})`
  }

  return bodies[0] || 'any'
}

/**
 * 构建 Object 类型体
 * @param definition
 * @param unsorted 是否不排序
 */
export function genObjectTypeBody(definition: ObjectType, unsorted?: boolean) {
  let { properties } = definition

  // 排序
  if (!unsorted) {
    properties = alphanumericSort(properties, (item) => {
      // 附加属性放在最后
      return item.additional ? null : item.name
    })
  }

  const stringifiedProperties: string[] = []

  for (const item of properties) {
    if (item.disabled) {
      continue
    }

    const schema = item.schema || {}

    const comments = genComments([
      item.description === item.name ? '' : item.description,
      ...VALIDATION_KEYS.map((key) => schema[key] && `@${key} ${schema[key]}`),
      item.deprecated && '@deprecated',
    ])

    const tokens: string[] = [
      /**
       * Comments
       */
      comments,

      /**
       * Property
       */
      item.additional ? `[P: string]` : toSafeKey(item.name),

      /**
       * Separator
       */
      item.required || item.additional ? ': ' : '?: ',

      /**
       * Type
       */
      genTypeBody(item.type),
    ]

    stringifiedProperties.push(tokens.join(''))
  }

  return wrapObject(stringifiedProperties)
}

/**
 * 构建类型体
 * @param definition
 */
export function genTypeBody(definition: TypeDefinition): string {
  if (definition && typeof definition === 'object') {
    switch (definition.type) {
      case 'object': {
        return genObjectTypeBody(definition)
      }

      case 'array': {
        return wrapArray(genCompositeTypeBody(definition.items, '|'))
      }

      case 'enum': {
        const items = alphanumericSort(definition.items).map((item) => {
          return JSON.stringify(item)
        })

        // 需要使用括号包裹，以确保类型安全
        return `(${items.join('|')})`
      }

      case 'intersection': {
        return genCompositeTypeBody(definition.items, '&')
      }

      case 'union': {
        return genCompositeTypeBody(definition.items, '|')
      }

      case 'generic': {
        return `${definition.name}<${genCompositeTypeBody(definition.arguments, ',')}>`
      }

      case 'inference': {
        return inferType(definition.input, definition)
      }

      case 'reference': {
        return definition.value
      }
    }
  }

  // 如果类型是字符串（字面量），需要使用括号包裹，以确保类型安全
  return typeof definition === 'string' ? `(${definition})` : 'any'
}

/**
 * 构建类型声明（interface/type）
 * @param item
 * @private
 */
export function genTypeDeclaration(item: TypeDeclaration) {
  const body = genTypeBody(item.body)
  const { name, description } = item

  const comments = genComments([
    description === name ? '' : description,
    item.deprecated && `@deprecated`,
  ])

  // 如果第一个字符是 `{`，则认为是 `interface` 类型
  if (body[0] === '{') {
    return comments + `interface ${name} ${body}`
  }

  return comments + `type ${name} = ${body}`
}

/**
 * 根据输入的数据推断出类型
 * 这适合在没有文档或者文档没有定义响应结构的情况，可根据接口响应数据生成类型声明
 * @param input
 * @param inferenceType
 */
export function inferType(input: any, inferenceType: InferenceType): string {
  if (input === null || input === undefined) {
    return 'any'
  }

  const type = typeof input

  switch (type) {
    case 'object': {
      /**
       * Array
       */
      if (Array.isArray(input)) {
        const items = new Set(
          input.map((item) => {
            return inferType(item, inferenceType)
          }),
        )

        // 如果数组中存在 `null`,`undefined` 数据，则集合中会出现 `any` 类型
        // 但是 `any` 会覆盖掉其他正常的类型声明，所以需要将其替换为 `null | undefined`
        if (items.size > 1 && items.has('any')) {
          items.delete('any')
          items.add('null')
          items.add('undefined')
        }

        return wrapArray([...items].join('|') || 'any')
      }

      /**
       * Object
       */
      return wrapObject(
        alphanumericSort(Object.keys(input)).map((key) => {
          return toSafeKey(key) + (inferenceType.required ? ':' : '?:') + inferType(input[key], inferenceType)
        }),
      )
    }

    // 尽管 json 中大概率不会出现 function 类型，但是还是要兼容一下
    // 并且使用括号包裹，以保证类型安全
    case 'function': {
      return '((...args: any[]) => any)'
    }

    // case 'string':
    // case 'number':
    // case 'bigint':
    // case 'boolean':
    // case 'symbol':
    default: {
      return type
    }
  }
}

/**
 * 生成文件内容并格式化
 * @param declarations
 * @param namespaces
 */
export async function genFileContent(declarations: string[], namespaces?: string[]) {
  let content = declarations.join('\n\n')

  if (namespaces) {
    let prefix = ''
    let suffix = ''

    for (const name of namespaces) {
      prefix += `namespace ${name} {\n`
      suffix += '\n}'
    }

    content = 'declare ' + prefix + content + suffix
  }

  const options: PrettierOptions = {
    parser: 'babel-ts',
    semi: true,
    endOfLine: 'auto',
    // printWidth: 999999999,
  }

  return format(content, options).catch((err) => {
    console.error(err)

    return content
  })
}

/**
 * 包裹对象
 * @param properties
 */
export function wrapObject(properties: string[]) {
  return `{\n${properties.join(';\n')}\n}`
}

/**
 * 包裹数组
 */
export function wrapArray(type: string) {
  // 使用括号包裹，以确保类型安全
  if (type[0] !== '(') {
    type = `(${type})`
  }

  // 复合类型结构都使用泛型 `Array<T>`，以提高可读性
  // `|` 联合类型
  // `&` 交叉类型
  // `{` 对象类型
  // `[` 数组类型
  // `<` 范型
  return /[|&{[<]/.test(type) ? `Array<${type}>` : `${type}[]`
}

/**
 * 包裹命名空间
 * @param name
 * @param declarations
 */
export function wrapNamespace(name: string, declarations: string[]) {
  return `namespace ${name} {\n${declarations.join('\n\n')}\n}`
}
