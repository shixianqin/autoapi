import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Disable-Two-Step
 * @path `/settings/account/two-step`
 */
export function deleteDisableTwoStep(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/settings/account/two-step", options || {});
}

/**
 * Enable-Two-Step
 * @path `/settings/account/two-step`
 */
export function postEnableTwoStep(options: {
  body: API.WhatsappV3Json.TwoStepVerification.PostEnableTwoStep.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/settings/account/two-step", options);
}
