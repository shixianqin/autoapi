declare namespace API {
  namespace GoogleChatV3Json {
    namespace Media {
      namespace GetChatDownload {
        interface PathParams {
          /**
           * Name of the media that is being downloaded. See ReadRequest.resource_name.
           */
          resourceName: string;
        }

        interface QueryParams {
          /**
           * V1 error format.
           */
          "$.xgafv"?: "1" | "2";
          /**
           * OAuth access token.
           */
          access_token?: string;
          /**
           * Data format for response.
           */
          alt?: "json" | "media" | "proto";
          /**
           * JSONP
           */
          callback?: string;
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
           * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Legacy upload protocol for media (e.g. "media", "multipart").
           */
          uploadType?: string;
          /**
           * Upload protocol for media (e.g. "raw", "multipart").
           */
          upload_protocol?: string;
        }

        type Response = $schemas.Media;
      }
    }
  }
}
