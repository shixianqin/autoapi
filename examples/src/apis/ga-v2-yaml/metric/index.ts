import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get a custom metric to which the user has access
 * @summary Get Custom Metric
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function getAnalyticsManagementCustomMetrics(options: {
  pathParams: API.GaV2Yaml.Metric.GetAnalyticsManagementCustomMetrics.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics/${options.pathParams.customMetricId}`,
    options,
  );
}

/**
 * Updates an existing custom metric
 * @summary Update Custom Metric
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function patchAnalyticsManagementCustomMetrics(options: {
  pathParams: API.GaV2Yaml.Metric.PatchAnalyticsManagementCustomMetrics.PathParams;
  queryParams?: API.GaV2Yaml.Metric.PatchAnalyticsManagementCustomMetrics.QueryParams;
  body?: API.GaV2Yaml.Metric.PatchAnalyticsManagementCustomMetrics.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics/${options.pathParams.customMetricId}`,
    options,
  );
}

/**
 * Updates an existing custom metric
 * @summary Update Custom Metric
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function putAnalyticsManagementCustomMetricsUpdate(options: {
  pathParams: API.GaV2Yaml.Metric.PutAnalyticsManagementCustomMetricsUpdate.PathParams;
  queryParams?: API.GaV2Yaml.Metric.PutAnalyticsManagementCustomMetricsUpdate.QueryParams;
  body?: API.GaV2Yaml.Metric.PutAnalyticsManagementCustomMetricsUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics/${options.pathParams.customMetricId}`,
    options,
  );
}

/**
 * Lists custom metrics to which the user has access
 * @summary Get Custom Metrics
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics`
 */
export function getAnalyticsManagementCustomMetricsList(options: {
  pathParams: API.GaV2Yaml.Metric.GetAnalyticsManagementCustomMetricsList.PathParams;
  queryParams?: API.GaV2Yaml.Metric.GetAnalyticsManagementCustomMetricsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics`,
    options,
  );
}

/**
 * Create a new custom metric
 * @summary Create Custom Metric
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics`
 */
export function postAnalyticsManagementCustomMetricsInsert(options: {
  pathParams: API.GaV2Yaml.Metric.PostAnalyticsManagementCustomMetricsInsert.PathParams;
  body?: API.GaV2Yaml.Metric.PostAnalyticsManagementCustomMetricsInsert.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics`,
    options,
  );
}
