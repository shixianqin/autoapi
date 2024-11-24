import { request } from "@/adapter";

/**
 * @path `/wp/v2/media`
 */
export function getWpV2(options?: {
  queryParams?: API.CustomizeResponses.Media.GetWpV2.QueryParams;
  headers?: API.CustomizeResponses.Media.GetWpV2.Headers;
  config?: object;
  context?: object;
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
  headers?: API.CustomizeResponses.Media.PostWpV2.Headers;
  formData?: API.CustomizeResponses.Media.PostWpV2.FormData;
  config?: object;
  context?: object;
}) {
  return request<any>("post", "/wp/v2/media", options || {});
}
