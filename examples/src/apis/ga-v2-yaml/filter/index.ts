import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Delete a filter
 * @summary Delete Filter
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function deleteAnalyticsManagementFilters(options: {
  pathParams: API.GaV2Yaml.Filter.DeleteAnalyticsManagementFilters.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Returns a filters to which the user has access
 * @summary Get Filter
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function getAnalyticsManagementFilters(options: {
  pathParams: API.GaV2Yaml.Filter.GetAnalyticsManagementFilters.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Updates an existing filter
 * @summary Update Filter
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function patchAnalyticsManagementFilters(options: {
  pathParams: API.GaV2Yaml.Filter.PatchAnalyticsManagementFilters.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Filter.PatchAnalyticsManagementFilters.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Updates an existing filter
 * @summary Update Filter
 * @path `/management/accounts/{accountId}/filters/{filterId}`
 */
export function putAnalyticsManagementFiltersUpdate(options: {
  pathParams: API.GaV2Yaml.Filter.PutAnalyticsManagementFiltersUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Filter.PutAnalyticsManagementFiltersUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/filters/${options.pathParams.filterId}`,
    options,
  );
}

/**
 * Lists all filters for an account
 * @summary Get Filters
 * @path `/management/accounts/{accountId}/filters`
 */
export function getAnalyticsManagementFiltersList(options: {
  pathParams: API.GaV2Yaml.Filter.GetAnalyticsManagementFiltersList.PathParams;
  queryParams?: API.GaV2Yaml.Filter.GetAnalyticsManagementFiltersList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/filters`,
    options,
  );
}

/**
 * Create a new filter
 * @summary Create Filter
 * @path `/management/accounts/{accountId}/filters`
 */
export function postAnalyticsManagementFiltersInsert(options: {
  pathParams: API.GaV2Yaml.Filter.PostAnalyticsManagementFiltersInsert.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Filter.PostAnalyticsManagementFiltersInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/filters`,
    options,
  );
}
