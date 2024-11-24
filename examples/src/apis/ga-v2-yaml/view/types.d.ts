declare namespace API {
  namespace GaV2Yaml {
    namespace View {
      namespace DeleteAnalyticsManagementProfiles {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the view (profile) for
           */
          accountId: any;
          /**
           * ID of the view (profile) to be deleted
           */
          profileId: any;
          /**
           * Web property ID to delete the view (profile) for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementProfiles {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the view (profile) for
           */
          accountId: any;
          /**
           * View (Profile) ID to retrieve the view (profile) for
           */
          profileId: any;
          /**
           * Web property ID to retrieve the view (profile) for
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementProfiles {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the view (profile) belongs
           */
          accountId: any;
          /**
           * ID of the view (profile) to be updated
           */
          profileId: any;
          /**
           * Web property ID to which the view (profile) belongs
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementProfilesUpdate {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the view (profile) belongs
           */
          accountId: any;
          /**
           * ID of the view (profile) to be updated
           */
          profileId: any;
          /**
           * Web property ID to which the view (profile) belongs
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementProfilesList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the view (profiles) to retrieve
           */
          accountId: any;
          /**
           * Web property ID for the views (profiles) to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of views (profiles) to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementProfilesInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the view (profile) for
           */
          accountId: any;
          /**
           * Web property ID to create the view (profile) for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
