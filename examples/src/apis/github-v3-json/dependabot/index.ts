import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists Dependabot alerts for repositories that are owned by the specified enterprise.
 * To use this endpoint, you must be a member of the enterprise, and you must use an
 * access token with the `repo` scope or `security_events` scope.
 * Alerts are only returned for organizations in the enterprise for which you are an organization owner or a security manager. For more information about security managers, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * @summary List Dependabot alerts for an enterprise
 * @path `/enterprises/{enterprise}/dependabot/alerts`
 * @docs https://docs.github.com/rest/dependabot/alerts#list-dependabot-alerts-for-an-enterprise
 */
export function getListAlertsForEnterprise(options: {
  pathParams: API.GithubV3Json.Dependabot.GetListAlertsForEnterprise.PathParams;
  queryParams?: API.GithubV3Json.Dependabot.GetListAlertsForEnterprise.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetListAlertsForEnterprise.Response>(
    "get",
    `/enterprises/${options.pathParams.enterprise}/dependabot/alerts`,
    options,
  );
}

/**
 * Lists Dependabot alerts for an organization.
 *
 * To use this endpoint, you must be an owner or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.
 *
 * For public repositories, you may instead use the `public_repo` scope.
 *
 * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
 * @summary List Dependabot alerts for an organization
 * @path `/orgs/{org}/dependabot/alerts`
 * @docs https://docs.github.com/rest/dependabot/alerts#list-dependabot-alerts-for-an-organization
 */
export function getListAlertsForOrg(options: {
  pathParams: API.GithubV3Json.Dependabot.GetListAlertsForOrg.PathParams;
  queryParams?: API.GithubV3Json.Dependabot.GetListAlertsForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetListAlertsForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/dependabot/alerts`,
    options,
  );
}

/**
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary Get an organization public key
 * @path `/orgs/{org}/dependabot/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/dependabot#get-an-organization-public-key
 */
export function getOrgPublicKey(options: {
  pathParams: API.GithubV3Json.Dependabot.GetOrgPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetOrgPublicKey.Response>(
    "get",
    `/orgs/${options.pathParams.org}/dependabot/secrets/public-key`,
    options,
  );
}

/**
 * Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary Remove selected repository from an organization secret
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret
 */
export function deleteRemoveSelectedRepoFromOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.DeleteRemoveSelectedRepoFromOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary Add selected repository to an organization secret
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}`
 * @docs https://docs.github.com/rest/reference/dependabot#add-selected-repository-to-an-organization-secret
 */
export function putAddSelectedRepoToOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.PutAddSelectedRepoToOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}/repositories/${options.pathParams.repository_id}`,
    options,
  );
}

/**
 * Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary List selected repositories for an organization secret
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret
 */
export function getListSelectedReposForOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.GetListSelectedReposForOrgSecret.PathParams;
  queryParams?: API.GithubV3Json.Dependabot.GetListSelectedReposForOrgSecret.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetListSelectedReposForOrgSecret.Response>(
    "get",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary Set selected repositories for an organization secret
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}/repositories`
 * @docs https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret
 */
export function putSetSelectedReposForOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.PutSetSelectedReposForOrgSecret.PathParams;
  body: API.GithubV3Json.Dependabot.PutSetSelectedReposForOrgSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}/repositories`,
    options,
  );
}

/**
 * Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary Delete an organization secret
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/dependabot#delete-an-organization-secret
 */
export function deleteOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.DeleteOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary Get an organization secret
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/dependabot#get-an-organization-secret
 */
