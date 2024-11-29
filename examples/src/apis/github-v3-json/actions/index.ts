import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists repositories and their GitHub Actions cache usage for an organization.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
 * @summary List repositories with GitHub Actions cache usage for an organization
 * @path `/orgs/{org}/actions/cache/usage-by-repository`
 * @docs https://docs.github.com/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization
 */
export function getCacheUsageByRepoForOrg(options: {
  pathParams: API.GithubV3Json.Actions.GetCacheUsageByRepoForOrg.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetCacheUsageByRepoForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetCacheUsageByRepoForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/cache/usage-by-repository`,
    options,
  );
}

/**
 * Gets the total GitHub Actions cache usage for an organization.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
 * @summary Get GitHub Actions cache usage for an organization
 * @path `/orgs/{org}/actions/cache/usage`
 * @docs https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-an-organization
 */
export function getCacheUsageForOrg(options: {
  pathParams: API.GithubV3Json.Actions.GetCacheUsageForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetCacheUsageForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/cache/usage`,
    options,
  );
}

/**
 * Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Disable a selected repository for GitHub Actions in an organization
 * @path `/orgs/{org}/actions/permissions/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization
 */
export function deleteDisableSelectedRepositoryGithubOrganization(options: {
  pathParams: API.GithubV3Json.Actions.DeleteDisableSelectedRepositoryGithubOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/permissions/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Enable a selected repository for GitHub Actions in an organization
 * @path `/orgs/{org}/actions/permissions/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization
 */
export function putEnableSelectedRepositoryGithubOrganization(options: {
  pathParams: API.GithubV3Json.Actions.PutEnableSelectedRepositoryGithubOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/permissions/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary List selected repositories enabled for GitHub Actions in an organization
 * @path `/orgs/{org}/actions/permissions/repositories`
 * @docs https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization
 */
export function getListSelectedRepositoriesEnabledGithubOrganization(options: {
  pathParams: API.GithubV3Json.Actions.GetListSelectedRepositoriesEnabledGithubOrganization.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListSelectedRepositoriesEnabledGithubOrganization.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListSelectedRepositoriesEnabledGithubOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/permissions/repositories`,
    options,
  );
}

/**
 * Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Set selected repositories enabled for GitHub Actions in an organization
 * @path `/orgs/{org}/actions/permissions/repositories`
 * @docs https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization
 */
export function putSetSelectedRepositoriesEnabledGithubOrganization(options: {
  pathParams: API.GithubV3Json.Actions.PutSetSelectedRepositoriesEnabledGithubOrganization.PathParams;
  body: API.GithubV3Json.Actions.PutSetSelectedRepositoriesEnabledGithubOrganization.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/permissions/repositories`,
    options,
  );
}

/**
 * Gets the selected actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Get allowed actions and reusable workflows for an organization
 * @path `/orgs/{org}/actions/permissions/selected-actions`
 * @docs https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization
 */
export function getAllowedOrganization(options: {
  pathParams: API.GithubV3Json.Actions.GetAllowedOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetAllowedOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/permissions/selected-actions`,
    options,
  );
}

/**
 * Sets the actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Set allowed actions and reusable workflows for an organization
 * @path `/orgs/{org}/actions/permissions/selected-actions`
 * @docs https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization
 */
export function putSetAllowedOrganization(options: {
  pathParams: API.GithubV3Json.Actions.PutSetAllowedOrganization.PathParams;
  body?: API.GithubV3Json.Actions.PutSetAllowedOrganization.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/permissions/selected-actions`,
    options,
  );
}

/**
 * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
 * as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
 * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Get default workflow permissions for an organization
 * @path `/orgs/{org}/actions/permissions/workflow`
 * @docs https://docs.github.com/rest/reference/actions#get-default-workflow-permissions
 */
export function getGithubDefaultWorkflowPermissionsOrganization(options: {
  pathParams: API.GithubV3Json.Actions.GetGithubDefaultWorkflowPermissionsOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetGithubDefaultWorkflowPermissionsOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/permissions/workflow`,
    options,
  );
}

/**
 * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
 * can submit approving pull request reviews. For more information, see
 * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Set default workflow permissions for an organization
 * @path `/orgs/{org}/actions/permissions/workflow`
 * @docs https://docs.github.com/rest/reference/actions#set-default-workflow-permissions
 */
export function putSetGithubDefaultWorkflowPermissionsOrganization(options: {
  pathParams: API.GithubV3Json.Actions.PutSetGithubDefaultWorkflowPermissionsOrganization.PathParams;
  body?: API.GithubV3Json.Actions.PutSetGithubDefaultWorkflowPermissionsOrganization.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/permissions/workflow`,
    options,
  );
}

/**
 * Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Get GitHub Actions permissions for an organization
 * @path `/orgs/{org}/actions/permissions`
 * @docs https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization
 */
export function getGithubPermissionsOrganization(options: {
  pathParams: API.GithubV3Json.Actions.GetGithubPermissionsOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetGithubPermissionsOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/permissions`,
    options,
  );
}

/**
 * Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
 * @summary Set GitHub Actions permissions for an organization
 * @path `/orgs/{org}/actions/permissions`
 * @docs https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization
 */
export function putSetGithubPermissionsOrganization(options: {
  pathParams: API.GithubV3Json.Actions.PutSetGithubPermissionsOrganization.PathParams;
  body: API.GithubV3Json.Actions.PutSetGithubPermissionsOrganization.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/permissions`,
    options,
  );
}

/**
 * Removes a repository from a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Remove a selected repository from required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/actions#remove-a-repository-from-selected-repositories-list-for-a-required-workflow
 */
export function deleteRemoveSelectedRepoFromRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveSelectedRepoFromRequiredWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to a required workflow. To use this endpoint, the required workflow must be configured to run on selected repositories.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Add a repository to a required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/actions#add-a-repository-to-selected-repositories-list-for-a-required-workflow
 */
export function putAddSelectedRepoToRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PutAddSelectedRepoToRequiredWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Lists the selected repositories that are configured for a required workflow in an organization. To use this endpoint, the required workflow must be configured to run on selected repositories.
 *
 * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary List selected repositories for a required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories`
 * @docs https://docs.github.com/rest/reference/actions#list-selected-repositories-required-workflows
 */
export function getListSelectedRepositoriesRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.GetListSelectedRepositoriesRequiredWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListSelectedRepositoriesRequiredWorkflow.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}/repositories`,
    options,
  );
}

/**
 * Sets the repositories for a required workflow that is required for selected repositories.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Sets repositories for a required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}/repositories`
 * @docs https://docs.github.com/rest/reference/actions#set-selected-repositories-for-a-required-workflow
 */
export function putSetSelectedReposToRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PutSetSelectedReposToRequiredWorkflow.PathParams;
  body: API.GithubV3Json.Actions.PutSetSelectedReposToRequiredWorkflow.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}/repositories`,
    options,
  );
}

/**
 * Deletes a required workflow configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Delete a required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}`
 * @docs https://docs.github.com/rest/reference/actions#delete-a-required-workflow
 */
export function deleteRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRequiredWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}`,
    options,
  );
}

/**
 * Get a required workflow configured in an organization.
 *
 * You must authenticate using an access token with the `read:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Get a required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-required-workflow
 */
