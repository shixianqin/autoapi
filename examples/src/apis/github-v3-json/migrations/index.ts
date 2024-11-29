import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
 * @summary Delete an organization migration archive
 * @path `/orgs/{org}/migrations/{migration_id}/archive`
 * @docs https://docs.github.com/rest/migrations/orgs#delete-an-organization-migration-archive
 */
export function deleteArchiveForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.DeleteArchiveForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/migrations/${options.pathParams.migration_id}/archive`,
    options,
  );
}

/**
 * Fetches the URL to a migration archive.
 * @summary Download an organization migration archive
 * @path `/orgs/{org}/migrations/{migration_id}/archive`
 * @docs https://docs.github.com/rest/migrations/orgs#download-an-organization-migration-archive
 */
export function getDownloadArchiveForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.GetDownloadArchiveForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/orgs/${options.pathParams.org}/migrations/${options.pathParams.migration_id}/archive`,
    options,
  );
}

/**
 * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
 * @summary Unlock an organization repository
 * @path `/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock`
 * @docs https://docs.github.com/rest/migrations/orgs#unlock-an-organization-repository
 */
export function deleteUnlockRepoForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.DeleteUnlockRepoForOrg.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/orgs/${options.pathParams.org}/migrations/${options.pathParams.migration_id}/repos/${options.pathParams.repo_name}/lock`,
    options,
  );
}

/**
 * List all the repositories for this organization migration.
 * @summary List repositories in an organization migration
 * @path `/orgs/{org}/migrations/{migration_id}/repositories`
 * @docs https://docs.github.com/rest/migrations/orgs#list-repositories-in-an-organization-migration
 */
export function getListReposForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.GetListReposForOrg.PathParams;
  queryParams?: API.GithubV3Json.Migrations.GetListReposForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetListReposForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/migrations/${options.pathParams.migration_id}/repositories`,
    options,
  );
}

/**
 * Fetches the status of a migration.
 *
 * The `state` of a migration can be one of the following values:
 *   `pending`, which means the migration hasn't started yet.
 *   `exporting`, which means the migration is in progress.
 *   `exported`, which means the migration finished successfully.
 *   `failed`, which means the migration failed.
 * @summary Get an organization migration status
 * @path `/orgs/{org}/migrations/{migration_id}`
 * @docs https://docs.github.com/rest/migrations/orgs#get-an-organization-migration-status
 */
export function getStatusForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.GetStatusForOrg.PathParams;
  queryParams?: API.GithubV3Json.Migrations.GetStatusForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetStatusForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/migrations/${options.pathParams.migration_id}`,
    options,
  );
}

/**
 * Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).
 *
 * A list of `repositories` is only returned for export migrations.
 * @summary List organization migrations
 * @path `/orgs/{org}/migrations`
 * @docs https://docs.github.com/rest/migrations/orgs#list-organization-migrations
 */
export function getListForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.GetListForOrg.PathParams;
  queryParams?: API.GithubV3Json.Migrations.GetListForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetListForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/migrations`,
    options,
  );
}

/**
 * Initiates the generation of a migration archive.
 * @summary Start an organization migration
 * @path `/orgs/{org}/migrations`
 * @docs https://docs.github.com/rest/migrations/orgs#start-an-organization-migration
 */
export function postStartForOrg(options: {
  pathParams: API.GithubV3Json.Migrations.PostStartForOrg.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Migrations.PostStartForOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.PostStartForOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/migrations`,
    options,
  );
}

/**
 * Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
 * @summary Map a commit author
 * @path `/repos/{owner}/{repo}/import/authors/{author_id}`
 * @docs https://docs.github.com/rest/migrations/source-imports#map-a-commit-author
 */
export function patchMapCommitAuthor(options: {
  pathParams: API.GithubV3Json.Migrations.PatchMapCommitAuthor.PathParams;
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Migrations.PatchMapCommitAuthor.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.PatchMapCommitAuthor.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import/authors/${options.pathParams.author_id}`,
    options,
  );
}

