import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/coordination.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Coordination.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Coordination.GetApiGroup.Response>(
    "get",
    "/apis/coordination.k8s.io/",
    options || {},
  );
}
