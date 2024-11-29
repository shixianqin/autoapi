import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * List uploads to which the user has access
 * @summary Get UPloads
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}`
 */
export function getAnalyticsManagementUploads(options: {
  pathParams: API.GaV2Yaml.Upload.GetAnalyticsManagementUploads.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/uploads/${options.pathParams.uploadId}`,
    options,
  );
}

/**
 * List uploads to which the user has access
 * @summary List Uploads
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads`
 */
export function getAnalyticsManagementUploadsList(options: {
  pathParams: API.GaV2Yaml.Upload.GetAnalyticsManagementUploadsList.PathParams;
  queryParams?: API.GaV2Yaml.Upload.GetAnalyticsManagementUploadsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/uploads`,
    options,
  );
}
