import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns Analytics data for a view (profile)
 * @summary Return Analytics Data
 * @path `/data/ga`
 */
export function getAnalyticsDataGa(options?: {
  queryParams?: API.GaV2Yaml.AnalyticData.GetAnalyticsDataGa.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/data/ga", options || {});
}

/**
 * Returns Analytics Multi-Channel Funnels data for a view (profile)
 * @summary Returns Analytics Multi-Channel Funnels Data
 * @path `/data/mcf`
 */
export function getAnalyticsDataMcf(options?: {
  queryParams?: API.GaV2Yaml.AnalyticData.GetAnalyticsDataMcf.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/data/mcf", options || {});
}
