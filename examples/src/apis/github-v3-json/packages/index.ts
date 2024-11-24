import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Restores an entire package in an organization.
 *
 * You can restore a deleted package under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Restore a package for an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}/restore`
 * @docs https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization
 */
export function postRestorePackageForOrg(options: {
  pathParams: API.GithubV3Json.Packages.PostRestorePackageForOrg.PathParams;
  queryParams?: API.GithubV3Json.Packages.PostRestorePackageForOrg.QueryParams;
  headers?: API.GithubV3Json.Packages.PostRestorePackageForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/restore`,
    options,
  );
}

/**
 * Restores a specific package version in an organization.
 *
 * You can restore a deleted package under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Restore package version for an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore`
 * @docs https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization
 */
export function postRestorePackageVersionForOrg(options: {
  pathParams: API.GithubV3Json.Packages.PostRestorePackageVersionForOrg.PathParams;
  headers?: API.GithubV3Json.Packages.PostRestorePackageVersionForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}/restore`,
    options,
  );
}

/**
 * Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Delete package version for an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}`
 * @docs https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization
 */
export function deletePackageVersionForOrg(options: {
  pathParams: API.GithubV3Json.Packages.DeletePackageVersionForOrg.PathParams;
  headers?: API.GithubV3Json.Packages.DeletePackageVersionForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}`,
    options,
  );
}

/**
 * Gets a specific package version in an organization.
 *
 * You must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Get a package version for an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}`
 * @docs https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization
 */
export function getPackageVersionForOrganization(options: {
  pathParams: API.GithubV3Json.Packages.GetPackageVersionForOrganization.PathParams;
  headers?: API.GithubV3Json.Packages.GetPackageVersionForOrganization.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetPackageVersionForOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}`,
    options,
  );
}

/**
 * Lists package versions for a package owned by an organization.
 *
 * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary List package versions for a package owned by an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}/versions`
 * @docs https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-an-organization
 */
export function getAllPackageVersionsForPackageOwnedByOrg(options: {
  pathParams: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByOrg.PathParams;
  queryParams?: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByOrg.QueryParams;
  headers?: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions`,
    options,
  );
}

/**
 * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Delete a package for an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}`
 * @docs https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization
 */
export function deletePackageForOrg(options: {
  pathParams: API.GithubV3Json.Packages.DeletePackageForOrg.PathParams;
  headers?: API.GithubV3Json.Packages.DeletePackageForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}`,
    options,
  );
}

/**
 * Gets a specific package in an organization.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Get a package for an organization
 * @path `/orgs/{org}/packages/{package_type}/{package_name}`
 * @docs https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization
 */
export function getPackageForOrganization(options: {
  pathParams: API.GithubV3Json.Packages.GetPackageForOrganization.PathParams;
  headers?: API.GithubV3Json.Packages.GetPackageForOrganization.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetPackageForOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}`,
    options,
  );
}

/**
 * Lists packages in an organization readable by the user.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary List packages for an organization
 * @path `/orgs/{org}/packages`
 * @docs https://docs.github.com/rest/reference/packages#list-packages-for-an-organization
 */
export function getListForOrganization(options: {
  pathParams: API.GithubV3Json.Packages.GetListForOrganization.PathParams;
  queryParams: API.GithubV3Json.Packages.GetListForOrganization.QueryParams;
  headers?: API.GithubV3Json.Packages.GetListForOrganization.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetListForOrganization.Response>(
    "get",
    `/orgs/${options.pathParams.org}/packages`,
    options,
  );
}

/**
 * Restores a package owned by the authenticated user.
 *
 * You can restore a deleted package under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Restore a package for the authenticated user
 * @path `/user/packages/{package_type}/{package_name}/restore`
 * @docs https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user
 */
export function postRestorePackageForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.PostRestorePackageForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Packages.PostRestorePackageForAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Packages.PostRestorePackageForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/restore`,
    options,
  );
}

/**
 * Restores a package version owned by the authenticated user.
 *
 * You can restore a deleted package version under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Restore a package version for the authenticated user
 * @path `/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore`
 * @docs https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user
 */
export function postRestorePackageVersionForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.PostRestorePackageVersionForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Packages.PostRestorePackageVersionForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}/restore`,
    options,
  );
}

/**
 * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes.
 * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Delete a package version for the authenticated user
 * @path `/user/packages/{package_type}/{package_name}/versions/{package_version_id}`
 * @docs https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user
 */
export function deletePackageVersionForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.DeletePackageVersionForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Packages.DeletePackageVersionForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}`,
    options,
  );
}

/**
 * Gets a specific package version for a package owned by the authenticated user.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Get a package version for the authenticated user
 * @path `/user/packages/{package_type}/{package_name}/versions/{package_version_id}`
 * @docs https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user
 */
export function getPackageVersionForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.GetPackageVersionForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Packages.GetPackageVersionForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetPackageVersionForAuthenticatedUser.Response>(
    "get",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}`,
    options,
  );
}

/**
 * Lists package versions for a package owned by the authenticated user.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary List package versions for a package owned by the authenticated user
 * @path `/user/packages/{package_type}/{package_name}/versions`
 * @docs https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user
 */
