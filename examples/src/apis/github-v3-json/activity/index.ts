import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
 * @summary List public events
 * @path `/events`
 * @docs https://docs.github.com/rest/reference/activity#list-public-events
 */
export function getListPublicEvents(options?: {
  queryParams?: API.GithubV3Json.Activity.GetListPublicEvents.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListPublicEvents.Response>(
    "get",
    "/events",
    options || {},
  );
}

/**
 * GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
 *   **Timeline**: The GitHub global public timeline
 *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia)
 *   **Current user public**: The public timeline for the authenticated user
 *   **Current user**: The private timeline for the authenticated user
 *   **Current user actor**: The private timeline for activity created by the authenticated user
 *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
 *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
 *
 * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
 * @summary Get feeds
 * @path `/feeds`
 * @docs https://docs.github.com/rest/reference/activity#get-feeds
 */
export function getFeeds(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetFeeds.Response>(
    "get",
    "/feeds",
    options || {},
  );
}

/**
 * List public events for a network of repositories
 * @path `/networks/{owner}/{repo}/events`
 * @docs https://docs.github.com/rest/reference/activity#list-public-events-for-a-network-of-repositories
 */
export function getListPublicEventsForRepoNetwork(options: {
  pathParams: API.GithubV3Json.Activity.GetListPublicEventsForRepoNetwork.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListPublicEventsForRepoNetwork.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListPublicEventsForRepoNetwork.Response>(
    "get",
    `/networks/${options.pathParams.owner}/${options.pathParams.repo}/events`,
    options,
  );
}

/**
 * Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
 * @summary Delete a thread subscription
 * @path `/notifications/threads/{thread_id}/subscription`
 * @docs https://docs.github.com/rest/reference/activity#delete-a-thread-subscription
 */
export function deleteThreadSubscription(options: {
  pathParams: API.GithubV3Json.Activity.DeleteThreadSubscription.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/notifications/threads/${options.pathParams.thread_id}/subscription`,
    options,
  );
}

/**
 * This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/reference/activity#get-a-repository-subscription).
 *
 * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
 * @summary Get a thread subscription for the authenticated user
 * @path `/notifications/threads/{thread_id}/subscription`
 * @docs https://docs.github.com/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user
 */
export function getThreadSubscriptionForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.GetThreadSubscriptionForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetThreadSubscriptionForAuthenticatedUser.Response>(
    "get",
    `/notifications/threads/${options.pathParams.thread_id}/subscription`,
    options,
  );
}

/**
 * If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
 *
 * You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
 *
 * Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/rest/reference/activity#delete-a-thread-subscription) endpoint.
 * @summary Set a thread subscription
 * @path `/notifications/threads/{thread_id}/subscription`
 * @docs https://docs.github.com/rest/reference/activity#set-a-thread-subscription
 */
export function putSetThreadSubscription(options: {
  pathParams: API.GithubV3Json.Activity.PutSetThreadSubscription.PathParams;
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Activity.PutSetThreadSubscription.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.PutSetThreadSubscription.Response>(
    "put",
    `/notifications/threads/${options.pathParams.thread_id}/subscription`,
    options,
  );
}

/**
 * Gets information about a notification thread.
 * @summary Get a thread
 * @path `/notifications/threads/{thread_id}`
 * @docs https://docs.github.com/rest/reference/activity#get-a-thread
 */
export function getThread(options: {
  pathParams: API.GithubV3Json.Activity.GetThread.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetThread.Response>(
    "get",
    `/notifications/threads/${options.pathParams.thread_id}`,
    options,
  );
}

/**
 * Marks a thread as "read." Marking a thread as "read" is equivalent to clicking a notification in your notification inbox on GitHub: https://github.com/notifications.
 * @summary Mark a thread as read
 * @path `/notifications/threads/{thread_id}`
 * @docs https://docs.github.com/rest/reference/activity#mark-a-thread-as-read
 */
export function patchMarkThreadAsRead(options: {
  pathParams: API.GithubV3Json.Activity.PatchMarkThreadAsRead.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/notifications/threads/${options.pathParams.thread_id}`,
    options,
  );
}

/**
 * List all notifications for the current user, sorted by most recently updated.
 * @summary List notifications for the authenticated user
 * @path `/notifications`
 * @docs https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user
 */
export function getListNotificationsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Activity.GetListNotificationsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListNotificationsForAuthenticatedUser.Response>(
    "get",
    "/notifications",
    options || {},
  );
}

/**
 * Marks all notifications as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
 * @summary Mark notifications as read
 * @path `/notifications`
 * @docs https://docs.github.com/rest/reference/activity#mark-notifications-as-read
 */
export function putMarkNotificationsAsRead(options?: {
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Activity.PutMarkNotificationsAsRead.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.PutMarkNotificationsAsRead.Response>(
    "put",
    "/notifications",
    options || {},
  );
}

/**
 * List public organization events
 * @path `/orgs/{org}/events`
 * @docs https://docs.github.com/rest/reference/activity#list-public-organization-events
 */
export function getListPublicOrgEvents(options: {
  pathParams: API.GithubV3Json.Activity.GetListPublicOrgEvents.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListPublicOrgEvents.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListPublicOrgEvents.Response>(
    "get",
    `/orgs/${options.pathParams.org}/events`,
    options,
  );
}

/**
 * List repository events
 * @path `/repos/{owner}/{repo}/events`
 * @docs https://docs.github.com/rest/reference/activity#list-repository-events
 */
export function getListRepoEvents(options: {
  pathParams: API.GithubV3Json.Activity.GetListRepoEvents.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListRepoEvents.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListRepoEvents.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/events`,
    options,
  );
}

/**
 * Lists all notifications for the current user in the specified repository.
 * @summary List repository notifications for the authenticated user
 * @path `/repos/{owner}/{repo}/notifications`
 * @docs https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user
 */
export function getListRepoNotificationsForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListRepoNotificationsForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListRepoNotificationsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListRepoNotificationsForAuthenticatedUser.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/notifications`,
    options,
  );
}

/**
 * Marks all notifications in a repository as "read" for the current user. If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
 * @summary Mark repository notifications as read
 * @path `/repos/{owner}/{repo}/notifications`
 * @docs https://docs.github.com/rest/reference/activity#mark-repository-notifications-as-read
 */
export function putMarkRepoNotificationsAsRead(options: {
  pathParams: API.GithubV3Json.Activity.PutMarkRepoNotificationsAsRead.PathParams;
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Activity.PutMarkRepoNotificationsAsRead.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.PutMarkRepoNotificationsAsRead.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/notifications`,
    options,
  );
}

/**
 * Lists the people that have starred the repository.
 *
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.
 * @summary List stargazers
 * @path `/repos/{owner}/{repo}/stargazers`
 * @docs https://docs.github.com/rest/reference/activity#list-stargazers
 */
export function getListStargazersForRepo(options: {
  pathParams: API.GithubV3Json.Activity.GetListStargazersForRepo.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListStargazersForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListStargazersForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/stargazers`,
    options,
  );
}

/**
 * Lists the people watching the specified repository.
 * @summary List watchers
 * @path `/repos/{owner}/{repo}/subscribers`
 * @docs https://docs.github.com/rest/reference/activity#list-watchers
 */
export function getListWatchersForRepo(options: {
  pathParams: API.GithubV3Json.Activity.GetListWatchersForRepo.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListWatchersForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListWatchersForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/subscribers`,
    options,
  );
}

/**
 * This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/rest/reference/activity#set-a-repository-subscription).
 * @summary Delete a repository subscription
 * @path `/repos/{owner}/{repo}/subscription`
 * @docs https://docs.github.com/rest/reference/activity#delete-a-repository-subscription
 */
export function deleteRepoSubscription(options: {
  pathParams: API.GithubV3Json.Activity.DeleteRepoSubscription.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/subscription`,
    options,
  );
}

/**
 * Get a repository subscription
 * @path `/repos/{owner}/{repo}/subscription`
 * @docs https://docs.github.com/rest/reference/activity#get-a-repository-subscription
 */
export function getRepoSubscription(options: {
  pathParams: API.GithubV3Json.Activity.GetRepoSubscription.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetRepoSubscription.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/subscription`,
    options,
  );
}

/**
 * If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/rest/reference/activity#delete-a-repository-subscription) completely.
 * @summary Set a repository subscription
 * @path `/repos/{owner}/{repo}/subscription`
 * @docs https://docs.github.com/rest/reference/activity#set-a-repository-subscription
 */
export function putSetRepoSubscription(options: {
  pathParams: API.GithubV3Json.Activity.PutSetRepoSubscription.PathParams;
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Activity.PutSetRepoSubscription.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.PutSetRepoSubscription.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/subscription`,
    options,
  );
}

/**
 * Unstar a repository for the authenticated user
 * @path `/user/starred/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/activity#unstar-a-repository-for-the-authenticated-user
 */
export function deleteUnstarRepoForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.DeleteUnstarRepoForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/starred/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * Check if a repository is starred by the authenticated user
 * @path `/user/starred/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user
 */
export function getCheckRepoIsStarredByAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.GetCheckRepoIsStarredByAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/user/starred/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @summary Star a repository for the authenticated user
 * @path `/user/starred/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/activity#star-a-repository-for-the-authenticated-user
 */
export function putStarRepoForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.PutStarRepoForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/user/starred/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * Lists repositories the authenticated user has starred.
 *
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.
 * @summary List repositories starred by the authenticated user
 * @path `/user/starred`
 * @docs https://docs.github.com/rest/reference/activity#list-repositories-starred-by-the-authenticated-user
 */
export function getListReposStarredByAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Activity.GetListReposStarredByAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListReposStarredByAuthenticatedUser.Response>(
    "get",
    "/user/starred",
    options || {},
  );
}

/**
 * Lists repositories the authenticated user is watching.
 * @summary List repositories watched by the authenticated user
 * @path `/user/subscriptions`
 * @docs https://docs.github.com/rest/reference/activity#list-repositories-watched-by-the-authenticated-user
 */
export function getListWatchedReposForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Activity.GetListWatchedReposForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListWatchedReposForAuthenticatedUser.Response>(
    "get",
    "/user/subscriptions",
    options || {},
  );
}

/**
 * This is the user's organization dashboard. You must be authenticated as the user to view this.
 * @summary List organization events for the authenticated user
 * @path `/users/{username}/events/orgs/{org}`
 * @docs https://docs.github.com/rest/reference/activity#list-organization-events-for-the-authenticated-user
 */
export function getListOrgEventsForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListOrgEventsForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListOrgEventsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListOrgEventsForAuthenticatedUser.Response>(
    "get",
    `/users/${options.pathParams.username}/events/orgs/${options.pathParams.org}`,
    options,
  );
}

