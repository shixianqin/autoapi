import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/templates/lookup`
 */
export function getWpV2Lookup(options: {
  queryParams: API.WordpressV2Json.Templates.GetWpV2Lookup.QueryParams;
  headers?: API.WordpressV2Json.Templates.GetWpV2Lookup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/templates/lookup", options);
}

/**
 * @path `/wp/v2/templates/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Templates.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.Templates.GetWpV2IdAutosaves.QueryParams;
  headers?: API.WordpressV2Json.Templates.GetWpV2IdAutosaves.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/templates/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Templates.PostWpV2IdAutosaves.PathParams;
  headers?: API.WordpressV2Json.Templates.PostWpV2IdAutosaves.Headers;
  formData?: API.WordpressV2Json.Templates.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/templates/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Templates.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Templates.DeleteWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Templates.DeleteWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/templates/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Templates.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Templates.GetWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Templates.GetWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/templates/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Templates.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Templates.PatchWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Templates.PatchWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/templates/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Templates.PostWpV2Id.PathParams;
  headers?: API.WordpressV2Json.Templates.PostWpV2Id.Headers;
  formData?: API.WordpressV2Json.Templates.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/templates/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Templates.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Templates.PutWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Templates.PutWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/templates/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.Templates.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.Templates.GetWpV2ParentRevisions.QueryParams;
  headers?: API.WordpressV2Json.Templates.GetWpV2ParentRevisions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/templates/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/templates/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.Templates.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.Templates.GetWpV2Parent.QueryParams;
  headers?: API.WordpressV2Json.Templates.GetWpV2Parent.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/templates/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/templates`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Templates.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Templates.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/templates", options || {});
}

/**
 * @path `/wp/v2/templates`
 */
export function postWpV2(options: {
  headers?: API.WordpressV2Json.Templates.PostWpV2.Headers;
  formData: API.WordpressV2Json.Templates.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/templates", options);
}
