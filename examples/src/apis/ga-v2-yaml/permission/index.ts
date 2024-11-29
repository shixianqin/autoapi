import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Updates permissions for an existing user on the given account
 * @summary Update Permissions
 * @path `/management/accounts/{accountId}/entityUserLinks/{linkId}`
 */
export function putAnalyticsManagementAccountUserLinksUpdate(options: {
  pathParams: API.GaV2Yaml.Permission.PutAnalyticsManagementAccountUserLinksUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Permission.PutAnalyticsManagementAccountUserLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Updates permissions for an existing user on the given web property
 * @summary Update Permission
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}`
 */
export function putAnalyticsManagementWebpropertyUserLinksUpdate(options: {
  pathParams: API.GaV2Yaml.Permission.PutAnalyticsManagementWebpropertyUserLinksUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Permission.PutAnalyticsManagementWebpropertyUserLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}

/**
 * Updates permissions for an existing user on the given view (profile)
 * @summary Update Permissions
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}`
 */
export function putAnalyticsManagementProfileUserLinksUpdate(options: {
  pathParams: API.GaV2Yaml.Permission.PutAnalyticsManagementProfileUserLinksUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Permission.PutAnalyticsManagementProfileUserLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/entityUserLinks/${options.pathParams.linkId}`,
    options,
  );
}
