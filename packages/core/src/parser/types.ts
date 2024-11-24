import type { HttpMethods, Operation, OperationMeta, TypeDeclaration } from './schema-types'
import type { SchemaLocations } from '../identifiers'
import type { OpenAPI } from 'openapi-types'

export * from './schema-types'

/**
 * 过滤条件
 * Paths, Tags, Customize handler
 */
export type Filters = FilterPaths | (FilterPaths | string)[] | ((meta: OperationMeta) => boolean)

export interface FilterPaths {
  [Path: string]: boolean | HttpMethods[]
}

export interface ParserResult {
  document: OpenAPI.Document | null
  operations: Map<string, Operation[]>
  schemas: Map<string, TypeDeclaration[]>
}

export type OperationHandlers<T = Partial<Operation>> = {
  [Method in HttpMethods]?: T | ((operation: Operation) => void | T | Promise<void | T>)
}

export type Source<T = string | object> = T | (() => T | Promise<T>)

export interface ParserOptions {
  /**
   * 文档源
   * @example `OpenAPI/Swagger` document link
   * {
   *   source: "https://petstore3.swagger.io/api/v3/openapi.json"
   *   source: "https://petstore3.swagger.io/api/v3/openapi.yaml"
   *   source: path.resolve(__dirname, "./docs/local-openapi-document.json")
   *   source: path.resolve(__dirname, "./docs/local-openapi-document.yaml")
   * }
   * @example `OpenAPI/Swagger` JSON document
   * {
   *   source: { ... }
   * }
   * @example Function
   * {
   *   source: ()=> "https://your.openapi.link/api.yaml/or/json"
   *   source: ()=> ({ ... })
   * }
   * @example Async Function
   * {
   *   source: async ()=> "https://your.openapi.link/api.yaml/or/json"
   *   source: async ()=> ({ ... })
   * }
   */
  source?: Source

  /**
   * 过滤（包含）
   */
  include?: Filters

  /**
   * 过滤（排除）
   */
  exclude?: Filters

  /**
   * 获取路径
   * @default meta.originalPath
   */
  getPath?: (meta: OperationMeta) => string

  /**
   * 获取分组
   * @default meta.operation.tags[0] || 'Main'
   */
  getTag?: (meta: OperationMeta) => string

  /**
   * 获取方法名
   * @default meta.operation.operationId || meta.path
   */
  getName?: (meta: OperationMeta) => string

  /**
   * 获取属性名
   * @param name
   * @param context
   */
  getPropertyName?: (name: string, location?: SchemaLocations) => string

  /**
   * 方法名的命名格式，默认 `camel`
   */
  nameCase?: 'camel' | 'pascal' | 'snake'

  // folderNameCase?: 'kebab' | 'pascal' | 'camel' | 'snake'
  // fileNameCase?: 'kebab' | 'pascal' | 'camel' | 'snake'

  /**
   * 命名优化
   */
  nameOptimization?: boolean
  // nameOptimization?: boolean | NameOptimization

  /**
   * 是否解析非成功（200-299）响应结构
   */
  parseUnsuccessfulResponses?: boolean

  /**
   * 验证状态码
   * @default 200-299
   * @param code
   */
  validateStatus?: (code: number) => boolean

  /**
   * 自定义
   */
  paths?: {
    [Path: string]: OperationHandlers
  }
}

export interface NameConflictInfo {
  tag: string
  count: number
  name: string
  renamedAs: string
}

export interface ParserHooks {
  onNameConflict?: (info: NameConflictInfo) => void
  onDocumentDownloaded?: (document: OpenAPI.Document) => void
}
