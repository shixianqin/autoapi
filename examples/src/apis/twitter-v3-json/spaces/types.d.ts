declare namespace API {
  namespace TwitterV3Json {
    namespace Spaces {
      namespace GetFindByCreatorIds {
        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "creator_id"
            | "host_ids"
            | "invited_user_ids"
            | "speaker_ids"
            | "topic_ids"
          >;
          /**
           * A comma separated list of Space fields to display.
           * @minItems 1
           */
          "space.fields"?: Array<
            | "created_at"
            | "creator_id"
            | "ended_at"
            | "host_ids"
            | "id"
            | "invited_user_ids"
            | "is_ticketed"
            | "lang"
            | "participant_count"
            | "scheduled_start"
            | "speaker_ids"
            | "started_at"
            | "state"
            | "subscriber_count"
            | "title"
            | "topic_ids"
            | "updated_at"
          >;
          /**
           * A comma separated list of Topic fields to display.
           * @minItems 1
           */
          "topic.fields"?: Array<"description" | "id" | "name">;
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
          /**
           * The IDs of Users to search through.
           * @maxItems 100
           * @minItems 1
           */
          user_ids: $schemas.UserId[];
        }

        type Response = $schemas.Get2SpacesByCreatorIdsResponse;
      }

      namespace GetSearch {
        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "creator_id"
            | "host_ids"
            | "invited_user_ids"
            | "speaker_ids"
            | "topic_ids"
          >;
          /**
           * The number of results to return.
           * @default 100
           * @format int32
           * @maximum 100
           * @minimum 1
           */
          max_results?: number;
          /**
           * The search query.
           * @maxLength 2048
           * @minLength 1
           */
          query: string;
          /**
           * A comma separated list of Space fields to display.
           * @minItems 1
           */
          "space.fields"?: Array<
            | "created_at"
            | "creator_id"
            | "ended_at"
            | "host_ids"
            | "id"
            | "invited_user_ids"
            | "is_ticketed"
            | "lang"
            | "participant_count"
            | "scheduled_start"
            | "speaker_ids"
            | "started_at"
            | "state"
            | "subscriber_count"
            | "title"
            | "topic_ids"
            | "updated_at"
          >;
          /**
           * The state of Spaces to search for.
           * @default all
           */
          state?: "all" | "live" | "scheduled";
          /**
           * A comma separated list of Topic fields to display.
           * @minItems 1
           */
          "topic.fields"?: Array<"description" | "id" | "name">;
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

        type Response = $schemas.Get2SpacesSearchResponse;
      }

      namespace GetSpaceBuyers {
        interface PathParams {
          /**
           * The ID of the Space to be retrieved.
           */
          id: string;
        }

        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
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

        type Response = $schemas.Get2SpacesIdBuyersResponse;
      }

      namespace GetSpaceTweets {
        interface PathParams {
          /**
           * The ID of the Space to be retrieved.
           */
          id: string;
        }

        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "article.cover_media"
            | "article.media_entities"
            | "attachments.media_keys"
            | "attachments.media_source_tweet"
            | "attachments.poll_ids"
            | "author_id"
            | "author_screen_name"
            | "edit_history_tweet_ids"
            | "entities.mentions.username"
            | "entities.note.mentions.username"
            | "geo.place_id"
            | "in_reply_to_user_id"
            | "referenced_tweets.id"
            | "referenced_tweets.id.author_id"
          >;
          /**
           * The number of Posts to fetch from the provided space. If not provided, the value will default to the maximum of 100.
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
           * A comma separated list of Place fields to display.
           * @minItems 1
           */
          "place.fields"?: Array<
            | "contained_within"
            | "country"
            | "country_code"
            | "full_name"
            | "geo"
            | "id"
            | "name"
            | "place_type"
          >;
          /**
           * A comma separated list of Poll fields to display.
           * @minItems 1
           */
          "poll.fields"?: Array<
            | "duration_minutes"
            | "end_datetime"
            | "id"
            | "options"
            | "voting_status"
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

        type Response = $schemas.Get2SpacesIdTweetsResponse;
      }

      namespace GetFindSpaceById {
        interface PathParams {
          /**
           * The ID of the Space to be retrieved.
           */
          id: string;
        }

        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "creator_id"
            | "host_ids"
            | "invited_user_ids"
            | "speaker_ids"
            | "topic_ids"
          >;
          /**
           * A comma separated list of Space fields to display.
           * @minItems 1
           */
          "space.fields"?: Array<
            | "created_at"
            | "creator_id"
            | "ended_at"
            | "host_ids"
            | "id"
            | "invited_user_ids"
            | "is_ticketed"
            | "lang"
            | "participant_count"
            | "scheduled_start"
            | "speaker_ids"
            | "started_at"
            | "state"
            | "subscriber_count"
            | "title"
            | "topic_ids"
            | "updated_at"
          >;
          /**
           * A comma separated list of Topic fields to display.
           * @minItems 1
           */
          "topic.fields"?: Array<"description" | "id" | "name">;
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

        type Response = $schemas.Get2SpacesIdResponse;
      }

      namespace GetFindByIds {
        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            | "creator_id"
            | "host_ids"
            | "invited_user_ids"
            | "speaker_ids"
            | "topic_ids"
          >;
          /**
           * The list of Space IDs to return.
           * @maxItems 100
           * @minItems 1
           */
          ids: string[];
          /**
           * A comma separated list of Space fields to display.
           * @minItems 1
           */
          "space.fields"?: Array<
            | "created_at"
            | "creator_id"
            | "ended_at"
            | "host_ids"
            | "id"
            | "invited_user_ids"
            | "is_ticketed"
            | "lang"
            | "participant_count"
            | "scheduled_start"
            | "speaker_ids"
            | "started_at"
            | "state"
            | "subscriber_count"
            | "title"
            | "topic_ids"
            | "updated_at"
          >;
          /**
           * A comma separated list of Topic fields to display.
           * @minItems 1
           */
          "topic.fields"?: Array<"description" | "id" | "name">;
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

        type Response = $schemas.Get2SpacesResponse;
      }
    }
  }
}
