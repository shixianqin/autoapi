import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
 * @summary Delete a discussion comment
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`
 * @docs https://docs.github.com/rest/reference/teams#delete-a-discussion-comment
 */
export function deleteDiscussionCommentInOrg(options: {
  pathParams: API.GithubV3Json.Teams.DeleteDiscussionCommentInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteDiscussionCommentInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}`,
    options,
  );
}

/**
 * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
 * @summary Get a discussion comment
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`
 * @docs https://docs.github.com/rest/reference/teams#get-a-discussion-comment
 */
export function getDiscussionCommentInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetDiscussionCommentInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.GetDiscussionCommentInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetDiscussionCommentInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}`,
    options,
  );
}

/**
 * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
 * @summary Update a discussion comment
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}`
 * @docs https://docs.github.com/rest/reference/teams#update-a-discussion-comment
 */
export function patchUpdateDiscussionCommentInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PatchUpdateDiscussionCommentInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PatchUpdateDiscussionCommentInOrg.Headers;
  body: API.GithubV3Json.Teams.PatchUpdateDiscussionCommentInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PatchUpdateDiscussionCommentInOrg.Response>(
    "patch",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}`,
    options,
  );
}

/**
 * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
 * @summary List discussion comments
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`
 * @docs https://docs.github.com/rest/reference/teams#list-discussion-comments
 */
export function getListDiscussionCommentsInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListDiscussionCommentsInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListDiscussionCommentsInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListDiscussionCommentsInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListDiscussionCommentsInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments`,
    options,
  );
}

/**
 * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
 * @summary Create a discussion comment
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments`
 * @docs https://docs.github.com/rest/reference/teams#create-a-discussion-comment
 */
export function postCreateDiscussionCommentInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PostCreateDiscussionCommentInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PostCreateDiscussionCommentInOrg.Headers;
  body: API.GithubV3Json.Teams.PostCreateDiscussionCommentInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PostCreateDiscussionCommentInOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}/comments`,
    options,
  );
}

/**
 * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
 * @summary Delete a discussion
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`
 * @docs https://docs.github.com/rest/reference/teams#delete-a-discussion
 */
export function deleteDiscussionInOrg(options: {
  pathParams: API.GithubV3Json.Teams.DeleteDiscussionInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteDiscussionInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}`,
    options,
  );
}

/**
 * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
 * @summary Get a discussion
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`
 * @docs https://docs.github.com/rest/reference/teams#get-a-discussion
 */
export function getDiscussionInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetDiscussionInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.GetDiscussionInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetDiscussionInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}`,
    options,
  );
}

/**
 * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
 * @summary Update a discussion
 * @path `/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}`
 * @docs https://docs.github.com/rest/reference/teams#update-a-discussion
 */
export function patchUpdateDiscussionInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PatchUpdateDiscussionInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PatchUpdateDiscussionInOrg.Headers;
  body?: API.GithubV3Json.Teams.PatchUpdateDiscussionInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PatchUpdateDiscussionInOrg.Response>(
    "patch",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions/${options.pathParams.discussion_number}`,
    options,
  );
}

/**
 * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
 * @summary List discussions
 * @path `/orgs/{org}/teams/{team_slug}/discussions`
 * @docs https://docs.github.com/rest/reference/teams#list-discussions
 */
export function getListDiscussionsInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListDiscussionsInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListDiscussionsInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListDiscussionsInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListDiscussionsInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions`,
    options,
  );
}

/**
 * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
 * @summary Create a discussion
 * @path `/orgs/{org}/teams/{team_slug}/discussions`
 * @docs https://docs.github.com/rest/reference/teams#create-a-discussion
 */
export function postCreateDiscussionInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PostCreateDiscussionInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PostCreateDiscussionInOrg.Headers;
  body: API.GithubV3Json.Teams.PostCreateDiscussionInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PostCreateDiscussionInOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/discussions`,
    options,
  );
}

/**
 * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.
 * @summary List pending team invitations
 * @path `/orgs/{org}/teams/{team_slug}/invitations`
 * @docs https://docs.github.com/rest/reference/teams#list-pending-team-invitations
 */
