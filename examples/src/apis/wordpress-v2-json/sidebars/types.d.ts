declare namespace API {
  namespace WordpressV2Json {
    namespace Sidebars {
      namespace GetWpV2Id {
        interface PathParams {
          /**
           * The id of a registered sidebar
           */
          id: string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace PatchWpV2Id {
        interface PathParams {
          id: string;
        }

        interface QueryParams {
          /**
           * Nested widgets.
           */
          widgets?: Array<object | string>;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * Nested widgets.
           */
          widgets?: Array<object | string>;
        }

        interface PathParams {
          id: string;
        }
      }

      namespace PutWpV2Id {
        interface PathParams {
          id: string;
        }

        interface QueryParams {
          /**
           * Nested widgets.
           */
          widgets?: Array<object | string>;
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
