import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets a remarketing audience to which the user has access
 * @summary Get Remarketing Audience
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function getAnalyticsManagement(options: {
  pathParams: API.GaV2Yaml.RemarketingAudience.GetAnalyticsManagement.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Updates an existing remarketing audience
 * @summary Update Remarketing Audience
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function patchAnalyticsManagement(options: {
  pathParams: API.GaV2Yaml.RemarketingAudience.PatchAnalyticsManagement.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.RemarketingAudience.PatchAnalyticsManagement.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Updates an existing remarketing audience
 * @summary Update Remarketing Audience
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}`
 */
export function putAnalyticsManagementUpdate(options: {
  pathParams: API.GaV2Yaml.RemarketingAudience.PutAnalyticsManagementUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.RemarketingAudience.PutAnalyticsManagementUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences/${options.pathParams.remarketingAudienceId}`,
    options,
  );
}

/**
 * Lists remarketing audiences to which the user has access
 * @summary Get Remarketing Audiences
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences`
 */
export function getAnalyticsManagementList(options: {
  pathParams: API.GaV2Yaml.RemarketingAudience.GetAnalyticsManagementList.PathParams;
  queryParams?: API.GaV2Yaml.RemarketingAudience.GetAnalyticsManagementList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences`,
    options,
  );
}

/**
 * Creates a new remarketing audience
 * @summary Create Remarketing Audience
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences`
 */
export function postAnalyticsManagementInsert(options: {
  pathParams: API.GaV2Yaml.RemarketingAudience.PostAnalyticsManagementInsert.PathParams;
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.RemarketingAudience.PostAnalyticsManagementInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/remarketingAudiences`,
    options,
  );
}
