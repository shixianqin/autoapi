import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available API versions
 * @path `/apis/`
 */
export function getApiVersions(options?: {
  headers?: API.K8sV2Json.Apis.GetApiVersions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Apis.GetApiVersions.Response>(
    "get",
    "/apis/",
    options || {},
  );
}
