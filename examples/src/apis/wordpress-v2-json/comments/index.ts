import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/comments/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Comments.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Comments.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/comments/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/comments/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Comments.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Comments.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/comments/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/comments/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Comments.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Comments.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/comments/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/comments/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Comments.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.Comments.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/comments/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/comments/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Comments.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Comments.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/comments/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/comments`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Comments.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/comments", options || {});
}

/**
 * @path `/wp/v2/comments`
 */
export function postWpV2(options?: {
  formData?: API.WordpressV2Json.Comments.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/comments", options || {});
}
