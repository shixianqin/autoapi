import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns real time data for a view (profile)
 * @summary Return Real Time Data
 * @path `/data/realtime`
 */
export function getAnalyticsDataRealtime(options?: {
  queryParams?: API.GaV2Yaml.RealTimeData.GetAnalyticsDataRealtime.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/data/realtime", options || {});
}
