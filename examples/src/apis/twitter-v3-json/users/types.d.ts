declare namespace API {
  namespace TwitterV3Json {
    namespace Users {
      namespace GetListFollowers {
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
          pagination_token?: $schemas.PaginationTokenLong;
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

        type Response = $schemas.Get2ListsIdFollowersResponse;
      }

      namespace GetListMembers {
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
          pagination_token?: $schemas.PaginationTokenLong;
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

        type Response = $schemas.Get2ListsIdMembersResponse;
      }

      namespace GetTweetsIdLiking {
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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

        type Response = $schemas.Get2TweetsIdLikingUsersResponse;
      }

      namespace GetTweetsIdRetweeting {
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
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationToken36;
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

        type Response = $schemas.Get2TweetsIdRetweetedByResponse;
      }

      namespace GetFindUserByUsername {
        interface PathParams {
          /**
           * A username.
           */
          username: string;
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

        type Response = $schemas.Get2UsersByUsernameUsernameResponse;
      }

      namespace GetFindByUsername {
        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
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
          /**
           * A list of usernames, comma-separated.
           * @maxItems 100
           * @minItems 1
           */
          usernames: string[];
        }

        type Response = $schemas.Get2UsersByResponse;
      }

      namespace GetFindMyUser {
        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
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

        type Response = $schemas.Get2UsersMeResponse;
      }

      namespace GetSearchUserByQuery {
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
           * @maximum 1000
           * @minimum 1
           */
          max_results?: number;
          /**
           * This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
           */
          next_token?: $schemas.PaginationToken36;
          /**
           * TThe the query string by which to query for users.
           */
          query: $schemas.UserSearchQuery;
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

        type Response = $schemas.Get2UsersSearchResponse;
      }

      namespace GetIdBlocking {
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
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
          >;
          /**
           * The maximum number of results.
           * @format int32
           * @maximum 1000
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

        type Response = $schemas.Get2UsersIdBlockingResponse;
      }

      namespace GetIdFollowers {
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
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
          >;
          /**
           * The maximum number of results.
           * @format int32
           * @maximum 1000
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

        type Response = $schemas.Get2UsersIdFollowersResponse;
      }

      namespace GetIdFollowing {
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
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
          >;
          /**
           * The maximum number of results.
           * @format int32
           * @maximum 1000
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

        type Response = $schemas.Get2UsersIdFollowingResponse;
      }

      namespace PostIdFollow {
        type Body = $schemas.UsersFollowingCreateRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to follow the target User.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.UsersFollowingCreateResponse;
      }

      namespace GetIdMuting {
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
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
          >;
          /**
           * The maximum number of results.
           * @default 100
           * @format int32
           * @maximum 1000
           * @minimum 1
           */
          max_results?: number;
          /**
           * This parameter is used to get the next 'page' of results.
           */
          pagination_token?: $schemas.PaginationTokenLong;
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

        type Response = $schemas.Get2UsersIdMutingResponse;
      }

      namespace PostIdMute {
        type Body = $schemas.MuteUserRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to mute the target User.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.MuteUserMutationResponse;
      }

      namespace GetFindUserById {
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
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
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

        type Response = $schemas.Get2UsersIdResponse;
      }

      namespace DeleteIdUnfollow {
        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to unfollow the target User.
           */
          source_user_id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the User that the source User is requesting to unfollow.
           */
          target_user_id: $schemas.UserId;
        }

        type Response = $schemas.UsersFollowingDeleteResponse;
      }

      namespace DeleteIdUnmute {
        interface PathParams {
          /**
           * The ID of the authenticated source User that is requesting to unmute the target User.
           */
          source_user_id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the User that the source User is requesting to unmute.
           */
          target_user_id: $schemas.UserId;
        }

        type Response = $schemas.MuteUserMutationResponse;
      }

      namespace GetFindById {
        interface QueryParams {
          /**
           * A comma separated list of fields to expand.
           * @minItems 1
           */
          expansions?: Array<
            "affiliation.user_id" | "most_recent_tweet_id" | "pinned_tweet_id"
          >;
          /**
           * A list of User IDs, comma-separated. You can specify up to 100 IDs.
           * @maxItems 100
           * @minItems 1
           */
          ids: $schemas.UserId[];
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

        type Response = $schemas.Get2UsersResponse;
      }
    }
  }
}
