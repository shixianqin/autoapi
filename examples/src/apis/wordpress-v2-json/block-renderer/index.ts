import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/block-renderer/{name}`
 */
export function getWpV2Name(options: {
  pathParams: API.WordpressV2Json.BlockRenderer.GetWpV2Name.PathParams;
  queryParams?: API.WordpressV2Json.BlockRenderer.GetWpV2Name.QueryParams;
  headers?: API.WordpressV2Json.BlockRenderer.GetWpV2Name.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/block-renderer/${options.pathParams.name}`,
    options,
  );
}

/**
 * @path `/wp/v2/block-renderer/{name}`
 */
export function postWpV2Name(options: {
  pathParams: API.WordpressV2Json.BlockRenderer.PostWpV2Name.PathParams;
  headers?: API.WordpressV2Json.BlockRenderer.PostWpV2Name.Headers;
  formData?: API.WordpressV2Json.BlockRenderer.PostWpV2Name.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/block-renderer/${options.pathParams.name}`,
    options,
  );
}
