import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get-Profile-About
 * @path `/settings/profile/about`
 */
export function getAbout(options?: {
  headers?: Record<string, any>;
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
  body: API.WhatsappV3Json.Profile.PatchUpdateAbout.Body;
  headers?: Record<string, any>;
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
  headers?: Record<string, any>;
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
  formData: API.WhatsappV3Json.Profile.PostUpdatePhoto.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/settings/profile/photo", options);
}
