declare namespace API {
  namespace WordpressV2Json {
    namespace Comments {
      namespace DeleteWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the comment.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Whether to bypass Trash and force deletion.
           */
          force?: boolean;
          /**
           * The password for the parent post of the comment (if the post is password protected).
           */
          password?: string;
        }
      }

      namespace GetWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the comment.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * The password for the parent post of the comment (if the post is password protected).
           */
          password?: string;
        }
      }

      namespace PatchWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the comment.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * The ID of the user object, if author was a user.
           */
          author?: number | string;
          /**
           * Email address for the comment author.
           */
          author_email?: string;
          /**
           * IP address for the comment author.
           */
          author_ip?: string;
          /**
           * Display name for the comment author.
           */
          author_name?: string;
          /**
           * URL for the comment author.
           */
          author_url?: string;
          /**
           * User agent for the comment author.
           */
          author_user_agent?: string;
          /**
           * The content for the comment.
           */
          content?: string;
          /**
           * The date the comment was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the comment was published, as GMT.
           */
          date_gmt?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The ID for the parent of the comment.
           */
          parent?: number | string;
          /**
           * The ID of the associated post object.
           */
          post?: number | string;
          /**
           * State of the comment.
           */
          status?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * The ID of the user object, if author was a user.
           */
          author?: number | string;
          /**
           * Email address for the comment author.
           */
          author_email?: string;
          /**
           * IP address for the comment author.
           */
          author_ip?: string;
          /**
           * Display name for the comment author.
           */
          author_name?: string;
          /**
           * URL for the comment author.
           */
          author_url?: string;
          /**
           * User agent for the comment author.
           */
          author_user_agent?: string;
          /**
           * The content for the comment.
           */
          content?: string;
          /**
           * The date the comment was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the comment was published, as GMT.
           */
          date_gmt?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The ID for the parent of the comment.
           */
          parent?: number | string;
          /**
           * The ID of the associated post object.
           */
          post?: number | string;
          /**
           * State of the comment.
           */
          status?: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the comment.
           */
          id: number | string;
        }
      }

      namespace PutWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the comment.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * The ID of the user object, if author was a user.
           */
          author?: number | string;
          /**
           * Email address for the comment author.
           */
          author_email?: string;
          /**
           * IP address for the comment author.
           */
          author_ip?: string;
          /**
           * Display name for the comment author.
           */
          author_name?: string;
          /**
           * URL for the comment author.
           */
          author_url?: string;
          /**
           * User agent for the comment author.
           */
          author_user_agent?: string;
          /**
           * The content for the comment.
           */
          content?: string;
          /**
           * The date the comment was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the comment was published, as GMT.
           */
          date_gmt?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The ID for the parent of the comment.
           */
          parent?: number | string;
          /**
           * The ID of the associated post object.
           */
          post?: number | string;
          /**
           * State of the comment.
           */
          status?: string;
        }
      }

      namespace GetWpV2 {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Limit response to comments published after a given ISO8601 compliant date.
           */
          after?: string;
          /**
           * Limit result set to comments assigned to specific user IDs. Requires authorization.
           */
          author?: number[];
          /**
           * Limit result set to that from a specific author email. Requires authorization.
           */
          author_email?: string;
          /**
           * Ensure result set excludes comments assigned to specific user IDs. Requires authorization.
           */
          author_exclude?: number[];
          /**
           * Limit response to comments published before a given ISO8601 compliant date.
           */
          before?: string;
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Ensure result set excludes specific IDs.
           */
          exclude?: number[];
          /**
           * Limit result set to specific IDs.
           */
          include?: number[];
          /**
           * Offset the result set by a specific number of items.
           */
          offset?: number | string;
          /**
           * Order sort attribute ascending or descending.
           */
          order?: Array<"asc" | "desc">;
          /**
           * Sort collection by comment attribute.
           */
          orderby?: Array<
            "date" | "date_gmt" | "id" | "include" | "parent" | "post" | "type"
          >;
          /**
           * Current page of the collection.
           */
          page?: number | string;
          /**
           * Limit result set to comments of specific parent IDs.
           */
          parent?: number[];
          /**
           * Ensure result set excludes specific parent IDs.
           */
          parent_exclude?: number[];
          /**
           * The password for the post if it is password protected.
           */
          password?: string;
          /**
           * Maximum number of items to be returned in result set.
           */
          per_page?: number | string;
          /**
           * Limit result set to comments assigned to specific post IDs.
           */
          post?: number[];
          /**
           * Limit results to those matching a string.
           */
          search?: string;
          /**
           * Limit result set to comments assigned a specific status. Requires authorization.
           */
          status?: string;
          /**
           * Limit result set to comments assigned a specific type. Requires authorization.
           */
          type?: string;
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * The ID of the user object, if author was a user.
           */
          author?: number | string;
          /**
           * Email address for the comment author.
           */
          author_email?: string;
          /**
           * IP address for the comment author.
           */
          author_ip?: string;
          /**
           * Display name for the comment author.
           */
          author_name?: string;
          /**
           * URL for the comment author.
           */
          author_url?: string;
          /**
           * User agent for the comment author.
           */
          author_user_agent?: string;
          /**
           * The content for the comment.
           */
          content?: string;
          /**
           * The date the comment was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the comment was published, as GMT.
           */
          date_gmt?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The ID for the parent of the comment.
           */
          parent?: number | string;
          /**
           * The ID of the associated post object.
           */
          post?: number | string;
          /**
           * State of the comment.
           */
          status?: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }
    }
  }
}
