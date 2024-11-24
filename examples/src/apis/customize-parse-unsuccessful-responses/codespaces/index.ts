import { request } from "@/adapter";

/**
 * Lists the codespaces associated to a specified repository and the authenticated user.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
 * @summary List codespaces in a repository for the authenticated user
 * @path `/repos/{owner}/{repo}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user
 */
export function getListInRepositoryForAuthenticatedUser(options: {
  pathParams: API.CustomizeParseUnsuccessfulResponses.Codespaces.GetListInRepositoryForAuthenticatedUser.PathParams;
  queryParams?: API.CustomizeParseUnsuccessfulResponses.Codespaces.GetListInRepositoryForAuthenticatedUser.QueryParams;
  headers?: API.CustomizeParseUnsuccessfulResponses.Codespaces.GetListInRepositoryForAuthenticatedUser.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeParseUnsuccessfulResponses.Codespaces.GetListInRepositoryForAuthenticatedUser.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces`,
    options,
  );
}

/**
 * Creates a codespace owned by the authenticated user in the specified repository.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Create a codespace in a repository
 * @path `/repos/{owner}/{repo}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#create-a-codespace-in-a-repository
 */
export function postCreateWithRepoForAuthenticatedUser(options: {
  pathParams: API.CustomizeParseUnsuccessfulResponses.Codespaces.PostCreateWithRepoForAuthenticatedUser.PathParams;
  headers?: API.CustomizeParseUnsuccessfulResponses.Codespaces.PostCreateWithRepoForAuthenticatedUser.Headers;
  body?: API.CustomizeParseUnsuccessfulResponses.Codespaces.PostCreateWithRepoForAuthenticatedUser.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeParseUnsuccessfulResponses.Codespaces.PostCreateWithRepoForAuthenticatedUser.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces`,
    options,
  );
}
