import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/autoscaling/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Autoscaling.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Autoscaling.GetApiGroup.Response>(
    "get",
    "/apis/autoscaling/",
    options || {},
  );
}
