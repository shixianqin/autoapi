declare namespace API {
  namespace GithubV3Json {
    namespace Codespaces {
      namespace DeleteBillingUsers {
        interface Body {
          /**
           * The usernames of the organization members whose codespaces should not be billed to the organization.
           * @maxItems 100
           */
          selected_usernames: string[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace PostSetBillingUsers {
        interface Body {
          /**
           * The usernames of the organization members whose codespaces be billed to the organization.
           * @maxItems 100
           */
          selected_usernames: string[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace PutSetBilling {
        interface Body {
          /**
           * The usernames of the organization members who should have access to codespaces in the organization. Required when `visibility` is `selected_members`. The provided list of usernames will replace any existing value.
           * @maxItems 100
           */
          selected_usernames?: string[];
          /**
           * Which users can access codespaces in the organization. `disabled` means that no users can access codespaces in the organization.
           */
          visibility:
            | "all_members"
            | "all_members_and_outside_collaborators"
            | "disabled"
            | "selected_members";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetOrgPublicKey {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.CodespacesPublicKey;
      }

      namespace DeleteRemoveSelectedRepoFromOrgSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace PutAddSelectedRepoToOrgSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetListSelectedReposForOrgSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
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

        interface Response {
          repositories: $schemas.MinimalRepository[];
          total_count: number;
        }
      }

      namespace PutSetSelectedReposForOrgSecret {
        interface Body {
          /**
           * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/codespaces#remove-selected-repository-from-an-organization-secret) endpoints.
           */
          selected_repository_ids: number[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace DeleteOrgSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetOrgSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.CodespacesOrgSecret;
      }

      namespace PutCreateOrUpdateOrgSecret {
        interface Body {
          /**
           * The value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/codespaces#get-an-organization-public-key) endpoint.
           */
          encrypted_value?: string;
          /**
           * The ID of the key you used to encrypt the secret.
           */
          key_id?: string;
          /**
           * An array of repository IDs that can access the organization secret. You can only provide a list of repository IDs when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/codespaces#remove-selected-repository-from-an-organization-secret) endpoints.
           */
          selected_repository_ids?: number[];
          /**
           * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
           */
          visibility: "all" | "private" | "selected";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListOrgSecrets {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        interface Response {
          secrets: $schemas.CodespacesOrgSecret[];
          total_count: number;
        }
      }

      namespace GetListInOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        interface Response {
          codespaces: $schemas.Codespace[];
          total_count: number;
        }
      }

      namespace PostStopInOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.Codespace;
      }

      namespace DeleteFromOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $responses.Accepted;
      }

      namespace GetForUserInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
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

        interface Response {
          codespaces: $schemas.Codespace[];
          total_count: number;
        }
      }

      namespace GetListDevcontainersInRepositoryForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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

        interface Response {
          devcontainers: Array<{
            name?: string;
            path: string;
          }>;
          total_count: number;
        }
      }

      namespace GetRepoMachinesForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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

        interface QueryParams {
          /**
           * IP for location auto-detection when proxying a request
           */
          client_ip?: string;
          /**
           * The location to check for available machines. Assigned by IP if not provided.
           */
          location?: string;
        }

        interface Response {
          machines: $schemas.CodespaceMachine[];
          total_count: number;
        }
      }

      namespace GetPreFlightWithRepoForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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

        interface QueryParams {
          /**
           * An alternative IP for default location auto-detection, such as when proxying a request.
           */
          client_ip?: string;
          /**
           * The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.
           */
          ref?: string;
        }

        interface Response {
          /**
           * A GitHub user.
           */
          billable_owner?: $schemas.SimpleUser;
          defaults?: {
            devcontainer_path: string;
            location: string;
          };
        }
      }

      namespace GetRepoPublicKey {
        interface Headers {
          [P: string]: any;
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

        type Response = $schemas.CodespacesPublicKey;
      }

      namespace DeleteRepoSecret {
        interface Headers {
          [P: string]: any;
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
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetRepoSecret {
        interface Headers {
          [P: string]: any;
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
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.RepoCodespacesSecret;
      }

      namespace PutCreateOrUpdateRepoSecret {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/codespaces#get-a-repository-public-key) endpoint.
           */
          encrypted_value?: string;
          /**
           * ID of the key you used to encrypt the secret.
           */
          key_id?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
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
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListRepoSecrets {
        interface Headers {
          [P: string]: any;
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

        interface Response {
          secrets: $schemas.RepoCodespacesSecret[];
          total_count: number;
        }
      }

      namespace GetListInRepositoryForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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

        interface Response {
          codespaces: $schemas.Codespace[];
          total_count: number;
        }
      }

      namespace PostCreateWithRepoForAuthenticatedUser {
        interface Body {
          /**
           * IP for location auto-detection when proxying a request
           */
          client_ip?: string;
          /**
           * Path to devcontainer.json config to use for this codespace
           */
          devcontainer_path?: string;
          /**
           * Display name for this codespace
           */
          display_name?: string;
          /**
           * Time in minutes before codespace stops from inactivity
           */
          idle_timeout_minutes?: number;
          /**
           * Location for this codespace. Assigned by IP if not provided
           */
          location?: string;
          /**
           * Machine type to use for this codespace
           */
          machine?: string;
          /**
           * Whether to authorize requested permissions from devcontainer.json
           */
          multi_repo_permissions_opt_out?: boolean;
          /**
           * Git ref (typically a branch name) for this codespace
           */
          ref?: string;
          /**
           * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
           */
          retention_period_minutes?: number;
          /**
           * Working directory for this codespace
           */
          working_directory?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
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

        type Response = $schemas.Codespace;
      }

      namespace PostCreateWithPrForAuthenticatedUser {
        interface Body {
          /**
           * IP for location auto-detection when proxying a request
           */
          client_ip?: string;
          /**
           * Path to devcontainer.json config to use for this codespace
           */
          devcontainer_path?: string;
          /**
           * Display name for this codespace
           */
          display_name?: string;
          /**
           * Time in minutes before codespace stops from inactivity
           */
          idle_timeout_minutes?: number;
          /**
           * Location for this codespace. Assigned by IP if not provided
           */
          location?: string;
          /**
           * Machine type to use for this codespace
           */
          machine?: string;
          /**
           * Whether to authorize requested permissions from devcontainer.json
           */
          multi_repo_permissions_opt_out?: boolean;
          /**
           * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
           */
          retention_period_minutes?: number;
          /**
           * Working directory for this codespace
           */
          working_directory?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Codespace;
      }

      namespace GetPublicKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.CodespacesUserPublicKey;
      }

      namespace DeleteRemoveRepositoryForSecretForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace PutAddRepositoryForSecretForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetListRepositoriesForSecretForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        interface Response {
          repositories: $schemas.MinimalRepository[];
          total_count: number;
        }
      }

      namespace PutSetRepositoriesForSecretForAuthenticatedUser {
        interface Body {
          /**
           * An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.
           */
          selected_repository_ids: number[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace DeleteSecretForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetSecretForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.CodespacesSecret;
      }

      namespace PutCreateOrUpdateSecretForAuthenticatedUser {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/reference/codespaces#get-the-public-key-for-the-authenticated-user) endpoint.
           */
          encrypted_value?: string;
          /**
           * ID of the key you used to encrypt the secret.
           */
          key_id: string;
          /**
           * An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.
           */
          selected_repository_ids?: any[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListSecretsForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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

        interface Response {
          secrets: $schemas.CodespacesSecret[];
          total_count: number;
        }
      }

      namespace GetExportDetailsForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
          /**
           * The ID of the export operation, or `latest`. Currently only `latest` is currently supported.
           */
          export_id: string;
        }

        type Response = $schemas.CodespaceExportDetails;
      }

      namespace PostExportForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $schemas.CodespaceExportDetails;
      }

      namespace GetCodespaceMachinesForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        interface Response {
          machines: $schemas.CodespaceMachine[];
          total_count: number;
        }
      }

      namespace PostPublishForAuthenticatedUser {
        interface Body {
          /**
           * A name for the new repository.
           */
          name?: string;
          /**
           * Whether the new repository should be private.
           */
          private?: boolean;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $schemas.CodespaceWithFullRepository;
      }

      namespace PostStartForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $schemas.Codespace;
      }

      namespace PostStopForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $schemas.Codespace;
      }

      namespace DeleteForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $responses.Accepted;
      }

      namespace GetForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $schemas.Codespace;
      }

      namespace PatchUpdateForAuthenticatedUser {
        interface Body {
          /**
           * Display name for this codespace
           */
          display_name?: string;
          /**
           * A valid machine to transition this codespace to.
           */
          machine?: string;
          /**
           * Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.
           */
          recent_folders?: string[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the codespace.
           */
          codespace_name: string;
        }

        type Response = $schemas.Codespace;
      }

      namespace GetListForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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
          /**
           * ID of the Repository to filter on
           */
          repository_id?: number;
        }

        interface Response {
          codespaces: $schemas.Codespace[];
          total_count: number;
        }
      }

      namespace PostCreateForAuthenticatedUser {
        type Body =
          | {
              /**
               * IP for location auto-detection when proxying a request
               */
              client_ip?: string;
              /**
               * Path to devcontainer.json config to use for this codespace
               */
              devcontainer_path?: string;
              /**
               * Display name for this codespace
               */
              display_name?: string;
              /**
               * Time in minutes before codespace stops from inactivity
               */
              idle_timeout_minutes?: number;
              /**
               * Location for this codespace. Assigned by IP if not provided
               */
              location?: string;
              /**
               * Machine type to use for this codespace
               */
              machine?: string;
              /**
               * Whether to authorize requested permissions from devcontainer.json
               */
              multi_repo_permissions_opt_out?: boolean;
              /**
               * Git ref (typically a branch name) for this codespace
               */
              ref?: string;
              /**
               * Repository id for this codespace
               */
              repository_id: number;
              /**
               * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
               */
              retention_period_minutes?: number;
              /**
               * Working directory for this codespace
               */
              working_directory?: string;
            }
          | {
              /**
               * Path to devcontainer.json config to use for this codespace
               */
              devcontainer_path?: string;
              /**
               * Time in minutes before codespace stops from inactivity
               */
              idle_timeout_minutes?: number;
              /**
               * Location for this codespace. Assigned by IP if not provided
               */
              location?: string;
              /**
               * Machine type to use for this codespace
               */
              machine?: string;
              /**
               * Pull request number for this codespace
               */
              pull_request: {
                /**
                 * Pull request number
                 */
                pull_request_number: number;
                /**
                 * Repository id for this codespace
                 */
                repository_id: number;
              };
              /**
               * Working directory for this codespace
               */
              working_directory?: string;
            };

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Codespace;
      }
    }
  }
}
