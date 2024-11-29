declare namespace API {
  namespace TwitterV3Json {
    namespace Likes {
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
          expansions?: Array<"liked_tweet_author_id" | "liked_tweet_id">;
          /**
           * A comma separated list of LikeWithTweetAuthor fields to display.
           * @minItems 1
           */
          "like_with_tweet_author.fields"?: Array<
            | "created_at"
            | "id"
            | "liked_tweet_author_id"
            | "liked_tweet_id"
            | "timestamp_ms"
          >;
          /**
           * The partition number.
           * @format int32
           * @maximum 20
           * @minimum 1
           */
          partition: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Likes will be provided.
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

        type Response = $schemas.StreamingLikeResponseV2;
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
          expansions?: Array<"liked_tweet_author_id" | "liked_tweet_id">;
          /**
           * A comma separated list of LikeWithTweetAuthor fields to display.
           * @minItems 1
           */
          "like_with_tweet_author.fields"?: Array<
            | "created_at"
            | "id"
            | "liked_tweet_author_id"
            | "liked_tweet_id"
            | "timestamp_ms"
          >;
          /**
           * The partition number.
           * @format int32
           * @maximum 2
           * @minimum 1
           */
          partition: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Likes will be provided.
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

        type Response = $schemas.StreamingLikeResponseV2;
      }
    }
  }
}
