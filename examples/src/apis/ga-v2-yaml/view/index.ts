import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Deletes a view (profile)
 * @summary Delete View
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function deleteAnalyticsManagementProfiles(options: {
  pathParams: API.GaV2Yaml.View.DeleteAnalyticsManagementProfiles.PathParams;
  headers?: API.GaV2Yaml.View.DeleteAnalyticsManagementProfiles.Headers;
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
 * Gets a view (profile) to which the user has access
 * @summary Get View
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function getAnalyticsManagementProfiles(options: {
  pathParams: API.GaV2Yaml.View.GetAnalyticsManagementProfiles.PathParams;
  headers?: API.GaV2Yaml.View.GetAnalyticsManagementProfiles.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Updates an existing view (profile)
 * @summary Update View
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function patchAnalyticsManagementProfiles(options: {
  pathParams: API.GaV2Yaml.View.PatchAnalyticsManagementProfiles.PathParams;
  headers?: API.GaV2Yaml.View.PatchAnalyticsManagementProfiles.Headers;
  body?: API.GaV2Yaml.View.PatchAnalyticsManagementProfiles.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Updates an existing view (profile)
 * @summary Update View
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}`
 */
export function putAnalyticsManagementProfilesUpdate(options: {
  pathParams: API.GaV2Yaml.View.PutAnalyticsManagementProfilesUpdate.PathParams;
  headers?: API.GaV2Yaml.View.PutAnalyticsManagementProfilesUpdate.Headers;
  body?: API.GaV2Yaml.View.PutAnalyticsManagementProfilesUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}`,
    options,
  );
}

/**
 * Lists views (profiles) to which the user has access
 * @summary List Views
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles`
 */
export function getAnalyticsManagementProfilesList(options: {
  pathParams: API.GaV2Yaml.View.GetAnalyticsManagementProfilesList.PathParams;
  queryParams?: API.GaV2Yaml.View.GetAnalyticsManagementProfilesList.QueryParams;
  headers?: API.GaV2Yaml.View.GetAnalyticsManagementProfilesList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles`,
    options,
  );
}

/**
 * Create a new view (profile)
 * @summary Create View
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles`
 */
export function postAnalyticsManagementProfilesInsert(options: {
  pathParams: API.GaV2Yaml.View.PostAnalyticsManagementProfilesInsert.PathParams;
  headers?: API.GaV2Yaml.View.PostAnalyticsManagementProfilesInsert.Headers;
  body?: API.GaV2Yaml.View.PostAnalyticsManagementProfilesInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles`,
    options,
  );
}
