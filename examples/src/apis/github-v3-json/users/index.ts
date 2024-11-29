import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Unblock a user
 * @path `/user/blocks/{username}`
 * @docs https://docs.github.com/rest/reference/users#unblock-a-user
 */
export function deleteUnblock(options: {
  pathParams: API.GithubV3Json.Users.DeleteUnblock.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/blocks/${options.pathParams.username}`,
    options,
  );
}

/**
 * Check if a user is blocked by the authenticated user
 * @path `/user/blocks/{username}`
 * @docs https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user
 */
export function getCheckBlocked(options: {
  pathParams: API.GithubV3Json.Users.GetCheckBlocked.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/user/blocks/${options.pathParams.username}`,
    options,
  );
}

/**
 * Block a user
 * @path `/user/blocks/{username}`
 * @docs https://docs.github.com/rest/reference/users#block-a-user
 */
export function putBlock(options: {
  pathParams: API.GithubV3Json.Users.PutBlock.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/user/blocks/${options.pathParams.username}`,
    options,
  );
}

/**
 * List the users you've blocked on your personal account.
 * @summary List users blocked by the authenticated user
 * @path `/user/blocks`
 * @docs https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user
 */
export function getListBlockedByAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListBlockedByAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListBlockedByAuthenticatedUser.Response>(
    "get",
    "/user/blocks",
    options || {},
  );
}

/**
 * Sets the visibility for your primary email addresses.
 * @summary Set primary email visibility for the authenticated user
 * @path `/user/email/visibility`
 * @docs https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user
 */
export function patchSetPrimaryEmailVisibilityForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Users.PatchSetPrimaryEmailVisibilityForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.PatchSetPrimaryEmailVisibilityForAuthenticatedUser.Response>(
    "patch",
    "/user/email/visibility",
    options,
  );
}

/**
 * This endpoint is accessible with the `user` scope.
 * @summary Delete an email address for the authenticated user
 * @path `/user/emails`
 * @docs https://docs.github.com/rest/reference/users#delete-an-email-address-for-the-authenticated-user
 */
export function deleteEmailForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Users.DeleteEmailForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/user/emails", options);
}

/**
 * Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
 * @summary List email addresses for the authenticated user
 * @path `/user/emails`
 * @docs https://docs.github.com/rest/reference/users#list-email-addresses-for-the-authenticated-user
 */
export function getListEmailsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListEmailsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListEmailsForAuthenticatedUser.Response>(
    "get",
    "/user/emails",
    options || {},
  );
}

/**
 * This endpoint is accessible with the `user` scope.
 * @summary Add an email address for the authenticated user
 * @path `/user/emails`
 * @docs https://docs.github.com/rest/reference/users#add-an-email-address-for-the-authenticated-user
 */
export function postAddEmailForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Users.PostAddEmailForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.PostAddEmailForAuthenticatedUser.Response>(
    "post",
    "/user/emails",
    options,
  );
}

/**
 * Lists the people following the authenticated user.
 * @summary List followers of the authenticated user
 * @path `/user/followers`
 * @docs https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-user
 */
export function getListFollowersForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListFollowersForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListFollowersForAuthenticatedUser.Response>(
    "get",
    "/user/followers",
    options || {},
  );
}

/**
 * Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
 * @summary Unfollow a user
 * @path `/user/following/{username}`
 * @docs https://docs.github.com/rest/reference/users#unfollow-a-user
 */
export function deleteUnfollow(options: {
  pathParams: API.GithubV3Json.Users.DeleteUnfollow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/following/${options.pathParams.username}`,
    options,
  );
}

/**
 * Check if a person is followed by the authenticated user
 * @path `/user/following/{username}`
 * @docs https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user
 */
export function getCheckPersonIsFollowedByAuthenticated(options: {
  pathParams: API.GithubV3Json.Users.GetCheckPersonIsFollowedByAuthenticated.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/user/following/${options.pathParams.username}`,
    options,
  );
}

/**
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 *
 * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
 * @summary Follow a user
 * @path `/user/following/{username}`
 * @docs https://docs.github.com/rest/reference/users#follow-a-user
 */
export function putFollow(options: {
  pathParams: API.GithubV3Json.Users.PutFollow.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/user/following/${options.pathParams.username}`,
    options,
  );
}

/**
 * Lists the people who the authenticated user follows.
 * @summary List the people the authenticated user follows
 * @path `/user/following`
 * @docs https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-follows
 */
export function getListFollowedByAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListFollowedByAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListFollowedByAuthenticatedUser.Response>(
    "get",
    "/user/following",
    options || {},
  );
}

/**
 * Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Delete a GPG key for the authenticated user
 * @path `/user/gpg_keys/{gpg_key_id}`
 * @docs https://docs.github.com/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user
 */
