declare namespace API {
  namespace GithubV3Json {
    namespace Actions {
      namespace GetCacheUsageByRepoForOrg {
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
          repository_cache_usages: $schemas.ActionsCacheUsageByRepository[];
          total_count: number;
        }
      }

      namespace GetCacheUsageForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.ActionsCacheUsageOrgEnterprise;
      }

      namespace DeleteDisableSelectedRepositoryGithubOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }
      }

      namespace PutEnableSelectedRepositoryGithubOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }
      }

      namespace GetListSelectedRepositoriesEnabledGithubOrganization {
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
          repositories: $schemas.Repository[];
          total_count: number;
        }
      }

      namespace PutSetSelectedRepositoriesEnabledGithubOrganization {
        interface Body {
          /**
           * List of repository IDs to enable for GitHub Actions.
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
        }
      }

      namespace GetAllowedOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.SelectedActions;
      }

      namespace PutSetAllowedOrganization {
        type Body = $schemas.SelectedActions;

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

      namespace GetGithubDefaultWorkflowPermissionsOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.ActionsGetDefaultWorkflowPermissions;
      }

      namespace PutSetGithubDefaultWorkflowPermissionsOrganization {
        type Body = $schemas.ActionsSetDefaultWorkflowPermissions;

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

      namespace GetGithubPermissionsOrganization {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.ActionsOrganizationPermissions;
      }

      namespace PutSetGithubPermissionsOrganization {
        interface Body {
          /**
           * The permissions policy that controls the actions and reusable workflows that are allowed to run.
           */
          allowed_actions?: $schemas.AllowedActions;
          /**
           * The policy that controls the repositories in the organization that are allowed to run GitHub Actions.
           */
          enabled_repositories: $schemas.EnabledRepositories;
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

      namespace DeleteRemoveSelectedRepoFromRequiredWorkflow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
          /**
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }
      }

      namespace PutAddSelectedRepoToRequiredWorkflow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
          /**
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }
      }

      namespace GetListSelectedRepositoriesRequiredWorkflow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }

        interface Response {
          repositories: $schemas.Repository[];
          total_count: number;
        }
      }

      namespace PutSetSelectedReposToRequiredWorkflow {
        interface Body {
          /**
           * The IDs of the repositories for which the workflow should be required.
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
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }
      }

      namespace DeleteRequiredWorkflow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }
      }

      namespace GetRequiredWorkflow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }

        type Response = $schemas.RequiredWorkflow;
      }

      namespace PatchUpdateRequiredWorkflow {
        interface Body {
          /**
           * The ID of the repository that contains the workflow file.
           */
          repository_id?: string;
          /**
           * Enable the required workflow for all repositories or selected repositories in the organization.
           * @default all
           */
          scope?: "all" | "selected";
          /**
           * A list of repository IDs where you want to enable the required workflow. A list of repository IDs where you want to enable the required workflow. You can only provide a list of repository ids when the `scope` is set to `selected`.
           */
          selected_repository_ids?: number[];
          /**
           * Path of the workflow file to be configured as a required workflow.
           */
          workflow_file_path?: string;
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
           * The unique identifier of the required workflow.
           */
          required_workflow_id: number;
        }

        type Response = $schemas.RequiredWorkflow;
      }

      namespace GetListRequiredWorkflows {
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
          required_workflows: $schemas.RequiredWorkflow[];
          total_count: number;
        }
      }

      namespace PostCreateRequiredWorkflow {
        interface Body {
          /**
           * The ID of the repository that contains the workflow file.
           */
          repository_id: string;
          /**
           * Enable the required workflow for all repositories or selected repositories in the organization.
           * @default all
           */
          scope?: "all" | "selected";
          /**
           * A list of repository IDs where you want to enable the required workflow. You can only provide a list of repository ids when the `scope` is set to `selected`.
           */
          selected_repository_ids?: number[];
          /**
           * Path of the workflow file to be configured as a required workflow.
           */
          workflow_file_path: string;
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

        type Response = $schemas.RequiredWorkflow;
      }

      namespace GetListRunnerApplicationsForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.RunnerApplication[];
      }

      namespace PostCreateRegistrationTokenForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.AuthenticationToken;
      }

      namespace PostCreateRemoveTokenForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.AuthenticationToken;
      }

      namespace DeleteRemoveCustomLabelFromSelfHostedRunnerForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of a self-hosted runner's custom label.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace DeleteRemoveAllCustomLabelsFromSelfHostedRunnerForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabelsReadonly;
      }

      namespace GetListLabelsForSelfHostedRunnerForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace PostAddCustomLabelsToSelfHostedRunnerForOrg {
        interface Body {
          /**
           * The names of the custom labels to add to the runner.
           * @maxItems 100
           * @minItems 1
           */
          labels: string[];
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace PutSetCustomLabelsForSelfHostedRunnerForOrg {
        interface Body {
          /**
           * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
           * @maxItems 100
           */
          labels: string[];
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace DeleteSelfHostedRunnerFromOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }
      }

      namespace GetSelfHostedRunnerForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $schemas.Runner;
      }

      namespace GetListSelfHostedRunnersForOrg {
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
          runners: $schemas.Runner[];
          total_count: number;
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

        type Response = $schemas.ActionsPublicKey;
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
           * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Add selected repository to an organization secret](https://docs.github.com/rest/actions/secrets#add-selected-repository-to-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
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

        type Response = $schemas.OrganizationActionsSecret;
      }

      namespace PutCreateOrUpdateOrgSecret {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/actions#get-an-organization-public-key) endpoint.
           */
          encrypted_value?: string;
          /**
           * ID of the key you used to encrypt the secret.
           */
          key_id?: string;
          /**
           * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
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
          secrets: $schemas.OrganizationActionsSecret[];
          total_count: number;
        }
      }

      namespace DeleteRemoveSelectedRepoFromOrgVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          repository_id: number;
        }
      }

      namespace PutAddSelectedRepoToOrgVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          repository_id: number;
        }
      }

      namespace GetListSelectedReposForOrgVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
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
          repositories: $schemas.MinimalRepository[];
          total_count: number;
        }
      }

      namespace PutSetSelectedReposForOrgVariable {
        interface Body {
          /**
           * The IDs of the repositories that can access the organization variable.
           */
          selected_repository_ids: number[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace DeleteOrgVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetOrgVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.OrganizationActionsVariable;
      }

      namespace PatchUpdateOrgVariable {
        interface Body {
          /**
           * The name of the variable.
           */
          name?: string;
          /**
           * An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.
           */
          selected_repository_ids?: number[];
          /**
           * The value of the variable.
           */
          value?: string;
          /**
           * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
           */
          visibility?: "all" | "private" | "selected";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetListOrgVariables {
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
           * The number of results per page (max 30).
           * @default 10
           */
          per_page?: number;
        }

        interface Response {
          total_count: number;
          variables: $schemas.OrganizationActionsVariable[];
        }
      }

      namespace PostCreateOrgVariable {
        interface Body {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.
           */
          selected_repository_ids?: number[];
          /**
           * The value of the variable.
           */
          value: string;
          /**
           * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
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
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetRepoRequiredWorkflowUsage {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The ID of the required workflow that has run at least once in a repository.
           */
          required_workflow_id_for_repo: number;
        }

        type Response = $schemas.WorkflowUsage;
      }

      namespace GetRepoRequiredWorkflow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The ID of the required workflow that has run at least once in a repository.
           */
          required_workflow_id_for_repo: number;
        }

        type Response = $schemas.RepoRequiredWorkflow;
      }

      namespace GetListRepoRequiredWorkflows {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
          required_workflows: $schemas.RepoRequiredWorkflow[];
          total_count: number;
        }
      }

      namespace GetDownloadArtifact {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          archive_format: string;
          /**
           * The unique identifier of the artifact.
           */
          artifact_id: number;
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

      namespace DeleteArtifact {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the artifact.
           */
          artifact_id: number;
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

      namespace GetArtifact {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the artifact.
           */
          artifact_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Artifact;
      }

      namespace GetListArtifactsForRepo {
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
           * Filters artifacts by exact match on their name field.
           */
          name?: string;
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
          artifacts: $schemas.Artifact[];
          total_count: number;
        }
      }

      namespace GetCacheUsage {
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

        type Response = $schemas.ActionsCacheUsageByRepository;
      }

      namespace DeleteCacheById {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the GitHub Actions cache.
           */
          cache_id: number;
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

      namespace DeleteCacheByKey {
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
           * A key for identifying the cache.
           */
          key: string;
          /**
           * The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
           */
          ref?: $schemas.CodeScanningRef;
        }

        type Response = $schemas.ActionsCacheList;
      }

      namespace GetCacheList {
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
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * An explicit key or prefix for identifying the cache
           */
          key?: string;
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
           * The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
           */
          ref?: $schemas.CodeScanningRef;
          /**
           * The property to sort the results by. `created_at` means when the cache was created. `last_accessed_at` means when the cache was last accessed. `size_in_bytes` is the size of the cache in bytes.
           * @default last_accessed_at
           */
          sort?: "created_at" | "last_accessed_at" | "size_in_bytes";
        }

        type Response = $schemas.ActionsCacheList;
      }

      namespace GetDownloadJobLogsForWorkflowRun {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the job.
           */
          job_id: number;
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

      namespace PostReRunJobForWorkflowRun {
        interface Body {
          /**
           * Whether to enable debug logging for the re-run.
           */
          enable_debug_logging?: boolean;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the job.
           */
          job_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetJobForWorkflowRun {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the job.
           */
          job_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Job;
      }

      namespace GetCustomOidcSubClaimForRepo {
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

        type Response = $schemas.OidcCustomSubRepo;
      }

      namespace PutSetCustomOidcSubClaimForRepo {
        interface Body {
          /**
           * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
           */
          include_claim_keys?: string[];
          /**
           * Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.
           */
          use_default: boolean;
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

        type Response = $schemas.EmptyObject;
      }

      namespace GetWorkflowAccessToRepository {
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

        type Response = $schemas.ActionsWorkflowAccessToRepository;
      }

      namespace PutSetWorkflowAccessToRepository {
        type Body = $schemas.ActionsWorkflowAccessToRepository;

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
      }

      namespace GetAllowedRepository {
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

        type Response = $schemas.SelectedActions;
      }

      namespace PutSetAllowedRepository {
        type Body = $schemas.SelectedActions;

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
      }

      namespace GetGithubDefaultWorkflowPermissionsRepository {
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

        type Response = $schemas.ActionsGetDefaultWorkflowPermissions;
      }

      namespace PutSetGithubDefaultWorkflowPermissionsRepository {
        type Body = $schemas.ActionsSetDefaultWorkflowPermissions;

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
      }

      namespace GetGithubPermissionsRepository {
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

        type Response = $schemas.ActionsRepositoryPermissions;
      }

      namespace PutSetGithubPermissionsRepository {
        interface Body {
          /**
           * The permissions policy that controls the actions and reusable workflows that are allowed to run.
           */
          allowed_actions?: $schemas.AllowedActions;
          /**
           * Whether GitHub Actions is enabled on the repository.
           */
          enabled: $schemas.ActionsEnabled;
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
      }

      namespace GetListRequiredWorkflowRuns {
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
           * The ID of the required workflow that has run at least once in a repository.
           */
          required_workflow_id_for_repo: number;
        }

        interface QueryParams {
          /**
           * Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
           */
          actor?: string;
          /**
           * Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
           */
          branch?: string;
          /**
           * Returns workflow runs with the `check_suite_id` that you specify.
           */
          check_suite_id?: number;
          /**
           * Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
           * @format date-time
           */
          created?: string;
          /**
           * Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
           */
          event?: string;
          /**
           * If `true` pull requests are omitted from the response (empty array).
           */
          exclude_pull_requests?: boolean;
          /**
           * Only returns workflow runs that are associated with the specified `head_sha`.
           */
          head_sha?: string;
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
           * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
           */
          status?:
            | "action_required"
            | "cancelled"
            | "completed"
            | "failure"
            | "in_progress"
            | "neutral"
            | "pending"
            | "queued"
            | "requested"
            | "skipped"
            | "stale"
            | "success"
            | "timed_out"
            | "waiting";
        }

        interface Response {
          total_count: number;
          workflow_runs: $schemas.WorkflowRun[];
        }
      }

      namespace GetListRunnerApplicationsForRepo {
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

        type Response = $schemas.RunnerApplication[];
      }

      namespace PostCreateRegistrationTokenForRepo {
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

        type Response = $schemas.AuthenticationToken;
      }

      namespace PostCreateRemoveTokenForRepo {
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

        type Response = $schemas.AuthenticationToken;
      }

      namespace DeleteRemoveCustomLabelFromSelfHostedRunnerForRepo {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of a self-hosted runner's custom label.
           */
          name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace DeleteRemoveAllCustomLabelsFromSelfHostedRunnerForRepo {
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabelsReadonly;
      }

      namespace GetListLabelsForSelfHostedRunnerForRepo {
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace PostAddCustomLabelsToSelfHostedRunnerForRepo {
        interface Body {
          /**
           * The names of the custom labels to add to the runner.
           * @maxItems 100
           * @minItems 1
           */
          labels: string[];
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace PutSetCustomLabelsForSelfHostedRunnerForRepo {
        interface Body {
          /**
           * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
           * @maxItems 100
           */
          labels: string[];
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $responses.ActionsRunnerLabels;
      }

      namespace DeleteSelfHostedRunnerFromRepo {
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }
      }

      namespace GetSelfHostedRunnerForRepo {
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
           * Unique identifier of the self-hosted runner.
           */
          runner_id: number;
        }

        type Response = $schemas.Runner;
      }

      namespace GetListSelfHostedRunnersForRepo {
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
          runners: $schemas.Runner[];
          total_count: number;
        }
      }

      namespace GetReviewsForRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.EnvironmentApprovals[];
      }

      namespace PostApproveWorkflowRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListWorkflowRunArtifacts {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
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
          artifacts: $schemas.Artifact[];
          total_count: number;
        }
      }

      namespace GetListJobsForWorkflowRunAttempt {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The attempt number of the workflow run.
           */
          attempt_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the workflow run.
           */
          run_id: number;
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
          jobs: $schemas.Job[];
          total_count: number;
        }
      }

      namespace GetDownloadWorkflowRunAttemptLogs {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The attempt number of the workflow run.
           */
          attempt_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }
      }

      namespace GetWorkflowRunAttempt {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The attempt number of the workflow run.
           */
          attempt_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        interface QueryParams {
          /**
           * If `true` pull requests are omitted from the response (empty array).
           */
          exclude_pull_requests?: boolean;
        }

        type Response = $schemas.WorkflowRun;
      }

      namespace PostCancelWorkflowRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListJobsForWorkflowRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        interface QueryParams {
          /**
           * Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run.
           * @default latest
           */
          filter?: "all" | "latest";
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
          jobs: $schemas.Job[];
          total_count: number;
        }
      }

      namespace DeleteWorkflowRunLogs {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }
      }

      namespace GetDownloadWorkflowRunLogs {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }
      }

      namespace GetPendingDeploymentsForRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.PendingDeployment[];
      }

      namespace PostReviewPendingDeploymentsForRun {
        interface Body {
          /**
           * A comment to accompany the deployment review
           */
          comment: string;
          /**
           * The list of environment ids to approve or reject
           */
          environment_ids: number[];
          /**
           * Whether to approve or reject deployment to the specified environments.
           */
          state: "approved" | "rejected";
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.Deployment[];
      }

      namespace PostReRunWorkflowFailedJobs {
        interface Body {
          /**
           * Whether to enable debug logging for the re-run.
           */
          enable_debug_logging?: boolean;
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace PostReRunWorkflow {
        interface Body {
          /**
           * Whether to enable debug logging for the re-run.
           */
          enable_debug_logging?: boolean;
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetWorkflowRunUsage {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        type Response = $schemas.WorkflowRunUsage;
      }

      namespace DeleteWorkflowRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }
      }

      namespace GetWorkflowRun {
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
           * The unique identifier of the workflow run.
           */
          run_id: number;
        }

        interface QueryParams {
          /**
           * If `true` pull requests are omitted from the response (empty array).
           */
          exclude_pull_requests?: boolean;
        }

        type Response = $schemas.WorkflowRun;
      }

      namespace GetListWorkflowRunsForRepo {
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
           * Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
           */
          actor?: string;
          /**
           * Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
           */
          branch?: string;
          /**
           * Returns workflow runs with the `check_suite_id` that you specify.
           */
          check_suite_id?: number;
          /**
           * Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
           * @format date-time
           */
          created?: string;
          /**
           * Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
           */
          event?: string;
          /**
           * If `true` pull requests are omitted from the response (empty array).
           */
          exclude_pull_requests?: boolean;
          /**
           * Only returns workflow runs that are associated with the specified `head_sha`.
           */
          head_sha?: string;
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
           * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
           */
          status?:
            | "action_required"
            | "cancelled"
            | "completed"
            | "failure"
            | "in_progress"
            | "neutral"
            | "pending"
            | "queued"
            | "requested"
            | "skipped"
            | "stale"
            | "success"
            | "timed_out"
            | "waiting";
        }

        interface Response {
          total_count: number;
          workflow_runs: $schemas.WorkflowRun[];
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

        type Response = $schemas.ActionsPublicKey;
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

        type Response = $schemas.ActionsSecret;
      }

      namespace PutCreateOrUpdateRepoSecret {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/actions#get-a-repository-public-key) endpoint.
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
          secrets: $schemas.ActionsSecret[];
          total_count: number;
        }
      }

      namespace DeleteRepoVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
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

      namespace GetRepoVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ActionsVariable;
      }

      namespace PatchUpdateRepoVariable {
        interface Body {
          /**
           * The name of the variable.
           */
          name?: string;
          /**
           * The value of the variable.
           */
          value?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the variable.
           */
          name: string;
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

      namespace GetListRepoVariables {
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
           * The number of results per page (max 30).
           * @default 10
           */
          per_page?: number;
        }

        interface Response {
          total_count: number;
          variables: $schemas.ActionsVariable[];
        }
      }

      namespace PostCreateRepoVariable {
        interface Body {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The value of the variable.
           */
          value: string;
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

        type Response = $schemas.EmptyObject;
      }

      namespace PutDisableWorkflow {
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
           * The ID of the workflow. You can also pass the workflow file name as a string.
           */
          workflow_id: number | string;
        }
      }

      namespace PostCreateWorkflowDispatch {
        interface Body {
          /**
           * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
           * @maxProperties 10
           */
          inputs?: {
            [P: string]: string;
          };
          /**
           * The git reference for the workflow. The reference can be a branch or tag name.
           */
          ref: string;
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
           * The ID of the workflow. You can also pass the workflow file name as a string.
           */
          workflow_id: number | string;
        }
      }

      namespace PutEnableWorkflow {
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
           * The ID of the workflow. You can also pass the workflow file name as a string.
           */
          workflow_id: number | string;
        }
      }

      namespace GetListWorkflowRuns {
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
           * The ID of the workflow. You can also pass the workflow file name as a string.
           */
          workflow_id: number | string;
        }

        interface QueryParams {
          /**
           * Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
           */
          actor?: string;
          /**
           * Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
           */
          branch?: string;
          /**
           * Returns workflow runs with the `check_suite_id` that you specify.
           */
          check_suite_id?: number;
          /**
           * Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
           * @format date-time
           */
          created?: string;
          /**
           * Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
           */
          event?: string;
          /**
           * If `true` pull requests are omitted from the response (empty array).
           */
          exclude_pull_requests?: boolean;
          /**
           * Only returns workflow runs that are associated with the specified `head_sha`.
           */
          head_sha?: string;
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
           * Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`.
           */
          status?:
            | "action_required"
            | "cancelled"
            | "completed"
            | "failure"
            | "in_progress"
            | "neutral"
            | "pending"
            | "queued"
            | "requested"
            | "skipped"
            | "stale"
            | "success"
            | "timed_out"
            | "waiting";
        }

        interface Response {
          total_count: number;
          workflow_runs: $schemas.WorkflowRun[];
        }
      }

      namespace GetWorkflowUsage {
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
           * The ID of the workflow. You can also pass the workflow file name as a string.
           */
          workflow_id: number | string;
        }

        type Response = $schemas.WorkflowUsage;
      }

      namespace GetWorkflow {
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
           * The ID of the workflow. You can also pass the workflow file name as a string.
           */
          workflow_id: number | string;
        }

        type Response = $schemas.Workflow;
      }

      namespace GetListRepoWorkflows {
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
          total_count: number;
          workflows: $schemas.Workflow[];
        }
      }

      namespace GetEnvironmentPublicKey {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }

        type Response = $schemas.ActionsPublicKey;
      }

      namespace DeleteEnvironmentSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetEnvironmentSecret {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.ActionsSecret;
      }

      namespace PutCreateOrUpdateEnvironmentSecret {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/reference/actions#get-an-environment-public-key) endpoint.
           */
          encrypted_value: string;
          /**
           * ID of the key you used to encrypt the secret.
           */
          key_id: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListEnvironmentSecrets {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
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
          secrets: $schemas.ActionsSecret[];
          total_count: number;
        }
      }

      namespace DeleteEnvironmentVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }
      }

      namespace GetEnvironmentVariable {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }

        type Response = $schemas.ActionsVariable;
      }

      namespace PatchUpdateEnvironmentVariable {
        interface Body {
          /**
           * The name of the variable.
           */
          name?: string;
          /**
           * The value of the variable.
           */
          value?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }
      }

      namespace GetListEnvironmentVariables {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 30).
           * @default 10
           */
          per_page?: number;
        }

        interface Response {
          total_count: number;
          variables: $schemas.ActionsVariable[];
        }
      }

      namespace PostCreateEnvironmentVariable {
        interface Body {
          /**
           * The name of the variable.
           */
          name: string;
          /**
           * The value of the variable.
           */
          value: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }

        type Response = $schemas.EmptyObject;
      }
    }
  }
}
