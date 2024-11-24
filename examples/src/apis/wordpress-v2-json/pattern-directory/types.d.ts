declare namespace API {
  namespace WordpressV2Json {
    namespace PatternDirectory {
      namespace GetWpV2Patterns {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Limit results to those matching a category ID.
           */
          category?: number | string;
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Limit results to those matching a keyword ID.
           */
          keyword?: number | string;
          /**
           * Offset the result set by a specific number of items.
           */
          offset?: number | string;
          /**
           * Order sort attribute ascending or descending.
           */
          order?: Array<"asc" | "desc">;
          /**
           * Sort collection by post attribute.
           */
          orderby?: Array<
            | "author"
            | "date"
            | "favorite_count"
            | "id"
            | "include"
            | "include_slugs"
            | "modified"
            | "parent"
            | "relevance"
            | "slug"
            | "title"
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
           * Limit results to those matching a string.
           */
          search?: string;
          /**
           * Limit results to those matching a pattern (slug).
           */
          slug?: any[];
        }
      }
    }
  }
}
