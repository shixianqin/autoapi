declare namespace API {
  namespace WordpressV2Json {
    namespace BlockTypes {
      namespace GetWpV2Namespace {
        interface PathParams {
          /**
           * Block namespace.
           */
          namespace: string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Block name.
           */
          name?: string;
        }
      }

      namespace GetWpV2 {
        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Block namespace.
           */
          namespace?: string;
        }
      }
    }
  }
}
