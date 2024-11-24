declare namespace API {
  namespace WordpressV2Json {
    namespace Themes {
      namespace GetWpV2Stylesheet {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The theme's stylesheet. This uniquely identifies the theme.
           */
          stylesheet: string;
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
           * Limit result set to themes assigned one or more statuses.
           */
          status?: string[];
        }
      }
    }
  }
}
