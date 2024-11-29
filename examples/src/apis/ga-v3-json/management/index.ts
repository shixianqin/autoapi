import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.
 * @path `/management/accountSummaries`
 */
export function getAnalyticsAccountSummariesList(options?: {
  queryParams?: API.GaV3Json.Management.GetAnalyticsAccountSummariesList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsAccountSummariesList.Response>(
    "get",
    "/management/accountSummaries",
    options || {},
  );
}

/**
 * Removes a user from the given account.
 * @path `/management/accounts/{accountId}/entityUserLinks/{linkId}`
 */
export function deleteAnalyticsAccountUserLinks(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsAccountUserLinks.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsAccountUserLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Updates permissions for an existing user on the given account.
 * @path `/management/accounts/{accountId}/entityUserLinks/{linkId}`
 */
export function putAnalyticsAccountUserLinksUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsAccountUserLinksUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsAccountUserLinksUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsAccountUserLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsAccountUserLinksUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Lists account-user links for a given account.
 * @path `/management/accounts/{accountId}/entityUserLinks`
 */
export function getAnalyticsAccountUserLinksList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsAccountUserLinksList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsAccountUserLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsAccountUserLinksList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks`,
    options,
  );
}

/**
 * Adds a new user to the given account.
 * @path `/management/accounts/{accountId}/entityUserLinks`
 */
export function postAnalyticsAccountUserLinksInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsAccountUserLinksInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsAccountUserLinksInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsAccountUserLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsAccountUserLinksInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks`,
    options,
  );
}

/**
 * Delete a filter.
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function deleteAnalyticsFilters(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsFilters.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsFilters.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.DeleteAnalyticsFilters.Response>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Returns filters to which the user has access.
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function getAnalyticsFilters(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsFilters.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsFilters.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsFilters.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Updates an existing filter. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function patchAnalyticsFilters(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsFilters.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsFilters.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsFilters.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsFilters.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Updates an existing filter.
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function putAnalyticsFiltersUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsFiltersUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsFiltersUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsFiltersUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsFiltersUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Lists all filters for an account
 * @path `/management/accounts/{accountId}/filters`
 */
export function getAnalyticsFiltersList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsFiltersList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsFiltersList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsFiltersList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/filters`,
    options,
  );
}

/**
 * Create a new filter.
 * @path `/management/accounts/{accountId}/filters`
 */
export function postAnalyticsFiltersInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsFiltersInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsFiltersInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsFiltersInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsFiltersInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/filters`,
    options,
  );
}

/**
 * Delete data associated with a previous upload.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData`
 */
export function postAnalyticsUploadsDeleteUploadData(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsUploadsDeleteUploadData.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsUploadsDeleteUploadData.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsUploadsDeleteUploadData.Body;
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
 * List uploads to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}`
 */
export function getAnalyticsUploads(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsUploads.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsUploads.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsUploads.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/uploads/${options.pathParams.uploadId}`,
    options,
  );
}

/**
 * List uploads to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads`
 */
export function getAnalyticsUploadsList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsUploadsList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsUploadsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsUploadsList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/uploads`,
    options,
  );
}

/**
 * Upload data for a custom data source.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads`
 */
