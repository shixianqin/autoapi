declare namespace API {
  namespace GaV2Yaml {
    namespace AdWord {
      namespace DeleteAnalyticsManagementWebPropertyAdWordsLinks {
        interface PathParams {
          /**
           * ID of the account which the given web property belongs to
           */
          accountId: any;
          /**
           * Web property AdWords link ID
           */
          webPropertyAdWordsLinkId: any;
          /**
           * Web property ID to delete the AdWords link for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementWebPropertyAdWordsLinks {
        interface PathParams {
          /**
           * ID of the account which the given web property belongs to
           */
          accountId: any;
          /**
           * Web property-AdWords link ID
           */
          webPropertyAdWordsLinkId: any;
          /**
           * Web property ID to retrieve the AdWords link for
           */
          webPropertyId: any;
        }
      }

      namespace PatchAnalyticsManagementWebPropertyAdWordsLinks {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to
           */
          accountId: any;
          /**
           * Web property-AdWords link ID
           */
          webPropertyAdWordsLinkId: any;
          /**
           * Web property ID to retrieve the AdWords link for
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementWebPropertyAdWordsLinksUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to
           */
          accountId: any;
          /**
           * Web property-AdWords link ID
           */
          webPropertyAdWordsLinkId: any;
          /**
           * Web property ID to retrieve the AdWords link for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementWebPropertyAdWordsLinksList {
        interface PathParams {
          /**
           * ID of the account which the given web property belongs to
           */
          accountId: any;
          /**
           * Web property ID to retrieve the AdWords links for
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of webProperty-AdWords links to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first webProperty-AdWords link to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementWebPropertyAdWordsLinksInsert {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * ID of the Google Analytics account to create the link for
           */
          accountId: any;
          /**
           * Web property ID to create the link for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
