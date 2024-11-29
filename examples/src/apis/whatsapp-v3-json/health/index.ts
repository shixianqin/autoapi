import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Check-Health
 * @path `/health`
 */
export function getCheck(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/health", options || {});
}

/**
 * Get-Metrics (since v2.21.3)
 * @path `/metrics`
 */
export function getMetrics(options?: {
  queryParams?: API.WhatsappV3Json.Health.GetMetrics.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Health.GetMetrics.Response>(
    "get",
    "/metrics",
    options || {},
  );
}

/**
 * Get-App-Stats
 * @path `/stats/app`
 */
export function getAppStats(options?: {
  queryParams?: API.WhatsappV3Json.Health.GetAppStats.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Health.GetAppStats.Response>(
    "get",
    "/stats/app",
    options || {},
  );
}

/**
 * Get-DB-Stats
 * @path `/stats/db`
 */
export function getDbStats(options?: {
  queryParams?: API.WhatsappV3Json.Health.GetDbStats.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Health.GetDbStats.Response>(
    "get",
    "/stats/db",
    options || {},
  );
}

/**
 * Get-Support-Info
 * @path `/support`
 */
export function getSupportInfo(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Health.GetSupportInfo.Response>(
    "get",
    "/support",
    options || {},
  );
}
