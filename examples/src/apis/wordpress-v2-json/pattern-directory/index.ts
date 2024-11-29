import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/pattern-directory/patterns`
 */
export function getWpV2Patterns(options?: {
  queryParams?: API.WordpressV2Json.PatternDirectory.GetWpV2Patterns.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    "/wp/v2/pattern-directory/patterns",
    options || {},
  );
}
