import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/settings`
 */
export function getWpV2(options?: {
  headers?: API.WordpressV2Json.Settings.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/settings", options || {});
}

/**
 * @path `/wp/v2/settings`
 */
export function patchWpV2(options?: {
  queryParams?: API.WordpressV2Json.Settings.PatchWpV2.QueryParams;
  headers?: API.WordpressV2Json.Settings.PatchWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("patch", "/wp/v2/settings", options || {});
}

/**
 * @path `/wp/v2/settings`
 */
export function postWpV2(options?: {
  headers?: API.WordpressV2Json.Settings.PostWpV2.Headers;
  formData?: API.WordpressV2Json.Settings.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/settings", options || {});
}

/**
 * @path `/wp/v2/settings`
 */
export function putWpV2(options?: {
  queryParams?: API.WordpressV2Json.Settings.PutWpV2.QueryParams;
  headers?: API.WordpressV2Json.Settings.PutWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", "/wp/v2/settings", options || {});
}
