import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/navigation/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Navigation.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.GetWpV2IdAutosaves.QueryParams;
  headers?: API.WordpressV2Json.Navigation.GetWpV2IdAutosaves.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/navigation/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Navigation.PostWpV2IdAutosaves.PathParams;
  headers?: API.WordpressV2Json.Navigation.PostWpV2IdAutosaves.Headers;
  formData?: API.WordpressV2Json.Navigation.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/navigation/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Navigation.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.DeleteWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Navigation.DeleteWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/navigation/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Navigation.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.GetWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Navigation.GetWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/navigation/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Navigation.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.PatchWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Navigation.PatchWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/navigation/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Navigation.PostWpV2Id.PathParams;
  headers?: API.WordpressV2Json.Navigation.PostWpV2Id.Headers;
  formData?: API.WordpressV2Json.Navigation.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/navigation/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Navigation.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.PutWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Navigation.PutWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/navigation/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.Navigation.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.GetWpV2ParentRevisions.QueryParams;
  headers?: API.WordpressV2Json.Navigation.GetWpV2ParentRevisions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/navigation/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.Navigation.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.Navigation.GetWpV2Parent.QueryParams;
  headers?: API.WordpressV2Json.Navigation.GetWpV2Parent.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/navigation/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/navigation`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Navigation.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Navigation.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/navigation", options || {});
}

/**
 * @path `/wp/v2/navigation`
 */
export function postWpV2(options?: {
  headers?: API.WordpressV2Json.Navigation.PostWpV2.Headers;
  formData?: API.WordpressV2Json.Navigation.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/navigation", options || {});
}
