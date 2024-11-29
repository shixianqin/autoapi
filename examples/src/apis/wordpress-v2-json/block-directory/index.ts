import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/block-directory/search`
 */
export function getWpV2Search(options: {
  queryParams: API.WordpressV2Json.BlockDirectory.GetWpV2Search.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/block-directory/search", options);
}
