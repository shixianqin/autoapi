import type { ParserOptions, TypeDefinition } from '../parser'

export interface ParameterOptions {
  assignType?: boolean
  required?: boolean
  disabled?: boolean
}

export interface GeneratorOptions extends ParserOptions {
  /**
   * Document namespace
   */
  namespace: string

  /**
   * @example
   * {
   *   adapter: `path/to/adapter/file`
   * }
   */
  adapter: string

  /**
   * 根命名空间
   * @default API
   */
  rootNamespace?: string

  /**
   * 请求配置，例如 [AxiosRequestConfig](https://axios-http.com/docs/req_config)
   */
  requestConfig?: ParameterOptions

  /**
   * 请求上下文，适用于 SSR
   */
  requestContext?: ParameterOptions

  /**
   * @example
   * {
   *   ResponseWrapper: {
   *     type: 'object',
   *     properties: [
   *       {
   *         name: 'data',
   *         type: 'T'
   *       }
   *     ]
   *   }
   * }
   */
  responseWrapper?: TypeDefinition

  /**
   * @example `.`, `.data`, `.foo.bar`
   */
  responseReturnPath?: string
}

export interface FileItem {
  dir: string
  name: string
  content: string
}
