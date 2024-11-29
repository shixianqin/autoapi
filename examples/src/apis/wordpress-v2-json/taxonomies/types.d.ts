declare namespace API {
  namespace WordpressV2Json {
    namespace Taxonomies {
      namespace GetWpV2Taxonomy {
        interface PathParams {
          /**
           * An alphanumeric identifier for the taxonomy.
           */
          taxonomy: string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace GetWpV2 {
        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Limit results to taxonomies associated with a specific post type.
           */
          type?: string;
        }
      }
    }
  }
}
