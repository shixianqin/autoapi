import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available API versions
 * @path `/api/`
 */
export function getApiVersions(options?: {
  headers?: API.K8sV2Json.Core.GetApiVersions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Core.GetApiVersions.Response>(
    "get",
    "/api/",
    options || {},
  );
}
