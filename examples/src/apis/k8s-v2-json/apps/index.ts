import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/apps/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.Apps.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Apps.GetApiGroup.Response>(
    "get",
    "/apis/apps/",
    options || {},
  );
}
