import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Removes a user from the given account
 * @summary Remove User
 * @path `/management/accounts/{accountId}/entityUserLinks/{linkId}`
 */
export function deleteAnalyticsManagementAccountLinks(options: {
  pathParams: API.GaV2Yaml.User.DeleteAnalyticsManagementAccountLinks.PathParams;
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
 * Lists account-user links for a given account
 * @summary Get users
 * @path `/management/accounts/{accountId}/entityUserLinks`
 */
export function getAnalyticsManagementAccountLinksList(options: {
  pathParams: API.GaV2Yaml.User.GetAnalyticsManagementAccountLinksList.PathParams;
  queryParams?: API.GaV2Yaml.User.GetAnalyticsManagementAccountLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks`,
    options,
  );
}

/**
 * Adds a new user to the given account
 * @summary Add New Users
 * @path `/management/accounts/{accountId}/entityUserLinks`
 */
export function postAnalyticsManagementAccountLinksInsert(options: {
  pathParams: API.GaV2Yaml.User.PostAnalyticsManagementAccountLinksInsert.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.User.PostAnalyticsManagementAccountLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks`,
    options,
  );
}

/**
 * Removes a user from the given web property
 * @summary Remove User
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}`
 */
export function deleteAnalyticsManagementWebpropertyLinks(options: {
  pathParams: API.GaV2Yaml.User.DeleteAnalyticsManagementWebpropertyLinks.PathParams;
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
 * Lists webProperty-user links for a given web property
 * @summary Get Users
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks`
 */
export function getAnalyticsManagementWebpropertyLinksList(options: {
  pathParams: API.GaV2Yaml.User.GetAnalyticsManagementWebpropertyLinksList.PathParams;
  queryParams?: API.GaV2Yaml.User.GetAnalyticsManagementWebpropertyLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks`,
    options,
  );
}

/**
 * Adds a new user to the given web property
 * @summary Add User
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks`
 */
export function postAnalyticsManagementWebpropertyLinksInsert(options: {
  pathParams: API.GaV2Yaml.User.PostAnalyticsManagementWebpropertyLinksInsert.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.User.PostAnalyticsManagementWebpropertyLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks`,
    options,
  );
}

/**
 * Removes a user from the given view (profile)
 * @summary Remove User
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}`
 */
export function deleteAnalyticsManagementProfileLinks(options: {
  pathParams: API.GaV2Yaml.User.DeleteAnalyticsManagementProfileLinks.PathParams;
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
 * Lists profile-user links for a given view (profile)
 * @summary List Users
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks`
 */
export function getAnalyticsManagementProfileLinksList(options: {
  pathParams: API.GaV2Yaml.User.GetAnalyticsManagementProfileLinksList.PathParams;
  queryParams?: API.GaV2Yaml.User.GetAnalyticsManagementProfileLinksList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks`,
    options,
  );
}

/**
 * Adds a new user to the given view (profile)
 * @summary Add User
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks`
 */
export function postAnalyticsManagementProfileLinksInsert(options: {
  pathParams: API.GaV2Yaml.User.PostAnalyticsManagementProfileLinksInsert.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.User.PostAnalyticsManagementProfileLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks`,
    options,
  );
}