/**
 * List public events for a user
 * @path `/users/{username}/events/public`
 * @docs https://docs.github.com/rest/reference/activity#list-public-events-for-a-user
 */
export function getListPublicEventsForUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListPublicEventsForUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListPublicEventsForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListPublicEventsForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/events/public`,
    options,
  );
}

/**
 * If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
 * @summary List events for the authenticated user
 * @path `/users/{username}/events`
 * @docs https://docs.github.com/rest/reference/activity#list-events-for-the-authenticated-user
 */
export function getListEventsForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListEventsForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListEventsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListEventsForAuthenticatedUser.Response>(
    "get",
    `/users/${options.pathParams.username}/events`,
    options,
  );
}

/**
 * List public events received by a user
 * @path `/users/{username}/received_events/public`
 * @docs https://docs.github.com/rest/reference/activity#list-public-events-received-by-a-user
 */
export function getListReceivedPublicEventsForUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListReceivedPublicEventsForUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListReceivedPublicEventsForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListReceivedPublicEventsForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/received_events/public`,
    options,
  );
}

/**
 * These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
 * @summary List events received by the authenticated user
 * @path `/users/{username}/received_events`
 * @docs https://docs.github.com/rest/reference/activity#list-events-received-by-the-authenticated-user
 */
export function getListReceivedEventsForUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListReceivedEventsForUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListReceivedEventsForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListReceivedEventsForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/received_events`,
    options,
  );
}

/**
 * Lists repositories a user has starred.
 *
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header: `application/vnd.github.star+json`.
 * @summary List repositories starred by a user
 * @path `/users/{username}/starred`
 * @docs https://docs.github.com/rest/reference/activity#list-repositories-starred-by-a-user
 */
export function getListReposStarredByUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListReposStarredByUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListReposStarredByUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListReposStarredByUser.Response>(
    "get",
    `/users/${options.pathParams.username}/starred`,
    options,
  );
}

/**
 * Lists repositories a user is watching.
 * @summary List repositories watched by a user
 * @path `/users/{username}/subscriptions`
 * @docs https://docs.github.com/rest/reference/activity#list-repositories-watched-by-a-user
 */
export function getListReposWatchedByUser(options: {
  pathParams: API.GithubV3Json.Activity.GetListReposWatchedByUser.PathParams;
  queryParams?: API.GithubV3Json.Activity.GetListReposWatchedByUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Activity.GetListReposWatchedByUser.Response>(
    "get",
    `/users/${options.pathParams.username}/subscriptions`,
    options,
  );
}