export function deleteGpgKeyForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Users.DeleteGpgKeyForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/gpg_keys/${options.pathParams.gpg_key_id}`,
    options,
  );
}

/**
 * View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Get a GPG key for the authenticated user
 * @path `/user/gpg_keys/{gpg_key_id}`
 * @docs https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user
 */
export function getGpgKeyForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Users.GetGpgKeyForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetGpgKeyForAuthenticatedUser.Response>(
    "get",
    `/user/gpg_keys/${options.pathParams.gpg_key_id}`,
    options,
  );
}

/**
 * Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary List GPG keys for the authenticated user
 * @path `/user/gpg_keys`
 * @docs https://docs.github.com/rest/reference/users#list-gpg-keys-for-the-authenticated-user
 */
export function getListGpgKeysForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListGpgKeysForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListGpgKeysForAuthenticatedUser.Response>(
    "get",
    "/user/gpg_keys",
    options || {},
  );
}

/**
 * Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Create a GPG key for the authenticated user
 * @path `/user/gpg_keys`
 * @docs https://docs.github.com/rest/reference/users#create-a-gpg-key-for-the-authenticated-user
 */
export function postCreateGpgKeyForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Users.PostCreateGpgKeyForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.PostCreateGpgKeyForAuthenticatedUser.Response>(
    "post",
    "/user/gpg_keys",
    options,
  );
}

/**
 * Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Delete a public SSH key for the authenticated user
 * @path `/user/keys/{key_id}`
 * @docs https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user
 */
export function deletePublicSshKeyForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Users.DeletePublicSshKeyForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/keys/${options.pathParams.key_id}`,
    options,
  );
}

/**
 * View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Get a public SSH key for the authenticated user
 * @path `/user/keys/{key_id}`
 * @docs https://docs.github.com/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user
 */
export function getPublicSshKeyForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Users.GetPublicSshKeyForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetPublicSshKeyForAuthenticatedUser.Response>(
    "get",
    `/user/keys/${options.pathParams.key_id}`,
    options,
  );
}

/**
 * Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary List public SSH keys for the authenticated user
 * @path `/user/keys`
 * @docs https://docs.github.com/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user
 */
export function getListPublicSshKeysForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListPublicSshKeysForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListPublicSshKeysForAuthenticatedUser.Response>(
    "get",
    "/user/keys",
    options || {},
  );
}

/**
 * Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * @summary Create a public SSH key for the authenticated user
 * @path `/user/keys`
 * @docs https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user
 */
export function postCreatePublicSshKeyForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Users.PostCreatePublicSshKeyForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.PostCreatePublicSshKeyForAuthenticatedUser.Response>(
    "post",
    "/user/keys",
    options,
  );
}

/**
 * Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
 * @summary List public email addresses for the authenticated user
 * @path `/user/public_emails`
 * @docs https://docs.github.com/rest/reference/users#list-public-email-addresses-for-the-authenticated-user
 */
export function getListPublicEmailsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListPublicEmailsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListPublicEmailsForAuthenticatedUser.Response>(
    "get",
    "/user/public_emails",
    options || {},
  );
}

/**
 * Deletes an SSH signing key from the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `admin:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
 * @summary Delete an SSH signing key for the authenticated user
 * @path `/user/ssh_signing_keys/{ssh_signing_key_id}`
 * @docs https://docs.github.com/rest/reference/users#delete-a-ssh-signing-key-for-the-authenticated-user
 */
export function deleteSshSigningKeyForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Users.DeleteSshSigningKeyForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/ssh_signing_keys/${options.pathParams.ssh_signing_key_id}`,
    options,
  );
}

/**
 * Gets extended details for an SSH signing key. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
 * @summary Get an SSH signing key for the authenticated user
 * @path `/user/ssh_signing_keys/{ssh_signing_key_id}`
 * @docs https://docs.github.com/rest/reference/users#get-a-ssh-signing-key-for-the-authenticated-user
 */
export function getSshSigningKeyForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Users.GetSshSigningKeyForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetSshSigningKeyForAuthenticatedUser.Response>(
    "get",
    `/user/ssh_signing_keys/${options.pathParams.ssh_signing_key_id}`,
    options,
  );
}

/**
 * Lists the SSH signing keys for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `read:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
 * @summary List SSH signing keys for the authenticated user
 * @path `/user/ssh_signing_keys`
 * @docs https://docs.github.com/rest/reference/users#list-public-ssh-signing-keys-for-the-authenticated-user
 */
export function getListSshSigningKeysForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Users.GetListSshSigningKeysForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListSshSigningKeysForAuthenticatedUser.Response>(
    "get",
    "/user/ssh_signing_keys",
    options || {},
  );
}

/**
 * Creates an SSH signing key for the authenticated user's GitHub account. You must authenticate with Basic Authentication, or you must authenticate with OAuth with at least `write:ssh_signing_key` scope. For more information, see "[Understanding scopes for OAuth apps](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."
 * @summary Create a SSH signing key for the authenticated user
 * @path `/user/ssh_signing_keys`
 * @docs https://docs.github.com/rest/reference/users#create-an-ssh-signing-key-for-the-authenticated-user
 */
export function postCreateSshSigningKeyForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Users.PostCreateSshSigningKeyForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.PostCreateSshSigningKeyForAuthenticatedUser.Response>(
    "post",
    "/user/ssh_signing_keys",
    options,
  );
}

