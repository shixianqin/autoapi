import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get service account issuer OpenID JSON Web Key Set (contains public token verification keys)
 * @path `/openid/v1/jwks/`
 */
export function getServiceAccountIssuerOpenIdKeyset(options?: {
  headers?: API.K8sV2Json.Openid.GetServiceAccountIssuerOpenIdKeyset.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Openid.GetServiceAccountIssuerOpenIdKeyset.Response>(
    "get",
    "/openid/v1/jwks/",
    options || {},
  );
}
