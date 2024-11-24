import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * List issues assigned to the authenticated user across all visible repositories including owned repositories, member
 * repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
 * necessarily assigned to you.
 *
 *
 * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 * @summary List issues assigned to the authenticated user
 * @path `/issues`
 * @docs https://docs.github.com/rest/reference/issues#list-issues-assigned-to-the-authenticated-user
 */
export function getList(options?: {
  queryParams?: API.GithubV3Json.Issues.GetList.QueryParams;
  headers?: API.GithubV3Json.Issues.GetList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetList.Response>(
    "get",
    "/issues",
    options || {},
  );
}

/**
 * List issues in an organization assigned to the authenticated user.
 *
 * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 * @summary List organization issues assigned to the authenticated user
 * @path `/orgs/{org}/issues`
 * @docs https://docs.github.com/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user
 */
export function getListForOrg(options: {
  pathParams: API.GithubV3Json.Issues.GetListForOrg.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListForOrg.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/issues`,
    options,
  );
}

/**
 * Checks if a user has permission to be assigned to an issue in this repository.
 *
 * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
 *
 * Otherwise a `404` status code is returned.
 * @summary Check if a user can be assigned
 * @path `/repos/{owner}/{repo}/assignees/{assignee}`
 * @docs https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned
 */
export function getCheckUserCanBeAssigned(options: {
  pathParams: API.GithubV3Json.Issues.GetCheckUserCanBeAssigned.PathParams;
  headers?: API.GithubV3Json.Issues.GetCheckUserCanBeAssigned.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/assignees/${options.pathParams.assignee}`,
    options,
  );
}

/**
 * Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
 * @summary List assignees
 * @path `/repos/{owner}/{repo}/assignees`
 * @docs https://docs.github.com/rest/reference/issues#list-assignees
 */
export function getListAssignees(options: {
  pathParams: API.GithubV3Json.Issues.GetListAssignees.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListAssignees.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListAssignees.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListAssignees.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/assignees`,
    options,
  );
}

/**
 * Delete an issue comment
 * @path `/repos/{owner}/{repo}/issues/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/issues#delete-an-issue-comment
 */
export function deleteComment(options: {
  pathParams: API.GithubV3Json.Issues.DeleteComment.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteComment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Get an issue comment
 * @path `/repos/{owner}/{repo}/issues/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/issues#get-an-issue-comment
 */
export function getComment(options: {
  pathParams: API.GithubV3Json.Issues.GetComment.PathParams;
  headers?: API.GithubV3Json.Issues.GetComment.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetComment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Update an issue comment
 * @path `/repos/{owner}/{repo}/issues/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/issues#update-an-issue-comment
 */
export function patchUpdateComment(options: {
  pathParams: API.GithubV3Json.Issues.PatchUpdateComment.PathParams;
  headers?: API.GithubV3Json.Issues.PatchUpdateComment.Headers;
  body: API.GithubV3Json.Issues.PatchUpdateComment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PatchUpdateComment.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * By default, Issue Comments are ordered by ascending ID.
 * @summary List issue comments for a repository
 * @path `/repos/{owner}/{repo}/issues/comments`
 * @docs https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository
 */
export function getListCommentsForRepo(options: {
  pathParams: API.GithubV3Json.Issues.GetListCommentsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListCommentsForRepo.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListCommentsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListCommentsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments`,
    options,
  );
}

/**
 * Get an issue event
 * @path `/repos/{owner}/{repo}/issues/events/{event_id}`
 * @docs https://docs.github.com/rest/reference/issues#get-an-issue-event
 */
export function getEvent(options: {
  pathParams: API.GithubV3Json.Issues.GetEvent.PathParams;
  headers?: API.GithubV3Json.Issues.GetEvent.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetEvent.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/events/${options.pathParams.event_id}`,
    options,
  );
}

/**
 * List issue events for a repository
 * @path `/repos/{owner}/{repo}/issues/events`
 * @docs https://docs.github.com/rest/reference/issues#list-issue-events-for-a-repository
 */
export function getListEventsForRepo(options: {
  pathParams: API.GithubV3Json.Issues.GetListEventsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListEventsForRepo.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListEventsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListEventsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/events`,
    options,
  );
}

/**
 * Checks if a user has permission to be assigned to a specific issue.
 *
 * If the `assignee` can be assigned to this issue, a `204` status code with no content is returned.
 *
 * Otherwise a `404` status code is returned.
 * @summary Check if a user can be assigned to a issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}`
 * @docs https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned-to-a-issue
 */
export function getCheckUserCanBeAssignedToIssue(options: {
  pathParams: API.GithubV3Json.Issues.GetCheckUserCanBeAssignedToIssue.PathParams;
  headers?: API.GithubV3Json.Issues.GetCheckUserCanBeAssignedToIssue.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/assignees/${options.pathParams.assignee}`,
    options,
  );
}

/**
 * Removes one or more assignees from an issue.
 * @summary Remove assignees from an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/assignees`
 * @docs https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue
 */
export function deleteRemoveAssignees(options: {
  pathParams: API.GithubV3Json.Issues.DeleteRemoveAssignees.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteRemoveAssignees.Headers;
  body?: API.GithubV3Json.Issues.DeleteRemoveAssignees.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.DeleteRemoveAssignees.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/assignees`,
    options,
  );
}

/**
 * Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
 * @summary Add assignees to an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/assignees`
 * @docs https://docs.github.com/rest/reference/issues#add-assignees-to-an-issue
 */
export function postAddAssignees(options: {
  pathParams: API.GithubV3Json.Issues.PostAddAssignees.PathParams;
  headers?: API.GithubV3Json.Issues.PostAddAssignees.Headers;
  body?: API.GithubV3Json.Issues.PostAddAssignees.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PostAddAssignees.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/assignees`,
    options,
  );
}

/**
 * Issue Comments are ordered by ascending ID.
 * @summary List issue comments
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/comments`
 * @docs https://docs.github.com/rest/reference/issues#list-issue-comments
 */
export function getListComments(options: {
  pathParams: API.GithubV3Json.Issues.GetListComments.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListComments.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListComments.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListComments.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/comments`,
    options,
  );
}

/**
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create an issue comment
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/comments`
 * @docs https://docs.github.com/rest/reference/issues#create-an-issue-comment
 */
export function postCreateComment(options: {
  pathParams: API.GithubV3Json.Issues.PostCreateComment.PathParams;
  headers?: API.GithubV3Json.Issues.PostCreateComment.Headers;
  body: API.GithubV3Json.Issues.PostCreateComment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PostCreateComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/comments`,
    options,
  );
}

/**
 * List issue events
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/events`
 * @docs https://docs.github.com/rest/reference/issues#list-issue-events
 */
export function getListEvents(options: {
  pathParams: API.GithubV3Json.Issues.GetListEvents.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListEvents.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListEvents.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListEvents.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/events`,
    options,
  );
}

/**
 * Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
 * @summary Remove a label from an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}`
 * @docs https://docs.github.com/rest/reference/issues#remove-a-label-from-an-issue
 */
export function deleteRemoveLabel(options: {
  pathParams: API.GithubV3Json.Issues.DeleteRemoveLabel.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteRemoveLabel.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.DeleteRemoveLabel.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/labels/${options.pathParams.name}`,
    options,
  );
}

/**
 * Remove all labels from an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/labels`
 * @docs https://docs.github.com/rest/reference/issues#remove-all-labels-from-an-issue
 */
export function deleteRemoveAllLabels(options: {
  pathParams: API.GithubV3Json.Issues.DeleteRemoveAllLabels.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteRemoveAllLabels.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/labels`,
    options,
  );
}

/**
 * List labels for an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/labels`
 * @docs https://docs.github.com/rest/reference/issues#list-labels-for-an-issue
 */
export function getListLabelsOnIssue(options: {
  pathParams: API.GithubV3Json.Issues.GetListLabelsOnIssue.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListLabelsOnIssue.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListLabelsOnIssue.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListLabelsOnIssue.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/labels`,
    options,
  );
}

/**
 * Add labels to an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/labels`
 * @docs https://docs.github.com/rest/reference/issues#add-labels-to-an-issue
 */
export function postAddLabels(options: {
  pathParams: API.GithubV3Json.Issues.PostAddLabels.PathParams;
  headers?: API.GithubV3Json.Issues.PostAddLabels.Headers;
  body: API.GithubV3Json.Issues.PostAddLabels.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PostAddLabels.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/labels`,
    options,
  );
}

/**
 * Removes any previous labels and sets the new labels for an issue.
 * @summary Set labels for an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/labels`
 * @docs https://docs.github.com/rest/reference/issues#set-labels-for-an-issue
 */
export function putSetLabels(options: {
  pathParams: API.GithubV3Json.Issues.PutSetLabels.PathParams;
  headers?: API.GithubV3Json.Issues.PutSetLabels.Headers;
  body: API.GithubV3Json.Issues.PutSetLabels.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PutSetLabels.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/labels`,
    options,
  );
}

/**
 * Users with push access can unlock an issue's conversation.
 * @summary Unlock an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/lock`
 * @docs https://docs.github.com/rest/reference/issues#unlock-an-issue
 */
export function deleteUnlock(options: {
  pathParams: API.GithubV3Json.Issues.DeleteUnlock.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteUnlock.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/lock`,
    options,
  );
}

/**
 * Users with push access can lock an issue or pull request's conversation.
 *
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @summary Lock an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/lock`
 * @docs https://docs.github.com/rest/reference/issues#lock-an-issue
 */
export function putLock(options: {
  pathParams: API.GithubV3Json.Issues.PutLock.PathParams;
  headers?: API.GithubV3Json.Issues.PutLock.Headers;
  body?: API.GithubV3Json.Issues.PutLock.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/lock`,
    options,
  );
}

/**
 * List timeline events for an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/timeline`
 * @docs https://docs.github.com/rest/reference/issues#list-timeline-events-for-an-issue
 */
export function getListEventsForTimeline(options: {
  pathParams: API.GithubV3Json.Issues.GetListEventsForTimeline.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListEventsForTimeline.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListEventsForTimeline.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListEventsForTimeline.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/timeline`,
    options,
  );
}

/**
 * The API returns a [`301 Moved Permanently` status](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
 * [transferred](https://docs.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
 * the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
 * returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
 * access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
 * to the [`issues`](https://docs.github.com/webhooks/event-payloads/#issues) webhook.
 *
 * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 * @summary Get an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}`
 * @docs https://docs.github.com/rest/reference/issues#get-an-issue
 */
export function getIssues(options: {
  pathParams: API.GithubV3Json.Issues.GetIssues.PathParams;
  headers?: API.GithubV3Json.Issues.GetIssues.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetIssues.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}`,
    options,
  );
}

/**
 * Issue owners and users with push access can edit an issue.
 * @summary Update an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}`
 * @docs https://docs.github.com/rest/reference/issues#update-an-issue
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Issues.PatchUpdate.PathParams;
  headers?: API.GithubV3Json.Issues.PatchUpdate.Headers;
  body?: API.GithubV3Json.Issues.PatchUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PatchUpdate.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}`,
    options,
  );
}

/**
 * List issues in a repository. Only open issues will be listed.
 *
 * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 * @summary List repository issues
 * @path `/repos/{owner}/{repo}/issues`
 * @docs https://docs.github.com/rest/reference/issues#list-repository-issues
 */
export function getListForRepo(options: {
  pathParams: API.GithubV3Json.Issues.GetListForRepo.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListForRepo.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues`,
    options,
  );
}

/**
 * Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create an issue
 * @path `/repos/{owner}/{repo}/issues`
 * @docs https://docs.github.com/rest/reference/issues#create-an-issue
 */
export function postCreate(options: {
  pathParams: API.GithubV3Json.Issues.PostCreate.PathParams;
  headers?: API.GithubV3Json.Issues.PostCreate.Headers;
  body: API.GithubV3Json.Issues.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PostCreate.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues`,
    options,
  );
}

/**
 * Delete a label
 * @path `/repos/{owner}/{repo}/labels/{name}`
 * @docs https://docs.github.com/rest/reference/issues#delete-a-label
 */
export function deleteLabel(options: {
  pathParams: API.GithubV3Json.Issues.DeleteLabel.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteLabel.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/labels/${options.pathParams.name}`,
    options,
  );
}

/**
 * Get a label
 * @path `/repos/{owner}/{repo}/labels/{name}`
 * @docs https://docs.github.com/rest/reference/issues#get-a-label
 */
export function getLabel(options: {
  pathParams: API.GithubV3Json.Issues.GetLabel.PathParams;
  headers?: API.GithubV3Json.Issues.GetLabel.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetLabel.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/labels/${options.pathParams.name}`,
    options,
  );
}

/**
 * Update a label
 * @path `/repos/{owner}/{repo}/labels/{name}`
 * @docs https://docs.github.com/rest/reference/issues#update-a-label
 */
export function patchUpdateLabel(options: {
  pathParams: API.GithubV3Json.Issues.PatchUpdateLabel.PathParams;
  headers?: API.GithubV3Json.Issues.PatchUpdateLabel.Headers;
  body?: API.GithubV3Json.Issues.PatchUpdateLabel.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PatchUpdateLabel.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/labels/${options.pathParams.name}`,
    options,
  );
}

/**
 * List labels for a repository
 * @path `/repos/{owner}/{repo}/labels`
 * @docs https://docs.github.com/rest/reference/issues#list-labels-for-a-repository
 */
export function getListLabelsForRepo(options: {
  pathParams: API.GithubV3Json.Issues.GetListLabelsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListLabelsForRepo.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListLabelsForRepo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListLabelsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/labels`,
    options,
  );
}

/**
 * Create a label
 * @path `/repos/{owner}/{repo}/labels`
 * @docs https://docs.github.com/rest/reference/issues#create-a-label
 */
export function postCreateLabel(options: {
  pathParams: API.GithubV3Json.Issues.PostCreateLabel.PathParams;
  headers?: API.GithubV3Json.Issues.PostCreateLabel.Headers;
  body: API.GithubV3Json.Issues.PostCreateLabel.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PostCreateLabel.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/labels`,
    options,
  );
}

/**
 * List labels for issues in a milestone
 * @path `/repos/{owner}/{repo}/milestones/{milestone_number}/labels`
 * @docs https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone
 */
export function getListLabelsForMilestone(options: {
  pathParams: API.GithubV3Json.Issues.GetListLabelsForMilestone.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListLabelsForMilestone.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListLabelsForMilestone.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListLabelsForMilestone.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/milestones/${options.pathParams.milestone_number}/labels`,
    options,
  );
}

/**
 * Delete a milestone
 * @path `/repos/{owner}/{repo}/milestones/{milestone_number}`
 * @docs https://docs.github.com/rest/reference/issues#delete-a-milestone
 */
export function deleteMilestone(options: {
  pathParams: API.GithubV3Json.Issues.DeleteMilestone.PathParams;
  headers?: API.GithubV3Json.Issues.DeleteMilestone.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/milestones/${options.pathParams.milestone_number}`,
    options,
  );
}

/**
 * Get a milestone
 * @path `/repos/{owner}/{repo}/milestones/{milestone_number}`
 * @docs https://docs.github.com/rest/reference/issues#get-a-milestone
 */
export function getMilestone(options: {
  pathParams: API.GithubV3Json.Issues.GetMilestone.PathParams;
  headers?: API.GithubV3Json.Issues.GetMilestone.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetMilestone.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/milestones/${options.pathParams.milestone_number}`,
    options,
  );
}

/**
 * Update a milestone
 * @path `/repos/{owner}/{repo}/milestones/{milestone_number}`
 * @docs https://docs.github.com/rest/reference/issues#update-a-milestone
 */
export function patchUpdateMilestone(options: {
  pathParams: API.GithubV3Json.Issues.PatchUpdateMilestone.PathParams;
  headers?: API.GithubV3Json.Issues.PatchUpdateMilestone.Headers;
  body?: API.GithubV3Json.Issues.PatchUpdateMilestone.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PatchUpdateMilestone.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/milestones/${options.pathParams.milestone_number}`,
    options,
  );
}

/**
 * List milestones
 * @path `/repos/{owner}/{repo}/milestones`
 * @docs https://docs.github.com/rest/reference/issues#list-milestones
 */
export function getListMilestones(options: {
  pathParams: API.GithubV3Json.Issues.GetListMilestones.PathParams;
  queryParams?: API.GithubV3Json.Issues.GetListMilestones.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListMilestones.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListMilestones.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/milestones`,
    options,
  );
}

/**
 * Create a milestone
 * @path `/repos/{owner}/{repo}/milestones`
 * @docs https://docs.github.com/rest/reference/issues#create-a-milestone
 */
export function postCreateMilestone(options: {
  pathParams: API.GithubV3Json.Issues.PostCreateMilestone.PathParams;
  headers?: API.GithubV3Json.Issues.PostCreateMilestone.Headers;
  body: API.GithubV3Json.Issues.PostCreateMilestone.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.PostCreateMilestone.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/milestones`,
    options,
  );
}

/**
 * List issues across owned and member repositories assigned to the authenticated user.
 *
 * **Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
 * @summary List user account issues assigned to the authenticated user
 * @path `/user/issues`
 * @docs https://docs.github.com/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user
 */
export function getListForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Issues.GetListForAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Issues.GetListForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Issues.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/issues",
    options || {},
  );
}
