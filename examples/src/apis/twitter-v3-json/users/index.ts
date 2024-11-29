import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns a list of Users that follow a List by the provided List ID
 * @summary Returns User objects that follow a List by the provided List ID
 * @path `/2/lists/{id}/followers`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export function getListFollowers(options: {
  pathParams: API.TwitterV3Json.Users.GetListFollowers.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetListFollowers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetListFollowers.Response>(
    "get",
    `/2/lists/${options.pathParams.id}/followers`,
    options,
  );
}

/**
 * Returns a list of Users that are members of a List by the provided List ID.
 * @summary Returns User objects that are members of a List by the provided List ID.
 * @path `/2/lists/{id}/members`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export function getListMembers(options: {
  pathParams: API.TwitterV3Json.Users.GetListMembers.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetListMembers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetListMembers.Response>(
    "get",
    `/2/lists/${options.pathParams.id}/members`,
    options,
  );
}

/**
 * Returns a list of Users that have liked the provided Post ID
 * @summary Returns User objects that have liked the provided Post ID
 * @path `/2/tweets/{id}/liking_users`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users
 */
export function getTweetsIdLiking(options: {
  pathParams: API.TwitterV3Json.Users.GetTweetsIdLiking.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetTweetsIdLiking.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetTweetsIdLiking.Response>(
    "get",
    `/2/tweets/${options.pathParams.id}/liking_users`,
    options,
  );
}

/**
 * Returns a list of Users that have retweeted the provided Post ID
 * @summary Returns User objects that have retweeted the provided Post ID
 * @path `/2/tweets/{id}/retweeted_by`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by
 */
export function getTweetsIdRetweeting(options: {
  pathParams: API.TwitterV3Json.Users.GetTweetsIdRetweeting.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetTweetsIdRetweeting.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetTweetsIdRetweeting.Response>(
    "get",
    `/2/tweets/${options.pathParams.id}/retweeted_by`,
    options,
  );
}

/**
 * This endpoint returns information about a User. Specify User by username.
 * @summary User lookup by username
 * @path `/2/users/by/username/{username}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username
 */
export function getFindUserByUsername(options: {
  pathParams: API.TwitterV3Json.Users.GetFindUserByUsername.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetFindUserByUsername.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetFindUserByUsername.Response>(
    "get",
    `/2/users/by/username/${options.pathParams.username}`,
    options,
  );
}

/**
 * This endpoint returns information about Users. Specify Users by their username.
 * @summary User lookup by usernames
 * @path `/2/users/by`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by
 */
export function getFindByUsername(options: {
  queryParams: API.TwitterV3Json.Users.GetFindByUsername.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetFindByUsername.Response>(
    "get",
    "/2/users/by",
    options,
  );
}

/**
 * This endpoint returns information about the requesting User.
 * @summary User lookup me
 * @path `/2/users/me`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
 */
export function getFindMyUser(options?: {
  queryParams?: API.TwitterV3Json.Users.GetFindMyUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetFindMyUser.Response>(
    "get",
    "/2/users/me",
    options || {},
  );
}

/**
 * Returns Users that match a search query.
 * @summary User search
 * @path `/2/users/search`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-search
 */
export function getSearchUserByQuery(options: {
  queryParams: API.TwitterV3Json.Users.GetSearchUserByQuery.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetSearchUserByQuery.Response>(
    "get",
    "/2/users/search",
    options,
  );
}

/**
 * Returns a list of Users that are blocked by the provided User ID
 * @summary Returns User objects that are blocked by provided User ID
 * @path `/2/users/{id}/blocking`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking
 */
export function getIdBlocking(options: {
  pathParams: API.TwitterV3Json.Users.GetIdBlocking.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetIdBlocking.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetIdBlocking.Response>(
    "get",
    `/2/users/${options.pathParams.id}/blocking`,
    options,
  );
}

/**
 * Returns a list of Users who are followers of the specified User ID.
 * @summary Followers by User ID
 * @path `/2/users/{id}/followers`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
 */
export function getIdFollowers(options: {
  pathParams: API.TwitterV3Json.Users.GetIdFollowers.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetIdFollowers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetIdFollowers.Response>(
    "get",
    `/2/users/${options.pathParams.id}/followers`,
    options,
  );
}

/**
 * Returns a list of Users that are being followed by the provided User ID
 * @summary Following by User ID
 * @path `/2/users/{id}/following`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following
 */
export function getIdFollowing(options: {
  pathParams: API.TwitterV3Json.Users.GetIdFollowing.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetIdFollowing.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetIdFollowing.Response>(
    "get",
    `/2/users/${options.pathParams.id}/following`,
    options,
  );
}

/**
 * Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request
 * @summary Follow User
 * @path `/2/users/{id}/following`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following
 */
export function postIdFollow(options: {
  pathParams: API.TwitterV3Json.Users.PostIdFollow.PathParams;
  body: API.TwitterV3Json.Users.PostIdFollow.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.PostIdFollow.Response>(
    "post",
    `/2/users/${options.pathParams.id}/following`,
    options,
  );
}

/**
 * Returns a list of Users that are muted by the provided User ID
 * @summary Returns User objects that are muted by the provided User ID
 * @path `/2/users/{id}/muting`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting
 */
export function getIdMuting(options: {
  pathParams: API.TwitterV3Json.Users.GetIdMuting.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetIdMuting.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetIdMuting.Response>(
    "get",
    `/2/users/${options.pathParams.id}/muting`,
    options,
  );
}

/**
 * Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.
 * @summary Mute User by User ID.
 * @path `/2/users/{id}/muting`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting
 */
export function postIdMute(options: {
  pathParams: API.TwitterV3Json.Users.PostIdMute.PathParams;
  body: API.TwitterV3Json.Users.PostIdMute.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.PostIdMute.Response>(
    "post",
    `/2/users/${options.pathParams.id}/muting`,
    options,
  );
}

/**
 * This endpoint returns information about a User. Specify User by ID.
 * @summary User lookup by ID
 * @path `/2/users/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id
 */
export function getFindUserById(options: {
  pathParams: API.TwitterV3Json.Users.GetFindUserById.PathParams;
  queryParams?: API.TwitterV3Json.Users.GetFindUserById.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetFindUserById.Response>(
    "get",
    `/2/users/${options.pathParams.id}`,
    options,
  );
}

/**
 * Causes the source User to unfollow the target User. The source User must match the User context authorizing the request
 * @summary Unfollow User
 * @path `/2/users/{source_user_id}/following/{target_user_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following
 */
export function deleteIdUnfollow(options: {
  pathParams: API.TwitterV3Json.Users.DeleteIdUnfollow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.DeleteIdUnfollow.Response>(
    "delete",
    `/2/users/${options.pathParams.source_user_id}/following/${options.pathParams.target_user_id}`,
    options,
  );
}

/**
 * Causes the source User to unmute the target User. The source User must match the User context authorizing the request
 * @summary Unmute User by User ID
 * @path `/2/users/{source_user_id}/muting/{target_user_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting
 */
export function deleteIdUnmute(options: {
  pathParams: API.TwitterV3Json.Users.DeleteIdUnmute.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.DeleteIdUnmute.Response>(
    "delete",
    `/2/users/${options.pathParams.source_user_id}/muting/${options.pathParams.target_user_id}`,
    options,
  );
}

/**
 * This endpoint returns information about Users. Specify Users by their ID.
 * @summary User lookup by IDs
 * @path `/2/users`
 * @docs https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users
 */
export function getFindById(options: {
  queryParams: API.TwitterV3Json.Users.GetFindById.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Users.GetFindById.Response>(
    "get",
    "/2/users",
    options,
  );
}