export function getOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.GetOrgSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetOrgSecret.Response>(
    "get",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates an organization secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization
 * permission to use this endpoint.
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
 * @path `/orgs/{org}/dependabot/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret
 */
export function putCreateOrUpdateOrgSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.PutCreateOrUpdateOrgSecret.PathParams;
  body: API.GithubV3Json.Dependabot.PutCreateOrUpdateOrgSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.PutCreateOrUpdateOrgSecret.Response>(
    "put",
    `/orgs/${options.pathParams.org}/dependabot/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
 * @summary List organization secrets
 * @path `/orgs/{org}/dependabot/secrets`
 * @docs https://docs.github.com/rest/reference/dependabot#list-organization-secrets
 */
export function getListOrgSecrets(options: {
  pathParams: API.GithubV3Json.Dependabot.GetListOrgSecrets.PathParams;
  queryParams?: API.GithubV3Json.Dependabot.GetListOrgSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetListOrgSecrets.Response>(
    "get",
    `/orgs/${options.pathParams.org}/dependabot/secrets`,
    options,
  );
}

/**
 * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
 * You can also use tokens with the `public_repo` scope for public repositories only.
 * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
 * @summary Get a Dependabot alert
 * @path `/repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
 * @docs https://docs.github.com/rest/reference/dependabot#get-a-dependabot-alert
 */
export function getAlert(options: {
  pathParams: API.GithubV3Json.Dependabot.GetAlert.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetAlert.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/alerts/${options.pathParams.alert_number}`,
    options,
  );
}

/**
 * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
 * You can also use tokens with the `public_repo` scope for public repositories only.
 * GitHub Apps must have **Dependabot alerts** write permission to use this endpoint.
 * @summary Update a Dependabot alert
 * @path `/repos/{owner}/{repo}/dependabot/alerts/{alert_number}`
 * @docs https://docs.github.com/rest/reference/dependabot#update-a-dependabot-alert
 */
export function patchUpdateAlert(options: {
  pathParams: API.GithubV3Json.Dependabot.PatchUpdateAlert.PathParams;
  body: API.GithubV3Json.Dependabot.PatchUpdateAlert.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.PatchUpdateAlert.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/alerts/${options.pathParams.alert_number}`,
    options,
  );
}

/**
 * You must use an access token with the `security_events` scope to use this endpoint with private repositories.
 * You can also use tokens with the `public_repo` scope for public repositories only.
 * GitHub Apps must have **Dependabot alerts** read permission to use this endpoint.
 * @summary List Dependabot alerts for a repository
 * @path `/repos/{owner}/{repo}/dependabot/alerts`
 * @docs https://docs.github.com/rest/reference/dependabot#list-dependabot-alerts-for-a-repository
 */
export function getListAlertsForRepo(options: {
  pathParams: API.GithubV3Json.Dependabot.GetListAlertsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Dependabot.GetListAlertsForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetListAlertsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/alerts`,
    options,
  );
}

/**
 * Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
 * @summary Get a repository public key
 * @path `/repos/{owner}/{repo}/dependabot/secrets/public-key`
 * @docs https://docs.github.com/rest/reference/dependabot#get-a-repository-public-key
 */
export function getRepoPublicKey(options: {
  pathParams: API.GithubV3Json.Dependabot.GetRepoPublicKey.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetRepoPublicKey.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/secrets/public-key`,
    options,
  );
}

/**
 * Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
 * @summary Delete a repository secret
 * @path `/repos/{owner}/{repo}/dependabot/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/dependabot#delete-a-repository-secret
 */
export function deleteRepoSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.DeleteRepoSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
 * @summary Get a repository secret
 * @path `/repos/{owner}/{repo}/dependabot/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/dependabot#get-a-repository-secret
 */
export function getRepoSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.GetRepoSecret.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetRepoSecret.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Creates or updates a repository secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository
 * permission to use this endpoint.
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
 * @summary Create or update a repository secret
 * @path `/repos/{owner}/{repo}/dependabot/secrets/{secret_name}`
 * @docs https://docs.github.com/rest/reference/dependabot#create-or-update-a-repository-secret
 */
export function putCreateOrUpdateRepoSecret(options: {
  pathParams: API.GithubV3Json.Dependabot.PutCreateOrUpdateRepoSecret.PathParams;
  body?: API.GithubV3Json.Dependabot.PutCreateOrUpdateRepoSecret.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.PutCreateOrUpdateRepoSecret.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/secrets/${options.pathParams.secret_name}`,
    options,
  );
}

/**
 * Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
 * @summary List repository secrets
 * @path `/repos/{owner}/{repo}/dependabot/secrets`
 * @docs https://docs.github.com/rest/reference/dependabot#list-repository-secrets
 */
export function getListRepoSecrets(options: {
  pathParams: API.GithubV3Json.Dependabot.GetListRepoSecrets.PathParams;
  queryParams?: API.GithubV3Json.Dependabot.GetListRepoSecrets.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Dependabot.GetListRepoSecrets.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependabot/secrets`,
    options,
  );
}
