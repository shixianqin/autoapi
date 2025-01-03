import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/search`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Search.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/search", options || {});
}
