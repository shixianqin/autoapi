declare namespace API {
  namespace WordpressV2Json {
    namespace Types {
      namespace GetWpV2Type {
        interface PathParams {
          /**
           * An alphanumeric identifier for the post type.
           */
          type: string;
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
        }
      }
    }
  }
}
