import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Register-Account
 * @path `/account/verify`
 */
export function postRegisterAccount(options: {
  headers?: API.WhatsappV3Json.Registration.PostRegisterAccount.Headers;
  body: API.WhatsappV3Json.Registration.PostRegisterAccount.Body;
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
  headers?: API.WhatsappV3Json.Registration.PostRequestCode.Headers;
  body: API.WhatsappV3Json.Registration.PostRequestCode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Registration.PostRequestCode.Response>(
    "post",
    "/account",
    options,
  );
}
