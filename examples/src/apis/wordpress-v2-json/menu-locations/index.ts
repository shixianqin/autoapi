import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/menu-locations/{location}`
 */
export function getWpV2Location(options: {
  pathParams: API.WordpressV2Json.MenuLocations.GetWpV2Location.PathParams;
  queryParams?: API.WordpressV2Json.MenuLocations.GetWpV2Location.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/menu-locations/${options.pathParams.location}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-locations`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.MenuLocations.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/menu-locations", options || {});
}
