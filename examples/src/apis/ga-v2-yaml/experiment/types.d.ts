declare namespace API {
  namespace GaV2Yaml {
    namespace Experiment {
      namespace DeleteAnalyticsManagementExperiments {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the experiment belongs
           */
          accountId: any;
          /**
           * ID of the experiment to delete
           */
          experimentId: any;
          /**
           * View (Profile) ID to which the experiment belongs
           */
          profileId: any;
          /**
           * Web property ID to which the experiment belongs
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementExperiments {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the experiment for
           */
          accountId: any;
          /**
           * Experiment ID to retrieve the experiment for
           */
          experimentId: any;
          /**
           * View (Profile) ID to retrieve the experiment for
           */
          profileId: any;
          /**
           * Web property ID to retrieve the experiment for
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementExperiments {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID of the experiment to update
           */
          accountId: any;
          /**
           * Experiment ID of the experiment to update
           */
          experimentId: any;
          /**
           * View (Profile) ID of the experiment to update
           */
          profileId: any;
          /**
           * Web property ID of the experiment to update
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementExperimentsUpdate {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID of the experiment to update
           */
          accountId: any;
          /**
           * Experiment ID of the experiment to update
           */
          experimentId: any;
          /**
           * View (Profile) ID of the experiment to update
           */
          profileId: any;
          /**
           * Web property ID of the experiment to update
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementExperimentsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve experiments for
           */
          accountId: any;
          /**
           * View (Profile) ID to retrieve experiments for
           */
          profileId: any;
          /**
           * Web property ID to retrieve experiments for
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of experiments to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first experiment to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementExperimentsInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the experiment for
           */
          accountId: any;
          /**
           * View (Profile) ID to create the experiment for
           */
          profileId: any;
          /**
           * Web property ID to create the experiment for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
