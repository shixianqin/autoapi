import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get service account issuer OpenID configuration, also known as the 'OIDC discovery doc'
 * @path `/.well-known/openid-configuration/`
 */
export function getServiceAccountIssuerOpenIdConfiguration(options?: {
  headers?: API.K8sV2Json.WellKnown.GetServiceAccountIssuerOpenIdConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.WellKnown.GetServiceAccountIssuerOpenIdConfiguration.Response>(
    "get",
    "/.well-known/openid-configuration/",
    options || {},
  );
}
