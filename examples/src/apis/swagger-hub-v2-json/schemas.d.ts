declare namespace API {
  namespace SwaggerHubV2Json {
    namespace $schemas {
      interface ApisJson {
        apis?: $schemas.ApisJsonApi[];
        description?: string;
        name?: string;
        /**
         * @format int32
         */
        offset?: number;
        /**
         * @format int64
         */
        totalCount?: number | string;
        url?: string;
      }

      interface ApisJsonApi {
        description?: string;
        name?: string;
        properties?: $schemas.ApisJsonProperty[];
        /**
         * Reserved for future use
         */
        tags?: string[];
      }

      /**
       * An API property. Has a `type` and either `url` or `value`.
       */
      interface ApisJsonProperty {
        type: string;
        url?: string;
        value?: string;
      }

      type ClosableComment = $schemas.Comment & {
        /**
         * The line number (zero-based) the comment is associated with. For example, if the comment is on line 7 in the editor, `position`=6.
         *
         * @format int32
         */
        position?: number;
        /**
         * A list of replies to this comment
         */
        replies?: $schemas.Comment[];
        /**
         * Comment status
         */
        status?: "OPEN" | "RESOLVED";
      };

      type ClosableCommentPatch = $schemas.CommentPatch & {
        /**
         * @format int32
         */
        position?: number;
      };

      interface Comment {
        /**
         * Markdown contents of the comment
         */
        body: string;
        /**
         * The UTC date and time when the comment was added
         * @format date-time
         */
        created: string;
        /**
         * The unique ID of the comment
         */
        id: string;
        /**
         * The UTC date and time the when the comment was last edited
         * @format date-time
         */
        modified?: string;
        /**
         * The user who added a comment
         */
        user: $schemas.User;
      }

      interface CommentPatch {
        body?: string;
      }

      interface CommentsBatch {
        addComment?: $schemas.NewComment[];
        addReply?: {
          [P: string]: $schemas.NewReply[];
        };
        deleteComment?: string[];
        deleteReply?: {
          [P: string]: string[];
        };
        updateComment?: {
          [P: string]: $schemas.ClosableCommentPatch;
        };
        updateReply?: {
          [P: string]: {
            [P: string]: $schemas.CommentPatch;
          };
        };
        updateStatus?: {
          [P: string]: "OPEN" | "RESOLVED";
        };
      }

      interface DefaultVersion {
        /**
         * Version identifier (case-insensitive)
         */
        version: string;
      }

      interface ForkVersion {
        /**
         * The name for the forked definition. Must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html). Can be the name of an existing definition, in which case the fork will become a new version in that definition, unless that version already exists.
         * @maxLength 60
         * @minLength 3
         */
        name: string;
        /**
         * The account to fork into. Can be an organization or user name. Case-sensitive. The authenticated user must have permissions to create definitions in this account.
         * @minLength 3
         */
        owner: string;
        /**
         * Whether the forked version should be public (`false`) or private (`true`). If the value is not set, the original version's setting will be used.
         */
        private?: boolean;
        /**
         * If forking into an organization, you can optionally specify an existing project to add the forked definition to.
         * @minLength 1
         */
        project?: string;
        /**
         * Version identifier for the forked definition. Must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format). If forking into an existing definition, this version must not already exist.
         * @minLength 1
         */
        version: string;
      }

      /**
       * Common configuration details for all integrations
       */
      interface IntegrationConfiguration {
        /**
         * Whether the integration is enabled or disabled
         * @default true
         */
        enabled?: boolean;
        /**
         * ID of the integration
         * @format uuid
         */
        id?: string;
        /**
         * The display name of the integration. Must be unique among all integrations configured for the given API version.
         */
        name: string;
      }

      type IntegrationConfigurationSummary =
        $schemas.IntegrationConfiguration & {
          /**
           * Integration type
           */
          configType:
            | "AMAZON_API_GATEWAY"
            | "AMAZON_API_GATEWAY_LAMBDA"
            | "APIGEE_EDGE"
            | "API_AUTO_MOCKING"
            | "AZURE_DEVOPS_SERVICES"
            | "BITBUCKET_CLOUD"
            | "BITBUCKET_SERVER"
            | "GITHUB"
            | "GITHUB_ENTERPRISE"
            | "GITLAB"
            | "WEBHOOK";
        };

      interface IntegrationConfigurations {
        /**
         * A list of integrations
         */
        integrations?: $schemas.IntegrationConfigurationSummary[];
      }

      interface LifecycleSettings {
        /**
         * Whether the definition is published (`true`) or unpublished (`false`)
         */
        published?: boolean;
      }

      interface NewComment {
        body: string;
        /**
         * @format int32
         */
        position: number;
        replies?: $schemas.NewReply[];
      }

      interface NewReply {
        body: string;
      }

      interface NewVersion {
        /**
         * Whether the new version should be public (`false`) or private (`true`)
         */
        private?: boolean;
        /**
         * The version identifier for the new version
         * @minLength 1
         */
        version: string;
      }

      interface Project {
        /**
         * A list of APIs included in this project. The APIs must belong to the same owner as the project. API names are case-sensitive.
         *
         * @default
         */
        apis?: string[];
        /**
         * Project description
         */
        description?: string;
        /**
         * A list of domains included in this project. The domains must belong to the same owner as the project. Domain names are case-sensitive.
         *
         * @default
         */
        domains?: string[];
        /**
         * Project name
         */
        name?: string;
      }

      interface ProjectMember {
        name: string;
        roles?: Array<"MEMBER" | "OWNER">;
        /**
         * @default USER
         */
        type: "TEAM" | "USER";
      }

      interface ProjectMemberList {
        members?: $schemas.ProjectMember[];
      }

      interface ProjectsJson {
        /**
         * @format int32
         */
        offset?: number;
        projects?: $schemas.Project[];
        /**
         * @format int64
         */
        totalCount?: number | string;
      }

      interface StandardizationError {
        /**
         * The issue's description, human friendly. Pertaining to how the user
         * can fix it.
         *
         */
        description: string;
        /**
         * The line number where the issue occurs. 0-indexed. If for some
         * reason, the broken rule does not include a line number, default to
         * zero.
         *
         */
        line: number;
        severity?: $schemas.StandardizationRuleSeverity;
      }

      interface StandardizationResult {
        validation?: $schemas.StandardizationError[];
      }

      type StandardizationRuleSeverity = "Critical" | "Warning";

      /**
       * A list of Templates. Template names are case-sensitive.
       *
       */
      interface TemplateWrapper {
        builtIn?: boolean;
        defaultVersion?: string;
        id?: string;
        specification?: string;
        title?: string;
      }

      /**
       * The user who added a comment
       */
      interface User {
        /**
         * `true` means an existing user, `false` means the user is inactive (for example, deleted)
         *
         */
        active?: boolean;
        /**
         * User name
         */
        id?: string;
      }

      /**
       * Represents a [standardization](https://support.smartbear.com/swaggerhub/docs/organizations/api-standardization.html) error or warning
       */
      interface ValidationErrors {
        /**
         * The error message
         */
        description: string;
        /**
         * The line number (0-based) where the issue occurs. If, for some reason, the broken rule does not include a line number, defaults to 0.
         */
        line: number;
        /**
         * The issue type: `CRITICAL` (error) or `WARNING`
         */
        severity?: "CRITICAL" | "WARNING";
      }

      interface ValidationResult {
        /**
         * An array of standardization issues
         */
        validation?: $schemas.ValidationErrors[];
      }

      interface VisibilitySettings {
        /**
         * Whether the definition version is private (`true`) or public (`false`)
         */
        private: boolean;
      }
    }
  }
}
