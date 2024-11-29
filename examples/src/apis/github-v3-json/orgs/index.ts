import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists all organizations, in the order that they were created on GitHub.
 *
 * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
 * @summary List organizations
 * @path `/organizations`
 * @docs https://docs.github.com/rest/reference/orgs#list-organizations
 */
export function getList(options?: {
  queryParams?: API.GithubV3Json.Orgs.GetList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetList.Response>(
    "get",
    "/organizations",
    options || {},
  );
}

/**
 * Unblock a user from an organization
 * @path `/orgs/{org}/blocks/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#unblock-a-user-from-an-organization
 */
export function deleteUnblockUser(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteUnblockUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/blocks/${options.pathParams.username}`,
    options,
  );
}

/**
 * Check if a user is blocked by an organization
 * @path `/orgs/{org}/blocks/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization
 */
export function getCheckBlockedUser(options: {
  pathParams: API.GithubV3Json.Orgs.GetCheckBlockedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/orgs/${options.pathParams.org}/blocks/${options.pathParams.username}`,
    options,
  );
}

/**
 * Block a user from an organization
 * @path `/orgs/{org}/blocks/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#block-a-user-from-an-organization
 */
export function putBlockUser(options: {
  pathParams: API.GithubV3Json.Orgs.PutBlockUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/blocks/${options.pathParams.username}`,
    options,
  );
}

/**
 * List the users blocked by an organization.
 * @summary List users blocked by an organization
 * @path `/orgs/{org}/blocks`
 * @docs https://docs.github.com/rest/reference/orgs#list-users-blocked-by-an-organization
 */
export function getListBlockedUsers(options: {
  pathParams: API.GithubV3Json.Orgs.GetListBlockedUsers.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListBlockedUsers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListBlockedUsers.Response>(
    "get",
    `/orgs/${options.pathParams.org}/blocks`,
    options,
  );
}

/**
 * The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
 * @summary List failed organization invitations
 * @path `/orgs/{org}/failed_invitations`
 * @docs https://docs.github.com/rest/reference/orgs#list-failed-organization-invitations
 */
export function getListFailedInvitations(options: {
  pathParams: API.GithubV3Json.Orgs.GetListFailedInvitations.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListFailedInvitations.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListFailedInvitations.Response>(
    "get",
    `/orgs/${options.pathParams.org}/failed_invitations`,
    options,
  );
}

/**
 * Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."
 *
 * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.
 * @summary Get a webhook configuration for an organization
 * @path `/orgs/{org}/hooks/{hook_id}/config`
 * @docs https://docs.github.com/rest/reference/orgs#get-a-webhook-configuration-for-an-organization
 */
export function getWebhookConfigForOrg(options: {
  pathParams: API.GithubV3Json.Orgs.GetWebhookConfigForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetWebhookConfigForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}/config`,
    options,
  );
}

/**
 * Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."
 *
 * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
 * @summary Update a webhook configuration for an organization
 * @path `/orgs/{org}/hooks/{hook_id}/config`
 * @docs https://docs.github.com/rest/reference/orgs#update-a-webhook-configuration-for-an-organization
 */
export function patchUpdateWebhookConfigForOrg(options: {
  pathParams: API.GithubV3Json.Orgs.PatchUpdateWebhookConfigForOrg.PathParams;
  body?: API.GithubV3Json.Orgs.PatchUpdateWebhookConfigForOrg.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PatchUpdateWebhookConfigForOrg.Response>(
    "patch",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}/config`,
    options,
  );
}

/**
 * Redeliver a delivery for a webhook configured in an organization.
 * @summary Redeliver a delivery for an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts`
 * @docs https://docs.github.com/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook
 */
export function postRedeliverWebhookDelivery(options: {
  pathParams: API.GithubV3Json.Orgs.PostRedeliverWebhookDelivery.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PostRedeliverWebhookDelivery.Response>(
    "post",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}/deliveries/${options.pathParams.delivery_id}/attempts`,
    options,
  );
}

/**
 * Returns a delivery for a webhook configured in an organization.
 * @summary Get a webhook delivery for an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}`
 * @docs https://docs.github.com/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook
 */
export function getWebhookDelivery(options: {
  pathParams: API.GithubV3Json.Orgs.GetWebhookDelivery.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetWebhookDelivery.Response>(
    "get",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}/deliveries/${options.pathParams.delivery_id}`,
    options,
  );
}

/**
 * Returns a list of webhook deliveries for a webhook configured in an organization.
 * @summary List deliveries for an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}/deliveries`
 * @docs https://docs.github.com/rest/reference/orgs#list-deliveries-for-an-organization-webhook
 */
export function getListWebhookDeliveries(options: {
  pathParams: API.GithubV3Json.Orgs.GetListWebhookDeliveries.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListWebhookDeliveries.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListWebhookDeliveries.Response>(
    "get",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}/deliveries`,
    options,
  );
}

/**
 * This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
 * @summary Ping an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}/pings`
 * @docs https://docs.github.com/rest/reference/orgs#ping-an-organization-webhook
 */
export function postPingWebhook(options: {
  pathParams: API.GithubV3Json.Orgs.PostPingWebhook.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}/pings`,
    options,
  );
}

/**
 * Delete an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}`
 * @docs https://docs.github.com/rest/reference/orgs#delete-an-organization-webhook
 */
export function deleteWebhook(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteWebhook.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}`,
    options,
  );
}

/**
 * Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
 * @summary Get an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}`
 * @docs https://docs.github.com/rest/reference/orgs#get-an-organization-webhook
 */
export function getWebhook(options: {
  pathParams: API.GithubV3Json.Orgs.GetWebhook.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetWebhook.Response>(
    "get",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}`,
    options,
  );
}

/**
 * Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
 * @summary Update an organization webhook
 * @path `/orgs/{org}/hooks/{hook_id}`
 * @docs https://docs.github.com/rest/reference/orgs#update-an-organization-webhook
 */
export function patchUpdateWebhook(options: {
  pathParams: API.GithubV3Json.Orgs.PatchUpdateWebhook.PathParams;
  body?: API.GithubV3Json.Orgs.PatchUpdateWebhook.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PatchUpdateWebhook.Response>(
    "patch",
    `/orgs/${options.pathParams.org}/hooks/${options.pathParams.hook_id}`,
    options,
  );
}

/**
 * List organization webhooks
 * @path `/orgs/{org}/hooks`
 * @docs https://docs.github.com/rest/reference/orgs#list-organization-webhooks
 */
export function getListWebhooks(options: {
  pathParams: API.GithubV3Json.Orgs.GetListWebhooks.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListWebhooks.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListWebhooks.Response>(
    "get",
    `/orgs/${options.pathParams.org}/hooks`,
    options,
  );
}

/**
 * Here's how you can create a hook that posts payloads in JSON format:
 * @summary Create an organization webhook
 * @path `/orgs/{org}/hooks`
 * @docs https://docs.github.com/rest/reference/orgs#create-an-organization-webhook
 */
export function postCreateWebhook(options: {
  pathParams: API.GithubV3Json.Orgs.PostCreateWebhook.PathParams;
  body: API.GithubV3Json.Orgs.PostCreateWebhook.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PostCreateWebhook.Response>(
    "post",
    `/orgs/${options.pathParams.org}/hooks`,
    options,
  );
}

/**
 * Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
 * @summary List app installations for an organization
 * @path `/orgs/{org}/installations`
 * @docs https://docs.github.com/rest/reference/orgs#list-app-installations-for-an-organization
 */
export function getListAppInstallations(options: {
  pathParams: API.GithubV3Json.Orgs.GetListAppInstallations.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListAppInstallations.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListAppInstallations.Response>(
    "get",
    `/orgs/${options.pathParams.org}/installations`,
    options,
  );
}

/**
 * List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
 * @summary List organization invitation teams
 * @path `/orgs/{org}/invitations/{invitation_id}/teams`
 * @docs https://docs.github.com/rest/reference/orgs#list-organization-invitation-teams
 */
export function getListInvitationTeams(options: {
  pathParams: API.GithubV3Json.Orgs.GetListInvitationTeams.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListInvitationTeams.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListInvitationTeams.Response>(
    "get",
    `/orgs/${options.pathParams.org}/invitations/${options.pathParams.invitation_id}/teams`,
    options,
  );
}

/**
 * Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications).
 * @summary Cancel an organization invitation
 * @path `/orgs/{org}/invitations/{invitation_id}`
 * @docs https://docs.github.com/rest/reference/orgs#cancel-an-organization-invitation
 */
export function deleteCancelInvitation(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteCancelInvitation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/invitations/${options.pathParams.invitation_id}`,
    options,
  );
}

/**
 * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, or `hiring_manager`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
 * @summary List pending organization invitations
 * @path `/orgs/{org}/invitations`
 * @docs https://docs.github.com/rest/reference/orgs#list-pending-organization-invitations
 */
export function getListPendingInvitations(options: {
  pathParams: API.GithubV3Json.Orgs.GetListPendingInvitations.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListPendingInvitations.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListPendingInvitations.Response>(
    "get",
    `/orgs/${options.pathParams.org}/invitations`,
    options,
  );
}

/**
 * Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create an organization invitation
 * @path `/orgs/{org}/invitations`
 * @docs https://docs.github.com/rest/reference/orgs#create-an-organization-invitation
 */
export function postCreateInvitation(options: {
  pathParams: API.GithubV3Json.Orgs.PostCreateInvitation.PathParams;
  body?: API.GithubV3Json.Orgs.PostCreateInvitation.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PostCreateInvitation.Response>(
    "post",
    `/orgs/${options.pathParams.org}/invitations`,
    options,
  );
}

/**
 * Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
 * @summary Remove an organization member
 * @path `/orgs/{org}/members/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#remove-an-organization-member
 */
export function deleteRemoveMember(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteRemoveMember.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/members/${options.pathParams.username}`,
    options,
  );
}

/**
 * Check if a user is, publicly or privately, a member of the organization.
 * @summary Check organization membership for a user
 * @path `/orgs/{org}/members/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#check-organization-membership-for-a-user
 */
export function getCheckMembershipForUser(options: {
  pathParams: API.GithubV3Json.Orgs.GetCheckMembershipForUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/orgs/${options.pathParams.org}/members/${options.pathParams.username}`,
    options,
  );
}

/**
 * List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
 * @summary List organization members
 * @path `/orgs/{org}/members`
 * @docs https://docs.github.com/rest/reference/orgs#list-organization-members
 */
export function getListMembers(options: {
  pathParams: API.GithubV3Json.Orgs.GetListMembers.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListMembers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListMembers.Response>(
    "get",
    `/orgs/${options.pathParams.org}/members`,
    options,
  );
}

/**
 * In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
 *
 * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
 * @summary Remove organization membership for a user
 * @path `/orgs/{org}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#remove-organization-membership-for-a-user
 */
export function deleteRemoveMembershipForUser(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteRemoveMembershipForUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
 * @summary Get organization membership for a user
 * @path `/orgs/{org}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user
 */
export function getMembershipForUser(options: {
  pathParams: API.GithubV3Json.Orgs.GetMembershipForUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetMembershipForUser.Response>(
    "get",
    `/orgs/${options.pathParams.org}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * Only authenticated organization owners can add a member to the organization or update the member's role.
 *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
 *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
 *
 * **Rate limits**
 *
 * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
 * @summary Set organization membership for a user
 * @path `/orgs/{org}/memberships/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#set-organization-membership-for-a-user
 */
export function putSetMembershipForUser(options: {
  pathParams: API.GithubV3Json.Orgs.PutSetMembershipForUser.PathParams;
  body?: API.GithubV3Json.Orgs.PutSetMembershipForUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PutSetMembershipForUser.Response>(
    "put",
    `/orgs/${options.pathParams.org}/memberships/${options.pathParams.username}`,
    options,
  );
}

/**
 * Removing a user from this list will remove them from all the organization's repositories.
 * @summary Remove outside collaborator from an organization
 * @path `/orgs/{org}/outside_collaborators/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#remove-outside-collaborator-from-an-organization
 */
export function deleteRemoveOutsideCollaborator(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteRemoveOutsideCollaborator.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/outside_collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
 * @summary Convert an organization member to outside collaborator
 * @path `/orgs/{org}/outside_collaborators/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator
 */
export function putConvertMemberToOutsideCollaborator(options: {
  pathParams: API.GithubV3Json.Orgs.PutConvertMemberToOutsideCollaborator.PathParams;
  body?: API.GithubV3Json.Orgs.PutConvertMemberToOutsideCollaborator.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PutConvertMemberToOutsideCollaborator.Response>(
    "put",
    `/orgs/${options.pathParams.org}/outside_collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * List all users who are outside collaborators of an organization.
 * @summary List outside collaborators for an organization
 * @path `/orgs/{org}/outside_collaborators`
 * @docs https://docs.github.com/rest/reference/orgs#list-outside-collaborators-for-an-organization
 */
export function getListOutsideCollaborators(options: {
  pathParams: API.GithubV3Json.Orgs.GetListOutsideCollaborators.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListOutsideCollaborators.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListOutsideCollaborators.Response>(
    "get",
    `/orgs/${options.pathParams.org}/outside_collaborators`,
    options,
  );
}

/**
 * Remove public organization membership for the authenticated user
 * @path `/orgs/{org}/public_members/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user
 */
export function deleteRemovePublicMembershipForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteRemovePublicMembershipForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/public_members/${options.pathParams.username}`,
    options,
  );
}

/**
 * Check public organization membership for a user
 * @path `/orgs/{org}/public_members/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#check-public-organization-membership-for-a-user
 */
export function getCheckPublicMembershipForUser(options: {
  pathParams: API.GithubV3Json.Orgs.GetCheckPublicMembershipForUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/orgs/${options.pathParams.org}/public_members/${options.pathParams.username}`,
    options,
  );
}

/**
 * The user can publicize their own membership. (A user cannot publicize the membership for another user.)
 *
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * @summary Set public organization membership for the authenticated user
 * @path `/orgs/{org}/public_members/{username}`
 * @docs https://docs.github.com/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user
 */
export function putSetPublicMembershipForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Orgs.PutSetPublicMembershipForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/public_members/${options.pathParams.username}`,
    options,
  );
}

/**
 * Members of an organization can choose to have their membership publicized or not.
 * @summary List public organization members
 * @path `/orgs/{org}/public_members`
 * @docs https://docs.github.com/rest/reference/orgs#list-public-organization-members
 */
export function getListPublicMembers(options: {
  pathParams: API.GithubV3Json.Orgs.GetListPublicMembers.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListPublicMembers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListPublicMembers.Response>(
    "get",
    `/orgs/${options.pathParams.org}/public_members`,
    options,
  );
}

/**
 * Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."
 *
 * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `admin:org` scope.
 *
 * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
 * @summary Remove a security manager team
 * @path `/orgs/{org}/security-managers/teams/{team_slug}`
 * @docs https://docs.github.com/rest/reference/orgs#remove-a-security-manager-team
 */
export function deleteRemoveSecurityManagerTeam(options: {
  pathParams: API.GithubV3Json.Orgs.DeleteRemoveSecurityManagerTeam.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/security-managers/teams/${options.pathParams.team_slug}`,
    options,
  );
}

/**
 * Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."
 *
 * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `write:org` scope.
 *
 * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
 * @summary Add a security manager team
 * @path `/orgs/{org}/security-managers/teams/{team_slug}`
 * @docs https://docs.github.com/rest/reference/orgs#add-a-security-manager-team
 */
export function putAddSecurityManagerTeam(options: {
  pathParams: API.GithubV3Json.Orgs.PutAddSecurityManagerTeam.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/security-managers/teams/${options.pathParams.team_slug}`,
    options,
  );
}

/**
 * Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 *
 * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.
 *
 * GitHub Apps must have the `administration` organization read permission to use this endpoint.
 * @summary List security manager teams
 * @path `/orgs/{org}/security-managers`
 * @docs https://docs.github.com/rest/reference/orgs#list-security-manager-teams
 */
export function getListSecurityManagerTeams(options: {
  pathParams: API.GithubV3Json.Orgs.GetListSecurityManagerTeams.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListSecurityManagerTeams.Response>(
    "get",
    `/orgs/${options.pathParams.org}/security-managers`,
    options,
  );
}

/**
 * Enables or disables the specified security feature for all repositories in an organization.
 *
 * To use this endpoint, you must be an organization owner or be member of a team with the security manager role.
 * A token with the 'write:org' scope is also required.
 *
 * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
 *
 * For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * @summary Enable or disable a security feature for an organization
 * @path `/orgs/{org}/{security_product}/{enablement}`
 * @docs https://docs.github.com/rest/reference/orgs#enable-or-disable-security-product-on-all-org-repos
 */
export function postEnableOrDisableSecurityProductOnAllOrgRepos(options: {
  pathParams: API.GithubV3Json.Orgs.PostEnableOrDisableSecurityProductOnAllOrgRepos.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/orgs/${options.pathParams.org}/${options.pathParams.security_product}/${options.pathParams.enablement}`,
    options,
  );
}

/**
 * To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
 *
 * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub plan information' below."
 * @summary Get an organization
 * @path `/orgs/{org}`
 * @docs https://docs.github.com/rest/reference/orgs#get-an-organization
 */
export function getOrgs(options: {
  pathParams: API.GithubV3Json.Orgs.GetOrgs.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetOrgs.Response>(
    "get",
    `/orgs/${options.pathParams.org}`,
    options,
  );
}

/**
 * **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
 *
 * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
 * @summary Update an organization
 * @path `/orgs/{org}`
 * @docs https://docs.github.com/rest/reference/orgs#update-an-organization
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Orgs.PatchUpdate.PathParams;
  body?: API.GithubV3Json.Orgs.PatchUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PatchUpdate.Response>(
    "patch",
    `/orgs/${options.pathParams.org}`,
    options,
  );
}

/**
 * Get an organization membership for the authenticated user
 * @path `/user/memberships/orgs/{org}`
 * @docs https://docs.github.com/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user
 */
export function getMembershipForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Orgs.GetMembershipForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetMembershipForAuthenticatedUser.Response>(
    "get",
    `/user/memberships/orgs/${options.pathParams.org}`,
    options,
  );
}

/**
 * Update an organization membership for the authenticated user
 * @path `/user/memberships/orgs/{org}`
 * @docs https://docs.github.com/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user
 */
export function patchUpdateMembershipForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Orgs.PatchUpdateMembershipForAuthenticatedUser.PathParams;
  body: API.GithubV3Json.Orgs.PatchUpdateMembershipForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.PatchUpdateMembershipForAuthenticatedUser.Response>(
    "patch",
    `/user/memberships/orgs/${options.pathParams.org}`,
    options,
  );
}

/**
 * List organization memberships for the authenticated user
 * @path `/user/memberships/orgs`
 * @docs https://docs.github.com/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user
 */
export function getListMembershipsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Orgs.GetListMembershipsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListMembershipsForAuthenticatedUser.Response>(
    "get",
    "/user/memberships/orgs",
    options || {},
  );
}

/**
 * List organizations for the authenticated user.
 *
 * **OAuth scope requirements**
 *
 * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
 * @summary List organizations for the authenticated user
 * @path `/user/orgs`
 * @docs https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user
 */
export function getListForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Orgs.GetListForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/orgs",
    options || {},
  );
}

/**
 * List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
 *
 * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
 * @summary List organizations for a user
 * @path `/users/{username}/orgs`
 * @docs https://docs.github.com/rest/reference/orgs#list-organizations-for-a-user
 */
export function getListForUser(options: {
  pathParams: API.GithubV3Json.Orgs.GetListForUser.PathParams;
  queryParams?: API.GithubV3Json.Orgs.GetListForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Orgs.GetListForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/orgs`,
    options,
  );
}
