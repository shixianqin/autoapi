import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/types/{type}`
 */
export function getWpV2Type(options: {
  pathParams: API.WordpressV2Json.Types.GetWpV2Type.PathParams;
  queryParams?: API.WordpressV2Json.Types.GetWpV2Type.QueryParams;
  headers?: API.WordpressV2Json.Types.GetWpV2Type.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/types/${options.pathParams.type}`,
    options,
  );
}

/**
 * @path `/wp/v2/types`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Types.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Types.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/types", options || {});
}
