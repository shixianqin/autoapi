import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Delete data associated with a previous upload
 * @summary Delete Data
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData`
 */
export function postAnalyticsManagementUploadsDeleteUpload(options: {
  pathParams: API.GaV2Yaml.Data.PostAnalyticsManagementUploadsDeleteUpload.PathParams;
  headers?: API.GaV2Yaml.Data.PostAnalyticsManagementUploadsDeleteUpload.Headers;
  body?: API.GaV2Yaml.Data.PostAnalyticsManagementUploadsDeleteUpload.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/deleteUploadData`,
    options,
  );
}

/**
 * Upload data for a custom data source
 * @summary Upload Data
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads`
 */
export function postAnalyticsManagementUploadsUpload(options: {
  pathParams: API.GaV2Yaml.Data.PostAnalyticsManagementUploadsUpload.PathParams;
  headers?: API.GaV2Yaml.Data.PostAnalyticsManagementUploadsUpload.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/uploads`,
    options,
  );
}
