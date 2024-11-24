import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/plugins/{plugin}`
 */
export function deleteWpV2Plugin(options: {
  pathParams: API.WordpressV2Json.Plugins.DeleteWpV2Plugin.PathParams;
  queryParams?: API.WordpressV2Json.Plugins.DeleteWpV2Plugin.QueryParams;
  headers?: API.WordpressV2Json.Plugins.DeleteWpV2Plugin.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/plugins/${options.pathParams.plugin}`,
    options,
  );
}

/**
 * @path `/wp/v2/plugins/{plugin}`
 */
export function getWpV2Plugin(options: {
  pathParams: API.WordpressV2Json.Plugins.GetWpV2Plugin.PathParams;
  queryParams?: API.WordpressV2Json.Plugins.GetWpV2Plugin.QueryParams;
  headers?: API.WordpressV2Json.Plugins.GetWpV2Plugin.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/plugins/${options.pathParams.plugin}`,
    options,
  );
}

/**
 * @path `/wp/v2/plugins/{plugin}`
 */
export function patchWpV2Plugin(options: {
  pathParams: API.WordpressV2Json.Plugins.PatchWpV2Plugin.PathParams;
  queryParams?: API.WordpressV2Json.Plugins.PatchWpV2Plugin.QueryParams;
  headers?: API.WordpressV2Json.Plugins.PatchWpV2Plugin.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/plugins/${options.pathParams.plugin}`,
    options,
  );
}

/**
 * @path `/wp/v2/plugins/{plugin}`
 */
export function postWpV2Plugin(options: {
  pathParams: API.WordpressV2Json.Plugins.PostWpV2Plugin.PathParams;
  headers?: API.WordpressV2Json.Plugins.PostWpV2Plugin.Headers;
  formData?: API.WordpressV2Json.Plugins.PostWpV2Plugin.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/plugins/${options.pathParams.plugin}`,
    options,
  );
}

/**
 * @path `/wp/v2/plugins/{plugin}`
 */
export function putWpV2Plugin(options: {
  pathParams: API.WordpressV2Json.Plugins.PutWpV2Plugin.PathParams;
  queryParams?: API.WordpressV2Json.Plugins.PutWpV2Plugin.QueryParams;
  headers?: API.WordpressV2Json.Plugins.PutWpV2Plugin.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/plugins/${options.pathParams.plugin}`,
    options,
  );
}

/**
 * @path `/wp/v2/plugins`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Plugins.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Plugins.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/plugins", options || {});
}

/**
 * @path `/wp/v2/plugins`
 */
export function postWpV2(options: {
  headers?: API.WordpressV2Json.Plugins.PostWpV2.Headers;
  formData: API.WordpressV2Json.Plugins.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/plugins", options);
}
