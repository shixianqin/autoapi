import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Codespaces for the specified users will no longer be billed to the organization.
 * To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Removes users from Codespaces billing for an organization
 * @path `/orgs/{org}/codespaces/billing/selected_users`
 * @docs https://docs.github.com/rest/reference/codespaces#delete-codespaces-billing-users
 */
export function deleteBillingUsers(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteBillingUsers.PathParams;
  body: API.GithubV3Json.Codespaces.DeleteBillingUsers.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/codespaces/billing/selected_users`,
    options,
  );
}

/**
 * Codespaces for the specified users will be billed to the organization.
 * To use this endpoint, the billing settings for the organization must be set to `selected_members`. For information on how to change this setting please see [these docs].(https://docs.github.com/rest/codespaces/organizations#manage-access-control-for-organization-codespaces) You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Add users to Codespaces billing for an organization
 * @path `/orgs/{org}/codespaces/billing/selected_users`
 * @docs https://docs.github.com/rest/reference/codespaces#set-codespaces-billing-users
 */
export function postSetBillingUsers(options: {
  pathParams: API.GithubV3Json.Codespaces.PostSetBillingUsers.PathParams;
  body: API.GithubV3Json.Codespaces.PostSetBillingUsers.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/orgs/${options.pathParams.org}/codespaces/billing/selected_users`,
    options,
  );
}

/**
 * Sets which users can access codespaces in an organization. This is synonymous with granting or revoking codespaces billing permissions for users according to the visibility.
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Manage access control for organization codespaces
 * @path `/orgs/{org}/codespaces/billing`
 * @docs https://docs.github.com/rest/reference/codespaces#set-codespaces-billing
 */
