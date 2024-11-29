import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
 * @summary List check run annotations
 * @path `/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations`
 * @docs https://docs.github.com/rest/reference/checks#list-check-run-annotations
 */
export function getListAnnotations(options: {
  pathParams: API.GithubV3Json.Checks.GetListAnnotations.PathParams;
  queryParams?: API.GithubV3Json.Checks.GetListAnnotations.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.GetListAnnotations.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-runs/${options.pathParams.check_run_id}/annotations`,
    options,
  );
}

/**
 * Triggers GitHub to rerequest an existing check run, without pushing new code to a repository. This endpoint will trigger the [`check_run` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) event with the action `rerequested`. When a check run is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
 *
 * To rerequest a check run, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
 * @summary Rerequest a check run
 * @path `/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest`
 * @docs https://docs.github.com/rest/reference/checks#rerequest-a-check-run
 */
export function postRerequestRun(options: {
  pathParams: API.GithubV3Json.Checks.PostRerequestRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.PostRerequestRun.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-runs/${options.pathParams.check_run_id}/rerequest`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
 * @summary Get a check run
 * @path `/repos/{owner}/{repo}/check-runs/{check_run_id}`
 * @docs https://docs.github.com/rest/reference/checks#get-a-check-run
 */
export function getChecks(options: {
  pathParams: API.GithubV3Json.Checks.GetChecks.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.GetChecks.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-runs/${options.pathParams.check_run_id}`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
 * @summary Update a check run
 * @path `/repos/{owner}/{repo}/check-runs/{check_run_id}`
 * @docs https://docs.github.com/rest/reference/checks#update-a-check-run
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Checks.PatchUpdate.PathParams;
  body: API.GithubV3Json.Checks.PatchUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.PatchUpdate.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-runs/${options.pathParams.check_run_id}`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
 *
 * In a check suite, GitHub limits the number of check runs with the same name to 1000. Once these check runs exceed 1000, GitHub will start to automatically delete older check runs.
 * @summary Create a check run
 * @path `/repos/{owner}/{repo}/check-runs`
 * @docs https://docs.github.com/rest/reference/checks#create-a-check-run
 */
export function postCreate(options: {
  pathParams: API.GithubV3Json.Checks.PostCreate.PathParams;
  body: API.GithubV3Json.Checks.PostCreate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.PostCreate.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-runs`,
    options,
  );
}

/**
 * Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://docs.github.com/rest/reference/checks#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
 * @summary Update repository preferences for check suites
 * @path `/repos/{owner}/{repo}/check-suites/preferences`
 * @docs https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites
 */
export function patchSetSuitesPreferences(options: {
  pathParams: API.GithubV3Json.Checks.PatchSetSuitesPreferences.PathParams;
  body?: API.GithubV3Json.Checks.PatchSetSuitesPreferences.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.PatchSetSuitesPreferences.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-suites/preferences`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
 * @summary List check runs in a check suite
 * @path `/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs`
 * @docs https://docs.github.com/rest/reference/checks#list-check-runs-in-a-check-suite
 */
export function getListForSuite(options: {
  pathParams: API.GithubV3Json.Checks.GetListForSuite.PathParams;
  queryParams?: API.GithubV3Json.Checks.GetListForSuite.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.GetListForSuite.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-suites/${options.pathParams.check_suite_id}/check-runs`,
    options,
  );
}

/**
 * Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://docs.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.
 *
 * To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
 * @summary Rerequest a check suite
 * @path `/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest`
 * @docs https://docs.github.com/rest/reference/checks#rerequest-a-check-suite
 */
export function postRerequestSuite(options: {
  pathParams: API.GithubV3Json.Checks.PostRerequestSuite.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.PostRerequestSuite.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-suites/${options.pathParams.check_suite_id}/rerequest`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
 * @summary Get a check suite
 * @path `/repos/{owner}/{repo}/check-suites/{check_suite_id}`
 * @docs https://docs.github.com/rest/reference/checks#get-a-check-suite
 */
export function getSuite(options: {
  pathParams: API.GithubV3Json.Checks.GetSuite.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.GetSuite.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-suites/${options.pathParams.check_suite_id}`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * By default, check suites are automatically created when you create a [check run](https://docs.github.com/rest/reference/checks#check-runs). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://docs.github.com/rest/reference/checks#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.
 * @summary Create a check suite
 * @path `/repos/{owner}/{repo}/check-suites`
 * @docs https://docs.github.com/rest/reference/checks#create-a-check-suite
 */
export function postCreateSuite(options: {
  pathParams: API.GithubV3Json.Checks.PostCreateSuite.PathParams;
  body: API.GithubV3Json.Checks.PostCreateSuite.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.PostCreateSuite.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/check-suites`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.
 *
 * Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
 * @summary List check runs for a Git reference
 * @path `/repos/{owner}/{repo}/commits/{ref}/check-runs`
 * @docs https://docs.github.com/rest/reference/checks#list-check-runs-for-a-git-reference
 */
export function getListForRef(options: {
  pathParams: API.GithubV3Json.Checks.GetListForRef.PathParams;
  queryParams?: API.GithubV3Json.Checks.GetListForRef.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.GetListForRef.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.ref}/check-runs`,
    options,
  );
}

/**
 * **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.
 *
 * Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
 * @summary List check suites for a Git reference
 * @path `/repos/{owner}/{repo}/commits/{ref}/check-suites`
 * @docs https://docs.github.com/rest/reference/checks#list-check-suites-for-a-git-reference
 */
export function getListSuitesForRef(options: {
  pathParams: API.GithubV3Json.Checks.GetListSuitesForRef.PathParams;
  queryParams?: API.GithubV3Json.Checks.GetListSuitesForRef.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Checks.GetListSuitesForRef.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.ref}/check-suites`,
    options,
  );
}
