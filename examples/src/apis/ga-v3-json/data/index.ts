import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns Analytics data for a view (profile).
 * @path `/data/ga`
 */
export function getAnalyticsGa(options: {
  queryParams: API.GaV3Json.Data.GetAnalyticsGa.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Data.GetAnalyticsGa.Response>(
    "get",
    "/data/ga",
    options,
  );
}

/**
 * Returns Analytics Multi-Channel Funnels data for a view (profile).
 * @path `/data/mcf`
 */
export function getAnalyticsMcf(options: {
  queryParams: API.GaV3Json.Data.GetAnalyticsMcf.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Data.GetAnalyticsMcf.Response>(
    "get",
    "/data/mcf",
    options,
  );
}

/**
 * Returns real time data for a view (profile).
 * @path `/data/realtime`
 */
export function getAnalyticsRealtime(options: {
  queryParams: API.GaV3Json.Data.GetAnalyticsRealtime.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Data.GetAnalyticsRealtime.Response>(
    "get",
    "/data/realtime",
    options,
  );
}
