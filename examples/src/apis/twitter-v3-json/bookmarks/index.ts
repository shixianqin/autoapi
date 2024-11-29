import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Removes a Post from the requesting User's bookmarked Posts.
 * @summary Remove a bookmarked Post
 * @path `/2/users/{id}/bookmarks/{tweet_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/delete-users-id-bookmarks-tweet_id
 */
export function deleteUsersId(options: {
  pathParams: API.TwitterV3Json.Bookmarks.DeleteUsersId.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Bookmarks.DeleteUsersId.Response>(
    "delete",
    `/2/users/${options.pathParams.id}/bookmarks/${options.pathParams.tweet_id}`,
    options,
  );
}

/**
 * Returns Post objects that have been bookmarked by the requesting User
 * @summary Bookmarks by User
 * @path `/2/users/{id}/bookmarks`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks
 */
export function getUsersId(options: {
  pathParams: API.TwitterV3Json.Bookmarks.GetUsersId.PathParams;
  queryParams?: API.TwitterV3Json.Bookmarks.GetUsersId.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Bookmarks.GetUsersId.Response>(
    "get",
    `/2/users/${options.pathParams.id}/bookmarks`,
    options,
  );
}

/**
 * Adds a Post (ID in the body) to the requesting User's (in the path) bookmarks
 * @summary Add Post to Bookmarks
 * @path `/2/users/{id}/bookmarks`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks
 */
export function postUsersId(options: {
  pathParams: API.TwitterV3Json.Bookmarks.PostUsersId.PathParams;
  headers?: Record<string, any>;
  body: API.TwitterV3Json.Bookmarks.PostUsersId.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Bookmarks.PostUsersId.Response>(
    "post",
    `/2/users/${options.pathParams.id}/bookmarks`,
    options,
  );
}
