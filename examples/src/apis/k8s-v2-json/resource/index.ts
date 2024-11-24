import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/resource.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Resource.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Resource.GetApiGroup.Response>(
    "get",
    "/apis/resource.k8s.io/",
    options || {},
  );
}
