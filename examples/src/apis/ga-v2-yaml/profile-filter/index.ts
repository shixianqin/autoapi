import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Delete a profile filter link
 * @summary Delete Profile Filter
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function deleteAnalyticsManagementLinks(options: {
  pathParams: API.GaV2Yaml.ProfileFilter.DeleteAnalyticsManagementLinks.PathParams;
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
 * Returns a single profile filter link
 * @summary Get Profile Filter
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function getAnalyticsManagementLinks(options: {
  pathParams: API.GaV2Yaml.ProfileFilter.GetAnalyticsManagementLinks.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Update an existing profile filter link
 * @summary Update Profile Filter
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function patchAnalyticsManagementLinks(options: {
  pathParams: API.GaV2Yaml.ProfileFilter.PatchAnalyticsManagementLinks.PathParams;
  body?: API.GaV2Yaml.ProfileFilter.PatchAnalyticsManagementLinks.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Update an existing profile filter link
 * @summary Update Profile Filter
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}`
 */
export function putAnalyticsManagementLinksUpdate(options: {
  pathParams: API.GaV2Yaml.ProfileFilter.PutAnalyticsManagementLinksUpdate.PathParams;
  body?: API.GaV2Yaml.ProfileFilter.PutAnalyticsManagementLinksUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Lists all profile filter links for a profile
 * @summary Get Profile Filter
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks`
 */
export function getAnalyticsManagementLinksList(options: {
  pathParams: API.GaV2Yaml.ProfileFilter.GetAnalyticsManagementLinksList.PathParams;
  queryParams?: API.GaV2Yaml.ProfileFilter.GetAnalyticsManagementLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks`,
    options,
  );
}

/**
 * Create a new profile filter link
 * @summary Create Profile Filter
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks`
 */
export function postAnalyticsManagementLinksInsert(options: {
  pathParams: API.GaV2Yaml.ProfileFilter.PostAnalyticsManagementLinksInsert.PathParams;
  body?: API.GaV2Yaml.ProfileFilter.PostAnalyticsManagementLinksInsert.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/profileFilterLinks`,
    options,
  );
}
