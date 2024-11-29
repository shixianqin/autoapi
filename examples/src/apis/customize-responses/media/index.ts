import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/media`
 */
export function getWpV2(options?: {
  queryParams?: API.CustomizeResponses.Media.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeResponses.Media.GetWpV2.Response>(
    "get",
    "/wp/v2/media",
    options || {},
  );
}

/**
 * @path `/wp/v2/media`
 */
export function postWpV2(options?: {
  formData?: API.CustomizeResponses.Media.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/media", options || {});
}
