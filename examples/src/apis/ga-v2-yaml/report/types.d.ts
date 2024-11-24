declare namespace API {
  namespace GaV2Yaml {
    namespace Report {
      namespace DeleteAnalyticsManagementUnsampledReports {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the unsampled report for
           */
          accountId: any;
          /**
           * View (Profile) ID to delete the unsampled report for
           */
          profileId: any;
          /**
           * ID of the unsampled report to be deleted
           */
          unsampledReportId: any;
          /**
           * Web property ID to delete the unsampled reports for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementUnsampledReports {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve unsampled report for
           */
          accountId: any;
          /**
           * View (Profile) ID to retrieve unsampled report for
           */
          profileId: any;
          /**
           * ID of the unsampled report to retrieve
           */
          unsampledReportId: any;
          /**
           * Web property ID to retrieve unsampled reports for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementUnsampledReportsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve unsampled reports for
           */
          accountId: any;
          /**
           * View (Profile) ID to retrieve unsampled reports for
           */
          profileId: any;
          /**
           * Web property ID to retrieve unsampled reports for
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of unsampled reports to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first unsampled report to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementUnsampledReportsInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the unsampled report for
           */
          accountId: any;
          /**
           * View (Profile) ID to create the unsampled report for
           */
          profileId: any;
          /**
           * Web property ID to create the unsampled report for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
