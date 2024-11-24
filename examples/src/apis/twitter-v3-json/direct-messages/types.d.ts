declare namespace API {
  namespace TwitterV3Json {
    namespace DirectMessages {
      namespace GetDmConversationsWithParticipantIdDmEvents {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the participant user for the One to One DM conversation.
           */
          participant_id: $schemas.UserId;
        }

        interface QueryParams {
          /**
           * A comma separated list of DmEvent fields to display.
           * @minItems 1
           */
          "dm_event.fields"?: Array<
            | "attachments"
            | "created_at"
            | "dm_conversation_id"
            | "entities"
            | "event_type"
            | "id"
            | "participant_ids"
            | "referenced_tweets"
            | "sender_id"
            | "text"
          >;
          /**
           * The set of event_types to include in the results.
           * @default MessageCreate,ParticipantsLeave,ParticipantsJoin
           * @minItems 1
           */
          event_types?: Array<
            "MessageCreate" | "ParticipantsJoin" | "ParticipantsLeave"
          >;
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "attachments.media_keys"
            | "participant_ids"
            | "referenced_tweets.id"
            | "sender_id"
          >;
          /**
           * The maximum number of results.
           * @default 100
           * @format int32
           * @maximum 100
           * @minimum 1
           */
          max_results?: number;
          /**
           * A comma separated list of Media fields to display.
           * @minItems 1
           */
          "media.fields"?: Array<
            | "alt_text"
            | "duration_ms"
            | "height"
            | "media_key"
            | "non_public_metrics"
            | "organic_metrics"
            | "preview_image_url"
            | "promoted_metrics"
            | "public_metrics"
            | "type"
            | "url"
            | "variants"
            | "width"
          >;
          /**
           * This parameter is used to get a specified 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken32;
          /**
           * A comma separated list of Tweet fields to display.
           * @minItems 1
           */
          "tweet.fields"?: Array<
            | "article"
            | "attachments"
            | "author_id"
            | "card_uri"
            | "context_annotations"
            | "conversation_id"
            | "created_at"
            | "edit_controls"
            | "edit_history_tweet_ids"
            | "entities"
            | "geo"
            | "id"
            | "in_reply_to_user_id"
            | "lang"
            | "non_public_metrics"
            | "note_tweet"
            | "organic_metrics"
            | "possibly_sensitive"
            | "promoted_metrics"
            | "public_metrics"
            | "referenced_tweets"
            | "reply_settings"
            | "scopes"
            | "source"
            | "text"
            | "username"
            | "withheld"
          >;
          /**
           * A comma separated list of User fields to display.
           * @minItems 1
           */
          "user.fields"?: Array<
            | "affiliation"
            | "connection_status"
            | "created_at"
            | "description"
            | "entities"
            | "id"
            | "location"
            | "most_recent_tweet_id"
            | "name"
            | "pinned_tweet_id"
            | "profile_banner_url"
            | "profile_image_url"
            | "protected"
            | "public_metrics"
            | "receives_your_dm"
            | "subscription_type"
            | "url"
            | "username"
            | "verified"
            | "verified_type"
            | "withheld"
          >;
        }

        type Response =
          $schemas.Get2DmConversationsWithParticipantIdDmEventsResponse;
      }

      namespace PostDmConversationWithUserEventIdCreate {
        type Body = $schemas.CreateMessageRequest;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the recipient user that will receive the DM.
           */
          participant_id: $schemas.UserId;
        }

        type Response = $schemas.CreateDmEventResponse;
      }

      namespace PostDmConversationByIdEventIdCreate {
        type Body = $schemas.CreateMessageRequest;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The DM Conversation ID.
           */
          dm_conversation_id: string;
        }

        type Response = $schemas.CreateDmEventResponse;
      }

      namespace GetDmConversationsIdDmEvents {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The DM Conversation ID.
           */
          id: $schemas.DmConversationId;
        }

        interface QueryParams {
          /**
           * A comma separated list of DmEvent fields to display.
           * @minItems 1
           */
          "dm_event.fields"?: Array<
            | "attachments"
            | "created_at"
            | "dm_conversation_id"
            | "entities"
            | "event_type"
            | "id"
            | "participant_ids"
            | "referenced_tweets"
            | "sender_id"
            | "text"
          >;
          /**
           * The set of event_types to include in the results.
           * @default MessageCreate,ParticipantsLeave,ParticipantsJoin
           * @minItems 1
           */
          event_types?: Array<
            "MessageCreate" | "ParticipantsJoin" | "ParticipantsLeave"
          >;
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "attachments.media_keys"
            | "participant_ids"
            | "referenced_tweets.id"
            | "sender_id"
          >;
          /**
           * The maximum number of results.
           * @default 100
           * @format int32
           * @maximum 100
           * @minimum 1
           */
          max_results?: number;
          /**
           * A comma separated list of Media fields to display.
           * @minItems 1
           */
          "media.fields"?: Array<
            | "alt_text"
            | "duration_ms"
            | "height"
            | "media_key"
            | "non_public_metrics"
            | "organic_metrics"
            | "preview_image_url"
            | "promoted_metrics"
            | "public_metrics"
            | "type"
            | "url"
            | "variants"
            | "width"
          >;
          /**
           * This parameter is used to get a specified 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken32;
          /**
           * A comma separated list of Tweet fields to display.
           * @minItems 1
           */
          "tweet.fields"?: Array<
            | "article"
            | "attachments"
            | "author_id"
            | "card_uri"
            | "context_annotations"
            | "conversation_id"
            | "created_at"
            | "edit_controls"
            | "edit_history_tweet_ids"
            | "entities"
            | "geo"
            | "id"
            | "in_reply_to_user_id"
            | "lang"
            | "non_public_metrics"
            | "note_tweet"
            | "organic_metrics"
            | "possibly_sensitive"
            | "promoted_metrics"
            | "public_metrics"
            | "referenced_tweets"
            | "reply_settings"
            | "scopes"
            | "source"
            | "text"
            | "username"
            | "withheld"
          >;
          /**
           * A comma separated list of User fields to display.
           * @minItems 1
           */
          "user.fields"?: Array<
            | "affiliation"
            | "connection_status"
            | "created_at"
            | "description"
            | "entities"
            | "id"
            | "location"
            | "most_recent_tweet_id"
            | "name"
            | "pinned_tweet_id"
            | "profile_banner_url"
            | "profile_image_url"
            | "protected"
            | "public_metrics"
            | "receives_your_dm"
            | "subscription_type"
            | "url"
            | "username"
            | "verified"
            | "verified_type"
            | "withheld"
          >;
        }

        type Response = $schemas.Get2DmConversationsIdDmEventsResponse;
      }

      namespace PostDmConversationIdCreate {
        type Body = $schemas.CreateDmConversationRequest;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.CreateDmEventResponse;
      }

      namespace DeleteDmEvent {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the direct-message event to delete.
           */
          event_id: $schemas.DmEventId;
        }

        type Response = $schemas.DeleteDmResponse;
      }

      namespace GetDmEventsById {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * dm event id.
           */
          event_id: $schemas.DmEventId;
        }

        interface QueryParams {
          /**
           * A comma separated list of DmEvent fields to display.
           * @minItems 1
           */
          "dm_event.fields"?: Array<
            | "attachments"
            | "created_at"
            | "dm_conversation_id"
            | "entities"
            | "event_type"
            | "id"
            | "participant_ids"
            | "referenced_tweets"
            | "sender_id"
            | "text"
          >;
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "attachments.media_keys"
            | "participant_ids"
            | "referenced_tweets.id"
            | "sender_id"
          >;
          /**
           * A comma separated list of Media fields to display.
           * @minItems 1
           */
          "media.fields"?: Array<
            | "alt_text"
            | "duration_ms"
            | "height"
            | "media_key"
            | "non_public_metrics"
            | "organic_metrics"
            | "preview_image_url"
            | "promoted_metrics"
            | "public_metrics"
            | "type"
            | "url"
            | "variants"
            | "width"
          >;
          /**
           * A comma separated list of Tweet fields to display.
           * @minItems 1
           */
          "tweet.fields"?: Array<
            | "article"
            | "attachments"
            | "author_id"
            | "card_uri"
            | "context_annotations"
            | "conversation_id"
            | "created_at"
            | "edit_controls"
            | "edit_history_tweet_ids"
            | "entities"
            | "geo"
            | "id"
            | "in_reply_to_user_id"
            | "lang"
            | "non_public_metrics"
            | "note_tweet"
            | "organic_metrics"
            | "possibly_sensitive"
            | "promoted_metrics"
            | "public_metrics"
            | "referenced_tweets"
            | "reply_settings"
            | "scopes"
            | "source"
            | "text"
            | "username"
            | "withheld"
          >;
          /**
           * A comma separated list of User fields to display.
           * @minItems 1
           */
          "user.fields"?: Array<
            | "affiliation"
            | "connection_status"
            | "created_at"
            | "description"
            | "entities"
            | "id"
            | "location"
            | "most_recent_tweet_id"
            | "name"
            | "pinned_tweet_id"
            | "profile_banner_url"
            | "profile_image_url"
            | "protected"
            | "public_metrics"
            | "receives_your_dm"
            | "subscription_type"
            | "url"
            | "username"
            | "verified"
            | "verified_type"
            | "withheld"
          >;
        }

        type Response = $schemas.Get2DmEventsEventIdResponse;
      }

      namespace GetDmEvents {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * A comma separated list of DmEvent fields to display.
           * @minItems 1
           */
          "dm_event.fields"?: Array<
            | "attachments"
            | "created_at"
            | "dm_conversation_id"
            | "entities"
            | "event_type"
            | "id"
            | "participant_ids"
            | "referenced_tweets"
            | "sender_id"
            | "text"
          >;
          /**
           * The set of event_types to include in the results.
           * @default MessageCreate,ParticipantsLeave,ParticipantsJoin
           * @minItems 1
           */
          event_types?: Array<
            "MessageCreate" | "ParticipantsJoin" | "ParticipantsLeave"
          >;
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "attachments.media_keys"
            | "participant_ids"
            | "referenced_tweets.id"
            | "sender_id"
          >;
          /**
           * The maximum number of results.
           * @default 100
           * @format int32
           * @maximum 100
           * @minimum 1
           */
          max_results?: number;
          /**
           * A comma separated list of Media fields to display.
           * @minItems 1
           */
          "media.fields"?: Array<
            | "alt_text"
            | "duration_ms"
            | "height"
            | "media_key"
            | "non_public_metrics"
            | "organic_metrics"
            | "preview_image_url"
            | "promoted_metrics"
            | "public_metrics"
            | "type"
            | "url"
            | "variants"
            | "width"
          >;
          /**
           * This parameter is used to get a specified 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken32;
          /**
           * A comma separated list of Tweet fields to display.
           * @minItems 1
           */
          "tweet.fields"?: Array<
            | "article"
            | "attachments"
            | "author_id"
            | "card_uri"
            | "context_annotations"
            | "conversation_id"
            | "created_at"
            | "edit_controls"
            | "edit_history_tweet_ids"
            | "entities"
            | "geo"
            | "id"
            | "in_reply_to_user_id"
            | "lang"
            | "non_public_metrics"
            | "note_tweet"
            | "organic_metrics"
            | "possibly_sensitive"
            | "promoted_metrics"
            | "public_metrics"
            | "referenced_tweets"
            | "reply_settings"
            | "scopes"
            | "source"
            | "text"
            | "username"
            | "withheld"
          >;
          /**
           * A comma separated list of User fields to display.
           * @minItems 1
           */
          "user.fields"?: Array<
            | "affiliation"
            | "connection_status"
            | "created_at"
            | "description"
            | "entities"
            | "id"
            | "location"
            | "most_recent_tweet_id"
            | "name"
            | "pinned_tweet_id"
            | "profile_banner_url"
            | "profile_image_url"
            | "protected"
            | "public_metrics"
            | "receives_your_dm"
            | "subscription_type"
            | "url"
            | "username"
            | "verified"
            | "verified_type"
            | "withheld"
          >;
        }

        type Response = $schemas.Get2DmEventsResponse;
      }
    }
  }
}
