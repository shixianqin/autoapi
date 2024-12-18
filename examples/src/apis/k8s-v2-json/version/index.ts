import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get the code version
 * @path `/version/`
 */
export function getCode(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.Version.GetCode.Response>(
    "get",
    "/version/",
    options || {},
  );
}
