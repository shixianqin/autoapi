import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/apiregistration.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Apiregistration.GetApiGroup.Response>(
    "get",
    "/apis/apiregistration.k8s.io/",
    options || {},
  );
}
