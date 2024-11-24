import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Deletes a web property-AdWords link
 * @summary Delete AdWord
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function deleteAnalyticsManagementWebPropertyAdWordsLinks(options: {
  pathParams: API.GaV2Yaml.AdWord.DeleteAnalyticsManagementWebPropertyAdWordsLinks.PathParams;
  headers?: API.GaV2Yaml.AdWord.DeleteAnalyticsManagementWebPropertyAdWordsLinks.Headers;
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
 * Returns a web property-AdWords link to which the user has access
 * @summary Get AdWord
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function getAnalyticsManagementWebPropertyAdWordsLinks(options: {
  pathParams: API.GaV2Yaml.AdWord.GetAnalyticsManagementWebPropertyAdWordsLinks.PathParams;
  headers?: API.GaV2Yaml.AdWord.GetAnalyticsManagementWebPropertyAdWordsLinks.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Updates an existing webProperty-AdWords link
 * @summary Update AdWord
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function patchAnalyticsManagementWebPropertyAdWordsLinks(options: {
  pathParams: API.GaV2Yaml.AdWord.PatchAnalyticsManagementWebPropertyAdWordsLinks.PathParams;
  headers?: API.GaV2Yaml.AdWord.PatchAnalyticsManagementWebPropertyAdWordsLinks.Headers;
  body?: API.GaV2Yaml.AdWord.PatchAnalyticsManagementWebPropertyAdWordsLinks.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Updates an existing webProperty-AdWords link
 * @summary Update AdWord
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}`
 */
export function putAnalyticsManagementWebPropertyAdWordsLinksUpdate(options: {
  pathParams: API.GaV2Yaml.AdWord.PutAnalyticsManagementWebPropertyAdWordsLinksUpdate.PathParams;
  headers?: API.GaV2Yaml.AdWord.PutAnalyticsManagementWebPropertyAdWordsLinksUpdate.Headers;
  body?: API.GaV2Yaml.AdWord.PutAnalyticsManagementWebPropertyAdWordsLinksUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks/${options.pathParams.webPropertyAdWordsLinkId}`,
    options,
  );
}

/**
 * Lists webProperty-AdWords links for a given web property
 * @summary List AdWords
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks`
 */
export function getAnalyticsManagementWebPropertyAdWordsLinksList(options: {
  pathParams: API.GaV2Yaml.AdWord.GetAnalyticsManagementWebPropertyAdWordsLinksList.PathParams;
  queryParams?: API.GaV2Yaml.AdWord.GetAnalyticsManagementWebPropertyAdWordsLinksList.QueryParams;
  headers?: API.GaV2Yaml.AdWord.GetAnalyticsManagementWebPropertyAdWordsLinksList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks`,
    options,
  );
}

/**
 * Creates a webProperty-AdWords link
 * @summary Create AdWord
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks`
 */
export function postAnalyticsManagementWebPropertyAdWordsLinksInsert(options: {
  pathParams: API.GaV2Yaml.AdWord.PostAnalyticsManagementWebPropertyAdWordsLinksInsert.PathParams;
  headers?: API.GaV2Yaml.AdWord.PostAnalyticsManagementWebPropertyAdWordsLinksInsert.Headers;
  body?: API.GaV2Yaml.AdWord.PostAnalyticsManagementWebPropertyAdWordsLinksInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/entityAdWordsLinks`,
    options,
  );
}
