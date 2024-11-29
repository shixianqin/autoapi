import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/categories`
 */
export function getWpV2(options?: {
  queryParams?: API.CustomizeResponses.Categories.GetWpV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeResponses.Categories.GetWpV2.Response>(
    "get",
    "/wp/v2/categories",
    options || {},
  );
}

/**
 * @path `/wp/v2/categories`
 */
export function postWpV2(options: {
  formData: API.CustomizeResponses.Categories.PostWpV2.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/categories", options);
}
