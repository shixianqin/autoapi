declare namespace API {
  namespace GaV2Yaml {
    namespace Dimension {
      namespace GetAnalyticsManagementCustomDimensions {
        interface PathParams {
          /**
           * Account ID for the custom dimension to retrieve
           */
          accountId: any;
          /**
           * The ID of the custom dimension to retrieve
           */
          customDimensionId: any;
          /**
           * Web property ID for the custom dimension to retrieve
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementCustomDimensions {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID for the custom dimension to update
           */
          accountId: any;
          /**
           * Custom dimension ID for the custom dimension to update
           */
          customDimensionId: any;
          /**
           * Web property ID for the custom dimension to update
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set
           */
          ignoreCustomDataSourceLinks?: any;
        }
      }

      namespace PutAnalyticsManagementCustomDimensionsUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID for the custom dimension to update
           */
          accountId: any;
          /**
           * Custom dimension ID for the custom dimension to update
           */
          customDimensionId: any;
          /**
           * Web property ID for the custom dimension to update
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set
           */
          ignoreCustomDataSourceLinks?: any;
        }
      }

      namespace GetAnalyticsManagementCustomDimensionsList {
        interface PathParams {
          /**
           * Account ID for the custom dimensions to retrieve
           */
          accountId: any;
          /**
           * Web property ID for the custom dimensions to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of custom dimensions to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementCustomDimensionsInsert {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID for the custom dimension to create
           */
          accountId: any;
          /**
           * Web property ID for the custom dimension to create
           */
          webPropertyId: any;
        }
      }
    }
  }
}
