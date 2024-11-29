declare namespace API {
  namespace WordpressV2Json {
    namespace GlobalStyles {
      namespace GetWpV2ThemesStylesheetVariations {
        interface PathParams {
          /**
           * The theme identifier
           */
          stylesheet: string;
        }
      }

      namespace GetWpV2ThemesStylesheet {
        interface PathParams {
          /**
           * The theme identifier
           */
          stylesheet: string;
        }
      }

      namespace GetWpV2Id {
        interface PathParams {
          /**
           * The id of a template
           */
          id: string;
        }
      }

      namespace PatchWpV2Id {
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
