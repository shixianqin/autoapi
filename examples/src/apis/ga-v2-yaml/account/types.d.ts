declare namespace API {
  namespace GaV2Yaml {
    namespace Account {
      namespace GetAnalyticsManagementSummariesList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The maximum number of account summaries to include in this response, where the largest acceptable value is 1000
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace GetAnalyticsManagementAccountsList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The maximum number of accounts to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first account to retrieve
           */
          "start-index"?: any;
        }
      }
    }
  }
}
