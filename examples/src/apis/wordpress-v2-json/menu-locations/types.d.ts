declare namespace API {
  namespace WordpressV2Json {
    namespace MenuLocations {
      namespace GetWpV2Location {
        interface PathParams {
          /**
           * An alphanumeric identifier for the menu location.
           */
          location: string;
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
