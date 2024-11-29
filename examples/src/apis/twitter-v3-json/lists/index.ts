import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Causes a User to be removed from the members of a List.
 * @summary Remove a List member
 * @path `/2/lists/{id}/members/{user_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id
 */
export function deleteListRemoveMember(options: {
  pathParams: API.TwitterV3Json.Lists.DeleteListRemoveMember.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.DeleteListRemoveMember.Response>(
    "delete",
    `/2/lists/${options.pathParams.id}/members/${options.pathParams.user_id}`,
    options,
  );
}

/**
 * Causes a User to become a member of a List.
 * @summary Add a List member
 * @path `/2/lists/{id}/members`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members
 */
export function postListAddMember(options: {
  pathParams: API.TwitterV3Json.Lists.PostListAddMember.PathParams;
  headers?: Record<string, any>;
  body: API.TwitterV3Json.Lists.PostListAddMember.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.PostListAddMember.Response>(
    "post",
    `/2/lists/${options.pathParams.id}/members`,
    options,
  );
}

/**
 * Delete a List that you own.
 * @summary Delete List
 * @path `/2/lists/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id
 */
export function deleteListId(options: {
  pathParams: API.TwitterV3Json.Lists.DeleteListId.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.DeleteListId.Response>(
    "delete",
    `/2/lists/${options.pathParams.id}`,
    options,
  );
}

/**
 * Returns a List.
 * @summary List lookup by List ID.
 * @path `/2/lists/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id
 */
export function getListId(options: {
  pathParams: API.TwitterV3Json.Lists.GetListId.PathParams;
  queryParams?: API.TwitterV3Json.Lists.GetListId.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.GetListId.Response>(
    "get",
    `/2/lists/${options.pathParams.id}`,
    options,
  );
}

/**
 * Update a List that you own.
 * @summary Update List.
 * @path `/2/lists/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id
 */
export function putListIdUpdate(options: {
  pathParams: API.TwitterV3Json.Lists.PutListIdUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.TwitterV3Json.Lists.PutListIdUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.PutListIdUpdate.Response>(
    "put",
    `/2/lists/${options.pathParams.id}`,
    options,
  );
}

/**
 * Creates a new List.
 * @summary Create List
 * @path `/2/lists`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists
 */
export function postListIdCreate(options: {
  headers?: Record<string, any>;
  body: API.TwitterV3Json.Lists.PostListIdCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.PostListIdCreate.Response>(
    "post",
    "/2/lists",
    options,
  );
}

/**
 * Causes a User to unfollow a List.
 * @summary Unfollow a List
 * @path `/2/users/{id}/followed_lists/{list_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id
 */
export function deleteListUserUnfollow(options: {
  pathParams: API.TwitterV3Json.Lists.DeleteListUserUnfollow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.DeleteListUserUnfollow.Response>(
    "delete",
    `/2/users/${options.pathParams.id}/followed_lists/${options.pathParams.list_id}`,
    options,
  );
}

/**
 * Returns a User's followed Lists.
 * @summary Get User's Followed Lists
 * @path `/2/users/{id}/followed_lists`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists
 */
export function getUserFollowed(options: {
  pathParams: API.TwitterV3Json.Lists.GetUserFollowed.PathParams;
  queryParams?: API.TwitterV3Json.Lists.GetUserFollowed.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.GetUserFollowed.Response>(
    "get",
    `/2/users/${options.pathParams.id}/followed_lists`,
    options,
  );
}

/**
 * Causes a User to follow a List.
 * @summary Follow a List
 * @path `/2/users/{id}/followed_lists`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists
 */
export function postListUserFollow(options: {
  pathParams: API.TwitterV3Json.Lists.PostListUserFollow.PathParams;
  headers?: Record<string, any>;
  body: API.TwitterV3Json.Lists.PostListUserFollow.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.PostListUserFollow.Response>(
    "post",
    `/2/users/${options.pathParams.id}/followed_lists`,
    options,
  );
}

/**
 * Get a User's List Memberships.
 * @summary Get a User's List Memberships
 * @path `/2/users/{id}/list_memberships`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships
 */
export function getUserListMemberships(options: {
  pathParams: API.TwitterV3Json.Lists.GetUserListMemberships.PathParams;
  queryParams?: API.TwitterV3Json.Lists.GetUserListMemberships.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.GetUserListMemberships.Response>(
    "get",
    `/2/users/${options.pathParams.id}/list_memberships`,
    options,
  );
}

/**
 * Get a User's Owned Lists.
 * @path `/2/users/{id}/owned_lists`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists
 */
export function getListUserOwned(options: {
  pathParams: API.TwitterV3Json.Lists.GetListUserOwned.PathParams;
  queryParams?: API.TwitterV3Json.Lists.GetListUserOwned.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.GetListUserOwned.Response>(
    "get",
    `/2/users/${options.pathParams.id}/owned_lists`,
    options,
  );
}

/**
 * Causes a User to remove a pinned List.
 * @summary Unpin a List
 * @path `/2/users/{id}/pinned_lists/{list_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id
 */
export function deleteListUserUnpin(options: {
  pathParams: API.TwitterV3Json.Lists.DeleteListUserUnpin.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.DeleteListUserUnpin.Response>(
    "delete",
    `/2/users/${options.pathParams.id}/pinned_lists/${options.pathParams.list_id}`,
    options,
  );
}

/**
 * Get a User's Pinned Lists.
 * @summary Get a User's Pinned Lists
 * @path `/2/users/{id}/pinned_lists`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists
 */
export function getListUserPinned(options: {
  pathParams: API.TwitterV3Json.Lists.GetListUserPinned.PathParams;
  queryParams?: API.TwitterV3Json.Lists.GetListUserPinned.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.GetListUserPinned.Response>(
    "get",
    `/2/users/${options.pathParams.id}/pinned_lists`,
    options,
  );
}

/**
 * Causes a User to pin a List.
 * @summary Pin a List
 * @path `/2/users/{id}/pinned_lists`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists
 */
export function postListUserPin(options: {
  pathParams: API.TwitterV3Json.Lists.PostListUserPin.PathParams;
  headers?: Record<string, any>;
  body: API.TwitterV3Json.Lists.PostListUserPin.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Lists.PostListUserPin.Response>(
    "post",
    `/2/users/${options.pathParams.id}/pinned_lists`,
    options,
  );
}
