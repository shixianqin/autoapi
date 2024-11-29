import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/menus/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Menus.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Menus.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/menus/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menus/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Menus.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Menus.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/wp/v2/menus/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/menus/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Menus.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Menus.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/menus/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menus/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Menus.PostWpV2Id.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.Menus.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/wp/v2/menus/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/menus/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Menus.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Menus.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/wp/v2/menus/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/menus`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Menus.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/menus", options || {});
}

/**
 * @path `/wp/v2/menus`
 */
export function postWpV2(options: {
  headers?: Record<string, any>;
  formData: API.WordpressV2Json.Menus.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/menus", options);
}
