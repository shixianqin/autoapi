declare namespace API {
  namespace TwitterV3Json {
    namespace Lists {
      namespace DeleteListRemoveMember {
        interface PathParams {
          /**
           * The ID of the List to remove a member.
           */
          id: $schemas.ListId;
          /**
           * The ID of User that will be removed from the List.
           */
          user_id: $schemas.UserId;
        }

        type Response = $schemas.ListMutateResponse;
      }

      namespace PostListAddMember {
        type Body = $schemas.ListAddUserRequest;

        interface PathParams {
          /**
           * The ID of the List for which to add a member.
           */
          id: $schemas.ListId;
        }

        type Response = $schemas.ListMutateResponse;
      }

      namespace DeleteListId {
        interface PathParams {
          /**
           * The ID of the List to delete.
           */
          id: $schemas.ListId;
        }

        type Response = $schemas.ListDeleteResponse;
      }

      namespace GetListId {
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
          expansions?: "owner_id"[];
          /**
           * A comma separated list of List fields to display.
           * @minItems 1
           */
          "list.fields"?: Array<
            | "created_at"
            | "description"
            | "follower_count"
            | "id"
            | "member_count"
            | "name"
            | "owner_id"
            | "private"
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

        type Response = $schemas.Get2ListsIdResponse;
      }

      namespace PutListIdUpdate {
        type Body = $schemas.ListUpdateRequest;

        interface PathParams {
          /**
           * The ID of the List to modify.
           */
          id: $schemas.ListId;
        }

        type Response = $schemas.ListUpdateResponse;
      }

      namespace PostListIdCreate {
        type Body = $schemas.ListCreateRequest;

        type Response = $schemas.ListCreateResponse;
      }

      namespace DeleteListUserUnfollow {
        interface PathParams {
          /**
           * The ID of the authenticated source User that will unfollow the List.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the List to unfollow.
           */
          list_id: $schemas.ListId;
        }

        type Response = $schemas.ListFollowedResponse;
      }

      namespace GetUserFollowed {
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
          expansions?: "owner_id"[];
          /**
           * A comma separated list of List fields to display.
           * @minItems 1
           */
          "list.fields"?: Array<
            | "created_at"
            | "description"
            | "follower_count"
            | "id"
            | "member_count"
            | "name"
            | "owner_id"
            | "private"
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

        type Response = $schemas.Get2UsersIdFollowedListsResponse;
      }

      namespace PostListUserFollow {
        type Body = $schemas.ListFollowedRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User that will follow the List.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.ListFollowedResponse;
      }

      namespace GetUserListMemberships {
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
          expansions?: "owner_id"[];
          /**
           * A comma separated list of List fields to display.
           * @minItems 1
           */
          "list.fields"?: Array<
            | "created_at"
            | "description"
            | "follower_count"
            | "id"
            | "member_count"
            | "name"
            | "owner_id"
            | "private"
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

        type Response = $schemas.Get2UsersIdListMembershipsResponse;
      }

      namespace GetListUserOwned {
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
          expansions?: "owner_id"[];
          /**
           * A comma separated list of List fields to display.
           * @minItems 1
           */
          "list.fields"?: Array<
            | "created_at"
            | "description"
            | "follower_count"
            | "id"
            | "member_count"
            | "name"
            | "owner_id"
            | "private"
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

        type Response = $schemas.Get2UsersIdOwnedListsResponse;
      }

      namespace DeleteListUserUnpin {
        interface PathParams {
          /**
           * The ID of the authenticated source User for whom to return results.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
          /**
           * The ID of the List to unpin.
           */
          list_id: $schemas.ListId;
        }

        type Response = $schemas.ListUnpinResponse;
      }

      namespace GetListUserPinned {
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
          expansions?: "owner_id"[];
          /**
           * A comma separated list of List fields to display.
           * @minItems 1
           */
          "list.fields"?: Array<
            | "created_at"
            | "description"
            | "follower_count"
            | "id"
            | "member_count"
            | "name"
            | "owner_id"
            | "private"
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

        type Response = $schemas.Get2UsersIdPinnedListsResponse;
      }

      namespace PostListUserPin {
        type Body = $schemas.ListPinnedRequest;

        interface PathParams {
          /**
           * The ID of the authenticated source User that will pin the List.
           */
          id: $schemas.UserIdMatchesAuthenticatedUser;
        }

        type Response = $schemas.ListPinnedResponse;
      }
    }
  }
}
