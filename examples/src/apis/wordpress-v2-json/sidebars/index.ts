import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/sidebars/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Sidebars.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Sidebars.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/sidebars/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/sidebars/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Sidebars.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Sidebars.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/sidebars/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/sidebars/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Sidebars.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.Sidebars.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/sidebars/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/sidebars/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Sidebars.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Sidebars.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/sidebars/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/sidebars`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Sidebars.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/sidebars", options || {});
}
