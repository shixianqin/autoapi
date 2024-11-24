import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists repositories for the specified organization.
 *
 * **Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * @summary List organization repositories
 * @path `/orgs/{org}/repos`
 * @docs https://docs.github.com/rest/reference/repos#list-organization-repositories
 */
export function getListForOrg(options: {
  pathParams: API.GithubV3Json.Repos.GetListForOrg.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListForOrg.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/repos`,
    options,
  );
}

/**
 * Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
 *
 * **OAuth scope requirements**
 *
 * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
 *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
 *   `repo` scope to create a private repository
 * @summary Create an organization repository
 * @path `/orgs/{org}/repos`
 * @docs https://docs.github.com/rest/reference/repos#create-an-organization-repository
 */
export function postCreateInOrg(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateInOrg.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateInOrg.Headers;
  body: API.GithubV3Json.Repos.PostCreateInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateInOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/repos`,
    options,
  );
}

/**
 * This deletes a single autolink reference by ID that was configured for the given repository.
 *
 * Information about autolinks are only available to repository administrators.
 * @summary Delete an autolink reference from a repository
 * @path `/repos/{owner}/{repo}/autolinks/{autolink_id}`
 * @docs https://docs.github.com/rest/repos/autolinks#delete-an-autolink-reference-from-a-repository
 */
export function deleteAutolink(options: {
  pathParams: API.GithubV3Json.Repos.DeleteAutolink.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteAutolink.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/autolinks/${options.pathParams.autolink_id}`,
    options,
  );
}

/**
 * This returns a single autolink reference by ID that was configured for the given repository.
 *
 * Information about autolinks are only available to repository administrators.
 * @summary Get an autolink reference of a repository
 * @path `/repos/{owner}/{repo}/autolinks/{autolink_id}`
 * @docs https://docs.github.com/rest/repos/autolinks#get-an-autolink-reference-of-a-repository
 */
export function getAutolink(options: {
  pathParams: API.GithubV3Json.Repos.GetAutolink.PathParams;
  headers?: API.GithubV3Json.Repos.GetAutolink.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAutolink.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/autolinks/${options.pathParams.autolink_id}`,
    options,
  );
}

/**
 * This returns a list of autolinks configured for the given repository.
 *
 * Information about autolinks are only available to repository administrators.
 * @summary List all autolinks of a repository
 * @path `/repos/{owner}/{repo}/autolinks`
 * @docs https://docs.github.com/rest/repos/autolinks#list-all-autolinks-of-a-repository
 */
export function getListAutolinks(options: {
  pathParams: API.GithubV3Json.Repos.GetListAutolinks.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListAutolinks.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListAutolinks.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListAutolinks.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/autolinks`,
    options,
  );
}

/**
 * Users with admin access to the repository can create an autolink.
 * @summary Create an autolink reference for a repository
 * @path `/repos/{owner}/{repo}/autolinks`
 * @docs https://docs.github.com/rest/repos/autolinks#create-an-autolink-reference-for-a-repository
 */
export function postCreateAutolink(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateAutolink.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateAutolink.Headers;
  body: API.GithubV3Json.Repos.PostCreateAutolink.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateAutolink.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/autolinks`,
    options,
  );
}

/**
 * Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/articles/configuring-automated-security-fixes)".
 * @summary Disable automated security fixes
 * @path `/repos/{owner}/{repo}/automated-security-fixes`
 * @docs https://docs.github.com/rest/reference/repos#disable-automated-security-fixes
 */
