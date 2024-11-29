import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
 * @summary Create a GitHub App from a manifest
 * @path `/app-manifests/{code}/conversions`
 * @docs https://docs.github.com/rest/reference/apps#create-a-github-app-from-a-manifest
 */
export function postCreateFromManifest(options: {
  pathParams: API.GithubV3Json.Apps.PostCreateFromManifest.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PostCreateFromManifest.Response>(
    "post",
    `/app-manifests/${options.pathParams.code}/conversions`,
    options,
  );
}

/**
 * Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get a webhook configuration for an app
 * @path `/app/hook/config`
 * @docs https://docs.github.com/rest/reference/apps#get-a-webhook-configuration-for-an-app
 */
export function getWebhookConfigForApp(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetWebhookConfigForApp.Response>(
    "get",
    "/app/hook/config",
    options || {},
  );
}

/**
 * Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Update a webhook configuration for an app
 * @path `/app/hook/config`
 * @docs https://docs.github.com/rest/reference/apps#update-a-webhook-configuration-for-an-app
 */
export function patchUpdateWebhookConfigForApp(options?: {
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Apps.PatchUpdateWebhookConfigForApp.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PatchUpdateWebhookConfigForApp.Response>(
    "patch",
    "/app/hook/config",
    options || {},
  );
}

/**
 * Redeliver a delivery for the webhook configured for a GitHub App.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Redeliver a delivery for an app webhook
 * @path `/app/hook/deliveries/{delivery_id}/attempts`
 * @docs https://docs.github.com/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook
 */
export function postRedeliverWebhookDelivery(options: {
  pathParams: API.GithubV3Json.Apps.PostRedeliverWebhookDelivery.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PostRedeliverWebhookDelivery.Response>(
    "post",
    `/app/hook/deliveries/${options.pathParams.delivery_id}/attempts`,
    options,
  );
}

/**
 * Returns a delivery for the webhook configured for a GitHub App.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get a delivery for an app webhook
 * @path `/app/hook/deliveries/{delivery_id}`
 * @docs https://docs.github.com/rest/reference/apps#get-a-delivery-for-an-app-webhook
 */
export function getWebhookDelivery(options: {
  pathParams: API.GithubV3Json.Apps.GetWebhookDelivery.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetWebhookDelivery.Response>(
    "get",
    `/app/hook/deliveries/${options.pathParams.delivery_id}`,
    options,
  );
}

/**
 * Returns a list of webhook deliveries for the webhook configured for a GitHub App.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary List deliveries for an app webhook
 * @path `/app/hook/deliveries`
 * @docs https://docs.github.com/rest/reference/apps#list-deliveries-for-an-app-webhook
 */
export function getListWebhookDeliveries(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListWebhookDeliveries.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListWebhookDeliveries.Response>(
    "get",
    "/app/hook/deliveries",
    options || {},
  );
}

/**
 * Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Create an installation access token for an app
 * @path `/app/installations/{installation_id}/access_tokens`
 * @docs https://docs.github.com/rest/reference/apps/#create-an-installation-access-token-for-an-app
 */
export function postCreateInstallationAccessToken(options: {
  pathParams: API.GithubV3Json.Apps.PostCreateInstallationAccessToken.PathParams;
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Apps.PostCreateInstallationAccessToken.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PostCreateInstallationAccessToken.Response>(
    "post",
    `/app/installations/${options.pathParams.installation_id}/access_tokens`,
    options,
  );
}

/**
 * Removes a GitHub App installation suspension.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Unsuspend an app installation
 * @path `/app/installations/{installation_id}/suspended`
 * @docs https://docs.github.com/rest/reference/apps#unsuspend-an-app-installation
 */
export function deleteUnsuspendInstallation(options: {
  pathParams: API.GithubV3Json.Apps.DeleteUnsuspendInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/app/installations/${options.pathParams.installation_id}/suspended`,
    options,
  );
}

/**
 * Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Suspend an app installation
 * @path `/app/installations/{installation_id}/suspended`
 * @docs https://docs.github.com/rest/reference/apps#suspend-an-app-installation
 */
export function putSuspendInstallation(options: {
  pathParams: API.GithubV3Json.Apps.PutSuspendInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/app/installations/${options.pathParams.installation_id}/suspended`,
    options,
  );
}

/**
 * Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/reference/apps/#suspend-an-app-installation)" endpoint.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Delete an installation for the authenticated app
 * @path `/app/installations/{installation_id}`
 * @docs https://docs.github.com/rest/reference/apps#delete-an-installation-for-the-authenticated-app
 */
export function deleteInstallation(options: {
  pathParams: API.GithubV3Json.Apps.DeleteInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/app/installations/${options.pathParams.installation_id}`,
    options,
  );
}

/**
 * Enables an authenticated GitHub App to find an installation's information using the installation id.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get an installation for the authenticated app
 * @path `/app/installations/{installation_id}`
 * @docs https://docs.github.com/rest/reference/apps#get-an-installation-for-the-authenticated-app
 */
export function getInstallation(options: {
  pathParams: API.GithubV3Json.Apps.GetInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetInstallation.Response>(
    "get",
    `/app/installations/${options.pathParams.installation_id}`,
    options,
  );
}

/**
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 *
 * The permissions the installation has are included under the `permissions` key.
 * @summary List installations for the authenticated app
 * @path `/app/installations`
 * @docs https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app
 */
export function getListInstallations(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListInstallations.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListInstallations.Response>(
    "get",
    "/app/installations",
    options || {},
  );
}

/**
 * Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get the authenticated app
 * @path `/app`
 * @docs https://docs.github.com/rest/reference/apps#get-the-authenticated-app
 */
export function getAuthenticated(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetAuthenticated.Response>(
    "get",
    "/app",
    options || {},
  );
}

/**
 * OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
 * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
 * @summary Delete an app authorization
 * @path `/applications/{client_id}/grant`
 * @docs https://docs.github.com/rest/reference/apps#delete-an-app-authorization
 */
export function deleteAuthorization(options: {
  pathParams: API.GithubV3Json.Apps.DeleteAuthorization.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Apps.DeleteAuthorization.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/applications/${options.pathParams.client_id}/grant`,
    options,
  );
}

/**
 * Use a non-scoped user-to-server access token to create a repository scoped and/or permission scoped user-to-server access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the `client_id` and `client_secret` of the GitHub App as the username and password. Invalid tokens will return `404 NOT FOUND`.
 * @summary Create a scoped access token
 * @path `/applications/{client_id}/token/scoped`
 * @docs https://docs.github.com/rest/apps/apps#create-a-scoped-access-token
 */
export function postScopeToken(options: {
  pathParams: API.GithubV3Json.Apps.PostScopeToken.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Apps.PostScopeToken.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PostScopeToken.Response>(
    "post",
    `/applications/${options.pathParams.client_id}/token/scoped`,
    options,
  );
}

/**
 * OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
 * @summary Delete an app token
 * @path `/applications/{client_id}/token`
 * @docs https://docs.github.com/rest/reference/apps#delete-an-app-token
 */
export function deleteToken(options: {
  pathParams: API.GithubV3Json.Apps.DeleteToken.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Apps.DeleteToken.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/applications/${options.pathParams.client_id}/token`,
    options,
  );
}

/**
 * OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
 * @summary Reset a token
 * @path `/applications/{client_id}/token`
 * @docs https://docs.github.com/rest/reference/apps#reset-a-token
 */
export function patchResetToken(options: {
  pathParams: API.GithubV3Json.Apps.PatchResetToken.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Apps.PatchResetToken.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PatchResetToken.Response>(
    "patch",
    `/applications/${options.pathParams.client_id}/token`,
    options,
  );
}

/**
 * OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
 * @summary Check a token
 * @path `/applications/{client_id}/token`
 * @docs https://docs.github.com/rest/reference/apps#check-a-token
 */
export function postCheckToken(options: {
  pathParams: API.GithubV3Json.Apps.PostCheckToken.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Apps.PostCheckToken.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.PostCheckToken.Response>(
    "post",
    `/applications/${options.pathParams.client_id}/token`,
    options,
  );
}

/**
 * **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
 *
 * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
 * @summary Get an app
 * @path `/apps/{app_slug}`
 * @docs https://docs.github.com/rest/reference/apps/#get-an-app
 */
export function getBySlug(options: {
  pathParams: API.GithubV3Json.Apps.GetBySlug.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetBySlug.Response>(
    "get",
    `/apps/${options.pathParams.app_slug}`,
    options,
  );
}

/**
 * List repositories that an app installation can access.
 *
 * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
 * @summary List repositories accessible to the app installation
 * @path `/installation/repositories`
 * @docs https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation
 */
export function getListReposAccessibleToInstallation(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListReposAccessibleToInstallation.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListReposAccessibleToInstallation.Response>(
    "get",
    "/installation/repositories",
    options || {},
  );
}

/**
 * Revokes the installation token you're using to authenticate as an installation and access this endpoint.
 *
 * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
 *
 * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
 * @summary Revoke an installation access token
 * @path `/installation/token`
 * @docs https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token
 */
export function deleteRevokeInstallationAccessToken(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/installation/token", options || {});
}

/**
 * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 * @summary Get a subscription plan for an account
 * @path `/marketplace_listing/accounts/{account_id}`
 * @docs https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account
 */
export function getSubscriptionPlanForAccount(options: {
  pathParams: API.GithubV3Json.Apps.GetSubscriptionPlanForAccount.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetSubscriptionPlanForAccount.Response>(
    "get",
    `/marketplace_listing/accounts/${options.pathParams.account_id}`,
    options,
  );
}

/**
 * Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 * @summary List accounts for a plan
 * @path `/marketplace_listing/plans/{plan_id}/accounts`
 * @docs https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan
 */
export function getListAccountsForPlan(options: {
  pathParams: API.GithubV3Json.Apps.GetListAccountsForPlan.PathParams;
  queryParams?: API.GithubV3Json.Apps.GetListAccountsForPlan.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListAccountsForPlan.Response>(
    "get",
    `/marketplace_listing/plans/${options.pathParams.plan_id}/accounts`,
    options,
  );
}

/**
 * Lists all plans that are part of your GitHub Marketplace listing.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 * @summary List plans
 * @path `/marketplace_listing/plans`
 * @docs https://docs.github.com/rest/reference/apps#list-plans
 */
export function getListPlans(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListPlans.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListPlans.Response>(
    "get",
    "/marketplace_listing/plans",
    options || {},
  );
}

/**
 * Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 * @summary Get a subscription plan for an account (stubbed)
 * @path `/marketplace_listing/stubbed/accounts/{account_id}`
 * @docs https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed
 */
export function getSubscriptionPlanForAccountStubbed(options: {
  pathParams: API.GithubV3Json.Apps.GetSubscriptionPlanForAccountStubbed.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetSubscriptionPlanForAccountStubbed.Response>(
    "get",
    `/marketplace_listing/stubbed/accounts/${options.pathParams.account_id}`,
    options,
  );
}

/**
 * Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 * @summary List accounts for a plan (stubbed)
 * @path `/marketplace_listing/stubbed/plans/{plan_id}/accounts`
 * @docs https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed
 */
export function getListAccountsForPlanStubbed(options: {
  pathParams: API.GithubV3Json.Apps.GetListAccountsForPlanStubbed.PathParams;
  queryParams?: API.GithubV3Json.Apps.GetListAccountsForPlanStubbed.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListAccountsForPlanStubbed.Response>(
    "get",
    `/marketplace_listing/stubbed/plans/${options.pathParams.plan_id}/accounts`,
    options,
  );
}

/**
 * Lists all plans that are part of your GitHub Marketplace listing.
 *
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
 * @summary List plans (stubbed)
 * @path `/marketplace_listing/stubbed/plans`
 * @docs https://docs.github.com/rest/reference/apps#list-plans-stubbed
 */
export function getListPlansStubbed(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListPlansStubbed.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListPlansStubbed.Response>(
    "get",
    "/marketplace_listing/stubbed/plans",
    options || {},
  );
}

/**
 * Enables an authenticated GitHub App to find the organization's installation information.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get an organization installation for the authenticated app
 * @path `/orgs/{org}/installation`
 * @docs https://docs.github.com/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app
 */
export function getOrgInstallation(options: {
  pathParams: API.GithubV3Json.Apps.GetOrgInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetOrgInstallation.Response>(
    "get",
    `/orgs/${options.pathParams.org}/installation`,
    options,
  );
}

/**
 * Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get a repository installation for the authenticated app
 * @path `/repos/{owner}/{repo}/installation`
 * @docs https://docs.github.com/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app
 */
export function getRepoInstallation(options: {
  pathParams: API.GithubV3Json.Apps.GetRepoInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetRepoInstallation.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/installation`,
    options,
  );
}

/**
 * Remove a single repository from an installation. The authenticated user must have admin access to the repository.
 *
 * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
 * @summary Remove a repository from an app installation
 * @path `/user/installations/{installation_id}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation
 */
export function deleteRemoveRepoFromInstallationForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Apps.DeleteRemoveRepoFromInstallationForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/installations/${options.pathParams.installation_id}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Add a single repository to an installation. The authenticated user must have admin access to the repository.
 *
 * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
 * @summary Add a repository to an app installation
 * @path `/user/installations/{installation_id}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation
 */
export function putAddRepoToInstallationForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Apps.PutAddRepoToInstallationForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/user/installations/${options.pathParams.installation_id}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
 *
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 *
 * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
 *
 * The access the user has to each repository is included in the hash under the `permissions` key.
 * @summary List repositories accessible to the user access token
 * @path `/user/installations/{installation_id}/repositories`
 * @docs https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token
 */
export function getListInstallationReposForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Apps.GetListInstallationReposForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Apps.GetListInstallationReposForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListInstallationReposForAuthenticatedUser.Response>(
    "get",
    `/user/installations/${options.pathParams.installation_id}/repositories`,
    options,
  );
}

/**
 * Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
 *
 * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
 *
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 *
 * You can find the permissions for the installation under the `permissions` key.
 * @summary List app installations accessible to the user access token
 * @path `/user/installations`
 * @docs https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token
 */
export function getListInstallationsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListInstallationsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListInstallationsForAuthenticatedUser.Response>(
    "get",
    "/user/installations",
    options || {},
  );
}

/**
 * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).
 * @summary List subscriptions for the authenticated user (stubbed)
 * @path `/user/marketplace_purchases/stubbed`
 * @docs https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed
 */
export function getListSubscriptionsForAuthenticatedUserStubbed(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListSubscriptionsForAuthenticatedUserStubbed.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListSubscriptionsForAuthenticatedUserStubbed.Response>(
    "get",
    "/user/marketplace_purchases/stubbed",
    options || {},
  );
}

/**
 * Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).
 * @summary List subscriptions for the authenticated user
 * @path `/user/marketplace_purchases`
 * @docs https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user
 */
export function getListSubscriptionsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Apps.GetListSubscriptionsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetListSubscriptionsForAuthenticatedUser.Response>(
    "get",
    "/user/marketplace_purchases",
    options || {},
  );
}

/**
 * Enables an authenticated GitHub App to find the user’s installation information.
 *
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * @summary Get a user installation for the authenticated app
 * @path `/users/{username}/installation`
 * @docs https://docs.github.com/rest/reference/apps#get-a-user-installation-for-the-authenticated-app
 */
export function getUserInstallation(options: {
  pathParams: API.GithubV3Json.Apps.GetUserInstallation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Apps.GetUserInstallation.Response>(
    "get",
    `/users/${options.pathParams.username}/installation`,
    options,
  );
}