export function getRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.GetRequiredWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetRequiredWorkflow.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}`,
    options,
  );
}

/**
 * Update a required workflow in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Update a required workflow
 * @path `/orgs/{org}/actions/required_workflows/{required_workflow_id}`
 * @docs https://docs.github.com/rest/reference/actions#update-a-required-workflow
 */
export function patchUpdateRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PatchUpdateRequiredWorkflow.PathParams;
  body?: API.GithubV3Json.Actions.PatchUpdateRequiredWorkflow.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PatchUpdateRequiredWorkflow.Response>(
    "patch",
    `/orgs/${options.pathParams.org}/actions/required_workflows/${options.pathParams.required_workflow_id}`,
    options,
  );
}

/**
 * List all required workflows in an organization.
 *
 * You must authenticate using an access token with the `read:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary List required workflows
 * @path `/orgs/{org}/actions/required_workflows`
 * @docs https://docs.github.com/rest/reference/actions#list-required-workflows
 */
export function getListRequiredWorkflows(options: {
  pathParams: API.GithubV3Json.Actions.GetListRequiredWorkflows.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListRequiredWorkflows.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRequiredWorkflows.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/required_workflows`,
    options,
  );
}

/**
 * Create a required workflow in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Create a required workflow
 * @path `/orgs/{org}/actions/required_workflows`
 * @docs https://docs.github.com/rest/reference/actions#create-a-required-workflow
 */
export function postCreateRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateRequiredWorkflow.PathParams;
  body: API.GithubV3Json.Actions.PostCreateRequiredWorkflow.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateRequiredWorkflow.Response>(
    "post",
    `/orgs/${options.pathParams.org}/actions/required_workflows`,
    options,
  );
}

/**
 * Lists binaries for the runner application that you can download and run.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List runner applications for an organization
 * @path `/orgs/{org}/actions/runners/downloads`
 * @docs https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization
 */
export function getListRunnerApplicationsForOrg(options: {
  pathParams: API.GithubV3Json.Actions.GetListRunnerApplicationsForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRunnerApplicationsForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/runners/downloads`,
    options,
  );
}

/**
 * Returns a token that you can pass to the `config` script. The token expires after one hour.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * #### Example using registration token
 *
 * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
 *
 * ```
 * ./config.sh --url https://github.com/octo-org --token TOKEN
 * ```
 * @summary Create a registration token for an organization
 * @path `/orgs/{org}/actions/runners/registration-token`
 * @docs https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization
 */
export function postCreateRegistrationTokenForOrg(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateRegistrationTokenForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateRegistrationTokenForOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/actions/runners/registration-token`,
    options,
  );
}

/**
 * Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 *
 * #### Example using remove token
 *
 * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
 * endpoint.
 *
 * ```
 * ./config.sh remove --token TOKEN
 * ```
 * @summary Create a remove token for an organization
 * @path `/orgs/{org}/actions/runners/remove-token`
 * @docs https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization
 */
export function postCreateRemoveTokenForOrg(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateRemoveTokenForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateRemoveTokenForOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/actions/runners/remove-token`,
    options,
  );
}

/**
 * Remove a custom label from a self-hosted runner configured
 * in an organization. Returns the remaining labels from the runner.
 *
 * This endpoint returns a `404 Not Found` status if the custom label is not
 * present on the runner.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Remove a custom label from a self-hosted runner for an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}/labels/{name}`
 * @docs https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization
 */
export function deleteRemoveCustomLabelFromSelfHostedRunnerForOrg(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveCustomLabelFromSelfHostedRunnerForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.DeleteRemoveCustomLabelFromSelfHostedRunnerForOrg.Response>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}/labels/${options.pathParams.name}`,
    options,
  );
}

/**
 * Remove all custom labels from a self-hosted runner configured in an
 * organization. Returns the remaining read-only labels from the runner.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Remove all custom labels from a self-hosted runner for an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization
 */
export function deleteRemoveAllCustomLabelsFromSelfHostedRunnerForOrg(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveAllCustomLabelsFromSelfHostedRunnerForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.DeleteRemoveAllCustomLabelsFromSelfHostedRunnerForOrg.Response>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Lists all labels for a self-hosted runner configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List labels for a self-hosted runner for an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization
 */
export function getListLabelsForSelfHostedRunnerForOrg(options: {
  pathParams: API.GithubV3Json.Actions.GetListLabelsForSelfHostedRunnerForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListLabelsForSelfHostedRunnerForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Add custom labels to a self-hosted runner configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Add custom labels to a self-hosted runner for an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization
 */
export function postAddCustomLabelsToSelfHostedRunnerForOrg(options: {
  pathParams: API.GithubV3Json.Actions.PostAddCustomLabelsToSelfHostedRunnerForOrg.PathParams;
  body: API.GithubV3Json.Actions.PostAddCustomLabelsToSelfHostedRunnerForOrg.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostAddCustomLabelsToSelfHostedRunnerForOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Remove all previous custom labels and set the new custom labels for a specific
 * self-hosted runner configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Set custom labels for a self-hosted runner for an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization
 */
export function putSetCustomLabelsForSelfHostedRunnerForOrg(options: {
  pathParams: API.GithubV3Json.Actions.PutSetCustomLabelsForSelfHostedRunnerForOrg.PathParams;
  body: API.GithubV3Json.Actions.PutSetCustomLabelsForSelfHostedRunnerForOrg.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PutSetCustomLabelsForSelfHostedRunnerForOrg.Response>(
    "put",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Delete a self-hosted runner from an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}`
 * @docs https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization
 */