export function getListPendingInvitationsInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListPendingInvitationsInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListPendingInvitationsInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListPendingInvitationsInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListPendingInvitationsInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/invitations`,
    options,
  );
}

/**
 * Team members will include the members of child teams.
 *
 * To list members in a team, the team must be visible to the authenticated user.
 * @summary List team members
 * @path `/orgs/{org}/teams/{team_slug}/members`
 * @docs https://docs.github.com/rest/reference/teams#list-team-members
 */
export function getListMembersInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListMembersInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListMembersInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListMembersInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListMembersInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/members`,
    options,
  );
}

/**
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 * @summary Remove team membership for a user
 * @path `/orgs/{org}/teams/{team_slug}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user
 */
export function deleteRemoveMembershipForUserInOrg(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveMembershipForUserInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveMembershipForUserInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * Team members will include the members of child teams.
 *
 * To get a user's membership with a team, the team must be visible to the authenticated user.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 *
 * **Note:**
 * The response contains the `state` of the membership and the member's `role`.
 *
 * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
 * @summary Get team membership for a user
 * @path `/orgs/{org}/teams/{team_slug}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user
 */
export function getMembershipForUserInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetMembershipForUserInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.GetMembershipForUserInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetMembershipForUserInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
 *
 * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 * @summary Add or update team membership for a user
 * @path `/orgs/{org}/teams/{team_slug}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user
 */
export function putAddOrUpdateMembershipForUserInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserInOrg.Headers;
  body?: API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserInOrg.Response>(
    "put",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
 * @summary Remove a project from a team
 * @path `/orgs/{org}/teams/{team_slug}/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team
 */
export function deleteRemoveProjectInOrg(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveProjectInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveProjectInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
 * @summary Check team permissions for a project
 * @path `/orgs/{org}/teams/{team_slug}/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project
 */
export function getCheckPermissionsForProjectInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetCheckPermissionsForProjectInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.GetCheckPermissionsForProjectInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetCheckPermissionsForProjectInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
 * @summary Add or update team project permissions
 * @path `/orgs/{org}/teams/{team_slug}/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions
 */
export function putAddOrUpdateProjectPermissionsInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PutAddOrUpdateProjectPermissionsInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddOrUpdateProjectPermissionsInOrg.Headers;
  body?: API.GithubV3Json.Teams.PutAddOrUpdateProjectPermissionsInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * Lists the organization projects for a team.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
 * @summary List team projects
 * @path `/orgs/{org}/teams/{team_slug}/projects`
 * @docs https://docs.github.com/rest/reference/teams#list-team-projects
 */
export function getListProjectsInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListProjectsInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListProjectsInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListProjectsInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListProjectsInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/projects`,
    options,
  );
}

/**
 * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
 * @summary Remove a repository from a team
 * @path `/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team
 */
export function deleteRemoveRepoInOrg(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveRepoInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveRepoInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
 *
 * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
 *
 * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
 * @summary Check team permissions for a repository
 * @path `/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository
 */
export function getCheckPermissionsForRepoInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetCheckPermissionsForRepoInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.GetCheckPermissionsForRepoInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetCheckPermissionsForRepoInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
 *
 * For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
 * @summary Add or update team repository permissions
 * @path `/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions
 */
export function putAddOrUpdateRepoPermissionsInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PutAddOrUpdateRepoPermissionsInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddOrUpdateRepoPermissionsInOrg.Headers;
  body?: API.GithubV3Json.Teams.PutAddOrUpdateRepoPermissionsInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * Lists a team's repositories visible to the authenticated user.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
 * @summary List team repositories
 * @path `/orgs/{org}/teams/{team_slug}/repos`
 * @docs https://docs.github.com/rest/reference/teams#list-team-repositories
 */
export function getListReposInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListReposInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListReposInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListReposInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListReposInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/repos`,
    options,
  );
}

/**
 * Lists the child teams of the team specified by `{team_slug}`.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
 * @summary List child teams
 * @path `/orgs/{org}/teams/{team_slug}/teams`
 * @docs https://docs.github.com/rest/reference/teams#list-child-teams
 */
export function getListChildInOrg(options: {
  pathParams: API.GithubV3Json.Teams.GetListChildInOrg.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListChildInOrg.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListChildInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListChildInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}/teams`,
    options,
  );
}

