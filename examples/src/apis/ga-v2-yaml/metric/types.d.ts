declare namespace API {
  namespace GaV2Yaml {
    namespace Metric {
      namespace GetAnalyticsManagementCustomMetrics {
        interface PathParams {
          /**
           * Account ID for the custom metric to retrieve
           */
          accountId: any;
          /**
           * The ID of the custom metric to retrieve
           */
          customMetricId: any;
          /**
           * Web property ID for the custom metric to retrieve
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementCustomMetrics {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID for the custom metric to update
           */
          accountId: any;
          /**
           * Custom metric ID for the custom metric to update
           */
          customMetricId: any;
          /**
           * Web property ID for the custom metric to update
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set
           */
          ignoreCustomDataSourceLinks?: any;
        }
      }

      namespace PutAnalyticsManagementCustomMetricsUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID for the custom metric to update
           */
          accountId: any;
          /**
           * Custom metric ID for the custom metric to update
           */
          customMetricId: any;
          /**
           * Web property ID for the custom metric to update
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set
           */
          ignoreCustomDataSourceLinks?: any;
        }
      }

      namespace GetAnalyticsManagementCustomMetricsList {
        interface PathParams {
          /**
           * Account ID for the custom metrics to retrieve
           */
          accountId: any;
          /**
           * Web property ID for the custom metrics to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of custom metrics to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementCustomMetricsInsert {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID for the custom metric to create
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