export function deleteSelfHostedRunnerFromOrg(options: {
  pathParams: API.GithubV3Json.Actions.DeleteSelfHostedRunnerFromOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}`,
    options,
  );
}

/**
 * Gets a specific self-hosted runner configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Get a self-hosted runner for an organization
 * @path `/orgs/{org}/actions/runners/{runner_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization
 */
export function getSelfHostedRunnerForOrg(options: {
  pathParams: API.GithubV3Json.Actions.GetSelfHostedRunnerForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetSelfHostedRunnerForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/runners/${options.pathParams.runner_id}`,
    options,
  );
}

/**
 * Lists all self-hosted runners configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List self-hosted runners for an organization
 * @path `/orgs/{org}/actions/runners`
 * @docs https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization
 */
export function getListSelfHostedRunnersForOrg(options: {
  pathParams: API.GithubV3Json.Actions.GetListSelfHostedRunnersForOrg.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListSelfHostedRunnersForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListSelfHostedRunnersForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/runners`,
    options,
  );
}

/**
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary Get an organization public key
 * @path `/orgs/{org}/actions/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/actions#get-an-organization-public-key
 */
export function getOrgPublicKey(options: {
  pathParams: API.GithubV3Json.Actions.GetOrgPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetOrgPublicKey.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/secrets/public-key`,
    options,
  );
}

/**
 * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary Remove selected repository from an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret
 */
export function deleteRemoveSelectedRepoFromOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveSelectedRepoFromOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary Add selected repository to an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret
 */
export function putAddSelectedRepoToOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.PutAddSelectedRepoToOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary List selected repositories for an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret
 */
export function getListSelectedReposForOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.GetListSelectedReposForOrgSecret.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListSelectedReposForOrgSecret.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListSelectedReposForOrgSecret.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary Set selected repositories for an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret
 */
export function putSetSelectedReposForOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.PutSetSelectedReposForOrgSecret.PathParams;
  body: API.GithubV3Json.Actions.PutSetSelectedReposForOrgSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary Delete an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#delete-an-organization-secret
 */
export function deleteOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.DeleteOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary Get an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#get-an-organization-secret
 */
export function getOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.GetOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetOrgSecret.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
 * use this endpoint.
 *
 * #### Example encrypting a secret using Node.js
 *
 * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
 *
 * ```
 * const sodium = require('libsodium-wrappers')
 * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
 * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
 *
 * //Check if libsodium is ready and then proceed.
 * sodium.ready.then(() => {
 *   // Convert Secret & Base64 key to Uint8Array.
 *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
 *   let binsec = sodium.from_string(secret)
 *
 *   //Encrypt the secret using LibSodium
 *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
 *
 *   // Convert encrypted Uint8Array to Base64
 *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
 *
 *   console.log(output)
 * });
 * ```
 *
 * #### Example encrypting a secret using Python
 *
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 *
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 *
 * def encrypt(public_key: str, secret_value: str) -> str:
 *   """Encrypt a Unicode string using the public key."""
 *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 *   sealed_box = public.SealedBox(public_key)
 *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 *   return b64encode(encrypted).decode("utf-8")
 * ```
 *
 * #### Example encrypting a secret using C#
 *
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 *
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 *
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 *
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 *
 * #### Example encrypting a secret using Ruby
 *
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 *
 * ```ruby
 * require "rbnacl"
 * require "base64"
 *
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 *
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 *
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
 * @summary Create or update an organization secret
 * @path `/orgs/{org}/actions/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret
 */
export function putCreateOrUpdateOrgSecret(options: {
  pathParams: API.GithubV3Json.Actions.PutCreateOrUpdateOrgSecret.PathParams;
  body: API.GithubV3Json.Actions.PutCreateOrUpdateOrgSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PutCreateOrUpdateOrgSecret.Response>(
    "put",
    `/orgs/${options.pathParams.org}/actions/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
 * @summary List organization secrets
 * @path `/orgs/{org}/actions/secrets`
 * @docs https://docs.github.com/rest/reference/actions#list-organization-secrets
 */
export function getListOrgSecrets(options: {
  pathParams: API.GithubV3Json.Actions.GetListOrgSecrets.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListOrgSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListOrgSecrets.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/secrets`,
    options,
  );
}

/**
 * Removes a repository from an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
 * @summary Remove selected repository from an organization variable
 * @path `/orgs/{org}/actions/variables/{name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/actions/variables#remove-selected-repository-from-an-organization-variable
 */
export function deleteRemoveSelectedRepoFromOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveSelectedRepoFromOrgVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
 * @summary Add selected repository to an organization variable
 * @path `/orgs/{org}/actions/variables/{name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/actions/variables#add-selected-repository-to-an-organization-variable
 */
export function putAddSelectedRepoToOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.PutAddSelectedRepoToOrgVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Lists all repositories that can access an organization variable that is available to selected repositories. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
 * @summary List selected repositories for an organization variable
 * @path `/orgs/{org}/actions/variables/{name}/repositories`
 * @docs https://docs.github.com/rest/actions/variables#list-selected-repositories-for-an-organization-variable
 */
export function getListSelectedReposForOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.GetListSelectedReposForOrgVariable.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListSelectedReposForOrgVariable.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListSelectedReposForOrgVariable.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}/repositories`,
    options,
  );
}

/**
 * Replaces all repositories for an organization variable that is available to selected repositories. Organization variables that are available to selected repositories have their `visibility` field set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
 * @summary Set selected repositories for an organization variable
 * @path `/orgs/{org}/actions/variables/{name}/repositories`
 * @docs https://docs.github.com/rest/actions/variables#set-selected-repositories-for-an-organization-variable
 */
export function putSetSelectedReposForOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.PutSetSelectedReposForOrgVariable.PathParams;
  body: API.GithubV3Json.Actions.PutSetSelectedReposForOrgVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}/repositories`,
    options,
  );
}

/**
 * Deletes an organization variable using the variable name.
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
 * @summary Delete an organization variable
 * @path `/orgs/{org}/actions/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#delete-an-organization-variable
 */
export function deleteOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.DeleteOrgVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Gets a specific variable in an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
 * @summary Get an organization variable
 * @path `/orgs/{org}/actions/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#get-an-organization-variable
 */
export function getOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.GetOrgVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetOrgVariable.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Updates an organization variable that you can reference in a GitHub Actions workflow.
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
 * @summary Update an organization variable
 * @path `/orgs/{org}/actions/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#update-an-organization-variable
 */
export function patchUpdateOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.PatchUpdateOrgVariable.PathParams;
  body?: API.GithubV3Json.Actions.PatchUpdateOrgVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/orgs/${options.pathParams.org}/actions/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Lists all organization variables. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `organization_actions_variables:read` organization permission to use this endpoint.
 * @summary List organization variables
 * @path `/orgs/{org}/actions/variables`
 * @docs https://docs.github.com/rest/actions/variables#list-organization-variables
 */
export function getListOrgVariables(options: {
  pathParams: API.GithubV3Json.Actions.GetListOrgVariables.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListOrgVariables.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListOrgVariables.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/variables`,
    options,
  );
}

/**
 * Creates an organization variable that you can reference in a GitHub Actions workflow.
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * GitHub Apps must have the `organization_actions_variables:write` organization permission to use this endpoint.
 * @summary Create an organization variable
 * @path `/orgs/{org}/actions/variables`
 * @docs https://docs.github.com/rest/actions/variables#create-an-organization-variable
 */
export function postCreateOrgVariable(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateOrgVariable.PathParams;
  body: API.GithubV3Json.Actions.PostCreateOrgVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateOrgVariable.Response>(
    "post",
    `/orgs/${options.pathParams.org}/actions/variables`,
    options,
  );
}

/**
 * Gets the number of billable minutes used by a specific required workflow during the current billing cycle.
 *
 * Billable minutes only apply to required workflows running in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)."
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get required workflow usage
 * @path `/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/timing`
 * @docs https://docs.github.com/rest/reference/actions#get-repository-required-workflow-usage
 */
export function getRepoRequiredWorkflowUsage(options: {
  pathParams: API.GithubV3Json.Actions.GetRepoRequiredWorkflowUsage.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetRepoRequiredWorkflowUsage.Response>(
    "get",
    `/repos/${options.pathParams.org}/${options.pathParams.repo}/actions/required_workflows/${options.pathParams.required_workflow_id_for_repo}/timing`,
    options,
  );
}

/**
 * Gets a specific required workflow present in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary Get a required workflow entity for a repository
 * @path `/repos/{org}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}`
 * @docs https://docs.github.com/rest/reference/actions#get-repository-required-workflow
 */
export function getRepoRequiredWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.GetRepoRequiredWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetRepoRequiredWorkflow.Response>(
    "get",
    `/repos/${options.pathParams.org}/${options.pathParams.repo}/actions/required_workflows/${options.pathParams.required_workflow_id_for_repo}`,
    options,
  );
}

/**
 * Lists the required workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary List repository required workflows
 * @path `/repos/{org}/{repo}/actions/required_workflows`
 * @docs https://docs.github.com/rest/reference/actions#list-repository-required-workflows
 */
export function getListRepoRequiredWorkflows(options: {
  pathParams: API.GithubV3Json.Actions.GetListRepoRequiredWorkflows.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListRepoRequiredWorkflows.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRepoRequiredWorkflows.Response>(
    "get",
    `/repos/${options.pathParams.org}/${options.pathParams.repo}/actions/required_workflows`,
    options,
  );
}

/**
 * Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
 * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
 * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Download an artifact
 * @path `/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}`
 * @docs https://docs.github.com/rest/reference/actions#download-an-artifact
 */
export function getDownloadArtifact(options: {
  pathParams: API.GithubV3Json.Actions.GetDownloadArtifact.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/artifacts/${options.pathParams.artifact_id}/${options.pathParams.archive_format}`,
    options,
  );
}

