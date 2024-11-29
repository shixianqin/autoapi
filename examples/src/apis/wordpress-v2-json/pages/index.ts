import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/pages/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Pages.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.Pages.GetWpV2IdAutosaves.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/pages/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/pages/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Pages.PostWpV2IdAutosaves.PathParams;
  formData?: API.WordpressV2Json.Pages.PostWpV2IdAutosaves.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/pages/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/pages/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Pages.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Pages.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/pages/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/pages/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Pages.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Pages.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/wp/v2/pages/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/pages/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Pages.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Pages.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/pages/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/pages/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Pages.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.Pages.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/wp/v2/pages/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/pages/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Pages.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Pages.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/wp/v2/pages/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/pages/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.Pages.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.Pages.GetWpV2ParentRevisions.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/pages/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/pages/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.Pages.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.Pages.GetWpV2Parent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/pages/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/pages`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Pages.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/pages", options || {});
}

/**
 * @path `/wp/v2/pages`
 */
export function postWpV2(options?: {
  formData?: API.WordpressV2Json.Pages.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/pages", options || {});
}
