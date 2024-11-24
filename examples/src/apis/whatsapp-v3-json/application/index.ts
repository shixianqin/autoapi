import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Set-Shards
 * @path `/account/shards`
 */
export function postSetShards(options: {
  headers?: API.WhatsappV3Json.Application.PostSetShards.Headers;
  body: API.WhatsappV3Json.Application.PostSetShards.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/account/shards", options);
}

/**
 * Delete-Media-Providers
 * @path `/settings/application/media/providers/{ProviderName}`
 */
export function deleteMediaProviders(options: {
  pathParams: API.WhatsappV3Json.Application.DeleteMediaProviders.PathParams;
  headers?: API.WhatsappV3Json.Application.DeleteMediaProviders.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/settings/application/media/providers/${options.pathParams.ProviderName}`,
    options,
  );
}

/**
 * Get-Media-Providers
 * @path `/settings/application/media/providers`
 */
export function getMediaProviders(options?: {
  headers?: API.WhatsappV3Json.Application.GetMediaProviders.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Application.GetMediaProviders.Response>(
    "get",
    "/settings/application/media/providers",
    options || {},
  );
}

/**
 * Update-Media-Providers
 * @path `/settings/application/media/providers`
 */
export function postUpdateMediaProviders(options?: {
  headers?: API.WhatsappV3Json.Application.PostUpdateMediaProviders.Headers;
  body?: API.WhatsappV3Json.Application.PostUpdateMediaProviders.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/settings/application/media/providers",
    options || {},
  );
}

/**
 * Reset-Application-Settings
 * @path `/settings/application`
 */
export function deleteResetSettings(options?: {
  headers?: API.WhatsappV3Json.Application.DeleteResetSettings.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/settings/application", options || {});
}

/**
 * Get-Application-Settings
 * @path `/settings/application`
 */
export function getSettings(options?: {
  headers?: API.WhatsappV3Json.Application.GetSettings.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Application.GetSettings.Response>(
    "get",
    "/settings/application",
    options || {},
  );
}

/**
 * If a field is not present in the request, no change is made to that setting. For example, if on_call_pager is not sent with the request, the existing configuration for on_call_pager is unchanged.
 * @summary Update-Application-Settings
 * @path `/settings/application`
 */
export function patchUpdateSettings(options?: {
  headers?: API.WhatsappV3Json.Application.PatchUpdateSettings.Headers;
  body?: API.WhatsappV3Json.Application.PatchUpdateSettings.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Application.PatchUpdateSettings.Response>(
    "patch",
    "/settings/application",
    options || {},
  );
}
