import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/authorization.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Authorization.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Authorization.GetApiGroup.Response>(
    "get",
    "/apis/authorization.k8s.io/",
    options || {},
  );
}
