declare namespace API {
  namespace WordpressV2Json {
    namespace GlobalStyles {
      namespace GetWpV2ThemesStylesheetVariations {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The theme identifier
           */
          stylesheet: string;
        }
      }

      namespace GetWpV2ThemesStylesheet {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The theme identifier
           */
          stylesheet: string;
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
           * The id of a template
           */
          id: string;
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
           * Global settings.
           */
          settings?: string;
          /**
           * Global styles.
           */
          styles?: string;
          /**
           * Title of the global styles variation.
           */
          title?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * Global settings.
           */
          settings?: string;
          /**
           * Global styles.
           */
          styles?: string;
          /**
           * Title of the global styles variation.
           */
          title?: string;
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
           * Global settings.
           */
          settings?: string;
          /**
           * Global styles.
           */
          styles?: string;
          /**
           * Title of the global styles variation.
           */
          title?: string;
        }
      }
    }
  }
}
