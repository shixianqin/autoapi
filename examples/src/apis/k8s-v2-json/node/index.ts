import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/node.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Node.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Node.GetApiGroup.Response>(
    "get",
    "/apis/node.k8s.io/",
    options || {},
  );
}
