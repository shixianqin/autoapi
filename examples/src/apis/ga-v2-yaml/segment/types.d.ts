declare namespace API {
  namespace GaV2Yaml {
    namespace Segment {
      namespace GetAnalyticsManagementSegmentsList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The maximum number of segments to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first segment to retrieve
           */
          "start-index"?: any;
        }
      }
    }
  }
}
