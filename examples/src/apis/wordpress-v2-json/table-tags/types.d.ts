declare namespace API {
  namespace WordpressV2Json {
    namespace TableTags {
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
           * Unique identifier for the term.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Required to be true, as terms do not support trashing.
           */
          force?: boolean;
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
           * Unique identifier for the term.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
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
           * Unique identifier for the term.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * HTML description of the term.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * HTML title for the term.
           */
          name?: string;
          /**
           * An alphanumeric identifier for the term unique to its type.
           */
          slug?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * HTML description of the term.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * HTML title for the term.
           */
          name?: string;
          /**
           * An alphanumeric identifier for the term unique to its type.
           */
          slug?: string;
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
           * Unique identifier for the term.
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
           * Unique identifier for the term.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * HTML description of the term.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * HTML title for the term.
           */
          name?: string;
          /**
           * An alphanumeric identifier for the term unique to its type.
           */
          slug?: string;
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
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Ensure result set excludes specific IDs.
           */
          exclude?: number[];
          /**
           * Whether to hide terms not assigned to any posts.
           */
          hide_empty?: boolean;
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
           * Sort collection by term attribute.
           */
          orderby?: Array<
            | "count"
            | "description"
            | "id"
            | "include"
            | "include_slugs"
            | "name"
            | "slug"
            | "term_group"
          >;
          /**
           * Current page of the collection.
           */
          page?: number | string;
          /**
           * Maximum number of items to be returned in result set.
           */
          per_page?: number | string;
          /**
           * Limit result set to terms assigned to a specific post.
           */
          post?: number | string;
          /**
           * Limit results to those matching a string.
           */
          search?: string;
          /**
           * Limit result set to terms with one or more specific slugs.
           */
          slug?: string[];
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * HTML description of the term.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * HTML title for the term.
           */
          name: string;
          /**
           * An alphanumeric identifier for the term unique to its type.
           */
          slug?: string;
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
