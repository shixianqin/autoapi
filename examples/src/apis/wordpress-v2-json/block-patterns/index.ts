import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/block-patterns/categories`
 */
export function getWpV2Categories(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/block-patterns/categories", options || {});
}

/**
 * @path `/wp/v2/block-patterns/patterns`
 */
export function getWpV2Patterns(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/block-patterns/patterns", options || {});
}
