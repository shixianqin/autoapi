import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/internal.apiserver.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.InternalApiserver.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserver.GetApiGroup.Response>(
    "get",
    "/apis/internal.apiserver.k8s.io/",
    options || {},
  );
}
