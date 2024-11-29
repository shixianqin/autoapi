import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/blocks/{id}/autosaves`
 */
export function getWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Blocks.GetWpV2IdAutosaves.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.GetWpV2IdAutosaves.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/blocks/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks/{id}/autosaves`
 */
export function postWpV2IdAutosaves(options: {
  pathParams: API.WordpressV2Json.Blocks.PostWpV2IdAutosaves.PathParams;
  formData?: API.WordpressV2Json.Blocks.PostWpV2IdAutosaves.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/blocks/${options.pathParams.id}/autosaves`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Blocks.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/blocks/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Blocks.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/wp/v2/blocks/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/blocks/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Blocks.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/blocks/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Blocks.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.Blocks.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/blocks/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Blocks.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/wp/v2/blocks/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/blocks/{parent}/revisions`
 */
export function getWpV2ParentRevisions(options: {
  pathParams: API.WordpressV2Json.Blocks.GetWpV2ParentRevisions.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.GetWpV2ParentRevisions.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/blocks/${options.pathParams.parent}/revisions`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks/{parent}`
 */
export function getWpV2Parent(options: {
  pathParams: API.WordpressV2Json.Blocks.GetWpV2Parent.PathParams;
  queryParams?: API.WordpressV2Json.Blocks.GetWpV2Parent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/blocks/${options.pathParams.parent}`,
    options,
  );
}

/**
 * @path `/wp/v2/blocks`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Blocks.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/blocks", options || {});
}

/**
 * @path `/wp/v2/blocks`
 */
export function postWpV2(options?: {
  formData?: API.WordpressV2Json.Blocks.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/blocks", options || {});
}
