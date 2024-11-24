import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access
 * @summary Get Account Summary
 * @path `/management/accountSummaries`
 */
export function getAnalyticsManagementSummariesList(options?: {
  queryParams?: API.GaV2Yaml.Account.GetAnalyticsManagementSummariesList.QueryParams;
  headers?: API.GaV2Yaml.Account.GetAnalyticsManagementSummariesList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/management/accountSummaries", options || {});
}

/**
 * Lists all accounts to which the user has access
 * @summary Get Accounts
 * @path `/management/accounts`
 */
export function getAnalyticsManagementAccountsList(options?: {
  queryParams?: API.GaV2Yaml.Account.GetAnalyticsManagementAccountsList.QueryParams;
  headers?: API.GaV2Yaml.Account.GetAnalyticsManagementAccountsList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/management/accounts", options || {});
}