/**
 * Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Delete an artifact
 * @path `/repos/{owner}/{repo}/actions/artifacts/{artifact_id}`
 * @docs https://docs.github.com/rest/reference/actions#delete-an-artifact
 */
export function deleteArtifact(options: {
  pathParams: API.GithubV3Json.Actions.DeleteArtifact.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/artifacts/${options.pathParams.artifact_id}`,
    options,
  );
}

/**
 * Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get an artifact
 * @path `/repos/{owner}/{repo}/actions/artifacts/{artifact_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-an-artifact
 */
export function getArtifact(options: {
  pathParams: API.GithubV3Json.Actions.GetArtifact.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetArtifact.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/artifacts/${options.pathParams.artifact_id}`,
    options,
  );
}

/**
 * Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List artifacts for a repository
 * @path `/repos/{owner}/{repo}/actions/artifacts`
 * @docs https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository
 */
export function getListArtifactsForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetListArtifactsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListArtifactsForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListArtifactsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/artifacts`,
    options,
  );
}

/**
 * Gets GitHub Actions cache usage for a repository.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get GitHub Actions cache usage for a repository
 * @path `/repos/{owner}/{repo}/actions/cache/usage`
 * @docs https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-a-repository
 */
export function getCacheUsage(options: {
  pathParams: API.GithubV3Json.Actions.GetCacheUsage.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetCacheUsage.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/cache/usage`,
    options,
  );
}

/**
 * Deletes a GitHub Actions cache for a repository, using a cache ID.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 *
 * GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Delete a GitHub Actions cache for a repository (using a cache ID)
 * @path `/repos/{owner}/{repo}/actions/caches/{cache_id}`
 * @docs https://docs.github.com/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id
 */
export function deleteCacheById(options: {
  pathParams: API.GithubV3Json.Actions.DeleteCacheById.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/caches/${options.pathParams.cache_id}`,
    options,
  );
}

/**
 * Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 *
 * GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Delete GitHub Actions caches for a repository (using a cache key)
 * @path `/repos/{owner}/{repo}/actions/caches`
 * @docs https://docs.github.com/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key
 */
export function deleteCacheByKey(options: {
  pathParams: API.GithubV3Json.Actions.DeleteCacheByKey.PathParams;
  queryParams: API.GithubV3Json.Actions.DeleteCacheByKey.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.DeleteCacheByKey.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/caches`,
    options,
  );
}

/**
 * Lists the GitHub Actions caches for a repository.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List GitHub Actions caches for a repository
 * @path `/repos/{owner}/{repo}/actions/caches`
 * @docs https://docs.github.com/rest/actions/cache#list-github-actions-caches-for-a-repository
 */
export function getCacheList(options: {
  pathParams: API.GithubV3Json.Actions.GetCacheList.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetCacheList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetCacheList.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/caches`,
    options,
  );
}

/**
 * Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
 * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
 * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
 * have the `actions:read` permission to use this endpoint.
 * @summary Download job logs for a workflow run
 * @path `/repos/{owner}/{repo}/actions/jobs/{job_id}/logs`
 * @docs https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run
 */
export function getDownloadJobLogsForWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.GetDownloadJobLogsForWorkflowRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/jobs/${options.pathParams.job_id}/logs`,
    options,
  );
}

/**
 * Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Re-run a job from a workflow run
 * @path `/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun`
 * @docs https://docs.github.com/rest/reference/actions#re-run-job-for-workflow-run
 */
export function postReRunJobForWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.PostReRunJobForWorkflowRun.PathParams;
  body?: API.GithubV3Json.Actions.PostReRunJobForWorkflowRun.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostReRunJobForWorkflowRun.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/jobs/${options.pathParams.job_id}/rerun`,
    options,
  );
}

/**
 * Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get a job for a workflow run
 * @path `/repos/{owner}/{repo}/actions/jobs/{job_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run
 */
export function getJobForWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.GetJobForWorkflowRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetJobForWorkflowRun.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/jobs/${options.pathParams.job_id}`,
    options,
  );
}

/**
 * Gets the customization template for an OpenID Connect (OIDC) subject claim.
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint. GitHub Apps must have the `organization_administration:read` permission to use this endpoint.
 * @summary Get the customization template for an OIDC subject claim for a repository
 * @path `/repos/{owner}/{repo}/actions/oidc/customization/sub`
 * @docs https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-a-repository
 */
export function getCustomOidcSubClaimForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetCustomOidcSubClaimForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetCustomOidcSubClaimForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/oidc/customization/sub`,
    options,
  );
}

/**
 * Sets the customization template and `opt-in` or `opt-out` flag for an OpenID Connect (OIDC) subject claim for a repository.
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Set the customization template for an OIDC subject claim for a repository
 * @path `/repos/{owner}/{repo}/actions/oidc/customization/sub`
 * @docs https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-a-repository
 */
export function putSetCustomOidcSubClaimForRepo(options: {
  pathParams: API.GithubV3Json.Actions.PutSetCustomOidcSubClaimForRepo.PathParams;
  body: API.GithubV3Json.Actions.PutSetCustomOidcSubClaimForRepo.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PutSetCustomOidcSubClaimForRepo.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/oidc/customization/sub`,
    options,
  );
}

/**
 * Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
 * This endpoint only applies to private repositories.
 * For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
 * repository `administration` permission to use this endpoint.
 * @summary Get the level of access for workflows outside of the repository
 * @path `/repos/{owner}/{repo}/actions/permissions/access`
 * @docs https://docs.github.com/rest/reference/actions#get-workflow-access-level-to-a-repository
 */
export function getWorkflowAccessToRepository(options: {
  pathParams: API.GithubV3Json.Actions.GetWorkflowAccessToRepository.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetWorkflowAccessToRepository.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions/access`,
    options,
  );
}

/**
 * Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
 * This endpoint only applies to private repositories.
 * For more information, see "[Allowing access to components in a private repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-a-private-repository)".
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
 * repository `administration` permission to use this endpoint.
 * @summary Set the level of access for workflows outside of the repository
 * @path `/repos/{owner}/{repo}/actions/permissions/access`
 * @docs https://docs.github.com/rest/reference/actions#set-workflow-access-to-a-repository
 */
