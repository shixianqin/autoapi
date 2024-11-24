import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * List public gists sorted by most recently updated to least recently updated.
 *
 * Note: With [pagination](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
 * @summary List public gists
 * @path `/gists/public`
 * @docs https://docs.github.com/rest/reference/gists#list-public-gists
 */
export function getListPublic(options?: {
  queryParams?: API.GithubV3Json.Gists.GetListPublic.QueryParams;
  headers?: API.GithubV3Json.Gists.GetListPublic.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetListPublic.Response>(
    "get",
    "/gists/public",
    options || {},
  );
}

/**
 * List the authenticated user's starred gists:
 * @summary List starred gists
 * @path `/gists/starred`
 * @docs https://docs.github.com/rest/reference/gists#list-starred-gists
 */
export function getListStarred(options?: {
  queryParams?: API.GithubV3Json.Gists.GetListStarred.QueryParams;
  headers?: API.GithubV3Json.Gists.GetListStarred.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetListStarred.Response>(
    "get",
    "/gists/starred",
    options || {},
  );
}

/**
 * Delete a gist comment
 * @path `/gists/{gist_id}/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/gists#delete-a-gist-comment
 */
export function deleteComment(options: {
  pathParams: API.GithubV3Json.Gists.DeleteComment.PathParams;
  headers?: API.GithubV3Json.Gists.DeleteComment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/gists/${options.pathParams.gist_id}/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Get a gist comment
 * @path `/gists/{gist_id}/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/gists#get-a-gist-comment
 */
export function getComment(options: {
  pathParams: API.GithubV3Json.Gists.GetComment.PathParams;
  headers?: API.GithubV3Json.Gists.GetComment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetComment.Response>(
    "get",
    `/gists/${options.pathParams.gist_id}/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Update a gist comment
 * @path `/gists/{gist_id}/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/gists#update-a-gist-comment
 */
export function patchUpdateComment(options: {
  pathParams: API.GithubV3Json.Gists.PatchUpdateComment.PathParams;
  headers?: API.GithubV3Json.Gists.PatchUpdateComment.Headers;
  body: API.GithubV3Json.Gists.PatchUpdateComment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.PatchUpdateComment.Response>(
    "patch",
    `/gists/${options.pathParams.gist_id}/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * List gist comments
 * @path `/gists/{gist_id}/comments`
 * @docs https://docs.github.com/rest/reference/gists#list-gist-comments
 */
export function getListComments(options: {
  pathParams: API.GithubV3Json.Gists.GetListComments.PathParams;
  queryParams?: API.GithubV3Json.Gists.GetListComments.QueryParams;
  headers?: API.GithubV3Json.Gists.GetListComments.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetListComments.Response>(
    "get",
    `/gists/${options.pathParams.gist_id}/comments`,
    options,
  );
}

/**
 * Create a gist comment
 * @path `/gists/{gist_id}/comments`
 * @docs https://docs.github.com/rest/reference/gists#create-a-gist-comment
 */
export function postCreateComment(options: {
  pathParams: API.GithubV3Json.Gists.PostCreateComment.PathParams;
  headers?: API.GithubV3Json.Gists.PostCreateComment.Headers;
  body: API.GithubV3Json.Gists.PostCreateComment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.PostCreateComment.Response>(
    "post",
    `/gists/${options.pathParams.gist_id}/comments`,
    options,
  );
}

/**
 * List gist commits
 * @path `/gists/{gist_id}/commits`
 * @docs https://docs.github.com/rest/reference/gists#list-gist-commits
 */
export function getListCommits(options: {
  pathParams: API.GithubV3Json.Gists.GetListCommits.PathParams;
  queryParams?: API.GithubV3Json.Gists.GetListCommits.QueryParams;
  headers?: API.GithubV3Json.Gists.GetListCommits.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetListCommits.Response>(
    "get",
    `/gists/${options.pathParams.gist_id}/commits`,
    options,
  );
}

/**
 * List gist forks
 * @path `/gists/{gist_id}/forks`
 * @docs https://docs.github.com/rest/reference/gists#list-gist-forks
 */
export function getListForks(options: {
  pathParams: API.GithubV3Json.Gists.GetListForks.PathParams;
  queryParams?: API.GithubV3Json.Gists.GetListForks.QueryParams;
  headers?: API.GithubV3Json.Gists.GetListForks.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetListForks.Response>(
    "get",
    `/gists/${options.pathParams.gist_id}/forks`,
    options,
  );
}

/**
 * Fork a gist
 * @path `/gists/{gist_id}/forks`
 * @docs https://docs.github.com/rest/reference/gists#fork-a-gist
 */
export function postFork(options: {
  pathParams: API.GithubV3Json.Gists.PostFork.PathParams;
  headers?: API.GithubV3Json.Gists.PostFork.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.PostFork.Response>(
    "post",
    `/gists/${options.pathParams.gist_id}/forks`,
    options,
  );
}

/**
 * Unstar a gist
 * @path `/gists/{gist_id}/star`
 * @docs https://docs.github.com/rest/reference/gists#unstar-a-gist
 */
export function deleteUnstar(options: {
  pathParams: API.GithubV3Json.Gists.DeleteUnstar.PathParams;
  headers?: API.GithubV3Json.Gists.DeleteUnstar.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/gists/${options.pathParams.gist_id}/star`,
    options,
  );
}

/**
 * Check if a gist is starred
 * @path `/gists/{gist_id}/star`
 * @docs https://docs.github.com/rest/reference/gists#check-if-a-gist-is-starred
 */
export function getCheckIsStarred(options: {
  pathParams: API.GithubV3Json.Gists.GetCheckIsStarred.PathParams;
  headers?: API.GithubV3Json.Gists.GetCheckIsStarred.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/gists/${options.pathParams.gist_id}/star`,
    options,
  );
}

/**
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @summary Star a gist
 * @path `/gists/{gist_id}/star`
 * @docs https://docs.github.com/rest/reference/gists#star-a-gist
 */
export function putStar(options: {
  pathParams: API.GithubV3Json.Gists.PutStar.PathParams;
  headers?: API.GithubV3Json.Gists.PutStar.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/gists/${options.pathParams.gist_id}/star`,
    options,
  );
}

/**
 * Get a gist revision
 * @path `/gists/{gist_id}/{sha}`
 * @docs https://docs.github.com/rest/reference/gists#get-a-gist-revision
 */
export function getRevision(options: {
  pathParams: API.GithubV3Json.Gists.GetRevision.PathParams;
  headers?: API.GithubV3Json.Gists.GetRevision.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetRevision.Response>(
    "get",
    `/gists/${options.pathParams.gist_id}/${options.pathParams.sha}`,
    options,
  );
}

/**
 * Delete a gist
 * @path `/gists/{gist_id}`
 * @docs https://docs.github.com/rest/reference/gists#delete-a-gist
 */
export function deleteGists(options: {
  pathParams: API.GithubV3Json.Gists.DeleteGists.PathParams;
  headers?: API.GithubV3Json.Gists.DeleteGists.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/gists/${options.pathParams.gist_id}`,
    options,
  );
}

/**
 * Get a gist
 * @path `/gists/{gist_id}`
 * @docs https://docs.github.com/rest/reference/gists#get-a-gist
 */
export function getGists(options: {
  pathParams: API.GithubV3Json.Gists.GetGists.PathParams;
  headers?: API.GithubV3Json.Gists.GetGists.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetGists.Response>(
    "get",
    `/gists/${options.pathParams.gist_id}`,
    options,
  );
}

/**
 * Allows you to update a gist's description and to update, delete, or rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
 * @summary Update a gist
 * @path `/gists/{gist_id}`
 * @docs https://docs.github.com/rest/reference/gists/#update-a-gist
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Gists.PatchUpdate.PathParams;
  headers?: API.GithubV3Json.Gists.PatchUpdate.Headers;
  body: API.GithubV3Json.Gists.PatchUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.PatchUpdate.Response>(
    "patch",
    `/gists/${options.pathParams.gist_id}`,
    options,
  );
}

/**
 * Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
 * @summary List gists for the authenticated user
 * @path `/gists`
 * @docs https://docs.github.com/rest/reference/gists#list-gists-for-the-authenticated-user
 */
export function getList(options?: {
  queryParams?: API.GithubV3Json.Gists.GetList.QueryParams;
  headers?: API.GithubV3Json.Gists.GetList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetList.Response>(
    "get",
    "/gists",
    options || {},
  );
}

/**
 * Allows you to add a new gist with one or more files.
 *
 * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.
 * @summary Create a gist
 * @path `/gists`
 * @docs https://docs.github.com/rest/reference/gists#create-a-gist
 */
export function postCreate(options: {
  headers?: API.GithubV3Json.Gists.PostCreate.Headers;
  body: API.GithubV3Json.Gists.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.PostCreate.Response>(
    "post",
    "/gists",
    options,
  );
}

/**
 * Lists public gists for the specified user:
 * @summary List gists for a user
 * @path `/users/{username}/gists`
 * @docs https://docs.github.com/rest/reference/gists#list-gists-for-a-user
 */
export function getListForUser(options: {
  pathParams: API.GithubV3Json.Gists.GetListForUser.PathParams;
  queryParams?: API.GithubV3Json.Gists.GetListForUser.QueryParams;
  headers?: API.GithubV3Json.Gists.GetListForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gists.GetListForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/gists`,
    options,
  );
}
