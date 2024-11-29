declare namespace API {
  namespace GaV2Yaml {
    namespace Filter {
      namespace DeleteAnalyticsManagementFilters {
        interface PathParams {
          /**
           * Account ID to delete the filter for
           */
          accountId: any;
          /**
           * ID of the filter to be deleted
           */
          filterId: any;
        }
      }

      namespace GetAnalyticsManagementFilters {
        interface PathParams {
          /**
           * Account ID to retrieve filters for
           */
          accountId: any;
          /**
           * Filter ID to retrieve filters for
           */
          filterId: any;
        }
      }

      namespace PatchAnalyticsManagementFilters {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to which the filter belongs
           */
          accountId: any;
          /**
           * ID of the filter to be updated
           */
          filterId: any;
        }
      }

      namespace PutAnalyticsManagementFiltersUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to which the filter belongs
           */
          accountId: any;
          /**
           * ID of the filter to be updated
           */
          filterId: any;
        }
      }

      namespace GetAnalyticsManagementFiltersList {
        interface PathParams {
          /**
           * Account ID to retrieve filters for
           */
          accountId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of filters to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementFiltersInsert {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to create filter for
           */
          accountId: any;
        }
      }
    }
  }
}
