import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * List custom data sources to which the user has access
 * @summary Get Custom Data
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources`
 */
export function getAnalyticsManagementSourcesList(options: {
  pathParams: API.GaV2Yaml.CustomData.GetAnalyticsManagementSourcesList.PathParams;
  queryParams?: API.GaV2Yaml.CustomData.GetAnalyticsManagementSourcesList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources`,
    options,
  );
}
