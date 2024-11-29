declare namespace API {
  namespace WordpressV2Json {
    namespace Themes {
      namespace GetWpV2Stylesheet {
        interface PathParams {
          /**
           * The theme's stylesheet. This uniquely identifies the theme.
           */
          stylesheet: string;
        }
      }

      namespace GetWpV2 {
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
