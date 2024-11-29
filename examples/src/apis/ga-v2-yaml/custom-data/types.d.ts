declare namespace API {
  namespace GaV2Yaml {
    namespace CustomData {
      namespace GetAnalyticsManagementSourcesList {
        interface PathParams {
          /**
           * Account Id for the custom data sources to retrieve
           */
          accountId: any;
          /**
           * Web property Id for the custom data sources to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of custom data sources to include in this response
           */
          "max-results"?: any;
          /**
           * A 1-based index of the first custom data source to retrieve
           */
          "start-index"?: any;
        }
      }
    }
  }
}