/**
 * Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
 *
 * This endpoint and the [Map a commit author](https://docs.github.com/rest/migrations/source-imports#map-a-commit-author) endpoint allow you to provide correct Git author information.
 * @summary Get commit authors
 * @path `/repos/{owner}/{repo}/import/authors`
 * @docs https://docs.github.com/rest/migrations/source-imports#get-commit-authors
 */
export function getCommitAuthors(options: {
  pathParams: API.GithubV3Json.Migrations.GetCommitAuthors.PathParams;
  queryParams?: API.GithubV3Json.Migrations.GetCommitAuthors.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetCommitAuthors.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import/authors`,
    options,
  );
}

/**
 * List files larger than 100MB found during the import
 * @summary Get large files
 * @path `/repos/{owner}/{repo}/import/large_files`
 * @docs https://docs.github.com/rest/migrations/source-imports#get-large-files
 */
export function getLargeFiles(options: {
  pathParams: API.GithubV3Json.Migrations.GetLargeFiles.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetLargeFiles.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import/large_files`,
    options,
  );
}

/**
 * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.com). You can learn more about our LFS feature and working with large files [on our help site](https://docs.github.com/repositories/working-with-files/managing-large-files).
 * @summary Update Git LFS preference
 * @path `/repos/{owner}/{repo}/import/lfs`
 * @docs https://docs.github.com/rest/migrations/source-imports#update-git-lfs-preference
 */
export function patchSetLfsPreference(options: {
  pathParams: API.GithubV3Json.Migrations.PatchSetLfsPreference.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Migrations.PatchSetLfsPreference.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.PatchSetLfsPreference.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import/lfs`,
    options,
  );
}

/**
 * Stop an import for a repository.
 * @summary Cancel an import
 * @path `/repos/{owner}/{repo}/import`
 * @docs https://docs.github.com/rest/migrations/source-imports#cancel-an-import
 */
export function deleteCancelImport(options: {
  pathParams: API.GithubV3Json.Migrations.DeleteCancelImport.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import`,
    options,
  );
}

/**
 * View the progress of an import.
 *
 * **Import status**
 *
 * This section includes details about the possible values of the `status` field of the Import Progress response.
 *
 * An import that does not have errors will progress through these steps:
 *   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
 *   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
 *   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
 *   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
 *   `complete` - the import is complete, and the repository is ready on GitHub.
 *
 * If there are problems, you will see one of these in the `status` field:
 *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
 *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api) for more information.
 *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
 *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/migrations/source-imports#cancel-an-import) and [retry](https://docs.github.com/rest/migrations/source-imports#start-an-import) with the correct URL.
 *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/migrations/source-imports#update-an-import) section.
 *
 * **The project_choices field**
 *
 * When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
 *
 * **Git LFS related fields**
 *
 * This section includes details about Git LFS related fields that may be present in the Import Progress response.
 *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
 *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
 *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
 *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.
 * @summary Get an import status
 * @path `/repos/{owner}/{repo}/import`
 * @docs https://docs.github.com/rest/migrations/source-imports#get-an-import-status
 */
export function getImportStatus(options: {
  pathParams: API.GithubV3Json.Migrations.GetImportStatus.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetImportStatus.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import`,
    options,
  );
}

/**
 * An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
 * request. If no parameters are provided, the import will be restarted.
 *
 * Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will
 * have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.
 * You can select the project to import by providing one of the objects in the `project_choices` array in the update request.
 * @summary Update an import
 * @path `/repos/{owner}/{repo}/import`
 * @docs https://docs.github.com/rest/migrations/source-imports#update-an-import
 */
export function patchUpdateImport(options: {
  pathParams: API.GithubV3Json.Migrations.PatchUpdateImport.PathParams;
  headers?: Record<string, any>;
  body?: API.GithubV3Json.Migrations.PatchUpdateImport.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.PatchUpdateImport.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import`,
    options,
  );
}

/**
 * Start a source import to a GitHub repository using GitHub Importer. Importing into a GitHub repository with GitHub Actions enabled is not supported and will return a status `422 Unprocessable Entity` response.
 * @summary Start an import
 * @path `/repos/{owner}/{repo}/import`
 * @docs https://docs.github.com/rest/migrations/source-imports#start-an-import
 */
