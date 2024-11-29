import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/statuses/{status}`
 */
export function getWpV2Status(options: {
  pathParams: API.WordpressV2Json.Statuses.GetWpV2Status.PathParams;
  queryParams?: API.WordpressV2Json.Statuses.GetWpV2Status.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/statuses/${options.pathParams.status}`,
    options,
  );
}

/**
 * @path `/wp/v2/statuses`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Statuses.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/statuses", options || {});
}
