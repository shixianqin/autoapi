import { request } from "@/adapter";

/**
 * @path `/wp/v2/categories`
 */
export function getWpV2(options?: {
  queryParams?: API.CustomizeResponses.Categories.GetWpV2.QueryParams;
  headers?: API.CustomizeResponses.Categories.GetWpV2.Headers;
  config?: object;
  context?: object;
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
  headers?: API.CustomizeResponses.Categories.PostWpV2.Headers;
  formData: API.CustomizeResponses.Categories.PostWpV2.FormData;
  config?: object;
  context?: object;
}) {
  return request<any>("post", "/wp/v2/categories", options);
}
