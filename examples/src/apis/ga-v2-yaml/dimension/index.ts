import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get a custom dimension to which the user has access
 * @summary Get Custom Dimension
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`
 */
export function getAnalyticsManagementCustomDimensions(options: {
  pathParams: API.GaV2Yaml.Dimension.GetAnalyticsManagementCustomDimensions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions/${options.pathParams.customDimensionId}`,
    options,
  );
}

/**
 * Updates an existing custom dimension
 * @summary Update Custom Dimensions
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`
 */
export function patchAnalyticsManagementCustomDimensions(options: {
  pathParams: API.GaV2Yaml.Dimension.PatchAnalyticsManagementCustomDimensions.PathParams;
  queryParams?: API.GaV2Yaml.Dimension.PatchAnalyticsManagementCustomDimensions.QueryParams;
  body?: API.GaV2Yaml.Dimension.PatchAnalyticsManagementCustomDimensions.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions/${options.pathParams.customDimensionId}`,
    options,
  );
}

/**
 * Updates an existing custom dimension
 * @summary Update Custom Dimensions
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`
 */
export function putAnalyticsManagementCustomDimensionsUpdate(options: {
  pathParams: API.GaV2Yaml.Dimension.PutAnalyticsManagementCustomDimensionsUpdate.PathParams;
  queryParams?: API.GaV2Yaml.Dimension.PutAnalyticsManagementCustomDimensionsUpdate.QueryParams;
  body?: API.GaV2Yaml.Dimension.PutAnalyticsManagementCustomDimensionsUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions/${options.pathParams.customDimensionId}`,
    options,
  );
}

/**
 * Lists custom dimensions to which the user has access
 * @summary Get Custom Dimensions
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions`
 */
export function getAnalyticsManagementCustomDimensionsList(options: {
  pathParams: API.GaV2Yaml.Dimension.GetAnalyticsManagementCustomDimensionsList.PathParams;
  queryParams?: API.GaV2Yaml.Dimension.GetAnalyticsManagementCustomDimensionsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions`,
    options,
  );
}

/**
 * Create a new custom dimension
 * @summary Create Custom Dimension
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions`
 */
export function postAnalyticsManagementCustomDimensionsInsert(options: {
  pathParams: API.GaV2Yaml.Dimension.PostAnalyticsManagementCustomDimensionsInsert.PathParams;
  body?: API.GaV2Yaml.Dimension.PostAnalyticsManagementCustomDimensionsInsert.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions`,
    options,
  );
}
