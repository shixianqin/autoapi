import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Delete an experiment
 * @summary Delete Experiment
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function deleteAnalyticsManagementExperiments(options: {
  pathParams: API.GaV2Yaml.Experiment.DeleteAnalyticsManagementExperiments.PathParams;
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
 * Returns an experiment to which the user has access
 * @summary Get Experiment
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function getAnalyticsManagementExperiments(options: {
  pathParams: API.GaV2Yaml.Experiment.GetAnalyticsManagementExperiments.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Update an existing experiment
 * @summary Update Experiment
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function patchAnalyticsManagementExperiments(options: {
  pathParams: API.GaV2Yaml.Experiment.PatchAnalyticsManagementExperiments.PathParams;
  body?: API.GaV2Yaml.Experiment.PatchAnalyticsManagementExperiments.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Update an existing experiment
 * @summary Update Experiment
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}`
 */
export function putAnalyticsManagementExperimentsUpdate(options: {
  pathParams: API.GaV2Yaml.Experiment.PutAnalyticsManagementExperimentsUpdate.PathParams;
  body?: API.GaV2Yaml.Experiment.PutAnalyticsManagementExperimentsUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments/${options.pathParams.experimentId}`,
    options,
  );
}

/**
 * Lists experiments to which the user has access
 * @summary List Experiments
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments`
 */
export function getAnalyticsManagementExperimentsList(options: {
  pathParams: API.GaV2Yaml.Experiment.GetAnalyticsManagementExperimentsList.PathParams;
  queryParams?: API.GaV2Yaml.Experiment.GetAnalyticsManagementExperimentsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments`,
    options,
  );
}

/**
 * Create a new experiment
 * @summary Create Experiment
 * @path `/management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments`
 */
export function postAnalyticsManagementExperimentsInsert(options: {
  pathParams: API.GaV2Yaml.Experiment.PostAnalyticsManagementExperimentsInsert.PathParams;
  body?: API.GaV2Yaml.Experiment.PostAnalyticsManagementExperimentsInsert.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/management/accounts/${options.pathParams.accountId}/webproperties/${options.pathParams.webPropertyId}/profiles/${options.pathParams.profileId}/experiments`,
    options,
  );
}
