declare namespace API {
  namespace TwitterV3Json {
    namespace Bookmarks {
      namespace DeleteUsersId {
        interface PathParams {
          /**
           * The ID of the authenticated source User whose bookmark is to be removed.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the Post that the source User is removing from bookmarks.
           */
          tweet_id: $schemas.TweetId;
        }

        type Response = $schemas.BookmarkMutationResponse;
      }

      namespace GetUsersId {
        interface PathParams {
          /**
           * The ID of the authenticated source User for whom to return results.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
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

        type Response = $schemas.Get2UsersIdBookmarksResponse;
      }

      namespace PostUsersId {
        type Body = $schemas.BookmarkAddRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User for whom to add bookmarks.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.BookmarkMutationResponse;
      }
    }
  }
}
