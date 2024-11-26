import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get a custom metric to which the user has access
 * @summary Get Custom Metric
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function getAnalyticsManagementCustomMetrics(options: {
  pathParams: API.GaV2Yaml.Metric.GetAnalyticsManagementCustomMetrics.PathParams;
  headers?: API.GaV2Yaml.Metric.GetAnalyticsManagementCustomMetrics.Headers;
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
  headers?: API.GaV2Yaml.Metric.PatchAnalyticsManagementCustomMetrics.Headers;
  body?: API.GaV2Yaml.Metric.PatchAnalyticsManagementCustomMetrics.Body;
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
  headers?: API.GaV2Yaml.Metric.PutAnalyticsManagementCustomMetricsUpdate.Headers;
  body?: API.GaV2Yaml.Metric.PutAnalyticsManagementCustomMetricsUpdate.Body;
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
  headers?: API.GaV2Yaml.Metric.GetAnalyticsManagementCustomMetricsList.Headers;
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
  headers?: API.GaV2Yaml.Metric.PostAnalyticsManagementCustomMetricsInsert.Headers;
  body?: API.GaV2Yaml.Metric.PostAnalyticsManagementCustomMetricsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics`,
    options,
  );
}