/**
 * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
 *
 * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
 * @summary Get the authenticated user
 * @path `/user`
 * @docs https://docs.github.com/rest/reference/users#get-the-authenticated-user
 */
export function getAuthenticated(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetAuthenticated.Response>(
    "get",
    "/user",
    options || {},
  );
}

/**
 * **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.
 * @summary Update the authenticated user
 * @path `/user`
 * @docs https://docs.github.com/rest/reference/users/#update-the-authenticated-user
 */
export function patchUpdateAuthenticated(options?: {
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Users.PatchUpdateAuthenticated.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.PatchUpdateAuthenticated.Response>(
    "patch",
    "/user",
    options || {},
  );
}

/**
 * Lists the people following the specified user.
 * @summary List followers of a user
 * @path `/users/{username}/followers`
 * @docs https://docs.github.com/rest/reference/users#list-followers-of-a-user
 */
export function getListFollowersForUser(options: {
  pathParams: API.GithubV3Json.Users.GetListFollowersForUser.PathParams;
  queryParams?: API.GithubV3Json.Users.GetListFollowersForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListFollowersForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/followers`,
    options,
  );
}

/**
 * Check if a user follows another user
 * @path `/users/{username}/following/{target_user}`
 * @docs https://docs.github.com/rest/reference/users#check-if-a-user-follows-another-user
 */
export function getCheckFollowingForUser(options: {
  pathParams: API.GithubV3Json.Users.GetCheckFollowingForUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/users/${options.pathParams.username}/following/${options.pathParams.target_user}`,
    options,
  );
}

/**
 * Lists the people who the specified user follows.
 * @summary List the people a user follows
 * @path `/users/{username}/following`
 * @docs https://docs.github.com/rest/reference/users#list-the-people-a-user-follows
 */
export function getListFollowingForUser(options: {
  pathParams: API.GithubV3Json.Users.GetListFollowingForUser.PathParams;
  queryParams?: API.GithubV3Json.Users.GetListFollowingForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListFollowingForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/following`,
    options,
  );
}

/**
 * Lists the GPG keys for a user. This information is accessible by anyone.
 * @summary List GPG keys for a user
 * @path `/users/{username}/gpg_keys`
 * @docs https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user
 */
export function getListGpgKeysForUser(options: {
  pathParams: API.GithubV3Json.Users.GetListGpgKeysForUser.PathParams;
  queryParams?: API.GithubV3Json.Users.GetListGpgKeysForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListGpgKeysForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/gpg_keys`,
    options,
  );
}

/**
 * Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
 *
 * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
 *
 * ```shell
 *  curl -u username:token
 *   https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
 * ```
 * @summary Get contextual information for a user
 * @path `/users/{username}/hovercard`
 * @docs https://docs.github.com/rest/reference/users#get-contextual-information-for-a-user
 */
export function getContextForUser(options: {
  pathParams: API.GithubV3Json.Users.GetContextForUser.PathParams;
  queryParams?: API.GithubV3Json.Users.GetContextForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetContextForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/hovercard`,
    options,
  );
}

/**
 * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
 * @summary List public keys for a user
 * @path `/users/{username}/keys`
 * @docs https://docs.github.com/rest/reference/users#list-public-keys-for-a-user
 */
export function getListPublicKeysForUser(options: {
  pathParams: API.GithubV3Json.Users.GetListPublicKeysForUser.PathParams;
  queryParams?: API.GithubV3Json.Users.GetListPublicKeysForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListPublicKeysForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/keys`,
    options,
  );
}

/**
 * Lists the SSH signing keys for a user. This operation is accessible by anyone.
 * @summary List SSH signing keys for a user
 * @path `/users/{username}/ssh_signing_keys`
 * @docs https://docs.github.com/rest/reference/users#list-ssh-signing-keys-for-a-user
 */
export function getListSshSigningKeysForUser(options: {
  pathParams: API.GithubV3Json.Users.GetListSshSigningKeysForUser.PathParams;
  queryParams?: API.GithubV3Json.Users.GetListSshSigningKeysForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetListSshSigningKeysForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/ssh_signing_keys`,
    options,
  );
}

/**
 * Provides publicly available information about someone with a GitHub account.
 *
 * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub plan information' below"
 *
 * The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/overview/resources-in-the-rest-api#authentication).
 *
 * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/rest/reference/users#emails)".
 * @summary Get a user
 * @path `/users/{username}`
 * @docs https://docs.github.com/rest/reference/users#get-a-user
 */
export function getByUsername(options: {
  pathParams: API.GithubV3Json.Users.GetByUsername.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetByUsername.Response>(
    "get",
    `/users/${options.pathParams.username}`,
    options,
  );
}

/**
 * Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
 *
 * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
 * @summary List users
 * @path `/users`
 * @docs https://docs.github.com/rest/reference/users#list-users
 */
export function getList(options?: {
  queryParams?: API.GithubV3Json.Users.GetList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Users.GetList.Response>(
    "get",
    "/users",
    options || {},
  );
}
