import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Delete-Media
 * @path `/media/{MediaId}`
 */
export function deleteMedia(options: {
  pathParams: API.WhatsappV3Json.Media.DeleteMedia.PathParams;
  headers?: API.WhatsappV3Json.Media.DeleteMedia.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/media/${options.pathParams.MediaId}`,
    options,
  );
}

/**
 * Download-Media
 * @path `/media/{MediaId}`
 */
export function getDownload(options: {
  pathParams: API.WhatsappV3Json.Media.GetDownload.PathParams;
  headers?: API.WhatsappV3Json.Media.GetDownload.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Media.GetDownload.Response>(
    "get",
    `/media/${options.pathParams.MediaId}`,
    options,
  );
}

/**
 * Upload-Media
 * @path `/media`
 */
export function postUpload(options: {
  headers?: API.WhatsappV3Json.Media.PostUpload.Headers;
  body: API.WhatsappV3Json.Media.PostUpload.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Media.PostUpload.Response>(
    "post",
    "/media",
    options,
  );
}
