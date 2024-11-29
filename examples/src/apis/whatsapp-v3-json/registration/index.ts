import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Register-Account
 * @path `/account/verify`
 */
export function postRegisterAccount(options: {
  body: API.WhatsappV3Json.Registration.PostRegisterAccount.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/account/verify", options);
}

/**
 * Request-Code
 * @path `/account`
 */
export function postRequestCode(options: {
  body: API.WhatsappV3Json.Registration.PostRequestCode.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Registration.PostRequestCode.Response>(
    "post",
    "/account",
    options,
  );
}
