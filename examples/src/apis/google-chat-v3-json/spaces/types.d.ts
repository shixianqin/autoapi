declare namespace API {
  namespace GoogleChatV3Json {
    namespace Spaces {
      namespace GetChatList {
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
           * Optional. The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000; values above 1000 are coerced to 1000. Negative values return an `INVALID_ARGUMENT` error.
           */
          pageSize?: number;
          /**
           * Optional. A page token, received from a previous list spaces call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
           */
          pageToken?: string;
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

        type Response = $schemas.ListSpacesResponse;
      }

      namespace DeleteChatMessages {
        interface PathParams {
          /**
           * Required. Resource name of the message to be deleted, in the form "spaces/*\/messages/*" Example: spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB
           */
          name: string;
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

        type Response = $schemas.Empty;
      }

      namespace GetChatMessagesAttachments {
        interface PathParams {
          /**
           * Required. Resource name of the attachment, in the form "spaces/*\/messages/*\/attachments/*".
           */
          name: string;
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

        type Response = $schemas.Attachment;
      }

      namespace PatchChatMessages {
        type Body = $schemas.Message;

        interface PathParams {
          /**
           * Resource name in the form `spaces/*\/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
           */
          name: string;
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
           * Optional. If `true` and the message is not found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message) or the request fails.
           */
          allowMissing?: boolean;
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
           * Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - text - cards (Requires [service account authentication](/chat/api/guides/auth/service-accounts).) - cards_v2
           */
          updateMask?: string;
          /**
           * Legacy upload protocol for media (e.g. "media", "multipart").
           */
          uploadType?: string;
          /**
           * Upload protocol for media (e.g. "raw", "multipart").
           */
          upload_protocol?: string;
        }

        type Response = $schemas.Message;
      }

      namespace PutChatMessagesUpdate {
        type Body = $schemas.Message;

        interface PathParams {
          /**
           * Resource name in the form `spaces/*\/messages/*`. Example: `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`
           */
          name: string;
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
           * Optional. If `true` and the message is not found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message) or the request fails.
           */
          allowMissing?: boolean;
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
           * Required. The field paths to update. Separate multiple values with commas. Currently supported field paths: - text - cards (Requires [service account authentication](/chat/api/guides/auth/service-accounts).) - cards_v2
           */
          updateMask?: string;
          /**
           * Legacy upload protocol for media (e.g. "media", "multipart").
           */
          uploadType?: string;
          /**
           * Upload protocol for media (e.g. "raw", "multipart").
           */
          upload_protocol?: string;
        }

        type Response = $schemas.Message;
      }

      namespace GetChatMembersList {
        interface PathParams {
          /**
           * Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space}
           */
          parent: string;
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
           * The maximum number of memberships to return. The service may return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000; values above 1000 are coerced to 1000. Negative values return an INVALID_ARGUMENT error.
           */
          pageSize?: number;
          /**
           * A page token, received from a previous call to list memberships. Provide this to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters may lead to unexpected results.
           */
          pageToken?: string;
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

        type Response = $schemas.ListMembershipsResponse;
      }

      namespace PostChatMessagesCreate {
        type Body = $schemas.Message;

        interface PathParams {
          /**
           * Required. The resource name of the space in which to create a message. Format: spaces/{space}
           */
          parent: string;
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
           * Optional. A custom name for a Chat message assigned at creation. Must start with `client-` and contain only lowercase letters, numbers, and hyphens up to 63 characters in length. Specify this field to get, update, or delete the message with the specified value. For example usage, see [Name a created message](https://developers.google.com/chat/api/guides/crudl/messages#name_a_created_message).
           */
          messageId?: string;
          /**
           * Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces.
           */
          messageReplyOption?:
            | "MESSAGE_REPLY_OPTION_UNSPECIFIED"
            | "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
            | "REPLY_MESSAGE_OR_FAIL";
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
           * Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
           */
          requestId?: string;
          /**
           * Optional. Deprecated: Use thread.thread_key instead. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread).
           */
          threadKey?: string;
          /**
           * Legacy upload protocol for media (e.g. "media", "multipart").
           */
          uploadType?: string;
          /**
           * Upload protocol for media (e.g. "raw", "multipart").
           */
          upload_protocol?: string;
        }

        type Response = $schemas.Message;
      }
    }
  }
}