export function putSetWorkflowAccessToRepository(options: {
  pathParams: API.GithubV3Json.Actions.PutSetWorkflowAccessToRepository.PathParams;
  body: API.GithubV3Json.Actions.PutSetWorkflowAccessToRepository.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions/access`,
    options,
  );
}

/**
 * Gets the settings for selected actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
 * @summary Get allowed actions and reusable workflows for a repository
 * @path `/repos/{owner}/{repo}/actions/permissions/selected-actions`
 * @docs https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository
 */
export function getAllowedRepository(options: {
  pathParams: API.GithubV3Json.Actions.GetAllowedRepository.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetAllowedRepository.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions/selected-actions`,
    options,
  );
}

/**
 * Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
 * @summary Set allowed actions and reusable workflows for a repository
 * @path `/repos/{owner}/{repo}/actions/permissions/selected-actions`
 * @docs https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository
 */
export function putSetAllowedRepository(options: {
  pathParams: API.GithubV3Json.Actions.PutSetAllowedRepository.PathParams;
  body?: API.GithubV3Json.Actions.PutSetAllowedRepository.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions/selected-actions`,
    options,
  );
}

/**
 * Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
 * as well as if GitHub Actions can submit approving pull request reviews.
 * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
 * @summary Get default workflow permissions for a repository
 * @path `/repos/{owner}/{repo}/actions/permissions/workflow`
 * @docs https://docs.github.com/rest/reference/actions#get-default-workflow-permissions-for-a-repository
 */
export function getGithubDefaultWorkflowPermissionsRepository(options: {
  pathParams: API.GithubV3Json.Actions.GetGithubDefaultWorkflowPermissionsRepository.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetGithubDefaultWorkflowPermissionsRepository.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions/workflow`,
    options,
  );
}

/**
 * Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
 * can submit approving pull request reviews.
 * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
 * @summary Set default workflow permissions for a repository
 * @path `/repos/{owner}/{repo}/actions/permissions/workflow`
 * @docs https://docs.github.com/rest/reference/actions#set-default-workflow-permissions-for-a-repository
 */
export function putSetGithubDefaultWorkflowPermissionsRepository(options: {
  pathParams: API.GithubV3Json.Actions.PutSetGithubDefaultWorkflowPermissionsRepository.PathParams;
  body?: API.GithubV3Json.Actions.PutSetGithubDefaultWorkflowPermissionsRepository.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions/workflow`,
    options,
  );
}

/**
 * Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run in the repository.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
 * @summary Get GitHub Actions permissions for a repository
 * @path `/repos/{owner}/{repo}/actions/permissions`
 * @docs https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository
 */
export function getGithubPermissionsRepository(options: {
  pathParams: API.GithubV3Json.Actions.GetGithubPermissionsRepository.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetGithubPermissionsRepository.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions`,
    options,
  );
}

/**
 * Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
 * @summary Set GitHub Actions permissions for a repository
 * @path `/repos/{owner}/{repo}/actions/permissions`
 * @docs https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository
 */
export function putSetGithubPermissionsRepository(options: {
  pathParams: API.GithubV3Json.Actions.PutSetGithubPermissionsRepository.PathParams;
  body: API.GithubV3Json.Actions.PutSetGithubPermissionsRepository.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/permissions`,
    options,
  );
}

/**
 * List all workflow runs for a required workflow. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. For more information, see "[Required Workflows](https://docs.github.com/actions/using-workflows/required-workflows)."
 * @summary List workflow runs for a required workflow
 * @path `/repos/{owner}/{repo}/actions/required_workflows/{required_workflow_id_for_repo}/runs`
 * @docs https://docs.github.com/rest/reference/actions#list-required-workflow-runs
 */
export function getListRequiredWorkflowRuns(options: {
  pathParams: API.GithubV3Json.Actions.GetListRequiredWorkflowRuns.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListRequiredWorkflowRuns.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRequiredWorkflowRuns.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/required_workflows/${options.pathParams.required_workflow_id_for_repo}/runs`,
    options,
  );
}

/**
 * Lists binaries for the runner application that you can download and run.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * @summary List runner applications for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/downloads`
 * @docs https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository
 */
export function getListRunnerApplicationsForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetListRunnerApplicationsForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRunnerApplicationsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/downloads`,
    options,
  );
}

/**
 * Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
 * using an access token with the `repo` scope to use this endpoint.
 *
 * #### Example using registration token
 *
 * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
 *
 * ```
 * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
 * ```
 * @summary Create a registration token for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/registration-token`
 * @docs https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository
 */
