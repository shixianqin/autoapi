import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/categories/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Categories.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Categories.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/categories/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/categories/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Categories.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Categories.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/categories/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/categories/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Categories.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Categories.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/categories/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/categories/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Categories.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.Categories.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/categories/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/categories/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Categories.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Categories.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/categories/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/categories`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Categories.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/categories", options || {});
}

/**
 * @path `/wp/v2/categories`
 */
export function postWpV2(options: {
  formData: API.WordpressV2Json.Categories.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/categories", options);
}
