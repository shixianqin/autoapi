import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/template-parts/lookup`
 */
export function getWpV2Lookup(options: {
  queryParams: API.WordpressV2Json.TemplateParts.GetWpV2Lookup.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/template-parts/lookup", options);
}

/**
 * @path `/wp/v2/template-parts/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.TemplateParts.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.GetWpV2IdAutosaves.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/template-parts/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.TemplateParts.PostWpV2IdAutosaves.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.TemplateParts.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/template-parts/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.TemplateParts.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/template-parts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.TemplateParts.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/template-parts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.TemplateParts.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/template-parts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.TemplateParts.PostWpV2Id.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.TemplateParts.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/template-parts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.TemplateParts.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/template-parts/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.TemplateParts.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.GetWpV2ParentRevisions.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/template-parts/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.TemplateParts.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.TemplateParts.GetWpV2Parent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/template-parts/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/template-parts`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.TemplateParts.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/template-parts", options || {});
}

/**
 * @path `/wp/v2/template-parts`
 */
export function postWpV2(options: {
  headers?: Record<string, any>;
  formData: API.WordpressV2Json.TemplateParts.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/template-parts", options);
}
