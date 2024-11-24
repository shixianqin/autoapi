import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Disable-Two-Step
 * @path `/settings/account/two-step`
 */
export function deleteDisableTwoStep(options?: {
  headers?: API.WhatsappV3Json.TwoStepVerification.DeleteDisableTwoStep.Headers;
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
  headers?: API.WhatsappV3Json.TwoStepVerification.PostEnableTwoStep.Headers;
  body: API.WhatsappV3Json.TwoStepVerification.PostEnableTwoStep.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/settings/account/two-step", options);
}
