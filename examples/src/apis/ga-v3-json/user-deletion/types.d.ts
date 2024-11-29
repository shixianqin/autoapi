declare namespace API {
  namespace GaV3Json {
    namespace UserDeletion {
      namespace PostAnalyticsRequestUpsert {
        type Body = $schemas.UserDeletionRequest;

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.UserDeletionRequest;
      }
    }
  }
}
