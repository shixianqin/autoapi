import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets the summary of the free and paid GitHub Actions minutes used.
 *
 * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 *
 * Access tokens must have the `repo` or `admin:org` scope.
 * @summary Get GitHub Actions billing for an organization
 * @path `/orgs/{org}/settings/billing/actions`
 * @docs https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-organization
 */
export function getGithubActionsOrg(options: {
  pathParams: API.GithubV3Json.Billing.GetGithubActionsOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Billing.GetGithubActionsOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/settings/billing/actions`,
    options,
  );
}

/**
 * Gets the free and paid storage used for GitHub Packages in gigabytes.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * Access tokens must have the `repo` or `admin:org` scope.
 * @summary Get GitHub Packages billing for an organization
 * @path `/orgs/{org}/settings/billing/packages`
 * @docs https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-organization
 */
export function getGithubPackagesOrg(options: {
  pathParams: API.GithubV3Json.Billing.GetGithubPackagesOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Billing.GetGithubPackagesOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/settings/billing/packages`,
    options,
  );
}

/**
 * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * Access tokens must have the `repo` or `admin:org` scope.
 * @summary Get shared storage billing for an organization
 * @path `/orgs/{org}/settings/billing/shared-storage`
 * @docs https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-organization
 */
export function getSharedStorageOrg(options: {
  pathParams: API.GithubV3Json.Billing.GetSharedStorageOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Billing.GetSharedStorageOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/settings/billing/shared-storage`,
    options,
  );
}

/**
 * Gets the summary of the free and paid GitHub Actions minutes used.
 *
 * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 *
 * Access tokens must have the `user` scope.
 * @summary Get GitHub Actions billing for a user
 * @path `/users/{username}/settings/billing/actions`
 * @docs https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-a-user
 */
export function getGithubActionsUser(options: {
  pathParams: API.GithubV3Json.Billing.GetGithubActionsUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Billing.GetGithubActionsUser.Response>(
    "get",
    `/users/${options.pathParams.username}/settings/billing/actions`,
    options,
  );
}

/**
 * Gets the free and paid storage used for GitHub Packages in gigabytes.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * Access tokens must have the `user` scope.
 * @summary Get GitHub Packages billing for a user
 * @path `/users/{username}/settings/billing/packages`
 * @docs https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-a-user
 */
export function getGithubPackagesUser(options: {
  pathParams: API.GithubV3Json.Billing.GetGithubPackagesUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Billing.GetGithubPackagesUser.Response>(
    "get",
    `/users/${options.pathParams.username}/settings/billing/packages`,
    options,
  );
}

/**
 * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
 *
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 *
 * Access tokens must have the `user` scope.
 * @summary Get shared storage billing for a user
 * @path `/users/{username}/settings/billing/shared-storage`
 * @docs https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-a-user
 */
export function getSharedStorageUser(options: {
  pathParams: API.GithubV3Json.Billing.GetSharedStorageUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Billing.GetSharedStorageUser.Response>(
    "get",
    `/users/${options.pathParams.username}/settings/billing/shared-storage`,
    options,
  );
}