export function postAnalyticsUploadsUploadData(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsUploadsUploadData.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsUploadsUploadData.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsUploadsUploadData.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources/${options.pathParams.customDataSourceId}/uploads`,
    options,
  );
}

/**
 * List custom data sources to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources`
 */
export function getAnalyticsCustomDataSourcesList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsCustomDataSourcesList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsCustomDataSourcesList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsCustomDataSourcesList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDataSources`,
    options,
  );
}

/**
 * Get a custom dimension to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`
 */
export function getAnalyticsCustomDimensions(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsCustomDimensions.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsCustomDimensions.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsCustomDimensions.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions/${options.pathParams.customDimensionId}`,
    options,
  );
}

/**
 * Updates an existing custom dimension. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`
 */
export function patchAnalyticsCustomDimensions(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsCustomDimensions.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsCustomDimensions.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsCustomDimensions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsCustomDimensions.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions/${options.pathParams.customDimensionId}`,
    options,
  );
}

/**
 * Updates an existing custom dimension.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}`
 */
export function putAnalyticsCustomDimensionsUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsCustomDimensionsUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsCustomDimensionsUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsCustomDimensionsUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsCustomDimensionsUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions/${options.pathParams.customDimensionId}`,
    options,
  );
}

/**
 * Lists custom dimensions to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions`
 */
export function getAnalyticsCustomDimensionsList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsCustomDimensionsList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsCustomDimensionsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsCustomDimensionsList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions`,
    options,
  );
}

/**
 * Create a new custom dimension.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions`
 */
export function postAnalyticsCustomDimensionsInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsCustomDimensionsInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsCustomDimensionsInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsCustomDimensionsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsCustomDimensionsInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customDimensions`,
    options,
  );
}

/**
 * Get a custom metric to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function getAnalyticsCustomMetrics(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsCustomMetrics.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsCustomMetrics.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsCustomMetrics.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics/${options.pathParams.customMetricId}`,
    options,
  );
}

/**
 * Updates an existing custom metric. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function patchAnalyticsCustomMetrics(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsCustomMetrics.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsCustomMetrics.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsCustomMetrics.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsCustomMetrics.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics/${options.pathParams.customMetricId}`,
    options,
  );
}

/**
 * Updates an existing custom metric.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}`
 */
export function putAnalyticsCustomMetricsUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsCustomMetricsUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsCustomMetricsUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsCustomMetricsUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsCustomMetricsUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics/${options.pathParams.customMetricId}`,
    options,
  );
}

/**
 * Lists custom metrics to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics`
 */
export function getAnalyticsCustomMetricsList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsCustomMetricsList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsCustomMetricsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsCustomMetricsList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics`,
    options,
  );
}

/**
 * Create a new custom metric.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics`
 */
export function postAnalyticsCustomMetricsInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsCustomMetricsInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsCustomMetricsInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsCustomMetricsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsCustomMetricsInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/customMetrics`,
    options,
  );
}

/**
 * Deletes a web property-Google Ads link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function deleteAnalyticsWebPropertyAdWordsLinks(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsWebPropertyAdWordsLinks.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsWebPropertyAdWordsLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Returns a web property-Google Ads link to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function getAnalyticsWebPropertyAdWordsLinks(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsWebPropertyAdWordsLinks.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsWebPropertyAdWordsLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsWebPropertyAdWordsLinks.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Updates an existing webProperty-Google Ads link. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function patchAnalyticsWebPropertyAdWordsLinks(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsWebPropertyAdWordsLinks.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsWebPropertyAdWordsLinks.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsWebPropertyAdWordsLinks.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsWebPropertyAdWordsLinks.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Updates an existing webProperty-Google Ads link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function putAnalyticsWebPropertyAdWordsLinksUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsWebPropertyAdWordsLinksUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsWebPropertyAdWordsLinksUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsWebPropertyAdWordsLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsWebPropertyAdWordsLinksUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Lists webProperty-Google Ads links for a given web property.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks`
 */
export function getAnalyticsWebPropertyAdWordsLinksList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsWebPropertyAdWordsLinksList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsWebPropertyAdWordsLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsWebPropertyAdWordsLinksList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks`,
    options,
  );
}

/**
 * Creates a webProperty-Google Ads link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks`
 */
export function postAnalyticsWebPropertyAdWordsLinksInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsWebPropertyAdWordsLinksInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsWebPropertyAdWordsLinksInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsWebPropertyAdWordsLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsWebPropertyAdWordsLinksInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks`,
    options,
  );
}

/**
 * Removes a user from the given web property.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}`
 */
export function deleteAnalyticsWebpropertyUserLinks(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsWebpropertyUserLinks.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsWebpropertyUserLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Updates permissions for an existing user on the given web property.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}`
 */
export function putAnalyticsWebpropertyUserLinksUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsWebpropertyUserLinksUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsWebpropertyUserLinksUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsWebpropertyUserLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsWebpropertyUserLinksUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Lists webProperty-user links for a given web property.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks`
 */
export function getAnalyticsWebpropertyUserLinksList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsWebpropertyUserLinksList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsWebpropertyUserLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsWebpropertyUserLinksList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks`,
    options,
  );
}

/**
 * Adds a new user to the given web property.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks`
 */
export function postAnalyticsWebpropertyUserLinksInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsWebpropertyUserLinksInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsWebpropertyUserLinksInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsWebpropertyUserLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsWebpropertyUserLinksInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks`,
    options,
  );
}

/**
 * Removes a user from the given view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}`
 */
export function deleteAnalyticsProfileUserLinks(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsProfileUserLinks.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsProfileUserLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Updates permissions for an existing user on the given view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}`
 */
export function putAnalyticsProfileUserLinksUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsProfileUserLinksUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsProfileUserLinksUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsProfileUserLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsProfileUserLinksUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Lists profile-user links for a given view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks`
 */
export function getAnalyticsProfileUserLinksList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsProfileUserLinksList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsProfileUserLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsProfileUserLinksList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks`,
    options,
  );
}

/**
 * Adds a new user to the given view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks`
 */
export function postAnalyticsProfileUserLinksInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsProfileUserLinksInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsProfileUserLinksInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsProfileUserLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsProfileUserLinksInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks`,
    options,
  );
}

/**
 * Delete an experiment.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function deleteAnalyticsExperiments(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsExperiments.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsExperiments.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Returns an experiment to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function getAnalyticsExperiments(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsExperiments.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsExperiments.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsExperiments.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Update an existing experiment. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function patchAnalyticsExperiments(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsExperiments.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsExperiments.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsExperiments.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsExperiments.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Update an existing experiment.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function putAnalyticsExperimentsUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsExperimentsUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsExperimentsUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsExperimentsUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsExperimentsUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Lists experiments to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments`
 */
export function getAnalyticsExperimentsList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsExperimentsList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsExperimentsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsExperimentsList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments`,
    options,
  );
}

/**
 * Create a new experiment.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments`
 */
export function postAnalyticsExperimentsInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsExperimentsInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsExperimentsInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsExperimentsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsExperimentsInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments`,
    options,
  );
}

/**
 * Gets a goal to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`
 */
export function getAnalyticsGoals(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsGoals.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsGoals.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsGoals.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals/${options.pathParams.goalId}`,
    options,
  );
}

/**
 * Updates an existing goal. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`
 */
export function patchAnalyticsGoals(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsGoals.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsGoals.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsGoals.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsGoals.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals/${options.pathParams.goalId}`,
    options,
  );
}

/**
 * Updates an existing goal.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`
 */
export function putAnalyticsGoalsUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsGoalsUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsGoalsUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsGoalsUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsGoalsUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals/${options.pathParams.goalId}`,
    options,
  );
}

/**
 * Lists goals to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals`
 */
export function getAnalyticsGoalsList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsGoalsList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsGoalsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsGoalsList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals`,
    options,
  );
}

/**
 * Create a new goal.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals`
 */
export function postAnalyticsGoalsInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsGoalsInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsGoalsInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsGoalsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsGoalsInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals`,
    options,
  );
}

/**
 * Delete a profile filter link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function deleteAnalyticsProfileFilterLinks(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsProfileFilterLinks.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsProfileFilterLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Returns a single profile filter link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function getAnalyticsProfileFilterLinks(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsProfileFilterLinks.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsProfileFilterLinks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsProfileFilterLinks.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Update an existing profile filter link. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function patchAnalyticsProfileFilterLinks(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsProfileFilterLinks.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsProfileFilterLinks.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsProfileFilterLinks.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsProfileFilterLinks.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Update an existing profile filter link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function putAnalyticsProfileFilterLinksUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsProfileFilterLinksUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsProfileFilterLinksUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsProfileFilterLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsProfileFilterLinksUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Lists all profile filter links for a profile.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks`
 */
export function getAnalyticsProfileFilterLinksList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsProfileFilterLinksList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsProfileFilterLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsProfileFilterLinksList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks`,
    options,
  );
}

/**
 * Create a new profile filter link.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks`
 */
export function postAnalyticsProfileFilterLinksInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsProfileFilterLinksInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsProfileFilterLinksInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsProfileFilterLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsProfileFilterLinksInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks`,
    options,
  );
}

/**
 * Deletes an unsampled report.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}`
 */
export function deleteAnalyticsUnsampledReports(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsUnsampledReports.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsUnsampledReports.QueryParams;
  headers?: Record<string, any>;
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
 * Returns a single unsampled report.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}`
 */
export function getAnalyticsUnsampledReports(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsUnsampledReports.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsUnsampledReports.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsUnsampledReports.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports/${options.pathParams.unsampledReportId}`,
    options,
  );
}

/**
 * Lists unsampled reports to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports`
 */
export function getAnalyticsUnsampledReportsList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsUnsampledReportsList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsUnsampledReportsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsUnsampledReportsList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports`,
    options,
  );
}

/**
 * Create a new unsampled report.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports`
 */
export function postAnalyticsUnsampledReportsInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsUnsampledReportsInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsUnsampledReportsInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsUnsampledReportsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsUnsampledReportsInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/unsampledReports`,
    options,
  );
}

/**
 * Deletes a view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function deleteAnalyticsProfiles(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsProfiles.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsProfiles.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Gets a view (profile) to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function getAnalyticsProfiles(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsProfiles.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsProfiles.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsProfiles.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Updates an existing view (profile). This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function patchAnalyticsProfiles(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsProfiles.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsProfiles.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsProfiles.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsProfiles.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Updates an existing view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function putAnalyticsProfilesUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsProfilesUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsProfilesUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsProfilesUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsProfilesUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Lists views (profiles) to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles`
 */
export function getAnalyticsProfilesList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsProfilesList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsProfilesList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsProfilesList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles`,
    options,
  );
}

/**
 * Create a new view (profile).
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles`
 */
export function postAnalyticsProfilesInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsProfilesInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsProfilesInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsProfilesInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsProfilesInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles`,
    options,
  );
}

/**
 * Delete a remarketing audience.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function deleteAnalyticsRemarketingAudience(options: {
  pathParams: API.GaV3Json.Management.DeleteAnalyticsRemarketingAudience.PathParams;
  queryParams?: API.GaV3Json.Management.DeleteAnalyticsRemarketingAudience.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Gets a remarketing audience to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function getAnalyticsRemarketingAudience(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsRemarketingAudience.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsRemarketingAudience.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsRemarketingAudience.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Updates an existing remarketing audience. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function patchAnalyticsRemarketingAudience(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsRemarketingAudience.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsRemarketingAudience.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsRemarketingAudience.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsRemarketingAudience.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Updates an existing remarketing audience.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function putAnalyticsRemarketingAudienceUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsRemarketingAudienceUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsRemarketingAudienceUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsRemarketingAudienceUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsRemarketingAudienceUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Lists remarketing audiences to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences`
 */
export function getAnalyticsRemarketingAudienceList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsRemarketingAudienceList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsRemarketingAudienceList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsRemarketingAudienceList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences`,
    options,
  );
}

/**
 * Creates a new remarketing audience.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences`
 */
export function postAnalyticsRemarketingAudienceInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsRemarketingAudienceInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsRemarketingAudienceInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsRemarketingAudienceInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsRemarketingAudienceInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences`,
    options,
  );
}

/**
 * Gets a web property to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}`
 */
export function getAnalyticsWebproperties(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsWebproperties.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsWebproperties.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsWebproperties.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}`,
    options,
  );
}

/**
 * Updates an existing web property. This method supports patch semantics.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}`
 */
export function patchAnalyticsWebproperties(options: {
  pathParams: API.GaV3Json.Management.PatchAnalyticsWebproperties.PathParams;
  queryParams?: API.GaV3Json.Management.PatchAnalyticsWebproperties.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PatchAnalyticsWebproperties.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PatchAnalyticsWebproperties.Response>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}`,
    options,
  );
}

/**
 * Updates an existing web property.
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}`
 */
export function putAnalyticsWebpropertiesUpdate(options: {
  pathParams: API.GaV3Json.Management.PutAnalyticsWebpropertiesUpdate.PathParams;
  queryParams?: API.GaV3Json.Management.PutAnalyticsWebpropertiesUpdate.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PutAnalyticsWebpropertiesUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PutAnalyticsWebpropertiesUpdate.Response>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}`,
    options,
  );
}

/**
 * Lists web properties to which the user has access.
 * @path `/management/accounts/{accountId}/webproperties`
 */
export function getAnalyticsWebpropertiesList(options: {
  pathParams: API.GaV3Json.Management.GetAnalyticsWebpropertiesList.PathParams;
  queryParams?: API.GaV3Json.Management.GetAnalyticsWebpropertiesList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsWebpropertiesList.Response>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties`,
    options,
  );
}

/**
 * Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.
 * @path `/management/accounts/{accountId}/webproperties`
 */
export function postAnalyticsWebpropertiesInsert(options: {
  pathParams: API.GaV3Json.Management.PostAnalyticsWebpropertiesInsert.PathParams;
  queryParams?: API.GaV3Json.Management.PostAnalyticsWebpropertiesInsert.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsWebpropertiesInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsWebpropertiesInsert.Response>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties`,
    options,
  );
}

/**
 * Lists all accounts to which the user has access.
 * @path `/management/accounts`
 */
export function getAnalyticsAccountsList(options?: {
  queryParams?: API.GaV3Json.Management.GetAnalyticsAccountsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsAccountsList.Response>(
    "get",
    "/management/accounts",
    options || {},
  );
}

/**
 * Hashes the given Client ID.
 * @path `/management/clientId:hashClientId`
 */
export function postAnalyticsClientIdHashClientId(options?: {
  queryParams?: API.GaV3Json.Management.PostAnalyticsClientIdHashClientId.QueryParams;
  headers?: Record<string, any>;
  body?: API.GaV3Json.Management.PostAnalyticsClientIdHashClientId.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.PostAnalyticsClientIdHashClientId.Response>(
    "post",
    "/management/clientId:hashClientId",
    options || {},
  );
}

/**
 * Lists segments to which the user has access.
 * @path `/management/segments`
 */
export function getAnalyticsSegmentsList(options?: {
  queryParams?: API.GaV3Json.Management.GetAnalyticsSegmentsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Management.GetAnalyticsSegmentsList.Response>(
    "get",
    "/management/segments",
    options || {},
  );
}
