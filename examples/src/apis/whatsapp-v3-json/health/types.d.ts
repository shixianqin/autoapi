declare namespace API {
  namespace WhatsappV3Json {
    namespace Health {
      namespace GetCheck {}

      namespace GetMetrics {
        interface QueryParams {
          format?: string;
        }

        type Response = {} | string;
      }

      namespace GetAppStats {
        interface QueryParams {
          format?: string;
        }

        type Response = {} | string;
      }

      namespace GetDbStats {
        interface QueryParams {
          format?: string;
        }

        type Response = {} | string;
      }

      namespace GetSupportInfo {
        interface Response {}
      }
    }
  }
}
