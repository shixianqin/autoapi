declare namespace API {
  namespace GaV2Yaml {
    namespace RealTimeData {
      namespace GetAnalyticsDataRealtime {
        interface QueryParams {
          /**
           * A comma-separated list of real time dimensions
           */
          dimensions?: any;
          /**
           * A comma-separated list of dimension or metric filters to be applied to real time data
           */
          filters?: any;
          /**
           * Unique table ID for retrieving real time data
           */
          ids?: any;
          /**
           * The maximum number of entries to include in this feed
           */
          "max-results"?: any;
          /**
           * A comma-separated list of real time metrics
           */
          metrics?: any;
          /**
           * A comma-separated list of dimensions or metrics that determine the sort order for real time data
           */
          sort?: any;
        }
      }
    }
  }
}