export function putSetBilling(options: {
  pathParams: API.GithubV3Json.Codespaces.PutSetBilling.PathParams;
  body: API.GithubV3Json.Codespaces.PutSetBilling.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/codespaces/billing`,
    options,
  );
}

/**
 * Gets a public key for an organization, which is required in order to encrypt secrets. You need to encrypt the value of a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Get an organization public key
 * @path `/orgs/{org}/codespaces/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/codespaces#get-an-organization-public-key
 */
export function getOrgPublicKey(options: {
  pathParams: API.GithubV3Json.Codespaces.GetOrgPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetOrgPublicKey.Response>(
    "get",
    `/orgs/${options.pathParams.org}/codespaces/secrets/public-key`,
    options,
  );
}

/**
 * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Remove selected repository from an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/codespaces#remove-selected-repository-from-an-organization-secret
 */
export function deleteRemoveSelectedRepoFromOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteRemoveSelectedRepoFromOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Add selected repository to an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/codespaces#add-selected-repository-to-an-organization-secret
 */
export function putAddSelectedRepoToOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.PutAddSelectedRepoToOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List selected repositories for an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret
 */
export function getListSelectedReposForOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListSelectedReposForOrgSecret.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetListSelectedReposForOrgSecret.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListSelectedReposForOrgSecret.Response>(
    "get",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Set selected repositories for an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret
 */
export function putSetSelectedReposForOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.PutSetSelectedReposForOrgSecret.PathParams;
  body: API.GithubV3Json.Codespaces.PutSetSelectedReposForOrgSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Deletes an organization secret using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Delete an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#delete-an-organization-secret
 */
export function deleteOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets an organization secret without revealing its encrypted value.
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Get an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#get-an-organization-secret
 */
export function getOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.GetOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetOrgSecret.Response>(
    "get",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `admin:org` scope to use this endpoint.
 *
 * #### Example encrypting a secret using Node.js
 *
 * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
 *
 * ```
 * const sodium = require('libsodium-wrappers')
 * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
 * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
 *
 * //Check if libsodium is ready and then proceed.
 * sodium.ready.then(() => {
 *   // Convert Secret & Base64 key to Uint8Array.
 *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
 *   let binsec = sodium.from_string(secret)
 *
 *   //Encrypt the secret using LibSodium
 *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
 *
 *   // Convert encrypted Uint8Array to Base64
 *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
 *
 *   console.log(output)
 * });
 * ```
 *
 * #### Example encrypting a secret using Python
 *
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 *
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 *
 * def encrypt(public_key: str, secret_value: str) -> str:
 *   """Encrypt a Unicode string using the public key."""
 *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 *   sealed_box = public.SealedBox(public_key)
 *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 *   return b64encode(encrypted).decode("utf-8")
 * ```
 *
 * #### Example encrypting a secret using C#
 *
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 *
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 *
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 *
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 *
 * #### Example encrypting a secret using Ruby
 *
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 *
 * ```ruby
 * require "rbnacl"
 * require "base64"
 *
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 *
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 *
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
 * @summary Create or update an organization secret
 * @path `/orgs/{org}/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#create-or-update-an-organization-secret
 */
export function putCreateOrUpdateOrgSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.PutCreateOrUpdateOrgSecret.PathParams;
  body: API.GithubV3Json.Codespaces.PutCreateOrUpdateOrgSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PutCreateOrUpdateOrgSecret.Response>(
    "put",
    `/orgs/${options.pathParams.org}/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all Codespaces secrets available at the organization-level without revealing their encrypted values.
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List organization secrets
 * @path `/orgs/{org}/codespaces/secrets`
 * @docs https://docs.github.com/rest/reference/codespaces#list-organization-secrets
 */
export function getListOrgSecrets(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListOrgSecrets.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetListOrgSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListOrgSecrets.Response>(
    "get",
    `/orgs/${options.pathParams.org}/codespaces/secrets`,
    options,
  );
}

/**
 * Lists the codespaces associated to a specified organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List codespaces for the organization
 * @path `/orgs/{org}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#list-in-organization
 */
export function getListInOrganization(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListInOrganization.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetListInOrganization.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListInOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/codespaces`,
    options,
  );
}

/**
 * Stops a user's codespace.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Stop a codespace for an organization user
 * @path `/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop`
 * @docs https://docs.github.com/rest/reference/codespaces
 */
export function postStopInOrganization(options: {
  pathParams: API.GithubV3Json.Codespaces.PostStopInOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostStopInOrganization.Response>(
    "post",
    `/orgs/${options.pathParams.org}/members/${options.pathParams.username}/codespaces/${options.pathParams.codespace_name}/stop`,
    options,
  );
}

/**
 * Deletes a user's codespace.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary Delete a codespace from the organization
 * @path `/orgs/{org}/members/{username}/codespaces/{codespace_name}`
 * @docs https://docs.github.com/rest/reference/codespaces
 */
export function deleteFromOrganization(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteFromOrganization.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.DeleteFromOrganization.Response>(
    "delete",
    `/orgs/${options.pathParams.org}/members/${options.pathParams.username}/codespaces/${options.pathParams.codespace_name}`,
    options,
  );
}

/**
 * Lists the codespaces that a member of an organization has for repositories in that organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * @summary List codespaces for a user in organization
 * @path `/orgs/{org}/members/{username}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#get-codespaces-for-user-in-org
 */
export function getForUserInOrg(options: {
  pathParams: API.GithubV3Json.Codespaces.GetForUserInOrg.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetForUserInOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetForUserInOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/members/${options.pathParams.username}/codespaces`,
    options,
  );
}

/**
 * Lists the devcontainer.json files associated with a specified repository and the authenticated user. These files
 * specify launchpoint configurations for codespaces created within the repository.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
 * @summary List devcontainer configurations in a repository for the authenticated user
 * @path `/repos/{owner}/{repo}/codespaces/devcontainers`
 * @docs https://docs.github.com/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user
 */
export function getListDevcontainersInRepositoryForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListDevcontainersInRepositoryForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetListDevcontainersInRepositoryForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListDevcontainersInRepositoryForAuthenticatedUser.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/devcontainers`,
    options,
  );
}

/**
 * List the machine types available for a given repository based on its configuration.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_metadata` repository permission to use this endpoint.
 * @summary List available machine types for a repository
 * @path `/repos/{owner}/{repo}/codespaces/machines`
 * @docs https://docs.github.com/rest/reference/codespaces#list-available-machine-types-for-a-repository
 */
export function getRepoMachinesForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetRepoMachinesForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetRepoMachinesForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetRepoMachinesForAuthenticatedUser.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/machines`,
    options,
  );
}

/**
 * Gets the default attributes for codespaces created by the user with the repository.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Get default attributes for a codespace
 * @path `/repos/{owner}/{repo}/codespaces/new`
 * @docs https://docs.github.com/rest/reference/codespaces#preview-attributes-for-a-new-codespace
 */
export function getPreFlightWithRepoForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetPreFlightWithRepoForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetPreFlightWithRepoForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetPreFlightWithRepoForAuthenticatedUser.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/new`,
    options,
  );
}

/**
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
 * @summary Get a repository public key
 * @path `/repos/{owner}/{repo}/codespaces/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/codespaces#get-a-repository-public-key
 */
export function getRepoPublicKey(options: {
  pathParams: API.GithubV3Json.Codespaces.GetRepoPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetRepoPublicKey.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/secrets/public-key`,
    options,
  );
}

/**
 * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
 * @summary Delete a repository secret
 * @path `/repos/{owner}/{repo}/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#delete-a-repository-secret
 */
export function deleteRepoSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteRepoSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
 * @summary Get a repository secret
 * @path `/repos/{owner}/{repo}/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#get-a-repository-secret
 */
export function getRepoSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.GetRepoSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetRepoSecret.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets`
 * repository permission to use this endpoint.
 *
 * #### Example of encrypting a secret using Node.js
 *
 * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
 *
 * ```
 * const sodium = require('libsodium-wrappers')
 * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
 * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
 *
 * //Check if libsodium is ready and then proceed.
 * sodium.ready.then(() => {
 *   // Convert Secret & Base64 key to Uint8Array.
 *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
 *   let binsec = sodium.from_string(secret)
 *
 *   //Encrypt the secret using LibSodium
 *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
 *
 *   // Convert encrypted Uint8Array to Base64
 *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
 *
 *   console.log(output)
 * });
 * ```
 *
 * #### Example of encrypting a secret using Python
 *
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 *
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 *
 * def encrypt(public_key: str, secret_value: str) -> str:
 *   """Encrypt a Unicode string using the public key."""
 *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 *   sealed_box = public.SealedBox(public_key)
 *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 *   return b64encode(encrypted).decode("utf-8")
 * ```
 *
 * #### Example of encrypting a secret using C#
 *
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 *
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 *
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 *
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 *
 * #### Example of encrypting a secret using Ruby
 *
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 *
 * ```ruby
 * require "rbnacl"
 * require "base64"
 *
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 *
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 *
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
 * @summary Create or update a repository secret
 * @path `/repos/{owner}/{repo}/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#create-or-update-a-repository-secret
 */
export function putCreateOrUpdateRepoSecret(options: {
  pathParams: API.GithubV3Json.Codespaces.PutCreateOrUpdateRepoSecret.PathParams;
  body?: API.GithubV3Json.Codespaces.PutCreateOrUpdateRepoSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PutCreateOrUpdateRepoSecret.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have write access to the `codespaces_secrets` repository permission to use this endpoint.
 * @summary List repository secrets
 * @path `/repos/{owner}/{repo}/codespaces/secrets`
 * @docs https://docs.github.com/rest/reference/codespaces#list-repository-secrets
 */
export function getListRepoSecrets(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListRepoSecrets.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetListRepoSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListRepoSecrets.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces/secrets`,
    options,
  );
}

/**
 * Lists the codespaces associated to a specified repository and the authenticated user.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
 * @summary List codespaces in a repository for the authenticated user
 * @path `/repos/{owner}/{repo}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user
 */
export function getListInRepositoryForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListInRepositoryForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Codespaces.GetListInRepositoryForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListInRepositoryForAuthenticatedUser.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces`,
    options,
  );
}

/**
 * Creates a codespace owned by the authenticated user in the specified repository.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Create a codespace in a repository
 * @path `/repos/{owner}/{repo}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#create-a-codespace-in-a-repository
 */
export function postCreateWithRepoForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PostCreateWithRepoForAuthenticatedUser.PathParams;
  body?: API.GithubV3Json.Codespaces.PostCreateWithRepoForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostCreateWithRepoForAuthenticatedUser.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/codespaces`,
    options,
  );
}

/**
 * Creates a codespace owned by the authenticated user for the specified pull request.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Create a codespace from a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#create-a-codespace-from-a-pull-request
 */
export function postCreateWithPrForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PostCreateWithPrForAuthenticatedUser.PathParams;
  body?: API.GithubV3Json.Codespaces.PostCreateWithPrForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostCreateWithPrForAuthenticatedUser.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/codespaces`,
    options,
  );
}

/**
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
 * @summary Get public key for the authenticated user
 * @path `/user/codespaces/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/codespaces#get-public-key-for-the-authenticated-user
 */
export function getPublicKeyForAuthenticatedUser(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetPublicKeyForAuthenticatedUser.Response>(
    "get",
    "/user/codespaces/secrets/public-key",
    options || {},
  );
}

/**
 * Removes a repository from the selected repositories for a user's codespace secret.
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
 * @summary Remove a selected repository from a user secret
 * @path `/user/codespaces/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret
 */
export function deleteRemoveRepositoryForSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteRemoveRepositoryForSecretForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/codespaces/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to the selected repositories for a user's codespace secret.
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on the referenced repository to use this endpoint.
 * @summary Add a selected repository to a user secret
 * @path `/user/codespaces/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret
 */
export function putAddRepositoryForSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PutAddRepositoryForSecretForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/user/codespaces/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * List the repositories that have been granted the ability to use a user's codespace secret.
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
 * @summary List selected repositories for a user secret
 * @path `/user/codespaces/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret
 */
export function getListRepositoriesForSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetListRepositoriesForSecretForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListRepositoriesForSecretForAuthenticatedUser.Response>(
    "get",
    `/user/codespaces/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Select the repositories that will use a user's codespace secret.
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
 * @summary Set selected repositories for a user secret
 * @path `/user/codespaces/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret
 */
export function putSetRepositoriesForSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PutSetRepositoriesForSecretForAuthenticatedUser.PathParams;
  body: API.GithubV3Json.Codespaces.PutSetRepositoriesForSecretForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/user/codespaces/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Deletes a secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
 * @summary Delete a secret for the authenticated user
 * @path `/user/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user
 */
export function deleteSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteSecretForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a secret available to a user's codespaces without revealing its encrypted value.
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
 * @summary Get a secret for the authenticated user
 * @path `/user/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#get-a-secret-for-the-authenticated-user
 */
export function getSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetSecretForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetSecretForAuthenticatedUser.Response>(
    "get",
    `/user/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates a secret for a user's codespace with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages).
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must also have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
 *
 * #### Example encrypting a secret using Node.js
 *
 * Encrypt your secret using the [libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers) library.
 *
 * ```
 * const sodium = require('libsodium-wrappers')
 * const secret = 'plain-text-secret' // replace with the secret you want to encrypt
 * const key = 'base64-encoded-public-key' // replace with the Base64 encoded public key
 *
 * //Check if libsodium is ready and then proceed.
 * sodium.ready.then(() => {
 *   // Convert Secret & Base64 key to Uint8Array.
 *   let binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL)
 *   let binsec = sodium.from_string(secret)
 *
 *   //Encrypt the secret using LibSodium
 *   let encBytes = sodium.crypto_box_seal(binsec, binkey)
 *
 *   // Convert encrypted Uint8Array to Base64
 *   let output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL)
 *
 *   console.log(output)
 * });
 * ```
 *
 * #### Example encrypting a secret using Python
 *
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 *
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 *
 * def encrypt(public_key: str, secret_value: str) -> str:
 *   """Encrypt a Unicode string using the public key."""
 *   public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 *   sealed_box = public.SealedBox(public_key)
 *   encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 *   return b64encode(encrypted).decode("utf-8")
 * ```
 *
 * #### Example encrypting a secret using C#
 *
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 *
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 *
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 *
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 *
 * #### Example encrypting a secret using Ruby
 *
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 *
 * ```ruby
 * require "rbnacl"
 * require "base64"
 *
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 *
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 *
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
 * @summary Create or update a secret for the authenticated user
 * @path `/user/codespaces/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user
 */
export function putCreateOrUpdateSecretForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PutCreateOrUpdateSecretForAuthenticatedUser.PathParams;
  body: API.GithubV3Json.Codespaces.PutCreateOrUpdateSecretForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PutCreateOrUpdateSecretForAuthenticatedUser.Response>(
    "put",
    `/user/codespaces/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available for a user's Codespaces without revealing their
 * encrypted values.
 *
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
 * @summary List secrets for the authenticated user
 * @path `/user/codespaces/secrets`
 * @docs https://docs.github.com/rest/reference/codespaces#list-secrets-for-the-authenticated-user
 */
export function getListSecretsForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Codespaces.GetListSecretsForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListSecretsForAuthenticatedUser.Response>(
    "get",
    "/user/codespaces/secrets",
    options || {},
  );
}

/**
 * Gets information about an export of a codespace.
 *
 * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
 * @summary Get details about a codespace export
 * @path `/user/codespaces/{codespace_name}/exports/{export_id}`
 * @docs https://docs.github.com/rest/codespaces/codespaces#get-details-about-a-codespace-export
 */
export function getExportDetailsForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetExportDetailsForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetExportDetailsForAuthenticatedUser.Response>(
    "get",
    `/user/codespaces/${options.pathParams.codespace_name}/exports/${options.pathParams.export_id}`,
    options,
  );
}

/**
 * Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.
 *
 * If changes cannot be pushed to the codespace's repository, they will be pushed to a new or previously-existing fork instead.
 *
 * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
 * @summary Export a codespace for the authenticated user
 * @path `/user/codespaces/{codespace_name}/exports`
 * @docs https://docs.github.com/rest/codespaces/codespaces#export-a-codespace-for-the-authenticated-user
 */
export function postExportForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PostExportForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostExportForAuthenticatedUser.Response>(
    "post",
    `/user/codespaces/${options.pathParams.codespace_name}/exports`,
    options,
  );
}

/**
 * List the machine types a codespace can transition to use.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
 * @summary List machine types for a codespace
 * @path `/user/codespaces/{codespace_name}/machines`
 * @docs https://docs.github.com/rest/reference/codespaces#list-machine-types-for-a-codespace
 */
export function getCodespaceMachinesForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetCodespaceMachinesForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetCodespaceMachinesForAuthenticatedUser.Response>(
    "get",
    `/user/codespaces/${options.pathParams.codespace_name}/machines`,
    options,
  );
}

/**
 * Publishes an unpublished codespace, creating a new repository and assigning it to the codespace.
 *
 * The codespace's token is granted write permissions to the repository, allowing the user to push their changes.
 *
 * This will fail for a codespace that is already published, meaning it has an associated repository.
 *
 * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Create a repository from an unpublished codespace
 * @path `/user/codespaces/{codespace_name}/publish`
 * @docs https://docs.github.com/rest/reference/codespaces/codespaces#create-a-repository-from-an-unpublished-codespace
 */
export function postPublishForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PostPublishForAuthenticatedUser.PathParams;
  body?: API.GithubV3Json.Codespaces.PostPublishForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostPublishForAuthenticatedUser.Response>(
    "post",
    `/user/codespaces/${options.pathParams.codespace_name}/publish`,
    options,
  );
}

/**
 * Starts a user's codespace.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
 * @summary Start a codespace for the authenticated user
 * @path `/user/codespaces/{codespace_name}/start`
 * @docs https://docs.github.com/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user
 */
export function postStartForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PostStartForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostStartForAuthenticatedUser.Response>(
    "post",
    `/user/codespaces/${options.pathParams.codespace_name}/start`,
    options,
  );
}

/**
 * Stops a user's codespace.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
 * @summary Stop a codespace for the authenticated user
 * @path `/user/codespaces/{codespace_name}/stop`
 * @docs https://docs.github.com/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user
 */
export function postStopForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PostStopForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostStopForAuthenticatedUser.Response>(
    "post",
    `/user/codespaces/${options.pathParams.codespace_name}/stop`,
    options,
  );
}

/**
 * Deletes a user's codespace.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Delete a codespace for the authenticated user
 * @path `/user/codespaces/{codespace_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user
 */
export function deleteForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.DeleteForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.DeleteForAuthenticatedUser.Response>(
    "delete",
    `/user/codespaces/${options.pathParams.codespace_name}`,
    options,
  );
}

/**
 * Gets information about a user's codespace.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
 * @summary Get a codespace for the authenticated user
 * @path `/user/codespaces/{codespace_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user
 */
export function getForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.GetForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetForAuthenticatedUser.Response>(
    "get",
    `/user/codespaces/${options.pathParams.codespace_name}`,
    options,
  );
}

/**
 * Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.
 *
 * If you specify a new machine type it will be applied the next time your codespace is started.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Update a codespace for the authenticated user
 * @path `/user/codespaces/{codespace_name}`
 * @docs https://docs.github.com/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user
 */
export function patchUpdateForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Codespaces.PatchUpdateForAuthenticatedUser.PathParams;
  body?: API.GithubV3Json.Codespaces.PatchUpdateForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PatchUpdateForAuthenticatedUser.Response>(
    "patch",
    `/user/codespaces/${options.pathParams.codespace_name}`,
    options,
  );
}

/**
 * Lists the authenticated user's codespaces.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
 * @summary List codespaces for the authenticated user
 * @path `/user/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#list-codespaces-for-the-authenticated-user
 */
export function getListForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Codespaces.GetListForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/codespaces",
    options || {},
  );
}

/**
 * Creates a new codespace, owned by the authenticated user.
 *
 * This endpoint requires either a `repository_id` OR a `pull_request` but not both.
 *
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 *
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
 * @summary Create a codespace for the authenticated user
 * @path `/user/codespaces`
 * @docs https://docs.github.com/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user
 */
export function postCreateForAuthenticatedUser(options: {
  body: API.GithubV3Json.Codespaces.PostCreateForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Codespaces.PostCreateForAuthenticatedUser.Response>(
    "post",
    "/user/codespaces",
    options,
  );
}
