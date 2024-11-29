declare namespace API {
  namespace GaV2Yaml {
    namespace AnalyticData {
      namespace GetAnalyticsDataGa {
        interface QueryParams {
          /**
           * A comma-separated list of Analytics dimensions
           */
          dimensions?: any;
          /**
           * End date for fetching Analytics data
           */
          "end-date"?: any;
          /**
           * A comma-separated list of dimension or metric filters to be applied to Analytics data
           */
          filters?: any;
          /**
           * Unique table ID for retrieving Analytics data
           */
          ids?: any;
          /**
           * The response will include empty rows if this parameter is set to true, the default is true
           */
          "include-empty-rows"?: any;
          /**
           * The maximum number of entries to include in this feed
           */
          "max-results"?: any;
          /**
           * A comma-separated list of Analytics metrics
           */
          metrics?: any;
          /**
           * The selected format for the response
           */
          output?: any;
          /**
           * The desired sampling level
           */
          samplingLevel?: any;
          /**
           * An Analytics segment to be applied to data
           */
          segment?: any;
          /**
           * A comma-separated list of dimensions or metrics that determine the sort order for Analytics data
           */
          sort?: any;
          /**
           * Start date for fetching Analytics data
           */
          "start-date"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace GetAnalyticsDataMcf {
        interface QueryParams {
          /**
           * A comma-separated list of Multi-Channel Funnels dimensions
           */
          dimensions?: any;
          /**
           * End date for fetching Analytics data
           */
          "end-date"?: any;
          /**
           * A comma-separated list of dimension or metric filters to be applied to the Analytics data
           */
          filters?: any;
          /**
           * Unique table ID for retrieving Analytics data
           */
          ids?: any;
          /**
           * The maximum number of entries to include in this feed
           */
          "max-results"?: any;
          /**
           * A comma-separated list of Multi-Channel Funnels metrics
           */
          metrics?: any;
          /**
           * The desired sampling level
           */
          samplingLevel?: any;
          /**
           * A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data
           */
          sort?: any;
          /**
           * Start date for fetching Analytics data
           */
          "start-date"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }
    }
  }
}