export function putStartImport(options: {
  pathParams: API.GithubV3Json.Migrations.PutStartImport.PathParams;
  headers?: Record<string, any>;
  body: API.GithubV3Json.Migrations.PutStartImport.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.PutStartImport.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/import`,
    options,
  );
}

/**
 * Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/migrations/users#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/migrations/users#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
 * @summary Delete a user migration archive
 * @path `/user/migrations/{migration_id}/archive`
 * @docs https://docs.github.com/rest/migrations/users#delete-a-user-migration-archive
 */
export function deleteArchiveForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Migrations.DeleteArchiveForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/migrations/${options.pathParams.migration_id}/archive`,
    options,
  );
}

/**
 * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
 *   attachments
 *   bases
 *   commit\_comments
 *   issue\_comments
 *   issue\_events
 *   issues
 *   milestones
 *   organizations
 *   projects
 *   protected\_branches
 *   pull\_request\_reviews
 *   pull\_requests
 *   releases
 *   repositories
 *   review\_comments
 *   schema
 *   users
 *
 * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
 * @summary Download a user migration archive
 * @path `/user/migrations/{migration_id}/archive`
 * @docs https://docs.github.com/rest/migrations/users#download-a-user-migration-archive
 */
export function getArchiveForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Migrations.GetArchiveForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/user/migrations/${options.pathParams.migration_id}/archive`,
    options,
  );
}

/**
 * Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/migrations/users#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/repos/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
 * @summary Unlock a user repository
 * @path `/user/migrations/{migration_id}/repos/{repo_name}/lock`
 * @docs https://docs.github.com/rest/migrations/users#unlock-a-user-repository
 */
export function deleteUnlockRepoForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Migrations.DeleteUnlockRepoForAuthenticatedUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/migrations/${options.pathParams.migration_id}/repos/${options.pathParams.repo_name}/lock`,
    options,
  );
}

/**
 * Lists all the repositories for this user migration.
 * @summary List repositories for a user migration
 * @path `/user/migrations/{migration_id}/repositories`
 * @docs https://docs.github.com/rest/migrations/users#list-repositories-for-a-user-migration
 */
export function getListReposForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Migrations.GetListReposForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Migrations.GetListReposForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetListReposForAuthenticatedUser.Response>(
    "get",
    `/user/migrations/${options.pathParams.migration_id}/repositories`,
    options,
  );
}

/**
 * Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
 *   `pending` - the migration hasn't started yet.
 *   `exporting` - the migration is in progress.
 *   `exported` - the migration finished successfully.
 *   `failed` - the migration failed.
 *
 * Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/migrations/users#download-a-user-migration-archive).
 * @summary Get a user migration status
 * @path `/user/migrations/{migration_id}`
 * @docs https://docs.github.com/rest/migrations/users#get-a-user-migration-status
 */
export function getStatusForAuthenticatedUser(options: {
  pathParams: API.GithubV3Json.Migrations.GetStatusForAuthenticatedUser.PathParams;
  queryParams?: API.GithubV3Json.Migrations.GetStatusForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetStatusForAuthenticatedUser.Response>(
    "get",
    `/user/migrations/${options.pathParams.migration_id}`,
    options,
  );
}

/**
 * Lists all migrations a user has started.
 * @summary List user migrations
 * @path `/user/migrations`
 * @docs https://docs.github.com/rest/migrations/users#list-user-migrations
 */
export function getListForAuthenticatedUser(options?: {
  queryParams?: API.GithubV3Json.Migrations.GetListForAuthenticatedUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.GetListForAuthenticatedUser.Response>(
    "get",
    "/user/migrations",
    options || {},
  );
}

/**
 * Initiates the generation of a user migration archive.
 * @summary Start a user migration
 * @path `/user/migrations`
 * @docs https://docs.github.com/rest/migrations/users#start-a-user-migration
 */
export function postStartForAuthenticatedUser(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Migrations.PostStartForAuthenticatedUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Migrations.PostStartForAuthenticatedUser.Response>(
    "post",
    "/user/migrations",
    options,
  );
}
