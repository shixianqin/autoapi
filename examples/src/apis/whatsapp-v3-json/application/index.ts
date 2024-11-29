import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Set-Shards
 * @path `/account/shards`
 */
export function postSetShards(options: {
  body: API.WhatsappV3Json.Application.PostSetShards.Body;
  headers?: Record<string, any>;
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
  headers?: Record<string, any>;
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
  headers?: Record<string, any>;
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
  body?: API.WhatsappV3Json.Application.PostUpdateMediaProviders.Body;
  headers?: Record<string, any>;
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
  headers?: Record<string, any>;
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
  headers?: Record<string, any>;
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
  body?: API.WhatsappV3Json.Application.PatchUpdateSettings.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Application.PatchUpdateSettings.Response>(
    "patch",
    "/settings/application",
    options || {},
  );
}
