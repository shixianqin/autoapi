import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/posts/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Posts.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.Posts.GetWpV2IdAutosaves.QueryParams;
  headers?: API.WordpressV2Json.Posts.GetWpV2IdAutosaves.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/posts/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/posts/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Posts.PostWpV2IdAutosaves.PathParams;
  headers?: API.WordpressV2Json.Posts.PostWpV2IdAutosaves.Headers;
  formData?: API.WordpressV2Json.Posts.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/posts/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/posts/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Posts.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Posts.DeleteWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Posts.DeleteWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/posts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/posts/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Posts.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Posts.GetWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Posts.GetWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/wp/v2/posts/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/posts/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Posts.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Posts.PatchWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Posts.PatchWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/posts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/posts/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Posts.PostWpV2Id.PathParams;
  headers?: API.WordpressV2Json.Posts.PostWpV2Id.Headers;
  formData?: API.WordpressV2Json.Posts.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/wp/v2/posts/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/posts/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Posts.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Posts.PutWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Posts.PutWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/wp/v2/posts/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/posts/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.Posts.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.Posts.GetWpV2ParentRevisions.QueryParams;
  headers?: API.WordpressV2Json.Posts.GetWpV2ParentRevisions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/posts/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/posts/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.Posts.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.Posts.GetWpV2Parent.QueryParams;
  headers?: API.WordpressV2Json.Posts.GetWpV2Parent.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/posts/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/posts`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Posts.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Posts.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/posts", options || {});
}

/**
 * @path `/wp/v2/posts`
 */
export function postWpV2(options?: {
  headers?: API.WordpressV2Json.Posts.PostWpV2.Headers;
  formData?: API.WordpressV2Json.Posts.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/posts", options || {});
}
