import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/menu-items/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.MenuItems.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.MenuItems.GetWpV2IdAutosaves.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.GetWpV2IdAutosaves.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/menu-items/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.MenuItems.PostWpV2IdAutosaves.PathParams;
  headers?: API.WordpressV2Json.MenuItems.PostWpV2IdAutosaves.Headers;
  formData?: API.WordpressV2Json.MenuItems.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/menu-items/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.MenuItems.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.MenuItems.DeleteWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.DeleteWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/menu-items/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.MenuItems.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.MenuItems.GetWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.GetWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/menu-items/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.MenuItems.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.MenuItems.PatchWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.PatchWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/menu-items/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.MenuItems.PostWpV2Id.PathParams;
  headers?: API.WordpressV2Json.MenuItems.PostWpV2Id.Headers;
  formData?: API.WordpressV2Json.MenuItems.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/menu-items/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.MenuItems.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.MenuItems.PutWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.PutWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/menu-items/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.MenuItems.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.MenuItems.GetWpV2Parent.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.GetWpV2Parent.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/menu-items/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/menu-items`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.MenuItems.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.MenuItems.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/menu-items", options || {});
}

/**
 * @path `/wp/v2/menu-items`
 */
export function postWpV2(options?: {
  headers?: API.WordpressV2Json.MenuItems.PostWpV2.Headers;
  formData?: API.WordpressV2Json.MenuItems.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/menu-items", options || {});
}
