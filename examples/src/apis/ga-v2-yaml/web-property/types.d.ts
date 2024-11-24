declare namespace API {
  namespace GaV2Yaml {
    namespace WebProperty {
      namespace GetAnalyticsManagementWebproperties {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the web property for
           */
          accountId: any;
          /**
           * ID to retrieve the web property for
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementWebproperties {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the web property belongs
           */
          accountId: any;
          /**
           * Web property ID
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementWebpropertiesUpdate {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the web property belongs
           */
          accountId: any;
          /**
           * Web property ID
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementWebpropertiesList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve web properties for
           */
          accountId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of web properties to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementWebpropertiesInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the web property for
           */
          accountId: any;
        }
      }
    }
  }
}