export function getAllPackageVersionsForPackageOwnedByAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByAuthenticatedUser.Response>(
    "get",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions`,
    options,
  );
}

/**
 * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes.
 * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Delete a package for the authenticated user
 * @path `/user/packages/{package_type}/{package_name}`
 * @docs https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user
 */
export function deletePackageForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.DeletePackageForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Packages.DeletePackageForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}`,
    options,
  );
}

/**
 * Gets a specific package for a package owned by the authenticated user.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Get a package for the authenticated user
 * @path `/user/packages/{package_type}/{package_name}`
 * @docs https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user
 */
export function getPackageForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Packages.GetPackageForAuthenticatedUser.PathParams;
  headers?: API.GithubV3Json.Packages.GetPackageForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetPackageForAuthenticatedUser.Response>(
    "get",
    `/user/packages/${options.pathParams.package_type}/${options.pathParams.package_name}`,
    options,
  );
}

/**
 * Lists packages owned by the authenticated user within the user's namespace.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary List packages for the authenticated user's namespace
 * @path `/user/packages`
 * @docs https://docs.github.com/rest/reference/packages#list-packages-for-the-authenticated-user
 */
export function getListForAuthenticatedUser(options: {
  queryParams: API.GithubV3Json.Packages.GetListForAuthenticatedUser.QueryParams;
  headers?: API.GithubV3Json.Packages.GetListForAuthenticatedUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/packages",
    options,
  );
}

/**
 * Restores an entire package for a user.
 *
 * You can restore a deleted package under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Restore a package for a user
 * @path `/users/{username}/packages/{package_type}/{package_name}/restore`
 * @docs https://docs.github.com/rest/reference/packages#restore-a-package-for-a-user
 */
export function postRestorePackageForUser(options: {
  pathParams: API.GithubV3Json.Packages.PostRestorePackageForUser.PathParams;
  queryParams?: API.GithubV3Json.Packages.PostRestorePackageForUser.QueryParams;
  headers?: API.GithubV3Json.Packages.PostRestorePackageForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/restore`,
    options,
  );
}

/**
 * Restores a specific package version for a user.
 *
 * You can restore a deleted package under the following conditions:
 *   - The package was deleted within the last 30 days.
 *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Restore package version for a user
 * @path `/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore`
 * @docs https://docs.github.com/rest/reference/packages#restore-a-package-version-for-a-user
 */
export function postRestorePackageVersionForUser(options: {
  pathParams: API.GithubV3Json.Packages.PostRestorePackageVersionForUser.PathParams;
  headers?: API.GithubV3Json.Packages.PostRestorePackageVersionForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}/restore`,
    options,
  );
}

/**
 * Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Delete package version for a user
 * @path `/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}`
 * @docs https://docs.github.com/rest/reference/packages#delete-a-package-version-for-a-user
 */
export function deletePackageVersionForUser(options: {
  pathParams: API.GithubV3Json.Packages.DeletePackageVersionForUser.PathParams;
  headers?: API.GithubV3Json.Packages.DeletePackageVersionForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}`,
    options,
  );
}

/**
 * Gets a specific package version for a public package owned by a specified user.
 *
 * At this time, to use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Get a package version for a user
 * @path `/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}`
 * @docs https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user
 */
export function getPackageVersionForUser(options: {
  pathParams: API.GithubV3Json.Packages.GetPackageVersionForUser.PathParams;
  headers?: API.GithubV3Json.Packages.GetPackageVersionForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetPackageVersionForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions/${options.pathParams.package_version_id}`,
    options,
  );
}

/**
 * Lists package versions for a public package owned by a specified user.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary List package versions for a package owned by a user
 * @path `/users/{username}/packages/{package_type}/{package_name}/versions`
 * @docs https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-a-user
 */
export function getAllPackageVersionsForPackageOwnedByUser(options: {
  pathParams: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByUser.PathParams;
  headers?: API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetAllPackageVersionsForPackageOwnedByUser.Response>(
    "get",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}/versions`,
    options,
  );
}

/**
 * Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
 * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
 * @summary Delete a package for a user
 * @path `/users/{username}/packages/{package_type}/{package_name}`
 * @docs https://docs.github.com/rest/reference/packages#delete-a-package-for-a-user
 */
export function deletePackageForUser(options: {
  pathParams: API.GithubV3Json.Packages.DeletePackageForUser.PathParams;
  headers?: API.GithubV3Json.Packages.DeletePackageForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}`,
    options,
  );
}

/**
 * Gets a specific package metadata for a public package owned by a user.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary Get a package for a user
 * @path `/users/{username}/packages/{package_type}/{package_name}`
 * @docs https://docs.github.com/rest/reference/packages#get-a-package-for-a-user
 */
export function getPackageForUser(options: {
  pathParams: API.GithubV3Json.Packages.GetPackageForUser.PathParams;
  headers?: API.GithubV3Json.Packages.GetPackageForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetPackageForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/packages/${options.pathParams.package_type}/${options.pathParams.package_name}`,
    options,
  );
}

/**
 * Lists all packages in a user's namespace for which the requesting user has access.
 *
 * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
 * @summary List packages for a user
 * @path `/users/{username}/packages`
 * @docs https://docs.github.com/rest/reference/packages#list-packages-for-user
 */
export function getListForUser(options: {
  pathParams: API.GithubV3Json.Packages.GetListForUser.PathParams;
  queryParams: API.GithubV3Json.Packages.GetListForUser.QueryParams;
  headers?: API.GithubV3Json.Packages.GetListForUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Packages.GetListForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/packages`,
    options,
  );
}
