declare namespace API {
  namespace SwaggerHubV2Json {
    namespace Domains {
      namespace PostRenameDomain {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * If this domain is referenced from other APIs and domains, this parameter must be true. Otherwise, the request will be rejected with status code 424.
           */
          force?: boolean;
          /**
           * New name
           */
          newName: string;
        }
      }

      namespace GetDomainDefaultVersion {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        type Response = $schemas.DefaultVersion;
      }

      namespace PutSetDomainDefaultVersion {
        type Body = $schemas.DefaultVersion;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
        }
      }

      namespace PostCloneDomain {
        type Body = $schemas.NewVersion;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * The version to clone (case-sensitive)
           */
          version: string;
        }
      }

      namespace PostUpdateDomainCommentsV2 {
        type Body = $schemas.CommentsBatch;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace DeleteDomainCommentReplyV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
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

      namespace PatchUpdateDomainCommentReplyV2 {
        type Body = $schemas.CommentPatch;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
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

      namespace PostAddDomainCommentReplyV2 {
        type Body = $schemas.NewReply;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.Comment[];
      }

      namespace PutSetDomainCommentStatusV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
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

      namespace DeleteDomainCommentV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace PatchUpdateDomainCommentV2 {
        type Body = $schemas.ClosableCommentPatch;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Comment identifier
           */
          comment: string;
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment;
      }

      namespace GetDomainCommentsV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment[];
      }

      namespace PostAddDomainCommentV2 {
        type Body = $schemas.NewComment;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment;
      }

      namespace GetDomainJsonDefinition {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface Response {}
      }

      namespace GetDomainYamlDefinition {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface Response {}
      }

      namespace PostForkDomain {
        type Body = $schemas.ForkVersion;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetDomainLifecycleSettings {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.LifecycleSettings;
      }

      namespace PutSetDomainLifecycleSettings {
        type Body = $schemas.LifecycleSettings;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * To publish a domain that references other _unpublished_ domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424.
           */
          force?: boolean;
        }
      }

      namespace GetDomainPrivateSettings {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.VisibilitySettings;
      }

      namespace PutSetDomainPrivateSettings {
        type Body = $schemas.VisibilitySettings;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * To change the visibility from _public_ to _private_ in case this domain is referenced from other _public_ definitions, this parameter must be `true`. Otherwise, the request will be rejected with status code 424.
           */
          force?: boolean;
        }
      }

      namespace DeleteDomainVersion {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * If this domain version is referenced from other APIs and domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424.
           */
          force?: boolean;
        }
      }

      namespace GetDomainDefinition {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface Response {}
      }

      namespace DeleteDomain {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * If this domain is referenced from other APIs and domains, this parameter must be `true`. Otherwise, the request will be rejected with status code 424.
           */
          force?: boolean;
        }
      }

      namespace GetDomainVersions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        type Response = $schemas.ApisJson;
      }

      namespace PostSaveDomainDefinition {
        type Body = string;

        interface Headers {
          "Content-Type"?: "application/json" | "application/yaml" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain name (case-sensitive)
           */
          domain: string;
          /**
           * Domain owner (organization or user, case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * Force update
           */
          force?: boolean;
          /**
           * Specifies whether the domain has to be private
           */
          isPrivate?: boolean;
          /**
           * Domain version. If omitted, will be taken from the `info.version` field in the definition.
           */
          version?: string;
        }
      }

      namespace GetOwner {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Domain owner (organization or user, case-sensitive)
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

      namespace GetSearch {
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
    }
  }
}
