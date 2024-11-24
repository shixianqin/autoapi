declare namespace API {
  namespace WordpressV2Json {
    namespace Sidebars {
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
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

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

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          id: string;
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
        }
      }
    }
  }
}