/**
 * To delete a team, the authenticated user must be an organization owner or team maintainer.
 *
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
 * @summary Delete a team
 * @path `/orgs/{org}/teams/{team_slug}`
 * @docs https://docs.github.com/rest/reference/teams#delete-a-team
 */
export function deleteInOrg(options: {
  pathParams: API.GithubV3Json.Teams.DeleteInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteInOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}`,
    options,
  );
}

/**
 * Gets a team using the team's `slug`. To create the `slug`, GitHub replaces special characters in the `name` string, changes all words to lowercase, and replaces spaces with a `-` separator. For example, `"My TEam Näme"` would become `my-team-name`.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
 * @summary Get a team by name
 * @path `/orgs/{org}/teams/{team_slug}`
 * @docs https://docs.github.com/rest/reference/teams#get-a-team-by-name
 */
export function getByName(options: {
  pathParams: API.GithubV3Json.Teams.GetByName.PathParams;
  headers?: API.GithubV3Json.Teams.GetByName.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetByName.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}`,
    options,
  );
}

/**
 * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
 *
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
 * @summary Update a team
 * @path `/orgs/{org}/teams/{team_slug}`
 * @docs https://docs.github.com/rest/reference/teams#update-a-team
 */
export function patchUpdateInOrg(options: {
  pathParams: API.GithubV3Json.Teams.PatchUpdateInOrg.PathParams;
  headers?: API.GithubV3Json.Teams.PatchUpdateInOrg.Headers;
  body?: API.GithubV3Json.Teams.PatchUpdateInOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PatchUpdateInOrg.Response>(
    "patch",
    `/orgs/${options.pathParams.org}/teams/${options.pathParams.team_slug}`,
    options,
  );
}

/**
 * Lists all teams in an organization that are visible to the authenticated user.
 * @summary List teams
 * @path `/orgs/{org}/teams`
 * @docs https://docs.github.com/rest/reference/teams#list-teams
 */
export function getList(options: {
  pathParams: API.GithubV3Json.Teams.GetList.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetList.QueryParams;
  headers?: API.GithubV3Json.Teams.GetList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetList.Response>(
    "get",
    `/orgs/${options.pathParams.org}/teams`,
    options,
  );
}

/**
 * To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/articles/setting-team-creation-permissions-in-your-organization)."
 *
 * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/about-teams)".
 * @summary Create a team
 * @path `/orgs/{org}/teams`
 * @docs https://docs.github.com/rest/reference/teams#create-a-team
 */
export function postCreate(options: {
  pathParams: API.GithubV3Json.Teams.PostCreate.PathParams;
  headers?: API.GithubV3Json.Teams.PostCreate.Headers;
  body: API.GithubV3Json.Teams.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PostCreate.Response>(
    "post",
    `/orgs/${options.pathParams.org}/teams`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/rest/reference/teams#delete-a-discussion-comment) endpoint.
 *
 * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Delete a discussion comment (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}`
 * @docs https://docs.github.com/rest/reference/teams#delete-a-discussion-comment-legacy
 * @deprecated
 */
export function deleteDiscussionCommentLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteDiscussionCommentLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteDiscussionCommentLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/rest/reference/teams#get-a-discussion-comment) endpoint.
 *
 * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Get a discussion comment (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}`
 * @docs https://docs.github.com/rest/reference/teams#get-a-discussion-comment-legacy
 * @deprecated
 */
export function getDiscussionCommentLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetDiscussionCommentLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetDiscussionCommentLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetDiscussionCommentLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/rest/reference/teams#update-a-discussion-comment) endpoint.
 *
 * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Update a discussion comment (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}`
 * @docs https://docs.github.com/rest/reference/teams#update-a-discussion-comment-legacy
 * @deprecated
 */
export function patchUpdateDiscussionCommentLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PatchUpdateDiscussionCommentLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PatchUpdateDiscussionCommentLegacy.Headers;
  body: API.GithubV3Json.Teams.PatchUpdateDiscussionCommentLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PatchUpdateDiscussionCommentLegacy.Response>(
    "patch",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments/${options.pathParams.comment_number}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/rest/reference/teams#list-discussion-comments) endpoint.
 *
 * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary List discussion comments (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments`
 * @docs https://docs.github.com/rest/reference/teams#list-discussion-comments-legacy
 * @deprecated
 */
export function getListDiscussionCommentsLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListDiscussionCommentsLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListDiscussionCommentsLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListDiscussionCommentsLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListDiscussionCommentsLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/rest/reference/teams#create-a-discussion-comment) endpoint.
 *
 * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create a discussion comment (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}/comments`
 * @docs https://docs.github.com/rest/reference/teams#create-a-discussion-comment-legacy
 * @deprecated
 */
export function postCreateDiscussionCommentLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PostCreateDiscussionCommentLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PostCreateDiscussionCommentLegacy.Headers;
  body: API.GithubV3Json.Teams.PostCreateDiscussionCommentLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PostCreateDiscussionCommentLegacy.Response>(
    "post",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}/comments`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/rest/reference/teams#delete-a-discussion) endpoint.
 *
 * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Delete a discussion (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}`
 * @docs https://docs.github.com/rest/reference/teams#delete-a-discussion-legacy
 * @deprecated
 */
export function deleteDiscussionLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteDiscussionLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteDiscussionLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/rest/reference/teams#get-a-discussion) endpoint.
 *
 * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Get a discussion (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}`
 * @docs https://docs.github.com/rest/reference/teams#get-a-discussion-legacy
 * @deprecated
 */
export function getDiscussionLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetDiscussionLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetDiscussionLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetDiscussionLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/rest/reference/teams#update-a-discussion) endpoint.
 *
 * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Update a discussion (Legacy)
 * @path `/teams/{team_id}/discussions/{discussion_number}`
 * @docs https://docs.github.com/rest/reference/teams#update-a-discussion-legacy
 * @deprecated
 */
export function patchUpdateDiscussionLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PatchUpdateDiscussionLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PatchUpdateDiscussionLegacy.Headers;
  body?: API.GithubV3Json.Teams.PatchUpdateDiscussionLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PatchUpdateDiscussionLegacy.Response>(
    "patch",
    `/teams/${options.pathParams.team_id}/discussions/${options.pathParams.discussion_number}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/rest/reference/teams#list-discussions) endpoint.
 *
 * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary List discussions (Legacy)
 * @path `/teams/{team_id}/discussions`
 * @docs https://docs.github.com/rest/reference/teams#list-discussions-legacy
 * @deprecated
 */
export function getListDiscussionsLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListDiscussionsLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListDiscussionsLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListDiscussionsLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListDiscussionsLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/discussions`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/rest/reference/teams#create-a-discussion) endpoint.
 *
 * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create a discussion (Legacy)
 * @path `/teams/{team_id}/discussions`
 * @docs https://docs.github.com/rest/reference/teams#create-a-discussion-legacy
 * @deprecated
 */
export function postCreateDiscussionLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PostCreateDiscussionLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PostCreateDiscussionLegacy.Headers;
  body: API.GithubV3Json.Teams.PostCreateDiscussionLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PostCreateDiscussionLegacy.Response>(
    "post",
    `/teams/${options.pathParams.team_id}/discussions`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://docs.github.com/rest/reference/teams#list-pending-team-invitations) endpoint.
 *
 * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
 * @summary List pending team invitations (Legacy)
 * @path `/teams/{team_id}/invitations`
 * @docs https://docs.github.com/rest/reference/teams#list-pending-team-invitations-legacy
 * @deprecated
 */
export function getListPendingInvitationsLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListPendingInvitationsLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListPendingInvitationsLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListPendingInvitationsLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListPendingInvitationsLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/invitations`,
    options,
  );
}

/**
 * The "Remove team member" endpoint (described below) is deprecated.
 *
 * We recommend using the [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * @summary Remove team member (Legacy)
 * @path `/teams/{team_id}/members/{username}`
 * @docs https://docs.github.com/rest/reference/teams#remove-team-member-legacy
 * @deprecated
 */
export function deleteRemoveMemberLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveMemberLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveMemberLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}/members/${options.pathParams.username}`,
    options,
  );
}

/**
 * The "Get team member" endpoint (described below) is deprecated.
 *
 * We recommend using the [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
 *
 * To list members in a team, the team must be visible to the authenticated user.
 * @summary Get team member (Legacy)
 * @path `/teams/{team_id}/members/{username}`
 * @docs https://docs.github.com/rest/reference/teams#get-team-member-legacy
 * @deprecated
 */
export function getMemberLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetMemberLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetMemberLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/teams/${options.pathParams.team_id}/members/${options.pathParams.username}`,
    options,
  );
}

/**
 * The "Add team member" endpoint (described below) is deprecated.
 *
 * We recommend using the [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @summary Add team member (Legacy)
 * @path `/teams/{team_id}/members/{username}`
 * @docs https://docs.github.com/rest/reference/teams#add-team-member-legacy
 * @deprecated
 */
export function putAddMemberLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PutAddMemberLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddMemberLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/teams/${options.pathParams.team_id}/members/${options.pathParams.username}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/rest/reference/teams#list-team-members) endpoint.
 *
 * Team members will include the members of child teams.
 * @summary List team members (Legacy)
 * @path `/teams/{team_id}/members`
 * @docs https://docs.github.com/rest/reference/teams#list-team-members-legacy
 * @deprecated
 */
export function getListMembersLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListMembersLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListMembersLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListMembersLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListMembersLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/members`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * @summary Remove team membership for a user (Legacy)
 * @path `/teams/{team_id}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user-legacy
 * @deprecated
 */
export function deleteRemoveMembershipForUserLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveMembershipForUserLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveMembershipForUserLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint.
 *
 * Team members will include the members of child teams.
 *
 * To get a user's membership with a team, the team must be visible to the authenticated user.
 *
 * **Note:**
 * The response contains the `state` of the membership and the member's `role`.
 *
 * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
 * @summary Get team membership for a user (Legacy)
 * @path `/teams/{team_id}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user-legacy
 * @deprecated
 */
export function getMembershipForUserLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetMembershipForUserLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetMembershipForUserLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetMembershipForUserLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
 *
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
 *
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 *
 * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
 *
 * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
 * @summary Add or update team membership for a user (Legacy)
 * @path `/teams/{team_id}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy
 * @deprecated
 */
export function putAddOrUpdateMembershipForUserLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserLegacy.Headers;
  body?: API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PutAddOrUpdateMembershipForUserLegacy.Response>(
    "put",
    `/teams/${options.pathParams.team_id}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team) endpoint.
 *
 * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
 * @summary Remove a project from a team (Legacy)
 * @path `/teams/{team_id}/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/teams/#remove-a-project-from-a-team-legacy
 * @deprecated
 */
export function deleteRemoveProjectLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveProjectLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveProjectLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
 *
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 * @summary Check team permissions for a project (Legacy)
 * @path `/teams/{team_id}/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-project-legacy
 * @deprecated
 */
export function getCheckPermissionsForProjectLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetCheckPermissionsForProjectLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetCheckPermissionsForProjectLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetCheckPermissionsForProjectLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
 *
 * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 * @summary Add or update team project permissions (Legacy)
 * @path `/teams/{team_id}/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/teams/#add-or-update-team-project-permissions-legacy
 * @deprecated
 */
export function putAddOrUpdateProjectPermissionsLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PutAddOrUpdateProjectPermissionsLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddOrUpdateProjectPermissionsLegacy.Headers;
  body?: API.GithubV3Json.Teams.PutAddOrUpdateProjectPermissionsLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/teams/${options.pathParams.team_id}/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/rest/reference/teams#list-team-projects) endpoint.
 *
 * Lists the organization projects for a team.
 * @summary List team projects (Legacy)
 * @path `/teams/{team_id}/projects`
 * @docs https://docs.github.com/rest/reference/teams/#list-team-projects-legacy
 * @deprecated
 */
export function getListProjectsLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListProjectsLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListProjectsLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListProjectsLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListProjectsLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/projects`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
 *
 * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
 * @summary Remove a repository from a team (Legacy)
 * @path `/teams/{team_id}/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team-legacy
 * @deprecated
 */
export function deleteRemoveRepoLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteRemoveRepoLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteRemoveRepoLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * **Note**: Repositories inherited through a parent team will also be checked.
 *
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
 *
 * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
 * @summary Check team permissions for a repository (Legacy)
 * @path `/teams/{team_id}/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository-legacy
 * @deprecated
 */
export function getCheckPermissionsForRepoLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetCheckPermissionsForRepoLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetCheckPermissionsForRepoLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetCheckPermissionsForRepoLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.
 *
 * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
 *
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @summary Add or update team repository permissions (Legacy)
 * @path `/teams/{team_id}/repos/{owner}/{repo}`
 * @docs https://docs.github.com/rest/reference/teams#add-or-update-team-repository-permissions-legacy
 * @deprecated
 */
export function putAddOrUpdateRepoPermissionsLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PutAddOrUpdateRepoPermissionsLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PutAddOrUpdateRepoPermissionsLegacy.Headers;
  body?: API.GithubV3Json.Teams.PutAddOrUpdateRepoPermissionsLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/teams/${options.pathParams.team_id}/repos/${options.pathParams.owner}/${options.pathParams.repo}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/rest/reference/teams#list-team-repositories) endpoint.
 * @summary List team repositories (Legacy)
 * @path `/teams/{team_id}/repos`
 * @docs https://docs.github.com/rest/reference/teams/#list-team-repositories-legacy
 * @deprecated
 */
export function getListReposLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListReposLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListReposLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListReposLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListReposLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/repos`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/rest/reference/teams#list-child-teams) endpoint.
 * @summary List child teams (Legacy)
 * @path `/teams/{team_id}/teams`
 * @docs https://docs.github.com/rest/reference/teams/#list-child-teams-legacy
 * @deprecated
 */
export function getListChildLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetListChildLegacy.PathParams;
  queryParams?: API.GithubV3Json.Teams.GetListChildLegacy.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListChildLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListChildLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}/teams`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/reference/teams#delete-a-team) endpoint.
 *
 * To delete a team, the authenticated user must be an organization owner or team maintainer.
 *
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 * @summary Delete a team (Legacy)
 * @path `/teams/{team_id}`
 * @docs https://docs.github.com/rest/reference/teams/#delete-a-team-legacy
 * @deprecated
 */
export function deleteLegacy(options: {
  pathParams: API.GithubV3Json.Teams.DeleteLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.DeleteLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/teams/${options.pathParams.team_id}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/reference/teams#get-a-team-by-name) endpoint.
 * @summary Get a team (Legacy)
 * @path `/teams/{team_id}`
 * @docs https://docs.github.com/rest/reference/teams/#get-a-team-legacy
 * @deprecated
 */
export function getLegacy(options: {
  pathParams: API.GithubV3Json.Teams.GetLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.GetLegacy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetLegacy.Response>(
    "get",
    `/teams/${options.pathParams.team_id}`,
    options,
  );
}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/reference/teams#update-a-team) endpoint.
 *
 * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
 *
 * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
 * @summary Update a team (Legacy)
 * @path `/teams/{team_id}`
 * @docs https://docs.github.com/rest/reference/teams/#update-a-team-legacy
 * @deprecated
 */
export function patchUpdateLegacy(options: {
  pathParams: API.GithubV3Json.Teams.PatchUpdateLegacy.PathParams;
  headers?: API.GithubV3Json.Teams.PatchUpdateLegacy.Headers;
  body: API.GithubV3Json.Teams.PatchUpdateLegacy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.PatchUpdateLegacy.Response>(
    "patch",
    `/teams/${options.pathParams.team_id}`,
    options,
  );
}

/**
 * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/apps/building-oauth-apps/).
 * @summary List teams for the authenticated user
 * @path `/user/teams`
 * @docs https://docs.github.com/rest/reference/teams#list-teams-for-the-authenticated-user
 */
export function getListForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Teams.GetListForAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Teams.GetListForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Teams.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/teams",
    options || {},
  );
}
