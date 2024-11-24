import type { HttpMethods } from './parser'

export interface RequestOptions<Config extends object = object, Context extends object = object> {
  /**
   * Path params
   */
  pathParams?: Record<string, any>

  /**
   * Query params
   */
  queryParams?: Record<string, any>

  /**
   * Header params
   */
  headers?: Record<string, any>

  /**
   * Form data (body)
   */
  formData?: Record<string, any>

  /**
   * Body data
   */
  body?: any

  /**
   * Request config
   */
  config?: Config

  /**
   * Request context
   */
  context?: Context
}

export type Adapter<T> = (method: HttpMethods, path: string, options: RequestOptions) => Promise<T>
