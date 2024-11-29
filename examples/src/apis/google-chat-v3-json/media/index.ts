import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.
 * @path `/v1/media/{resourceName}`
 */
export function getChatDownload(options: {
  pathParams: API.GoogleChatV3Json.Media.GetChatDownload.PathParams;
  queryParams?: API.GoogleChatV3Json.Media.GetChatDownload.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Media.GetChatDownload.Response>(
    "get",
    `/v1/media/${options.pathParams.resourceName}`,
    options,
  );
}
