declare namespace API {
  namespace TwitterV3Json {
    namespace Tweets {
      namespace GetListsId {
        interface PathParams {
          /**
           * The ID of the List.
           */
          id: $schemas.ListId;
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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

        type Response = $schemas.Get2ListsIdTweetsResponse;
      }

      namespace GetTweetCountsFullArchiveSearch {
        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
           * @format date-time
           */
          end_time?: string;
          /**
           * The granularity for the search counts results.
           * @default hour
           */
          granularity?: "day" | "hour" | "minute";
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          next_token?: $schemas.PaginationToken36;
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          pagination_token?: $schemas.PaginationToken36;
          /**
           * One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
           * @maxLength 4096
           * @minLength 1
           */
          query: string;
          /**
           * A comma separated list of SearchCount fields to display.
           * @minItems 1
           */
          "search_count.fields"?: Array<"end" | "start" | "tweet_count">;
          /**
           * Returns results with a Post ID greater than (that is, more recent than) the specified ID.
           */
          since_id?: $schemas.TweetId;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
           * @format date-time
           */
          start_time?: string;
          /**
           * Returns results with a Post ID less than (that is, older than) the specified ID.
           */
          until_id?: $schemas.TweetId;
        }

        type Response = $schemas.Get2TweetsCountsAllResponse;
      }

      namespace GetTweetCountsRecentSearch {
        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
           * @format date-time
           */
          end_time?: string;
          /**
           * The granularity for the search counts results.
           * @default hour
           */
          granularity?: "day" | "hour" | "minute";
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          next_token?: $schemas.PaginationToken36;
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          pagination_token?: $schemas.PaginationToken36;
          /**
           * One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
           * @maxLength 4096
           * @minLength 1
           */
          query: string;
          /**
           * A comma separated list of SearchCount fields to display.
           * @minItems 1
           */
          "search_count.fields"?: Array<"end" | "start" | "tweet_count">;
          /**
           * Returns results with a Post ID greater than (that is, more recent than) the specified ID.
           */
          since_id?: $schemas.TweetId;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
           * @format date-time
           */
          start_time?: string;
          /**
           * Returns results with a Post ID less than (that is, older than) the specified ID.
           */
          until_id?: $schemas.TweetId;
        }

        type Response = $schemas.Get2TweetsCountsRecentResponse;
      }

      namespace GetFirehoseStreamLangEn {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * The partition number.
           * @format int32
           * @maximum 8
           * @minimum 1
           */
          partition: number;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.StreamingTweetResponse;
      }

      namespace GetFirehoseStreamLangJa {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * The partition number.
           * @format int32
           * @maximum 2
           * @minimum 1
           */
          partition: number;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.StreamingTweetResponse;
      }

      namespace GetFirehoseStreamLangKo {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * The partition number.
           * @format int32
           * @maximum 2
           * @minimum 1
           */
          partition: number;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.StreamingTweetResponse;
      }

      namespace GetFirehoseStreamLangPt {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * The partition number.
           * @format int32
           * @maximum 2
           * @minimum 1
           */
          partition: number;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.StreamingTweetResponse;
      }

      namespace GetFirehoseStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * The partition number.
           * @format int32
           * @maximum 20
           * @minimum 1
           */
          partition: number;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.StreamingTweetResponse;
      }

