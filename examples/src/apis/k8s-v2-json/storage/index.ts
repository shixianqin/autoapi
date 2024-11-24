import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/storage.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Storage.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Storage.GetApiGroup.Response>(
    "get",
    "/apis/storage.k8s.io/",
    options || {},
  );
}
