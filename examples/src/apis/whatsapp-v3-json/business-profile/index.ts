import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get-Business-Profile
 * @path `/settings/business/profile`
 */
export function getBusinessProfile(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.BusinessProfile.GetBusinessProfile.Response>(
    "get",
    "/settings/business/profile",
    options || {},
  );
}

/**
 * Update-Business-Profile
 * @path `/settings/business/profile`
 */
export function postUpdate(options: {
  body: API.WhatsappV3Json.BusinessProfile.PostUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/settings/business/profile", options);
}
