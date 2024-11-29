import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/admissionregistration.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Admissionregistration.GetApiGroup.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/",
    options || {},
  );
}
