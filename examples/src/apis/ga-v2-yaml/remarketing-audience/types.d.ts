declare namespace API {
  namespace GaV2Yaml {
    namespace RemarketingAudience {
      namespace GetAnalyticsManagement {
        interface PathParams {
          /**
           * The account ID of the remarketing audience to retrieve
           */
          accountId: any;
          /**
           * The ID of the remarketing audience to retrieve
           */
          remarketingAudienceId: any;
          /**
           * The web property ID of the remarketing audience to retrieve
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagement {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * The account ID of the remarketing audience to update
           */
          accountId: any;
          /**
           * The ID of the remarketing audience to update
           */
          remarketingAudienceId: any;
          /**
           * The web property ID of the remarketing audience to update
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * The account ID of the remarketing audience to update
           */
          accountId: any;
          /**
           * The ID of the remarketing audience to update
           */
          remarketingAudienceId: any;
          /**
           * The web property ID of the remarketing audience to update
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementList {
        interface PathParams {
          /**
           * The account ID of the remarketing audiences to retrieve
           */
          accountId: any;
          /**
           * The web property ID of the remarketing audiences to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of remarketing audiences to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first entity to retrieve
           */
          "start-index"?: any;
          type?: any;
        }
      }

      namespace PostAnalyticsManagementInsert {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * The account ID for which to create the remarketing audience
           */
          accountId: any;
          /**
           * Web property ID for which to create the remarketing audience
           */
          webPropertyId: any;
        }
      }
    }
  }
}
