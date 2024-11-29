import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Delete-Profile-Photo
 * @path `/settings/profile/photo`
 */
export function deleteProfilePhoto(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/settings/profile/photo", options || {});
}
