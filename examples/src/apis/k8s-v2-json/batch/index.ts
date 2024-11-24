import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/batch/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Batch.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Batch.GetApiGroup.Response>(
    "get",
    "/apis/batch/",
    options || {},
  );
}
