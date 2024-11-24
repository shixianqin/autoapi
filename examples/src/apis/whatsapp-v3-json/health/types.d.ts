declare namespace API {
  namespace WhatsappV3Json {
    namespace Health {
      namespace GetCheck {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace GetMetrics {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          format?: string;
        }

        type Response = {} | string;
      }

      namespace GetAppStats {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          format?: string;
        }

        type Response = {} | string;
      }

      namespace GetDbStats {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          format?: string;
        }

        type Response = {} | string;
      }

      namespace GetSupportInfo {
        interface Headers {
          [P: string]: any;
        }

        interface Response {}
      }
    }
  }
}
