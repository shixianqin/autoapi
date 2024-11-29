declare namespace API {
  namespace WordpressV2Json {
    namespace Statuses {
      namespace GetWpV2Status {
        interface PathParams {
          /**
           * An alphanumeric identifier for the status.
           */
          status: string;
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
