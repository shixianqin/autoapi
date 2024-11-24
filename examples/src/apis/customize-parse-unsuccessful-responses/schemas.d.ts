declare namespace API {
  namespace CustomizeParseUnsuccessfulResponses {
    namespace $responses {
      /**
       * Bad Request
       */
      type BadRequest = $schemas.BasicError | $schemas.ScimError;

      /**
       * Forbidden
       */
      type Forbidden = $schemas.BasicError;

      /**
       * Internal Error
       */
      type InternalError = $schemas.BasicError;

      /**
       * Resource not found
       */
      type NotFound = $schemas.BasicError;

      /**
       * Requires authentication
       */
      type RequiresAuthentication = $schemas.BasicError;

      /**
       * Service unavailable
       */
      interface ServiceUnavailable {
        code?: string;
        documentation_url?: string;
        message?: string;
      }
    }

    namespace $schemas {
      /**
       * Basic Error
       */
      interface BasicError {
        documentation_url?: string;
        message?: string;
        status?: string;
        url?: string;
      }

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
       * Scim Error
       */
      interface ScimError {
        detail?: string;
        documentation_url?: string;
        message?: string;
        schemas?: string[];
        scimType?: string;
        status?: number;
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
    }
  }
}
