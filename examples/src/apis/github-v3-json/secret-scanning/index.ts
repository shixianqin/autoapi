import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
 * To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).
 * @summary List secret scanning alerts for an enterprise
 * @path `/enterprises/{enterprise}/secret-scanning/alerts`
 * @docs https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise
 */
export function getListAlertsForEnterprise(options: {
  pathParams: API.GithubV3Json.SecretScanning.GetListAlertsForEnterprise.PathParams;
  queryParams?: API.GithubV3Json.SecretScanning.GetListAlertsForEnterprise.QueryParams;
  headers?: API.GithubV3Json.SecretScanning.GetListAlertsForEnterprise.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.SecretScanning.GetListAlertsForEnterprise.Response>(
    "get",
    `/enterprises/${options.pathParams.enterprise}/secret-scanning/alerts`,
    options,
  );
}

/**
 * Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
 * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 * @summary List secret scanning alerts for an organization
 * @path `/orgs/{org}/secret-scanning/alerts`
 * @docs https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization
 */
export function getListAlertsForOrg(options: {
  pathParams: API.GithubV3Json.SecretScanning.GetListAlertsForOrg.PathParams;
  queryParams?: API.GithubV3Json.SecretScanning.GetListAlertsForOrg.QueryParams;
  headers?: API.GithubV3Json.SecretScanning.GetListAlertsForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.SecretScanning.GetListAlertsForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/secret-scanning/alerts`,
    options,
  );
}

/**
 * Lists all locations for a given secret scanning alert for an eligible repository.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 * @summary List locations for a secret scanning alert
 * @path `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations`
 * @docs https://docs.github.com/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert
 */
export function getListLocationsForAlert(options: {
  pathParams: API.GithubV3Json.SecretScanning.GetListLocationsForAlert.PathParams;
  queryParams?: API.GithubV3Json.SecretScanning.GetListLocationsForAlert.QueryParams;
  headers?: API.GithubV3Json.SecretScanning.GetListLocationsForAlert.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.SecretScanning.GetListLocationsForAlert.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/secret-scanning/alerts/${options.pathParams.alert_number}/locations`,
    options,
  );
}

/**
 * Gets a single secret scanning alert detected in an eligible repository.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 * @summary Get a secret scanning alert
 * @path `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`
 * @docs https://docs.github.com/rest/reference/secret-scanning#get-a-secret-scanning-alert
 */
export function getAlert(options: {
  pathParams: API.GithubV3Json.SecretScanning.GetAlert.PathParams;
  headers?: API.GithubV3Json.SecretScanning.GetAlert.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.SecretScanning.GetAlert.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/secret-scanning/alerts/${options.pathParams.alert_number}`,
    options,
  );
}

/**
 * Updates the status of a secret scanning alert in an eligible repository.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.
 * @summary Update a secret scanning alert
 * @path `/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}`
 * @docs https://docs.github.com/rest/reference/secret-scanning#update-a-secret-scanning-alert
 */
export function patchUpdateAlert(options: {
  pathParams: API.GithubV3Json.SecretScanning.PatchUpdateAlert.PathParams;
  headers?: API.GithubV3Json.SecretScanning.PatchUpdateAlert.Headers;
  body: API.GithubV3Json.SecretScanning.PatchUpdateAlert.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.SecretScanning.PatchUpdateAlert.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/secret-scanning/alerts/${options.pathParams.alert_number}`,
    options,
  );
}

/**
 * Lists secret scanning alerts for an eligible repository, from newest to oldest.
 * To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
 * For public repositories, you may instead use the `public_repo` scope.
 *
 * GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.
 * @summary List secret scanning alerts for a repository
 * @path `/repos/{owner}/{repo}/secret-scanning/alerts`
 * @docs https://docs.github.com/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository
 */
export function getListAlertsForRepo(options: {
  pathParams: API.GithubV3Json.SecretScanning.GetListAlertsForRepo.PathParams;
  queryParams?: API.GithubV3Json.SecretScanning.GetListAlertsForRepo.QueryParams;
  headers?: API.GithubV3Json.SecretScanning.GetListAlertsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.SecretScanning.GetListAlertsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/secret-scanning/alerts`,
    options,
  );
}