export function deleteDisableAutomatedSecurityFixes(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDisableAutomatedSecurityFixes.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDisableAutomatedSecurityFixes.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/automated-security-fixes`,
    options,
  );
}

/**
 * Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/articles/configuring-automated-security-fixes)".
 * @summary Enable automated security fixes
 * @path `/repos/{owner}/{repo}/automated-security-fixes`
 * @docs https://docs.github.com/rest/reference/repos#enable-automated-security-fixes
 */
export function putEnableAutomatedSecurityFixes(options: {
  pathParams: API.GithubV3Json.Repos.PutEnableAutomatedSecurityFixes.PathParams;
  headers?: API.GithubV3Json.Repos.PutEnableAutomatedSecurityFixes.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/automated-security-fixes`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
 * @summary Delete admin branch protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`
 * @docs https://docs.github.com/rest/branches/branch-protection#delete-admin-branch-protection
 */
export function deleteAdminBranchProtection(options: {
  pathParams: API.GithubV3Json.Repos.DeleteAdminBranchProtection.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteAdminBranchProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/enforce_admins`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Get admin branch protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-admin-branch-protection
 */
export function getAdminBranchProtection(options: {
  pathParams: API.GithubV3Json.Repos.GetAdminBranchProtection.PathParams;
  headers?: API.GithubV3Json.Repos.GetAdminBranchProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAdminBranchProtection.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/enforce_admins`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
 * @summary Set admin branch protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins`
 * @docs https://docs.github.com/rest/branches/branch-protection#set-admin-branch-protection
 */
export function postSetAdminBranchProtection(options: {
  pathParams: API.GithubV3Json.Repos.PostSetAdminBranchProtection.PathParams;
  headers?: API.GithubV3Json.Repos.PostSetAdminBranchProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostSetAdminBranchProtection.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/enforce_admins`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Delete pull request review protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`
 * @docs https://docs.github.com/rest/branches/branch-protection#delete-pull-request-review-protection
 */
export function deletePullRequestReviewProtection(options: {
  pathParams: API.GithubV3Json.Repos.DeletePullRequestReviewProtection.PathParams;
  headers?: API.GithubV3Json.Repos.DeletePullRequestReviewProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_pull_request_reviews`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Get pull request review protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-pull-request-review-protection
 */
export function getPullRequestReviewProtection(options: {
  pathParams: API.GithubV3Json.Repos.GetPullRequestReviewProtection.PathParams;
  headers?: API.GithubV3Json.Repos.GetPullRequestReviewProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetPullRequestReviewProtection.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_pull_request_reviews`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
 *
 * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
 * @summary Update pull request review protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews`
 * @docs https://docs.github.com/rest/branches/branch-protection#update-pull-request-review-protection
 */
export function patchUpdatePullRequestReviewProtection(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdatePullRequestReviewProtection.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdatePullRequestReviewProtection.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdatePullRequestReviewProtection.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdatePullRequestReviewProtection.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_pull_request_reviews`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
 * @summary Delete commit signature protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`
 * @docs https://docs.github.com/rest/branches/branch-protection#delete-commit-signature-protection
 */
export function deleteCommitSignatureProtection(options: {
  pathParams: API.GithubV3Json.Repos.DeleteCommitSignatureProtection.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteCommitSignatureProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_signatures`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.
 *
 * **Note**: You must enable branch protection to require signed commits.
 * @summary Get commit signature protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-commit-signature-protection
 */
export function getCommitSignatureProtection(options: {
  pathParams: API.GithubV3Json.Repos.GetCommitSignatureProtection.PathParams;
  headers?: API.GithubV3Json.Repos.GetCommitSignatureProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCommitSignatureProtection.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_signatures`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
 * @summary Create commit signature protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures`
 * @docs https://docs.github.com/rest/branches/branch-protection#create-commit-signature-protection
 */
export function postCreateCommitSignatureProtection(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateCommitSignatureProtection.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateCommitSignatureProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateCommitSignatureProtection.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_signatures`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Remove status check contexts
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
 * @docs https://docs.github.com/rest/branches/branch-protection#remove-status-check-contexts
 */
export function deleteRemoveStatusCheckContexts(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRemoveStatusCheckContexts.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRemoveStatusCheckContexts.Headers;
  body: API.GithubV3Json.Repos.DeleteRemoveStatusCheckContexts.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.DeleteRemoveStatusCheckContexts.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks/contexts`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Get all status check contexts
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-all-status-check-contexts
 */
export function getAllStatusCheckContexts(options: {
  pathParams: API.GithubV3Json.Repos.GetAllStatusCheckContexts.PathParams;
  headers?: API.GithubV3Json.Repos.GetAllStatusCheckContexts.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAllStatusCheckContexts.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks/contexts`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Add status check contexts
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
 * @docs https://docs.github.com/rest/branches/branch-protection#add-status-check-contexts
 */
export function postAddStatusCheckContexts(options: {
  pathParams: API.GithubV3Json.Repos.PostAddStatusCheckContexts.PathParams;
  headers?: API.GithubV3Json.Repos.PostAddStatusCheckContexts.Headers;
  body: API.GithubV3Json.Repos.PostAddStatusCheckContexts.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostAddStatusCheckContexts.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks/contexts`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Set status check contexts
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts`
 * @docs https://docs.github.com/rest/branches/branch-protection#set-status-check-contexts
 */
export function putSetStatusCheckContexts(options: {
  pathParams: API.GithubV3Json.Repos.PutSetStatusCheckContexts.PathParams;
  headers?: API.GithubV3Json.Repos.PutSetStatusCheckContexts.Headers;
  body: API.GithubV3Json.Repos.PutSetStatusCheckContexts.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutSetStatusCheckContexts.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks/contexts`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Remove status check protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`
 * @docs https://docs.github.com/rest/branches/branch-protection#remove-status-check-protection
 */
export function deleteRemoveStatusCheckProtection(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRemoveStatusCheckProtection.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRemoveStatusCheckProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Get status checks protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-status-checks-protection
 */
export function getStatusChecksProtection(options: {
  pathParams: API.GithubV3Json.Repos.GetStatusChecksProtection.PathParams;
  headers?: API.GithubV3Json.Repos.GetStatusChecksProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetStatusChecksProtection.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
 * @summary Update status check protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks`
 * @docs https://docs.github.com/rest/branches/branch-protection#update-status-check-protection
 */
export function patchUpdateStatusCheckProtection(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateStatusCheckProtection.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateStatusCheckProtection.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdateStatusCheckProtection.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateStatusCheckProtection.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/required_status_checks`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * @summary Remove app access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
 * @docs https://docs.github.com/rest/branches/branch-protection#remove-app-access-restrictions
 */
export function deleteRemoveAppAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRemoveAppAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRemoveAppAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.DeleteRemoveAppAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.DeleteRemoveAppAccessRestrictions.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/apps`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * @summary Get apps with access to the protected branch
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
 * @docs https://docs.github.com/rest/branches/branch-protection#list-apps-with-access-to-the-protected-branch
 */
export function getAppsWithAccessToProtectedBranch(options: {
  pathParams: API.GithubV3Json.Repos.GetAppsWithAccessToProtectedBranch.PathParams;
  headers?: API.GithubV3Json.Repos.GetAppsWithAccessToProtectedBranch.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAppsWithAccessToProtectedBranch.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/apps`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * @summary Add app access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
 * @docs https://docs.github.com/rest/branches/branch-protection#add-app-access-restrictions
 */
export function postAddAppAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.PostAddAppAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.PostAddAppAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.PostAddAppAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostAddAppAccessRestrictions.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/apps`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * @summary Set app access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps`
 * @docs https://docs.github.com/rest/branches/branch-protection#set-app-access-restrictions
 */
export function putSetAppAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.PutSetAppAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.PutSetAppAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.PutSetAppAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutSetAppAccessRestrictions.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/apps`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
 * @summary Remove team access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
 * @docs https://docs.github.com/rest/branches/branch-protection#remove-team-access-restrictions
 */
export function deleteRemoveTeamAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRemoveTeamAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRemoveTeamAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.DeleteRemoveTeamAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.DeleteRemoveTeamAccessRestrictions.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/teams`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists the teams who have push access to this branch. The list includes child teams.
 * @summary Get teams with access to the protected branch
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
 * @docs https://docs.github.com/rest/branches/branch-protection#list-teams-with-access-to-the-protected-branch
 */
export function getTeamsWithAccessToProtectedBranch(options: {
  pathParams: API.GithubV3Json.Repos.GetTeamsWithAccessToProtectedBranch.PathParams;
  headers?: API.GithubV3Json.Repos.GetTeamsWithAccessToProtectedBranch.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetTeamsWithAccessToProtectedBranch.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/teams`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Grants the specified teams push access for this branch. You can also give push access to child teams.
 * @summary Add team access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
 * @docs https://docs.github.com/rest/branches/branch-protection#add-team-access-restrictions
 */
export function postAddTeamAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.PostAddTeamAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.PostAddTeamAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.PostAddTeamAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostAddTeamAccessRestrictions.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/teams`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
 * @summary Set team access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams`
 * @docs https://docs.github.com/rest/branches/branch-protection#set-team-access-restrictions
 */
export function putSetTeamAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.PutSetTeamAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.PutSetTeamAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.PutSetTeamAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutSetTeamAccessRestrictions.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/teams`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Removes the ability of a user to push to this branch.
 *
 * | Type    | Description                                                                                                                                   |
 * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
 * @summary Remove user access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
 * @docs https://docs.github.com/rest/branches/branch-protection#remove-user-access-restrictions
 */
export function deleteRemoveUserAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRemoveUserAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRemoveUserAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.DeleteRemoveUserAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.DeleteRemoveUserAccessRestrictions.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/users`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists the people who have push access to this branch.
 * @summary Get users with access to the protected branch
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
 * @docs https://docs.github.com/rest/branches/branch-protection#list-users-with-access-to-the-protected-branch
 */
export function getUsersWithAccessToProtectedBranch(options: {
  pathParams: API.GithubV3Json.Repos.GetUsersWithAccessToProtectedBranch.PathParams;
  headers?: API.GithubV3Json.Repos.GetUsersWithAccessToProtectedBranch.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetUsersWithAccessToProtectedBranch.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/users`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Grants the specified people push access for this branch.
 *
 * | Type    | Description                                                                                                                   |
 * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
 * @summary Add user access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
 * @docs https://docs.github.com/rest/branches/branch-protection#add-user-access-restrictions
 */
export function postAddUserAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.PostAddUserAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.PostAddUserAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.PostAddUserAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostAddUserAccessRestrictions.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/users`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
 *
 * | Type    | Description                                                                                                                   |
 * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
 * @summary Set user access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users`
 * @docs https://docs.github.com/rest/branches/branch-protection#set-user-access-restrictions
 */
export function putSetUserAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.PutSetUserAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.PutSetUserAccessRestrictions.Headers;
  body: API.GithubV3Json.Repos.PutSetUserAccessRestrictions.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutSetUserAccessRestrictions.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions/users`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Disables the ability to restrict who can push to this branch.
 * @summary Delete access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions`
 * @docs https://docs.github.com/rest/branches/branch-protection#delete-access-restrictions
 */
export function deleteAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.DeleteAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteAccessRestrictions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists who has access to this protected branch.
 *
 * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
 * @summary Get access restrictions
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection/restrictions`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-access-restrictions
 */
export function getAccessRestrictions(options: {
  pathParams: API.GithubV3Json.Repos.GetAccessRestrictions.PathParams;
  headers?: API.GithubV3Json.Repos.GetAccessRestrictions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAccessRestrictions.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection/restrictions`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Delete branch protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection`
 * @docs https://docs.github.com/rest/branches/branch-protection#delete-branch-protection
 */
export function deleteBranchProtection(options: {
  pathParams: API.GithubV3Json.Repos.DeleteBranchProtection.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteBranchProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary Get branch protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection`
 * @docs https://docs.github.com/rest/branches/branch-protection#get-branch-protection
 */
export function getBranchProtection(options: {
  pathParams: API.GithubV3Json.Repos.GetBranchProtection.PathParams;
  headers?: API.GithubV3Json.Repos.GetBranchProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetBranchProtection.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Protecting a branch requires admin or owner permissions to the repository.
 *
 * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
 *
 * **Note**: The list of users, apps, and teams in total is limited to 100 items.
 * @summary Update branch protection
 * @path `/repos/{owner}/{repo}/branches/{branch}/protection`
 * @docs https://docs.github.com/rest/branches/branch-protection#update-branch-protection
 */
export function putUpdateBranchProtection(options: {
  pathParams: API.GithubV3Json.Repos.PutUpdateBranchProtection.PathParams;
  headers?: API.GithubV3Json.Repos.PutUpdateBranchProtection.Headers;
  body: API.GithubV3Json.Repos.PutUpdateBranchProtection.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutUpdateBranchProtection.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/protection`,
    options,
  );
}

/**
 * Renames a branch in a repository.
 *
 * **Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".
 *
 * The permissions required to use this endpoint depends on whether you are renaming the default branch.
 *
 * To rename a non-default branch:
 * Users must have push access.
 * GitHub Apps must have the `contents:write` repository permission.
 *
 * To rename the default branch:
 * Users must have admin or owner permissions.
 * GitHub Apps must have the `administration:write` repository permission.
 * @summary Rename a branch
 * @path `/repos/{owner}/{repo}/branches/{branch}/rename`
 * @docs https://docs.github.com/rest/branches/branches#rename-a-branch
 */
export function postRenameBranch(options: {
  pathParams: API.GithubV3Json.Repos.PostRenameBranch.PathParams;
  headers?: API.GithubV3Json.Repos.PostRenameBranch.Headers;
  body: API.GithubV3Json.Repos.PostRenameBranch.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostRenameBranch.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}/rename`,
    options,
  );
}

/**
 * Get a branch
 * @path `/repos/{owner}/{repo}/branches/{branch}`
 * @docs https://docs.github.com/rest/branches/branches#get-a-branch
 */
export function getBranch(options: {
  pathParams: API.GithubV3Json.Repos.GetBranch.PathParams;
  headers?: API.GithubV3Json.Repos.GetBranch.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetBranch.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches/${options.pathParams.branch}`,
    options,
  );
}

/**
 * List branches
 * @path `/repos/{owner}/{repo}/branches`
 * @docs https://docs.github.com/rest/branches/branches#list-branches
 */
export function getListBranches(options: {
  pathParams: API.GithubV3Json.Repos.GetListBranches.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListBranches.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListBranches.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListBranches.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/branches`,
    options,
  );
}

/**
 * List any syntax errors that are detected in the CODEOWNERS
 * file.
 *
 * For more information about the correct CODEOWNERS syntax,
 * see "[About code owners](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
 * @summary List CODEOWNERS errors
 * @path `/repos/{owner}/{repo}/codeowners/errors`
 * @docs https://docs.github.com/rest/reference/repos#list-codeowners-errors
 */
export function getCodeownersErrors(options: {
  pathParams: API.GithubV3Json.Repos.GetCodeownersErrors.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetCodeownersErrors.QueryParams;
  headers?: API.GithubV3Json.Repos.GetCodeownersErrors.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCodeownersErrors.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codeowners/errors`,
    options,
  );
}

/**
 * Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
 * @summary Get repository permissions for a user
 * @path `/repos/{owner}/{repo}/collaborators/{username}/permission`
 * @docs https://docs.github.com/rest/collaborators/collaborators#get-repository-permissions-for-a-user
 */
export function getCollaboratorPermissionLevel(options: {
  pathParams: API.GithubV3Json.Repos.GetCollaboratorPermissionLevel.PathParams;
  headers?: API.GithubV3Json.Repos.GetCollaboratorPermissionLevel.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCollaboratorPermissionLevel.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/collaborators/${options.pathParams.username}/permission`,
    options,
  );
}

/**
 * Remove a repository collaborator
 * @path `/repos/{owner}/{repo}/collaborators/{username}`
 * @docs https://docs.github.com/rest/collaborators/collaborators#remove-a-repository-collaborator
 */
export function deleteRemoveCollaborator(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRemoveCollaborator.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRemoveCollaborator.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
 *
 * Team members will include the members of child teams.
 *
 * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
 * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
 * endpoint.
 * @summary Check if a user is a repository collaborator
 * @path `/repos/{owner}/{repo}/collaborators/{username}`
 * @docs https://docs.github.com/rest/collaborators/collaborators#check-if-a-user-is-a-repository-collaborator
 */
export function getCheckCollaborator(options: {
  pathParams: API.GithubV3Json.Repos.GetCheckCollaborator.PathParams;
  headers?: API.GithubV3Json.Repos.GetCheckCollaborator.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 *
 * Adding an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
 *
 * For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:
 *
 * ```
 * Cannot assign {member} permission of {role name}
 * ```
 *
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 *
 * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/rest/reference/repos#invitations).
 *
 * **Updating an existing collaborator's permission level**
 *
 * The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.
 *
 * **Rate limits**
 *
 * You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
 * @summary Add a repository collaborator
 * @path `/repos/{owner}/{repo}/collaborators/{username}`
 * @docs https://docs.github.com/rest/collaborators/collaborators#add-a-repository-collaborator
 */
export function putAddCollaborator(options: {
  pathParams: API.GithubV3Json.Repos.PutAddCollaborator.PathParams;
  headers?: API.GithubV3Json.Repos.PutAddCollaborator.Headers;
  body?: API.GithubV3Json.Repos.PutAddCollaborator.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutAddCollaborator.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
 * Organization members with write, maintain, or admin privileges on the organization-owned repository can use this endpoint.
 *
 * Team members will include the members of child teams.
 *
 * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
 * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
 * endpoint.
 * @summary List repository collaborators
 * @path `/repos/{owner}/{repo}/collaborators`
 * @docs https://docs.github.com/rest/collaborators/collaborators#list-repository-collaborators
 */
export function getListCollaborators(options: {
  pathParams: API.GithubV3Json.Repos.GetListCollaborators.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListCollaborators.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListCollaborators.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListCollaborators.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/collaborators`,
    options,
  );
}

/**
 * Delete a commit comment
 * @path `/repos/{owner}/{repo}/comments/{comment_id}`
 * @docs https://docs.github.com/rest/commits/comments#delete-a-commit-comment
 */
export function deleteCommitComment(options: {
  pathParams: API.GithubV3Json.Repos.DeleteCommitComment.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteCommitComment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Get a commit comment
 * @path `/repos/{owner}/{repo}/comments/{comment_id}`
 * @docs https://docs.github.com/rest/commits/comments#get-a-commit-comment
 */
export function getCommitComment(options: {
  pathParams: API.GithubV3Json.Repos.GetCommitComment.PathParams;
  headers?: API.GithubV3Json.Repos.GetCommitComment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCommitComment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Update a commit comment
 * @path `/repos/{owner}/{repo}/comments/{comment_id}`
 * @docs https://docs.github.com/rest/commits/comments#update-a-commit-comment
 */
export function patchUpdateCommitComment(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateCommitComment.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateCommitComment.Headers;
  body: API.GithubV3Json.Repos.PatchUpdateCommitComment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateCommitComment.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Commit Comments use [these custom media types](https://docs.github.com/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/rest/overview/media-types/).
 *
 * Comments are ordered by ascending ID.
 * @summary List commit comments for a repository
 * @path `/repos/{owner}/{repo}/comments`
 * @docs https://docs.github.com/rest/commits/comments#list-commit-comments-for-a-repository
 */
export function getListCommitCommentsForRepo(options: {
  pathParams: API.GithubV3Json.Repos.GetListCommitCommentsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListCommitCommentsForRepo.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListCommitCommentsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListCommitCommentsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments`,
    options,
  );
}

/**
 * Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
 * @summary List branches for HEAD commit
 * @path `/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head`
 * @docs https://docs.github.com/rest/commits/commits#list-branches-for-head-commit
 */
export function getListBranchesForHeadCommit(options: {
  pathParams: API.GithubV3Json.Repos.GetListBranchesForHeadCommit.PathParams;
  headers?: API.GithubV3Json.Repos.GetListBranchesForHeadCommit.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListBranchesForHeadCommit.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.commit_sha}/branches-where-head`,
    options,
  );
}

/**
 * Use the `:commit_sha` to specify the commit that will have its comments listed.
 * @summary List commit comments
 * @path `/repos/{owner}/{repo}/commits/{commit_sha}/comments`
 * @docs https://docs.github.com/rest/commits/comments#list-commit-comments
 */
export function getListCommentsForCommit(options: {
  pathParams: API.GithubV3Json.Repos.GetListCommentsForCommit.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListCommentsForCommit.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListCommentsForCommit.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListCommentsForCommit.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.commit_sha}/comments`,
    options,
  );
}

/**
 * Create a comment for a commit using its `:commit_sha`.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create a commit comment
 * @path `/repos/{owner}/{repo}/commits/{commit_sha}/comments`
 * @docs https://docs.github.com/rest/commits/comments#create-a-commit-comment
 */
export function postCreateCommitComment(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateCommitComment.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateCommitComment.Headers;
  body: API.GithubV3Json.Repos.PostCreateCommitComment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateCommitComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.commit_sha}/comments`,
    options,
  );
}

/**
 * Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, will only return open pull requests associated with the commit.
 * @summary List pull requests associated with a commit
 * @path `/repos/{owner}/{repo}/commits/{commit_sha}/pulls`
 * @docs https://docs.github.com/rest/commits/commits#list-pull-requests-associated-with-a-commit
 */
export function getListPullRequestsAssociatedWithCommit(options: {
  pathParams: API.GithubV3Json.Repos.GetListPullRequestsAssociatedWithCommit.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListPullRequestsAssociatedWithCommit.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListPullRequestsAssociatedWithCommit.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListPullRequestsAssociatedWithCommit.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.commit_sha}/pulls`,
    options,
  );
}

/**
 * Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
 *
 * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
 * @summary List commit statuses for a reference
 * @path `/repos/{owner}/{repo}/commits/{ref}/statuses`
 * @docs https://docs.github.com/rest/commits/statuses#list-commit-statuses-for-a-reference
 */
export function getListCommitStatusesForRef(options: {
  pathParams: API.GithubV3Json.Repos.GetListCommitStatusesForRef.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListCommitStatusesForRef.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListCommitStatusesForRef.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListCommitStatusesForRef.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.ref}/statuses`,
    options,
  );
}

/**
 * Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
 *
 *
 * Additionally, a combined `state` is returned. The `state` is one of:
 *   **failure** if any of the contexts report as `error` or `failure`
 *   **pending** if there are no statuses or a context is `pending`
 *   **success** if the latest status for all contexts is `success`
 * @summary Get the combined status for a specific reference
 * @path `/repos/{owner}/{repo}/commits/{ref}/status`
 * @docs https://docs.github.com/rest/commits/statuses#get-the-combined-status-for-a-specific-reference
 */
export function getCombinedStatusForRef(options: {
  pathParams: API.GithubV3Json.Repos.GetCombinedStatusForRef.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetCombinedStatusForRef.QueryParams;
  headers?: API.GithubV3Json.Repos.GetCombinedStatusForRef.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCombinedStatusForRef.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.ref}/status`,
    options,
  );
}

/**
 * Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
 *
 * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
 *
 * You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
 *
 * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
 *
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary Get a commit
 * @path `/repos/{owner}/{repo}/commits/{ref}`
 * @docs https://docs.github.com/rest/commits/commits#get-a-commit
 */
export function getCommit(options: {
  pathParams: API.GithubV3Json.Repos.GetCommit.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetCommit.QueryParams;
  headers?: API.GithubV3Json.Repos.GetCommit.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCommit.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits/${options.pathParams.ref}`,
    options,
  );
}

/**
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary List commits
 * @path `/repos/{owner}/{repo}/commits`
 * @docs https://docs.github.com/rest/commits/commits#list-commits
 */
export function getListCommits(options: {
  pathParams: API.GithubV3Json.Repos.GetListCommits.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListCommits.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListCommits.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListCommits.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/commits`,
    options,
  );
}

/**
 * Returns all community profile metrics for a repository. The repository cannot be a fork.
 *
 * The returned metrics include an overall health score, the repository description, the presence of documentation, the
 * detected code of conduct, the detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE,
 * README, and CONTRIBUTING files.
 *
 * The `health_percentage` score is defined as a percentage of how many of
 * these four documents are present: README, CONTRIBUTING, LICENSE, and
 * CODE_OF_CONDUCT. For example, if all four documents are present, then
 * the `health_percentage` is `100`. If only one is present, then the
 * `health_percentage` is `25`.
 *
 * `content_reports_enabled` is only returned for organization-owned repositories.
 * @summary Get community profile metrics
 * @path `/repos/{owner}/{repo}/community/profile`
 * @docs https://docs.github.com/rest/metrics/community#get-community-profile-metrics
 */
export function getCommunityProfileMetrics(options: {
  pathParams: API.GithubV3Json.Repos.GetCommunityProfileMetrics.PathParams;
  headers?: API.GithubV3Json.Repos.GetCommunityProfileMetrics.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCommunityProfileMetrics.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/community/profile`,
    options,
  );
}

/**
 * Compares two commits against one another. You can compare branches in the same repository, or you can compare branches that exist in different repositories within the same repository network, including fork branches. For more information about how to view a repository's network, see "[Understanding connections between repositories](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)."
 *
 * This endpoint is equivalent to running the `git log BASE...HEAD` command, but it returns commits in a different order. The `git log BASE...HEAD` command returns commits in reverse chronological order, whereas the API returns commits in chronological order. You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
 *
 * The API response includes details about the files that were changed between the two commits. This includes the status of the change (if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
 *
 * When calling this endpoint without any paging parameter (`per_page` or `page`), the returned list is limited to 250 commits, and the last commit in the list is the most recent of the entire comparison.
 *
 * **Working with large comparisons**
 *
 * To process a response with a large number of commits, use a query parameter (`per_page` or `page`) to paginate the results. When using pagination:
 *
 * - The list of changed files is only shown on the first page of results, but it includes all changed files for the entire comparison.
 * - The results are returned in chronological order, but the last commit in the returned list may not be the most recent one in the entire set if there are more pages of results.
 *
 * For more information on working with pagination, see "[Using pagination in the REST API](https://docs.github.com/rest/guides/using-pagination-in-the-rest-api)."
 *
 * **Signature verification object**
 *
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The `verification` object includes the following fields:
 *
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 *
 * These are the possible values for `reason` in the `verification` object:
 *
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
 * @summary Compare two commits
 * @path `/repos/{owner}/{repo}/compare/{basehead}`
 * @docs https://docs.github.com/rest/commits/commits#compare-two-commits
 */
export function getCompareCommits(options: {
  pathParams: API.GithubV3Json.Repos.GetCompareCommits.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetCompareCommits.QueryParams;
  headers?: API.GithubV3Json.Repos.GetCompareCommits.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCompareCommits.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/compare/${options.pathParams.basehead}`,
    options,
  );
}

/**
 * Deletes a file in a repository.
 *
 * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
 *
 * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
 *
 * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
 *
 * **Note:** If you use this endpoint and the "[Create or update file contents](https://docs.github.com/rest/reference/repos/#create-or-update-file-contents)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.
 * @summary Delete a file
 * @path `/repos/{owner}/{repo}/contents/{path}`
 * @docs https://docs.github.com/rest/reference/repos#delete-a-file
 */
export function deleteFile(options: {
  pathParams: API.GithubV3Json.Repos.DeleteFile.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteFile.Headers;
  body: API.GithubV3Json.Repos.DeleteFile.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.DeleteFile.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/contents/${options.pathParams.path}`,
    options,
  );
}

/**
 * Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
 * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.
 *
 * Files and symlinks support [a custom media type](https://docs.github.com/rest/reference/repos#custom-media-types) for
 * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
 * type](https://docs.github.com/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
 * object format.
 *
 * **Notes**:
 *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/rest/reference/git#trees).
 *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
 * API](https://docs.github.com/rest/reference/git#get-a-tree).
 *  Download URLs expire and are meant to be used just once. To ensure the download URL does not expire, please use the contents API to obtain a fresh download URL for each download.
 * #### Size limits
 * If the requested file's size is:
 * 1 MB or smaller: All features of this endpoint are supported.
 * Between 1-100 MB: Only the `raw` or `object` [custom media types](https://docs.github.com/rest/repos/contents#custom-media-types-for-repository-contents) are supported. Both will work as normal, except that when using the `object` media type, the `content` field will be an empty string and the `encoding` field will be `"none"`. To get the contents of these larger files, use the `raw` media type.
 * Greater than 100 MB: This endpoint is not supported.
 *
 * #### If the content is a directory
 * The response will be an array of objects, one object for each item in the directory.
 * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
 * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
 * In the next major version of the API, the type will be returned as "submodule".
 *
 * #### If the content is a symlink
 * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
 * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
 * describing the symlink itself.
 *
 * #### If the content is a submodule
 * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
 * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
 * the submodule at that specific commit.
 *
 * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
 * github.com URLs (`html_url` and `_links["html"]`) will have null values.
 * @summary Get repository content
 * @path `/repos/{owner}/{repo}/contents/{path}`
 * @docs https://docs.github.com/rest/reference/repos#get-repository-content
 */
export function getContent(options: {
  pathParams: API.GithubV3Json.Repos.GetContent.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetContent.QueryParams;
  headers?: API.GithubV3Json.Repos.GetContent.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetContent.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/contents/${options.pathParams.path}`,
    options,
  );
}

/**
 * Creates a new file or replaces an existing file in a repository. You must authenticate using an access token with the `workflow` scope to use this endpoint.
 *
 * **Note:** If you use this endpoint and the "[Delete a file](https://docs.github.com/rest/reference/repos/#delete-file)" endpoint in parallel, the concurrent requests will conflict and you will receive errors. You must use these endpoints serially instead.
 * @summary Create or update file contents
 * @path `/repos/{owner}/{repo}/contents/{path}`
 * @docs https://docs.github.com/rest/reference/repos#create-or-update-file-contents
 */
export function putCreateOrUpdateFileContents(options: {
  pathParams: API.GithubV3Json.Repos.PutCreateOrUpdateFileContents.PathParams;
  headers?: API.GithubV3Json.Repos.PutCreateOrUpdateFileContents.Headers;
  body: API.GithubV3Json.Repos.PutCreateOrUpdateFileContents.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutCreateOrUpdateFileContents.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/contents/${options.pathParams.path}`,
    options,
  );
}

/**
 * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API caches contributor data to improve performance.
 *
 * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
 * @summary List repository contributors
 * @path `/repos/{owner}/{repo}/contributors`
 * @docs https://docs.github.com/rest/reference/repos#list-repository-contributors
 */
export function getListContributors(options: {
  pathParams: API.GithubV3Json.Repos.GetListContributors.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListContributors.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListContributors.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListContributors.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/contributors`,
    options,
  );
}

/**
 * Users with pull access can view a deployment status for a deployment:
 * @summary Get a deployment status
 * @path `/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}`
 * @docs https://docs.github.com/rest/deployments/statuses#get-a-deployment-status
 */
export function getDeploymentStatus(options: {
  pathParams: API.GithubV3Json.Repos.GetDeploymentStatus.PathParams;
  headers?: API.GithubV3Json.Repos.GetDeploymentStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetDeploymentStatus.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments/${options.pathParams.deployment_id}/statuses/${options.pathParams.status_id}`,
    options,
  );
}

/**
 * Users with pull access can view deployment statuses for a deployment:
 * @summary List deployment statuses
 * @path `/repos/{owner}/{repo}/deployments/{deployment_id}/statuses`
 * @docs https://docs.github.com/rest/deployments/statuses#list-deployment-statuses
 */
export function getListDeploymentStatuses(options: {
  pathParams: API.GithubV3Json.Repos.GetListDeploymentStatuses.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListDeploymentStatuses.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListDeploymentStatuses.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListDeploymentStatuses.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments/${options.pathParams.deployment_id}/statuses`,
    options,
  );
}

/**
 * Users with `push` access can create deployment statuses for a given deployment.
 *
 * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
 * @summary Create a deployment status
 * @path `/repos/{owner}/{repo}/deployments/{deployment_id}/statuses`
 * @docs https://docs.github.com/rest/deployments/statuses#create-a-deployment-status
 */
export function postCreateDeploymentStatus(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateDeploymentStatus.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateDeploymentStatus.Headers;
  body: API.GithubV3Json.Repos.PostCreateDeploymentStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateDeploymentStatus.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments/${options.pathParams.deployment_id}/statuses`,
    options,
  );
}

/**
 * If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.
 *
 * To set a deployment as inactive, you must:
 *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
 *   Mark the active deployment as inactive by adding any non-successful deployment status.
 *
 * For more information, see "[Create a deployment](https://docs.github.com/rest/deployments/deployments/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/deployments/deployment-statuses#create-a-deployment-status)."
 * @summary Delete a deployment
 * @path `/repos/{owner}/{repo}/deployments/{deployment_id}`
 * @docs https://docs.github.com/rest/deployments/deployments#delete-a-deployment
 */
export function deleteDeployment(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDeployment.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDeployment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments/${options.pathParams.deployment_id}`,
    options,
  );
}

/**
 * Get a deployment
 * @path `/repos/{owner}/{repo}/deployments/{deployment_id}`
 * @docs https://docs.github.com/rest/deployments/deployments#get-a-deployment
 */
export function getDeployment(options: {
  pathParams: API.GithubV3Json.Repos.GetDeployment.PathParams;
  headers?: API.GithubV3Json.Repos.GetDeployment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetDeployment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments/${options.pathParams.deployment_id}`,
    options,
  );
}

/**
 * Simple filtering of deployments is available via query parameters:
 * @summary List deployments
 * @path `/repos/{owner}/{repo}/deployments`
 * @docs https://docs.github.com/rest/deployments/deployments#list-deployments
 */
export function getListDeployments(options: {
  pathParams: API.GithubV3Json.Repos.GetListDeployments.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListDeployments.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListDeployments.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListDeployments.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments`,
    options,
  );
}

/**
 * Deployments offer a few configurable parameters with certain defaults.
 *
 * The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them
 * before we merge a pull request.
 *
 * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
 * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
 * makes it easier to track which environments have requested deployments. The default environment is `production`.
 *
 * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
 * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
 * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
 * return a failure response.
 *
 * By default, [commit statuses](https://docs.github.com/rest/commits/statuses) for every submitted context must be in a `success`
 * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
 * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
 * not require any contexts or create any commit statuses, the deployment will always succeed.
 *
 * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
 * field that will be passed on when a deployment event is dispatched.
 *
 * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
 * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
 * application with debugging enabled.
 *
 * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
 *
 * #### Merged branch response
 * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
 * a deployment. This auto-merge happens when:
 *   Auto-merge option is enabled in the repository
 *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
 *   There are no merge conflicts
 *
 * If there are no new commits in the base branch, a new request to create a deployment should give a successful
 * response.
 *
 * #### Merge conflict response
 * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
 * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
 *
 * #### Failed commit status checks
 * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
 * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
 * @summary Create a deployment
 * @path `/repos/{owner}/{repo}/deployments`
 * @docs https://docs.github.com/rest/deployments/deployments#create-a-deployment
 */
export function postCreateDeployment(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateDeployment.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateDeployment.Headers;
  body: API.GithubV3Json.Repos.PostCreateDeployment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateDeployment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/deployments`,
    options,
  );
}

/**
 * You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."
 *
 * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.
 *
 * This endpoint requires write access to the repository by providing either:
 *
 *   - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
 *   - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.
 *
 * This input example shows how you can use the `client_payload` as a test to debug your workflow.
 * @summary Create a repository dispatch event
 * @path `/repos/{owner}/{repo}/dispatches`
 * @docs https://docs.github.com/rest/reference/repos#create-a-repository-dispatch-event
 */
export function postCreateDispatchEvent(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateDispatchEvent.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateDispatchEvent.Headers;
  body: API.GithubV3Json.Repos.PostCreateDispatchEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dispatches`,
    options,
  );
}

/**
 * Deletes a deployment branch policy for an environment.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
 * @summary Delete a deployment branch policy
 * @path `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`
 * @docs https://docs.github.com/rest/deployments/branch-policies#delete-deployment-branch-policy
 */
export function deleteDeploymentBranchPolicy(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDeploymentBranchPolicy.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDeploymentBranchPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}/deployment-branch-policies/${options.pathParams.branch_policy_id}`,
    options,
  );
}

/**
 * Gets a deployment branch policy for an environment.
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get a deployment branch policy
 * @path `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`
 * @docs https://docs.github.com/rest/deployments/branch-policies#get-deployment-branch-policy
 */
export function getDeploymentBranchPolicy(options: {
  pathParams: API.GithubV3Json.Repos.GetDeploymentBranchPolicy.PathParams;
  headers?: API.GithubV3Json.Repos.GetDeploymentBranchPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetDeploymentBranchPolicy.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}/deployment-branch-policies/${options.pathParams.branch_policy_id}`,
    options,
  );
}

/**
 * Updates a deployment branch policy for an environment.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
 * @summary Update a deployment branch policy
 * @path `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}`
 * @docs https://docs.github.com/rest/deployments/branch-policies#update-deployment-branch-policy
 */
export function putUpdateDeploymentBranchPolicy(options: {
  pathParams: API.GithubV3Json.Repos.PutUpdateDeploymentBranchPolicy.PathParams;
  headers?: API.GithubV3Json.Repos.PutUpdateDeploymentBranchPolicy.Headers;
  body: API.GithubV3Json.Repos.PutUpdateDeploymentBranchPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutUpdateDeploymentBranchPolicy.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}/deployment-branch-policies/${options.pathParams.branch_policy_id}`,
    options,
  );
}

/**
 * Lists the deployment branch policies for an environment.
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List deployment branch policies
 * @path `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`
 * @docs https://docs.github.com/rest/deployments/branch-policies#list-deployment-branch-policies
 */
export function getListDeploymentBranchPolicies(options: {
  pathParams: API.GithubV3Json.Repos.GetListDeploymentBranchPolicies.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListDeploymentBranchPolicies.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListDeploymentBranchPolicies.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListDeploymentBranchPolicies.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}/deployment-branch-policies`,
    options,
  );
}

/**
 * Creates a deployment branch policy for an environment.
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
 * @summary Create a deployment branch policy
 * @path `/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies`
 * @docs https://docs.github.com/rest/deployments/branch-policies#create-deployment-branch-policy
 */
export function postCreateDeploymentBranchPolicy(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateDeploymentBranchPolicy.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateDeploymentBranchPolicy.Headers;
  body: API.GithubV3Json.Repos.PostCreateDeploymentBranchPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateDeploymentBranchPolicy.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}/deployment-branch-policies`,
    options,
  );
}

/**
 * You must authenticate using an access token with the repo scope to use this endpoint.
 * @summary Delete an environment
 * @path `/repos/{owner}/{repo}/environments/{environment_name}`
 * @docs https://docs.github.com/rest/deployments/environments#delete-an-environment
 */
export function deleteAnEnvironment(options: {
  pathParams: API.GithubV3Json.Repos.DeleteAnEnvironment.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteAnEnvironment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}`,
    options,
  );
}

/**
 * **Note:** To get information about name patterns that branches must match in order to deploy to this environment, see "[Get a deployment branch policy](/rest/deployments/branch-policies#get-a-deployment-branch-policy)."
 *
 * Anyone with read access to the repository can use this endpoint. If the
 * repository is private, you must use an access token with the `repo` scope. GitHub
 * Apps must have the `actions:read` permission to use this endpoint.
 * @summary Get an environment
 * @path `/repos/{owner}/{repo}/environments/{environment_name}`
 * @docs https://docs.github.com/rest/deployments/environments#get-an-environment
 */
export function getEnvironment(options: {
  pathParams: API.GithubV3Json.Repos.GetEnvironment.PathParams;
  headers?: API.GithubV3Json.Repos.GetEnvironment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetEnvironment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}`,
    options,
  );
}

/**
 * Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."
 *
 * **Note:** To create or update name patterns that branches must match in order to deploy to this environment, see "[Deployment branch policies](/rest/deployments/branch-policies)."
 *
 * **Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."
 *
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration:write` permission for the repository to use this endpoint.
 * @summary Create or update an environment
 * @path `/repos/{owner}/{repo}/environments/{environment_name}`
 * @docs https://docs.github.com/rest/deployments/environments#create-or-update-an-environment
 */
export function putCreateOrUpdateEnvironment(options: {
  pathParams: API.GithubV3Json.Repos.PutCreateOrUpdateEnvironment.PathParams;
  headers?: API.GithubV3Json.Repos.PutCreateOrUpdateEnvironment.Headers;
  body?: API.GithubV3Json.Repos.PutCreateOrUpdateEnvironment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutCreateOrUpdateEnvironment.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments/${options.pathParams.environment_name}`,
    options,
  );
}

/**
 * Lists the environments for a repository.
 *
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
 * @summary List environments
 * @path `/repos/{owner}/{repo}/environments`
 * @docs https://docs.github.com/rest/deployments/environments#list-environments
 */
export function getAllEnvironments(options: {
  pathParams: API.GithubV3Json.Repos.GetAllEnvironments.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetAllEnvironments.QueryParams;
  headers?: API.GithubV3Json.Repos.GetAllEnvironments.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAllEnvironments.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/environments`,
    options,
  );
}

/**
 * List forks
 * @path `/repos/{owner}/{repo}/forks`
 * @docs https://docs.github.com/rest/reference/repos#list-forks
 */
export function getListForks(options: {
  pathParams: API.GithubV3Json.Repos.GetListForks.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListForks.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListForks.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListForks.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/forks`,
    options,
  );
}

/**
 * Create a fork for the authenticated user.
 *
 * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
 * @summary Create a fork
 * @path `/repos/{owner}/{repo}/forks`
 * @docs https://docs.github.com/rest/reference/repos#create-a-fork
 */
export function postCreateFork(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateFork.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateFork.Headers;
  body?: API.GithubV3Json.Repos.PostCreateFork.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateFork.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/forks`,
    options,
  );
}

/**
 * Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."
 *
 * Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.
 * @summary Get a webhook configuration for a repository
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/config`
 * @docs https://docs.github.com/rest/webhooks/repo-config#get-a-webhook-configuration-for-a-repository
 */
export function getWebhookConfigForRepo(options: {
  pathParams: API.GithubV3Json.Repos.GetWebhookConfigForRepo.PathParams;
  headers?: API.GithubV3Json.Repos.GetWebhookConfigForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetWebhookConfigForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/config`,
    options,
  );
}

/**
 * Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."
 *
 * Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.
 * @summary Update a webhook configuration for a repository
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/config`
 * @docs https://docs.github.com/rest/webhooks/repo-config#update-a-webhook-configuration-for-a-repository
 */
export function patchUpdateWebhookConfigForRepo(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateWebhookConfigForRepo.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateWebhookConfigForRepo.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdateWebhookConfigForRepo.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateWebhookConfigForRepo.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/config`,
    options,
  );
}

/**
 * Redeliver a webhook delivery for a webhook configured in a repository.
 * @summary Redeliver a delivery for a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`
 * @docs https://docs.github.com/rest/webhooks/repo-deliveries#redeliver-a-delivery-for-a-repository-webhook
 */
export function postRedeliverWebhookDelivery(options: {
  pathParams: API.GithubV3Json.Repos.PostRedeliverWebhookDelivery.PathParams;
  headers?: API.GithubV3Json.Repos.PostRedeliverWebhookDelivery.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostRedeliverWebhookDelivery.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/deliveries/${options.pathParams.delivery_id}/attempts`,
    options,
  );
}

/**
 * Returns a delivery for a webhook configured in a repository.
 * @summary Get a delivery for a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}`
 * @docs https://docs.github.com/rest/webhooks/repo-deliveries#get-a-delivery-for-a-repository-webhook
 */
export function getWebhookDelivery(options: {
  pathParams: API.GithubV3Json.Repos.GetWebhookDelivery.PathParams;
  headers?: API.GithubV3Json.Repos.GetWebhookDelivery.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetWebhookDelivery.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/deliveries/${options.pathParams.delivery_id}`,
    options,
  );
}

/**
 * Returns a list of webhook deliveries for a webhook configured in a repository.
 * @summary List deliveries for a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/deliveries`
 * @docs https://docs.github.com/rest/webhooks/repo-deliveries#list-deliveries-for-a-repository-webhook
 */
export function getListWebhookDeliveries(options: {
  pathParams: API.GithubV3Json.Repos.GetListWebhookDeliveries.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListWebhookDeliveries.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListWebhookDeliveries.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListWebhookDeliveries.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/deliveries`,
    options,
  );
}

/**
 * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
 * @summary Ping a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/pings`
 * @docs https://docs.github.com/rest/webhooks/repos#ping-a-repository-webhook
 */
export function postPingWebhook(options: {
  pathParams: API.GithubV3Json.Repos.PostPingWebhook.PathParams;
  headers?: API.GithubV3Json.Repos.PostPingWebhook.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/pings`,
    options,
  );
}

/**
 * This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
 *
 * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
 * @summary Test the push repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}/tests`
 * @docs https://docs.github.com/rest/webhooks/repos#test-the-push-repository-webhook
 */
export function postTestPushWebhook(options: {
  pathParams: API.GithubV3Json.Repos.PostTestPushWebhook.PathParams;
  headers?: API.GithubV3Json.Repos.PostTestPushWebhook.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}/tests`,
    options,
  );
}

/**
 * Delete a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}`
 * @docs https://docs.github.com/rest/webhooks/repos#delete-a-repository-webhook
 */
export function deleteWebhook(options: {
  pathParams: API.GithubV3Json.Repos.DeleteWebhook.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteWebhook.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}`,
    options,
  );
}

/**
 * Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."
 * @summary Get a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}`
 * @docs https://docs.github.com/rest/webhooks/repos#get-a-repository-webhook
 */
export function getWebhook(options: {
  pathParams: API.GithubV3Json.Repos.GetWebhook.PathParams;
  headers?: API.GithubV3Json.Repos.GetWebhook.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetWebhook.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}`,
    options,
  );
}

/**
 * Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."
 * @summary Update a repository webhook
 * @path `/repos/{owner}/{repo}/hooks/{hook_id}`
 * @docs https://docs.github.com/rest/webhooks/repos#update-a-repository-webhook
 */
export function patchUpdateWebhook(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateWebhook.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateWebhook.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdateWebhook.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateWebhook.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks/${options.pathParams.hook_id}`,
    options,
  );
}

/**
 * Lists webhooks for a repository. `last response` may return null if there have not been any deliveries within 30 days.
 * @summary List repository webhooks
 * @path `/repos/{owner}/{repo}/hooks`
 * @docs https://docs.github.com/rest/webhooks/repos#list-repository-webhooks
 */
export function getListWebhooks(options: {
  pathParams: API.GithubV3Json.Repos.GetListWebhooks.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListWebhooks.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListWebhooks.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListWebhooks.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks`,
    options,
  );
}

/**
 * Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
 * share the same `config` as long as those webhooks do not have any `events` that overlap.
 * @summary Create a repository webhook
 * @path `/repos/{owner}/{repo}/hooks`
 * @docs https://docs.github.com/rest/webhooks/repos#create-a-repository-webhook
 */
export function postCreateWebhook(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateWebhook.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateWebhook.Headers;
  body?: API.GithubV3Json.Repos.PostCreateWebhook.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateWebhook.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/hooks`,
    options,
  );
}

/**
 * Delete a repository invitation
 * @path `/repos/{owner}/{repo}/invitations/{invitation_id}`
 * @docs https://docs.github.com/rest/collaborators/invitations#delete-a-repository-invitation
 */
export function deleteInvitation(options: {
  pathParams: API.GithubV3Json.Repos.DeleteInvitation.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteInvitation.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/invitations/${options.pathParams.invitation_id}`,
    options,
  );
}

/**
 * Update a repository invitation
 * @path `/repos/{owner}/{repo}/invitations/{invitation_id}`
 * @docs https://docs.github.com/rest/collaborators/invitations#update-a-repository-invitation
 */
export function patchUpdateInvitation(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateInvitation.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateInvitation.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdateInvitation.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateInvitation.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/invitations/${options.pathParams.invitation_id}`,
    options,
  );
}

/**
 * When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
 * @summary List repository invitations
 * @path `/repos/{owner}/{repo}/invitations`
 * @docs https://docs.github.com/rest/collaborators/invitations#list-repository-invitations
 */
export function getListInvitations(options: {
  pathParams: API.GithubV3Json.Repos.GetListInvitations.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListInvitations.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListInvitations.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListInvitations.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/invitations`,
    options,
  );
}

/**
 * Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
 * @summary Delete a deploy key
 * @path `/repos/{owner}/{repo}/keys/{key_id}`
 * @docs https://docs.github.com/rest/deploy-keys#delete-a-deploy-key
 */
export function deleteDeployKey(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDeployKey.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDeployKey.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/keys/${options.pathParams.key_id}`,
    options,
  );
}

/**
 * Get a deploy key
 * @path `/repos/{owner}/{repo}/keys/{key_id}`
 * @docs https://docs.github.com/rest/deploy-keys#get-a-deploy-key
 */
export function getDeployKey(options: {
  pathParams: API.GithubV3Json.Repos.GetDeployKey.PathParams;
  headers?: API.GithubV3Json.Repos.GetDeployKey.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetDeployKey.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/keys/${options.pathParams.key_id}`,
    options,
  );
}

/**
 * List deploy keys
 * @path `/repos/{owner}/{repo}/keys`
 * @docs https://docs.github.com/rest/deploy-keys#list-deploy-keys
 */
export function getListDeployKeys(options: {
  pathParams: API.GithubV3Json.Repos.GetListDeployKeys.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListDeployKeys.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListDeployKeys.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListDeployKeys.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/keys`,
    options,
  );
}

/**
 * You can create a read-only deploy key.
 * @summary Create a deploy key
 * @path `/repos/{owner}/{repo}/keys`
 * @docs https://docs.github.com/rest/deploy-keys#create-a-deploy-key
 */
export function postCreateDeployKey(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateDeployKey.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateDeployKey.Headers;
  body: API.GithubV3Json.Repos.PostCreateDeployKey.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateDeployKey.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/keys`,
    options,
  );
}

/**
 * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
 * @summary List repository languages
 * @path `/repos/{owner}/{repo}/languages`
 * @docs https://docs.github.com/rest/reference/repos#list-repository-languages
 */
export function getListLanguages(options: {
  pathParams: API.GithubV3Json.Repos.GetListLanguages.PathParams;
  headers?: API.GithubV3Json.Repos.GetListLanguages.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListLanguages.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/languages`,
    options,
  );
}

/**
 * Disables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.
 * @summary Disable Git LFS for a repository
 * @path `/repos/{owner}/{repo}/lfs`
 * @docs https://docs.github.com/rest/reference/repos#disable-git-lfs-for-a-repository
 */
export function deleteDisableLfsForRepo(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDisableLfsForRepo.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDisableLfsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/lfs`,
    options,
  );
}

/**
 * Enables Git LFS for a repository. Access tokens must have the `admin:enterprise` scope.
 * @summary Enable Git LFS for a repository
 * @path `/repos/{owner}/{repo}/lfs`
 * @docs https://docs.github.com/rest/reference/repos#enable-git-lfs-for-a-repository
 */
export function putEnableLfsForRepo(options: {
  pathParams: API.GithubV3Json.Repos.PutEnableLfsForRepo.PathParams;
  headers?: API.GithubV3Json.Repos.PutEnableLfsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutEnableLfsForRepo.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/lfs`,
    options,
  );
}

/**
 * Sync a branch of a forked repository to keep it up-to-date with the upstream repository.
 * @summary Sync a fork branch with the upstream repository
 * @path `/repos/{owner}/{repo}/merge-upstream`
 * @docs https://docs.github.com/rest/branches/branches#sync-a-fork-branch-with-the-upstream-repository
 */
export function postMergeUpstream(options: {
  pathParams: API.GithubV3Json.Repos.PostMergeUpstream.PathParams;
  headers?: API.GithubV3Json.Repos.PostMergeUpstream.Headers;
  body: API.GithubV3Json.Repos.PostMergeUpstream.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostMergeUpstream.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/merge-upstream`,
    options,
  );
}

/**
 * Merge a branch
 * @path `/repos/{owner}/{repo}/merges`
 * @docs https://docs.github.com/rest/branches/branches#merge-a-branch
 */
export function postMerge(options: {
  pathParams: API.GithubV3Json.Repos.PostMerge.PathParams;
  headers?: API.GithubV3Json.Repos.PostMerge.Headers;
  body: API.GithubV3Json.Repos.PostMerge.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostMerge.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/merges`,
    options,
  );
}

/**
 * Get latest Pages build
 * @path `/repos/{owner}/{repo}/pages/builds/latest`
 * @docs https://docs.github.com/rest/pages#get-latest-pages-build
 */
export function getLatestPagesBuild(options: {
  pathParams: API.GithubV3Json.Repos.GetLatestPagesBuild.PathParams;
  headers?: API.GithubV3Json.Repos.GetLatestPagesBuild.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetLatestPagesBuild.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages/builds/latest`,
    options,
  );
}

/**
 * Get GitHub Pages build
 * @path `/repos/{owner}/{repo}/pages/builds/{build_id}`
 * @docs https://docs.github.com/rest/pages#get-github-pages-build
 */
export function getPagesBuild(options: {
  pathParams: API.GithubV3Json.Repos.GetPagesBuild.PathParams;
  headers?: API.GithubV3Json.Repos.GetPagesBuild.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetPagesBuild.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages/builds/${options.pathParams.build_id}`,
    options,
  );
}

/**
 * List GitHub Pages builds
 * @path `/repos/{owner}/{repo}/pages/builds`
 * @docs https://docs.github.com/rest/pages#list-github-pages-builds
 */
export function getListPagesBuilds(options: {
  pathParams: API.GithubV3Json.Repos.GetListPagesBuilds.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListPagesBuilds.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListPagesBuilds.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListPagesBuilds.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages/builds`,
    options,
  );
}

/**
 * You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
 *
 * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
 * @summary Request a GitHub Pages build
 * @path `/repos/{owner}/{repo}/pages/builds`
 * @docs https://docs.github.com/rest/pages#request-a-github-pages-build
 */
export function postRequestPagesBuild(options: {
  pathParams: API.GithubV3Json.Repos.PostRequestPagesBuild.PathParams;
  headers?: API.GithubV3Json.Repos.PostRequestPagesBuild.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostRequestPagesBuild.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages/builds`,
    options,
  );
}

/**
 * Create a GitHub Pages deployment for a repository.
 *
 * Users must have write permissions. GitHub Apps must have the `pages:write` permission to use this endpoint.
 * @summary Create a GitHub Pages deployment
 * @path `/repos/{owner}/{repo}/pages/deployment`
 * @docs https://docs.github.com/rest/pages#create-a-github-pages-deployment
 */
export function postCreatePagesDeployment(options: {
  pathParams: API.GithubV3Json.Repos.PostCreatePagesDeployment.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreatePagesDeployment.Headers;
  body: API.GithubV3Json.Repos.PostCreatePagesDeployment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreatePagesDeployment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages/deployment`,
    options,
  );
}

/**
 * Gets a health check of the DNS settings for the `CNAME` record configured for a repository's GitHub Pages.
 *
 * The first request to this endpoint returns a `202 Accepted` status and starts an asynchronous background task to get the results for the domain. After the background task completes, subsequent requests to this endpoint return a `200 OK` status with the health check results in the response.
 *
 * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administrative:write` and `pages:write` permissions.
 * @summary Get a DNS health check for GitHub Pages
 * @path `/repos/{owner}/{repo}/pages/health`
 * @docs https://docs.github.com/rest/pages#get-a-dns-health-check-for-github-pages
 */
export function getPagesHealthCheck(options: {
  pathParams: API.GithubV3Json.Repos.GetPagesHealthCheck.PathParams;
  headers?: API.GithubV3Json.Repos.GetPagesHealthCheck.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetPagesHealthCheck.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages/health`,
    options,
  );
}

/**
 * Deletes a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
 *
 * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.
 * @summary Delete a GitHub Pages site
 * @path `/repos/{owner}/{repo}/pages`
 * @docs https://docs.github.com/rest/pages#delete-a-github-pages-site
 */
export function deletePagesSite(options: {
  pathParams: API.GithubV3Json.Repos.DeletePagesSite.PathParams;
  headers?: API.GithubV3Json.Repos.DeletePagesSite.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages`,
    options,
  );
}

/**
 * Get a GitHub Pages site
 * @path `/repos/{owner}/{repo}/pages`
 * @docs https://docs.github.com/rest/pages#get-a-github-pages-site
 */
export function getPages(options: {
  pathParams: API.GithubV3Json.Repos.GetPages.PathParams;
  headers?: API.GithubV3Json.Repos.GetPages.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetPages.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages`,
    options,
  );
}

/**
 * Configures a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
 *
 * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.
 * @summary Create a GitHub Pages site
 * @path `/repos/{owner}/{repo}/pages`
 * @docs https://docs.github.com/rest/pages#create-a-github-pages-site
 */
export function postCreatePagesSite(options: {
  pathParams: API.GithubV3Json.Repos.PostCreatePagesSite.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreatePagesSite.Headers;
  body: API.GithubV3Json.Repos.PostCreatePagesSite.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreatePagesSite.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages`,
    options,
  );
}

/**
 * Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
 *
 * To use this endpoint, you must be a repository administrator, maintainer, or have the 'manage GitHub Pages settings' permission. A token with the `repo` scope or Pages write permission is required. GitHub Apps must have the `administration:write` and `pages:write` permissions.
 * @summary Update information about a GitHub Pages site
 * @path `/repos/{owner}/{repo}/pages`
 * @docs https://docs.github.com/rest/pages#update-information-about-a-github-pages-site
 */
export function putUpdateInformationAboutPagesSite(options: {
  pathParams: API.GithubV3Json.Repos.PutUpdateInformationAboutPagesSite.PathParams;
  headers?: API.GithubV3Json.Repos.PutUpdateInformationAboutPagesSite.Headers;
  body: API.GithubV3Json.Repos.PutUpdateInformationAboutPagesSite.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pages`,
    options,
  );
}

/**
 * Gets the README from a repository directory.
 *
 * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
 * @summary Get a repository README for a directory
 * @path `/repos/{owner}/{repo}/readme/{dir}`
 * @docs https://docs.github.com/rest/reference/repos#get-a-repository-directory-readme
 */
export function getReadmeInDirectory(options: {
  pathParams: API.GithubV3Json.Repos.GetReadmeInDirectory.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetReadmeInDirectory.QueryParams;
  headers?: API.GithubV3Json.Repos.GetReadmeInDirectory.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetReadmeInDirectory.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/readme/${options.pathParams.dir}`,
    options,
  );
}

/**
 * Gets the preferred README for a repository.
 *
 * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
 * @summary Get a repository README
 * @path `/repos/{owner}/{repo}/readme`
 * @docs https://docs.github.com/rest/reference/repos#get-a-repository-readme
 */
export function getReadme(options: {
  pathParams: API.GithubV3Json.Repos.GetReadme.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetReadme.QueryParams;
  headers?: API.GithubV3Json.Repos.GetReadme.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetReadme.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/readme`,
    options,
  );
}

/**
 * Delete a release asset
 * @path `/repos/{owner}/{repo}/releases/assets/{asset_id}`
 * @docs https://docs.github.com/rest/reference/repos#delete-a-release-asset
 */
export function deleteReleaseAsset(options: {
  pathParams: API.GithubV3Json.Repos.DeleteReleaseAsset.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteReleaseAsset.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/assets/${options.pathParams.asset_id}`,
    options,
  );
}

/**
 * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
 * @summary Get a release asset
 * @path `/repos/{owner}/{repo}/releases/assets/{asset_id}`
 * @docs https://docs.github.com/rest/reference/repos#get-a-release-asset
 */
export function getReleaseAsset(options: {
  pathParams: API.GithubV3Json.Repos.GetReleaseAsset.PathParams;
  headers?: API.GithubV3Json.Repos.GetReleaseAsset.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetReleaseAsset.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/assets/${options.pathParams.asset_id}`,
    options,
  );
}

/**
 * Users with push access to the repository can edit a release asset.
 * @summary Update a release asset
 * @path `/repos/{owner}/{repo}/releases/assets/{asset_id}`
 * @docs https://docs.github.com/rest/reference/repos#update-a-release-asset
 */
export function patchUpdateReleaseAsset(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateReleaseAsset.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateReleaseAsset.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdateReleaseAsset.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateReleaseAsset.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/assets/${options.pathParams.asset_id}`,
    options,
  );
}

/**
 * Generate a name and body describing a [release](https://docs.github.com/rest/reference/repos#releases). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.
 * @summary Generate release notes content for a release
 * @path `/repos/{owner}/{repo}/releases/generate-notes`
 * @docs https://docs.github.com/rest/reference/repos#generate-release-notes
 */
export function postGenerateReleaseNotes(options: {
  pathParams: API.GithubV3Json.Repos.PostGenerateReleaseNotes.PathParams;
  headers?: API.GithubV3Json.Repos.PostGenerateReleaseNotes.Headers;
  body: API.GithubV3Json.Repos.PostGenerateReleaseNotes.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostGenerateReleaseNotes.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/generate-notes`,
    options,
  );
}

/**
 * View the latest published full release for the repository.
 *
 * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
 * @summary Get the latest release
 * @path `/repos/{owner}/{repo}/releases/latest`
 * @docs https://docs.github.com/rest/reference/repos#get-the-latest-release
 */
export function getLatestRelease(options: {
  pathParams: API.GithubV3Json.Repos.GetLatestRelease.PathParams;
  headers?: API.GithubV3Json.Repos.GetLatestRelease.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetLatestRelease.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/latest`,
    options,
  );
}

/**
 * Get a published release with the specified tag.
 * @summary Get a release by tag name
 * @path `/repos/{owner}/{repo}/releases/tags/{tag}`
 * @docs https://docs.github.com/rest/reference/repos#get-a-release-by-tag-name
 */
export function getReleaseByTag(options: {
  pathParams: API.GithubV3Json.Repos.GetReleaseByTag.PathParams;
  headers?: API.GithubV3Json.Repos.GetReleaseByTag.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetReleaseByTag.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/tags/${options.pathParams.tag}`,
    options,
  );
}

/**
 * List release assets
 * @path `/repos/{owner}/{repo}/releases/{release_id}/assets`
 * @docs https://docs.github.com/rest/reference/repos#list-release-assets
 */
export function getListReleaseAssets(options: {
  pathParams: API.GithubV3Json.Repos.GetListReleaseAssets.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListReleaseAssets.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListReleaseAssets.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListReleaseAssets.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}/assets`,
    options,
  );
}

/**
 * This endpoint makes use of [a Hypermedia relation](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
 * the response of the [Create a release endpoint](https://docs.github.com/rest/releases/releases#create-a-release) to upload a release asset.
 *
 * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
 *
 * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
 *
 * `application/zip`
 *
 * GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
 * you'll still need to pass your authentication to be able to upload an asset.
 *
 * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
 *
 * **Notes:**
 *   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/rest/reference/repos#list-assets-for-a-release)"
 * endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
 *   To find the `release_id` query the [`GET /repos/{owner}/{repo}/releases/latest` endpoint](https://docs.github.com/rest/releases/releases#get-the-latest-release).
 *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
 * @summary Upload a release asset
 * @path `/repos/{owner}/{repo}/releases/{release_id}/assets`
 * @docs https://docs.github.com/rest/reference/repos#upload-a-release-asset
 */
export function postUploadReleaseAsset(options: {
  pathParams: API.GithubV3Json.Repos.PostUploadReleaseAsset.PathParams;
  queryParams: API.GithubV3Json.Repos.PostUploadReleaseAsset.QueryParams;
  headers?: API.GithubV3Json.Repos.PostUploadReleaseAsset.Headers;
  body: API.GithubV3Json.Repos.PostUploadReleaseAsset.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostUploadReleaseAsset.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}/assets`,
    options,
  );
}

/**
 * Users with push access to the repository can delete a release.
 * @summary Delete a release
 * @path `/repos/{owner}/{repo}/releases/{release_id}`
 * @docs https://docs.github.com/rest/reference/repos#delete-a-release
 */
export function deleteRelease(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRelease.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRelease.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}`,
    options,
  );
}

/**
 * **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).
 * @summary Get a release
 * @path `/repos/{owner}/{repo}/releases/{release_id}`
 * @docs https://docs.github.com/rest/reference/repos#get-a-release
 */
export function getRelease(options: {
  pathParams: API.GithubV3Json.Repos.GetRelease.PathParams;
  headers?: API.GithubV3Json.Repos.GetRelease.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetRelease.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}`,
    options,
  );
}

/**
 * Users with push access to the repository can edit a release.
 * @summary Update a release
 * @path `/repos/{owner}/{repo}/releases/{release_id}`
 * @docs https://docs.github.com/rest/reference/repos#update-a-release
 */
export function patchUpdateRelease(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdateRelease.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdateRelease.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdateRelease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdateRelease.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}`,
    options,
  );
}

/**
 * This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/reference/repos#list-repository-tags).
 *
 * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
 * @summary List releases
 * @path `/repos/{owner}/{repo}/releases`
 * @docs https://docs.github.com/rest/reference/repos#list-releases
 */
export function getListReleases(options: {
  pathParams: API.GithubV3Json.Repos.GetListReleases.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListReleases.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListReleases.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListReleases.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases`,
    options,
  );
}

/**
 * Users with push access to the repository can create a release.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create a release
 * @path `/repos/{owner}/{repo}/releases`
 * @docs https://docs.github.com/rest/releases/releases#create-a-release
 */
export function postCreateRelease(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateRelease.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateRelease.Headers;
  body: API.GithubV3Json.Repos.PostCreateRelease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateRelease.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases`,
    options,
  );
}

/**
 * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
 * @summary Get the weekly commit activity
 * @path `/repos/{owner}/{repo}/stats/code_frequency`
 * @docs https://docs.github.com/rest/metrics/statistics#get-the-weekly-commit-activity
 */
export function getCodeFrequencyStats(options: {
  pathParams: API.GithubV3Json.Repos.GetCodeFrequencyStats.PathParams;
  headers?: API.GithubV3Json.Repos.GetCodeFrequencyStats.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCodeFrequencyStats.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/stats/code_frequency`,
    options,
  );
}

/**
 * Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
 * @summary Get the last year of commit activity
 * @path `/repos/{owner}/{repo}/stats/commit_activity`
 * @docs https://docs.github.com/rest/metrics/statistics#get-the-last-year-of-commit-activity
 */
export function getCommitActivityStats(options: {
  pathParams: API.GithubV3Json.Repos.GetCommitActivityStats.PathParams;
  headers?: API.GithubV3Json.Repos.GetCommitActivityStats.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetCommitActivityStats.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/stats/commit_activity`,
    options,
  );
}

/**
 *
 * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
 *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
 *   `a` - Number of additions
 *   `d` - Number of deletions
 *   `c` - Number of commits
 * @summary Get all contributor commit activity
 * @path `/repos/{owner}/{repo}/stats/contributors`
 * @docs https://docs.github.com/rest/metrics/statistics#get-all-contributor-commit-activity
 */
export function getContributorsStats(options: {
  pathParams: API.GithubV3Json.Repos.GetContributorsStats.PathParams;
  headers?: API.GithubV3Json.Repos.GetContributorsStats.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetContributorsStats.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/stats/contributors`,
    options,
  );
}

/**
 * Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
 *
 * The array order is oldest week (index 0) to most recent week.
 * @summary Get the weekly commit count
 * @path `/repos/{owner}/{repo}/stats/participation`
 * @docs https://docs.github.com/rest/metrics/statistics#get-the-weekly-commit-count
 */
export function getParticipationStats(options: {
  pathParams: API.GithubV3Json.Repos.GetParticipationStats.PathParams;
  headers?: API.GithubV3Json.Repos.GetParticipationStats.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetParticipationStats.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/stats/participation`,
    options,
  );
}

/**
 * Each array contains the day number, hour number, and number of commits:
 *   `0-6`: Sunday - Saturday
 *   `0-23`: Hour of day
 *   Number of commits
 *
 * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
 * @summary Get the hourly commit count for each day
 * @path `/repos/{owner}/{repo}/stats/punch_card`
 * @docs https://docs.github.com/rest/metrics/statistics#get-the-hourly-commit-count-for-each-day
 */
export function getPunchCardStats(options: {
  pathParams: API.GithubV3Json.Repos.GetPunchCardStats.PathParams;
  headers?: API.GithubV3Json.Repos.GetPunchCardStats.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetPunchCardStats.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/stats/punch_card`,
    options,
  );
}

/**
 * Users with push access in a repository can create commit statuses for a given SHA.
 *
 * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
 * @summary Create a commit status
 * @path `/repos/{owner}/{repo}/statuses/{sha}`
 * @docs https://docs.github.com/rest/commits/statuses#create-a-commit-status
 */
export function postCreateCommitStatus(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateCommitStatus.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateCommitStatus.Headers;
  body: API.GithubV3Json.Repos.PostCreateCommitStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateCommitStatus.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/statuses/${options.pathParams.sha}`,
    options,
  );
}

/**
 * This deletes a tag protection state for a repository.
 * This endpoint is only available to repository administrators.
 * @summary Delete a tag protection state for a repository
 * @path `/repos/{owner}/{repo}/tags/protection/{tag_protection_id}`
 * @docs https://docs.github.com/rest/reference/repos#delete-tag-protection-state-for-a-repository
 */
export function deleteTagProtection(options: {
  pathParams: API.GithubV3Json.Repos.DeleteTagProtection.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteTagProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/tags/protection/${options.pathParams.tag_protection_id}`,
    options,
  );
}

/**
 * This returns the tag protection states of a repository.
 *
 * This information is only available to repository administrators.
 * @summary List tag protection states for a repository
 * @path `/repos/{owner}/{repo}/tags/protection`
 * @docs https://docs.github.com/rest/reference/repos#list-tag-protection-state-of-a-repository
 */
export function getListTagProtection(options: {
  pathParams: API.GithubV3Json.Repos.GetListTagProtection.PathParams;
  headers?: API.GithubV3Json.Repos.GetListTagProtection.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListTagProtection.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/tags/protection`,
    options,
  );
}

/**
 * This creates a tag protection state for a repository.
 * This endpoint is only available to repository administrators.
 * @summary Create a tag protection state for a repository
 * @path `/repos/{owner}/{repo}/tags/protection`
 * @docs https://docs.github.com/rest/reference/repos#create-tag-protection-state-for-a-repository
 */
export function postCreateTagProtection(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateTagProtection.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateTagProtection.Headers;
  body: API.GithubV3Json.Repos.PostCreateTagProtection.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateTagProtection.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/tags/protection`,
    options,
  );
}

/**
 * List repository tags
 * @path `/repos/{owner}/{repo}/tags`
 * @docs https://docs.github.com/rest/reference/repos#list-repository-tags
 */
export function getListTags(options: {
  pathParams: API.GithubV3Json.Repos.GetListTags.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListTags.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListTags.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListTags.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/tags`,
    options,
  );
}

/**
 * Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
 * `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
 * the `Location` header to make a second `GET` request.
 * **Note**: For private repositories, these links are temporary and expire after five minutes.
 * @summary Download a repository archive (tar)
 * @path `/repos/{owner}/{repo}/tarball/{ref}`
 * @docs https://docs.github.com/rest/reference/repos#download-a-repository-archive
 */
export function getDownloadTarballArchive(options: {
  pathParams: API.GithubV3Json.Repos.GetDownloadTarballArchive.PathParams;
  headers?: API.GithubV3Json.Repos.GetDownloadTarballArchive.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/tarball/${options.pathParams.ref}`,
    options,
  );
}

/**
 * List repository teams
 * @path `/repos/{owner}/{repo}/teams`
 * @docs https://docs.github.com/rest/reference/repos#list-repository-teams
 */
export function getListTeams(options: {
  pathParams: API.GithubV3Json.Repos.GetListTeams.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListTeams.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListTeams.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListTeams.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/teams`,
    options,
  );
}

/**
 * Get all repository topics
 * @path `/repos/{owner}/{repo}/topics`
 * @docs https://docs.github.com/rest/reference/repos#get-all-repository-topics
 */
export function getAllTopics(options: {
  pathParams: API.GithubV3Json.Repos.GetAllTopics.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetAllTopics.QueryParams;
  headers?: API.GithubV3Json.Repos.GetAllTopics.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetAllTopics.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/topics`,
    options,
  );
}

/**
 * Replace all repository topics
 * @path `/repos/{owner}/{repo}/topics`
 * @docs https://docs.github.com/rest/reference/repos#replace-all-repository-topics
 */
export function putReplaceAllTopics(options: {
  pathParams: API.GithubV3Json.Repos.PutReplaceAllTopics.PathParams;
  headers?: API.GithubV3Json.Repos.PutReplaceAllTopics.Headers;
  body: API.GithubV3Json.Repos.PutReplaceAllTopics.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PutReplaceAllTopics.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/topics`,
    options,
  );
}

/**
 * Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
 * @summary Get repository clones
 * @path `/repos/{owner}/{repo}/traffic/clones`
 * @docs https://docs.github.com/rest/metrics/traffic#get-repository-clones
 */
export function getClones(options: {
  pathParams: API.GithubV3Json.Repos.GetClones.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetClones.QueryParams;
  headers?: API.GithubV3Json.Repos.GetClones.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetClones.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/traffic/clones`,
    options,
  );
}

/**
 * Get the top 10 popular contents over the last 14 days.
 * @summary Get top referral paths
 * @path `/repos/{owner}/{repo}/traffic/popular/paths`
 * @docs https://docs.github.com/rest/metrics/traffic#get-top-referral-paths
 */
export function getTopPaths(options: {
  pathParams: API.GithubV3Json.Repos.GetTopPaths.PathParams;
  headers?: API.GithubV3Json.Repos.GetTopPaths.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetTopPaths.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/traffic/popular/paths`,
    options,
  );
}

/**
 * Get the top 10 referrers over the last 14 days.
 * @summary Get top referral sources
 * @path `/repos/{owner}/{repo}/traffic/popular/referrers`
 * @docs https://docs.github.com/rest/metrics/traffic#get-top-referral-sources
 */
export function getTopReferrers(options: {
  pathParams: API.GithubV3Json.Repos.GetTopReferrers.PathParams;
  headers?: API.GithubV3Json.Repos.GetTopReferrers.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetTopReferrers.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/traffic/popular/referrers`,
    options,
  );
}

/**
 * Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
 * @summary Get page views
 * @path `/repos/{owner}/{repo}/traffic/views`
 * @docs https://docs.github.com/rest/metrics/traffic#get-page-views
 */
export function getViews(options: {
  pathParams: API.GithubV3Json.Repos.GetViews.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetViews.QueryParams;
  headers?: API.GithubV3Json.Repos.GetViews.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetViews.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/traffic/views`,
    options,
  );
}

/**
 * A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).
 * @summary Transfer a repository
 * @path `/repos/{owner}/{repo}/transfer`
 * @docs https://docs.github.com/rest/reference/repos#transfer-a-repository
 */
export function postTransfer(options: {
  pathParams: API.GithubV3Json.Repos.PostTransfer.PathParams;
  headers?: API.GithubV3Json.Repos.PostTransfer.Headers;
  body: API.GithubV3Json.Repos.PostTransfer.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostTransfer.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/transfer`,
    options,
  );
}

/**
 * Disables dependency alerts and the dependency graph for a repository.
 * The authenticated user must have admin access to the repository. For more information,
 * see "[About security alerts for vulnerable dependencies](https://docs.github.com/articles/about-security-alerts-for-vulnerable-dependencies)".
 * @summary Disable vulnerability alerts
 * @path `/repos/{owner}/{repo}/vulnerability-alerts`
 * @docs https://docs.github.com/rest/reference/repos#disable-vulnerability-alerts
 */
export function deleteDisableVulnerabilityAlerts(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDisableVulnerabilityAlerts.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDisableVulnerabilityAlerts.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/vulnerability-alerts`,
    options,
  );
}

/**
 * Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin read access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/articles/about-security-alerts-for-vulnerable-dependencies)".
 * @summary Check if vulnerability alerts are enabled for a repository
 * @path `/repos/{owner}/{repo}/vulnerability-alerts`
 * @docs https://docs.github.com/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository
 */
export function getCheckVulnerabilityAlerts(options: {
  pathParams: API.GithubV3Json.Repos.GetCheckVulnerabilityAlerts.PathParams;
  headers?: API.GithubV3Json.Repos.GetCheckVulnerabilityAlerts.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/vulnerability-alerts`,
    options,
  );
}

/**
 * Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/articles/about-security-alerts-for-vulnerable-dependencies)".
 * @summary Enable vulnerability alerts
 * @path `/repos/{owner}/{repo}/vulnerability-alerts`
 * @docs https://docs.github.com/rest/reference/repos#enable-vulnerability-alerts
 */
export function putEnableVulnerabilityAlerts(options: {
  pathParams: API.GithubV3Json.Repos.PutEnableVulnerabilityAlerts.PathParams;
  headers?: API.GithubV3Json.Repos.PutEnableVulnerabilityAlerts.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/vulnerability-alerts`,
    options,
  );
}

/**
 * Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
 * `main`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
 * the `Location` header to make a second `GET` request.
 *
 * **Note**: For private repositories, these links are temporary and expire after five minutes. If the repository is empty, you will receive a 404 when you follow the redirect.
 * @summary Download a repository archive (zip)
 * @path `/repos/{owner}/{repo}/zipball/{ref}`
 * @docs https://docs.github.com/rest/reference/repos#download-a-repository-archive
 */
export function getDownloadZipballArchive(options: {
  pathParams: API.GithubV3Json.Repos.GetDownloadZipballArchive.PathParams;
  headers?: API.GithubV3Json.Repos.GetDownloadZipballArchive.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/zipball/${options.pathParams.ref}`,
    options,
  );
}

/**
 * Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
 *
 * If an organization owner has configured the organization to prevent members from deleting organization-owned
 * repositories, you will get a `403 Forbidden` response.
 * @summary Delete a repository
 * @path `/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/repos#delete-a-repository
 */
export function deleteRepos(options: {
  pathParams: API.GithubV3Json.Repos.DeleteRepos.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteRepos.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
 *
 * **Note:** In order to see the `security_and_analysis` block for a repository you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * @summary Get a repository
 * @path `/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/repos#get-a-repository
 */
export function getRepos(options: {
  pathParams: API.GithubV3Json.Repos.GetRepos.PathParams;
  headers?: API.GithubV3Json.Repos.GetRepos.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetRepos.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/rest/reference/repos#replace-all-repository-topics) endpoint.
 * @summary Update a repository
 * @path `/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/repos/repos#update-a-repository
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Repos.PatchUpdate.PathParams;
  headers?: API.GithubV3Json.Repos.PatchUpdate.Headers;
  body?: API.GithubV3Json.Repos.PatchUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PatchUpdate.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. If the repository is not public, the authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
 *
 * **OAuth scope requirements**
 *
 * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
 *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
 *   `repo` scope to create a private repository
 * @summary Create a repository using a template
 * @path `/repos/{template_owner}/{template_repo}/generate`
 * @docs https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template
 */
export function postCreateUsingTemplate(options: {
  pathParams: API.GithubV3Json.Repos.PostCreateUsingTemplate.PathParams;
  headers?: API.GithubV3Json.Repos.PostCreateUsingTemplate.Headers;
  body: API.GithubV3Json.Repos.PostCreateUsingTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateUsingTemplate.Response>(
    "post",
    `/repos/${options.pathParams.template_owner}/${options.pathParams.template_repo}/generate`,
    options,
  );
}

/**
 * Lists all public repositories in the order that they were created.
 *
 * Note:
 * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
 * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
 * @summary List public repositories
 * @path `/repositories`
 * @docs https://docs.github.com/rest/reference/repos#list-public-repositories
 */
export function getListPublic(options?: {
  queryParams?: API.GithubV3Json.Repos.GetListPublic.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListPublic.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListPublic.Response>(
    "get",
    "/repositories",
    options || {},
  );
}

/**
 * Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
 *
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 * @summary List repositories for the authenticated user
 * @path `/user/repos`
 * @docs https://docs.github.com/rest/reference/repos#list-repositories-for-the-authenticated-user
 */
export function getListForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Repos.GetListForAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/repos",
    options || {},
  );
}

/**
 * Decline a repository invitation
 * @path `/user/repository_invitations/{invitation_id}`
 * @docs https://docs.github.com/rest/collaborators/invitations#decline-a-repository-invitation
 */
export function deleteDeclineInvitationForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Repos.DeleteDeclineInvitationForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Repos.DeleteDeclineInvitationForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/repository_invitations/${options.pathParams.invitation_id}`,
    options,
  );
}

/**
 * Accept a repository invitation
 * @path `/user/repository_invitations/{invitation_id}`
 * @docs https://docs.github.com/rest/collaborators/invitations#accept-a-repository-invitation
 */
export function patchAcceptInvitationForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Repos.PatchAcceptInvitationForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Repos.PatchAcceptInvitationForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/user/repository_invitations/${options.pathParams.invitation_id}`,
    options,
  );
}

/**
 * When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
 * @summary List repository invitations for the authenticated user
 * @path `/user/repository_invitations`
 * @docs https://docs.github.com/rest/collaborators/invitations#list-repository-invitations-for-the-authenticated-user
 */
export function getListInvitationsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Repos.GetListInvitationsForAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListInvitationsForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListInvitationsForAuthenticatedUser.Response>(
    "get",
    "/user/repository_invitations",
    options || {},
  );
}

/**
 * Creates a new repository for the authenticated user.
 *
 * **OAuth scope requirements**
 *
 * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
 *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
 *   `repo` scope to create a private repository.
 * @summary Create a repository for the authenticated user
 * @path `/user/repos`
 * @docs https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user
 */
export function postCreateForAuthenticatedUser(options: {
  headers?: API.GithubV3Json.Repos.PostCreateForAuthenticatedUser.Headers;
  body: API.GithubV3Json.Repos.PostCreateForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.PostCreateForAuthenticatedUser.Response>(
    "post",
    "/user/repos",
    options,
  );
}

/**
 * Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
 * @summary List repositories for a user
 * @path `/users/{username}/repos`
 * @docs https://docs.github.com/rest/reference/repos#list-repositories-for-a-user
 */
export function getListForUser(options: {
  pathParams: API.GithubV3Json.Repos.GetListForUser.PathParams;
  queryParams?: API.GithubV3Json.Repos.GetListForUser.QueryParams;
  headers?: API.GithubV3Json.Repos.GetListForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Repos.GetListForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/repos`,
    options,
  );
}
