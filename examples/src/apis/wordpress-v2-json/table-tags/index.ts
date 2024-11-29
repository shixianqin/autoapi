import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/table_tags/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.TableTags.DeleteWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TableTags.DeleteWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/table_tags/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/table_tags/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.TableTags.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TableTags.GetWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/table_tags/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/table_tags/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.TableTags.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TableTags.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/table_tags/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/table_tags/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.TableTags.PostWpV2Id.PathParams;
  headers?: Record<string, any>;
  formData?: API.WordpressV2Json.TableTags.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/table_tags/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/table_tags/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.TableTags.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.TableTags.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/table_tags/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/table_tags`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.TableTags.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/table_tags", options || {});
}

/**
 * @path `/wp/v2/table_tags`
 */
export function postWpV2(options: {
  headers?: Record<string, any>;
  formData: API.WordpressV2Json.TableTags.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/table_tags", options);
}
