declare namespace API {
  namespace SwaggerHubV2Json {
    namespace ApIs {
      namespace PostRenameApi {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * New name
           */
          newName: string;
        }
      }

      namespace GetApiDefaultVersion {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        type Response = $schemas.DefaultVersion;
      }

      namespace PutSetApiDefaultVersion {
        type Body = $schemas.DefaultVersion;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
        }
      }

      namespace PostCloneApi {
        type Body = $schemas.NewVersion;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * The version to clone (case-sensitive)
           */
          version: string;
        }
      }

      namespace PostUpdateApiCommentsV2 {
        type Body = $schemas.CommentsBatch;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace DeleteApiCommentReplyV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Reply identifier
           */
          reply: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace PatchUpdateApiCommentReplyV2 {
        type Body = $schemas.CommentPatch;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Reply identifier
           */
          reply: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.Comment;
      }

      namespace PostAddApiCommentReplyV2 {
        type Body = $schemas.NewReply;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.Comment[];
      }

      namespace PutSetApiCommentStatusV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Comment status
           */
          status: "OPEN" | "RESOLVED";
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace DeleteApiCommentV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace PatchUpdateApiCommentV2 {
        type Body = $schemas.ClosableCommentPatch;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment;
      }

      namespace GetApiCommentsV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment[];
      }

      namespace PostAddApiCommentV2 {
        type Body = $schemas.NewComment;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment;
      }

      namespace PostForkApi {
        type Body = $schemas.ForkVersion;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetLifecycleSettings {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.LifecycleSettings;
      }

      namespace PutSetLifecycleSettings {
        type Body = $schemas.LifecycleSettings;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * To publish an API that references _unpublished_ domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424.
           */
          force?: boolean;
        }
      }

      namespace GetPrivateSettings {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.VisibilitySettings;
      }

      namespace PutSetPrivateSettings {
        type Body = $schemas.VisibilitySettings;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetStandardizationErrors {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.StandardizationResult;
      }

      namespace GetJsonDefinition {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened.
           */
          flatten?: boolean;
          /**
           * Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file.
           */
          resolved?: boolean;
        }

        interface Response {}
      }

      namespace GetYamlDefinition {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened.
           */
          flatten?: boolean;
          /**
           * Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file.
           */
          resolved?: boolean;
        }

        interface Response {}
      }

      namespace GetValidation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ValidationResult;
      }

      namespace DeleteApiVersion {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetDefinition {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened.
           */
          flatten?: boolean;
          /**
           * Set to true to get the resolved version of the API definition. The content of all external $refs will be included in the resulting file.
           */
          resolved?: boolean;
        }

        interface Response {}
      }

      namespace DeleteApi {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
        }
      }

      namespace GetApiVersions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        type Response = $schemas.ApisJson;
      }

      namespace PostSaveDefinition {
        type Body = string;

        interface Headers {
          "Content-Type"?: "application/json" | "application/yaml" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner name (organization or user name, case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * Force update
           */
          force?: boolean;
          /**
           * Whether to make the API private (`true`) or public (`false`)
           */
          isPrivate?: boolean;
          /**
           * API version to create or update. If omitted, the version is extracted from the `info.version` field of the provided OpenAPI definition.
           *
           * Either the `version` parameter or the `info.version` value must be specified, otherwise the request will be rejected. If both are specified, the `version` parameter overrides the `info.version` value.
           *
           * If this API version already exists, it will be updated with the new definition (unless that version has been published - in this case the update will be rejected).
           */
          version?: string;
        }
      }

      namespace GetOwnerApis {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * Number of results per page (1 .. 100)
           */
          limit?: number;
          /**
           * Sort order
           */
          order?: "ASC" | "DESC";
          /**
           * Page to return
           */
          page?: number;
          /**
           * Sort criteria of result set:
           * NAME
           * UPDATED
           * CREATED
           * OWNER
           * BEST_MATCH - by relevance
           * TITLE - by `info.title`
           *
           */
          sort?:
            | "BEST_MATCH"
            | "CREATED"
            | "NAME"
            | "OWNER"
            | "TITLE"
            | "UPDATED";
        }

        type Response = $schemas.ApisJson;
      }

      namespace GetSearchApis {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Number of results per page (1 .. 100)
           */
          limit?: number;
          /**
           * Sort order
           */
          order?: "ASC" | "DESC";
          /**
           * Page to return
           */
          page?: number;
          /**
           * Free text query to match
           */
          query?: string;
          /**
           * Sort criteria of result set:
           * NAME
           * UPDATED
           * CREATED
           * OWNER
           * BEST_MATCH - by relevance
           * TITLE - by `info.title`
           *
           */
          sort?:
            | "BEST_MATCH"
            | "CREATED"
            | "NAME"
            | "OWNER"
            | "TITLE"
            | "UPDATED";
          /**
           * Matches against published state of the spec:
           * UNPUBLISHED - spec is a draft, a work in progress
           * PUBLISHED - spec is a stable version ready for consuming from client applications
           * ANY - either PUBLISHED or UNPUBLISHED
           *
           */
          state?: "ALL" | "PUBLISHED" | "UNPUBLISHED";
        }
      }

      namespace GetSearchApisAndDomains {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Number of results per page (1 .. 100)
           */
          limit?: number;
          /**
           * Sort order
           */
          order?: "ASC" | "DESC";
          /**
           * API or domain owner. Can be username or organization name. Case-sensitive.
           */
          owner?: string;
          /**
           * Page to return
           */
          page?: number;
          /**
           * Free text query to match
           */
          query?: string;
          /**
           * Sort criteria of result set:
           * NAME
           * UPDATED
           * CREATED
           * OWNER
           * BEST_MATCH - by relevance
           * TITLE - by `info.title`
           *
           */
          sort?:
            | "BEST_MATCH"
            | "CREATED"
            | "NAME"
            | "OWNER"
            | "TITLE"
            | "UPDATED";
          /**
           * Type of definitions to search:
           * API - APIs only
           * DOMAIN - domains only
           * TEMPLATE - templates only
           * ANY - APIs, domains, and templates
           *
           */
          specType?: "ANY" | "API" | "DOMAIN" | "TEMPLATE";
          /**
           * Matches against published state of the spec:
           * UNPUBLISHED - spec is a draft, a work in progress
           * PUBLISHED - spec is a stable version ready for consuming from client applications
           * ANY - either PUBLISHED or UNPUBLISHED
           *
           */
          state?: "ALL" | "PUBLISHED" | "UNPUBLISHED";
          /**
           * The visibility of a definition in SwaggerHub:
           * PUBLIC - can be viewed by anyone
           * PRIVATE - can only be viewed by you or your organization and those that you are collaborating with or have shared it with
           * ANY - either PUBLIC or PRIVATE
           *
           */
          visibility?: "ANY" | "PRIVATE" | "PUBLIC";
        }

        type Response = $schemas.ApisJson;
      }
    }
  }
}
