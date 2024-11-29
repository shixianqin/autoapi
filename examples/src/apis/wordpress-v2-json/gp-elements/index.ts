import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/gp_elements/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.GpElements.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.GetWpV2IdAutosaves.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/gp_elements/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.GpElements.PostWpV2IdAutosaves.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.GpElements.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/gp_elements/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.GpElements.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/gp_elements/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.GpElements.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/gp_elements/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.GpElements.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/gp_elements/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.GpElements.PostWpV2Id.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.GpElements.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/gp_elements/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.GpElements.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/gp_elements/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.GpElements.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.GetWpV2ParentRevisions.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/gp_elements/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.GpElements.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.GpElements.GetWpV2Parent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/gp_elements/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/gp_elements`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.GpElements.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/gp_elements", options || {});
}

/**
 * @path `/wp/v2/gp_elements`
 */
export function postWpV2(options?: {
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.GpElements.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/gp_elements", options || {});
}
