import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/logs/`
 */
export function getLogFileListHandler(options?: {
  headers?: API.K8sV2Json.Logs.GetLogFileListHandler.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/logs/", options || {});
}

/**
 * @path `/logs/{logpath}`
 */
export function getLogFileHandler(options: {
  pathParams: API.K8sV2Json.Logs.GetLogFileHandler.PathParams;
  headers?: API.K8sV2Json.Logs.GetLogFileHandler.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/logs/${options.pathParams.logpath}`, options);
}
