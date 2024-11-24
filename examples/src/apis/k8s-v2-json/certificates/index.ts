import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/certificates.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Certificates.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Certificates.GetApiGroup.Response>(
    "get",
    "/apis/certificates.k8s.io/",
    options || {},
  );
}
