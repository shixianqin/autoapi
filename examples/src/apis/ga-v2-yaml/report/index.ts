import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Deletes an unsampled report
 * @summary Delete Unsampled Report
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}`
 */
export function deleteAnalyticsManagementUnsampledReports(options: {
  pathParams: API.GaV2Yaml.Report.DeleteAnalyticsManagementUnsampledReports.PathParams;
  headers?: API.GaV2Yaml.Report.DeleteAnalyticsManagementUnsampledReports.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports/${options.pathParams.unsampledReportId}`,
    options,
  );
}

/**
 * Returns a single unsampled report
 * @summary Get Unsampled Report
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}`
 */
export function getAnalyticsManagementUnsampledReports(options: {
  pathParams: API.GaV2Yaml.Report.GetAnalyticsManagementUnsampledReports.PathParams;
  headers?: API.GaV2Yaml.Report.GetAnalyticsManagementUnsampledReports.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports/${options.pathParams.unsampledReportId}`,
    options,
  );
}

/**
 * Lists unsampled reports to which the user has access
 * @summary Get Unsampled Reports
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports`
 */
export function getAnalyticsManagementUnsampledReportsList(options: {
  pathParams: API.GaV2Yaml.Report.GetAnalyticsManagementUnsampledReportsList.PathParams;
  queryParams?: API.GaV2Yaml.Report.GetAnalyticsManagementUnsampledReportsList.QueryParams;
  headers?: API.GaV2Yaml.Report.GetAnalyticsManagementUnsampledReportsList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports`,
    options,
  );
}

/**
 * Create a new unsampled report
 * @summary Create Unsampled Report
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports`
 */
export function postAnalyticsManagementUnsampledReportsInsert(options: {
  pathParams: API.GaV2Yaml.Report.PostAnalyticsManagementUnsampledReportsInsert.PathParams;
  headers?: API.GaV2Yaml.Report.PostAnalyticsManagementUnsampledReportsInsert.Headers;
  body?: API.GaV2Yaml.Report.PostAnalyticsManagementUnsampledReportsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports`,
    options,
  );
}
