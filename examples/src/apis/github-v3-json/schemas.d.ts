declare namespace API {
  namespace GithubV3Json {
    namespace $responses {
      interface Accepted {}

      /**
       * Response
       */
      interface ActionsRunnerLabels {
        labels: $schemas.RunnerLabel[];
        total_count: number;
      }

      /**
       * Response
       */
      interface ActionsRunnerLabelsReadonly {
        labels: $schemas.RunnerLabel[];
        total_count: number;
      }

      /**
       * A header with no content is returned.
       */
      type NoContent = any;
    }

    namespace $schemas {
      interface ActionsBillingUsage {
        /**
         * The amount of free GitHub Actions minutes available.
         */
        included_minutes: number;
        minutes_used_breakdown: {
          /**
           * Total minutes used on macOS runner machines.
           */
          MACOS?: number;
          /**
           * Total minutes used on Ubuntu runner machines.
           */
          UBUNTU?: number;
          /**
           * Total minutes used on Windows runner machines.
           */
          WINDOWS?: number;
          /**
           * Total minutes used on macOS 12 core runner machines.
           */
          macos_12_core?: number;
          /**
           * Total minutes used on all runner machines.
           */
          total?: number;
          /**
           * Total minutes used on Ubuntu 4 core runner machines.
           */
          ubuntu_4_core?: number;
          /**
           * Total minutes used on Ubuntu 8 core runner machines.
           */
          ubuntu_8_core?: number;
          /**
           * Total minutes used on Ubuntu 16 core runner machines.
           */
          ubuntu_16_core?: number;
          /**
           * Total minutes used on Ubuntu 32 core runner machines.
           */
          ubuntu_32_core?: number;
          /**
           * Total minutes used on Ubuntu 64 core runner machines.
           */
          ubuntu_64_core?: number;
          /**
           * Total minutes used on Windows 4 core runner machines.
           */
          windows_4_core?: number;
          /**
           * Total minutes used on Windows 8 core runner machines.
           */
          windows_8_core?: number;
          /**
           * Total minutes used on Windows 16 core runner machines.
           */
          windows_16_core?: number;
          /**
           * Total minutes used on Windows 32 core runner machines.
           */
          windows_32_core?: number;
          /**
           * Total minutes used on Windows 64 core runner machines.
           */
          windows_64_core?: number;
        };
        /**
         * The sum of the free and paid GitHub Actions minutes used.
         */
        total_minutes_used: number;
        /**
         * The total paid GitHub Actions minutes used.
         */
        total_paid_minutes_used: number;
      }

      /**
       * Repository actions caches
       */
      interface ActionsCacheList {
        /**
         * Array of caches
         */
        actions_caches: Array<{
          /**
           * @format date-time
           */
          created_at?: string;
          id?: number;
          key?: string;
          /**
           * @format date-time
           */
          last_accessed_at?: string;
          ref?: string;
          size_in_bytes?: number;
          version?: string;
        }>;
        /**
         * Total number of caches
         */
        total_count: number;
      }

      /**
       * GitHub Actions Cache Usage by repository.
       */
      interface ActionsCacheUsageByRepository {
        /**
         * The number of active caches in the repository.
         */
        active_caches_count: number;
        /**
         * The sum of the size in bytes of all the active cache items in the repository.
         */
        active_caches_size_in_bytes: number;
        /**
         * The repository owner and name for the cache usage being shown.
         */
        full_name: string;
      }

      interface ActionsCacheUsageOrgEnterprise {
        /**
         * The count of active caches across all repositories of an enterprise or an organization.
         */
        total_active_caches_count: number;
        /**
         * The total size in bytes of all active cache items across all repositories of an enterprise or an organization.
         */
        total_active_caches_size_in_bytes: number;
      }

      /**
       * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
       */
      type ActionsCanApprovePullRequestReviews = boolean;

      /**
       * The default workflow permissions granted to the GITHUB_TOKEN when running workflows.
       */
      type ActionsDefaultWorkflowPermissions = "read" | "write";

      /**
       * Whether GitHub Actions is enabled on the repository.
       */
      type ActionsEnabled = boolean;

      interface ActionsGetDefaultWorkflowPermissions {
        /**
         * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
         */
        can_approve_pull_request_reviews: $schemas.ActionsCanApprovePullRequestReviews;
        /**
         * The default workflow permissions granted to the GITHUB_TOKEN when running workflows.
         */
        default_workflow_permissions: $schemas.ActionsDefaultWorkflowPermissions;
      }

      interface ActionsOrganizationPermissions {
        /**
         * The permissions policy that controls the actions and reusable workflows that are allowed to run.
         */
        allowed_actions?: $schemas.AllowedActions;
        /**
         * The policy that controls the repositories in the organization that are allowed to run GitHub Actions.
         */
        enabled_repositories: $schemas.EnabledRepositories;
        /**
         * The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.
         */
        selected_actions_url?: $schemas.SelectedActionsUrl;
        /**
         * The API URL to use to get or set the selected repositories that are allowed to run GitHub Actions, when `enabled_repositories` is set to `selected`.
         */
        selected_repositories_url?: string;
      }

      /**
       * The public key used for setting Actions Secrets.
       */
      interface ActionsPublicKey {
        created_at?: string;
        id?: number;
        /**
         * The Base64 encoded public key.
         */
        key: string;
        /**
         * The identifier for the key.
         */
        key_id: string;
        title?: string;
        url?: string;
      }

      interface ActionsRepositoryPermissions {
        /**
         * The permissions policy that controls the actions and reusable workflows that are allowed to run.
         */
        allowed_actions?: $schemas.AllowedActions;
        /**
         * Whether GitHub Actions is enabled on the repository.
         */
        enabled: $schemas.ActionsEnabled;
        /**
         * The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.
         */
        selected_actions_url?: $schemas.SelectedActionsUrl;
      }

      /**
       * Set secrets for GitHub Actions.
       */
      interface ActionsSecret {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret.
         */
        name: string;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      interface ActionsSetDefaultWorkflowPermissions {
        /**
         * Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.
         */
        can_approve_pull_request_reviews?: $schemas.ActionsCanApprovePullRequestReviews;
        /**
         * The default workflow permissions granted to the GITHUB_TOKEN when running workflows.
         */
        default_workflow_permissions?: $schemas.ActionsDefaultWorkflowPermissions;
      }

      interface ActionsVariable {
        /**
         * The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the variable.
         */
        name: string;
        /**
         * The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        updated_at: string;
        /**
         * The value of the variable.
         */
        value: string;
      }

      interface ActionsWorkflowAccessToRepository {
        /**
         * Defines the level of access that workflows outside of the repository have to actions and reusable workflows within the
         * repository.
         *
         * `none` means the access is only possible from workflows in this repository. `user` level access allows sharing across user owned private repos only. `organization` level access allows sharing across the organization.
         */
        access_level: "none" | "organization" | "user";
      }

      interface Actor {
        /**
         * @format uri
         */
        avatar_url: string;
        display_login?: string;
        gravatar_id: string;
        id: number;
        login: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Added to Project Issue Event
       */
      interface AddedToProjectIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        project_card?: {
          column_name: string;
          id: number;
          previous_column_name?: string;
          project_id: number;
          /**
           * @format uri
           */
          project_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        url: string;
      }

      /**
       * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      type AlertCreatedAt = string;

      /**
       * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      type AlertDismissedAt = string;

      /**
       * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      type AlertFixedAt = string;

      /**
       * The GitHub URL of the alert resource.
       */
      type AlertHtmlUrl = string;

      /**
       * The REST API URL for fetching the list of instances for an alert.
       */
      type AlertInstancesUrl = string;

      /**
       * The security alert number.
       */
      type AlertNumber = number;

      /**
       * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      type AlertUpdatedAt = string;

      /**
       * The REST API URL of the alert resource.
       */
      type AlertUrl = string;

      /**
       * The permissions policy that controls the actions and reusable workflows that are allowed to run.
       */
      type AllowedActions = "all" | "local_only" | "selected";

      /**
       * Api Overview
       */
      interface ApiOverview {
        actions?: string[];
        api?: string[];
        dependabot?: string[];
        git?: string[];
        hooks?: string[];
        importer?: string[];
        packages?: string[];
        pages?: string[];
        ssh_key_fingerprints?: {
          SHA256_DSA?: string;
          SHA256_ECDSA?: string;
          SHA256_ED25519?: string;
          SHA256_RSA?: string;
        };
        ssh_keys?: string[];
        verifiable_password_authentication: boolean;
        web?: string[];
      }

      /**
       * The permissions granted to the user-to-server access token.
       */
      interface AppPermissions {
        /**
         * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.
         */
        actions?: "read" | "write";
        /**
         * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.
         */
        administration?: "read" | "write";
        /**
         * The level of permission to grant the access token for checks on code.
         */
        checks?: "read" | "write";
        /**
         * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.
         */
        contents?: "read" | "write";
        /**
         * The level of permission to grant the access token for deployments and deployment statuses.
         */
        deployments?: "read" | "write";
        /**
         * The level of permission to grant the access token for managing repository environments.
         */
        environments?: "read" | "write";
        /**
         * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.
         */
        issues?: "read" | "write";
        /**
         * The level of permission to grant the access token for organization teams and members.
         */
        members?: "read" | "write";
        /**
         * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.
         */
        metadata?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage access to an organization.
         */
        organization_administration?: "read" | "write";
        /**
         * The level of permission to grant the access token to view and manage announcement banners for an organization.
         */
        organization_announcement_banners?: "read" | "write";
        /**
         * The level of permission to grant the access token for custom repository roles management. This property is in beta and is subject to change.
         */
        organization_custom_roles?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage the post-receive hooks for an organization.
         */
        organization_hooks?: "read" | "write";
        /**
         * The level of permission to grant the access token for organization packages published to GitHub Packages.
         */
        organization_packages?: "read" | "write";
        /**
         * The level of permission to grant the access token for viewing an organization's plan.
         */
        organization_plan?: "read";
        /**
         * The level of permission to grant the access token to manage organization projects and projects beta (where available).
         */
        organization_projects?: "admin" | "read" | "write";
        /**
         * The level of permission to grant the access token to manage organization secrets.
         */
        organization_secrets?: "read" | "write";
        /**
         * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.
         */
        organization_self_hosted_runners?: "read" | "write";
        /**
         * The level of permission to grant the access token to view and manage users blocked by the organization.
         */
        organization_user_blocking?: "read" | "write";
        /**
         * The level of permission to grant the access token for packages published to GitHub Packages.
         */
        packages?: "read" | "write";
        /**
         * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
         */
        pages?: "read" | "write";
        /**
         * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.
         */
        pull_requests?: "read" | "write";
        /**
         * The level of permission to grant the access token to view and manage announcement banners for a repository.
         */
        repository_announcement_banners?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage the post-receive hooks for a repository.
         */
        repository_hooks?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage repository projects, columns, and cards.
         */
        repository_projects?: "admin" | "read" | "write";
        /**
         * The level of permission to grant the access token to view and manage secret scanning alerts.
         */
        secret_scanning_alerts?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage repository secrets.
         */
        secrets?: "read" | "write";
        /**
         * The level of permission to grant the access token to view and manage security events like code scanning alerts.
         */
        security_events?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage just a single file.
         */
        single_file?: "read" | "write";
        /**
         * The level of permission to grant the access token for commit statuses.
         */
        statuses?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage team discussions and related comments.
         */
        team_discussions?: "read" | "write";
        /**
         * The level of permission to grant the access token to manage Dependabot alerts.
         */
        vulnerability_alerts?: "read" | "write";
        /**
         * The level of permission to grant the access token to update GitHub Actions workflow files.
         */
        workflows?: "write";
      }

      /**
       * An artifact
       */
      interface Artifact {
        archive_download_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * Whether or not the artifact has expired.
         */
        expired: boolean;
        /**
         * @format date-time
         */
        expires_at: string;
        id: number;
        /**
         * The name of the artifact.
         */
        name: string;
        node_id: string;
        /**
         * The size in bytes of the artifact.
         */
        size_in_bytes: number;
        /**
         * @format date-time
         */
        updated_at: string;
        url: string;
        workflow_run?: {
          head_branch?: string;
          head_repository_id?: number;
          head_sha?: string;
          id?: number;
          repository_id?: number;
        };
      }

      /**
       * Assigned Issue Event
       */
      interface AssignedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        /**
         * A GitHub user.
         */
        assignee: $schemas.SimpleUser;
        /**
         * A GitHub user.
         */
        assigner: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.Integration;
        url: string;
      }

      /**
       * Authentication Token
       */
      interface AuthenticationToken {
        /**
         * The time this token expires
         * @format date-time
         */
        expires_at: string;
        permissions?: {};
        /**
         * The repositories this token has access to
         */
        repositories?: $schemas.Repository[];
        /**
         * Describe whether all repositories have been selected or there's a selection involved
         */
        repository_selection?: "all" | "selected";
        single_file?: string;
        /**
         * The token used for authentication
         */
        token: string;
      }

      /**
       * How the author is associated with the repository.
       */
      type AuthorAssociation =
        | "COLLABORATOR"
        | "CONTRIBUTOR"
        | "FIRST_TIMER"
        | "FIRST_TIME_CONTRIBUTOR"
        | "MANNEQUIN"
        | "MEMBER"
        | "NONE"
        | "OWNER";

      /**
       * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
       */
      interface Authorization {
        app: {
          client_id: string;
          name: string;
          /**
           * @format uri
           */
          url: string;
        };
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format date-time
         */
        expires_at: string;
        fingerprint: string;
        hashed_token: string;
        id: number;
        installation?: $schemas.NullableScopedInstallation;
        note: string;
        /**
         * @format uri
         */
        note_url: string;
        /**
         * A list of scopes that this authorization is in.
         */
        scopes: string[];
        token: string;
        token_last_eight: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user?: $schemas.NullableSimpleUser;
      }

      /**
       * The status of auto merging a pull request.
       */
      interface AutoMerge {
        /**
         * Commit message for the merge commit.
         */
        commit_message: string;
        /**
         * Title for the merge commit message.
         */
        commit_title: string;
        /**
         * A GitHub user.
         */
        enabled_by: $schemas.SimpleUser;
        /**
         * The merge method to use.
         */
        merge_method: "merge" | "rebase" | "squash";
      }

      /**
       * An autolink reference.
       */
      interface Autolink {
        id: number;
        /**
         * Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.
         */
        is_alphanumeric: boolean;
        /**
         * The prefix of a key that is linkified.
         */
        key_prefix: string;
        /**
         * A template for the target URL that is generated if a key was found.
         */
        url_template: string;
      }

      /**
       * Base Gist
       */
      interface BaseGist {
        comments: number;
        /**
         * @format uri
         */
        comments_url: string;
        /**
         * @format uri
         */
        commits_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        description: string;
        files: {
          [P: string]: {
            filename?: string;
            language?: string;
            raw_url?: string;
            size?: number;
            type?: string;
          };
        };
        forks?: any[];
        /**
         * @format uri
         */
        forks_url: string;
        /**
         * @format uri
         */
        git_pull_url: string;
        /**
         * @format uri
         */
        git_push_url: string;
        history?: any[];
        /**
         * @format uri
         */
        html_url: string;
        id: string;
        node_id: string;
        /**
         * A GitHub user.
         */
        owner?: $schemas.SimpleUser;
        public: boolean;
        truncated?: boolean;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      interface Blob {
        content: string;
        encoding: string;
        highlighted_content?: string;
        node_id: string;
        sha: string;
        size: number;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Branch Protection
       */
      interface BranchProtection {
        allow_deletions?: {
          enabled?: boolean;
        };
        allow_force_pushes?: {
          enabled?: boolean;
        };
        /**
         * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
         */
        allow_fork_syncing?: {
          enabled?: boolean;
        };
        block_creations?: {
          enabled?: boolean;
        };
        enabled?: boolean;
        /**
         * Protected Branch Admin Enforced
         */
        enforce_admins?: $schemas.ProtectedBranchAdminEnforced;
        /**
         * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
         */
        lock_branch?: {
          enabled?: boolean;
        };
        name?: string;
        protection_url?: string;
        required_conversation_resolution?: {
          enabled?: boolean;
        };
        required_linear_history?: {
          enabled?: boolean;
        };
        /**
         * Protected Branch Pull Request Review
         */
        required_pull_request_reviews?: $schemas.ProtectedBranchPullRequestReview;
        required_signatures?: {
          enabled: boolean;
          /**
           * @format uri
           */
          url: string;
        };
        /**
         * Protected Branch Required Status Check
         */
        required_status_checks?: $schemas.ProtectedBranchRequiredStatusCheck;
        /**
         * Branch Restriction Policy
         */
        restrictions?: $schemas.BranchRestrictionPolicy;
        url?: string;
      }

      /**
       * Branch Restriction Policy
       */
      interface BranchRestrictionPolicy {
        apps: Array<{
          created_at?: string;
          description?: string;
          events?: string[];
          external_url?: string;
          html_url?: string;
          id?: number;
          name?: string;
          node_id?: string;
          owner?: {
            avatar_url?: string;
            description?: string;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            hooks_url?: string;
            html_url?: string;
            id?: number;
            issues_url?: string;
            login?: string;
            members_url?: string;
            node_id?: string;
            organizations_url?: string;
            public_members_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: string;
            url?: string;
          };
          permissions?: {
            contents?: string;
            issues?: string;
            metadata?: string;
            single_file?: string;
          };
          slug?: string;
          updated_at?: string;
        }>;
        /**
         * @format uri
         */
        apps_url: string;
        teams: Array<{
          description?: string;
          html_url?: string;
          id?: number;
          members_url?: string;
          name?: string;
          node_id?: string;
          parent?: string;
          permission?: string;
          privacy?: string;
          repositories_url?: string;
          slug?: string;
          url?: string;
        }>;
        /**
         * @format uri
         */
        teams_url: string;
        /**
         * @format uri
         */
        url: string;
        users: Array<{
          avatar_url?: string;
          events_url?: string;
          followers_url?: string;
          following_url?: string;
          gists_url?: string;
          gravatar_id?: string;
          html_url?: string;
          id?: number;
          login?: string;
          node_id?: string;
          organizations_url?: string;
          received_events_url?: string;
          repos_url?: string;
          site_admin?: boolean;
          starred_url?: string;
          subscriptions_url?: string;
          type?: string;
          url?: string;
        }>;
        /**
         * @format uri
         */
        users_url: string;
      }

      /**
       * Branch Short
       */
      interface BranchShort {
        commit: {
          sha: string;
          url: string;
        };
        name: string;
        protected: boolean;
      }

      /**
       * Branch With Protection
       */
      interface BranchWithProtection {
        _links: {
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        /**
         * Commit
         */
        commit: $schemas.Commit;
        name: string;
        pattern?: string;
        protected: boolean;
        /**
         * Branch Protection
         */
        protection: $schemas.BranchProtection;
        /**
         * @format uri
         */
        protection_url: string;
        required_approving_review_count?: number;
      }

      /**
       * Check Annotation
       */
      interface CheckAnnotation {
        annotation_level: string;
        blob_href: string;
        end_column: number;
        end_line: number;
        message: string;
        path: string;
        raw_details: string;
        start_column: number;
        start_line: number;
        title: string;
      }

      /**
       * A check performed on the code of a given code change
       */
      interface CheckRun {
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        app: $schemas.NullableIntegration;
        check_suite: {
          id: number;
        };
        /**
         * @format date-time
         */
        completed_at: string;
        conclusion:
          | "action_required"
          | "cancelled"
          | "failure"
          | "neutral"
          | "skipped"
          | "success"
          | "timed_out";
        /**
         * A deployment created as the result of an Actions check run from a workflow that references an environment
         */
        deployment?: $schemas.DeploymentSimple;
        details_url: string;
        external_id: string;
        /**
         * The SHA of the commit that is being checked.
         */
        head_sha: string;
        html_url: string;
        /**
         * The id of the check.
         */
        id: number;
        /**
         * The name of the check.
         */
        name: string;
        node_id: string;
        output: {
          annotations_count: number;
          /**
           * @format uri
           */
          annotations_url: string;
          summary: string;
          text: string;
          title: string;
        };
        pull_requests: $schemas.PullRequestMinimal[];
        /**
         * @format date-time
         */
        started_at: string;
        /**
         * The phase of the lifecycle that the check is currently in.
         */
        status: "completed" | "in_progress" | "queued";
        url: string;
      }

      /**
       * A suite of checks performed on the code of a given code change
       */
      interface CheckSuite {
        after: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        app: $schemas.NullableIntegration;
        before: string;
        check_runs_url: string;
        conclusion:
          | "action_required"
          | "cancelled"
          | "failure"
          | "neutral"
          | "skipped"
          | "stale"
          | "startup_failure"
          | "success"
          | "timed_out"
          | null;
        /**
         * @format date-time
         */
        created_at: string;
        head_branch: string;
        /**
         * A commit.
         */
        head_commit: $schemas.SimpleCommit;
        /**
         * The SHA of the head commit that is being checked.
         */
        head_sha: string;
        id: number;
        latest_check_runs_count: number;
        node_id: string;
        pull_requests: $schemas.PullRequestMinimal[];
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        rerequestable?: boolean;
        runs_rerequestable?: boolean;
        status: "completed" | "in_progress" | "queued";
        /**
         * @format date-time
         */
        updated_at: string;
        url: string;
      }

      /**
       * Check suite configuration preferences for a repository.
       */
      interface CheckSuitePreference {
        preferences: {
          auto_trigger_checks?: Array<{
            app_id: number;
            setting: boolean;
          }>;
        };
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
      }

      /**
       * Clone Traffic
       */
      interface CloneTraffic {
        clones: $schemas.Traffic[];
        count: number;
        uniques: number;
      }

      /**
       * Code Frequency Stat
       */
      type CodeFrequencyStat = number[];

      /**
       * Code Of Conduct
       */
      interface CodeOfConduct {
        body?: string;
        /**
         * @format uri
         */
        html_url: string;
        key: string;
        name: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Code of Conduct Simple
       */
      interface CodeOfConductSimple {
        /**
         * @format uri
         */
        html_url: string;
        key: string;
        name: string;
        /**
         * @format uri
         */
        url: string;
      }

      interface CodeScanningAlert {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at: $schemas.AlertCreatedAt;
        /**
         * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        dismissed_at: $schemas.AlertDismissedAt;
        /**
         * A GitHub user.
         */
        dismissed_by: $schemas.NullableSimpleUser;
        /**
         * The dismissal comment associated with the dismissal of the alert.
         * @maxLength 280
         */
        dismissed_comment?: $schemas.CodeScanningAlertDismissedComment;
        /**
         * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
         */
        dismissed_reason: $schemas.CodeScanningAlertDismissedReason;
        /**
         * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        fixed_at?: $schemas.AlertFixedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url: $schemas.AlertHtmlUrl;
        /**
         * The REST API URL for fetching the list of instances for an alert.
         * @format uri
         */
        instances_url: $schemas.AlertInstancesUrl;
        most_recent_instance: $schemas.CodeScanningAlertInstance;
        /**
         * The security alert number.
         */
        number: $schemas.AlertNumber;
        rule: $schemas.CodeScanningAlertRule;
        /**
         * State of a code scanning alert.
         */
        state: $schemas.CodeScanningAlertState;
        tool: $schemas.CodeScanningAnalysisTool;
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at?: $schemas.AlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url: $schemas.AlertUrl;
      }

      /**
       * A classification of the file. For example to identify it as generated.
       */
      type CodeScanningAlertClassification =
        | "generated"
        | "library"
        | "source"
        | "test";

      /**
       * The dismissal comment associated with the dismissal of the alert.
       */
      type CodeScanningAlertDismissedComment = string;

      /**
       * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
       */
      type CodeScanningAlertDismissedReason =
        | "false positive"
        | "used in tests"
        | "won't fix"
        | null;

      /**
       * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
       */
      type CodeScanningAlertEnvironment = string;

      interface CodeScanningAlertInstance {
        /**
         * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
         */
        analysis_key?: $schemas.CodeScanningAnalysisAnalysisKey;
        /**
         * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
         */
        category?: $schemas.CodeScanningAnalysisCategory;
        /**
         * Classifications that have been applied to the file that triggered the alert.
         * For example identifying it as documentation, or a generated file.
         */
        classifications?: $schemas.CodeScanningAlertClassification[];
        commit_sha?: string;
        /**
         * Identifies the variable values associated with the environment in which the analysis that generated this alert instance was performed, such as the language that was analyzed.
         */
        environment?: $schemas.CodeScanningAlertEnvironment;
        html_url?: string;
        /**
         * Describe a region within a file for the alert.
         */
        location?: $schemas.CodeScanningAlertLocation;
        message?: {
          text?: string;
        };
        /**
         * The full Git reference, formatted as `refs/heads/<branch name>`,
         * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
         */
        ref?: $schemas.CodeScanningRef;
        /**
         * State of a code scanning alert.
         */
        state?: $schemas.CodeScanningAlertState;
      }

      interface CodeScanningAlertItems {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at: $schemas.AlertCreatedAt;
        /**
         * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        dismissed_at: $schemas.AlertDismissedAt;
        /**
         * A GitHub user.
         */
        dismissed_by: $schemas.NullableSimpleUser;
        /**
         * The dismissal comment associated with the dismissal of the alert.
         * @maxLength 280
         */
        dismissed_comment?: $schemas.CodeScanningAlertDismissedComment;
        /**
         * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
         */
        dismissed_reason: $schemas.CodeScanningAlertDismissedReason;
        /**
         * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        fixed_at?: $schemas.AlertFixedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url: $schemas.AlertHtmlUrl;
        /**
         * The REST API URL for fetching the list of instances for an alert.
         * @format uri
         */
        instances_url: $schemas.AlertInstancesUrl;
        most_recent_instance: $schemas.CodeScanningAlertInstance;
        /**
         * The security alert number.
         */
        number: $schemas.AlertNumber;
        rule: $schemas.CodeScanningAlertRuleSummary;
        /**
         * State of a code scanning alert.
         */
        state: $schemas.CodeScanningAlertState;
        tool: $schemas.CodeScanningAnalysisTool;
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at?: $schemas.AlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url: $schemas.AlertUrl;
      }

      /**
       * Describe a region within a file for the alert.
       */
      interface CodeScanningAlertLocation {
        end_column?: number;
        end_line?: number;
        path?: string;
        start_column?: number;
        start_line?: number;
      }

      interface CodeScanningAlertRule {
        /**
         * A short description of the rule used to detect the alert.
         */
        description?: string;
        /**
         * description of the rule used to detect the alert.
         */
        full_description?: string;
        /**
         * Detailed documentation for the rule as GitHub Flavored Markdown.
         */
        help?: string;
        /**
         * A link to the documentation for the rule used to detect the alert.
         */
        help_uri?: string;
        /**
         * A unique identifier for the rule used to detect the alert.
         */
        id?: string;
        /**
         * The name of the rule used to detect the alert.
         */
        name?: string;
        /**
         * The security severity of the alert.
         */
        security_severity_level?: "critical" | "high" | "low" | "medium";
        /**
         * The severity of the alert.
         */
        severity?: "error" | "none" | "note" | "warning";
        /**
         * A set of tags applicable for the rule.
         */
        tags?: string[];
      }

      interface CodeScanningAlertRuleSummary {
        /**
         * A short description of the rule used to detect the alert.
         */
        description?: string;
        /**
         * A unique identifier for the rule used to detect the alert.
         */
        id?: string;
        /**
         * The name of the rule used to detect the alert.
         */
        name?: string;
        /**
         * The severity of the alert.
         */
        severity?: "error" | "none" | "note" | "warning";
        /**
         * A set of tags applicable for the rule.
         */
        tags?: string[];
      }

      /**
       * Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.
       */
      type CodeScanningAlertSetState = "dismissed" | "open";

      /**
       * Severity of a code scanning alert.
       */
      type CodeScanningAlertSeverity =
        | "critical"
        | "error"
        | "high"
        | "low"
        | "medium"
        | "note"
        | "warning";

      /**
       * State of a code scanning alert.
       */
      type CodeScanningAlertState = "closed" | "dismissed" | "fixed" | "open";

      interface CodeScanningAnalysis {
        /**
         * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
         */
        analysis_key: $schemas.CodeScanningAnalysisAnalysisKey;
        /**
         * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
         */
        category?: $schemas.CodeScanningAnalysisCategory;
        /**
         * The SHA of the commit to which the analysis you are uploading relates.
         * @maxLength 40
         * @minLength 40
         */
        commit_sha: $schemas.CodeScanningAnalysisCommitSha;
        /**
         * The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at: $schemas.CodeScanningAnalysisCreatedAt;
        deletable: boolean;
        /**
         * Identifies the variable values associated with the environment in which this analysis was performed.
         */
        environment: $schemas.CodeScanningAnalysisEnvironment;
        error: string;
        /**
         * Unique identifier for this analysis.
         */
        id: number;
        /**
         * The full Git reference, formatted as `refs/heads/<branch name>`,
         * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
         */
        ref: $schemas.CodeScanningRef;
        /**
         * The total number of results in the analysis.
         */
        results_count: number;
        /**
         * The total number of rules used in the analysis.
         */
        rules_count: number;
        /**
         * An identifier for the upload.
         */
        sarif_id: $schemas.CodeScanningAnalysisSarifId;
        tool: $schemas.CodeScanningAnalysisTool;
        /**
         * The REST API URL of the analysis resource.
         * @format uri
         */
        url: $schemas.CodeScanningAnalysisUrl;
        /**
         * Warning generated when processing the analysis
         */
        warning: string;
      }

      /**
       * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
       */
      type CodeScanningAnalysisAnalysisKey = string;

      /**
       * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
       */
      type CodeScanningAnalysisCategory = string;

      /**
       * The SHA of the commit to which the analysis you are uploading relates.
       */
      type CodeScanningAnalysisCommitSha = string;

      /**
       * The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      type CodeScanningAnalysisCreatedAt = string;

      /**
       * Successful deletion of a code scanning analysis
       */
      interface CodeScanningAnalysisDeletion {
        /**
         * Next deletable analysis in chain, with last analysis deletion confirmation
         * @format uri
         */
        confirm_delete_url: string;
        /**
         * Next deletable analysis in chain, without last analysis deletion confirmation
         * @format uri
         */
        next_analysis_url: string;
      }

      /**
       * Identifies the variable values associated with the environment in which this analysis was performed.
       */
      type CodeScanningAnalysisEnvironment = string;

      /**
       * A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning)."
       */
      type CodeScanningAnalysisSarifFile = string;

      /**
       * An identifier for the upload.
       */
      type CodeScanningAnalysisSarifId = string;

      interface CodeScanningAnalysisTool {
        /**
         * The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.
         */
        guid?: $schemas.CodeScanningAnalysisToolGuid;
        /**
         * The name of the tool used to generate the code scanning analysis.
         */
        name?: $schemas.CodeScanningAnalysisToolName;
        /**
         * The version of the tool used to generate the code scanning analysis.
         */
        version?: $schemas.CodeScanningAnalysisToolVersion;
      }

      /**
       * The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.
       */
      type CodeScanningAnalysisToolGuid = string;

      /**
       * The name of the tool used to generate the code scanning analysis.
       */
      type CodeScanningAnalysisToolName = string;

      /**
       * The version of the tool used to generate the code scanning analysis.
       */
      type CodeScanningAnalysisToolVersion = string;

      /**
       * The REST API URL of the analysis resource.
       */
      type CodeScanningAnalysisUrl = string;

      /**
       * A CodeQL database.
       */
      interface CodeScanningCodeqlDatabase {
        /**
         * The MIME type of the CodeQL database file.
         */
        content_type: string;
        /**
         * The date and time at which the CodeQL database was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        created_at: string;
        /**
         * The ID of the CodeQL database.
         */
        id: number;
        /**
         * The language of the CodeQL database.
         */
        language: string;
        /**
         * The name of the CodeQL database.
         */
        name: string;
        /**
         * The size of the CodeQL database file in bytes.
         */
        size: number;
        /**
         * The date and time at which the CodeQL database was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        updated_at: string;
        /**
         * A GitHub user.
         */
        uploader: $schemas.SimpleUser;
        /**
         * The URL at which to download the CodeQL database. The `Accept` header must be set to the value of the `content_type` property.
         * @format uri
         */
        url: string;
      }

      interface CodeScanningOrganizationAlertItems {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at: $schemas.AlertCreatedAt;
        /**
         * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        dismissed_at: $schemas.AlertDismissedAt;
        /**
         * A GitHub user.
         */
        dismissed_by: $schemas.NullableSimpleUser;
        /**
         * The dismissal comment associated with the dismissal of the alert.
         * @maxLength 280
         */
        dismissed_comment?: $schemas.CodeScanningAlertDismissedComment;
        /**
         * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
         */
        dismissed_reason: $schemas.CodeScanningAlertDismissedReason;
        /**
         * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        fixed_at?: $schemas.AlertFixedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url: $schemas.AlertHtmlUrl;
        /**
         * The REST API URL for fetching the list of instances for an alert.
         * @format uri
         */
        instances_url: $schemas.AlertInstancesUrl;
        most_recent_instance: $schemas.CodeScanningAlertInstance;
        /**
         * The security alert number.
         */
        number: $schemas.AlertNumber;
        /**
         * A GitHub repository.
         */
        repository: $schemas.SimpleRepository;
        rule: $schemas.CodeScanningAlertRule;
        /**
         * State of a code scanning alert.
         */
        state: $schemas.CodeScanningAlertState;
        tool: $schemas.CodeScanningAnalysisTool;
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at?: $schemas.AlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url: $schemas.AlertUrl;
      }

      /**
       * The full Git reference, formatted as `refs/heads/<branch name>`,
       * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
       */
      type CodeScanningRef = string;

      interface CodeScanningSarifsReceipt {
        /**
         * An identifier for the upload.
         */
        id?: $schemas.CodeScanningAnalysisSarifId;
        /**
         * The REST API URL for checking the status of the upload.
         * @format uri
         */
        url?: string;
      }

      interface CodeScanningSarifsStatus {
        /**
         * The REST API URL for getting the analyses associated with the upload.
         * @format uri
         */
        analyses_url?: string;
        /**
         * Any errors that ocurred during processing of the delivery.
         */
        errors?: string[];
        /**
         * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
         */
        processing_status?: "complete" | "failed" | "pending";
      }

      /**
       * Code Search Result Item
       */
      interface CodeSearchResultItem {
        file_size?: number;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        language?: string;
        /**
         * @format date-time
         */
        last_modified_at?: string;
        line_numbers?: string[];
        name: string;
        path: string;
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        score: number;
        sha: string;
        text_matches?: $schemas.SearchResultTextMatches;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A list of errors found in a repo's CODEOWNERS file
       */
      interface CodeownersErrors {
        errors: Array<{
          /**
           * The column number where this errors occurs.
           */
          column: number;
          /**
           * The type of error.
           */
          kind: string;
          /**
           * The line number where this errors occurs.
           */
          line: number;
          /**
           * A human-readable description of the error, combining information from multiple fields, laid out for display in a monospaced typeface (for example, a command-line setting).
           */
          message: string;
          /**
           * The path of the file where the error occured.
           */
          path: string;
          /**
           * The contents of the line where the error occurs.
           */
          source?: string;
          /**
           * Suggested action to fix the error. This will usually be `null`, but is provided for some common errors.
           */
          suggestion?: string;
        }>;
      }

      /**
       * A codespace.
       */
      interface Codespace {
        /**
         * A GitHub user.
         */
        billable_owner: $schemas.SimpleUser;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * Path to devcontainer.json from repo root used to create Codespace.
         */
        devcontainer_path?: string;
        /**
         * Display name for this codespace.
         */
        display_name?: string;
        /**
         * UUID identifying this codespace's environment.
         */
        environment_id: string;
        /**
         * Details about the codespace's git repository.
         */
        git_status: {
          /**
           * The number of commits the local repository is ahead of the remote.
           */
          ahead?: number;
          /**
           * The number of commits the local repository is behind the remote.
           */
          behind?: number;
          /**
           * Whether the local repository has uncommitted changes.
           */
          has_uncommitted_changes?: boolean;
          /**
           * Whether the local repository has unpushed changes.
           */
          has_unpushed_changes?: boolean;
          /**
           * The current branch (or SHA if in detached HEAD state) of the local repository.
           */
          ref?: string;
        };
        id: number;
        /**
         * The number of minutes of inactivity after which this codespace will be automatically stopped.
         */
        idle_timeout_minutes: number;
        /**
         * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
         */
        idle_timeout_notice?: string;
        /**
         * The text to display to a user when a codespace has been stopped for a potentially actionable reason.
         */
        last_known_stop_notice?: string;
        /**
         * Last known time this codespace was started.
         * @format date-time
         */
        last_used_at: string;
        /**
         * The Azure region where this codespace is located.
         */
        location: "EastUs" | "SouthEastAsia" | "WestEurope" | "WestUs2";
        /**
         * A description of the machine powering a codespace.
         */
        machine: $schemas.NullableCodespaceMachine;
        /**
         * API URL to access available alternate machine types for this codespace.
         * @format uri
         */
        machines_url: string;
        /**
         * Automatically generated name of this codespace.
         */
        name: string;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        /**
         * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
         */
        pending_operation?: boolean;
        /**
         * Text to show user when codespace is disabled by a pending operation
         */
        pending_operation_disabled_reason?: string;
        /**
         * Whether the codespace was created from a prebuild.
         */
        prebuild: boolean;
        /**
         * API URL to publish this codespace to a new repository.
         * @format uri
         */
        publish_url?: string;
        /**
         * API URL for the Pull Request associated with this codespace, if any.
         * @format uri
         */
        pulls_url: string;
        recent_folders: string[];
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        /**
         * When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at"
         * @format date-time
         */
        retention_expires_at?: string;
        /**
         * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
         */
        retention_period_minutes?: number;
        runtime_constraints?: {
          /**
           * The privacy settings a user can select from when forwarding a port.
           */
          allowed_port_privacy_settings?: string[];
        };
        /**
         * API URL to start this codespace.
         * @format uri
         */
        start_url: string;
        /**
         * State of this codespace.
         */
        state:
          | "Archived"
          | "Available"
          | "Awaiting"
          | "Created"
          | "Deleted"
          | "Exporting"
          | "Failed"
          | "Moved"
          | "Provisioning"
          | "Queued"
          | "Rebuilding"
          | "Shutdown"
          | "ShuttingDown"
          | "Starting"
          | "Unavailable"
          | "Unknown"
          | "Updating";
        /**
         * API URL to stop this codespace.
         * @format uri
         */
        stop_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * API URL for this codespace.
         * @format uri
         */
        url: string;
        /**
         * URL to access this codespace on the web.
         * @format uri
         */
        web_url: string;
      }

      /**
       * An export of a codespace. Also, latest export details for a codespace can be fetched with id = latest
       */
      interface CodespaceExportDetails {
        /**
         * Name of the exported branch
         */
        branch?: string;
        /**
         * Completion time of the last export operation
         * @format date-time
         */
        completed_at?: string;
        /**
         * Url for fetching export details
         */
        export_url?: string;
        /**
         * Web url for the exported branch
         */
        html_url?: string;
        /**
         * Id for the export details
         */
        id?: string;
        /**
         * Git commit SHA of the exported branch
         */
        sha?: string;
        /**
         * State of the latest export
         */
        state?: string;
      }

      /**
       * A description of the machine powering a codespace.
       */
      interface CodespaceMachine {
        /**
         * How many cores are available to the codespace.
         */
        cpus: number;
        /**
         * The display name of the machine includes cores, memory, and storage.
         */
        display_name: string;
        /**
         * How much memory is available to the codespace.
         */
        memory_in_bytes: number;
        /**
         * The name of the machine.
         */
        name: string;
        /**
         * The operating system of the machine.
         */
        operating_system: string;
        /**
         * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
         */
        prebuild_availability: "in_progress" | "none" | "ready";
        /**
         * How much storage is available to the codespace.
         */
        storage_in_bytes: number;
      }

      /**
       * A codespace.
       */
      interface CodespaceWithFullRepository {
        /**
         * A GitHub user.
         */
        billable_owner: $schemas.SimpleUser;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * Path to devcontainer.json from repo root used to create Codespace.
         */
        devcontainer_path?: string;
        /**
         * Display name for this codespace.
         */
        display_name?: string;
        /**
         * UUID identifying this codespace's environment.
         */
        environment_id: string;
        /**
         * Details about the codespace's git repository.
         */
        git_status: {
          /**
           * The number of commits the local repository is ahead of the remote.
           */
          ahead?: number;
          /**
           * The number of commits the local repository is behind the remote.
           */
          behind?: number;
          /**
           * Whether the local repository has uncommitted changes.
           */
          has_uncommitted_changes?: boolean;
          /**
           * Whether the local repository has unpushed changes.
           */
          has_unpushed_changes?: boolean;
          /**
           * The current branch (or SHA if in detached HEAD state) of the local repository.
           */
          ref?: string;
        };
        id: number;
        /**
         * The number of minutes of inactivity after which this codespace will be automatically stopped.
         */
        idle_timeout_minutes: number;
        /**
         * Text to show user when codespace idle timeout minutes has been overriden by an organization policy
         */
        idle_timeout_notice?: string;
        /**
         * Last known time this codespace was started.
         * @format date-time
         */
        last_used_at: string;
        /**
         * The Azure region where this codespace is located.
         */
        location: "EastUs" | "SouthEastAsia" | "WestEurope" | "WestUs2";
        /**
         * A description of the machine powering a codespace.
         */
        machine: $schemas.NullableCodespaceMachine;
        /**
         * API URL to access available alternate machine types for this codespace.
         * @format uri
         */
        machines_url: string;
        /**
         * Automatically generated name of this codespace.
         */
        name: string;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        /**
         * Whether or not a codespace has a pending async operation. This would mean that the codespace is temporarily unavailable. The only thing that you can do with a codespace in this state is delete it.
         */
        pending_operation?: boolean;
        /**
         * Text to show user when codespace is disabled by a pending operation
         */
        pending_operation_disabled_reason?: string;
        /**
         * Whether the codespace was created from a prebuild.
         */
        prebuild: boolean;
        /**
         * API URL to publish this codespace to a new repository.
         * @format uri
         */
        publish_url?: string;
        /**
         * API URL for the Pull Request associated with this codespace, if any.
         * @format uri
         */
        pulls_url: string;
        recent_folders: string[];
        /**
         * Full Repository
         */
        repository: $schemas.FullRepository;
        /**
         * When a codespace will be auto-deleted based on the "retention_period_minutes" and "last_used_at"
         * @format date-time
         */
        retention_expires_at?: string;
        /**
         * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
         */
        retention_period_minutes?: number;
        runtime_constraints?: {
          /**
           * The privacy settings a user can select from when forwarding a port.
           */
          allowed_port_privacy_settings?: string[];
        };
        /**
         * API URL to start this codespace.
         * @format uri
         */
        start_url: string;
        /**
         * State of this codespace.
         */
        state:
          | "Archived"
          | "Available"
          | "Awaiting"
          | "Created"
          | "Deleted"
          | "Exporting"
          | "Failed"
          | "Moved"
          | "Provisioning"
          | "Queued"
          | "Rebuilding"
          | "Shutdown"
          | "ShuttingDown"
          | "Starting"
          | "Unavailable"
          | "Unknown"
          | "Updating";
        /**
         * API URL to stop this codespace.
         * @format uri
         */
        stop_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * API URL for this codespace.
         * @format uri
         */
        url: string;
        /**
         * URL to access this codespace on the web.
         * @format uri
         */
        web_url: string;
      }

      /**
       * Secrets for a GitHub Codespace.
       */
      interface CodespacesOrgSecret {
        /**
         * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret
         */
        name: string;
        /**
         * The API URL at which the list of repositories this secret is visible to can be retrieved
         * @format uri
         */
        selected_repositories_url?: string;
        /**
         * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        updated_at: string;
        /**
         * The type of repositories in the organization that the secret is visible to
         */
        visibility: "all" | "private" | "selected";
      }

      /**
       * The public key used for setting Codespaces secrets.
       */
      interface CodespacesPublicKey {
        created_at?: string;
        id?: number;
        /**
         * The Base64 encoded public key.
         */
        key: string;
        /**
         * The identifier for the key.
         */
        key_id: string;
        title?: string;
        url?: string;
      }

      /**
       * Secrets for a GitHub Codespace.
       */
      interface CodespacesSecret {
        /**
         * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret
         */
        name: string;
        /**
         * The API URL at which the list of repositories this secret is visible to can be retrieved
         * @format uri
         */
        selected_repositories_url: string;
        /**
         * The date and time at which the secret was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        updated_at: string;
        /**
         * The type of repositories in the organization that the secret is visible to
         */
        visibility: "all" | "private" | "selected";
      }

      /**
       * The public key used for setting user Codespaces' Secrets.
       */
      interface CodespacesUserPublicKey {
        /**
         * The Base64 encoded public key.
         */
        key: string;
        /**
         * The identifier for the key.
         */
        key_id: string;
      }

      interface Collaborator {
        /**
         * @format uri
         */
        avatar_url: string;
        email?: string;
        events_url: string;
        /**
         * @format uri
         */
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        login: string;
        name?: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        role_name: string;
        site_admin: boolean;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      interface CombinedBillingUsage {
        /**
         * Numbers of days left in billing cycle.
         */
        days_left_in_billing_cycle: number;
        /**
         * Estimated storage space (GB) used in billing cycle.
         */
        estimated_paid_storage_for_month: number;
        /**
         * Estimated sum of free and paid storage space (GB) used in billing cycle.
         */
        estimated_storage_for_month: number;
      }

      /**
       * Combined Commit Status
       */
      interface CombinedCommitStatus {
        /**
         * @format uri
         */
        commit_url: string;
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        sha: string;
        state: string;
        statuses: $schemas.SimpleCommitStatus[];
        total_count: number;
        /**
         * @format uri
         */
        url: string;
      }

      interface Commit {
        /**
         * A GitHub user.
         */
        author: $schemas.NullableSimpleUser;
        /**
         * @format uri
         */
        comments_url: string;
        commit: {
          /**
           * Metaproperties for Git author/committer information.
           */
          author: $schemas.NullableGitUser;
          comment_count: number;
          /**
           * Metaproperties for Git author/committer information.
           */
          committer: $schemas.NullableGitUser;
          message: string;
          tree: {
            sha: string;
            /**
             * @format uri
             */
            url: string;
          };
          /**
           * @format uri
           */
          url: string;
          verification?: $schemas.Verification;
        };
        /**
         * A GitHub user.
         */
        committer: $schemas.NullableSimpleUser;
        files?: $schemas.DiffEntry[];
        /**
         * @format uri
         */
        html_url: string;
        node_id: string;
        parents: Array<{
          /**
           * @format uri
           */
          html_url?: string;
          sha: string;
          /**
           * @format uri
           */
          url: string;
        }>;
        sha: string;
        stats?: {
          additions?: number;
          deletions?: number;
          total?: number;
        };
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Commit Activity
       */
      interface CommitActivity {
        days: number[];
        total: number;
        week: number;
      }

      /**
       * Commit Comment
       */
      interface CommitComment {
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        body: string;
        commit_id: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        line: number;
        node_id: string;
        path: string;
        position: number;
        reactions?: $schemas.ReactionRollup;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Commit Comparison
       */
      interface CommitComparison {
        ahead_by: number;
        /**
         * Commit
         */
        base_commit: $schemas.Commit;
        behind_by: number;
        commits: $schemas.Commit[];
        /**
         * @format uri
         */
        diff_url: string;
        files?: $schemas.DiffEntry[];
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Commit
         */
        merge_base_commit: $schemas.Commit;
        /**
         * @format uri
         */
        patch_url: string;
        /**
         * @format uri
         */
        permalink_url: string;
        status: "ahead" | "behind" | "diverged" | "identical";
        total_commits: number;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Commit Search Result Item
       */
      interface CommitSearchResultItem {
        /**
         * A GitHub user.
         */
        author: $schemas.NullableSimpleUser;
        /**
         * @format uri
         */
        comments_url: string;
        commit: {
          author: {
            /**
             * @format date-time
             */
            date: string;
            email: string;
            name: string;
          };
          comment_count: number;
          /**
           * Metaproperties for Git author/committer information.
           */
          committer: $schemas.NullableGitUser;
          message: string;
          tree: {
            sha: string;
            /**
             * @format uri
             */
            url: string;
          };
          /**
           * @format uri
           */
          url: string;
          verification?: $schemas.Verification;
        };
        /**
         * Metaproperties for Git author/committer information.
         */
        committer: $schemas.NullableGitUser;
        /**
         * @format uri
         */
        html_url: string;
        node_id: string;
        parents: Array<{
          html_url?: string;
          sha?: string;
          url?: string;
        }>;
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        score: number;
        sha: string;
        text_matches?: $schemas.SearchResultTextMatches;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Community Profile
       */
      interface CommunityProfile {
        content_reports_enabled?: boolean;
        description: string;
        documentation: string;
        files: {
          /**
           * Code of Conduct Simple
           */
          code_of_conduct: $schemas.NullableCodeOfConductSimple;
          code_of_conduct_file: $schemas.NullableCommunityHealthFile;
          contributing: $schemas.NullableCommunityHealthFile;
          issue_template: $schemas.NullableCommunityHealthFile;
          /**
           * License Simple
           */
          license: $schemas.NullableLicenseSimple;
          pull_request_template: $schemas.NullableCommunityHealthFile;
          readme: $schemas.NullableCommunityHealthFile;
        };
        health_percentage: number;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      /**
       * A list of directory items
       */
      type ContentDirectory = Array<{
        _links: {
          /**
           * @format uri
           */
          git: string;
          /**
           * @format uri
           */
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        content?: string;
        /**
         * @format uri
         */
        download_url: string;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        name: string;
        path: string;
        sha: string;
        size: number;
        type: "dir" | "file" | "submodule" | "symlink";
        /**
         * @format uri
         */
        url: string;
      }>;

      /**
       * Content File
       */
      interface ContentFile {
        _links: {
          /**
           * @format uri
           */
          git: string;
          /**
           * @format uri
           */
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        content: string;
        /**
         * @format uri
         */
        download_url: string;
        encoding: string;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        name: string;
        path: string;
        sha: string;
        size: number;
        submodule_git_url?: string;
        target?: string;
        type: "file";
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * An object describing a submodule
       */
      interface ContentSubmodule {
        _links: {
          /**
           * @format uri
           */
          git: string;
          /**
           * @format uri
           */
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        /**
         * @format uri
         */
        download_url: string;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        name: string;
        path: string;
        sha: string;
        size: number;
        /**
         * @format uri
         */
        submodule_git_url: string;
        type: "submodule";
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * An object describing a symlink
       */
      interface ContentSymlink {
        _links: {
          /**
           * @format uri
           */
          git: string;
          /**
           * @format uri
           */
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        /**
         * @format uri
         */
        download_url: string;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        name: string;
        path: string;
        sha: string;
        size: number;
        target: string;
        type: "symlink";
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Content Traffic
       */
      interface ContentTraffic {
        count: number;
        path: string;
        title: string;
        uniques: number;
      }

      /**
       * Content Tree
       */
      interface ContentTree {
        _links: {
          /**
           * @format uri
           */
          git: string;
          /**
           * @format uri
           */
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        content: any;
        /**
         * @format uri
         */
        download_url: string;
        encoding: any;
        entries?: Array<{
          _links: {
            /**
             * @format uri
             */
            git: string;
            /**
             * @format uri
             */
            html: string;
            /**
             * @format uri
             */
            self: string;
          };
          content?: string;
          /**
           * @format uri
           */
          download_url: string;
          /**
           * @format uri
           */
          git_url: string;
          /**
           * @format uri
           */
          html_url: string;
          name: string;
          path: string;
          sha: string;
          size: number;
          type: string;
          /**
           * @format uri
           */
          url: string;
        }>;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        name: string;
        path: string;
        sha: string;
        size: number;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      interface Contributor {
        /**
         * @format uri
         */
        avatar_url?: string;
        contributions: number;
        email?: string;
        events_url?: string;
        /**
         * @format uri
         */
        followers_url?: string;
        following_url?: string;
        gists_url?: string;
        gravatar_id?: string;
        /**
         * @format uri
         */
        html_url?: string;
        id?: number;
        login?: string;
        name?: string;
        node_id?: string;
        /**
         * @format uri
         */
        organizations_url?: string;
        /**
         * @format uri
         */
        received_events_url?: string;
        /**
         * @format uri
         */
        repos_url?: string;
        site_admin?: boolean;
        starred_url?: string;
        /**
         * @format uri
         */
        subscriptions_url?: string;
        type: string;
        /**
         * @format uri
         */
        url?: string;
      }

      /**
       * Contributor Activity
       */
      interface ContributorActivity {
        /**
         * A GitHub user.
         */
        author: $schemas.NullableSimpleUser;
        total: number;
        weeks: Array<{
          a?: number;
          c?: number;
          d?: number;
          w?: number;
        }>;
      }

      /**
       * Converted Note to Issue Issue Event
       */
      interface ConvertedNoteToIssueIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.Integration;
        project_card?: {
          column_name: string;
          id: number;
          previous_column_name?: string;
          project_id: number;
          /**
           * @format uri
           */
          project_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        url: string;
      }

      /**
       * Demilestoned Issue Event
       */
      interface DemilestonedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        milestone: {
          title: string;
        };
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * A Dependabot alert.
       */
      interface DependabotAlert {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at: $schemas.AlertCreatedAt;
        /**
         * Details for the vulnerable dependency.
         */
        dependency: {
          /**
           * The full path to the dependency manifest file, relative to the root of the repository.
           */
          manifest_path?: string;
          /**
           * Details for the vulnerable package.
           */
          package?: $schemas.DependabotAlertPackage;
          /**
           * The execution scope of the vulnerable dependency.
           */
          scope?: "development" | "runtime";
        };
        /**
         * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        dismissed_at: $schemas.AlertDismissedAt;
        /**
         * A GitHub user.
         */
        dismissed_by: $schemas.NullableSimpleUser;
        /**
         * An optional comment associated with the alert's dismissal.
         * @maxLength 280
         */
        dismissed_comment: string;
        /**
         * The reason that the alert was dismissed.
         */
        dismissed_reason:
          | "fix_started"
          | "inaccurate"
          | "no_bandwidth"
          | "not_used"
          | "tolerable_risk";
        /**
         * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        fixed_at: $schemas.AlertFixedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url: $schemas.AlertHtmlUrl;
        /**
         * The security alert number.
         */
        number: $schemas.AlertNumber;
        /**
         * Details for the GitHub Security Advisory.
         */
        security_advisory: $schemas.DependabotAlertSecurityAdvisory;
        /**
         * Details pertaining to one vulnerable version range for the advisory.
         */
        security_vulnerability: $schemas.DependabotAlertSecurityVulnerability;
        /**
         * The state of the Dependabot alert.
         */
        state: "dismissed" | "fixed" | "open";
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at: $schemas.AlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url: $schemas.AlertUrl;
      }

      /**
       * Details for the vulnerable package.
       */
      interface DependabotAlertPackage {
        /**
         * The package's language or package management ecosystem.
         */
        ecosystem: string;
        /**
         * The unique package name within its ecosystem.
         */
        name: string;
      }

      /**
       * Details for the GitHub Security Advisory.
       */
      interface DependabotAlertSecurityAdvisory {
        /**
         * The unique CVE ID assigned to the advisory.
         */
        cve_id: string;
        /**
         * Details for the advisory pertaining to the Common Vulnerability Scoring System.
         */
        cvss: {
          /**
           * The overall CVSS score of the advisory.
           * @maximum 10
           */
          score: number;
          /**
           * The full CVSS vector string for the advisory.
           */
          vector_string: string;
        };
        /**
         * Details for the advisory pertaining to Common Weakness Enumeration.
         */
        cwes: Array<{
          /**
           * The unique CWE ID.
           */
          cwe_id: string;
          /**
           * The short, plain text name of the CWE.
           */
          name: string;
        }>;
        /**
         * A long-form Markdown-supported description of the advisory.
         */
        description: string;
        /**
         * The unique GitHub Security Advisory ID assigned to the advisory.
         */
        ghsa_id: string;
        /**
         * Values that identify this advisory among security information sources.
         */
        identifiers: Array<{
          /**
           * The type of advisory identifier.
           */
          type: "CVE" | "GHSA";
          /**
           * The value of the advisory identifer.
           */
          value: string;
        }>;
        /**
         * The time that the advisory was published in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        published_at: string;
        /**
         * Links to additional advisory information.
         */
        references: Array<{
          /**
           * The URL of the reference.
           * @format uri
           */
          url: string;
        }>;
        /**
         * The severity of the advisory.
         */
        severity: "critical" | "high" | "low" | "medium";
        /**
         * A short, plain text summary of the advisory.
         * @maxLength 1024
         */
        summary: string;
        /**
         * The time that the advisory was last modified in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at: string;
        /**
         * Vulnerable version range information for the advisory.
         */
        vulnerabilities: $schemas.DependabotAlertSecurityVulnerability[];
        /**
         * The time that the advisory was withdrawn in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        withdrawn_at: string;
      }

      /**
       * Details pertaining to one vulnerable version range for the advisory.
       */
      interface DependabotAlertSecurityVulnerability {
        /**
         * Details pertaining to the package version that patches this vulnerability.
         */
        first_patched_version: {
          /**
           * The package version that patches this vulnerability.
           */
          identifier: string;
        };
        /**
         * Details for the vulnerable package.
         */
        package: $schemas.DependabotAlertPackage;
        /**
         * The severity of the vulnerability.
         */
        severity: "critical" | "high" | "low" | "medium";
        /**
         * Conditions that identify vulnerable versions of this vulnerability's package.
         */
        vulnerable_version_range: string;
      }

      /**
       * A Dependabot alert.
       */
      interface DependabotAlertWithRepository {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at: $schemas.AlertCreatedAt;
        /**
         * Details for the vulnerable dependency.
         */
        dependency: {
          /**
           * The full path to the dependency manifest file, relative to the root of the repository.
           */
          manifest_path?: string;
          /**
           * Details for the vulnerable package.
           */
          package?: $schemas.DependabotAlertPackage;
          /**
           * The execution scope of the vulnerable dependency.
           */
          scope?: "development" | "runtime";
        };
        /**
         * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        dismissed_at: $schemas.AlertDismissedAt;
        /**
         * A GitHub user.
         */
        dismissed_by: $schemas.NullableSimpleUser;
        /**
         * An optional comment associated with the alert's dismissal.
         * @maxLength 280
         */
        dismissed_comment: string;
        /**
         * The reason that the alert was dismissed.
         */
        dismissed_reason:
          | "fix_started"
          | "inaccurate"
          | "no_bandwidth"
          | "not_used"
          | "tolerable_risk";
        /**
         * The time that the alert was no longer detected and was considered fixed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        fixed_at: $schemas.AlertFixedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url: $schemas.AlertHtmlUrl;
        /**
         * The security alert number.
         */
        number: $schemas.AlertNumber;
        /**
         * A GitHub repository.
         */
        repository: $schemas.SimpleRepository;
        /**
         * Details for the GitHub Security Advisory.
         */
        security_advisory: $schemas.DependabotAlertSecurityAdvisory;
        /**
         * Details pertaining to one vulnerable version range for the advisory.
         */
        security_vulnerability: $schemas.DependabotAlertSecurityVulnerability;
        /**
         * The state of the Dependabot alert.
         */
        state: "dismissed" | "fixed" | "open";
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at: $schemas.AlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url: $schemas.AlertUrl;
      }

      /**
       * The public key used for setting Dependabot Secrets.
       */
      interface DependabotPublicKey {
        /**
         * The Base64 encoded public key.
         */
        key: string;
        /**
         * The identifier for the key.
         */
        key_id: string;
      }

      /**
       * Set secrets for Dependabot.
       */
      interface DependabotSecret {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret.
         */
        name: string;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      interface Dependency {
        /**
         * Array of package-url (PURLs) of direct child dependencies.
         */
        dependencies?: string[];
        /**
         * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
         * @maxProperties 8
         */
        metadata?: $schemas.Metadata;
        /**
         * Package-url (PURL) of dependency. See https://github.com/package-url/purl-spec for more details.
         */
        package_url?: string;
        /**
         * A notation of whether a dependency is requested directly by this manifest or is a dependency of another dependency.
         */
        relationship?: "direct" | "indirect";
        /**
         * A notation of whether the dependency is required for the primary build artifact (runtime) or is only used for development. Future versions of this specification may allow for more granular scopes.
         */
        scope?: "development" | "runtime";
      }

      /**
       * A diff of the dependencies between two commits.
       */
      type DependencyGraphDiff = Array<{
        change_type: "added" | "removed";
        ecosystem: string;
        license: string;
        manifest: string;
        name: string;
        package_url: string;
        /**
         * Where the dependency is utilized. `development` means that the dependency is only utilized in the development environment. `runtime` means that the dependency is utilized at runtime and in the development environment.
         */
        scope: "development" | "runtime" | "unknown";
        source_repository_url: string;
        version: string;
        vulnerabilities: Array<{
          advisory_ghsa_id: string;
          advisory_summary: string;
          advisory_url: string;
          severity: string;
        }>;
      }>;

      /**
       * An SSH key granting access to a single repository.
       */
      interface DeployKey {
        added_by?: string;
        created_at: string;
        id: number;
        key: string;
        last_used?: string;
        read_only: boolean;
        title: string;
        url: string;
        verified: boolean;
      }

      /**
       * A request for a specific ref(branch,sha,tag) to be deployed
       */
      interface Deployment {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        description: string;
        /**
         * Name for the target deployment environment.
         */
        environment: string;
        /**
         * Unique identifier of the deployment
         */
        id: number;
        node_id: string;
        original_environment?: string;
        payload:
          | {
              [P: string]: any;
            }
          | string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        /**
         * Specifies if the given environment is one that end-users directly interact with. Default: false.
         */
        production_environment?: boolean;
        /**
         * The ref to deploy. This can be a branch, tag, or sha.
         */
        ref: string;
        /**
         * @format uri
         */
        repository_url: string;
        sha: string;
        /**
         * @format uri
         */
        statuses_url: string;
        /**
         * Parameter to specify a task to execute
         */
        task: string;
        /**
         * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
         */
        transient_environment?: boolean;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Details of a deployment branch policy.
       */
      interface DeploymentBranchPolicy {
        /**
         * The unique identifier of the branch policy.
         */
        id?: number;
        /**
         * The name pattern that branches must match in order to deploy to the environment.
         */
        name?: string;
        node_id?: string;
      }

      interface DeploymentBranchPolicyNamePattern {
        /**
         * The name pattern that branches must match in order to deploy to the environment.
         *
         * Wildcard characters will not match `/`. For example, to match branches that begin with `release/` and contain an additional single slash, use `release/*\/*`.
         * For more information about pattern matching syntax, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
         */
        name: string;
      }

      /**
       * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
       */
      interface DeploymentBranchPolicySettings {
        /**
         * Whether only branches that match the specified name patterns can deploy to this environment.  If `custom_branch_policies` is `true`, `protected_branches` must be `false`; if `custom_branch_policies` is `false`, `protected_branches` must be `true`.
         */
        custom_branch_policies: boolean;
        /**
         * Whether only branches with branch protection rules can deploy to this environment. If `protected_branches` is `true`, `custom_branch_policies` must be `false`; if `protected_branches` is `false`, `custom_branch_policies` must be `true`.
         */
        protected_branches: boolean;
      }

      /**
       * The type of reviewer.
       */
      type DeploymentReviewerType = "Team" | "User";

      /**
       * A deployment created as the result of an Actions check run from a workflow that references an environment
       */
      interface DeploymentSimple {
        /**
         * @format date-time
         */
        created_at: string;
        description: string;
        /**
         * Name for the target deployment environment.
         */
        environment: string;
        /**
         * Unique identifier of the deployment
         */
        id: number;
        node_id: string;
        original_environment?: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        /**
         * Specifies if the given environment is one that end-users directly interact with. Default: false.
         */
        production_environment?: boolean;
        /**
         * @format uri
         */
        repository_url: string;
        /**
         * @format uri
         */
        statuses_url: string;
        /**
         * Parameter to specify a task to execute
         */
        task: string;
        /**
         * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
         */
        transient_environment?: boolean;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * The status of a deployment.
       */
      interface DeploymentStatus {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        /**
         * @format uri
         */
        deployment_url: string;
        /**
         * A short description of the status.
         * @maxLength 140
         */
        description: string;
        /**
         * The environment of the deployment that the status is for.
         */
        environment?: string;
        /**
         * The URL for accessing your environment.
         * @format uri
         */
        environment_url?: string;
        id: number;
        /**
         * The URL to associate with this status.
         * @format uri
         */
        log_url?: string;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        /**
         * @format uri
         */
        repository_url: string;
        /**
         * The state of the status.
         */
        state:
          | "error"
          | "failure"
          | "in_progress"
          | "inactive"
          | "pending"
          | "queued"
          | "success";
        /**
         * Deprecated: the URL to associate with this status.
         * @format uri
         */
        target_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Diff Entry
       */
      interface DiffEntry {
        additions: number;
        /**
         * @format uri
         */
        blob_url: string;
        changes: number;
        /**
         * @format uri
         */
        contents_url: string;
        deletions: number;
        filename: string;
        patch?: string;
        previous_filename?: string;
        /**
         * @format uri
         */
        raw_url: string;
        sha: string;
        status:
          | "added"
          | "changed"
          | "copied"
          | "modified"
          | "removed"
          | "renamed"
          | "unchanged";
      }

      interface Email {
        /**
         * @format email
         */
        email: string;
        primary: boolean;
        verified: boolean;
        visibility: string;
      }

      /**
       * An object without any properties.
       */
      interface EmptyObject {}

      /**
       * The policy that controls the repositories in the organization that are allowed to run GitHub Actions.
       */
      type EnabledRepositories = "all" | "none" | "selected";

      /**
       * An enterprise on GitHub.
       */
      interface Enterprise {
        /**
         * @format uri
         */
        avatar_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A short description of the enterprise.
         */
        description?: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the enterprise
         */
        id: number;
        /**
         * The name of the enterprise.
         */
        name: string;
        node_id: string;
        /**
         * The slug url identifier for the enterprise.
         */
        slug: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * The enterprise's website URL.
         * @format uri
         */
        website_url?: string;
      }

      /**
       * Details of a deployment environment
       */
      interface Environment {
        /**
         * The time that the environment was created, in ISO 8601 format.
         * @format date-time
         */
        created_at: string;
        /**
         * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
         */
        deployment_branch_policy?: $schemas.DeploymentBranchPolicySettings;
        html_url: string;
        /**
         * The id of the environment.
         */
        id: number;
        /**
         * The name of the environment.
         */
        name: string;
        node_id: string;
        protection_rules?: any[];
        /**
         * The time that the environment was last updated, in ISO 8601 format.
         * @format date-time
         */
        updated_at: string;
        url: string;
      }

      /**
       * An entry in the reviews log for environment deployments
       */
      interface EnvironmentApprovals {
        /**
         * The comment submitted with the deployment review
         */
        comment: string;
        /**
         * The list of environments that were approved or rejected
         */
        environments: Array<{
          /**
           * The time that the environment was created, in ISO 8601 format.
           * @format date-time
           */
          created_at?: string;
          html_url?: string;
          /**
           * The id of the environment.
           */
          id?: number;
          /**
           * The name of the environment.
           */
          name?: string;
          node_id?: string;
          /**
           * The time that the environment was last updated, in ISO 8601 format.
           * @format date-time
           */
          updated_at?: string;
          url?: string;
        }>;
        /**
         * Whether deployment to the environment(s) was approved or rejected or pending (with comments)
         */
        state: "approved" | "pending" | "rejected";
        /**
         * A GitHub user.
         */
        user: $schemas.SimpleUser;
      }

      interface Event {
        /**
         * Actor
         */
        actor: $schemas.Actor;
        /**
         * @format date-time
         */
        created_at: string;
        id: string;
        /**
         * Actor
         */
        org?: $schemas.Actor;
        payload: {
          action?: string;
          /**
           * Comments provide a way for people to collaborate on an issue.
           */
          comment?: $schemas.IssueComment;
          /**
           * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
           */
          issue?: $schemas.Issue;
          pages?: Array<{
            action?: string;
            html_url?: string;
            page_name?: string;
            sha?: string;
            summary?: string;
            title?: string;
          }>;
        };
        public: boolean;
        repo: {
          id: number;
          name: string;
          /**
           * @format uri
           */
          url: string;
        };
        type: string;
      }

      interface Feed {
        _links: {
          /**
           * Hypermedia Link with Type
           */
          current_user?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          current_user_actor?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          current_user_organization?: $schemas.LinkWithType;
          current_user_organizations?: $schemas.LinkWithType[];
          /**
           * Hypermedia Link with Type
           */
          current_user_public?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          repository_discussions?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          repository_discussions_category?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          security_advisories?: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          timeline: $schemas.LinkWithType;
          /**
           * Hypermedia Link with Type
           */
          user: $schemas.LinkWithType;
        };
        current_user_actor_url?: string;
        current_user_organization_url?: string;
        current_user_organization_urls?: string[];
        current_user_public_url?: string;
        current_user_url?: string;
        /**
         * A feed of discussions for a given repository and category.
         */
        repository_discussions_category_url?: string;
        /**
         * A feed of discussions for a given repository.
         */
        repository_discussions_url?: string;
        security_advisories_url?: string;
        timeline_url: string;
        user_url: string;
      }

      /**
       * File Commit
       */
      interface FileCommit {
        commit: {
          author?: {
            date?: string;
            email?: string;
            name?: string;
          };
          committer?: {
            date?: string;
            email?: string;
            name?: string;
          };
          html_url?: string;
          message?: string;
          node_id?: string;
          parents?: Array<{
            html_url?: string;
            sha?: string;
            url?: string;
          }>;
          sha?: string;
          tree?: {
            sha?: string;
            url?: string;
          };
          url?: string;
          verification?: {
            payload?: string;
            reason?: string;
            signature?: string;
            verified?: boolean;
          };
        };
        content: {
          _links?: {
            git?: string;
            html?: string;
            self?: string;
          };
          download_url?: string;
          git_url?: string;
          html_url?: string;
          name?: string;
          path?: string;
          sha?: string;
          size?: number;
          type?: string;
          url?: string;
        };
      }

      /**
       * Full Repository
       */
      interface FullRepository {
        allow_auto_merge?: boolean;
        allow_forking?: boolean;
        allow_merge_commit?: boolean;
        allow_rebase_merge?: boolean;
        allow_squash_merge?: boolean;
        allow_update_branch?: boolean;
        /**
         * Whether anonymous git access is allowed.
         * @default true
         */
        anonymous_access_enabled?: boolean;
        archive_url: string;
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        /**
         * Code of Conduct Simple
         */
        code_of_conduct?: $schemas.CodeOfConductSimple;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        default_branch: string;
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        /**
         * Returns whether or not this repository disabled.
         */
        disabled: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        has_discussions: boolean;
        has_downloads: boolean;
        has_issues: boolean;
        has_pages: boolean;
        has_projects: boolean;
        has_wiki: boolean;
        /**
         * @format uri
         */
        homepage: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string;
        /**
         * @format uri
         */
        languages_url: string;
        /**
         * License Simple
         */
        license: $schemas.NullableLicenseSimple;
        master_branch?: string;
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
        /**
         * The default value for a merge commit title.
         *
         *   - `PR_TITLE` - default to the pull request's title.
         *   - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         */
        merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        /**
         * @format uri
         */
        mirror_url: string;
        name: string;
        network_count: number;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        /**
         * A GitHub user.
         */
        organization?: $schemas.NullableSimpleUser;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        /**
         * A repository on GitHub.
         */
        parent?: $schemas.Repository;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at: string;
        releases_url: string;
        security_and_analysis?: $schemas.SecurityAndAnalysis;
        /**
         * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
         */
        size: number;
        /**
         * A repository on GitHub.
         */
        source?: $schemas.Repository;
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
        ssh_url: string;
        stargazers_count: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        statuses_url: string;
        subscribers_count: number;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        /**
         * @format uri
         */
        svn_url: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        /**
         * A repository on GitHub.
         */
        template_repository?: $schemas.NullableRepository;
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        use_squash_pr_title_as_default?: boolean;
        /**
         * The repository visibility: public, private, or internal.
         */
        visibility?: string;
        watchers: number;
        watchers_count: number;
        web_commit_signoff_required?: boolean;
      }

      /**
       * A comment made to a gist.
       */
      interface GistComment {
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * The comment text.
         * @maxLength 65535
         */
        body: string;
        /**
         * @format date-time
         */
        created_at: string;
        id: number;
        node_id: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Gist Commit
       */
      interface GistCommit {
        change_status: {
          additions?: number;
          deletions?: number;
          total?: number;
        };
        /**
         * @format date-time
         */
        committed_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
        version: string;
      }

      /**
       * Gist History
       */
      interface GistHistory {
        change_status?: {
          additions?: number;
          deletions?: number;
          total?: number;
        };
        /**
         * @format date-time
         */
        committed_at?: string;
        /**
         * @format uri
         */
        url?: string;
        /**
         * A GitHub user.
         */
        user?: $schemas.NullableSimpleUser;
        version?: string;
      }

      /**
       * Gist Simple
       */
      interface GistSimple {
        comments?: number;
        comments_url?: string;
        commits_url?: string;
        created_at?: string;
        description?: string;
        files?: {
          [P: string]: {
            content?: string;
            filename?: string;
            language?: string;
            raw_url?: string;
            size?: number;
            truncated?: boolean;
            type?: string;
          };
        };
        /**
         * Gist
         */
        fork_of?: {
          comments: number;
          /**
           * @format uri
           */
          comments_url: string;
          /**
           * @format uri
           */
          commits_url: string;
          /**
           * @format date-time
           */
          created_at: string;
          description: string;
          files: {
            [P: string]: {
              filename?: string;
              language?: string;
              raw_url?: string;
              size?: number;
              type?: string;
            };
          };
          forks?: any[];
          /**
           * @format uri
           */
          forks_url: string;
          /**
           * @format uri
           */
          git_pull_url: string;
          /**
           * @format uri
           */
          git_push_url: string;
          history?: any[];
          /**
           * @format uri
           */
          html_url: string;
          id: string;
          node_id: string;
          /**
           * A GitHub user.
           */
          owner?: $schemas.NullableSimpleUser;
          public: boolean;
          truncated?: boolean;
          /**
           * @format date-time
           */
          updated_at: string;
          /**
           * @format uri
           */
          url: string;
          /**
           * A GitHub user.
           */
          user: $schemas.NullableSimpleUser;
        };
        /**
         * @deprecated
         */
        forks?: Array<{
          /**
           * @format date-time
           */
          created_at?: string;
          id?: string;
          /**
           * @format date-time
           */
          updated_at?: string;
          /**
           * @format uri
           */
          url?: string;
          /**
           * Public User
           */
          user?: $schemas.PublicUser;
        }>;
        forks_url?: string;
        git_pull_url?: string;
        git_push_url?: string;
        /**
         * @deprecated
         */
        history?: $schemas.GistHistory[];
        html_url?: string;
        id?: string;
        node_id?: string;
        /**
         * A GitHub user.
         */
        owner?: $schemas.SimpleUser;
        public?: boolean;
        truncated?: boolean;
        updated_at?: string;
        url?: string;
        user?: string;
      }

      /**
       * Low-level Git commit operations within a repository
       */
      interface GitCommit {
        /**
         * Identifying information for the git-user
         */
        author: {
          /**
           * Timestamp of the commit
           * @format date-time
           */
          date: string;
          /**
           * Git email address of the user
           */
          email: string;
          /**
           * Name of the git user
           */
          name: string;
        };
        /**
         * Identifying information for the git-user
         */
        committer: {
          /**
           * Timestamp of the commit
           * @format date-time
           */
          date: string;
          /**
           * Git email address of the user
           */
          email: string;
          /**
           * Name of the git user
           */
          name: string;
        };
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Message describing the purpose of the commit
         */
        message: string;
        node_id: string;
        parents: Array<{
          /**
           * @format uri
           */
          html_url: string;
          /**
           * SHA for the commit
           */
          sha: string;
          /**
           * @format uri
           */
          url: string;
        }>;
        /**
         * SHA for the commit
         */
        sha: string;
        tree: {
          /**
           * SHA for the commit
           */
          sha: string;
          /**
           * @format uri
           */
          url: string;
        };
        /**
         * @format uri
         */
        url: string;
        verification: {
          payload: string;
          reason: string;
          signature: string;
          verified: boolean;
        };
      }

      /**
       * Git references within a repository
       */
      interface GitRef {
        node_id: string;
        object: {
          /**
           * SHA for the reference
           * @maxLength 40
           * @minLength 40
           */
          sha: string;
          type: string;
          /**
           * @format uri
           */
          url: string;
        };
        ref: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Metadata for a Git tag
       */
      interface GitTag {
        /**
         * Message describing the purpose of the tag
         */
        message: string;
        node_id: string;
        object: {
          sha: string;
          type: string;
          /**
           * @format uri
           */
          url: string;
        };
        sha: string;
        /**
         * Name of the tag
         */
        tag: string;
        tagger: {
          date: string;
          email: string;
          name: string;
        };
        /**
         * URL for the tag
         * @format uri
         */
        url: string;
        verification?: $schemas.Verification;
      }

      /**
       * The hierarchy between files in a Git repository.
       */
      interface GitTree {
        sha: string;
        /**
         * Objects specifying a tree structure
         */
        tree: Array<{
          mode?: string;
          path?: string;
          sha?: string;
          size?: number;
          type?: string;
          url?: string;
        }>;
        truncated: boolean;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Gitignore Template
       */
      interface GitignoreTemplate {
        name: string;
        source: string;
      }

      /**
       * A unique encryption key
       */
      interface GpgKey {
        can_certify: boolean;
        can_encrypt_comms: boolean;
        can_encrypt_storage: boolean;
        can_sign: boolean;
        /**
         * @format date-time
         */
        created_at: string;
        emails: Array<{
          email?: string;
          verified?: boolean;
        }>;
        /**
         * @format date-time
         */
        expires_at: string;
        id: number;
        key_id: string;
        name?: string;
        primary_key_id: number;
        public_key: string;
        raw_key: string;
        revoked: boolean;
        subkeys: Array<{
          can_certify?: boolean;
          can_encrypt_comms?: boolean;
          can_encrypt_storage?: boolean;
          can_sign?: boolean;
          created_at?: string;
          emails?: any[];
          expires_at?: string;
          id?: number;
          key_id?: string;
          primary_key_id?: number;
          public_key?: string;
          raw_key?: string;
          revoked?: boolean;
          subkeys?: any[];
        }>;
      }

      /**
       * Webhooks for repositories.
       */
      interface Hook {
        /**
         * Determines whether the hook is actually triggered on pushes.
         */
        active: boolean;
        config: {
          /**
           * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
           */
          content_type?: $schemas.WebhookConfigContentType;
          digest?: string;
          email?: string;
          insecure_ssl?: $schemas.WebhookConfigInsecureSsl;
          password?: string;
          room?: string;
          /**
           * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
           */
          secret?: $schemas.WebhookConfigSecret;
          subdomain?: string;
          token?: string;
          /**
           * The URL to which the payloads will be delivered.
           * @format uri
           */
          url?: $schemas.WebhookConfigUrl;
        };
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        deliveries_url?: string;
        /**
         * Determines what events the hook is triggered for. Default: ['push'].
         */
        events: string[];
        /**
         * Unique identifier of the webhook.
         */
        id: number;
        last_response: $schemas.HookResponse;
        /**
         * The name of a valid service, use 'web' for a webhook.
         */
        name: string;
        /**
         * @format uri
         */
        ping_url: string;
        /**
         * @format uri
         */
        test_url: string;
        type: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Delivery made by a webhook.
       */
      interface HookDelivery {
        /**
         * The type of activity for the event that triggered the delivery.
         */
        action: string;
        /**
         * Time when the delivery was delivered.
         * @format date-time
         */
        delivered_at: string;
        /**
         * Time spent delivering.
         */
        duration: number;
        /**
         * The event that triggered the delivery.
         */
        event: string;
        /**
         * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
         */
        guid: string;
        /**
         * Unique identifier of the delivery.
         */
        id: number;
        /**
         * The id of the GitHub App installation associated with this event.
         */
        installation_id: number;
        /**
         * Whether the delivery is a redelivery.
         */
        redelivery: boolean;
        /**
         * The id of the repository associated with this event.
         */
        repository_id: number;
        request: {
          /**
           * The request headers sent with the webhook delivery.
           */
          headers: {
            [P: string]: any;
          };
          /**
           * The webhook payload.
           */
          payload: {
            [P: string]: any;
          };
        };
        response: {
          /**
           * The response headers received when the delivery was made.
           */
          headers: {
            [P: string]: any;
          };
          /**
           * The response payload received.
           */
          payload: string;
        };
        /**
         * Description of the status of the attempted delivery
         */
        status: string;
        /**
         * Status code received when delivery was made.
         */
        status_code: number;
        /**
         * The URL target of the delivery.
         */
        url?: string;
      }

      /**
       * Delivery made by a webhook, without request and response information.
       */
      interface HookDeliveryItem {
        /**
         * The type of activity for the event that triggered the delivery.
         */
        action: string;
        /**
         * Time when the webhook delivery occurred.
         * @format date-time
         */
        delivered_at: string;
        /**
         * Time spent delivering.
         */
        duration: number;
        /**
         * The event that triggered the delivery.
         */
        event: string;
        /**
         * Unique identifier for the event (shared with all deliveries for all webhooks that subscribe to this event).
         */
        guid: string;
        /**
         * Unique identifier of the webhook delivery.
         */
        id: number;
        /**
         * The id of the GitHub App installation associated with this event.
         */
        installation_id: number;
        /**
         * Whether the webhook delivery is a redelivery.
         */
        redelivery: boolean;
        /**
         * The id of the repository associated with this event.
         */
        repository_id: number;
        /**
         * Describes the response returned after attempting the delivery.
         */
        status: string;
        /**
         * Status code received when delivery was made.
         */
        status_code: number;
      }

      interface HookResponse {
        code: number;
        message: string;
        status: string;
      }

      interface Hovercard {
        contexts: Array<{
          message: string;
          octicon: string;
        }>;
      }

      /**
       * A repository import from an external source.
       */
      interface Import {
        authors_count?: number;
        /**
         * @format uri
         */
        authors_url: string;
        commit_count?: number;
        error_message?: string;
        failed_step?: string;
        has_large_files?: boolean;
        /**
         * @format uri
         */
        html_url: string;
        import_percent?: number;
        large_files_count?: number;
        large_files_size?: number;
        message?: string;
        project_choices?: Array<{
          human_name?: string;
          tfvc_project?: string;
          vcs?: string;
        }>;
        push_percent?: number;
        /**
         * @format uri
         */
        repository_url: string;
        status:
          | "auth"
          | "auth_failed"
          | "choose"
          | "complete"
          | "detecting"
          | "detection_found_multiple"
          | "detection_found_nothing"
          | "detection_needs_auth"
          | "error"
          | "importing"
          | "mapping"
          | "none"
          | "pushing"
          | "setup"
          | "unknown"
          | "waiting_to_push";
        status_text?: string;
        svc_root?: string;
        svn_root?: string;
        tfvc_project?: string;
        /**
         * @format uri
         */
        url: string;
        use_lfs?: boolean;
        vcs: string;
        /**
         * The URL of the originating repository.
         */
        vcs_url: string;
      }

      interface Installation {
        /**
         * @format uri
         */
        access_tokens_url: string;
        account: $schemas.SimpleUser | $schemas.Enterprise;
        app_id: number;
        app_slug: string;
        contact_email?: string;
        /**
         * @format date-time
         */
        created_at: string;
        events: string[];
        has_multiple_single_files?: boolean;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * The ID of the installation.
         */
        id: number;
        /**
         * The permissions granted to the user-to-server access token.
         */
        permissions: $schemas.AppPermissions;
        /**
         * @format uri
         */
        repositories_url: string;
        /**
         * Describe whether all repositories have been selected or there's a selection involved
         */
        repository_selection: "all" | "selected";
        single_file_name: string;
        single_file_paths?: string[];
        /**
         * @format date-time
         */
        suspended_at: string;
        /**
         * A GitHub user.
         */
        suspended_by: $schemas.NullableSimpleUser;
        /**
         * The ID of the user or organization this token is being scoped to.
         */
        target_id: number;
        target_type: string;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      /**
       * Authentication token for a GitHub App installed on a user or org.
       */
      interface InstallationToken {
        expires_at: string;
        has_multiple_single_files?: boolean;
        /**
         * The permissions granted to the user-to-server access token.
         */
        permissions?: $schemas.AppPermissions;
        repositories?: $schemas.Repository[];
        repository_selection?: "all" | "selected";
        single_file?: string;
        single_file_paths?: string[];
        token: string;
      }

      /**
       * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
       */
      interface Integration {
        client_id?: string;
        client_secret?: string;
        /**
         * @format date-time
         */
        created_at: string;
        description: string;
        /**
         * The list of events for the GitHub app
         */
        events: string[];
        /**
         * @format uri
         */
        external_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the GitHub app
         */
        id: number;
        /**
         * The number of installations associated with the GitHub app
         */
        installations_count?: number;
        /**
         * The name of the GitHub app
         */
        name: string;
        node_id: string;
        /**
         * A GitHub user.
         */
        owner: $schemas.NullableSimpleUser;
        pem?: string;
        /**
         * The set of permissions for the GitHub app
         */
        permissions: {
          checks?: string;
          contents?: string;
          deployments?: string;
          issues?: string;
          metadata?: string;
          [P: string]: string | undefined;
        };
        /**
         * The slug name of the GitHub app
         */
        slug?: string;
        /**
         * @format date-time
         */
        updated_at: string;
        webhook_secret?: string;
      }

      /**
       * The duration of the interaction restriction. Default: `one_day`.
       */
      type InteractionExpiry =
        | "one_day"
        | "one_month"
        | "one_week"
        | "six_months"
        | "three_days";

      /**
       * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
       */
      type InteractionGroup =
        | "collaborators_only"
        | "contributors_only"
        | "existing_users";

      /**
       * Limit interactions to a specific type of user for a specified duration
       */
      interface InteractionLimit {
        /**
         * The duration of the interaction restriction. Default: `one_day`.
         */
        expiry?: $schemas.InteractionExpiry;
        /**
         * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
         */
        limit: $schemas.InteractionGroup;
      }

      /**
       * Interaction limit settings.
       */
      interface InteractionLimitResponse {
        /**
         * @format date-time
         */
        expires_at: string;
        /**
         * The type of GitHub user that can comment, open issues, or create pull requests while the interaction limit is in effect.
         */
        limit: $schemas.InteractionGroup;
        origin: string;
      }

      /**
       * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
       */
      interface Issue {
        active_lock_reason?: string;
        /**
         * A GitHub user.
         */
        assignee: $schemas.NullableSimpleUser;
        assignees?: $schemas.SimpleUser[];
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * Contents of the issue
         */
        body?: string;
        body_html?: string;
        body_text?: string;
        /**
         * @format date-time
         */
        closed_at: string;
        /**
         * A GitHub user.
         */
        closed_by?: $schemas.NullableSimpleUser;
        comments: number;
        /**
         * @format uri
         */
        comments_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        draft?: boolean;
        /**
         * @format uri
         */
        events_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
         */
        labels: any[];
        labels_url: string;
        locked: boolean;
        /**
         * A collection of related issues and pull requests.
         */
        milestone: $schemas.NullableMilestone;
        node_id: string;
        /**
         * Number uniquely identifying the issue within its repository
         */
        number: number;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        pull_request?: {
          /**
           * @format uri
           */
          diff_url: string;
          /**
           * @format uri
           */
          html_url: string;
          /**
           * @format date-time
           */
          merged_at?: string;
          /**
           * @format uri
           */
          patch_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        reactions?: $schemas.ReactionRollup;
        /**
         * A repository on GitHub.
         */
        repository?: $schemas.Repository;
        /**
         * @format uri
         */
        repository_url: string;
        /**
         * State of the issue; either 'open' or 'closed'
         */
        state: string;
        /**
         * The reason for the current state
         */
        state_reason?: "completed" | "not_planned" | "reopened";
        /**
         * @format uri
         */
        timeline_url?: string;
        /**
         * Title of the issue
         */
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * URL for the issue
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Comments provide a way for people to collaborate on an issue.
       */
      interface IssueComment {
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * Contents of the issue comment
         */
        body?: string;
        body_html?: string;
        body_text?: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the issue comment
         */
        id: number;
        /**
         * @format uri
         */
        issue_url: string;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        reactions?: $schemas.ReactionRollup;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * URL for the issue comment
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Issue Event
       */
      interface IssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.NullableSimpleUser;
        /**
         * A GitHub user.
         */
        assignee?: $schemas.NullableSimpleUser;
        /**
         * A GitHub user.
         */
        assigner?: $schemas.NullableSimpleUser;
        /**
         * How the author is associated with the repository.
         */
        author_association?: $schemas.AuthorAssociation;
        commit_id: string;
        commit_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        dismissed_review?: $schemas.IssueEventDismissedReview;
        event: string;
        id: number;
        /**
         * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
         */
        issue?: $schemas.NullableIssue;
        /**
         * Issue Event Label
         */
        label?: $schemas.IssueEventLabel;
        lock_reason?: string;
        /**
         * Issue Event Milestone
         */
        milestone?: $schemas.IssueEventMilestone;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        /**
         * Issue Event Project Card
         */
        project_card?: $schemas.IssueEventProjectCard;
        /**
         * Issue Event Rename
         */
        rename?: $schemas.IssueEventRename;
        /**
         * A GitHub user.
         */
        requested_reviewer?: $schemas.NullableSimpleUser;
        /**
         * Groups of organization members that gives permissions on specified repositories.
         */
        requested_team?: $schemas.Team;
        /**
         * A GitHub user.
         */
        review_requester?: $schemas.NullableSimpleUser;
        /**
         * @format uri
         */
        url: string;
      }

      interface IssueEventDismissedReview {
        dismissal_commit_id?: string;
        dismissal_message: string;
        review_id: number;
        state: string;
      }

      /**
       * Issue Event for Issue
       */
      type IssueEventForIssue =
        | $schemas.LabeledIssueEvent
        | $schemas.UnlabeledIssueEvent
        | $schemas.AssignedIssueEvent
        | $schemas.UnassignedIssueEvent
        | $schemas.MilestonedIssueEvent
        | $schemas.DemilestonedIssueEvent
        | $schemas.RenamedIssueEvent
        | $schemas.ReviewRequestedIssueEvent
        | $schemas.ReviewRequestRemovedIssueEvent
        | $schemas.ReviewDismissedIssueEvent
        | $schemas.LockedIssueEvent
        | $schemas.AddedToProjectIssueEvent
        | $schemas.MovedColumnInProjectIssueEvent
        | $schemas.RemovedFromProjectIssueEvent
        | $schemas.ConvertedNoteToIssueIssueEvent;

      /**
       * Issue Event Label
       */
      interface IssueEventLabel {
        color: string;
        name: string;
      }

      /**
       * Issue Event Milestone
       */
      interface IssueEventMilestone {
        title: string;
      }

      /**
       * Issue Event Project Card
       */
      interface IssueEventProjectCard {
        column_name: string;
        id: number;
        previous_column_name?: string;
        project_id: number;
        /**
         * @format uri
         */
        project_url: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Issue Event Rename
       */
      interface IssueEventRename {
        from: string;
        to: string;
      }

      /**
       * Issue Search Result Item
       */
      interface IssueSearchResultItem {
        active_lock_reason?: string;
        /**
         * A GitHub user.
         */
        assignee: $schemas.NullableSimpleUser;
        assignees?: $schemas.SimpleUser[];
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        body?: string;
        body_html?: string;
        body_text?: string;
        /**
         * @format date-time
         */
        closed_at: string;
        comments: number;
        /**
         * @format uri
         */
        comments_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        draft?: boolean;
        /**
         * @format uri
         */
        events_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        labels: Array<{
          color?: string;
          default?: boolean;
          description?: string;
          /**
           * @format int64
           */
          id?: number | string;
          name?: string;
          node_id?: string;
          url?: string;
        }>;
        labels_url: string;
        locked: boolean;
        /**
         * A collection of related issues and pull requests.
         */
        milestone: $schemas.NullableMilestone;
        node_id: string;
        number: number;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        pull_request?: {
          /**
           * @format uri
           */
          diff_url: string;
          /**
           * @format uri
           */
          html_url: string;
          /**
           * @format date-time
           */
          merged_at?: string;
          /**
           * @format uri
           */
          patch_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        reactions?: $schemas.ReactionRollup;
        /**
         * A repository on GitHub.
         */
        repository?: $schemas.Repository;
        /**
         * @format uri
         */
        repository_url: string;
        score: number;
        state: string;
        state_reason?: string;
        text_matches?: $schemas.SearchResultTextMatches;
        /**
         * @format uri
         */
        timeline_url?: string;
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Information of a job execution in a workflow run
       */
      interface Job {
        check_run_url: string;
        /**
         * The time that the job finished, in ISO 8601 format.
         * @format date-time
         */
        completed_at: string;
        /**
         * The outcome of the job.
         */
        conclusion:
          | "action_required"
          | "cancelled"
          | "failure"
          | "neutral"
          | "skipped"
          | "success"
          | "timed_out";
        /**
         * The name of the current branch.
         */
        head_branch: string;
        /**
         * The SHA of the commit that is being run.
         */
        head_sha: string;
        html_url: string;
        /**
         * The id of the job.
         */
        id: number;
        /**
         * Labels for the workflow job. Specified by the "runs_on" attribute in the action's workflow file.
         */
        labels: string[];
        /**
         * The name of the job.
         */
        name: string;
        node_id: string;
        /**
         * Attempt number of the associated workflow run, 1 for first attempt and higher if the workflow was re-run.
         */
        run_attempt?: number;
        /**
         * The id of the associated workflow run.
         */
        run_id: number;
        run_url: string;
        /**
         * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
         */
        runner_group_id: number;
        /**
         * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
         */
        runner_group_name: string;
        /**
         * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
         */
        runner_id: number;
        /**
         * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be null.)
         */
        runner_name: string;
        /**
         * The time that the job started, in ISO 8601 format.
         * @format date-time
         */
        started_at: string;
        /**
         * The phase of the lifecycle that the job is currently in.
         */
        status: "completed" | "in_progress" | "queued";
        /**
         * Steps in this job.
         */
        steps?: Array<{
          /**
           * The time that the job finished, in ISO 8601 format.
           * @format date-time
           */
          completed_at?: string;
          /**
           * The outcome of the job.
           */
          conclusion: string;
          /**
           * The name of the job.
           */
          name: string;
          number: number;
          /**
           * The time that the step started, in ISO 8601 format.
           * @format date-time
           */
          started_at?: string;
          /**
           * The phase of the lifecycle that the job is currently in.
           */
          status: "completed" | "in_progress" | "queued";
        }>;
        url: string;
        /**
         * The name of the workflow.
         */
        workflow_name: string;
      }

      interface Key {
        /**
         * @format date-time
         */
        created_at: string;
        id: number;
        key: string;
        read_only: boolean;
        title: string;
        url: string;
        verified: boolean;
      }

      /**
       * Key Simple
       */
      interface KeySimple {
        id: number;
        key: string;
      }

      /**
       * Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
       */
      interface Label {
        /**
         * 6-character hex code, without the leading #, identifying the color
         */
        color: string;
        default: boolean;
        description: string;
        /**
         * @format int64
         */
        id: number | string;
        /**
         * The name of the label.
         */
        name: string;
        node_id: string;
        /**
         * URL for the label
         * @format uri
         */
        url: string;
      }

      /**
       * Label Search Result Item
       */
      interface LabelSearchResultItem {
        color: string;
        default: boolean;
        description: string;
        id: number;
        name: string;
        node_id: string;
        score: number;
        text_matches?: $schemas.SearchResultTextMatches;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Labeled Issue Event
       */
      interface LabeledIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        label: {
          color: string;
          name: string;
        };
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      interface Language {
        [P: string]: number;
      }

      interface License {
        body: string;
        conditions: string[];
        description: string;
        featured: boolean;
        /**
         * @format uri
         */
        html_url: string;
        implementation: string;
        key: string;
        limitations: string[];
        name: string;
        node_id: string;
        permissions: string[];
        spdx_id: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * License Content
       */
      interface LicenseContent {
        _links: {
          /**
           * @format uri
           */
          git: string;
          /**
           * @format uri
           */
          html: string;
          /**
           * @format uri
           */
          self: string;
        };
        content: string;
        /**
         * @format uri
         */
        download_url: string;
        encoding: string;
        /**
         * @format uri
         */
        git_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * License Simple
         */
        license: $schemas.NullableLicenseSimple;
        name: string;
        path: string;
        sha: string;
        size: number;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * License Simple
       */
      interface LicenseSimple {
        /**
         * @format uri
         */
        html_url?: string;
        key: string;
        name: string;
        node_id: string;
        spdx_id: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Hypermedia Link
       */
      interface Link {
        href: string;
      }

      /**
       * Hypermedia Link with Type
       */
      interface LinkWithType {
        href: string;
        type: string;
      }

      /**
       * Locked Issue Event
       */
      interface LockedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        lock_reason: string;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      interface Manifest {
        file?: {
          /**
           * The path of the manifest file relative to the root of the Git repository.
           */
          source_location?: string;
        };
        /**
         * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
         * @maxProperties 8
         */
        metadata?: $schemas.Metadata;
        /**
         * The name of the manifest.
         */
        name: string;
        /**
         * A collection of resolved package dependencies.
         */
        resolved?: {
          [P: string]: $schemas.Dependency;
        };
      }

      interface MarketplaceAccount {
        /**
         * @format email
         */
        email?: string;
        id: number;
        login: string;
        node_id?: string;
        /**
         * @format email
         */
        organization_billing_email?: string;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Marketplace Listing Plan
       */
      interface MarketplaceListingPlan {
        /**
         * @format uri
         */
        accounts_url: string;
        bullets: string[];
        description: string;
        has_free_trial: boolean;
        id: number;
        monthly_price_in_cents: number;
        name: string;
        number: number;
        price_model: "FLAT_RATE" | "FREE" | "PER_UNIT";
        state: string;
        unit_name: string;
        /**
         * @format uri
         */
        url: string;
        yearly_price_in_cents: number;
      }

      /**
       * Marketplace Purchase
       */
      interface MarketplacePurchase {
        email?: string;
        id: number;
        login: string;
        marketplace_pending_change?: {
          effective_date?: string;
          id?: number;
          is_installed?: boolean;
          /**
           * Marketplace Listing Plan
           */
          plan?: $schemas.MarketplaceListingPlan;
          unit_count?: number;
        };
        marketplace_purchase: {
          billing_cycle?: string;
          free_trial_ends_on?: string;
          is_installed?: boolean;
          next_billing_date?: string;
          on_free_trial?: boolean;
          /**
           * Marketplace Listing Plan
           */
          plan?: $schemas.MarketplaceListingPlan;
          unit_count?: number;
          updated_at?: string;
        };
        organization_billing_email?: string;
        type: string;
        url: string;
      }

      /**
       * Results of a successful merge upstream request
       */
      interface MergedUpstream {
        base_branch?: string;
        merge_type?: "fast-forward" | "merge" | "none";
        message?: string;
      }

      /**
       * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
       */
      interface Metadata {
        [P: string]: string | number | boolean;
      }

      /**
       * A migration.
       */
      interface Migration {
        /**
         * @format uri
         */
        archive_url?: string;
        /**
         * @format date-time
         */
        created_at: string;
        exclude?: any[];
        exclude_attachments: boolean;
        exclude_git_data: boolean;
        exclude_metadata: boolean;
        exclude_owner_projects: boolean;
        exclude_releases: boolean;
        guid: string;
        id: number;
        lock_repositories: boolean;
        node_id: string;
        org_metadata_only: boolean;
        /**
         * A GitHub user.
         */
        owner: $schemas.NullableSimpleUser;
        /**
         * The repositories included in the migration. Only returned for export migrations.
         */
        repositories: $schemas.Repository[];
        state: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A collection of related issues and pull requests.
       */
      interface Milestone {
        /**
         * @format date-time
         */
        closed_at: string;
        closed_issues: number;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        description: string;
        /**
         * @format date-time
         */
        due_on: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * @format uri
         */
        labels_url: string;
        node_id: string;
        /**
         * The number of the milestone.
         */
        number: number;
        open_issues: number;
        /**
         * The state of the milestone.
         * @default open
         */
        state: "closed" | "open";
        /**
         * The title of the milestone.
         */
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Milestoned Issue Event
       */
      interface MilestonedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        milestone: {
          title: string;
        };
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * Minimal Repository
       */
      interface MinimalRepository {
        allow_forking?: boolean;
        archive_url: string;
        archived?: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url?: string;
        /**
         * Code Of Conduct
         */
        code_of_conduct?: $schemas.CodeOfConduct;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at?: string;
        default_branch?: string;
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        disabled?: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks?: number;
        forks_count?: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url?: string;
        has_discussions?: boolean;
        has_downloads?: boolean;
        has_issues?: boolean;
        has_pages?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        homepage?: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language?: string;
        /**
         * @format uri
         */
        languages_url: string;
        license?: {
          key?: string;
          name?: string;
          node_id?: string;
          spdx_id?: string;
          url?: string;
        };
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        mirror_url?: string;
        name: string;
        network_count?: number;
        node_id: string;
        notifications_url: string;
        open_issues?: number;
        open_issues_count?: number;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        permissions?: {
          admin?: boolean;
          maintain?: boolean;
          pull?: boolean;
          push?: boolean;
          triage?: boolean;
        };
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at?: string;
        releases_url: string;
        role_name?: string;
        security_and_analysis?: $schemas.SecurityAndAnalysis;
        /**
         * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
         */
        size?: number;
        ssh_url?: string;
        stargazers_count?: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        statuses_url: string;
        subscribers_count?: number;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        svn_url?: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at?: string;
        /**
         * @format uri
         */
        url: string;
        visibility?: string;
        watchers?: number;
        watchers_count?: number;
        web_commit_signoff_required?: boolean;
      }

      /**
       * Moved Column in Project Issue Event
       */
      interface MovedColumnInProjectIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        project_card?: {
          column_name: string;
          id: number;
          previous_column_name?: string;
          project_id: number;
          /**
           * @format uri
           */
          project_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        url: string;
      }

      /**
       * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      type NullableAlertUpdatedAt = string;

      /**
       * Code of Conduct Simple
       */
      interface NullableCodeOfConductSimple {
        /**
         * @format uri
         */
        html_url: string;
        key: string;
        name: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A description of the machine powering a codespace.
       */
      interface NullableCodespaceMachine {
        /**
         * How many cores are available to the codespace.
         */
        cpus: number;
        /**
         * The display name of the machine includes cores, memory, and storage.
         */
        display_name: string;
        /**
         * How much memory is available to the codespace.
         */
        memory_in_bytes: number;
        /**
         * The name of the machine.
         */
        name: string;
        /**
         * The operating system of the machine.
         */
        operating_system: string;
        /**
         * Whether a prebuild is currently available when creating a codespace for this machine and repository. If a branch was not specified as a ref, the default branch will be assumed. Value will be "null" if prebuilds are not supported or prebuild availability could not be determined. Value will be "none" if no prebuild is available. Latest values "ready" and "in_progress" indicate the prebuild availability status.
         */
        prebuild_availability: "in_progress" | "none" | "ready";
        /**
         * How much storage is available to the codespace.
         */
        storage_in_bytes: number;
      }

      /**
       * Collaborator
       */
      interface NullableCollaborator {
        /**
         * @format uri
         */
        avatar_url: string;
        email?: string;
        events_url: string;
        /**
         * @format uri
         */
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        login: string;
        name?: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        role_name: string;
        site_admin: boolean;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      interface NullableCommunityHealthFile {
        /**
         * @format uri
         */
        html_url: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Metaproperties for Git author/committer information.
       */
      interface NullableGitUser {
        date?: string;
        email?: string;
        name?: string;
      }

      /**
       * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
       */
      interface NullableIntegration {
        client_id?: string;
        client_secret?: string;
        /**
         * @format date-time
         */
        created_at: string;
        description: string;
        /**
         * The list of events for the GitHub app
         */
        events: string[];
        /**
         * @format uri
         */
        external_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the GitHub app
         */
        id: number;
        /**
         * The number of installations associated with the GitHub app
         */
        installations_count?: number;
        /**
         * The name of the GitHub app
         */
        name: string;
        node_id: string;
        /**
         * A GitHub user.
         */
        owner: $schemas.NullableSimpleUser;
        pem?: string;
        /**
         * The set of permissions for the GitHub app
         */
        permissions: {
          checks?: string;
          contents?: string;
          deployments?: string;
          issues?: string;
          metadata?: string;
          [P: string]: string | undefined;
        };
        /**
         * The slug name of the GitHub app
         */
        slug?: string;
        /**
         * @format date-time
         */
        updated_at: string;
        webhook_secret?: string;
      }

      /**
       * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
       */
      interface NullableIssue {
        active_lock_reason?: string;
        /**
         * A GitHub user.
         */
        assignee: $schemas.NullableSimpleUser;
        assignees?: $schemas.SimpleUser[];
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * Contents of the issue
         */
        body?: string;
        body_html?: string;
        body_text?: string;
        /**
         * @format date-time
         */
        closed_at: string;
        /**
         * A GitHub user.
         */
        closed_by?: $schemas.NullableSimpleUser;
        comments: number;
        /**
         * @format uri
         */
        comments_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        draft?: boolean;
        /**
         * @format uri
         */
        events_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
         */
        labels: any[];
        labels_url: string;
        locked: boolean;
        /**
         * A collection of related issues and pull requests.
         */
        milestone: $schemas.NullableMilestone;
        node_id: string;
        /**
         * Number uniquely identifying the issue within its repository
         */
        number: number;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        pull_request?: {
          /**
           * @format uri
           */
          diff_url: string;
          /**
           * @format uri
           */
          html_url: string;
          /**
           * @format date-time
           */
          merged_at?: string;
          /**
           * @format uri
           */
          patch_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        reactions?: $schemas.ReactionRollup;
        /**
         * A repository on GitHub.
         */
        repository?: $schemas.Repository;
        /**
         * @format uri
         */
        repository_url: string;
        /**
         * State of the issue; either 'open' or 'closed'
         */
        state: string;
        /**
         * The reason for the current state
         */
        state_reason?: "completed" | "not_planned" | "reopened";
        /**
         * @format uri
         */
        timeline_url?: string;
        /**
         * Title of the issue
         */
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * URL for the issue
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * License Simple
       */
      interface NullableLicenseSimple {
        /**
         * @format uri
         */
        html_url?: string;
        key: string;
        name: string;
        node_id: string;
        spdx_id: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A collection of related issues and pull requests.
       */
      interface NullableMilestone {
        /**
         * @format date-time
         */
        closed_at: string;
        closed_issues: number;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        description: string;
        /**
         * @format date-time
         */
        due_on: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * @format uri
         */
        labels_url: string;
        node_id: string;
        /**
         * The number of the milestone.
         */
        number: number;
        open_issues: number;
        /**
         * The state of the milestone.
         * @default open
         */
        state: "closed" | "open";
        /**
         * The title of the milestone.
         */
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Minimal Repository
       */
      interface NullableMinimalRepository {
        allow_forking?: boolean;
        archive_url: string;
        archived?: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url?: string;
        /**
         * Code Of Conduct
         */
        code_of_conduct?: $schemas.CodeOfConduct;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at?: string;
        default_branch?: string;
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        disabled?: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks?: number;
        forks_count?: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url?: string;
        has_discussions?: boolean;
        has_downloads?: boolean;
        has_issues?: boolean;
        has_pages?: boolean;
        has_projects?: boolean;
        has_wiki?: boolean;
        homepage?: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language?: string;
        /**
         * @format uri
         */
        languages_url: string;
        license?: {
          key?: string;
          name?: string;
          node_id?: string;
          spdx_id?: string;
          url?: string;
        };
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        mirror_url?: string;
        name: string;
        network_count?: number;
        node_id: string;
        notifications_url: string;
        open_issues?: number;
        open_issues_count?: number;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        permissions?: {
          admin?: boolean;
          maintain?: boolean;
          pull?: boolean;
          push?: boolean;
          triage?: boolean;
        };
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at?: string;
        releases_url: string;
        role_name?: string;
        security_and_analysis?: $schemas.SecurityAndAnalysis;
        /**
         * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
         */
        size?: number;
        ssh_url?: string;
        stargazers_count?: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        statuses_url: string;
        subscribers_count?: number;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        svn_url?: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at?: string;
        /**
         * @format uri
         */
        url: string;
        visibility?: string;
        watchers?: number;
        watchers_count?: number;
        web_commit_signoff_required?: boolean;
      }

      /**
       * A repository on GitHub.
       */
      interface NullableRepository {
        /**
         * Whether to allow Auto-merge to be used on pull requests.
         */
        allow_auto_merge?: boolean;
        /**
         * Whether to allow forking this repo
         */
        allow_forking?: boolean;
        /**
         * Whether to allow merge commits for pull requests.
         * @default true
         */
        allow_merge_commit?: boolean;
        /**
         * Whether to allow rebase merges for pull requests.
         * @default true
         */
        allow_rebase_merge?: boolean;
        /**
         * Whether to allow squash merges for pull requests.
         * @default true
         */
        allow_squash_merge?: boolean;
        /**
         * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
         */
        allow_update_branch?: boolean;
        /**
         * Whether anonymous git access is enabled for this repository
         */
        anonymous_access_enabled?: boolean;
        archive_url: string;
        /**
         * Whether the repository is archived.
         */
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The default branch of the repository.
         */
        default_branch: string;
        /**
         * Whether to delete head branches when pull requests are merged
         */
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        /**
         * Returns whether or not this repository disabled.
         */
        disabled: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        /**
         * Whether discussions are enabled.
         */
        has_discussions?: boolean;
        /**
         * Whether downloads are enabled.
         * @default true
         */
        has_downloads: boolean;
        /**
         * Whether issues are enabled.
         * @default true
         */
        has_issues: boolean;
        has_pages: boolean;
        /**
         * Whether projects are enabled.
         * @default true
         */
        has_projects: boolean;
        /**
         * Whether the wiki is enabled.
         * @default true
         */
        has_wiki: boolean;
        /**
         * @format uri
         */
        homepage: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the repository
         */
        id: number;
        /**
         * Whether this repository acts as a template that can be used to generate new repositories.
         */
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string;
        /**
         * @format uri
         */
        languages_url: string;
        /**
         * License Simple
         */
        license: $schemas.NullableLicenseSimple;
        master_branch?: string;
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
        /**
         * The default value for a merge commit title.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         */
        merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        /**
         * @format uri
         */
        mirror_url: string;
        /**
         * The name of the repository.
         */
        name: string;
        network_count?: number;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        /**
         * A GitHub user.
         */
        organization?: $schemas.NullableSimpleUser;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        /**
         * Whether the repository is private or public.
         */
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at: string;
        releases_url: string;
        /**
         * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
         */
        size: number;
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
        ssh_url: string;
        stargazers_count: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        starred_at?: string;
        statuses_url: string;
        subscribers_count?: number;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        /**
         * @format uri
         */
        svn_url: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        template_repository?: {
          allow_auto_merge?: boolean;
          allow_merge_commit?: boolean;
          allow_rebase_merge?: boolean;
          allow_squash_merge?: boolean;
          allow_update_branch?: boolean;
          archive_url?: string;
          archived?: boolean;
          assignees_url?: string;
          blobs_url?: string;
          branches_url?: string;
          clone_url?: string;
          collaborators_url?: string;
          comments_url?: string;
          commits_url?: string;
          compare_url?: string;
          contents_url?: string;
          contributors_url?: string;
          created_at?: string;
          default_branch?: string;
          delete_branch_on_merge?: boolean;
          deployments_url?: string;
          description?: string;
          disabled?: boolean;
          downloads_url?: string;
          events_url?: string;
          fork?: boolean;
          forks_count?: number;
          forks_url?: string;
          full_name?: string;
          git_commits_url?: string;
          git_refs_url?: string;
          git_tags_url?: string;
          git_url?: string;
          has_downloads?: boolean;
          has_issues?: boolean;
          has_pages?: boolean;
          has_projects?: boolean;
          has_wiki?: boolean;
          homepage?: string;
          hooks_url?: string;
          html_url?: string;
          id?: number;
          is_template?: boolean;
          issue_comment_url?: string;
          issue_events_url?: string;
          issues_url?: string;
          keys_url?: string;
          labels_url?: string;
          language?: string;
          languages_url?: string;
          /**
           * The default value for a merge commit message.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `PR_BODY` - default to the pull request's body.
           * - `BLANK` - default to a blank commit message.
           */
          merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
          /**
           * The default value for a merge commit title.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
           */
          merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
          merges_url?: string;
          milestones_url?: string;
          mirror_url?: string;
          name?: string;
          network_count?: number;
          node_id?: string;
          notifications_url?: string;
          open_issues_count?: number;
          owner?: {
            avatar_url?: string;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id?: number;
            login?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: string;
            url?: string;
          };
          permissions?: {
            admin?: boolean;
            maintain?: boolean;
            pull?: boolean;
            push?: boolean;
            triage?: boolean;
          };
          private?: boolean;
          pulls_url?: string;
          pushed_at?: string;
          releases_url?: string;
          size?: number;
          /**
           * The default value for a squash merge commit message:
           *
           * - `PR_BODY` - default to the pull request's body.
           * - `COMMIT_MESSAGES` - default to the branch's commit messages.
           * - `BLANK` - default to a blank commit message.
           */
          squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
          /**
           * The default value for a squash merge commit title:
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
           */
          squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
          ssh_url?: string;
          stargazers_count?: number;
          stargazers_url?: string;
          statuses_url?: string;
          subscribers_count?: number;
          subscribers_url?: string;
          subscription_url?: string;
          svn_url?: string;
          tags_url?: string;
          teams_url?: string;
          temp_clone_token?: string;
          topics?: string[];
          trees_url?: string;
          updated_at?: string;
          url?: string;
          use_squash_pr_title_as_default?: boolean;
          visibility?: string;
          watchers_count?: number;
        };
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
         * @deprecated
         */
        use_squash_pr_title_as_default?: boolean;
        /**
         * The repository visibility: public, private, or internal.
         * @default public
         */
        visibility?: string;
        watchers: number;
        watchers_count: number;
        /**
         * Whether to require contributors to sign off on web-based commits
         */
        web_commit_signoff_required?: boolean;
      }

      interface NullableScopedInstallation {
        /**
         * A GitHub user.
         */
        account: $schemas.SimpleUser;
        has_multiple_single_files?: boolean;
        /**
         * The permissions granted to the user-to-server access token.
         */
        permissions: $schemas.AppPermissions;
        /**
         * @format uri
         */
        repositories_url: string;
        /**
         * Describe whether all repositories have been selected or there's a selection involved
         */
        repository_selection: "all" | "selected";
        single_file_name: string;
        single_file_paths?: string[];
      }

      /**
       * A commit.
       */
      interface NullableSimpleCommit {
        author: {
          email: string;
          name: string;
        };
        committer: {
          email: string;
          name: string;
        };
        id: string;
        message: string;
        /**
         * @format date-time
         */
        timestamp: string;
        tree_id: string;
      }

      /**
       * A GitHub user.
       */
      interface NullableSimpleUser {
        /**
         * @format uri
         */
        avatar_url: string;
        email?: string;
        events_url: string;
        /**
         * @format uri
         */
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        login: string;
        name?: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        site_admin: boolean;
        starred_at?: string;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Groups of organization members that gives permissions on specified repositories.
       */
      interface NullableTeamSimple {
        /**
         * Description of the team
         */
        description: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the team
         */
        id: number;
        /**
         * Distinguished Name (DN) that team maps to within LDAP environment
         */
        ldap_dn?: string;
        members_url: string;
        /**
         * Name of the team
         */
        name: string;
        node_id: string;
        /**
         * Permission that the team will have for its repositories
         */
        permission: string;
        /**
         * The level of privacy this team should have
         */
        privacy?: string;
        /**
         * @format uri
         */
        repositories_url: string;
        slug: string;
        /**
         * URL for the team
         * @format uri
         */
        url: string;
      }

      /**
       * Actions OIDC Subject customization
       */
      interface OidcCustomSub {
        /**
         * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
         */
        include_claim_keys: string[];
      }

      /**
       * Actions OIDC subject customization for a repository
       */
      interface OidcCustomSubRepo {
        /**
         * Array of unique strings. Each claim key can only contain alphanumeric characters and underscores.
         */
        include_claim_keys?: string[];
        /**
         * Whether to use the default template or not. If `true`, the `include_claim_keys` field is ignored.
         */
        use_default: boolean;
      }

      /**
       * Org Hook
       */
      interface OrgHook {
        active: boolean;
        config: {
          content_type?: string;
          insecure_ssl?: string;
          secret?: string;
          url?: string;
        };
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        deliveries_url?: string;
        events: string[];
        id: number;
        name: string;
        /**
         * @format uri
         */
        ping_url: string;
        type: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Org Membership
       */
      interface OrgMembership {
        /**
         * A GitHub organization.
         */
        organization: $schemas.OrganizationSimple;
        /**
         * @format uri
         */
        organization_url: string;
        permissions?: {
          can_create_repository: boolean;
        };
        /**
         * The user's membership type in the organization.
         */
        role: "admin" | "billing_manager" | "member";
        /**
         * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
         */
        state: "active" | "pending";
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Secrets for GitHub Actions for an organization.
       */
      interface OrganizationActionsSecret {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret.
         */
        name: string;
        /**
         * @format uri
         */
        selected_repositories_url?: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * Visibility of a secret
         */
        visibility: "all" | "private" | "selected";
      }

      /**
       * Organization variable for GitHub Actions.
       */
      interface OrganizationActionsVariable {
        /**
         * The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the variable.
         */
        name: string;
        /**
         * @format uri
         */
        selected_repositories_url?: string;
        /**
         * The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
         * @format date-time
         */
        updated_at: string;
        /**
         * The value of the variable.
         */
        value: string;
        /**
         * Visibility of a variable
         */
        visibility: "all" | "private" | "selected";
      }

      /**
       * Secrets for GitHub Dependabot for an organization.
       */
      interface OrganizationDependabotSecret {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret.
         */
        name: string;
        /**
         * @format uri
         */
        selected_repositories_url?: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * Visibility of a secret
         */
        visibility: "all" | "private" | "selected";
      }

      /**
       * Organization Full
       */
      interface OrganizationFull {
        /**
         * Whether GitHub Advanced Security is enabled for new repositories and repositories transferred to this organization.
         *
         * This field is only visible to organization owners or members of a team with the security manager role.
         */
        advanced_security_enabled_for_new_repositories?: boolean;
        avatar_url: string;
        /**
         * @format email
         */
        billing_email?: string;
        /**
         * @format uri
         */
        blog?: string;
        collaborators?: number;
        company?: string;
        /**
         * @format date-time
         */
        created_at: string;
        default_repository_permission?: string;
        /**
         * Whether GitHub Advanced Security is automatically enabled for new repositories and repositories transferred to
         * this organization.
         *
         * This field is only visible to organization owners or members of a team with the security manager role.
         */
        dependabot_alerts_enabled_for_new_repositories?: boolean;
        /**
         * Whether dependabot security updates are automatically enabled for new repositories and repositories transferred
         * to this organization.
         *
         * This field is only visible to organization owners or members of a team with the security manager role.
         */
        dependabot_security_updates_enabled_for_new_repositories?: boolean;
        /**
         * Whether dependency graph is automatically enabled for new repositories and repositories transferred to this
         * organization.
         *
         * This field is only visible to organization owners or members of a team with the security manager role.
         */
        dependency_graph_enabled_for_new_repositories?: boolean;
        description: string;
        disk_usage?: number;
        /**
         * @format email
         */
        email?: string;
        /**
         * @format uri
         */
        events_url: string;
        followers: number;
        following: number;
        has_organization_projects: boolean;
        has_repository_projects: boolean;
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        is_verified?: boolean;
        issues_url: string;
        location?: string;
        login: string;
        members_allowed_repository_creation_type?: string;
        members_can_create_internal_repositories?: boolean;
        members_can_create_pages?: boolean;
        members_can_create_private_pages?: boolean;
        members_can_create_private_repositories?: boolean;
        members_can_create_public_pages?: boolean;
        members_can_create_public_repositories?: boolean;
        members_can_create_repositories?: boolean;
        members_can_fork_private_repositories?: boolean;
        members_url: string;
        name?: string;
        node_id: string;
        owned_private_repos?: number;
        plan?: {
          filled_seats?: number;
          name: string;
          private_repos: number;
          seats?: number;
          space: number;
        };
        private_gists?: number;
        public_gists: number;
        public_members_url: string;
        public_repos: number;
        /**
         * @format uri
         */
        repos_url: string;
        /**
         * Whether secret scanning is automatically enabled for new repositories and repositories transferred to this
         * organization.
         *
         * This field is only visible to organization owners or members of a team with the security manager role.
         */
        secret_scanning_enabled_for_new_repositories?: boolean;
        /**
         * An optional URL string to display to contributors who are blocked from pushing a secret.
         */
        secret_scanning_push_protection_custom_link?: string;
        /**
         * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
         */
        secret_scanning_push_protection_custom_link_enabled?: boolean;
        /**
         * Whether secret scanning push protection is automatically enabled for new repositories and repositories
         * transferred to this organization.
         *
         * This field is only visible to organization owners or members of a team with the security manager role.
         */
        secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
        total_private_repos?: number;
        twitter_username?: string;
        two_factor_requirement_enabled?: boolean;
        type: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        web_commit_signoff_required?: boolean;
      }

      /**
       * Organization Invitation
       */
      interface OrganizationInvitation {
        created_at: string;
        email: string;
        failed_at?: string;
        failed_reason?: string;
        id: number;
        invitation_source?: string;
        invitation_teams_url: string;
        /**
         * A GitHub user.
         */
        inviter: $schemas.SimpleUser;
        login: string;
        node_id: string;
        role: string;
        team_count: number;
      }

      interface OrganizationSecretScanningAlert {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at?: $schemas.AlertCreatedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url?: $schemas.AlertHtmlUrl;
        /**
         * The REST API URL of the code locations for this alert.
         * @format uri
         */
        locations_url?: string;
        /**
         * The security alert number.
         */
        number?: $schemas.AlertNumber;
        /**
         * Whether push protection was bypassed for the detected secret.
         */
        push_protection_bypassed?: boolean;
        /**
         * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        push_protection_bypassed_at?: string;
        /**
         * A GitHub user.
         */
        push_protection_bypassed_by?: $schemas.NullableSimpleUser;
        /**
         * A GitHub repository.
         */
        repository?: $schemas.SimpleRepository;
        /**
         * **Required when the `state` is `resolved`.** The reason for resolving the alert.
         */
        resolution?: $schemas.SecretScanningAlertResolution;
        /**
         * The comment that was optionally added when this alert was closed
         */
        resolution_comment?: string;
        /**
         * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        resolved_at?: string;
        /**
         * A GitHub user.
         */
        resolved_by?: $schemas.NullableSimpleUser;
        /**
         * The secret that was detected.
         */
        secret?: string;
        /**
         * The type of secret that secret scanning detected.
         */
        secret_type?: string;
        /**
         * User-friendly name for the detected secret, matching the `secret_type`.
         * For a list of built-in patterns, see "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)."
         */
        secret_type_display_name?: string;
        /**
         * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
         */
        state?: $schemas.SecretScanningAlertState;
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at?: $schemas.NullableAlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url?: $schemas.AlertUrl;
      }

      /**
       * A GitHub organization.
       */
      interface OrganizationSimple {
        avatar_url: string;
        description: string;
        /**
         * @format uri
         */
        events_url: string;
        hooks_url: string;
        id: number;
        issues_url: string;
        login: string;
        members_url: string;
        node_id: string;
        public_members_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A software package
       */
      interface Package {
        /**
         * @format date-time
         */
        created_at: string;
        html_url: string;
        /**
         * Unique identifier of the package.
         */
        id: number;
        /**
         * The name of the package.
         */
        name: string;
        /**
         * A GitHub user.
         */
        owner?: $schemas.NullableSimpleUser;
        package_type:
          | "container"
          | "docker"
          | "maven"
          | "npm"
          | "nuget"
          | "rubygems";
        /**
         * Minimal Repository
         */
        repository?: $schemas.NullableMinimalRepository;
        /**
         * @format date-time
         */
        updated_at: string;
        url: string;
        /**
         * The number of versions of the package.
         */
        version_count: number;
        visibility: "private" | "public";
      }

      /**
       * A version of a software package
       */
      interface PackageVersion {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format date-time
         */
        deleted_at?: string;
        description?: string;
        html_url?: string;
        /**
         * Unique identifier of the package version.
         */
        id: number;
        license?: string;
        metadata?: {
          container?: {
            tags: string[];
          };
          docker?: {
            tag?: string[];
            tags: any;
          };
          package_type:
            | "container"
            | "docker"
            | "maven"
            | "npm"
            | "nuget"
            | "rubygems";
        };
        /**
         * The name of the package version.
         */
        name: string;
        package_html_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        url: string;
      }

      interface PackagesBillingUsage {
        /**
         * Free storage space (GB) for GitHub Packages.
         */
        included_gigabytes_bandwidth: number;
        /**
         * Sum of the free and paid storage space (GB) for GitHuub Packages.
         */
        total_gigabytes_bandwidth_used: number;
        /**
         * Total paid storage space (GB) for GitHuub Packages.
         */
        total_paid_gigabytes_bandwidth_used: number;
      }

      /**
       * The configuration for GitHub Pages for a repository.
       */
      interface Page {
        /**
         * The process in which the Page will be built.
         */
        build_type?: "legacy" | "workflow";
        /**
         * The Pages site's custom domain
         */
        cname: string;
        /**
         * Whether the Page has a custom 404 page.
         */
        custom_404: boolean;
        /**
         * The web address the Page can be accessed from.
         * @format uri
         */
        html_url?: string;
        https_certificate?: $schemas.PagesHttpsCertificate;
        /**
         * Whether https is enabled on the domain
         */
        https_enforced?: boolean;
        /**
         * The timestamp when a pending domain becomes unverified.
         * @format date-time
         */
        pending_domain_unverified_at?: string;
        /**
         * The state if the domain is verified
         */
        protected_domain_state?: "pending" | "unverified" | "verified";
        /**
         * Whether the GitHub Pages site is publicly visible. If set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site.
         */
        public: boolean;
        source?: $schemas.PagesSourceHash;
        /**
         * The status of the most recent build of the Page.
         */
        status: "building" | "built" | "errored";
        /**
         * The API address for accessing this Page resource.
         * @format uri
         */
        url: string;
      }

      /**
       * Page Build
       */
      interface PageBuild {
        commit: string;
        /**
         * @format date-time
         */
        created_at: string;
        duration: number;
        error: {
          message: string;
        };
        /**
         * A GitHub user.
         */
        pusher: $schemas.NullableSimpleUser;
        status: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Page Build Status
       */
      interface PageBuildStatus {
        status: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * The GitHub Pages deployment status.
       */
      interface PageDeployment {
        /**
         * The URI to the deployed GitHub Pages.
         * @format uri
         */
        page_url: string;
        /**
         * The URI to the deployed GitHub Pages preview.
         * @format uri
         */
        preview_url?: string;
        /**
         * The URI to monitor GitHub Pages deployment status.
         * @format uri
         */
        status_url: string;
      }

      /**
       * Pages Health Check Status
       */
      interface PagesHealthCheck {
        alt_domain?: {
          caa_error?: string;
          dns_resolves?: boolean;
          enforces_https?: boolean;
          has_cname_record?: boolean;
          has_mx_records_present?: boolean;
          host?: string;
          https_error?: string;
          is_a_record?: boolean;
          is_apex_domain?: boolean;
          is_cloudflare_ip?: boolean;
          is_cname_to_fastly?: boolean;
          is_cname_to_github_user_domain?: boolean;
          is_cname_to_pages_dot_github_dot_com?: boolean;
          is_fastly_ip?: boolean;
          is_https_eligible?: boolean;
          is_non_github_pages_ip_present?: boolean;
          is_old_ip_address?: boolean;
          is_pages_domain?: boolean;
          is_pointed_to_github_pages_ip?: boolean;
          is_proxied?: boolean;
          is_served_by_pages?: boolean;
          is_valid?: boolean;
          is_valid_domain?: boolean;
          nameservers?: string;
          reason?: string;
          responds_to_https?: boolean;
          should_be_a_record?: boolean;
          uri?: string;
        };
        domain?: {
          caa_error?: string;
          dns_resolves?: boolean;
          enforces_https?: boolean;
          has_cname_record?: boolean;
          has_mx_records_present?: boolean;
          host?: string;
          https_error?: string;
          is_a_record?: boolean;
          is_apex_domain?: boolean;
          is_cloudflare_ip?: boolean;
          is_cname_to_fastly?: boolean;
          is_cname_to_github_user_domain?: boolean;
          is_cname_to_pages_dot_github_dot_com?: boolean;
          is_fastly_ip?: boolean;
          is_https_eligible?: boolean;
          is_non_github_pages_ip_present?: boolean;
          is_old_ip_address?: boolean;
          is_pages_domain?: boolean;
          is_pointed_to_github_pages_ip?: boolean;
          is_proxied?: boolean;
          is_served_by_pages?: boolean;
          is_valid?: boolean;
          is_valid_domain?: boolean;
          nameservers?: string;
          reason?: string;
          responds_to_https?: boolean;
          should_be_a_record?: boolean;
          uri?: string;
        };
      }

      interface PagesHttpsCertificate {
        description: string;
        /**
         * Array of the domain set and its alternate name (if it is configured)
         */
        domains: string[];
        /**
         * @format date
         */
        expires_at?: string;
        state:
          | "approved"
          | "authorization_created"
          | "authorization_pending"
          | "authorization_revoked"
          | "authorized"
          | "bad_authz"
          | "destroy_pending"
          | "dns_changed"
          | "errored"
          | "issued"
          | "new"
          | "uploaded";
      }

      interface PagesSourceHash {
        branch: string;
        path: string;
      }

      interface ParticipationStats {
        all: number[];
        owner: number[];
      }

      /**
       * Details of a deployment that is waiting for protection rules to pass
       */
      interface PendingDeployment {
        /**
         * Whether the currently authenticated user can approve the deployment
         */
        current_user_can_approve: boolean;
        environment: {
          html_url?: string;
          /**
           * The id of the environment.
           */
          id?: number;
          /**
           * The name of the environment.
           */
          name?: string;
          node_id?: string;
          url?: string;
        };
        /**
         * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
         */
        reviewers: Array<{
          reviewer?: $schemas.SimpleUser | $schemas.Team;
          /**
           * The type of reviewer.
           */
          type?: $schemas.DeploymentReviewerType;
        }>;
        /**
         * The set duration of the wait timer
         */
        wait_timer: number;
        /**
         * The time that the wait timer began.
         * @format date-time
         */
        wait_timer_started_at: string;
      }

      /**
       * Porter Author
       */
      interface PorterAuthor {
        email: string;
        id: number;
        /**
         * @format uri
         */
        import_url: string;
        name: string;
        remote_id: string;
        remote_name: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Porter Large File
       */
      interface PorterLargeFile {
        oid: string;
        path: string;
        ref_name: string;
        size: number;
      }

      /**
       * Private User
       */
      interface PrivateUser {
        /**
         * @format uri
         */
        avatar_url: string;
        bio: string;
        blog: string;
        business_plus?: boolean;
        collaborators: number;
        company: string;
        /**
         * @format date-time
         */
        created_at: string;
        disk_usage: number;
        /**
         * @format email
         */
        email: string;
        events_url: string;
        followers: number;
        /**
         * @format uri
         */
        followers_url: string;
        following: number;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        hireable: boolean;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        ldap_dn?: string;
        location: string;
        login: string;
        name: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        owned_private_repos: number;
        plan?: {
          collaborators: number;
          name: string;
          private_repos: number;
          space: number;
        };
        private_gists: number;
        public_gists: number;
        public_repos: number;
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        site_admin: boolean;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        /**
         * @format date-time
         */
        suspended_at?: string;
        total_private_repos: number;
        twitter_username?: string;
        two_factor_authentication: boolean;
        type: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Projects are a way to organize columns and cards of work.
       */
      interface Project {
        /**
         * Body of the project
         */
        body: string;
        /**
         * @format uri
         */
        columns_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * Name of the project
         */
        name: string;
        node_id: string;
        number: number;
        /**
         * The baseline permission that all organization members have on this project. Only present if owner is an organization.
         */
        organization_permission?: "admin" | "none" | "read" | "write";
        /**
         * @format uri
         */
        owner_url: string;
        /**
         * Whether or not this project can be seen by everyone. Only present if owner is an organization.
         */
        private?: boolean;
        /**
         * State of the project; either 'open' or 'closed'
         */
        state: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Project cards represent a scope of work.
       */
      interface ProjectCard {
        /**
         * Whether or not the card is archived
         */
        archived?: boolean;
        column_name?: string;
        /**
         * @format uri
         */
        column_url: string;
        /**
         * @format uri
         */
        content_url?: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        /**
         * The project card's ID
         */
        id: number;
        node_id: string;
        note: string;
        project_id?: string;
        /**
         * @format uri
         */
        project_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Project Collaborator Permission
       */
      interface ProjectCollaboratorPermission {
        permission: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Project columns contain cards of work.
       */
      interface ProjectColumn {
        /**
         * @format uri
         */
        cards_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The unique identifier of the project column
         */
        id: number;
        /**
         * Name of the project column
         */
        name: string;
        node_id: string;
        /**
         * @format uri
         */
        project_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Branch protections protect branches
       */
      interface ProtectedBranch {
        allow_deletions?: {
          enabled: boolean;
        };
        allow_force_pushes?: {
          enabled: boolean;
        };
        /**
         * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing.
         */
        allow_fork_syncing?: {
          enabled?: boolean;
        };
        block_creations?: {
          enabled: boolean;
        };
        enforce_admins?: {
          enabled: boolean;
          /**
           * @format uri
           */
          url: string;
        };
        /**
         * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch.
         */
        lock_branch?: {
          enabled?: boolean;
        };
        required_conversation_resolution?: {
          enabled?: boolean;
        };
        required_linear_history?: {
          enabled: boolean;
        };
        required_pull_request_reviews?: {
          bypass_pull_request_allowances?: {
            apps?: $schemas.Integration[];
            teams: $schemas.Team[];
            users: $schemas.SimpleUser[];
          };
          dismiss_stale_reviews?: boolean;
          dismissal_restrictions?: {
            apps?: $schemas.Integration[];
            teams: $schemas.Team[];
            /**
             * @format uri
             */
            teams_url: string;
            /**
             * @format uri
             */
            url: string;
            users: $schemas.SimpleUser[];
            /**
             * @format uri
             */
            users_url: string;
          };
          require_code_owner_reviews?: boolean;
          /**
           * Whether the most recent push must be approved by someone other than the person who pushed it.
           */
          require_last_push_approval?: boolean;
          required_approving_review_count?: number;
          /**
           * @format uri
           */
          url: string;
        };
        required_signatures?: {
          enabled: boolean;
          /**
           * @format uri
           */
          url: string;
        };
        /**
         * Status Check Policy
         */
        required_status_checks?: $schemas.StatusCheckPolicy;
        /**
         * Branch Restriction Policy
         */
        restrictions?: $schemas.BranchRestrictionPolicy;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Protected Branch Admin Enforced
       */
      interface ProtectedBranchAdminEnforced {
        enabled: boolean;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Protected Branch Pull Request Review
       */
      interface ProtectedBranchPullRequestReview {
        /**
         * Allow specific users, teams, or apps to bypass pull request requirements.
         */
        bypass_pull_request_allowances?: {
          /**
           * The list of apps allowed to bypass pull request requirements.
           */
          apps?: $schemas.Integration[];
          /**
           * The list of teams allowed to bypass pull request requirements.
           */
          teams?: $schemas.Team[];
          /**
           * The list of users allowed to bypass pull request requirements.
           */
          users?: $schemas.SimpleUser[];
        };
        dismiss_stale_reviews: boolean;
        dismissal_restrictions?: {
          /**
           * The list of apps with review dismissal access.
           */
          apps?: $schemas.Integration[];
          /**
           * The list of teams with review dismissal access.
           */
          teams?: $schemas.Team[];
          teams_url?: string;
          url?: string;
          /**
           * The list of users with review dismissal access.
           */
          users?: $schemas.SimpleUser[];
          users_url?: string;
        };
        require_code_owner_reviews: boolean;
        /**
         * Whether the most recent push must be approved by someone other than the person who pushed it.
         */
        require_last_push_approval?: boolean;
        /**
         * @maximum 6
         */
        required_approving_review_count?: number;
        /**
         * @format uri
         */
        url?: string;
      }

      /**
       * Protected Branch Required Status Check
       */
      interface ProtectedBranchRequiredStatusCheck {
        checks: Array<{
          app_id: number;
          context: string;
        }>;
        contexts: string[];
        contexts_url?: string;
        enforcement_level?: string;
        strict?: boolean;
        url?: string;
      }

      /**
       * Public User
       */
      interface PublicUser {
        /**
         * @format uri
         */
        avatar_url: string;
        bio: string;
        blog: string;
        collaborators?: number;
        company: string;
        /**
         * @format date-time
         */
        created_at: string;
        disk_usage?: number;
        /**
         * @format email
         */
        email: string;
        events_url: string;
        followers: number;
        /**
         * @format uri
         */
        followers_url: string;
        following: number;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        hireable: boolean;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        location: string;
        login: string;
        name: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        owned_private_repos?: number;
        plan?: {
          collaborators: number;
          name: string;
          private_repos: number;
          space: number;
        };
        private_gists?: number;
        public_gists: number;
        public_repos: number;
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        site_admin: boolean;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        /**
         * @format date-time
         */
        suspended_at?: string;
        total_private_repos?: number;
        twitter_username?: string;
        type: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
       */
      interface PullRequest {
        _links: {
          /**
           * Hypermedia Link
           */
          comments: $schemas.Link;
          /**
           * Hypermedia Link
           */
          commits: $schemas.Link;
          /**
           * Hypermedia Link
           */
          html: $schemas.Link;
          /**
           * Hypermedia Link
           */
          issue: $schemas.Link;
          /**
           * Hypermedia Link
           */
          review_comment: $schemas.Link;
          /**
           * Hypermedia Link
           */
          review_comments: $schemas.Link;
          /**
           * Hypermedia Link
           */
          self: $schemas.Link;
          /**
           * Hypermedia Link
           */
          statuses: $schemas.Link;
        };
        active_lock_reason?: string;
        additions: number;
        /**
         * A GitHub user.
         */
        assignee: $schemas.NullableSimpleUser;
        assignees?: $schemas.SimpleUser[];
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * The status of auto merging a pull request.
         */
        auto_merge: $schemas.AutoMerge;
        base: {
          label: string;
          ref: string;
          repo: {
            allow_forking?: boolean;
            allow_merge_commit?: boolean;
            allow_rebase_merge?: boolean;
            allow_squash_merge?: boolean;
            archive_url: string;
            archived: boolean;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            clone_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            /**
             * @format uri
             */
            contributors_url: string;
            /**
             * @format date-time
             */
            created_at: string;
            default_branch: string;
            /**
             * @format uri
             */
            deployments_url: string;
            description: string;
            disabled: boolean;
            /**
             * @format uri
             */
            downloads_url: string;
            /**
             * @format uri
             */
            events_url: string;
            fork: boolean;
            forks: number;
            forks_count: number;
            /**
             * @format uri
             */
            forks_url: string;
            full_name: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            has_discussions: boolean;
            has_downloads: boolean;
            has_issues: boolean;
            has_pages: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            /**
             * @format uri
             */
            homepage: string;
            /**
             * @format uri
             */
            hooks_url: string;
            /**
             * @format uri
             */
            html_url: string;
            id: number;
            is_template?: boolean;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            language: string;
            /**
             * @format uri
             */
            languages_url: string;
            /**
             * License Simple
             */
            license: $schemas.NullableLicenseSimple;
            master_branch?: string;
            /**
             * @format uri
             */
            merges_url: string;
            milestones_url: string;
            /**
             * @format uri
             */
            mirror_url: string;
            name: string;
            node_id: string;
            notifications_url: string;
            open_issues: number;
            open_issues_count: number;
            owner: {
              /**
               * @format uri
               */
              avatar_url: string;
              events_url: string;
              /**
               * @format uri
               */
              followers_url: string;
              following_url: string;
              gists_url: string;
              gravatar_id: string;
              /**
               * @format uri
               */
              html_url: string;
              id: number;
              login: string;
              node_id: string;
              /**
               * @format uri
               */
              organizations_url: string;
              /**
               * @format uri
               */
              received_events_url: string;
              /**
               * @format uri
               */
              repos_url: string;
              site_admin: boolean;
              starred_url: string;
              /**
               * @format uri
               */
              subscriptions_url: string;
              type: string;
              /**
               * @format uri
               */
              url: string;
            };
            permissions?: {
              admin: boolean;
              maintain?: boolean;
              pull: boolean;
              push: boolean;
              triage?: boolean;
            };
            private: boolean;
            pulls_url: string;
            /**
             * @format date-time
             */
            pushed_at: string;
            releases_url: string;
            size: number;
            ssh_url: string;
            stargazers_count: number;
            /**
             * @format uri
             */
            stargazers_url: string;
            statuses_url: string;
            /**
             * @format uri
             */
            subscribers_url: string;
            /**
             * @format uri
             */
            subscription_url: string;
            /**
             * @format uri
             */
            svn_url: string;
            /**
             * @format uri
             */
            tags_url: string;
            /**
             * @format uri
             */
            teams_url: string;
            temp_clone_token?: string;
            topics?: string[];
            trees_url: string;
            /**
             * @format date-time
             */
            updated_at: string;
            /**
             * @format uri
             */
            url: string;
            /**
             * The repository visibility: public, private, or internal.
             */
            visibility?: string;
            watchers: number;
            watchers_count: number;
            web_commit_signoff_required?: boolean;
          };
          sha: string;
          user: {
            /**
             * @format uri
             */
            avatar_url: string;
            events_url: string;
            /**
             * @format uri
             */
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            /**
             * @format uri
             */
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            /**
             * @format uri
             */
            organizations_url: string;
            /**
             * @format uri
             */
            received_events_url: string;
            /**
             * @format uri
             */
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            /**
             * @format uri
             */
            subscriptions_url: string;
            type: string;
            /**
             * @format uri
             */
            url: string;
          };
        };
        body: string;
        changed_files: number;
        /**
         * @format date-time
         */
        closed_at: string;
        comments: number;
        /**
         * @format uri
         */
        comments_url: string;
        commits: number;
        /**
         * @format uri
         */
        commits_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        deletions: number;
        /**
         * @format uri
         */
        diff_url: string;
        /**
         * Indicates whether or not the pull request is a draft.
         */
        draft?: boolean;
        head: {
          label: string;
          ref: string;
          repo: {
            allow_forking?: boolean;
            allow_merge_commit?: boolean;
            allow_rebase_merge?: boolean;
            allow_squash_merge?: boolean;
            archive_url: string;
            archived: boolean;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            clone_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            /**
             * @format uri
             */
            contributors_url: string;
            /**
             * @format date-time
             */
            created_at: string;
            default_branch: string;
            /**
             * @format uri
             */
            deployments_url: string;
            description: string;
            disabled: boolean;
            /**
             * @format uri
             */
            downloads_url: string;
            /**
             * @format uri
             */
            events_url: string;
            fork: boolean;
            forks: number;
            forks_count: number;
            /**
             * @format uri
             */
            forks_url: string;
            full_name: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url: string;
            has_discussions: boolean;
            has_downloads: boolean;
            has_issues: boolean;
            has_pages: boolean;
            has_projects: boolean;
            has_wiki: boolean;
            /**
             * @format uri
             */
            homepage: string;
            /**
             * @format uri
             */
            hooks_url: string;
            /**
             * @format uri
             */
            html_url: string;
            id: number;
            is_template?: boolean;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            language: string;
            /**
             * @format uri
             */
            languages_url: string;
            license: {
              key: string;
              name: string;
              node_id: string;
              spdx_id: string;
              /**
               * @format uri
               */
              url: string;
            };
            master_branch?: string;
            /**
             * @format uri
             */
            merges_url: string;
            milestones_url: string;
            /**
             * @format uri
             */
            mirror_url: string;
            name: string;
            node_id: string;
            notifications_url: string;
            open_issues: number;
            open_issues_count: number;
            owner: {
              /**
               * @format uri
               */
              avatar_url: string;
              events_url: string;
              /**
               * @format uri
               */
              followers_url: string;
              following_url: string;
              gists_url: string;
              gravatar_id: string;
              /**
               * @format uri
               */
              html_url: string;
              id: number;
              login: string;
              node_id: string;
              /**
               * @format uri
               */
              organizations_url: string;
              /**
               * @format uri
               */
              received_events_url: string;
              /**
               * @format uri
               */
              repos_url: string;
              site_admin: boolean;
              starred_url: string;
              /**
               * @format uri
               */
              subscriptions_url: string;
              type: string;
              /**
               * @format uri
               */
              url: string;
            };
            permissions?: {
              admin: boolean;
              maintain?: boolean;
              pull: boolean;
              push: boolean;
              triage?: boolean;
            };
            private: boolean;
            pulls_url: string;
            /**
             * @format date-time
             */
            pushed_at: string;
            releases_url: string;
            size: number;
            ssh_url: string;
            stargazers_count: number;
            /**
             * @format uri
             */
            stargazers_url: string;
            statuses_url: string;
            /**
             * @format uri
             */
            subscribers_url: string;
            /**
             * @format uri
             */
            subscription_url: string;
            /**
             * @format uri
             */
            svn_url: string;
            /**
             * @format uri
             */
            tags_url: string;
            /**
             * @format uri
             */
            teams_url: string;
            temp_clone_token?: string;
            topics?: string[];
            trees_url: string;
            /**
             * @format date-time
             */
            updated_at: string;
            /**
             * @format uri
             */
            url: string;
            /**
             * The repository visibility: public, private, or internal.
             */
            visibility?: string;
            watchers: number;
            watchers_count: number;
            web_commit_signoff_required?: boolean;
          };
          sha: string;
          user: {
            /**
             * @format uri
             */
            avatar_url: string;
            events_url: string;
            /**
             * @format uri
             */
            followers_url: string;
            following_url: string;
            gists_url: string;
            gravatar_id: string;
            /**
             * @format uri
             */
            html_url: string;
            id: number;
            login: string;
            node_id: string;
            /**
             * @format uri
             */
            organizations_url: string;
            /**
             * @format uri
             */
            received_events_url: string;
            /**
             * @format uri
             */
            repos_url: string;
            site_admin: boolean;
            starred_url: string;
            /**
             * @format uri
             */
            subscriptions_url: string;
            type: string;
            /**
             * @format uri
             */
            url: string;
          };
        };
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * @format uri
         */
        issue_url: string;
        labels: Array<{
          color: string;
          default: boolean;
          description: string;
          /**
           * @format int64
           */
          id: number | string;
          name: string;
          node_id: string;
          url: string;
        }>;
        locked: boolean;
        /**
         * Indicates whether maintainers can modify the pull request.
         */
        maintainer_can_modify: boolean;
        merge_commit_sha: string;
        mergeable: boolean;
        mergeable_state: string;
        merged: boolean;
        /**
         * @format date-time
         */
        merged_at: string;
        /**
         * A GitHub user.
         */
        merged_by: $schemas.NullableSimpleUser;
        /**
         * A collection of related issues and pull requests.
         */
        milestone: $schemas.NullableMilestone;
        node_id: string;
        /**
         * Number uniquely identifying the pull request within its repository.
         */
        number: number;
        /**
         * @format uri
         */
        patch_url: string;
        rebaseable?: boolean;
        requested_reviewers?: $schemas.SimpleUser[];
        requested_teams?: $schemas.TeamSimple[];
        review_comment_url: string;
        review_comments: number;
        /**
         * @format uri
         */
        review_comments_url: string;
        /**
         * State of this Pull Request. Either `open` or `closed`.
         */
        state: "closed" | "open";
        /**
         * @format uri
         */
        statuses_url: string;
        /**
         * The title of the pull request.
         */
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Pull Request Merge Result
       */
      interface PullRequestMergeResult {
        merged: boolean;
        message: string;
        sha: string;
      }

      interface PullRequestMinimal {
        base: {
          ref: string;
          repo: {
            id: number;
            name: string;
            url: string;
          };
          sha: string;
        };
        head: {
          ref: string;
          repo: {
            id: number;
            name: string;
            url: string;
          };
          sha: string;
        };
        id: number;
        number: number;
        url: string;
      }

      /**
       * Pull Request Reviews are reviews on pull requests.
       */
      interface PullRequestReview {
        _links: {
          html: {
            href: string;
          };
          pull_request: {
            href: string;
          };
        };
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * The text of the review.
         */
        body: string;
        body_html?: string;
        body_text?: string;
        /**
         * A commit SHA for the review. If the commit object was garbage collected or forcibly deleted, then it no longer exists in Git and this value will be `null`.
         */
        commit_id: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the review
         */
        id: number;
        node_id: string;
        /**
         * @format uri
         */
        pull_request_url: string;
        state: string;
        /**
         * @format date-time
         */
        submitted_at?: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Pull Request Review Comments are comments on a portion of the Pull Request's diff.
       */
      interface PullRequestReviewComment {
        _links: {
          html: {
            /**
             * @format uri
             */
            href: string;
          };
          pull_request: {
            /**
             * @format uri
             */
            href: string;
          };
          self: {
            /**
             * @format uri
             */
            href: string;
          };
        };
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * The text of the comment.
         */
        body: string;
        body_html?: string;
        body_text?: string;
        /**
         * The SHA of the commit to which the comment applies.
         */
        commit_id: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The diff of the line that the comment refers to.
         */
        diff_hunk: string;
        /**
         * HTML URL for the pull request review comment.
         * @format uri
         */
        html_url: string;
        /**
         * The ID of the pull request review comment.
         */
        id: number;
        /**
         * The comment ID to reply to.
         */
        in_reply_to_id?: number;
        /**
         * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
         */
        line?: number;
        /**
         * The node ID of the pull request review comment.
         */
        node_id: string;
        /**
         * The SHA of the original commit to which the comment applies.
         */
        original_commit_id: string;
        /**
         * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
         */
        original_line?: number;
        /**
         * The index of the original line in the diff to which the comment applies. This field is deprecated; use `original_line` instead.
         */
        original_position: number;
        /**
         * The first line of the range for a multi-line comment.
         */
        original_start_line?: number;
        /**
         * The relative path of the file to which the comment applies.
         */
        path: string;
        /**
         * The line index in the diff to which the comment applies. This field is deprecated; use `line` instead.
         */
        position: number;
        /**
         * The ID of the pull request review to which the comment belongs.
         */
        pull_request_review_id: number;
        /**
         * URL for the pull request that the review comment belongs to.
         * @format uri
         */
        pull_request_url: string;
        reactions?: $schemas.ReactionRollup;
        /**
         * The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
         * @default RIGHT
         */
        side?: "LEFT" | "RIGHT";
        /**
         * The first line of the range for a multi-line comment.
         */
        start_line?: number;
        /**
         * The side of the first line of the range for a multi-line comment.
         * @default RIGHT
         */
        start_side?: "LEFT" | "RIGHT";
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * URL for the pull request review comment
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.SimpleUser;
      }

      /**
       * Pull Request Review Request
       */
      interface PullRequestReviewRequest {
        teams: $schemas.Team[];
        users: $schemas.SimpleUser[];
      }

      /**
       * Pull Request Simple
       */
      interface PullRequestSimple {
        _links: {
          /**
           * Hypermedia Link
           */
          comments: $schemas.Link;
          /**
           * Hypermedia Link
           */
          commits: $schemas.Link;
          /**
           * Hypermedia Link
           */
          html: $schemas.Link;
          /**
           * Hypermedia Link
           */
          issue: $schemas.Link;
          /**
           * Hypermedia Link
           */
          review_comment: $schemas.Link;
          /**
           * Hypermedia Link
           */
          review_comments: $schemas.Link;
          /**
           * Hypermedia Link
           */
          self: $schemas.Link;
          /**
           * Hypermedia Link
           */
          statuses: $schemas.Link;
        };
        active_lock_reason?: string;
        /**
         * A GitHub user.
         */
        assignee: $schemas.NullableSimpleUser;
        assignees?: $schemas.SimpleUser[];
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * The status of auto merging a pull request.
         */
        auto_merge: $schemas.AutoMerge;
        base: {
          label: string;
          ref: string;
          /**
           * A repository on GitHub.
           */
          repo: $schemas.Repository;
          sha: string;
          /**
           * A GitHub user.
           */
          user: $schemas.NullableSimpleUser;
        };
        body: string;
        /**
         * @format date-time
         */
        closed_at: string;
        /**
         * @format uri
         */
        comments_url: string;
        /**
         * @format uri
         */
        commits_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        diff_url: string;
        /**
         * Indicates whether or not the pull request is a draft.
         */
        draft?: boolean;
        head: {
          label: string;
          ref: string;
          /**
           * A repository on GitHub.
           */
          repo: $schemas.Repository;
          sha: string;
          /**
           * A GitHub user.
           */
          user: $schemas.NullableSimpleUser;
        };
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        /**
         * @format uri
         */
        issue_url: string;
        labels: Array<{
          color: string;
          default: boolean;
          description: string;
          /**
           * @format int64
           */
          id: number | string;
          name: string;
          node_id: string;
          url: string;
        }>;
        locked: boolean;
        merge_commit_sha: string;
        /**
         * @format date-time
         */
        merged_at: string;
        /**
         * A collection of related issues and pull requests.
         */
        milestone: $schemas.NullableMilestone;
        node_id: string;
        number: number;
        /**
         * @format uri
         */
        patch_url: string;
        requested_reviewers?: $schemas.SimpleUser[];
        requested_teams?: $schemas.Team[];
        review_comment_url: string;
        /**
         * @format uri
         */
        review_comments_url: string;
        state: string;
        /**
         * @format uri
         */
        statuses_url: string;
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      interface RateLimit {
        limit: number;
        remaining: number;
        reset: number;
        used: number;
      }

      /**
       * Rate Limit Overview
       */
      interface RateLimitOverview {
        rate: $schemas.RateLimit;
        resources: {
          actions_runner_registration?: $schemas.RateLimit;
          code_scanning_upload?: $schemas.RateLimit;
          core: $schemas.RateLimit;
          dependency_snapshots?: $schemas.RateLimit;
          graphql?: $schemas.RateLimit;
          integration_manifest?: $schemas.RateLimit;
          scim?: $schemas.RateLimit;
          search: $schemas.RateLimit;
          source_import?: $schemas.RateLimit;
        };
      }

      /**
       * Reactions to conversations provide a way to help people express their feelings more simply and effectively.
       */
      interface Reaction {
        /**
         * The reaction to use
         */
        content:
          | "+1"
          | "-1"
          | "confused"
          | "eyes"
          | "heart"
          | "hooray"
          | "laugh"
          | "rocket";
        /**
         * @format date-time
         */
        created_at: string;
        id: number;
        node_id: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      interface ReactionRollup {
        "+1": number;
        "-1": number;
        confused: number;
        eyes: number;
        heart: number;
        hooray: number;
        laugh: number;
        rocket: number;
        total_count: number;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A workflow referenced/reused by the initial caller workflow
       */
      interface ReferencedWorkflow {
        path: string;
        ref?: string;
        sha: string;
      }

      /**
       * Referrer Traffic
       */
      interface ReferrerTraffic {
        count: number;
        referrer: string;
        uniques: number;
      }

      /**
       * A release.
       */
      interface Release {
        assets: $schemas.ReleaseAsset[];
        /**
         * @format uri
         */
        assets_url: string;
        /**
         * A GitHub user.
         */
        author: $schemas.SimpleUser;
        body?: string;
        body_html?: string;
        body_text?: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The URL of the release discussion.
         * @format uri
         */
        discussion_url?: string;
        /**
         * true to create a draft (unpublished) release, false to create a published one.
         */
        draft: boolean;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        mentions_count?: number;
        name: string;
        node_id: string;
        /**
         * Whether to identify the release as a prerelease or a full release.
         */
        prerelease: boolean;
        /**
         * @format date-time
         */
        published_at: string;
        reactions?: $schemas.ReactionRollup;
        /**
         * The name of the tag.
         */
        tag_name: string;
        /**
         * @format uri
         */
        tarball_url: string;
        /**
         * Specifies the commitish value that determines where the Git tag is created from.
         */
        target_commitish: string;
        upload_url: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * @format uri
         */
        zipball_url: string;
      }

      /**
       * Data related to a release.
       */
      interface ReleaseAsset {
        /**
         * @format uri
         */
        browser_download_url: string;
        content_type: string;
        /**
         * @format date-time
         */
        created_at: string;
        download_count: number;
        id: number;
        label: string;
        /**
         * The file name of the asset.
         */
        name: string;
        node_id: string;
        size: number;
        /**
         * State of the release asset.
         */
        state: "open" | "uploaded";
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * A GitHub user.
         */
        uploader: $schemas.NullableSimpleUser;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Generated name and body describing a release
       */
      interface ReleaseNotesContent {
        /**
         * The generated body describing the contents of the release supporting markdown formatting
         */
        body: string;
        /**
         * The generated name of the release
         */
        name: string;
      }

      /**
       * Removed from Project Issue Event
       */
      interface RemovedFromProjectIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        project_card?: {
          column_name: string;
          id: number;
          previous_column_name?: string;
          project_id: number;
          /**
           * @format uri
           */
          project_url: string;
          /**
           * @format uri
           */
          url: string;
        };
        url: string;
      }

      /**
       * Renamed Issue Event
       */
      interface RenamedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        rename: {
          from: string;
          to: string;
        };
        url: string;
      }

      /**
       * Set repository secrets for GitHub Codespaces.
       */
      interface RepoCodespacesSecret {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The name of the secret.
         */
        name: string;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      /**
       * A GitHub Actions required workflow
       */
      interface RepoRequiredWorkflow {
        badge_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        html_url: string;
        id: number;
        name: string;
        node_id: string;
        path: string;
        /**
         * Minimal Repository
         */
        source_repository: $schemas.MinimalRepository;
        state: "active" | "deleted";
        /**
         * @format date-time
         */
        updated_at: string;
        url: string;
      }

      /**
       * Repo Search Result Item
       */
      interface RepoSearchResultItem {
        allow_auto_merge?: boolean;
        allow_forking?: boolean;
        allow_merge_commit?: boolean;
        allow_rebase_merge?: boolean;
        allow_squash_merge?: boolean;
        archive_url: string;
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        default_branch: string;
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        /**
         * Returns whether or not this repository disabled.
         */
        disabled: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        has_discussions?: boolean;
        has_downloads: boolean;
        has_issues: boolean;
        has_pages: boolean;
        has_projects: boolean;
        has_wiki: boolean;
        /**
         * @format uri
         */
        homepage: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string;
        /**
         * @format uri
         */
        languages_url: string;
        /**
         * License Simple
         */
        license: $schemas.NullableLicenseSimple;
        master_branch?: string;
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        /**
         * @format uri
         */
        mirror_url: string;
        name: string;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        /**
         * A GitHub user.
         */
        owner: $schemas.NullableSimpleUser;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at: string;
        releases_url: string;
        score: number;
        size: number;
        ssh_url: string;
        stargazers_count: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        statuses_url: string;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        /**
         * @format uri
         */
        svn_url: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        text_matches?: $schemas.SearchResultTextMatches;
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * The repository visibility: public, private, or internal.
         */
        visibility?: string;
        watchers: number;
        watchers_count: number;
        web_commit_signoff_required?: boolean;
      }

      /**
       * A repository on GitHub.
       */
      interface Repository {
        /**
         * Whether to allow Auto-merge to be used on pull requests.
         */
        allow_auto_merge?: boolean;
        /**
         * Whether to allow forking this repo
         */
        allow_forking?: boolean;
        /**
         * Whether to allow merge commits for pull requests.
         * @default true
         */
        allow_merge_commit?: boolean;
        /**
         * Whether to allow rebase merges for pull requests.
         * @default true
         */
        allow_rebase_merge?: boolean;
        /**
         * Whether to allow squash merges for pull requests.
         * @default true
         */
        allow_squash_merge?: boolean;
        /**
         * Whether or not a pull request head branch that is behind its base branch can always be updated even if it is not required to be up to date before merging.
         */
        allow_update_branch?: boolean;
        /**
         * Whether anonymous git access is enabled for this repository
         */
        anonymous_access_enabled?: boolean;
        archive_url: string;
        /**
         * Whether the repository is archived.
         */
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The default branch of the repository.
         */
        default_branch: string;
        /**
         * Whether to delete head branches when pull requests are merged
         */
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        /**
         * Returns whether or not this repository disabled.
         */
        disabled: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        /**
         * Whether discussions are enabled.
         */
        has_discussions?: boolean;
        /**
         * Whether downloads are enabled.
         * @default true
         */
        has_downloads: boolean;
        /**
         * Whether issues are enabled.
         * @default true
         */
        has_issues: boolean;
        has_pages: boolean;
        /**
         * Whether projects are enabled.
         * @default true
         */
        has_projects: boolean;
        /**
         * Whether the wiki is enabled.
         * @default true
         */
        has_wiki: boolean;
        /**
         * @format uri
         */
        homepage: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the repository
         */
        id: number;
        /**
         * Whether this repository acts as a template that can be used to generate new repositories.
         */
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string;
        /**
         * @format uri
         */
        languages_url: string;
        /**
         * License Simple
         */
        license: $schemas.NullableLicenseSimple;
        master_branch?: string;
        /**
         * The default value for a merge commit message.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `PR_BODY` - default to the pull request's body.
         * - `BLANK` - default to a blank commit message.
         */
        merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
        /**
         * The default value for a merge commit title.
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
         */
        merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        /**
         * @format uri
         */
        mirror_url: string;
        /**
         * The name of the repository.
         */
        name: string;
        network_count?: number;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        /**
         * A GitHub user.
         */
        organization?: $schemas.NullableSimpleUser;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        /**
         * Whether the repository is private or public.
         */
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at: string;
        releases_url: string;
        /**
         * The size of the repository. Size is calculated hourly. When a repository is initially created, the size is 0.
         */
        size: number;
        /**
         * The default value for a squash merge commit message:
         *
         * - `PR_BODY` - default to the pull request's body.
         * - `COMMIT_MESSAGES` - default to the branch's commit messages.
         * - `BLANK` - default to a blank commit message.
         */
        squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
        /**
         * The default value for a squash merge commit title:
         *
         * - `PR_TITLE` - default to the pull request's title.
         * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
         */
        squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
        ssh_url: string;
        stargazers_count: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        starred_at?: string;
        statuses_url: string;
        subscribers_count?: number;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        /**
         * @format uri
         */
        svn_url: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        template_repository?: {
          allow_auto_merge?: boolean;
          allow_merge_commit?: boolean;
          allow_rebase_merge?: boolean;
          allow_squash_merge?: boolean;
          allow_update_branch?: boolean;
          archive_url?: string;
          archived?: boolean;
          assignees_url?: string;
          blobs_url?: string;
          branches_url?: string;
          clone_url?: string;
          collaborators_url?: string;
          comments_url?: string;
          commits_url?: string;
          compare_url?: string;
          contents_url?: string;
          contributors_url?: string;
          created_at?: string;
          default_branch?: string;
          delete_branch_on_merge?: boolean;
          deployments_url?: string;
          description?: string;
          disabled?: boolean;
          downloads_url?: string;
          events_url?: string;
          fork?: boolean;
          forks_count?: number;
          forks_url?: string;
          full_name?: string;
          git_commits_url?: string;
          git_refs_url?: string;
          git_tags_url?: string;
          git_url?: string;
          has_downloads?: boolean;
          has_issues?: boolean;
          has_pages?: boolean;
          has_projects?: boolean;
          has_wiki?: boolean;
          homepage?: string;
          hooks_url?: string;
          html_url?: string;
          id?: number;
          is_template?: boolean;
          issue_comment_url?: string;
          issue_events_url?: string;
          issues_url?: string;
          keys_url?: string;
          labels_url?: string;
          language?: string;
          languages_url?: string;
          /**
           * The default value for a merge commit message.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `PR_BODY` - default to the pull request's body.
           * - `BLANK` - default to a blank commit message.
           */
          merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
          /**
           * The default value for a merge commit title.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
           */
          merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
          merges_url?: string;
          milestones_url?: string;
          mirror_url?: string;
          name?: string;
          network_count?: number;
          node_id?: string;
          notifications_url?: string;
          open_issues_count?: number;
          owner?: {
            avatar_url?: string;
            events_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            gravatar_id?: string;
            html_url?: string;
            id?: number;
            login?: string;
            node_id?: string;
            organizations_url?: string;
            received_events_url?: string;
            repos_url?: string;
            site_admin?: boolean;
            starred_url?: string;
            subscriptions_url?: string;
            type?: string;
            url?: string;
          };
          permissions?: {
            admin?: boolean;
            maintain?: boolean;
            pull?: boolean;
            push?: boolean;
            triage?: boolean;
          };
          private?: boolean;
          pulls_url?: string;
          pushed_at?: string;
          releases_url?: string;
          size?: number;
          /**
           * The default value for a squash merge commit message:
           *
           * - `PR_BODY` - default to the pull request's body.
           * - `COMMIT_MESSAGES` - default to the branch's commit messages.
           * - `BLANK` - default to a blank commit message.
           */
          squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
          /**
           * The default value for a squash merge commit title:
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
           */
          squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
          ssh_url?: string;
          stargazers_count?: number;
          stargazers_url?: string;
          statuses_url?: string;
          subscribers_count?: number;
          subscribers_url?: string;
          subscription_url?: string;
          svn_url?: string;
          tags_url?: string;
          teams_url?: string;
          temp_clone_token?: string;
          topics?: string[];
          trees_url?: string;
          updated_at?: string;
          url?: string;
          use_squash_pr_title_as_default?: boolean;
          visibility?: string;
          watchers_count?: number;
        };
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * Whether a squash merge commit can use the pull request title as default. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
         * @deprecated
         */
        use_squash_pr_title_as_default?: boolean;
        /**
         * The repository visibility: public, private, or internal.
         * @default public
         */
        visibility?: string;
        watchers: number;
        watchers_count: number;
        /**
         * Whether to require contributors to sign off on web-based commits
         */
        web_commit_signoff_required?: boolean;
      }

      /**
       * Repository Collaborator Permission
       */
      interface RepositoryCollaboratorPermission {
        permission: string;
        role_name: string;
        /**
         * Collaborator
         */
        user: $schemas.NullableCollaborator;
      }

      /**
       * Repository invitations let you manage who you collaborate with.
       */
      interface RepositoryInvitation {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * Whether or not the invitation has expired
         */
        expired?: boolean;
        html_url: string;
        /**
         * Unique identifier of the repository invitation.
         */
        id: number;
        /**
         * A GitHub user.
         */
        invitee: $schemas.NullableSimpleUser;
        /**
         * A GitHub user.
         */
        inviter: $schemas.NullableSimpleUser;
        node_id: string;
        /**
         * The permission associated with the invitation.
         */
        permissions: "admin" | "maintain" | "read" | "triage" | "write";
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        /**
         * URL for the repository invitation
         */
        url: string;
      }

      /**
       * Repository invitations let you manage who you collaborate with.
       */
      interface RepositorySubscription {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * Determines if all notifications should be blocked from this repository.
         */
        ignored: boolean;
        reason: string;
        /**
         * @format uri
         */
        repository_url: string;
        /**
         * Determines if notifications should be received from this repository.
         */
        subscribed: boolean;
        /**
         * @format uri
         */
        url: string;
      }

      interface RequiredWorkflow {
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * Unique identifier for a required workflow
         */
        id: number;
        /**
         * Name present in the workflow file
         */
        name: string;
        /**
         * Path of the workflow file
         */
        path: string;
        /**
         * Ref at which the workflow file will be selected
         */
        ref: string;
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        /**
         * Scope of the required workflow
         */
        scope: "all" | "selected";
        /**
         * @format uri
         */
        selected_repositories_url?: string;
        /**
         * State of the required workflow
         */
        state: "active" | "deleted";
        /**
         * @format date-time
         */
        updated_at: string;
      }

      /**
       * Legacy Review Comment
       */
      interface ReviewComment {
        _links: {
          /**
           * Hypermedia Link
           */
          html: $schemas.Link;
          /**
           * Hypermedia Link
           */
          pull_request: $schemas.Link;
          /**
           * Hypermedia Link
           */
          self: $schemas.Link;
        };
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        body: string;
        body_html?: string;
        body_text?: string;
        commit_id: string;
        /**
         * @format date-time
         */
        created_at: string;
        diff_hunk: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        in_reply_to_id?: number;
        /**
         * The line of the blob to which the comment applies. The last line of the range for a multi-line comment
         */
        line?: number;
        node_id: string;
        original_commit_id: string;
        /**
         * The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
         */
        original_line?: number;
        original_position: number;
        /**
         * The original first line of the range for a multi-line comment.
         */
        original_start_line?: number;
        path: string;
        position: number;
        pull_request_review_id: number;
        /**
         * @format uri
         */
        pull_request_url: string;
        reactions?: $schemas.ReactionRollup;
        /**
         * The side of the first line of the range for a multi-line comment.
         * @default RIGHT
         */
        side?: "LEFT" | "RIGHT";
        /**
         * The first line of the range for a multi-line comment.
         */
        start_line?: number;
        /**
         * The side of the first line of the range for a multi-line comment.
         * @default RIGHT
         */
        start_side?: "LEFT" | "RIGHT";
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Review Dismissed Issue Event
       */
      interface ReviewDismissedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        dismissed_review: {
          dismissal_commit_id?: string;
          dismissal_message: string;
          review_id: number;
          state: string;
        };
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * Review Request Removed Issue Event
       */
      interface ReviewRequestRemovedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        /**
         * A GitHub user.
         */
        requested_reviewer?: $schemas.SimpleUser;
        /**
         * Groups of organization members that gives permissions on specified repositories.
         */
        requested_team?: $schemas.Team;
        /**
         * A GitHub user.
         */
        review_requester: $schemas.SimpleUser;
        url: string;
      }

      /**
       * Review Requested Issue Event
       */
      interface ReviewRequestedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        /**
         * A GitHub user.
         */
        requested_reviewer?: $schemas.SimpleUser;
        /**
         * Groups of organization members that gives permissions on specified repositories.
         */
        requested_team?: $schemas.Team;
        /**
         * A GitHub user.
         */
        review_requester: $schemas.SimpleUser;
        url: string;
      }

      interface Root {
        /**
         * @format uri-template
         */
        authorizations_url: string;
        /**
         * @format uri-template
         */
        code_search_url: string;
        /**
         * @format uri-template
         */
        commit_search_url: string;
        /**
         * @format uri-template
         */
        current_user_authorizations_html_url: string;
        /**
         * @format uri-template
         */
        current_user_repositories_url: string;
        /**
         * @format uri-template
         */
        current_user_url: string;
        /**
         * @format uri-template
         */
        emails_url: string;
        /**
         * @format uri-template
         */
        emojis_url: string;
        /**
         * @format uri-template
         */
        events_url: string;
        /**
         * @format uri-template
         */
        feeds_url: string;
        /**
         * @format uri-template
         */
        followers_url: string;
        /**
         * @format uri-template
         */
        following_url: string;
        /**
         * @format uri-template
         */
        gists_url: string;
        /**
         * @format uri-template
         */
        hub_url: string;
        /**
         * @format uri-template
         */
        issue_search_url: string;
        /**
         * @format uri-template
         */
        issues_url: string;
        /**
         * @format uri-template
         */
        keys_url: string;
        /**
         * @format uri-template
         */
        label_search_url: string;
        /**
         * @format uri-template
         */
        notifications_url: string;
        /**
         * @format uri-template
         */
        organization_repositories_url: string;
        /**
         * @format uri-template
         */
        organization_teams_url: string;
        /**
         * @format uri-template
         */
        organization_url: string;
        /**
         * @format uri-template
         */
        public_gists_url: string;
        /**
         * @format uri-template
         */
        rate_limit_url: string;
        /**
         * @format uri-template
         */
        repository_search_url: string;
        /**
         * @format uri-template
         */
        repository_url: string;
        /**
         * @format uri-template
         */
        starred_gists_url: string;
        /**
         * @format uri-template
         */
        starred_url: string;
        /**
         * @format uri-template
         */
        topic_search_url?: string;
        /**
         * @format uri-template
         */
        user_organizations_url: string;
        /**
         * @format uri-template
         */
        user_repositories_url: string;
        /**
         * @format uri-template
         */
        user_search_url: string;
        /**
         * @format uri-template
         */
        user_url: string;
      }

      /**
       * A self hosted runner
       */
      interface Runner {
        busy: boolean;
        /**
         * The id of the runner.
         */
        id: number;
        labels: $schemas.RunnerLabel[];
        /**
         * The name of the runner.
         */
        name: string;
        /**
         * The Operating System of the runner.
         */
        os: string;
        /**
         * The status of the runner.
         */
        status: string;
      }

      /**
       * Runner Application
       */
      interface RunnerApplication {
        architecture: string;
        download_url: string;
        filename: string;
        os: string;
        sha256_checksum?: string;
        /**
         * A short lived bearer token used to download the runner, if needed.
         */
        temp_download_token?: string;
      }

      /**
       * A label for a self hosted runner
       */
      interface RunnerLabel {
        /**
         * Unique identifier of the label.
         */
        id?: number;
        /**
         * Name of the label.
         */
        name: string;
        /**
         * The type of label. Read-only labels are applied automatically when the runner is configured.
         */
        type?: "custom" | "read-only";
      }

      type SearchResultTextMatches = Array<{
        fragment?: string;
        matches?: Array<{
          indices?: number[];
          text?: string;
        }>;
        object_type?: string;
        object_url?: string;
        property?: string;
      }>;

      interface SecretScanningAlert {
        /**
         * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        created_at?: $schemas.AlertCreatedAt;
        /**
         * The GitHub URL of the alert resource.
         * @format uri
         */
        html_url?: $schemas.AlertHtmlUrl;
        /**
         * The REST API URL of the code locations for this alert.
         * @format uri
         */
        locations_url?: string;
        /**
         * The security alert number.
         */
        number?: $schemas.AlertNumber;
        /**
         * Whether push protection was bypassed for the detected secret.
         */
        push_protection_bypassed?: boolean;
        /**
         * The time that push protection was bypassed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        push_protection_bypassed_at?: string;
        /**
         * A GitHub user.
         */
        push_protection_bypassed_by?: $schemas.NullableSimpleUser;
        /**
         * **Required when the `state` is `resolved`.** The reason for resolving the alert.
         */
        resolution?: $schemas.SecretScanningAlertResolution;
        /**
         * An optional comment to resolve an alert.
         */
        resolution_comment?: string;
        /**
         * The time that the alert was resolved in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        resolved_at?: string;
        /**
         * A GitHub user.
         */
        resolved_by?: $schemas.NullableSimpleUser;
        /**
         * The secret that was detected.
         */
        secret?: string;
        /**
         * The type of secret that secret scanning detected.
         */
        secret_type?: string;
        /**
         * User-friendly name for the detected secret, matching the `secret_type`.
         * For a list of built-in patterns, see "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)."
         */
        secret_type_display_name?: string;
        /**
         * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
         */
        state?: $schemas.SecretScanningAlertState;
        /**
         * The time that the alert was last updated in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
         * @format date-time
         */
        updated_at?: $schemas.NullableAlertUpdatedAt;
        /**
         * The REST API URL of the alert resource.
         * @format uri
         */
        url?: $schemas.AlertUrl;
      }

      /**
       * **Required when the `state` is `resolved`.** The reason for resolving the alert.
       */
      type SecretScanningAlertResolution =
        | "false_positive"
        | "revoked"
        | "used_in_tests"
        | "wont_fix"
        | null;

      /**
       * An optional comment when closing an alert. Cannot be updated or deleted. Must be `null` when changing `state` to `open`.
       */
      type SecretScanningAlertResolutionComment = string;

      /**
       * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
       */
      type SecretScanningAlertState = "open" | "resolved";

      interface SecretScanningLocation {
        details:
          | $schemas.SecretScanningLocationCommit
          | $schemas.SecretScanningLocationIssueTitle
          | $schemas.SecretScanningLocationIssueBody
          | $schemas.SecretScanningLocationIssueComment;
        /**
         * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
         */
        type: "commit" | "issue_body" | "issue_comment" | "issue_title";
      }

      /**
       * Represents a 'commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository.
       */
      interface SecretScanningLocationCommit {
        /**
         * SHA-1 hash ID of the associated blob
         */
        blob_sha: string;
        /**
         * The API URL to get the associated blob resource
         */
        blob_url: string;
        /**
         * SHA-1 hash ID of the associated commit
         */
        commit_sha: string;
        /**
         * The API URL to get the associated commit resource
         */
        commit_url: string;
        /**
         * The column at which the secret ends within the end line when the file is interpreted as 8BIT ASCII
         */
        end_column: number;
        /**
         * Line number at which the secret ends in the file
         */
        end_line: number;
        /**
         * The file path in the repository
         */
        path: string;
        /**
         * The column at which the secret starts within the start line when the file is interpreted as 8BIT ASCII
         */
        start_column: number;
        /**
         * Line number at which the secret starts in the file
         */
        start_line: number;
      }

      /**
       * Represents an 'issue_body' secret scanning location type. This location type shows that a secret was detected in the body of an issue.
       */
      interface SecretScanningLocationIssueBody {
        /**
         * The API URL to get the issue where the secret was detected.
         * @format uri
         */
        issue_body_url: string;
      }

      /**
       * Represents an 'issue_comment' secret scanning location type. This location type shows that a secret was detected in a comment on an issue.
       */
      interface SecretScanningLocationIssueComment {
        /**
         * The API URL to get the issue comment where the secret was detected.
         * @format uri
         */
        issue_comment_url: string;
      }

      /**
       * Represents an 'issue_title' secret scanning location type. This location type shows that a secret was detected in the title of an issue.
       */
      interface SecretScanningLocationIssueTitle {
        /**
         * The API URL to get the issue where the secret was detected.
         * @format uri
         */
        issue_title_url: string;
      }

      interface SecurityAndAnalysis {
        advanced_security?: {
          status?: "disabled" | "enabled";
        };
        secret_scanning?: {
          status?: "disabled" | "enabled";
        };
        secret_scanning_push_protection?: {
          status?: "disabled" | "enabled";
        };
      }

      interface SelectedActions {
        /**
         * Whether GitHub-owned actions are allowed. For example, this includes the actions in the `actions` organization.
         */
        github_owned_allowed?: boolean;
        /**
         * Specifies a list of string-matching patterns to allow specific action(s) and reusable workflow(s). Wildcards, tags, and SHAs are allowed. For example, `monalisa/octocat@*`, `monalisa/octocat@v2`, `monalisa/*`.
         *
         * **Note**: The `patterns_allowed` setting only applies to public repositories.
         */
        patterns_allowed?: string[];
        /**
         * Whether actions from GitHub Marketplace verified creators are allowed. Set to `true` to allow all actions by GitHub Marketplace verified creators.
         */
        verified_allowed?: boolean;
      }

      /**
       * The API URL to use to get or set the actions and reusable workflows that are allowed to run, when `allowed_actions` is set to `selected`.
       */
      type SelectedActionsUrl = string;

      /**
       * Short Blob
       */
      interface ShortBlob {
        sha: string;
        url: string;
      }

      /**
       * Short Branch
       */
      interface ShortBranch {
        commit: {
          sha: string;
          /**
           * @format uri
           */
          url: string;
        };
        name: string;
        protected: boolean;
        /**
         * Branch Protection
         */
        protection?: $schemas.BranchProtection;
        /**
         * @format uri
         */
        protection_url?: string;
      }

      /**
       * A commit.
       */
      interface SimpleCommit {
        author: {
          email: string;
          name: string;
        };
        committer: {
          email: string;
          name: string;
        };
        id: string;
        message: string;
        /**
         * @format date-time
         */
        timestamp: string;
        tree_id: string;
      }

      interface SimpleCommitStatus {
        /**
         * @format uri
         */
        avatar_url: string;
        context: string;
        /**
         * @format date-time
         */
        created_at: string;
        description: string;
        id: number;
        node_id: string;
        required?: boolean;
        state: string;
        /**
         * @format uri
         */
        target_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A GitHub repository.
       */
      interface SimpleRepository {
        /**
         * A template for the API URL to download the repository as an archive.
         */
        archive_url: string;
        /**
         * A template for the API URL to list the available assignees for issues in the repository.
         */
        assignees_url: string;
        /**
         * A template for the API URL to create or retrieve a raw Git blob in the repository.
         */
        blobs_url: string;
        /**
         * A template for the API URL to get information about branches in the repository.
         */
        branches_url: string;
        /**
         * A template for the API URL to get information about collaborators of the repository.
         */
        collaborators_url: string;
        /**
         * A template for the API URL to get information about comments on the repository.
         */
        comments_url: string;
        /**
         * A template for the API URL to get information about commits on the repository.
         */
        commits_url: string;
        /**
         * A template for the API URL to compare two commits or refs.
         */
        compare_url: string;
        /**
         * A template for the API URL to get the contents of the repository.
         */
        contents_url: string;
        /**
         * A template for the API URL to list the contributors to the repository.
         * @format uri
         */
        contributors_url: string;
        /**
         * The API URL to list the deployments of the repository.
         * @format uri
         */
        deployments_url: string;
        /**
         * The repository description.
         */
        description: string;
        /**
         * The API URL to list the downloads on the repository.
         * @format uri
         */
        downloads_url: string;
        /**
         * The API URL to list the events of the repository.
         * @format uri
         */
        events_url: string;
        /**
         * Whether the repository is a fork.
         */
        fork: boolean;
        /**
         * The API URL to list the forks of the repository.
         * @format uri
         */
        forks_url: string;
        /**
         * The full, globally unique, name of the repository.
         */
        full_name: string;
        /**
         * A template for the API URL to get information about Git commits of the repository.
         */
        git_commits_url: string;
        /**
         * A template for the API URL to get information about Git refs of the repository.
         */
        git_refs_url: string;
        /**
         * A template for the API URL to get information about Git tags of the repository.
         */
        git_tags_url: string;
        /**
         * The API URL to list the hooks on the repository.
         * @format uri
         */
        hooks_url: string;
        /**
         * The URL to view the repository on GitHub.com.
         * @format uri
         */
        html_url: string;
        /**
         * A unique identifier of the repository.
         */
        id: number;
        /**
         * A template for the API URL to get information about issue comments on the repository.
         */
        issue_comment_url: string;
        /**
         * A template for the API URL to get information about issue events on the repository.
         */
        issue_events_url: string;
        /**
         * A template for the API URL to get information about issues on the repository.
         */
        issues_url: string;
        /**
         * A template for the API URL to get information about deploy keys on the repository.
         */
        keys_url: string;
        /**
         * A template for the API URL to get information about labels of the repository.
         */
        labels_url: string;
        /**
         * The API URL to get information about the languages of the repository.
         * @format uri
         */
        languages_url: string;
        /**
         * The API URL to merge branches in the repository.
         * @format uri
         */
        merges_url: string;
        /**
         * A template for the API URL to get information about milestones of the repository.
         */
        milestones_url: string;
        /**
         * The name of the repository.
         */
        name: string;
        /**
         * The GraphQL identifier of the repository.
         */
        node_id: string;
        /**
         * A template for the API URL to get information about notifications on the repository.
         */
        notifications_url: string;
        /**
         * A GitHub user.
         */
        owner: $schemas.SimpleUser;
        /**
         * Whether the repository is private.
         */
        private: boolean;
        /**
         * A template for the API URL to get information about pull requests on the repository.
         */
        pulls_url: string;
        /**
         * A template for the API URL to get information about releases on the repository.
         */
        releases_url: string;
        /**
         * The API URL to list the stargazers on the repository.
         * @format uri
         */
        stargazers_url: string;
        /**
         * A template for the API URL to get information about statuses of a commit.
         */
        statuses_url: string;
        /**
         * The API URL to list the subscribers on the repository.
         * @format uri
         */
        subscribers_url: string;
        /**
         * The API URL to subscribe to notifications for this repository.
         * @format uri
         */
        subscription_url: string;
        /**
         * The API URL to get information about tags on the repository.
         * @format uri
         */
        tags_url: string;
        /**
         * The API URL to list the teams on the repository.
         * @format uri
         */
        teams_url: string;
        /**
         * A template for the API URL to create or retrieve a raw Git tree of the repository.
         */
        trees_url: string;
        /**
         * The URL to get more information about the repository from the GitHub API.
         * @format uri
         */
        url: string;
      }

      /**
       * A GitHub user.
       */
      interface SimpleUser {
        /**
         * @format uri
         */
        avatar_url: string;
        email?: string;
        events_url: string;
        /**
         * @format uri
         */
        followers_url: string;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        login: string;
        name?: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        site_admin: boolean;
        starred_at?: string;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        type: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Create a new snapshot of a repository's dependencies.
       */
      interface Snapshot {
        /**
         * A description of the detector used.
         */
        detector: {
          /**
           * The name of the detector used.
           */
          name: string;
          /**
           * The url of the detector used.
           */
          url: string;
          /**
           * The version of the detector used.
           */
          version: string;
        };
        job: {
          /**
           * Correlator provides a key that is used to group snapshots submitted over time. Only the "latest" submitted snapshot for a given combination of `job.correlator` and `detector.name` will be considered when calculating a repository's current dependencies. Correlator should be as unique as it takes to distinguish all detection runs for a given "wave" of CI workflow you run. If you're using GitHub Actions, a good default value for this could be the environment variables GITHUB_WORKFLOW and GITHUB_JOB concatenated together. If you're using a build matrix, then you'll also need to add additional key(s) to distinguish between each submission inside a matrix variation.
           */
          correlator: string;
          /**
           * The url for the job.
           */
          html_url?: string;
          /**
           * The external ID of the job.
           */
          id: string;
        };
        /**
         * A collection of package manifests, which are a collection of related dependencies declared in a file or representing a logical group of dependencies.
         */
        manifests?: {
          [P: string]: $schemas.Manifest;
        };
        /**
         * User-defined metadata to store domain-specific information limited to 8 keys with scalar values.
         * @maxProperties 8
         */
        metadata?: $schemas.Metadata;
        /**
         * The repository branch that triggered this snapshot.
         */
        ref: string;
        /**
         * The time at which the snapshot was scanned.
         * @format date-time
         */
        scanned: string;
        /**
         * The commit SHA associated with this dependency snapshot. Maximum length: 40 characters.
         * @maxLength 40
         * @minLength 40
         */
        sha: string;
        /**
         * The version of the repository snapshot submission.
         */
        version: number;
      }

      /**
       * A public SSH key used to sign Git commits
       */
      interface SshSigningKey {
        /**
         * @format date-time
         */
        created_at: string;
        id: number;
        key: string;
        title: string;
      }

      interface Stargazer {
        /**
         * @format date-time
         */
        starred_at: string;
        /**
         * A GitHub user.
         */
        user: $schemas.NullableSimpleUser;
      }

      /**
       * Starred Repository
       */
      interface StarredRepository {
        /**
         * A repository on GitHub.
         */
        repo: $schemas.Repository;
        /**
         * @format date-time
         */
        starred_at: string;
      }

      /**
       * State Change Issue Event
       */
      interface StateChangeIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        state_reason?: string;
        url: string;
      }

      /**
       * The status of a commit.
       */
      interface Status {
        avatar_url: string;
        context: string;
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.NullableSimpleUser;
        description: string;
        id: number;
        node_id: string;
        state: string;
        target_url: string;
        updated_at: string;
        url: string;
      }

      /**
       * Status Check Policy
       */
      interface StatusCheckPolicy {
        checks: Array<{
          app_id: number;
          context: string;
        }>;
        contexts: string[];
        /**
         * @format uri
         */
        contexts_url: string;
        strict: boolean;
        /**
         * @format uri
         */
        url: string;
      }

      interface Tag {
        commit: {
          sha: string;
          /**
           * @format uri
           */
          url: string;
        };
        name: string;
        node_id: string;
        /**
         * @format uri
         */
        tarball_url: string;
        /**
         * @format uri
         */
        zipball_url: string;
      }

      /**
       * Tag protection
       */
      interface TagProtection {
        created_at?: string;
        enabled?: boolean;
        id?: number;
        pattern: string;
        updated_at?: string;
      }

      /**
       * Groups of organization members that gives permissions on specified repositories.
       */
      interface Team {
        description: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        members_url: string;
        name: string;
        node_id: string;
        /**
         * Groups of organization members that gives permissions on specified repositories.
         */
        parent: $schemas.NullableTeamSimple;
        permission: string;
        permissions?: {
          admin: boolean;
          maintain: boolean;
          pull: boolean;
          push: boolean;
          triage: boolean;
        };
        privacy?: string;
        /**
         * @format uri
         */
        repositories_url: string;
        slug: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A team discussion is a persistent record of a free-form conversation within a team.
       */
      interface TeamDiscussion {
        /**
         * A GitHub user.
         */
        author: $schemas.NullableSimpleUser;
        /**
         * The main text of the discussion.
         */
        body: string;
        body_html: string;
        /**
         * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
         */
        body_version: string;
        comments_count: number;
        /**
         * @format uri
         */
        comments_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * @format date-time
         */
        last_edited_at: string;
        node_id: string;
        /**
         * The unique sequence number of a team discussion.
         */
        number: number;
        /**
         * Whether or not this discussion should be pinned for easy retrieval.
         */
        pinned: boolean;
        /**
         * Whether or not this discussion should be restricted to team members and organization administrators.
         */
        private: boolean;
        reactions?: $schemas.ReactionRollup;
        /**
         * @format uri
         */
        team_url: string;
        /**
         * The title of the discussion.
         */
        title: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * A reply to a discussion within a team.
       */
      interface TeamDiscussionComment {
        /**
         * A GitHub user.
         */
        author: $schemas.NullableSimpleUser;
        /**
         * The main text of the comment.
         */
        body: string;
        body_html: string;
        /**
         * The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
         */
        body_version: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format uri
         */
        discussion_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * @format date-time
         */
        last_edited_at: string;
        node_id: string;
        /**
         * The unique sequence number of a team discussion comment.
         */
        number: number;
        reactions?: $schemas.ReactionRollup;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Groups of organization members that gives permissions on specified repositories.
       */
      interface TeamFull {
        /**
         * @format date-time
         */
        created_at: string;
        description: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the team
         */
        id: number;
        /**
         * Distinguished Name (DN) that team maps to within LDAP environment
         */
        ldap_dn?: string;
        members_count: number;
        members_url: string;
        /**
         * Name of the team
         */
        name: string;
        node_id: string;
        /**
         * Team Organization
         */
        organization: $schemas.TeamOrganization;
        /**
         * Groups of organization members that gives permissions on specified repositories.
         */
        parent?: $schemas.NullableTeamSimple;
        /**
         * Permission that the team will have for its repositories
         */
        permission: string;
        /**
         * The level of privacy this team should have
         */
        privacy?: "closed" | "secret";
        repos_count: number;
        /**
         * @format uri
         */
        repositories_url: string;
        slug: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * URL for the team
         * @format uri
         */
        url: string;
      }

      /**
       * Team Membership
       */
      interface TeamMembership {
        /**
         * The role of the user in the team.
         * @default member
         */
        role: "maintainer" | "member";
        /**
         * The state of the user's membership in the team.
         */
        state: "active" | "pending";
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Team Organization
       */
      interface TeamOrganization {
        avatar_url: string;
        /**
         * @format email
         */
        billing_email?: string;
        /**
         * @format uri
         */
        blog?: string;
        collaborators?: number;
        company?: string;
        /**
         * @format date-time
         */
        created_at: string;
        default_repository_permission?: string;
        description: string;
        disk_usage?: number;
        /**
         * @format email
         */
        email?: string;
        /**
         * @format uri
         */
        events_url: string;
        followers: number;
        following: number;
        has_organization_projects: boolean;
        has_repository_projects: boolean;
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        is_verified?: boolean;
        issues_url: string;
        location?: string;
        login: string;
        members_allowed_repository_creation_type?: string;
        members_can_create_internal_repositories?: boolean;
        members_can_create_pages?: boolean;
        members_can_create_private_pages?: boolean;
        members_can_create_private_repositories?: boolean;
        members_can_create_public_pages?: boolean;
        members_can_create_public_repositories?: boolean;
        members_can_create_repositories?: boolean;
        members_can_fork_private_repositories?: boolean;
        members_url: string;
        name?: string;
        node_id: string;
        owned_private_repos?: number;
        plan?: {
          filled_seats?: number;
          name: string;
          private_repos: number;
          seats?: number;
          space: number;
        };
        private_gists?: number;
        public_gists: number;
        public_members_url: string;
        public_repos: number;
        /**
         * @format uri
         */
        repos_url: string;
        total_private_repos?: number;
        twitter_username?: string;
        two_factor_requirement_enabled?: boolean;
        type: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        web_commit_signoff_required?: boolean;
      }

      /**
       * A team's access to a project.
       */
      interface TeamProject {
        body: string;
        columns_url: string;
        created_at: string;
        /**
         * A GitHub user.
         */
        creator: $schemas.SimpleUser;
        html_url: string;
        id: number;
        name: string;
        node_id: string;
        number: number;
        /**
         * The organization permission for this project. Only present when owner is an organization.
         */
        organization_permission?: string;
        owner_url: string;
        permissions: {
          admin: boolean;
          read: boolean;
          write: boolean;
        };
        /**
         * Whether the project is private or not. Only present when owner is an organization.
         */
        private?: boolean;
        state: string;
        updated_at: string;
        url: string;
      }

      /**
       * A team's access to a repository.
       */
      interface TeamRepository {
        /**
         * Whether to allow Auto-merge to be used on pull requests.
         */
        allow_auto_merge?: boolean;
        /**
         * Whether to allow forking this repo
         */
        allow_forking?: boolean;
        /**
         * Whether to allow merge commits for pull requests.
         * @default true
         */
        allow_merge_commit?: boolean;
        /**
         * Whether to allow rebase merges for pull requests.
         * @default true
         */
        allow_rebase_merge?: boolean;
        /**
         * Whether to allow squash merges for pull requests.
         * @default true
         */
        allow_squash_merge?: boolean;
        archive_url: string;
        /**
         * Whether the repository is archived.
         */
        archived: boolean;
        assignees_url: string;
        blobs_url: string;
        branches_url: string;
        clone_url: string;
        collaborators_url: string;
        comments_url: string;
        commits_url: string;
        compare_url: string;
        contents_url: string;
        /**
         * @format uri
         */
        contributors_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The default branch of the repository.
         */
        default_branch: string;
        /**
         * Whether to delete head branches when pull requests are merged
         */
        delete_branch_on_merge?: boolean;
        /**
         * @format uri
         */
        deployments_url: string;
        description: string;
        /**
         * Returns whether or not this repository disabled.
         */
        disabled: boolean;
        /**
         * @format uri
         */
        downloads_url: string;
        /**
         * @format uri
         */
        events_url: string;
        fork: boolean;
        forks: number;
        forks_count: number;
        /**
         * @format uri
         */
        forks_url: string;
        full_name: string;
        git_commits_url: string;
        git_refs_url: string;
        git_tags_url: string;
        git_url: string;
        /**
         * Whether downloads are enabled.
         * @default true
         */
        has_downloads: boolean;
        /**
         * Whether issues are enabled.
         * @default true
         */
        has_issues: boolean;
        has_pages: boolean;
        /**
         * Whether projects are enabled.
         * @default true
         */
        has_projects: boolean;
        /**
         * Whether the wiki is enabled.
         * @default true
         */
        has_wiki: boolean;
        /**
         * @format uri
         */
        homepage: string;
        /**
         * @format uri
         */
        hooks_url: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the repository
         */
        id: number;
        /**
         * Whether this repository acts as a template that can be used to generate new repositories.
         */
        is_template?: boolean;
        issue_comment_url: string;
        issue_events_url: string;
        issues_url: string;
        keys_url: string;
        labels_url: string;
        language: string;
        /**
         * @format uri
         */
        languages_url: string;
        /**
         * License Simple
         */
        license: $schemas.NullableLicenseSimple;
        master_branch?: string;
        /**
         * @format uri
         */
        merges_url: string;
        milestones_url: string;
        /**
         * @format uri
         */
        mirror_url: string;
        /**
         * The name of the repository.
         */
        name: string;
        network_count?: number;
        node_id: string;
        notifications_url: string;
        open_issues: number;
        open_issues_count: number;
        /**
         * A GitHub user.
         */
        owner: $schemas.NullableSimpleUser;
        permissions?: {
          admin: boolean;
          maintain?: boolean;
          pull: boolean;
          push: boolean;
          triage?: boolean;
        };
        /**
         * Whether the repository is private or public.
         */
        private: boolean;
        pulls_url: string;
        /**
         * @format date-time
         */
        pushed_at: string;
        releases_url: string;
        role_name?: string;
        size: number;
        ssh_url: string;
        stargazers_count: number;
        /**
         * @format uri
         */
        stargazers_url: string;
        statuses_url: string;
        subscribers_count?: number;
        /**
         * @format uri
         */
        subscribers_url: string;
        /**
         * @format uri
         */
        subscription_url: string;
        /**
         * @format uri
         */
        svn_url: string;
        /**
         * @format uri
         */
        tags_url: string;
        /**
         * @format uri
         */
        teams_url: string;
        temp_clone_token?: string;
        /**
         * A repository on GitHub.
         */
        template_repository?: $schemas.NullableRepository;
        topics?: string[];
        trees_url: string;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * @format uri
         */
        url: string;
        /**
         * The repository visibility: public, private, or internal.
         * @default public
         */
        visibility?: string;
        watchers: number;
        watchers_count: number;
        /**
         * Whether to require contributors to sign off on web-based commits
         */
        web_commit_signoff_required?: boolean;
      }

      /**
       * Groups of organization members that gives permissions on specified repositories.
       */
      interface TeamSimple {
        /**
         * Description of the team
         */
        description: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the team
         */
        id: number;
        /**
         * Distinguished Name (DN) that team maps to within LDAP environment
         */
        ldap_dn?: string;
        members_url: string;
        /**
         * Name of the team
         */
        name: string;
        node_id: string;
        /**
         * Permission that the team will have for its repositories
         */
        permission: string;
        /**
         * The level of privacy this team should have
         */
        privacy?: string;
        /**
         * @format uri
         */
        repositories_url: string;
        slug: string;
        /**
         * URL for the team
         * @format uri
         */
        url: string;
      }

      interface Thread {
        id: string;
        last_read_at: string;
        reason: string;
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        subject: {
          latest_comment_url: string;
          title: string;
          type: string;
          url: string;
        };
        subscription_url: string;
        unread: boolean;
        updated_at: string;
        url: string;
      }

      /**
       * Thread Subscription
       */
      interface ThreadSubscription {
        /**
         * @format date-time
         */
        created_at: string;
        ignored: boolean;
        reason: string;
        /**
         * @format uri
         */
        repository_url?: string;
        subscribed: boolean;
        /**
         * @format uri
         */
        thread_url?: string;
        /**
         * @format uri
         */
        url: string;
      }

      /**
       * Timeline Assigned Issue Event
       */
      interface TimelineAssignedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        /**
         * A GitHub user.
         */
        assignee: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * Timeline Comment Event
       */
      interface TimelineCommentEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * Contents of the issue comment
         */
        body?: string;
        body_html?: string;
        body_text?: string;
        /**
         * @format date-time
         */
        created_at: string;
        event: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the issue comment
         */
        id: number;
        /**
         * @format uri
         */
        issue_url: string;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app?: $schemas.NullableIntegration;
        reactions?: $schemas.ReactionRollup;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * URL for the issue comment
         * @format uri
         */
        url: string;
        /**
         * A GitHub user.
         */
        user: $schemas.SimpleUser;
      }

      /**
       * Timeline Commit Commented Event
       */
      interface TimelineCommitCommentedEvent {
        comments?: $schemas.CommitComment[];
        commit_id?: string;
        event?: string;
        node_id?: string;
      }

      /**
       * Timeline Committed Event
       */
      interface TimelineCommittedEvent {
        /**
         * Identifying information for the git-user
         */
        author: {
          /**
           * Timestamp of the commit
           * @format date-time
           */
          date: string;
          /**
           * Git email address of the user
           */
          email: string;
          /**
           * Name of the git user
           */
          name: string;
        };
        /**
         * Identifying information for the git-user
         */
        committer: {
          /**
           * Timestamp of the commit
           * @format date-time
           */
          date: string;
          /**
           * Git email address of the user
           */
          email: string;
          /**
           * Name of the git user
           */
          name: string;
        };
        event?: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Message describing the purpose of the commit
         */
        message: string;
        node_id: string;
        parents: Array<{
          /**
           * @format uri
           */
          html_url: string;
          /**
           * SHA for the commit
           */
          sha: string;
          /**
           * @format uri
           */
          url: string;
        }>;
        /**
         * SHA for the commit
         */
        sha: string;
        tree: {
          /**
           * SHA for the commit
           */
          sha: string;
          /**
           * @format uri
           */
          url: string;
        };
        /**
         * @format uri
         */
        url: string;
        verification: {
          payload: string;
          reason: string;
          signature: string;
          verified: boolean;
        };
      }

      /**
       * Timeline Cross Referenced Event
       */
      interface TimelineCrossReferencedEvent {
        /**
         * A GitHub user.
         */
        actor?: $schemas.SimpleUser;
        /**
         * @format date-time
         */
        created_at: string;
        event: string;
        source: {
          /**
           * Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
           */
          issue?: $schemas.Issue;
          type?: string;
        };
        /**
         * @format date-time
         */
        updated_at: string;
      }

      /**
       * Timeline Event
       */
      type TimelineIssueEvents =
        | $schemas.LabeledIssueEvent
        | $schemas.UnlabeledIssueEvent
        | $schemas.MilestonedIssueEvent
        | $schemas.DemilestonedIssueEvent
        | $schemas.RenamedIssueEvent
        | $schemas.ReviewRequestedIssueEvent
        | $schemas.ReviewRequestRemovedIssueEvent
        | $schemas.ReviewDismissedIssueEvent
        | $schemas.LockedIssueEvent
        | $schemas.AddedToProjectIssueEvent
        | $schemas.MovedColumnInProjectIssueEvent
        | $schemas.RemovedFromProjectIssueEvent
        | $schemas.ConvertedNoteToIssueIssueEvent
        | $schemas.TimelineCommentEvent
        | $schemas.TimelineCrossReferencedEvent
        | $schemas.TimelineCommittedEvent
        | $schemas.TimelineReviewedEvent
        | $schemas.TimelineLineCommentedEvent
        | $schemas.TimelineCommitCommentedEvent
        | $schemas.TimelineAssignedIssueEvent
        | $schemas.TimelineUnassignedIssueEvent
        | $schemas.StateChangeIssueEvent;

      /**
       * Timeline Line Commented Event
       */
      interface TimelineLineCommentedEvent {
        comments?: $schemas.PullRequestReviewComment[];
        event?: string;
        node_id?: string;
      }

      /**
       * Timeline Reviewed Event
       */
      interface TimelineReviewedEvent {
        _links: {
          html: {
            href: string;
          };
          pull_request: {
            href: string;
          };
        };
        /**
         * How the author is associated with the repository.
         */
        author_association: $schemas.AuthorAssociation;
        /**
         * The text of the review.
         */
        body: string;
        body_html?: string;
        body_text?: string;
        /**
         * A commit SHA for the review.
         */
        commit_id: string;
        event: string;
        /**
         * @format uri
         */
        html_url: string;
        /**
         * Unique identifier of the review
         */
        id: number;
        node_id: string;
        /**
         * @format uri
         */
        pull_request_url: string;
        state: string;
        /**
         * @format date-time
         */
        submitted_at?: string;
        /**
         * A GitHub user.
         */
        user: $schemas.SimpleUser;
      }

      /**
       * Timeline Unassigned Issue Event
       */
      interface TimelineUnassignedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        /**
         * A GitHub user.
         */
        assignee: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * A topic aggregates entities that are related to a subject.
       */
      interface Topic {
        names: string[];
      }

      /**
       * Topic Search Result Item
       */
      interface TopicSearchResultItem {
        aliases?: Array<{
          topic_relation?: {
            id?: number;
            name?: string;
            relation_type?: string;
            topic_id?: number;
          };
        }>;
        /**
         * @format date-time
         */
        created_at: string;
        created_by: string;
        curated: boolean;
        description: string;
        display_name: string;
        featured: boolean;
        /**
         * @format uri
         */
        logo_url?: string;
        name: string;
        related?: Array<{
          topic_relation?: {
            id?: number;
            name?: string;
            relation_type?: string;
            topic_id?: number;
          };
        }>;
        released: string;
        repository_count?: number;
        score: number;
        short_description: string;
        text_matches?: $schemas.SearchResultTextMatches;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      interface Traffic {
        count: number;
        /**
         * @format date-time
         */
        timestamp: string;
        uniques: number;
      }

      /**
       * Unassigned Issue Event
       */
      interface UnassignedIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        /**
         * A GitHub user.
         */
        assignee: $schemas.SimpleUser;
        /**
         * A GitHub user.
         */
        assigner: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * Unlabeled Issue Event
       */
      interface UnlabeledIssueEvent {
        /**
         * A GitHub user.
         */
        actor: $schemas.SimpleUser;
        commit_id: string;
        commit_url: string;
        created_at: string;
        event: string;
        id: number;
        label: {
          color: string;
          name: string;
        };
        node_id: string;
        /**
         * GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
         */
        performed_via_github_app: $schemas.NullableIntegration;
        url: string;
      }

      /**
       * User Marketplace Purchase
       */
      interface UserMarketplacePurchase {
        account: $schemas.MarketplaceAccount;
        billing_cycle: string;
        /**
         * @format date-time
         */
        free_trial_ends_on: string;
        /**
         * @format date-time
         */
        next_billing_date: string;
        on_free_trial: boolean;
        /**
         * Marketplace Listing Plan
         */
        plan: $schemas.MarketplaceListingPlan;
        unit_count: number;
        /**
         * @format date-time
         */
        updated_at: string;
      }

      /**
       * User Search Result Item
       */
      interface UserSearchResultItem {
        /**
         * @format uri
         */
        avatar_url: string;
        bio?: string;
        blog?: string;
        company?: string;
        /**
         * @format date-time
         */
        created_at?: string;
        /**
         * @format email
         */
        email?: string;
        events_url: string;
        followers?: number;
        /**
         * @format uri
         */
        followers_url: string;
        following?: number;
        following_url: string;
        gists_url: string;
        gravatar_id: string;
        hireable?: boolean;
        /**
         * @format uri
         */
        html_url: string;
        id: number;
        location?: string;
        login: string;
        name?: string;
        node_id: string;
        /**
         * @format uri
         */
        organizations_url: string;
        public_gists?: number;
        public_repos?: number;
        /**
         * @format uri
         */
        received_events_url: string;
        /**
         * @format uri
         */
        repos_url: string;
        score: number;
        site_admin: boolean;
        starred_url: string;
        /**
         * @format uri
         */
        subscriptions_url: string;
        /**
         * @format date-time
         */
        suspended_at?: string;
        text_matches?: $schemas.SearchResultTextMatches;
        type: string;
        /**
         * @format date-time
         */
        updated_at?: string;
        /**
         * @format uri
         */
        url: string;
      }

      interface Verification {
        payload: string;
        reason: string;
        signature: string;
        verified: boolean;
      }

      /**
       * View Traffic
       */
      interface ViewTraffic {
        count: number;
        uniques: number;
        views: $schemas.Traffic[];
      }

      /**
       * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
       */
      type WaitTimer = number;

      /**
       * Configuration object of the webhook
       */
      interface WebhookConfig {
        /**
         * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
         */
        content_type?: $schemas.WebhookConfigContentType;
        insecure_ssl?: $schemas.WebhookConfigInsecureSsl;
        /**
         * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
         */
        secret?: $schemas.WebhookConfigSecret;
        /**
         * The URL to which the payloads will be delivered.
         * @format uri
         */
        url?: $schemas.WebhookConfigUrl;
      }

      /**
       * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
       */
      type WebhookConfigContentType = string;

      type WebhookConfigInsecureSsl = string | number;

      /**
       * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
       */
      type WebhookConfigSecret = string;

      /**
       * The URL to which the payloads will be delivered.
       */
      type WebhookConfigUrl = string;

      /**
       * A GitHub Actions workflow
       */
      interface Workflow {
        badge_url: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * @format date-time
         */
        deleted_at?: string;
        html_url: string;
        id: number;
        name: string;
        node_id: string;
        path: string;
        state:
          | "active"
          | "deleted"
          | "disabled_fork"
          | "disabled_inactivity"
          | "disabled_manually";
        /**
         * @format date-time
         */
        updated_at: string;
        url: string;
      }

      /**
       * An invocation of a workflow
       */
      interface WorkflowRun {
        /**
         * A GitHub user.
         */
        actor?: $schemas.SimpleUser;
        /**
         * The URL to the artifacts for the workflow run.
         */
        artifacts_url: string;
        /**
         * The URL to cancel the workflow run.
         */
        cancel_url: string;
        /**
         * The ID of the associated check suite.
         */
        check_suite_id?: number;
        /**
         * The node ID of the associated check suite.
         */
        check_suite_node_id?: string;
        /**
         * The URL to the associated check suite.
         */
        check_suite_url: string;
        conclusion: string;
        /**
         * @format date-time
         */
        created_at: string;
        /**
         * The event-specific title associated with the run or the run-name if set, or the value of `run-name` if it is set in the workflow.
         */
        display_title: string;
        event: string;
        head_branch: string;
        /**
         * A commit.
         */
        head_commit: $schemas.NullableSimpleCommit;
        /**
         * Minimal Repository
         */
        head_repository: $schemas.MinimalRepository;
        head_repository_id?: number;
        /**
         * The SHA of the head commit that points to the version of the workflow being run.
         */
        head_sha: string;
        html_url: string;
        /**
         * The ID of the workflow run.
         */
        id: number;
        /**
         * The URL to the jobs for the workflow run.
         */
        jobs_url: string;
        /**
         * The URL to download the logs for the workflow run.
         */
        logs_url: string;
        /**
         * The name of the workflow run.
         */
        name?: string;
        node_id: string;
        /**
         * The full path of the workflow
         */
        path: string;
        /**
         * The URL to the previous attempted run of this workflow, if one exists.
         */
        previous_attempt_url?: string;
        pull_requests: $schemas.PullRequestMinimal[];
        referenced_workflows?: $schemas.ReferencedWorkflow[];
        /**
         * Minimal Repository
         */
        repository: $schemas.MinimalRepository;
        /**
         * The URL to rerun the workflow run.
         */
        rerun_url: string;
        /**
         * Attempt number of the run, 1 for first attempt and higher if the workflow was re-run.
         */
        run_attempt?: number;
        /**
         * The auto incrementing run number for the workflow run.
         */
        run_number: number;
        /**
         * The start time of the latest run. Resets on re-run.
         * @format date-time
         */
        run_started_at?: string;
        status: string;
        /**
         * A GitHub user.
         */
        triggering_actor?: $schemas.SimpleUser;
        /**
         * @format date-time
         */
        updated_at: string;
        /**
         * The URL to the workflow run.
         */
        url: string;
        /**
         * The ID of the parent workflow.
         */
        workflow_id: number;
        /**
         * The URL to the workflow.
         */
        workflow_url: string;
      }

      /**
       * Workflow Run Usage
       */
      interface WorkflowRunUsage {
        billable: {
          MACOS?: {
            job_runs?: Array<{
              duration_ms: number;
              job_id: number;
            }>;
            jobs: number;
            total_ms: number;
          };
          UBUNTU?: {
            job_runs?: Array<{
              duration_ms: number;
              job_id: number;
            }>;
            jobs: number;
            total_ms: number;
          };
          WINDOWS?: {
            job_runs?: Array<{
              duration_ms: number;
              job_id: number;
            }>;
            jobs: number;
            total_ms: number;
          };
        };
        run_duration_ms?: number;
      }

      /**
       * Workflow Usage
       */
      interface WorkflowUsage {
        billable: {
          MACOS?: {
            total_ms?: number;
          };
          UBUNTU?: {
            total_ms?: number;
          };
          WINDOWS?: {
            total_ms?: number;
          };
        };
      }
    }
  }
}
