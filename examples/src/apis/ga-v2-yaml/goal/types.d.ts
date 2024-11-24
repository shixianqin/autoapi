declare namespace API {
  namespace GaV2Yaml {
    namespace Goal {
      namespace GetAnalyticsManagementGoals {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the goal for
           */
          accountId: any;
          /**
           * Goal ID to retrieve the goal for
           */
          goalId: any;
          /**
           * View (Profile) ID to retrieve the goal for
           */
          profileId: any;
          /**
           * Web property ID to retrieve the goal for
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementGoals {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the goal
           */
          accountId: any;
          /**
           * Index of the goal to be updated
           */
          goalId: any;
          /**
           * View (Profile) ID to update the goal
           */
          profileId: any;
          /**
           * Web property ID to update the goal
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementGoalsUpdate {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the goal
           */
          accountId: any;
          /**
           * Index of the goal to be updated
           */
          goalId: any;
          /**
           * View (Profile) ID to update the goal
           */
          profileId: any;
          /**
           * Web property ID to update the goal
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementGoalsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve goals for
           */
          accountId: any;
          /**
           * View (Profile) ID to retrieve goals for
           */
          profileId: any;
          /**
           * Web property ID to retrieve goals for
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of goals to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first goal to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementGoalsInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the goal for
           */
          accountId: any;
          /**
           * View (Profile) ID to create the goal for
           */
          profileId: any;
          /**
           * Web property ID to create the goal for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
