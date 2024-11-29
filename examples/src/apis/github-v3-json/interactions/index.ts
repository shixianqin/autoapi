import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
 * @summary Remove interaction restrictions for an organization
 * @path `/orgs/{org}/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization
 */
export function deleteRemoveRestrictionsForOrg(options: {
  pathParams: API.GithubV3Json.Interactions.DeleteRemoveRestrictionsForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/interaction-limits`,
    options,
  );
}

/**
 * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
 * @summary Get interaction restrictions for an organization
 * @path `/orgs/{org}/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization
 */
export function getRestrictionsForOrg(options: {
  pathParams: API.GithubV3Json.Interactions.GetRestrictionsForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Interactions.GetRestrictionsForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/interaction-limits`,
    options,
  );
}

/**
 * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
 * @summary Set interaction restrictions for an organization
 * @path `/orgs/{org}/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization
 */
export function putSetRestrictionsForOrg(options: {
  pathParams: API.GithubV3Json.Interactions.PutSetRestrictionsForOrg.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Interactions.PutSetRestrictionsForOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Interactions.PutSetRestrictionsForOrg.Response>(
    "put",
    `/orgs/${options.pathParams.org}/interaction-limits`,
    options,
  );
}

/**
 * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
 * @summary Remove interaction restrictions for a repository
 * @path `/repos/{owner}/{repo}/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository
 */
export function deleteRemoveRestrictionsForRepo(options: {
  pathParams: API.GithubV3Json.Interactions.DeleteRemoveRestrictionsForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/interaction-limits`,
    options,
  );
}

/**
 * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
 * @summary Get interaction restrictions for a repository
 * @path `/repos/{owner}/{repo}/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository
 */
export function getRestrictionsForRepo(options: {
  pathParams: API.GithubV3Json.Interactions.GetRestrictionsForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Interactions.GetRestrictionsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/interaction-limits`,
    options,
  );
}

/**
 * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
 * @summary Set interaction restrictions for a repository
 * @path `/repos/{owner}/{repo}/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository
 */
export function putSetRestrictionsForRepo(options: {
  pathParams: API.GithubV3Json.Interactions.PutSetRestrictionsForRepo.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Interactions.PutSetRestrictionsForRepo.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Interactions.PutSetRestrictionsForRepo.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/interaction-limits`,
    options,
  );
}

/**
 * Removes any interaction restrictions from your public repositories.
 * @summary Remove interaction restrictions from your public repositories
 * @path `/user/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories
 */
export function deleteRemoveRestrictionsForAuthenticatedUser(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/user/interaction-limits", options || {});
}

/**
 * Shows which type of GitHub user can interact with your public repositories and when the restriction expires.
 * @summary Get interaction restrictions for your public repositories
 * @path `/user/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories
 */
export function getRestrictionsForAuthenticatedUser(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Interactions.GetRestrictionsForAuthenticatedUser.Response>(
    "get",
    "/user/interaction-limits",
    options || {},
  );
}

/**
 * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
 * @summary Set interaction restrictions for your public repositories
 * @path `/user/interaction-limits`
 * @docs https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories
 */
export function putSetRestrictionsForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Interactions.PutSetRestrictionsForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Interactions.PutSetRestrictionsForAuthenticatedUser.Response>(
    "put",
    "/user/interaction-limits",
    options,
  );
}
