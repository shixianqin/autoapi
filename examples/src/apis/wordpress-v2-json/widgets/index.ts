import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/widgets/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Widgets.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Widgets.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/widgets/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/widgets/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Widgets.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Widgets.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/widgets/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/widgets/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Widgets.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Widgets.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/widgets/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/widgets/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Widgets.PostWpV2Id.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.Widgets.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/widgets/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/widgets/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Widgets.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Widgets.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/widgets/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/widgets`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Widgets.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/widgets", options || {});
}

/**
 * @path `/wp/v2/widgets`
 */
export function postWpV2(options: {
  headers?: Record<string, any>;
  formData: API.WordpressV2Json.Widgets.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/widgets", options);
}
