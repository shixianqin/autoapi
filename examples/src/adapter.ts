import type { IncomingMessage } from 'node:http'
import type { RequestOptions } from '@autoapi/cli'
import axios, { type AxiosRequestConfig } from 'axios'

export type RequestConfig = AxiosRequestConfig

export interface RequestContext {
  req?: IncomingMessage | null
  locale?: string | null
}

const instance = axios.create({
  baseURL: 'https://api.example.com',
})

/**
 * 获取 bodyData，如果发现有 formData，则将其转换为 FormData 实例
 * @param options
 */
function getBodyData(options: RequestOptions) {
  const { formData } = options

  if (formData) {
    const form = new FormData()

    for (const key in formData) {
      form.append(key, formData[key])
    }

    return form
  }

  return options.body
}

export function request<T>(
  method: string,
  url: string,
  options: RequestOptions<RequestConfig, RequestContext>,
) {
  const config: AxiosRequestConfig = {
    ...options.config,
    method,
    url,
    params: options.queryParams,
    data: getBodyData(options),
  }

  if (options.context?.req) {
    config.headers = {
      ...config.headers,
      'cookie': options.context.req.headers.cookie,
      'x-locale': options.context.locale,
    }
  }

  return instance<T>(config)
}
