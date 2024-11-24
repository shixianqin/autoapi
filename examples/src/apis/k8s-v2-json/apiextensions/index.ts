import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/apiextensions.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Apiextensions.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Apiextensions.GetApiGroup.Response>(
    "get",
    "/apis/apiextensions.k8s.io/",
    options || {},
  );
}
