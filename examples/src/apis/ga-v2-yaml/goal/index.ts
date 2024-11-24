import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets a goal to which the user has access
 * @summary Get Goal
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`
 */
export function getAnalyticsManagementGoals(options: {
  pathParams: API.GaV2Yaml.Goal.GetAnalyticsManagementGoals.PathParams;
  headers?: API.GaV2Yaml.Goal.GetAnalyticsManagementGoals.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals/${options.pathParams.goalId}`,
    options,
  );
}

/**
 * Updates an existing goal
 * @summary Update Goal
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`
 */
export function patchAnalyticsManagementGoals(options: {
  pathParams: API.GaV2Yaml.Goal.PatchAnalyticsManagementGoals.PathParams;
  headers?: API.GaV2Yaml.Goal.PatchAnalyticsManagementGoals.Headers;
  body?: API.GaV2Yaml.Goal.PatchAnalyticsManagementGoals.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals/${options.pathParams.goalId}`,
    options,
  );
}

/**
 * Updates an existing goal
 * @summary Update Goal
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}`
 */
export function putAnalyticsManagementGoalsUpdate(options: {
  pathParams: API.GaV2Yaml.Goal.PutAnalyticsManagementGoalsUpdate.PathParams;
  headers?: API.GaV2Yaml.Goal.PutAnalyticsManagementGoalsUpdate.Headers;
  body?: API.GaV2Yaml.Goal.PutAnalyticsManagementGoalsUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals/${options.pathParams.goalId}`,
    options,
  );
}

/**
 * Lists goals to which the user has access
 * @summary Get Goals
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals`
 */
export function getAnalyticsManagementGoalsList(options: {
  pathParams: API.GaV2Yaml.Goal.GetAnalyticsManagementGoalsList.PathParams;
  queryParams?: API.GaV2Yaml.Goal.GetAnalyticsManagementGoalsList.QueryParams;
  headers?: API.GaV2Yaml.Goal.GetAnalyticsManagementGoalsList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals`,
    options,
  );
}

/**
 * Create a new goal
 * @summary Create Goal
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals`
 */
export function postAnalyticsManagementGoalsInsert(options: {
  pathParams: API.GaV2Yaml.Goal.PostAnalyticsManagementGoalsInsert.PathParams;
  headers?: API.GaV2Yaml.Goal.PostAnalyticsManagementGoalsInsert.Headers;
  body?: API.GaV2Yaml.Goal.PostAnalyticsManagementGoalsInsert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/goals`,
    options,
  );
}
