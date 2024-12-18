import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/media/{id}/edit`
 */
export function postWpV2IdEdit(options: {
  pathParams: API.WordpressV2Json.Media.PostWpV2IdEdit.PathParams;
  formData: API.WordpressV2Json.Media.PostWpV2IdEdit.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/media/${options.pathParams.id}/edit`,
    options,
  );
}

/**
 * @path `/wp/v2/media/{id}/post-process`
 */
export function postWpV2IdProcess(options: {
  pathParams: API.WordpressV2Json.Media.PostWpV2IdProcess.PathParams;
  formData: API.WordpressV2Json.Media.PostWpV2IdProcess.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/media/${options.pathParams.id}/post-process`,
    options,
  );
}

/**
 * @path `/wp/v2/media/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Media.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Media.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/media/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/media/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Media.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Media.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/wp/v2/media/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/media/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Media.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Media.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/media/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/media/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Media.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.Media.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/wp/v2/media/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/media/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Media.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Media.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/wp/v2/media/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/media`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Media.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/media", options || {});
}

/**
 * @path `/wp/v2/media`
 */
export function postWpV2(options?: {
  formData?: API.WordpressV2Json.Media.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/media", options || {});
}
