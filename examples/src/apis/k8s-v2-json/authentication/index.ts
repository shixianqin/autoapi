import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/authentication.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Authentication.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Authentication.GetApiGroup.Response>(
    "get",
    "/apis/authentication.k8s.io/",
    options || {},
  );
}
