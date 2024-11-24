declare namespace API {
  namespace GaV2Yaml {
    namespace User {
      namespace DeleteAnalyticsManagementAccountLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the user link for
           */
          accountId: any;
          /**
           * Link ID to delete the user link for
           */
          linkId: any;
        }
      }

      namespace GetAnalyticsManagementAccountLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the user links for
           */
          accountId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of account-user links to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first account-user link to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementAccountLinksInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the user link for
           */
          accountId: any;
        }
      }

      namespace DeleteAnalyticsManagementWebpropertyLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the user link for
           */
          accountId: any;
          /**
           * Link ID to delete the user link for
           */
          linkId: any;
          /**
           * Web Property ID to delete the user link for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementWebpropertyLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID which the given web property belongs to
           */
          accountId: any;
          /**
           * Web Property ID for the webProperty-user links to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of webProperty-user Links to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first webProperty-user link to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementWebpropertyLinksInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the user link for
           */
          accountId: any;
          /**
           * Web Property ID to create the user link for
           */
          webPropertyId: any;
        }
      }

      namespace DeleteAnalyticsManagementProfileLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the user link for
           */
          accountId: any;
          /**
           * Link ID to delete the user link for
           */
          linkId: any;
          /**
           * View (Profile) ID to delete the user link for
           */
          profileId: any;
          /**
           * Web Property ID to delete the user link for
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementProfileLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID which the given view (profile) belongs to
           */
          accountId: any;
          /**
           * View (Profile) ID to retrieve the profile-user links for
           */
          profileId: any;
          /**
           * Web Property ID which the given view (profile) belongs to
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of profile-user links to include in this response
           */
          "max-results"?: any;
          /**
           * An index of the first profile-user link to retrieve
           */
          "start-index"?: any;
        }
      }

      namespace PostAnalyticsManagementProfileLinksInsert {
        type Body = $schemas.Holder;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the user link for
           */
          accountId: any;
          /**
           * View (Profile) ID to create the user link for
           */
          profileId: any;
          /**
           * Web Property ID to create the user link for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