      namespace GetSample10Stream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * The partition number.
           * @format int32
           * @maximum 2
           * @minimum 1
           */
          partition: number;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.Get2TweetsSample10StreamResponse;
      }

      namespace GetSampleStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
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

        type Response = $schemas.StreamingTweetResponse;
      }

      namespace GetFullarchiveSearch {
        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
           * @format date-time
           */
          end_time?: string;
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
           * The maximum number of search results to be returned by a request.
           * @default 10
           * @format int32
           * @maximum 500
           * @minimum 10
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
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          next_token?: $schemas.PaginationToken36;
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          pagination_token?: $schemas.PaginationToken36;
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
           * One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
           * @maxLength 4096
           * @minLength 1
           */
          query: string;
          /**
           * Returns results with a Post ID greater than (that is, more recent than) the specified ID.
           */
          since_id?: $schemas.TweetId;
          /**
           * This order in which to return results.
           */
          sort_order?: "recency" | "relevancy";
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
           * @format date-time
           */
          start_time?: string;
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
           * Returns results with a Post ID less than (that is, older than) the specified ID.
           */
          until_id?: $schemas.TweetId;
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

        type Response = $schemas.Get2TweetsSearchAllResponse;
      }

      namespace GetRecentSearch {
        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Posts will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
           * @format date-time
           */
          end_time?: string;
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
           * The maximum number of search results to be returned by a request.
           * @default 10
           * @format int32
           * @maximum 100
           * @minimum 10
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
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          next_token?: $schemas.PaginationToken36;
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          pagination_token?: $schemas.PaginationToken36;
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
           * One query/rule/filter for matching Posts. Refer to https://t.co/rulelength to identify the max query length.
           * @maxLength 4096
           * @minLength 1
           */
          query: string;
          /**
           * Returns results with a Post ID greater than (that is, more recent than) the specified ID.
           */
          since_id?: $schemas.TweetId;
          /**
           * This order in which to return results.
           */
          sort_order?: "recency" | "relevancy";
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Posts will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
           * @format date-time
           */
          start_time?: string;
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
           * Returns results with a Post ID less than (that is, older than) the specified ID.
           */
          until_id?: $schemas.TweetId;
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

        type Response = $schemas.Get2TweetsSearchRecentResponse;
      }

      namespace GetRules {
        interface QueryParams {
          /**
           * A comma-separated list of Rule IDs.
           */
          ids?: $schemas.RuleId[];
          /**
           * The maximum number of results.
           * @default 1000
           * @format int32
           * @maximum 1000
           * @minimum 1
           */
          max_results?: number;
          /**
           * This value is populated by passing the 'next_token' returned in a request to paginate through results.
           * @maxLength 16
           * @minLength 16
           */
          pagination_token?: string;
        }

        type Response = $schemas.RulesLookupResponse;
      }

      namespace PostAddOrDeleteRules {
        type Body = $schemas.AddOrDeleteRulesRequest;

        interface QueryParams {
          /**
           * Delete All can be used to delete all of the rules associated this client app, it should be specified with no other parameters. Once deleted, rules cannot be recovered.
           */
          delete_all?: boolean;
          /**
           * Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.
           */
          dry_run?: boolean;
        }

        type Response = $schemas.AddOrDeleteRulesResponse;
      }

      namespace GetSearchStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided.
           * @format date-time
           */
          end_time?: string;
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
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided.
           * @format date-time
           */
          start_time?: string;
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

        type Response = $schemas.FilteredStreamingTweetResponse;
      }

      namespace GetFindThatQuoteATweet {
        interface PathParams {
          /**
           * A single Post ID.
           */
          id: $schemas.TweetId;
        }

        interface QueryParams {
          /**
           * The set of entities to exclude (e.g. 'replies' or 'retweets').
           * @minItems 1
           */
          exclude?: Array<"replies" | "retweets">;
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
           * The maximum number of results to be returned.
           * @default 10
           * @format int32
           * @maximum 100
           * @minimum 10
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
          pagination_token?: $schemas.PaginationToken36;
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

        type Response = $schemas.Get2TweetsIdQuoteTweetsResponse;
      }

      namespace GetFindThatRetweetATweet {
        interface PathParams {
          /**
           * A single Post ID.
           */
          id: $schemas.TweetId;
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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

        type Response = $schemas.Get2TweetsIdRetweetsResponse;
      }

      namespace DeleteTweetById {
        interface PathParams {
          /**
           * The ID of the Post to be deleted.
           */
          id: $schemas.TweetId;
        }

        type Response = $schemas.TweetDeleteResponse;
      }

      namespace GetFindTweetById {
        interface PathParams {
          /**
           * A single Post ID.
           */
          id: $schemas.TweetId;
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

        type Response = $schemas.Get2TweetsIdResponse;
      }

      namespace PutHideReplyById {
        type Body = $schemas.TweetHideRequest;

        interface PathParams {
          /**
           * The ID of the reply that you want to hide or unhide.
           */
          tweet_id: $schemas.TweetId;
        }

        type Response = $schemas.TweetHideResponse;
      }

      namespace GetFindById {
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
           * A comma separated list of Post IDs. Up to 100 are allowed in a single request.
           * @maxItems 100
           * @minItems 1
           */
          ids: $schemas.TweetId[];
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

        type Response = $schemas.Get2TweetsResponse;
      }

      namespace PostCreateTweet {
        type Body = $schemas.TweetCreateRequest;

        type Response = $schemas.TweetCreateResponse;
      }

      namespace GetUsersIdLiked {
        interface PathParams {
          /**
           * The ID of the User to lookup.
           */
          id: $schemas.UserId;
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
           * The maximum number of results.
           * @format int32
           * @maximum 100
           * @minimum 5
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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

        type Response = $schemas.Get2UsersIdLikedTweetsResponse;
      }

      namespace DeleteUsersIdUnlike {
        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to unlike the Post.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the Post that the User is requesting to unlike.
           */
          tweet_id: $schemas.TweetId;
        }

        type Response = $schemas.UsersLikesDeleteResponse;
      }

      namespace PostUsersIdLike {
        type Body = $schemas.UsersLikesCreateRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to like the Post.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.UsersLikesCreateResponse;
      }

      namespace GetUsersIdMentions {
        interface PathParams {
          /**
           * The ID of the User to lookup.
           */
          id: $schemas.UserId;
        }

        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until_id parameter takes precedence if it is also specified.
           * @format date-time
           */
          end_time?: string;
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
           * The maximum number of results.
           * @format int32
           * @maximum 100
           * @minimum 5
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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
           * The minimum Post ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
           */
          since_id?: $schemas.TweetId;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since_id parameter takes precedence if it is also specified.
           * @format date-time
           */
          start_time?: string;
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
           * The maximum Post ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
           */
          until_id?: $schemas.TweetId;
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

        type Response = $schemas.Get2UsersIdMentionsResponse;
      }

      namespace DeleteUsersIdUnretweets {
        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to repost the Post.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the Post that the User is requesting to unretweet.
           */
          source_tweet_id: $schemas.TweetId;
        }

        type Response = $schemas.UsersRetweetsDeleteResponse;
      }

      namespace PostUsersIdRetweets {
        type Body = $schemas.UsersRetweetsCreateRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to repost the Post.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.UsersRetweetsCreateResponse;
      }

      namespace GetUsersIdTimeline {
        interface PathParams {
          /**
           * The ID of the authenticated source User to list Reverse Chronological Timeline Posts of.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until_id parameter takes precedence if it is also specified.
           * @format date-time
           */
          end_time?: string;
          /**
           * The set of entities to exclude (e.g. 'replies' or 'retweets').
           */
          exclude?: Array<"replies" | "retweets">;
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
           * The maximum number of results.
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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
           * The minimum Post ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
           */
          since_id?: $schemas.TweetId;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since_id parameter takes precedence if it is also specified.
           * @format date-time
           */
          start_time?: string;
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
           * The maximum Post ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
           */
          until_id?: $schemas.TweetId;
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
          $schemas.Get2UsersIdTimelinesReverseChronologicalResponse;
      }

      namespace GetUsersId {
        interface PathParams {
          /**
           * The ID of the User to lookup.
           */
          id: $schemas.UserId;
        }

        interface QueryParams {
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Posts will be provided. The until_id parameter takes precedence if it is also specified.
           * @format date-time
           */
          end_time?: string;
          /**
           * The set of entities to exclude (e.g. 'replies' or 'retweets').
           * @minItems 1
           */
          exclude?: Array<"replies" | "retweets">;
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
           * The maximum number of results.
           * @format int32
           * @maximum 100
           * @minimum 5
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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
           * The minimum Post ID to be included in the result set. This parameter takes precedence over start_time if both are specified.
           */
          since_id?: $schemas.TweetId;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Posts will be provided. The since_id parameter takes precedence if it is also specified.
           * @format date-time
           */
          start_time?: string;
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
           * The maximum Post ID to be included in the result set. This parameter takes precedence over end_time if both are specified.
           */
          until_id?: $schemas.TweetId;
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

        type Response = $schemas.Get2UsersIdTweetsResponse;
      }
    }
  }
}
