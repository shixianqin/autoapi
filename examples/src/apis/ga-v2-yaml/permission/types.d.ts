declare namespace API {
  namespace GaV2Yaml {
    namespace Permission {
      namespace PutAnalyticsManagementAccountUserLinksUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to update the account-user link for
           */
          accountId: any;
          /**
           * Link ID to update the account-user link for
           */
          linkId: any;
        }
      }

      namespace PutAnalyticsManagementWebpropertyUserLinksUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to update the account-user link for
           */
          accountId: any;
          /**
           * Link ID to update the account-user link for
           */
          linkId: any;
          /**
           * Web property ID to update the account-user link for
           */
          webPropertyId: any;
        }
      }

      namespace PutAnalyticsManagementProfileUserLinksUpdate {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account ID to update the user link for
           */
          accountId: any;
          /**
           * Link ID to update the user link for
           */
          linkId: any;
          /**
           * View (Profile ID) to update the user link for
           */
          profileId: any;
          /**
           * Web Property ID to update the user link for
           */
          webPropertyId: any;
        }
      }
    }
  }
}