export function postCreateRegistrationTokenForRepo(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateRegistrationTokenForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateRegistrationTokenForRepo.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/registration-token`,
    options,
  );
}

/**
 * Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 *
 * #### Example using remove token
 *
 * To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
 *
 * ```
 * ./config.sh remove --token TOKEN
 * ```
 * @summary Create a remove token for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/remove-token`
 * @docs https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository
 */
export function postCreateRemoveTokenForRepo(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateRemoveTokenForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateRemoveTokenForRepo.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/remove-token`,
    options,
  );
}

/**
 * Remove a custom label from a self-hosted runner configured
 * in a repository. Returns the remaining labels from the runner.
 *
 * This endpoint returns a `404 Not Found` status if the custom label is not
 * present on the runner.
 *
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
 * @summary Remove a custom label from a self-hosted runner for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}`
 * @docs https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository
 */
export function deleteRemoveCustomLabelFromSelfHostedRunnerForRepo(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveCustomLabelFromSelfHostedRunnerForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.DeleteRemoveCustomLabelFromSelfHostedRunnerForRepo.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}/labels/${options.pathParams.name}`,
    options,
  );
}

/**
 * Remove all custom labels from a self-hosted runner configured in a
 * repository. Returns the remaining read-only labels from the runner.
 *
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
 * @summary Remove all custom labels from a self-hosted runner for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository
 */
export function deleteRemoveAllCustomLabelsFromSelfHostedRunnerForRepo(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRemoveAllCustomLabelsFromSelfHostedRunnerForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.DeleteRemoveAllCustomLabelsFromSelfHostedRunnerForRepo.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Lists all labels for a self-hosted runner configured in a repository.
 *
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
 * @summary List labels for a self-hosted runner for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository
 */
export function getListLabelsForSelfHostedRunnerForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetListLabelsForSelfHostedRunnerForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListLabelsForSelfHostedRunnerForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Add custom labels to a self-hosted runner configured in a repository.
 *
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
 * @summary Add custom labels to a self-hosted runner for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository
 */
export function postAddCustomLabelsToSelfHostedRunnerForRepo(options: {
  pathParams: API.GithubV3Json.Actions.PostAddCustomLabelsToSelfHostedRunnerForRepo.PathParams;
  body: API.GithubV3Json.Actions.PostAddCustomLabelsToSelfHostedRunnerForRepo.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostAddCustomLabelsToSelfHostedRunnerForRepo.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Remove all previous custom labels and set the new custom labels for a specific
 * self-hosted runner configured in a repository.
 *
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
 * @summary Set custom labels for a self-hosted runner for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}/labels`
 * @docs https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository
 */
export function putSetCustomLabelsForSelfHostedRunnerForRepo(options: {
  pathParams: API.GithubV3Json.Actions.PutSetCustomLabelsForSelfHostedRunnerForRepo.PathParams;
  body: API.GithubV3Json.Actions.PutSetCustomLabelsForSelfHostedRunnerForRepo.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PutSetCustomLabelsForSelfHostedRunnerForRepo.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}/labels`,
    options,
  );
}

/**
 * Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 *
 * You must authenticate using an access token with the `repo`
 * scope to use this endpoint.
 * @summary Delete a self-hosted runner from a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}`
 * @docs https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository
 */
export function deleteSelfHostedRunnerFromRepo(options: {
  pathParams: API.GithubV3Json.Actions.DeleteSelfHostedRunnerFromRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}`,
    options,
  );
}

/**
 * Gets a specific self-hosted runner configured in a repository.
 *
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
 * @summary Get a self-hosted runner for a repository
 * @path `/repos/{owner}/{repo}/actions/runners/{runner_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository
 */
export function getSelfHostedRunnerForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetSelfHostedRunnerForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetSelfHostedRunnerForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners/${options.pathParams.runner_id}`,
    options,
  );
}

/**
 * Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
 * @summary List self-hosted runners for a repository
 * @path `/repos/{owner}/{repo}/actions/runners`
 * @docs https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository
 */
export function getListSelfHostedRunnersForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetListSelfHostedRunnersForRepo.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListSelfHostedRunnersForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListSelfHostedRunnersForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runners`,
    options,
  );
}

/**
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get the review history for a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/approvals`
 * @docs https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run
 */
export function getReviewsForRun(options: {
  pathParams: API.GithubV3Json.Actions.GetReviewsForRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetReviewsForRun.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/approvals`,
    options,
  );
}

/**
 * Approves a workflow run for a pull request from a public fork of a first time contributor. For more information, see ["Approving workflow runs from public forks](https://docs.github.com/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Approve a workflow run for a fork pull request
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/approve`
 * @docs https://docs.github.com/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request
 */
export function postApproveWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.PostApproveWorkflowRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostApproveWorkflowRun.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/approve`,
    options,
  );
}

/**
 * Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List workflow run artifacts
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts`
 * @docs https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts
 */
export function getListWorkflowRunArtifacts(options: {
  pathParams: API.GithubV3Json.Actions.GetListWorkflowRunArtifacts.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListWorkflowRunArtifacts.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListWorkflowRunArtifacts.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/artifacts`,
    options,
  );
}

/**
 * Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 * @summary List jobs for a workflow run attempt
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs`
 * @docs https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run-attempt
 */
export function getListJobsForWorkflowRunAttempt(options: {
  pathParams: API.GithubV3Json.Actions.GetListJobsForWorkflowRunAttempt.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListJobsForWorkflowRunAttempt.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListJobsForWorkflowRunAttempt.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/attempts/${options.pathParams.attempt_number}/jobs`,
    options,
  );
}

/**
 * Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
 * 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
 * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Download workflow run attempt logs
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs`
 * @docs https://docs.github.com/rest/reference/actions#download-workflow-run-attempt-logs
 */
export function getDownloadWorkflowRunAttemptLogs(options: {
  pathParams: API.GithubV3Json.Actions.GetDownloadWorkflowRunAttemptLogs.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/attempts/${options.pathParams.attempt_number}/logs`,
    options,
  );
}

/**
 * Gets a specific workflow run attempt. Anyone with read access to the repository
 * can use this endpoint. If the repository is private you must use an access token
 * with the `repo` scope. GitHub Apps must have the `actions:read` permission to
 * use this endpoint.
 * @summary Get a workflow run attempt
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-workflow-run-attempt
 */
export function getWorkflowRunAttempt(options: {
  pathParams: API.GithubV3Json.Actions.GetWorkflowRunAttempt.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetWorkflowRunAttempt.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetWorkflowRunAttempt.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/attempts/${options.pathParams.attempt_number}`,
    options,
  );
}

/**
 * Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Cancel a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/cancel`
 * @docs https://docs.github.com/rest/reference/actions#cancel-a-workflow-run
 */
export function postCancelWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.PostCancelWorkflowRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCancelWorkflowRun.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/cancel`,
    options,
  );
}

/**
 * Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 * @summary List jobs for a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/jobs`
 * @docs https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run
 */
export function getListJobsForWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.GetListJobsForWorkflowRun.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListJobsForWorkflowRun.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListJobsForWorkflowRun.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/jobs`,
    options,
  );
}

/**
 * Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Delete workflow run logs
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/logs`
 * @docs https://docs.github.com/rest/reference/actions#delete-workflow-run-logs
 */
export function deleteWorkflowRunLogs(options: {
  pathParams: API.GithubV3Json.Actions.DeleteWorkflowRunLogs.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/logs`,
    options,
  );
}

/**
 * Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
 * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
 * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
 * the `actions:read` permission to use this endpoint.
 * @summary Download workflow run logs
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/logs`
 * @docs https://docs.github.com/rest/reference/actions#download-workflow-run-logs
 */
export function getDownloadWorkflowRunLogs(options: {
  pathParams: API.GithubV3Json.Actions.GetDownloadWorkflowRunLogs.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/logs`,
    options,
  );
}

/**
 * Get all deployment environments for a workflow run that are waiting for protection rules to pass.
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get pending deployments for a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`
 * @docs https://docs.github.com/rest/reference/actions#get-pending-deployments-for-a-workflow-run
 */
export function getPendingDeploymentsForRun(options: {
  pathParams: API.GithubV3Json.Actions.GetPendingDeploymentsForRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetPendingDeploymentsForRun.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/pending_deployments`,
    options,
  );
}

/**
 * Approve or reject pending deployments that are waiting on approval by a required reviewer.
 *
 * Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.
 * @summary Review pending deployments for a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments`
 * @docs https://docs.github.com/rest/reference/actions#review-pending-deployments-for-a-workflow-run
 */
export function postReviewPendingDeploymentsForRun(options: {
  pathParams: API.GithubV3Json.Actions.PostReviewPendingDeploymentsForRun.PathParams;
  body: API.GithubV3Json.Actions.PostReviewPendingDeploymentsForRun.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostReviewPendingDeploymentsForRun.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/pending_deployments`,
    options,
  );
}

/**
 * Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.
 * @summary Re-run failed jobs from a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs`
 * @docs https://docs.github.com/rest/reference/actions#re-run-workflow-failed-jobs
 */
export function postReRunWorkflowFailedJobs(options: {
  pathParams: API.GithubV3Json.Actions.PostReRunWorkflowFailedJobs.PathParams;
  body?: API.GithubV3Json.Actions.PostReRunWorkflowFailedJobs.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostReRunWorkflowFailedJobs.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/rerun-failed-jobs`,
    options,
  );
}

/**
 * Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Re-run a workflow
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/rerun`
 * @docs https://docs.github.com/rest/reference/actions#re-run-a-workflow
 */
export function postReRunWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PostReRunWorkflow.PathParams;
  body?: API.GithubV3Json.Actions.PostReRunWorkflow.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostReRunWorkflow.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/rerun`,
    options,
  );
}

/**
 * Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get workflow run usage
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}/timing`
 * @docs https://docs.github.com/rest/reference/actions#get-workflow-run-usage
 */
export function getWorkflowRunUsage(options: {
  pathParams: API.GithubV3Json.Actions.GetWorkflowRunUsage.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetWorkflowRunUsage.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}/timing`,
    options,
  );
}

/**
 * Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
 * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
 * this endpoint.
 * @summary Delete a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}`
 * @docs https://docs.github.com/rest/reference/actions#delete-a-workflow-run
 */
export function deleteWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.DeleteWorkflowRun.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}`,
    options,
  );
}

/**
 * Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get a workflow run
 * @path `/repos/{owner}/{repo}/actions/runs/{run_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-workflow-run
 */
export function getWorkflowRun(options: {
  pathParams: API.GithubV3Json.Actions.GetWorkflowRun.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetWorkflowRun.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetWorkflowRun.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs/${options.pathParams.run_id}`,
    options,
  );
}

/**
 * Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List workflow runs for a repository
 * @path `/repos/{owner}/{repo}/actions/runs`
 * @docs https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository
 */
export function getListWorkflowRunsForRepo(options: {
  pathParams: API.GithubV3Json.Actions.GetListWorkflowRunsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListWorkflowRunsForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListWorkflowRunsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/runs`,
    options,
  );
}

/**
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary Get a repository public key
 * @path `/repos/{owner}/{repo}/actions/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/actions#get-a-repository-public-key
 */
export function getRepoPublicKey(options: {
  pathParams: API.GithubV3Json.Actions.GetRepoPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetRepoPublicKey.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/secrets/public-key`,
    options,
  );
}

/**
 * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary Delete a repository secret
 * @path `/repos/{owner}/{repo}/actions/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#delete-a-repository-secret
 */
export function deleteRepoSecret(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRepoSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary Get a repository secret
 * @path `/repos/{owner}/{repo}/actions/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-repository-secret
 */
export function getRepoSecret(options: {
  pathParams: API.GithubV3Json.Actions.GetRepoSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetRepoSecret.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
 * this endpoint.
 *
 * #### Example encrypting a secret using Node.js
 *
 * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
 *
 * ```
 * const sodium = require('libsodium-wrappers')
 * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
 * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
 *
 * //Check if libsodium is ready and then proceed.
 * sodium.ready.then(() => {
 *   // Convert Secret & Base64 key to Uint8Array.
 *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
 *   let binsec = sodium.from_string(secret)
 *
 *   //Encrypt the secret using LibSodium
 *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
 *
 *   // Convert encrypted Uint8Array to Base64
 *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
 *
 *   console.log(output)
 * });
 * ```
 *
 * #### Example encrypting a secret using Python
 *
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 *
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 *
 * def encrypt(public_key: str, secret_value: str) -> str:
 *   """Encrypt a Unicode string using the public key."""
 *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 *   sealed_box = public.SealedBox(public_key)
 *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 *   return b64encode(encrypted).decode("utf-8")
 * ```
 *
 * #### Example encrypting a secret using C#
 *
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 *
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 *
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 *
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 *
 * #### Example encrypting a secret using Ruby
 *
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 *
 * ```ruby
 * require "rbnacl"
 * require "base64"
 *
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 *
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 *
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
 * @summary Create or update a repository secret
 * @path `/repos/{owner}/{repo}/actions/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret
 */
export function putCreateOrUpdateRepoSecret(options: {
  pathParams: API.GithubV3Json.Actions.PutCreateOrUpdateRepoSecret.PathParams;
  body?: API.GithubV3Json.Actions.PutCreateOrUpdateRepoSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PutCreateOrUpdateRepoSecret.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary List repository secrets
 * @path `/repos/{owner}/{repo}/actions/secrets`
 * @docs https://docs.github.com/rest/reference/actions#list-repository-secrets
 */
export function getListRepoSecrets(options: {
  pathParams: API.GithubV3Json.Actions.GetListRepoSecrets.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListRepoSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRepoSecrets.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/secrets`,
    options,
  );
}

/**
 * Deletes a repository variable using the variable name.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
 * @summary Delete a repository variable
 * @path `/repos/{owner}/{repo}/actions/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#delete-a-repository-variable
 */
export function deleteRepoVariable(options: {
  pathParams: API.GithubV3Json.Actions.DeleteRepoVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Gets a specific variable in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
 * @summary Get a repository variable
 * @path `/repos/{owner}/{repo}/actions/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#get-a-repository-variable
 */
export function getRepoVariable(options: {
  pathParams: API.GithubV3Json.Actions.GetRepoVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetRepoVariable.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Updates a repository variable that you can reference in a GitHub Actions workflow.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
 * @summary Update a repository variable
 * @path `/repos/{owner}/{repo}/actions/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#update-a-repository-variable
 */
export function patchUpdateRepoVariable(options: {
  pathParams: API.GithubV3Json.Actions.PatchUpdateRepoVariable.PathParams;
  body?: API.GithubV3Json.Actions.PatchUpdateRepoVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Lists all repository variables. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions_variables:read` repository permission to use this endpoint.
 * @summary List repository variables
 * @path `/repos/{owner}/{repo}/actions/variables`
 * @docs https://docs.github.com/rest/actions/variables#list-repository-variables
 */
export function getListRepoVariables(options: {
  pathParams: API.GithubV3Json.Actions.GetListRepoVariables.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListRepoVariables.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRepoVariables.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/variables`,
    options,
  );
}

/**
 * Creates a repository variable that you can reference in a GitHub Actions workflow.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `actions_variables:write` repository permission to use this endpoint.
 * @summary Create a repository variable
 * @path `/repos/{owner}/{repo}/actions/variables`
 * @docs https://docs.github.com/rest/actions/variables#create-a-repository-variable
 */
export function postCreateRepoVariable(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateRepoVariable.PathParams;
  body: API.GithubV3Json.Actions.PostCreateRepoVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateRepoVariable.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/variables`,
    options,
  );
}

/**
 * Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Disable a workflow
 * @path `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable`
 * @docs https://docs.github.com/rest/reference/actions#disable-a-workflow
 */
export function putDisableWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PutDisableWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows/${options.pathParams.workflow_id}/disable`,
    options,
  );
}

/**
 * You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
 * @summary Create a workflow dispatch event
 * @path `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches`
 * @docs https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event
 */
export function postCreateWorkflowDispatch(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateWorkflowDispatch.PathParams;
  body: API.GithubV3Json.Actions.PostCreateWorkflowDispatch.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows/${options.pathParams.workflow_id}/dispatches`,
    options,
  );
}

/**
 * Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
 * @summary Enable a workflow
 * @path `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable`
 * @docs https://docs.github.com/rest/reference/actions#enable-a-workflow
 */
export function putEnableWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.PutEnableWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows/${options.pathParams.workflow_id}/enable`,
    options,
  );
}

/**
 * List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
 * @summary List workflow runs for a workflow
 * @path `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs`
 * @docs https://docs.github.com/rest/reference/actions#list-workflow-runs
 */
export function getListWorkflowRuns(options: {
  pathParams: API.GithubV3Json.Actions.GetListWorkflowRuns.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListWorkflowRuns.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListWorkflowRuns.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows/${options.pathParams.workflow_id}/runs`,
    options,
  );
}

/**
 * Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 *
 * You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get workflow usage
 * @path `/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing`
 * @docs https://docs.github.com/rest/reference/actions#get-workflow-usage
 */
export function getWorkflowUsage(options: {
  pathParams: API.GithubV3Json.Actions.GetWorkflowUsage.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetWorkflowUsage.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows/${options.pathParams.workflow_id}/timing`,
    options,
  );
}

/**
 * Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get a workflow
 * @path `/repos/{owner}/{repo}/actions/workflows/{workflow_id}`
 * @docs https://docs.github.com/rest/reference/actions#get-a-workflow
 */
export function getWorkflow(options: {
  pathParams: API.GithubV3Json.Actions.GetWorkflow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetWorkflow.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows/${options.pathParams.workflow_id}`,
    options,
  );
}

/**
 * Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List repository workflows
 * @path `/repos/{owner}/{repo}/actions/workflows`
 * @docs https://docs.github.com/rest/reference/actions#list-repository-workflows
 */
export function getListRepoWorkflows(options: {
  pathParams: API.GithubV3Json.Actions.GetListRepoWorkflows.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListRepoWorkflows.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListRepoWorkflows.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/actions/workflows`,
    options,
  );
}

/**
 * Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary Get an environment public key
 * @path `/repositories/{repository_id}/environments/{environment_name}/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/actions#get-an-environment-public-key
 */
export function getEnvironmentPublicKey(options: {
  pathParams: API.GithubV3Json.Actions.GetEnvironmentPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetEnvironmentPublicKey.Response>(
    "get",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/secrets/public-key`,
    options,
  );
}

/**
 * Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary Delete an environment secret
 * @path `/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#delete-an-environment-secret
 */
export function deleteEnvironmentSecret(options: {
  pathParams: API.GithubV3Json.Actions.DeleteEnvironmentSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary Get an environment secret
 * @path `/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#get-an-environment-secret
 */
export function getEnvironmentSecret(options: {
  pathParams: API.GithubV3Json.Actions.GetEnvironmentSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetEnvironmentSecret.Response>(
    "get",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates an environment secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
 * this endpoint.
 *
 * #### Example encrypting a secret using Node.js
 *
 * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
 *
 * ```
 * const sodium = require('libsodium-wrappers')
 * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
 * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
 *
 * //Check if libsodium is ready and then proceed.
 * sodium.ready.then(() => {
 *   // Convert Secret & Base64 key to Uint8Array.
 *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
 *   let binsec = sodium.from_string(secret)
 *
 *   //Encrypt the secret using LibSodium
 *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
 *
 *   // Convert encrypted Uint8Array to Base64
 *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
 *
 *   console.log(output)
 * });
 * ```
 *
 * #### Example encrypting a secret using Python
 *
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 *
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 *
 * def encrypt(public_key: str, secret_value: str) -> str:
 *   """Encrypt a Unicode string using the public key."""
 *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 *   sealed_box = public.SealedBox(public_key)
 *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 *   return b64encode(encrypted).decode("utf-8")
 * ```
 *
 * #### Example encrypting a secret using C#
 *
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 *
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 *
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 *
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 *
 * #### Example encrypting a secret using Ruby
 *
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 *
 * ```ruby
 * require "rbnacl"
 * require "base64"
 *
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 *
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 *
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
 * @summary Create or update an environment secret
 * @path `/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/actions#create-or-update-an-environment-secret
 */
export function putCreateOrUpdateEnvironmentSecret(options: {
  pathParams: API.GithubV3Json.Actions.PutCreateOrUpdateEnvironmentSecret.PathParams;
  body: API.GithubV3Json.Actions.PutCreateOrUpdateEnvironmentSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PutCreateOrUpdateEnvironmentSecret.Response>(
    "put",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
 * @summary List environment secrets
 * @path `/repositories/{repository_id}/environments/{environment_name}/secrets`
 * @docs https://docs.github.com/rest/reference/actions#list-environment-secrets
 */
export function getListEnvironmentSecrets(options: {
  pathParams: API.GithubV3Json.Actions.GetListEnvironmentSecrets.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListEnvironmentSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListEnvironmentSecrets.Response>(
    "get",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/secrets`,
    options,
  );
}

/**
 * Deletes an environment variable using the variable name.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
 * @summary Delete an environment variable
 * @path `/repositories/{repository_id}/environments/{environment_name}/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#delete-an-environment-variable
 */
export function deleteEnvironmentVariable(options: {
  pathParams: API.GithubV3Json.Actions.DeleteEnvironmentVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Gets a specific variable in an environment. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `environments:read` repository permission to use this endpoint.
 * @summary Get an environment variable
 * @path `/repositories/{repository_id}/environments/{environment_name}/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#get-an-environment-variable
 */
export function getEnvironmentVariable(options: {
  pathParams: API.GithubV3Json.Actions.GetEnvironmentVariable.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetEnvironmentVariable.Response>(
    "get",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Updates an environment variable that you can reference in a GitHub Actions workflow.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
 * @summary Update an environment variable
 * @path `/repositories/{repository_id}/environments/{environment_name}/variables/{name}`
 * @docs https://docs.github.com/rest/actions/variables#update-an-environment-variable
 */
export function patchUpdateEnvironmentVariable(options: {
  pathParams: API.GithubV3Json.Actions.PatchUpdateEnvironmentVariable.PathParams;
  body?: API.GithubV3Json.Actions.PatchUpdateEnvironmentVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/variables/${options.pathParams.name}`,
    options,
  );
}

/**
 * Lists all environment variables. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `environments:read` repository permission to use this endpoint.
 * @summary List environment variables
 * @path `/repositories/{repository_id}/environments/{environment_name}/variables`
 * @docs https://docs.github.com/rest/actions/variables#list-environment-variables
 */
export function getListEnvironmentVariables(options: {
  pathParams: API.GithubV3Json.Actions.GetListEnvironmentVariables.PathParams;
  queryParams?: API.GithubV3Json.Actions.GetListEnvironmentVariables.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.GetListEnvironmentVariables.Response>(
    "get",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/variables`,
    options,
  );
}

/**
 * Create an environment variable that you can reference in a GitHub Actions workflow.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `environment:write` repository permission to use this endpoint.
 * @summary Create an environment variable
 * @path `/repositories/{repository_id}/environments/{environment_name}/variables`
 * @docs https://docs.github.com/rest/actions/variables#create-an-environment-variable
 */
export function postCreateEnvironmentVariable(options: {
  pathParams: API.GithubV3Json.Actions.PostCreateEnvironmentVariable.PathParams;
  body: API.GithubV3Json.Actions.PostCreateEnvironmentVariable.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Actions.PostCreateEnvironmentVariable.Response>(
    "post",
    `/repositories/${options.pathParams.repository_id}/environments/${options.pathParams.environment_name}/variables`,
    options,
  );
}
