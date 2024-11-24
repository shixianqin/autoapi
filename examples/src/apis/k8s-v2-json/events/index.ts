import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/events.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Events.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Events.GetApiGroup.Response>(
    "get",
    "/apis/events.k8s.io/",
    options || {},
  );
}
