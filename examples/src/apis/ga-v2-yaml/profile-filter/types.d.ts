declare namespace API {
  namespace GaV2Yaml {
    namespace ProfileFilter {
      namespace DeleteAnalyticsManagementLinks {
        interface PathParams {
          /**
           * Account ID to which the profile filter link belongs
           */
          accountId: any;
          /**
           * ID of the profile filter link to delete
           */
          linkId: any;
          /**
           * Profile ID to which the filter link belongs
           */
          profileId: any;
          /**
           * Web property Id to which the profile filter link belongs
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementLinks {
        interface PathParams {
          /**
           * Account ID to retrieve profile filter link for
           */
          accountId: any;
          /**
           * ID of the profile filter link
           */
          linkId: any;
          /**
           * Profile ID to retrieve filter link for
           */
          profileId: any;
          /**
           * Web property Id to retrieve profile filter link for
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementLinks {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to which profile filter link belongs
           */
          accountId: any;
          /**
           * ID of the profile filter link to be updated
           */
          linkId: any;
          /**
           * Profile ID to which filter link belongs
           */
          profileId: any;
          /**
           * Web property Id to which profile filter link belongs
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementLinksUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to which profile filter link belongs
           */
          accountId: any;
          /**
           * ID of the profile filter link to be updated
           */
          linkId: any;
          /**
           * Profile ID to which filter link belongs
           */
          profileId: any;
          /**
           * Web property Id to which profile filter link belongs
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementLinksList {
        interface PathParams {
          /**
           * Account ID to retrieve profile filter links for
           */
          accountId: any;
          /**
           * Profile ID to retrieve filter links for
           */
          profileId: any;
          /**
           * Web property Id for profile filter links for
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of profile filter links to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementLinksInsert {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to create profile filter link for
           */
          accountId: any;
          /**
           * Profile ID to create filter link for
           */
          profileId: any;
          /**
           * Web property Id to create profile filter link for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
