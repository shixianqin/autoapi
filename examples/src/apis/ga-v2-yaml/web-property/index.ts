import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets a web property to which the user has access
 * @summary Get Web Property
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}`
 */
export function getAnalyticsManagementWebproperties(options: {
  pathParams: API.GaV2Yaml.WebProperty.GetAnalyticsManagementWebproperties.PathParams;
  headers?: API.GaV2Yaml.WebProperty.GetAnalyticsManagementWebproperties.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}`,
    options,
  );
}

/**
 * Updates an existing web property
 * @summary Update Web Property
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}`
 */
export function patchAnalyticsManagementWebproperties(options: {
  pathParams: API.GaV2Yaml.WebProperty.PatchAnalyticsManagementWebproperties.PathParams;
  headers?: API.GaV2Yaml.WebProperty.PatchAnalyticsManagementWebproperties.Headers;
  body?: API.GaV2Yaml.WebProperty.PatchAnalyticsManagementWebproperties.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}`,
    options,
  );
}

/**
 * Updates an existing web property
 * @summary Update Web Property
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}`
 */
export function putAnalyticsManagementWebpropertiesUpdate(options: {
  pathParams: API.GaV2Yaml.WebProperty.PutAnalyticsManagementWebpropertiesUpdate.PathParams;
  headers?: API.GaV2Yaml.WebProperty.PutAnalyticsManagementWebpropertiesUpdate.Headers;
  body?: API.GaV2Yaml.WebProperty.PutAnalyticsManagementWebpropertiesUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}`,
    options,
  );
}

/**
 * Lists web properties to which the user has access
 * @summary Get Web Properties
 * @path `/management/accounts/{accountId}/webproperties`
 */
export function getAnalyticsManagementWebpropertiesList(options: {
  pathParams: API.GaV2Yaml.WebProperty.GetAnalyticsManagementWebpropertiesList.PathParams;
  queryParams?: API.GaV2Yaml.WebProperty.GetAnalyticsManagementWebpropertiesList.QueryParams;
  headers?: API.GaV2Yaml.WebProperty.GetAnalyticsManagementWebpropertiesList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties`,
    options,
  );
}

/**
 * Create a new property if the account has fewer than 20 properties
 * @summary Create Web Property
 * @path `/management/accounts/{accountId}/webproperties`
 */
export function postAnalyticsManagementWebpropertiesInsert(options: {
  pathParams: API.GaV2Yaml.WebProperty.PostAnalyticsManagementWebpropertiesInsert.PathParams;
  headers?: API.GaV2Yaml.WebProperty.PostAnalyticsManagementWebpropertiesInsert.Headers;
  body?: API.GaV2Yaml.WebProperty.PostAnalyticsManagementWebpropertiesInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties`,
    options,
  );
}
