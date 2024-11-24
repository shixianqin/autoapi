import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get-Profile-About
 * @path `/settings/profile/about`
 */
export function getAbout(options?: {
  headers?: API.WhatsappV3Json.Profile.GetAbout.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Profile.GetAbout.Response>(
    "get",
    "/settings/profile/about",
    options || {},
  );
}

/**
 * Update-Profile-About
 * @path `/settings/profile/about`
 */
export function patchUpdateAbout(options: {
  headers?: API.WhatsappV3Json.Profile.PatchUpdateAbout.Headers;
  body: API.WhatsappV3Json.Profile.PatchUpdateAbout.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("patch", "/settings/profile/about", options);
}

/**
 * Get-Profile-Photo
 * @path `/settings/profile/photo`
 */
export function getPhoto(options?: {
  queryParams?: API.WhatsappV3Json.Profile.GetPhoto.QueryParams;
  headers?: API.WhatsappV3Json.Profile.GetPhoto.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Profile.GetPhoto.Response>(
    "get",
    "/settings/profile/photo",
    options || {},
  );
}

/**
 * Update-Profile-Photo
 * @path `/settings/profile/photo`
 */
export function postUpdatePhoto(options: {
  headers?: API.WhatsappV3Json.Profile.PostUpdatePhoto.Headers;
  formData: API.WhatsappV3Json.Profile.PostUpdatePhoto.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/settings/profile/photo", options);
}
