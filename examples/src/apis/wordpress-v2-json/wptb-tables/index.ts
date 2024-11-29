import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/wptb-tables/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.WptbTables.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.WptbTables.GetWpV2IdAutosaves.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/wptb-tables/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.WptbTables.PostWpV2IdAutosaves.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.WptbTables.PostWpV2IdAutosaves.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/wptb-tables/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.WptbTables.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.WptbTables.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/wptb-tables/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.WptbTables.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.WptbTables.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/wptb-tables/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.WptbTables.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.WptbTables.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/wptb-tables/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.WptbTables.PostWpV2Id.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.WptbTables.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/wptb-tables/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.WptbTables.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.WptbTables.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/wptb-tables/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.WptbTables.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.WptbTables.GetWpV2Parent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/wptb-tables/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/wptb-tables`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.WptbTables.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/wptb-tables", options || {});
}

/**
 * @path `/wp/v2/wptb-tables`
 */
export function postWpV2(options?: {
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.WptbTables.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/wptb-tables", options || {});
}
