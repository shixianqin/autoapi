declare namespace API {
  namespace WordpressV2Json {
    namespace BlockRenderer {
      namespace GetWpV2Name {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique registered name for the block.
           */
          name: string;
        }

        interface QueryParams {
          /**
           * Attributes for the block.
           */
          attributes?: string;
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: "edit"[];
          /**
           * ID of the post context.
           */
          post_id?: number | string;
        }
      }

      namespace PostWpV2Name {
        interface FormData {
          /**
           * Attributes for the block.
           */
          attributes?: string;
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: "edit"[];
          /**
           * ID of the post context.
           */
          post_id?: number | string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique registered name for the block.
           */
          name: string;
        }
      }
    }
  }
}
