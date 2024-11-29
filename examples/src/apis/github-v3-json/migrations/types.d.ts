declare namespace API {
  namespace GithubV3Json {
    namespace Migrations {
      namespace DeleteArchiveForOrg {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetDownloadArchiveForOrg {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace DeleteUnlockRepoForOrg {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * repo_name parameter
           */
          repo_name: string;
        }
      }

      namespace GetListReposForOrg {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.MinimalRepository[];
      }

      namespace GetStatusForOrg {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * Exclude attributes from the API response to improve performance
           */
          exclude?: "repositories"[];
        }

        type Response = $schemas.Migration;
      }

      namespace GetListForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * Exclude attributes from the API response to improve performance
           */
          exclude?: "repositories"[];
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.Migration[];
      }

      namespace PostStartForOrg {
        interface Body {
          /**
           * Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.
           */
          exclude?: "repositories"[];
          /**
           * Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
           */
          exclude_attachments?: boolean;
          /**
           * Indicates whether the repository git data should be excluded from the migration.
           */
          exclude_git_data?: boolean;
          /**
           * Indicates whether metadata should be excluded and only git source should be included for the migration.
           */
          exclude_metadata?: boolean;
          /**
           * Indicates whether projects owned by the organization or users should be excluded. from the migration.
           */
          exclude_owner_projects?: boolean;
          /**
           * Indicates whether releases should be excluded from the migration (to reduce migration archive file size).
           */
          exclude_releases?: boolean;
          /**
           * Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
           */
          lock_repositories?: boolean;
          /**
           * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
           */
          org_metadata_only?: boolean;
          /**
           * A list of arrays indicating which repositories should be migrated.
           */
          repositories: string[];
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.Migration;
      }

      namespace PatchMapCommitAuthor {
        interface Body {
          /**
           * The new Git author email.
           */
          email?: string;
          /**
           * The new Git author name.
           */
          name?: string;
        }

        interface PathParams {
          author_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PorterAuthor;
      }

      namespace GetCommitAuthors {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * A user ID. Only return users with an ID greater than this ID.
           */
          since?: number;
        }

        type Response = $schemas.PorterAuthor[];
      }

      namespace GetLargeFiles {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PorterLargeFile[];
      }

      namespace PatchSetLfsPreference {
        interface Body {
          /**
           * Whether to store large files during the import. `opt_in` means large files will be stored using Git LFS. `opt_out` means large files will be removed during the import.
           */
          use_lfs: "opt_in" | "opt_out";
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Import;
      }

      namespace DeleteCancelImport {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetImportStatus {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Import;
      }

      namespace PatchUpdateImport {
        interface Body {
          /**
           * For a tfvc import, the name of the project that is being imported.
           */
          tfvc_project?: string;
          /**
           * The type of version control system you are migrating from.
           */
          vcs?: "git" | "mercurial" | "subversion" | "tfvc";
          /**
           * The password to provide to the originating repository.
           */
          vcs_password?: string;
          /**
           * The username to provide to the originating repository.
           */
          vcs_username?: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Import;
      }

      namespace PutStartImport {
        interface Body {
          /**
           * For a tfvc import, the name of the project that is being imported.
           */
          tfvc_project?: string;
          /**
           * The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
           */
          vcs?: "git" | "mercurial" | "subversion" | "tfvc";
          /**
           * If authentication is required, the password to provide to `vcs_url`.
           */
          vcs_password?: string;
          /**
           * The URL of the originating repository.
           */
          vcs_url: string;
          /**
           * If authentication is required, the username to provide to `vcs_url`.
           */
          vcs_username?: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Import;
      }

      namespace DeleteArchiveForAuthenticatedUser {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
        }
      }

      namespace GetArchiveForAuthenticatedUser {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
        }
      }

      namespace DeleteUnlockRepoForAuthenticatedUser {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
          /**
           * repo_name parameter
           */
          repo_name: string;
        }
      }

      namespace GetListReposForAuthenticatedUser {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.MinimalRepository[];
      }

      namespace GetStatusForAuthenticatedUser {
        interface PathParams {
          /**
           * The unique identifier of the migration.
           */
          migration_id: number;
        }

        interface QueryParams {
          exclude?: string[];
        }

        type Response = $schemas.Migration;
      }

      namespace GetListForAuthenticatedUser {
        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.Migration[];
      }

      namespace PostStartForAuthenticatedUser {
        interface Body {
          /**
           * Exclude attributes from the API response to improve performance
           */
          exclude?: "repositories"[];
          /**
           * Do not include attachments in the migration
           */
          exclude_attachments?: boolean;
          /**
           * Indicates whether the repository git data should be excluded from the migration.
           */
          exclude_git_data?: boolean;
          /**
           * Indicates whether metadata should be excluded and only git source should be included for the migration.
           */
          exclude_metadata?: boolean;
          /**
           * Indicates whether projects owned by the organization or users should be excluded.
           */
          exclude_owner_projects?: boolean;
          /**
           * Do not include releases in the migration
           */
          exclude_releases?: boolean;
          /**
           * Lock the repositories being migrated at the start of the migration
           */
          lock_repositories?: boolean;
          /**
           * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
           */
          org_metadata_only?: boolean;
          repositories: string[];
        }

        type Response = $schemas.Migration;
      }
    }
  }
}
