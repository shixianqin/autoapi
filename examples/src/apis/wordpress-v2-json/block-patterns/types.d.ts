declare namespace API {
  namespace WordpressV2Json {
    namespace BlockPatterns {
      namespace GetWpV2Categories {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }

      namespace GetWpV2Patterns {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }
    }
  }
}
