import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/networking.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Networking.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Networking.GetApiGroup.Response>(
    "get",
    "/apis/networking.k8s.io/",
    options || {},
  );
}
