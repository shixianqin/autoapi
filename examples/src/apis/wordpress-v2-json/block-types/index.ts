import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/block-types/{namespace}`
 */
export function getWpV2Namespace(options: {
  pathParams: API.WordpressV2Json.BlockTypes.GetWpV2Namespace.PathParams;
  queryParams?: API.WordpressV2Json.BlockTypes.GetWpV2Namespace.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/block-types/${options.pathParams.namespace}`,
    options,
  );
}

/**
 * @path `/wp/v2/block-types`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.BlockTypes.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/block-types", options || {});
}
