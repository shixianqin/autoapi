import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
 *
 * Delete a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Delete team discussion comment reaction
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions#delete-team-discussion-comment-reaction
 */
export function deleteForTeamDiscussionComment(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForTeamDiscussionComment.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
 * @summary List reactions for a team discussion comment
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion-comment
 */
export function getListForTeamDiscussionCommentInOrg(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForTeamDiscussionCommentInOrg.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForTeamDiscussionCommentInOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForTeamDiscussionCommentInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}/reactions`,
    options,
  );
}

/**
 * Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
 * @summary Create reaction for a team discussion comment
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion-comment
 */
export function postCreateForTeamDiscussionCommentInOrg(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionCommentInOrg.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionCommentInOrg.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForTeamDiscussionCommentInOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}/reactions`,
    options,
  );
}

/**
 * **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
 *
 * Delete a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Delete team discussion reaction
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions#delete-team-discussion-reaction
 */
export function deleteForTeamDiscussion(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForTeamDiscussion.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
 * @summary List reactions for a team discussion
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion
 */
export function getListForTeamDiscussionInOrg(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForTeamDiscussionInOrg.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForTeamDiscussionInOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForTeamDiscussionInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/reactions`,
    options,
  );
}

/**
 * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
 * @summary Create reaction for a team discussion
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion
 */
export function postCreateForTeamDiscussionInOrg(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionInOrg.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionInOrg.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForTeamDiscussionInOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/reactions`,
    options,
  );
}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
 *
 * Delete a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
 * @summary Delete a commit comment reaction
 * @path `/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions#delete-a-commit-comment-reaction
 */
export function deleteForCommitComment(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForCommitComment.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments/${options.pathParams.comment_id}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
 * @summary List reactions for a commit comment
 * @path `/repos/{owner}/{repo}/comments/{comment_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#list-reactions-for-a-commit-comment
 */
export function getListForCommitComment(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForCommitComment.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForCommitComment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForCommitComment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments/${options.pathParams.comment_id}/reactions`,
    options,
  );
}

/**
 * Create a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
 * @summary Create reaction for a commit comment
 * @path `/repos/{owner}/{repo}/comments/{comment_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#create-reaction-for-a-commit-comment
 */
export function postCreateForCommitComment(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForCommitComment.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForCommitComment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForCommitComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/comments/${options.pathParams.comment_id}/reactions`,
    options,
  );
}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
 *
 * Delete a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
 * @summary Delete an issue comment reaction
 * @path `/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions#delete-an-issue-comment-reaction
 */
export function deleteForIssueComment(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForIssueComment.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments/${options.pathParams.comment_id}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
 * @summary List reactions for an issue comment
 * @path `/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue-comment
 */
export function getListForIssueComment(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForIssueComment.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForIssueComment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForIssueComment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments/${options.pathParams.comment_id}/reactions`,
    options,
  );
}

/**
 * Create a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
 * @summary Create reaction for an issue comment
 * @path `/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue-comment
 */
export function postCreateForIssueComment(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForIssueComment.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForIssueComment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForIssueComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/comments/${options.pathParams.comment_id}/reactions`,
    options,
  );
}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
 *
 * Delete a reaction to an [issue](https://docs.github.com/rest/reference/issues/).
 * @summary Delete an issue reaction
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions#delete-an-issue-reaction
 */
export function deleteForIssue(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForIssue.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to an [issue](https://docs.github.com/rest/reference/issues).
 * @summary List reactions for an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue
 */
export function getListForIssue(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForIssue.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForIssue.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForIssue.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/reactions`,
    options,
  );
}

/**
 * Create a reaction to an [issue](https://docs.github.com/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
 * @summary Create reaction for an issue
 * @path `/repos/{owner}/{repo}/issues/{issue_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue
 */
export function postCreateForIssue(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForIssue.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForIssue.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForIssue.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/issues/${options.pathParams.issue_number}/reactions`,
    options,
  );
}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
 *
 * Delete a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
 * @summary Delete a pull request comment reaction
 * @path `/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions#delete-a-pull-request-comment-reaction
 */
export function deleteForPullRequestComment(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForPullRequestComment.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments/${options.pathParams.comment_id}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
 * @summary List reactions for a pull request review comment
 * @path `/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment
 */
export function getListForPullRequestReviewComment(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForPullRequestReviewComment.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForPullRequestReviewComment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForPullRequestReviewComment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments/${options.pathParams.comment_id}/reactions`,
    options,
  );
}

/**
 * Create a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
 * @summary Create reaction for a pull request review comment
 * @path `/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment
 */
export function postCreateForPullRequestReviewComment(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForPullRequestReviewComment.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForPullRequestReviewComment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForPullRequestReviewComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments/${options.pathParams.comment_id}/reactions`,
    options,
  );
}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.
 *
 * Delete a reaction to a [release](https://docs.github.com/rest/reference/repos#releases).
 * @summary Delete a release reaction
 * @path `/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}`
 * @docs https://docs.github.com/rest/reference/reactions/#delete-a-release-reaction
 */
export function deleteForRelease(options: {
  pathParams: API.GithubV3Json.Reactions.DeleteForRelease.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}/reactions/${options.pathParams.reaction_id}`,
    options,
  );
}

/**
 * List the reactions to a [release](https://docs.github.com/rest/reference/repos#releases).
 * @summary List reactions for a release
 * @path `/repos/{owner}/{repo}/releases/{release_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-release
 */
export function getListForRelease(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForRelease.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForRelease.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForRelease.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}/reactions`,
    options,
  );
}

/**
 * Create a reaction to a [release](https://docs.github.com/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.
 * @summary Create reaction for a release
 * @path `/repos/{owner}/{repo}/releases/{release_id}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-release
 */
export function postCreateForRelease(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForRelease.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForRelease.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForRelease.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/releases/${options.pathParams.release_id}/reactions`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
 *
 * List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary List reactions for a team discussion comment (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy
 * @deprecated
 */
export function getListForTeamDiscussionCommentLegacy(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForTeamDiscussionCommentLegacy.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForTeamDiscussionCommentLegacy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForTeamDiscussionCommentLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}/reactions`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
 *
 * Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
 * @summary Create reaction for a team discussion comment (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy
 * @deprecated
 */
export function postCreateForTeamDiscussionCommentLegacy(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionCommentLegacy.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionCommentLegacy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForTeamDiscussionCommentLegacy.Response>(
    "post",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}/reactions`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
 *
 * List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary List reactions for a team discussion (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy
 * @deprecated
 */
export function getListForTeamDiscussionLegacy(options: {
  pathParams: API.GithubV3Json.Reactions.GetListForTeamDiscussionLegacy.PathParams;
  queryParams?: API.GithubV3Json.Reactions.GetListForTeamDiscussionLegacy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.GetListForTeamDiscussionLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/reactions`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
 *
 * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
 * @summary Create reaction for a team discussion (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/reactions`
 * @docs https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy
 * @deprecated
 */
export function postCreateForTeamDiscussionLegacy(options: {
  pathParams: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionLegacy.PathParams;
  body: API.GithubV3Json.Reactions.PostCreateForTeamDiscussionLegacy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Reactions.PostCreateForTeamDiscussionLegacy.Response>(
    "post",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/reactions`,
    options,
  );
}
