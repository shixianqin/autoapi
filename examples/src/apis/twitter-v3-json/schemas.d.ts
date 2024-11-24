declare namespace API {
  namespace TwitterV3Json {
    namespace $schemas {
      type AddOrDeleteRulesRequest =
        | $schemas.AddRulesRequest
        | $schemas.DeleteRulesRequest;

      /**
       * A response from modifying user-specified stream filtering rules.
       */
      interface AddOrDeleteRulesResponse {
        /**
         * All user-specified stream filtering rules that were created.
         */
        data?: $schemas.Rule[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        meta: $schemas.RulesResponseMetadata;
      }

      /**
       * A request to add a user-specified stream filtering rule.
       */
      interface AddRulesRequest {
        add: $schemas.RuleNoId[];
      }

      /**
       * The sum of results returned in this response.
       */
      type Aggregate = number;

      /**
       * Client App Rule Counts for all applications in the project
       */
      type AllProjectClientApps = $schemas.AppRulesCount[];

      /**
       * A count of user-provided stream filtering rules at the client application level.
       */
      interface AppRulesCount {
        /**
         * The ID of the client application
         * @maxLength 19
         * @minLength 1
         */
        client_app_id?: $schemas.ClientAppId;
        /**
         * Number of rules for client application
         * @format int32
         */
        rule_count?: number;
      }

      interface BookmarkAddRequest {
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        tweet_id: $schemas.TweetId;
      }

      interface BookmarkMutationResponse {
        data?: {
          bookmarked?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      type CashtagEntity = $schemas.EntityIndicesInclusiveExclusive &
        $schemas.CashtagFields;

      /**
       * Represent the portion of text recognized as a Cashtag, and its start and end position within the text.
       */
      interface CashtagFields {
        tag: string;
      }

      /**
       * The ID of the client application
       */
      type ClientAppId = string;

      /**
       * Usage per client app
       */
      interface ClientAppUsage {
        /**
         * The unique identifier for this project
         * @format ^[0-9]{1,19}$
         */
        client_app_id?: string;
        /**
         * The usage value
         * @minItems 1
         */
        usage?: $schemas.UsageFields[];
        /**
         * The number of results returned
         * @format int32
         */
        usage_result_count?: number;
      }

      interface ComplianceJob {
        /**
         * Creation time of the compliance job.
         * @format date-time
         */
        created_at: $schemas.CreatedAt;
        /**
         * Expiration time of the download URL.
         * @format date-time
         */
        download_expires_at: $schemas.DownloadExpiration;
        /**
         * URL from which the user will retrieve their compliance results.
         * @format uri
         */
        download_url: $schemas.DownloadUrl;
        /**
         * Compliance Job ID.
         */
        id: $schemas.JobId;
        /**
         * User-provided name for a compliance job.
         * @maxLength 64
         */
        name?: $schemas.ComplianceJobName;
        /**
         * Status of a compliance job.
         */
        status: $schemas.ComplianceJobStatus;
        /**
         * Type of compliance job to list.
         */
        type: $schemas.ComplianceJobType;
        /**
         * Expiration time of the upload URL.
         * @format date-time
         */
        upload_expires_at: $schemas.UploadExpiration;
        /**
         * URL to which the user will upload their Tweet or user IDs.
         * @format uri
         */
        upload_url: $schemas.UploadUrl;
      }

      /**
       * User-provided name for a compliance job.
       */
      type ComplianceJobName = string;

      /**
       * Status of a compliance job.
       */
      type ComplianceJobStatus =
        | "complete"
        | "created"
        | "expired"
        | "failed"
        | "in_progress";

      /**
       * Type of compliance job to list.
       */
      type ComplianceJobType = "tweets" | "users";

      /**
       * Annotation inferred from the Tweet text.
       */
      interface ContextAnnotation {
        /**
         * Represents the data for the context annotation domain.
         */
        domain: $schemas.ContextAnnotationDomainFields;
        /**
         * Represents the data for the context annotation entity.
         */
        entity: $schemas.ContextAnnotationEntityFields;
      }

      /**
       * Represents the data for the context annotation domain.
       */
      interface ContextAnnotationDomainFields {
        /**
         * Description of the context annotation domain.
         */
        description?: string;
        /**
         * The unique id for a context annotation domain.
         */
        id: string;
        /**
         * Name of the context annotation domain.
         */
        name?: string;
      }

      /**
       * Represents the data for the context annotation entity.
       */
      interface ContextAnnotationEntityFields {
        /**
         * Description of the context annotation entity.
         */
        description?: string;
        /**
         * The unique id for a context annotation entity.
         */
        id: string;
        /**
         * Name of the context annotation entity.
         */
        name?: string;
      }

      /**
       * A two-letter ISO 3166-1 alpha-2 country code.
       */
      type CountryCode = string;

      interface CreateAttachmentsMessageRequest {
        /**
         * Attachments to a DM Event.
         */
        attachments: $schemas.DmAttachments;
        /**
         * Text of the message.
         * @minLength 1
         */
        text?: string;
      }

      /**
       * A request to create a new batch compliance job.
       */
      interface CreateComplianceJobRequest {
        /**
         * User-provided name for a compliance job.
         * @maxLength 64
         */
        name?: $schemas.ComplianceJobName;
        /**
         * If true, this endpoint will return a pre-signed URL with resumable uploads enabled.
         */
        resumable?: boolean;
        /**
         * Type of compliance job to list.
         */
        type: "tweets" | "users";
      }

      interface CreateComplianceJobResponse {
        data?: $schemas.ComplianceJob;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface CreateDmConversationRequest {
        /**
         * The conversation type that is being created.
         */
        conversation_type: "Group";
        message: $schemas.CreateMessageRequest;
        /**
         * Participants for the DM Conversation.
         * @maxItems 49
         * @minItems 2
         */
        participant_ids: $schemas.DmParticipants;
      }

      interface CreateDmEventResponse {
        data?: {
          /**
           * Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.
           */
          dm_conversation_id: $schemas.DmConversationId;
          /**
           * Unique identifier of a DM Event.
           */
          dm_event_id: $schemas.DmEventId;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      type CreateMessageRequest =
        | $schemas.CreateTextMessageRequest
        | $schemas.CreateAttachmentsMessageRequest;

      interface CreateTextMessageRequest {
        /**
         * Attachments to a DM Event.
         */
        attachments?: $schemas.DmAttachments;
        /**
         * Text of the message.
         * @minLength 1
         */
        text: string;
      }

      /**
       * Creation time of the compliance job.
       */
      type CreatedAt = string;

      interface DeleteDmResponse {
        data?: {
          deleted?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      /**
       * A response from deleting user-specified stream filtering rules.
       */
      interface DeleteRulesRequest {
        /**
         * IDs and values of all deleted user-specified stream filtering rules.
         */
        delete: {
          /**
           * IDs of all deleted user-specified stream filtering rules.
           */
          ids?: $schemas.RuleId[];
          /**
           * Values of all deleted user-specified stream filtering rules.
           */
          values?: $schemas.RuleValue[];
        };
      }

      /**
       * Attachments to a DM Event.
       */
      type DmAttachments = $schemas.DmMediaAttachment[];

      /**
       * Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.
       */
      type DmConversationId = string;

      interface DmEvent {
        /**
         * Specifies the type of attachments (if any) present in this DM.
         */
        attachments?: {
          /**
           * A list of card IDs (if cards are attached).
           * @minItems 1
           */
          card_ids?: string[];
          /**
           * A list of Media Keys for each one of the media attachments (if media are attached).
           * @minItems 1
           */
          media_keys?: $schemas.MediaKey[];
        };
        /**
         * @minItems 1
         */
        cashtags?: $schemas.CashtagEntity[];
        /**
         * @format date-time
         */
        created_at?: string;
        /**
         * Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.
         */
        dm_conversation_id?: $schemas.DmConversationId;
        event_type: string;
        /**
         * @minItems 1
         */
        hashtags?: $schemas.HashtagEntity[];
        /**
         * Unique identifier of a DM Event.
         */
        id: $schemas.DmEventId;
        /**
         * @minItems 1
         */
        mentions?: $schemas.MentionEntity[];
        /**
         * A list of participants for a ParticipantsJoin or ParticipantsLeave event_type.
         * @minItems 1
         */
        participant_ids?: $schemas.UserId[];
        /**
         * A list of Posts this DM refers to.
         * @minItems 1
         */
        referenced_tweets?: Array<{
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
        }>;
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        sender_id?: $schemas.UserId;
        text?: string;
        /**
         * @minItems 1
         */
        urls?: $schemas.UrlEntityDm[];
      }

      /**
       * Unique identifier of a DM Event.
       */
      type DmEventId = string;

      interface DmMediaAttachment {
        /**
         * The unique identifier of this Media.
         */
        media_id: $schemas.MediaId;
      }

      /**
       * Participants for the DM Conversation.
       */
      type DmParticipants = $schemas.UserId[];

      /**
       * Expiration time of the download URL.
       */
      type DownloadExpiration = string;

      /**
       * URL from which the user will retrieve their compliance results.
       */
      type DownloadUrl = string;

      /**
       * The end time of the bucket.
       */
      type End = string;

      /**
       * Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.
       */
      interface EntityIndicesInclusiveExclusive {
        /**
         * Index (zero-based) at which position this entity ends.  The index is exclusive.
         */
        end: number;
        /**
         * Index (zero-based) at which position this entity starts.  The index is inclusive.
         */
        start: number;
      }

      interface Expansions {
        /**
         * @minItems 1
         */
        media?: $schemas.Media[];
        /**
         * @minItems 1
         */
        places?: $schemas.Place[];
        /**
         * @minItems 1
         */
        polls?: $schemas.Poll[];
        /**
         * @minItems 1
         */
        topics?: $schemas.Topic[];
        /**
         * @minItems 1
         */
        tweets?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        users?: $schemas.User[];
      }

      /**
       * A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.
       */
      interface FilteredStreamingTweetResponse {
        data?: $schemas.Tweet;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        /**
         * The list of rules which matched the Tweet
         */
        matching_rules?: Array<{
          /**
           * Unique identifier of this rule.
           */
          id: $schemas.RuleId;
          /**
           * A tag meant for the labeling of user provided rules.
           */
          tag?: $schemas.RuleTag;
        }>;
      }

      interface FullTextEntities {
        /**
         * @minItems 1
         */
        annotations?: any[];
        /**
         * @minItems 1
         */
        cashtags?: $schemas.CashtagEntity[];
        /**
         * @minItems 1
         */
        hashtags?: $schemas.HashtagEntity[];
        /**
         * @minItems 1
         */
        mentions?: $schemas.MentionEntity[];
        /**
         * @minItems 1
         */
        urls?: $schemas.UrlEntity[];
      }

      interface Geo {
        /**
         * @maxItems 4
         * @minItems 4
         */
        bbox: number[];
        /**
         * A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
         */
        geometry?: $schemas.Point;
        properties: {};
        type: "Feature";
      }

      interface Get2ComplianceJobsIdResponse {
        data?: $schemas.ComplianceJob;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface Get2ComplianceJobsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.ComplianceJob[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        meta?: {
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2DmConversationsIdDmEventsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.DmEvent[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2DmConversationsWithParticipantIdDmEventsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.DmEvent[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2DmEventsEventIdResponse {
        data?: $schemas.DmEvent;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2DmEventsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.DmEvent[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2ListsIdFollowersResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2ListsIdMembersResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2ListsIdResponse {
        /**
         * A X List is a curated group of accounts.
         */
        data?: $schemas.List;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2ListsIdTweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2SpacesByCreatorIdsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Space[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2SpacesIdBuyersResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2SpacesIdResponse {
        data?: $schemas.Space;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2SpacesIdTweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2SpacesResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Space[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2SpacesSearchResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Space[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TrendsByWoeidWoeidResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Trend[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface Get2TweetsCountsAllResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.SearchCount[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The sum of results returned in this response.
           * @format int32
           */
          total_tweet_count?: $schemas.Aggregate;
        };
      }

      interface Get2TweetsCountsRecentResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.SearchCount[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The sum of results returned in this response.
           * @format int32
           */
          total_tweet_count?: $schemas.Aggregate;
        };
      }

      interface Get2TweetsIdLikingUsersResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TweetsIdQuoteTweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TweetsIdResponse {
        data?: $schemas.Tweet;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2TweetsIdRetweetedByResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TweetsIdRetweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2TweetsSample10StreamResponse {
        data?: $schemas.Tweet;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2TweetsSearchAllResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TweetsSearchRecentResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2TweetsSearchStreamRulesCountsResponse {
        /**
         * A count of user-provided stream filtering rules at the application and project levels.
         */
        data?: $schemas.RulesCount;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface Get2UsageTweetsResponse {
        /**
         * Usage per client app
         */
        data?: $schemas.Usage;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface Get2UsersByResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2UsersByUsernameUsernameResponse {
        /**
         * The X User object.
         */
        data?: $schemas.User;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2UsersIdBlockingResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdBookmarksResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdFollowedListsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.List[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdFollowersResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdFollowingResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdLikedTweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdListMembershipsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.List[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdMentionsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdMutingResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdOwnedListsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.List[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdPinnedListsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.List[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdResponse {
        /**
         * The X User object.
         */
        data?: $schemas.User;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2UsersIdTimelinesReverseChronologicalResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersIdTweetsResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.Tweet[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The newest id in this response.
           */
          newest_id?: $schemas.NewestId;
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The oldest id in this response.
           */
          oldest_id?: $schemas.OldestId;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
          /**
           * The number of results returned in this response.
           * @format int32
           */
          result_count?: $schemas.ResultCount;
        };
      }

      interface Get2UsersMeResponse {
        /**
         * The X User object.
         */
        data?: $schemas.User;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2UsersResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface Get2UsersSearchResponse {
        /**
         * @minItems 1
         */
        data?: $schemas.User[];
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
        meta?: {
          /**
           * The next token.
           * @minLength 1
           */
          next_token?: $schemas.NextToken;
          /**
           * The previous token.
           * @minLength 1
           */
          previous_token?: $schemas.PreviousToken;
        };
      }

      type HashtagEntity = $schemas.EntityIndicesInclusiveExclusive &
        $schemas.HashtagFields;

      /**
       * Represent the portion of text recognized as a Hashtag, and its start and end position within the text.
       */
      interface HashtagFields {
        /**
         * The text of the Hashtag.
         */
        tag: string;
      }

      /**
       * HTTP Status Code.
       */
      type HttpStatusCode = number;

      /**
       * Compliance Job ID.
       */
      type JobId = string;

      interface LikeComplianceSchema {
        delete: $schemas.UnlikeComplianceSchema;
      }

      /**
       * The unique identifier of this Like.
       */
      type LikeId = string;

      /**
       * A Like event, with the tweet author user and the tweet being liked
       */
      interface LikeWithTweetAuthor {
        /**
         * Creation time of the Tweet.
         * @format date-time
         */
        created_at?: string;
        /**
         * The unique identifier of this Like.
         */
        id?: $schemas.LikeId;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        liked_tweet_id?: $schemas.TweetId;
        /**
         * Timestamp in milliseconds of creation.
         * @format int32
         */
        timestamp_ms?: number;
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        tweet_author_id?: $schemas.UserId;
      }

      /**
       * Likes compliance stream events.
       */
      type LikesComplianceStreamResponse =
        | {
            data: $schemas.LikeComplianceSchema;
          }
        | {
            /**
             * @minItems 1
             */
            errors: $schemas.Problem[];
          };

      /**
       * A X List is a curated group of accounts.
       */
      interface List {
        /**
         * @format date-time
         */
        created_at?: string;
        description?: string;
        follower_count?: number;
        /**
         * The unique identifier of this List.
         */
        id: $schemas.ListId;
        member_count?: number;
        /**
         * The name of this List.
         */
        name: string;
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        owner_id?: $schemas.UserId;
        private?: boolean;
      }

      interface ListAddUserRequest {
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        user_id: $schemas.UserId;
      }

      interface ListCreateRequest {
        /**
         * @maxLength 100
         */
        description?: string;
        /**
         * @maxLength 25
         * @minLength 1
         */
        name: string;
        private?: boolean;
      }

      interface ListCreateResponse {
        /**
         * A X List is a curated group of accounts.
         */
        data?: {
          /**
           * The unique identifier of this List.
           */
          id: $schemas.ListId;
          /**
           * The name of this List.
           */
          name: string;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface ListDeleteResponse {
        data?: {
          deleted?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface ListFollowedRequest {
        /**
         * The unique identifier of this List.
         */
        list_id: $schemas.ListId;
      }

      interface ListFollowedResponse {
        data?: {
          following?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      /**
       * The unique identifier of this List.
       */
      type ListId = string;

      interface ListMutateResponse {
        data?: {
          is_member?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface ListPinnedRequest {
        /**
         * The unique identifier of this List.
         */
        list_id: $schemas.ListId;
      }

      interface ListPinnedResponse {
        data?: {
          pinned?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface ListUnpinResponse {
        data?: {
          pinned?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface ListUpdateRequest {
        /**
         * @maxLength 100
         */
        description?: string;
        /**
         * @maxLength 25
         * @minLength 1
         */
        name?: string;
        private?: boolean;
      }

      interface ListUpdateResponse {
        data?: {
          updated?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface Media {
        /**
         * The height of the media in pixels.
         */
        height?: $schemas.MediaHeight;
        /**
         * The Media Key identifier for this attachment.
         */
        media_key?: $schemas.MediaKey;
        type: string;
        /**
         * The width of the media in pixels.
         */
        width?: $schemas.MediaWidth;
      }

      /**
       * The height of the media in pixels.
       */
      type MediaHeight = number;

      /**
       * The unique identifier of this Media.
       */
      type MediaId = string;

      /**
       * The Media Key identifier for this attachment.
       */
      type MediaKey = string;

      /**
       * The width of the media in pixels.
       */
      type MediaWidth = number;

      type MentionEntity = $schemas.EntityIndicesInclusiveExclusive &
        $schemas.MentionFields;

      /**
       * Represent the portion of text recognized as a User mention, and its start and end position within the text.
       */
      interface MentionFields {
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        id?: $schemas.UserId;
        /**
         * The X handle (screen name) of this user.
         */
        username: $schemas.UserName;
      }

      interface MuteUserMutationResponse {
        data?: {
          muting?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface MuteUserRequest {
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        target_user_id: $schemas.UserId;
      }

      /**
       * The newest id in this response.
       */
      type NewestId = string;

      /**
       * The next token.
       */
      type NextToken = string;

      /**
       * The note content of the Tweet.
       */
      type NoteTweetText = string;

      /**
       * The oldest id in this response.
       */
      type OldestId = string;

      /**
       * A base32 pagination token.
       */
      type PaginationToken32 = string;

      /**
       * A base36 pagination token.
       */
      type PaginationToken36 = string;

      /**
       * A 'long' pagination token.
       */
      type PaginationTokenLong = string;

      interface Place {
        /**
         * @minItems 1
         */
        contained_within?: $schemas.PlaceId[];
        /**
         * The full name of the county in which this place exists.
         */
        country?: string;
        /**
         * A two-letter ISO 3166-1 alpha-2 country code.
         */
        country_code?: $schemas.CountryCode;
        /**
         * The full name of this place.
         */
        full_name: string;
        geo?: $schemas.Geo;
        /**
         * The identifier for this place.
         */
        id: $schemas.PlaceId;
        /**
         * The human readable name of this place.
         */
        name?: string;
        place_type?: $schemas.PlaceType;
      }

      /**
       * The identifier for this place.
       */
      type PlaceId = string;

      type PlaceType =
        | "admin"
        | "city"
        | "country"
        | "neighborhood"
        | "poi"
        | "unknown";

      /**
       * A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
       */
      interface Point {
        /**
         * A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
         * @maxItems 2
         * @minItems 2
         */
        coordinates: $schemas.Position;
        type: "Point";
      }

      /**
       * Represent a Poll attached to a Tweet.
       */
      interface Poll {
        /**
         * @format int32
         * @maximum 10080
         * @minimum 5
         */
        duration_minutes?: number;
        /**
         * @format date-time
         */
        end_datetime?: string;
        /**
         * Unique identifier of this poll.
         */
        id: $schemas.PollId;
        /**
         * @maxItems 4
         * @minItems 2
         */
        options: $schemas.PollOption[];
        voting_status?: "closed" | "open";
      }

      /**
       * Unique identifier of this poll.
       */
      type PollId = string;

      /**
       * Describes a choice in a Poll object.
       */
      interface PollOption {
        /**
         * The text of a poll choice.
         * @maxLength 25
         * @minLength 1
         */
        label: $schemas.PollOptionLabel;
        /**
         * Position of this choice in the poll.
         */
        position: number;
        /**
         * Number of users who voted for this choice.
         */
        votes: number;
      }

      /**
       * The text of a poll choice.
       */
      type PollOptionLabel = string;

      /**
       * A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
       */
      type Position = number[];

      /**
       * The previous token.
       */
      type PreviousToken = string;

      /**
       * An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).
       */
      interface Problem {
        detail?: string;
        status?: number;
        title: string;
        type: string;
      }

      /**
       * Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.
       */
      type ReplySettingsWithVerifiedUsers =
        | "everyone"
        | "following"
        | "mentionedUsers"
        | "other"
        | "subscribers"
        | "verified";

      /**
       * The number of results returned in this response.
       */
      type ResultCount = number;

      /**
       * A user-provided stream filtering rule.
       */
      interface Rule {
        /**
         * Unique identifier of this rule.
         */
        id?: $schemas.RuleId;
        /**
         * A tag meant for the labeling of user provided rules.
         */
        tag?: $schemas.RuleTag;
        /**
         * The filterlang value of the rule.
         */
        value: $schemas.RuleValue;
      }

      /**
       * Unique identifier of this rule.
       */
      type RuleId = string;

      /**
       * A user-provided stream filtering rule.
       */
      interface RuleNoId {
        /**
         * A tag meant for the labeling of user provided rules.
         */
        tag?: $schemas.RuleTag;
        /**
         * The filterlang value of the rule.
         */
        value: $schemas.RuleValue;
      }

      /**
       * A tag meant for the labeling of user provided rules.
       */
      type RuleTag = string;

      /**
       * The filterlang value of the rule.
       */
      type RuleValue = string;

      /**
       * A count of user-provided stream filtering rules at the application and project levels.
       */
      interface RulesCount {
        /**
         * Client App Rule Counts for all applications in the project
         */
        all_project_client_apps?: $schemas.AllProjectClientApps;
        /**
         * Cap of number of rules allowed per client application
         * @format int32
         */
        cap_per_client_app?: number;
        /**
         * Cap of number of rules allowed per project
         * @format int32
         */
        cap_per_project?: number;
        /**
         * A count of user-provided stream filtering rules at the client application level.
         */
        client_app_rules_count?: $schemas.AppRulesCount;
        /**
         * Number of rules for project
         * @format int32
         */
        project_rules_count?: number;
      }

      interface RulesLookupResponse {
        data?: $schemas.Rule[];
        meta: $schemas.RulesResponseMetadata;
      }

      type RulesRequestSummary =
        | {
            /**
             * Number of user-specified stream filtering rules that were created.
             * @format int32
             */
            created: number;
            /**
             * Number of invalid user-specified stream filtering rules.
             * @format int32
             */
            invalid: number;
            /**
             * Number of user-specified stream filtering rules that were not created.
             * @format int32
             */
            not_created: number;
            /**
             * Number of valid user-specified stream filtering rules.
             * @format int32
             */
            valid: number;
          }
        | {
            /**
             * Number of user-specified stream filtering rules that were deleted.
             * @format int32
             */
            deleted: number;
            /**
             * Number of user-specified stream filtering rules that were not deleted.
             * @format int32
             */
            not_deleted: number;
          };

      interface RulesResponseMetadata {
        /**
         * The next token.
         * @minLength 1
         */
        next_token?: $schemas.NextToken;
        /**
         * Number of Rules in result set.
         * @format int32
         */
        result_count?: number;
        sent: string;
        summary?: $schemas.RulesRequestSummary;
      }

      /**
       * Represent a Search Count Result.
       */
      interface SearchCount {
        /**
         * The end time of the bucket.
         * @format date-time
         */
        end: $schemas.End;
        /**
         * The start time of the bucket.
         * @format date-time
         */
        start: $schemas.Start;
        /**
         * The count for the bucket.
         */
        tweet_count: $schemas.TweetCount;
      }

      interface Space {
        /**
         * Creation time of the Space.
         * @format date-time
         */
        created_at?: string;
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        creator_id?: $schemas.UserId;
        /**
         * End time of the Space.
         * @format date-time
         */
        ended_at?: string;
        /**
         * The user ids for the hosts of the Space.
         */
        host_ids?: $schemas.UserId[];
        /**
         * The unique identifier of this Space.
         */
        id: $schemas.SpaceId;
        /**
         * An array of user ids for people who were invited to a Space.
         */
        invited_user_ids?: $schemas.UserId[];
        /**
         * Denotes if the Space is a ticketed Space.
         */
        is_ticketed?: boolean;
        /**
         * The language of the Space.
         */
        lang?: string;
        /**
         * The number of participants in a Space.
         * @format int32
         */
        participant_count?: number;
        /**
         * A date time stamp for when a Space is scheduled to begin.
         * @format date-time
         */
        scheduled_start?: string;
        /**
         * An array of user ids for people who were speakers in a Space.
         */
        speaker_ids?: $schemas.UserId[];
        /**
         * When the Space was started as a date string.
         * @format date-time
         */
        started_at?: string;
        /**
         * The current state of the Space.
         */
        state: "ended" | "live" | "scheduled";
        /**
         * The number of people who have either purchased a ticket or set a reminder for this Space.
         * @format int32
         */
        subscriber_count?: number;
        /**
         * The title of the Space.
         */
        title?: string;
        /**
         * The topics of a Space, as selected by its creator.
         */
        topics?: Array<{
          /**
           * The description of the given topic.
           */
          description?: string;
          /**
           * An ID suitable for use in the REST API.
           */
          id: string;
          /**
           * The name of the given topic.
           */
          name: string;
        }>;
        /**
         * When the Space was last updated.
         * @format date-time
         */
        updated_at?: string;
      }

      /**
       * The unique identifier of this Space.
       */
      type SpaceId = string;

      /**
       * The start time of the bucket.
       */
      type Start = string;

      interface StreamingLikeResponseV2 {
        /**
         * A Like event, with the tweet author user and the tweet being liked
         */
        data?: $schemas.LikeWithTweetAuthor;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      interface StreamingTweetResponse {
        data?: $schemas.Tweet;
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
        includes?: $schemas.Expansions;
      }

      /**
       * The topic of a Space, as selected by its creator.
       */
      interface Topic {
        /**
         * The description of the given topic.
         */
        description?: string;
        /**
         * Unique identifier of this Topic.
         */
        id: $schemas.TopicId;
        /**
         * The name of the given topic.
         */
        name: string;
      }

      /**
       * Unique identifier of this Topic.
       */
      type TopicId = string;

      /**
       * A trend.
       */
      interface Trend {
        /**
         * Name of the trend.
         */
        trend_name?: string;
        /**
         * Number of Posts in this trend.
         * @format int32
         */
        tweet_count?: number;
      }

      interface Tweet {
        /**
         * Specifies the type of attachments (if any) present in this Tweet.
         */
        attachments?: {
          /**
           * A list of Media Keys for each one of the media attachments (if media are attached).
           * @minItems 1
           */
          media_keys?: $schemas.MediaKey[];
          /**
           * A list of Posts the media on this Tweet was originally posted in. For example, if the media on a tweet is re-used in another Tweet, this refers to the original, source Tweet..
           * @minItems 1
           */
          media_source_tweet_id?: $schemas.TweetId[];
          /**
           * A list of poll IDs (if polls are attached).
           * @minItems 1
           */
          poll_ids?: $schemas.PollId[];
        };
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        author_id?: $schemas.UserId;
        /**
         * @minItems 1
         */
        context_annotations?: $schemas.ContextAnnotation[];
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        conversation_id?: $schemas.TweetId;
        /**
         * Creation time of the Tweet.
         * @format date-time
         */
        created_at?: string;
        edit_controls?: {
          /**
           * Time when Tweet is no longer editable.
           * @format date-time
           */
          editable_until: string;
          /**
           * Number of times this Tweet can be edited.
           */
          edits_remaining: number;
          /**
           * Indicates if this Tweet is eligible to be edited.
           */
          is_edit_eligible: boolean;
        };
        /**
         * A list of Tweet Ids in this Tweet chain.
         * @minItems 1
         */
        edit_history_tweet_ids?: $schemas.TweetId[];
        entities?: $schemas.FullTextEntities;
        /**
         * The location tagged on the Tweet, if the user provided one.
         */
        geo?: {
          /**
           * A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
           */
          coordinates?: $schemas.Point;
          /**
           * The identifier for this place.
           */
          place_id?: $schemas.PlaceId;
        };
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        id?: $schemas.TweetId;
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        in_reply_to_user_id?: $schemas.UserId;
        /**
         * Language of the Tweet, if detected by X. Returned as a BCP47 language tag.
         */
        lang?: string;
        /**
         * Nonpublic engagement metrics for the Tweet at the time of the request.
         */
        non_public_metrics?: {
          /**
           * Number of times this Tweet has been viewed.
           * @format int32
           */
          impression_count?: number;
        };
        /**
         * The full-content of the Tweet, including text beyond 280 characters.
         */
        note_tweet?: {
          entities?: {
            /**
             * @minItems 1
             */
            cashtags?: $schemas.CashtagEntity[];
            /**
             * @minItems 1
             */
            hashtags?: $schemas.HashtagEntity[];
            /**
             * @minItems 1
             */
            mentions?: $schemas.MentionEntity[];
            /**
             * @minItems 1
             */
            urls?: $schemas.UrlEntity[];
          };
          /**
           * The note content of the Tweet.
           */
          text?: $schemas.NoteTweetText;
        };
        /**
         * Organic nonpublic engagement metrics for the Tweet at the time of the request.
         */
        organic_metrics?: {
          /**
           * Number of times this Tweet has been viewed.
           */
          impression_count: number;
          /**
           * Number of times this Tweet has been liked.
           */
          like_count: number;
          /**
           * Number of times this Tweet has been replied to.
           */
          reply_count: number;
          /**
           * Number of times this Tweet has been Retweeted.
           */
          retweet_count: number;
        };
        /**
         * Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
         */
        possibly_sensitive?: boolean;
        /**
         * Promoted nonpublic engagement metrics for the Tweet at the time of the request.
         */
        promoted_metrics?: {
          /**
           * Number of times this Tweet has been viewed.
           * @format int32
           */
          impression_count?: number;
          /**
           * Number of times this Tweet has been liked.
           * @format int32
           */
          like_count?: number;
          /**
           * Number of times this Tweet has been replied to.
           * @format int32
           */
          reply_count?: number;
          /**
           * Number of times this Tweet has been Retweeted.
           * @format int32
           */
          retweet_count?: number;
        };
        /**
         * Engagement metrics for the Tweet at the time of the request.
         */
        public_metrics?: {
          /**
           * Number of times this Tweet has been bookmarked.
           * @format int32
           */
          bookmark_count: number;
          /**
           * Number of times this Tweet has been viewed.
           * @format int32
           */
          impression_count: number;
          /**
           * Number of times this Tweet has been liked.
           */
          like_count: number;
          /**
           * Number of times this Tweet has been quoted.
           */
          quote_count?: number;
          /**
           * Number of times this Tweet has been replied to.
           */
          reply_count: number;
          /**
           * Number of times this Tweet has been Retweeted.
           */
          retweet_count: number;
        };
        /**
         * A list of Posts this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
         * @minItems 1
         */
        referenced_tweets?: Array<{
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
          type: "quoted" | "replied_to" | "retweeted";
        }>;
        /**
         * Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, subscribers, verified and following.
         */
        reply_settings?: $schemas.ReplySettingsWithVerifiedUsers;
        /**
         * The scopes for this tweet
         */
        scopes?: {
          /**
           * Indicates if this Tweet is viewable by followers without the Tweet ID
           */
          followers?: boolean;
        };
        /**
         * This is deprecated.
         */
        source?: string;
        /**
         * The content of the Tweet.
         */
        text?: $schemas.TweetText;
        /**
         * The X handle (screen name) of this user.
         */
        username?: $schemas.UserName;
        /**
         * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
         */
        withheld?: $schemas.TweetWithheld;
      }

      /**
       * Tweet compliance data.
       */
      type TweetComplianceData =
        | $schemas.TweetDeleteComplianceSchema
        | $schemas.TweetWithheldComplianceSchema
        | $schemas.TweetDropComplianceSchema
        | $schemas.TweetUndropComplianceSchema
        | $schemas.TweetEditComplianceSchema;

      interface TweetComplianceSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        quote_tweet_id?: $schemas.TweetId;
        tweet: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          author_id: $schemas.UserId;
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
        };
      }

      /**
       * Tweet compliance stream events.
       */
      type TweetComplianceStreamResponse =
        | {
            /**
             * Tweet compliance data.
             */
            data: $schemas.TweetComplianceData;
          }
        | {
            /**
             * @minItems 1
             */
            errors: $schemas.Problem[];
          };

      /**
       * The count for the bucket.
       */
      type TweetCount = number;

      interface TweetCreateRequest {
        /**
         * Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.
         */
        card_uri?: string;
        /**
         * Link to take the conversation from the public timeline to a private Direct Message.
         */
        direct_message_deep_link?: string;
        /**
         * Exclusive Tweet for super followers.
         */
        for_super_followers_only?: boolean;
        /**
         * Place ID being attached to the Tweet for geo location.
         */
        geo?: {
          place_id?: string;
        };
        /**
         * Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.
         */
        media?: {
          /**
           * A list of Media Ids to be attached to a created Tweet.
           * @maxItems 4
           * @minItems 1
           */
          media_ids: $schemas.MediaId[];
          /**
           * A list of User Ids to be tagged in the media for created Tweet.
           * @maxItems 10
           */
          tagged_user_ids?: $schemas.UserId[];
        };
        /**
         * Nullcasted (promoted-only) Posts do not appear in the public timeline and are not served to followers.
         */
        nullcast?: boolean;
        /**
         * Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.
         */
        poll?: {
          /**
           * Duration of the poll in minutes.
           * @format int32
           * @maximum 10080
           * @minimum 5
           */
          duration_minutes: number;
          /**
           * @maxItems 4
           * @minItems 2
           */
          options: string[];
          /**
           * Settings to indicate who can reply to the Tweet.
           */
          reply_settings?: "following" | "mentionedUsers";
        };
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        quote_tweet_id?: $schemas.TweetId;
        /**
         * Tweet information of the Tweet being replied to.
         */
        reply?: {
          /**
           * A list of User Ids to be excluded from the reply Tweet.
           */
          exclude_reply_user_ids?: $schemas.UserId[];
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          in_reply_to_tweet_id: $schemas.TweetId;
        };
        /**
         * Settings to indicate who can reply to the Tweet.
         */
        reply_settings?: "following" | "mentionedUsers" | "subscribers";
        /**
         * The content of the Tweet.
         */
        text?: $schemas.TweetText;
      }

      interface TweetCreateResponse {
        data?: {
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
          /**
           * The content of the Tweet.
           */
          text: $schemas.TweetText;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface TweetDeleteComplianceSchema {
        delete: $schemas.TweetComplianceSchema;
      }

      interface TweetDeleteResponse {
        data?: {
          deleted: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface TweetDropComplianceSchema {
        drop: $schemas.TweetComplianceSchema;
      }

      interface TweetEditComplianceObjectSchema {
        /**
         * @minItems 1
         */
        edit_tweet_ids: $schemas.TweetId[];
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        initial_tweet_id: $schemas.TweetId;
        tweet: {
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
        };
      }

      interface TweetEditComplianceSchema {
        tweet_edit: $schemas.TweetEditComplianceObjectSchema;
      }

      interface TweetHideRequest {
        hidden: boolean;
      }

      interface TweetHideResponse {
        data?: {
          hidden?: boolean;
        };
      }

      /**
       * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
       */
      type TweetId = string;

      /**
       * Tweet label data.
       */
      type TweetLabelData =
        | $schemas.TweetNoticeSchema
        | $schemas.TweetUnviewableSchema;

      /**
       * Tweet label stream events.
       */
      type TweetLabelStreamResponse =
        | {
            /**
             * Tweet label data.
             */
            data: $schemas.TweetLabelData;
          }
        | {
            /**
             * @minItems 1
             */
            errors: $schemas.Problem[];
          };

      interface TweetNotice {
        /**
         * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
         */
        application: string;
        /**
         * Information shown on the Tweet label
         */
        details?: string;
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        /**
         * The type of label on the Tweet
         */
        event_type: string;
        /**
         * Link to more information about this kind of label
         */
        extended_details_url?: string;
        /**
         * Title/header of the Tweet label
         */
        label_title?: string;
        tweet: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          author_id: $schemas.UserId;
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
        };
      }

      interface TweetNoticeSchema {
        public_tweet_notice: $schemas.TweetNotice;
      }

      interface TweetTakedownComplianceSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        quote_tweet_id?: $schemas.TweetId;
        tweet: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          author_id: $schemas.UserId;
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
        };
        /**
         * @minItems 1
         */
        withheld_in_countries: $schemas.CountryCode[];
      }

      /**
       * The content of the Tweet.
       */
      type TweetText = string;

      interface TweetUndropComplianceSchema {
        undrop: $schemas.TweetComplianceSchema;
      }

      interface TweetUnviewable {
        /**
         * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
         */
        application: string;
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        tweet: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          author_id: $schemas.UserId;
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
        };
      }

      interface TweetUnviewableSchema {
        public_tweet_unviewable: $schemas.TweetUnviewable;
      }

      /**
       * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
       */
      interface TweetWithheld {
        /**
         * Indicates if the content is being withheld for on the basis of copyright infringement.
         */
        copyright: boolean;
        /**
         * Provides a list of countries where this content is not available.
         * @minItems 1
         */
        country_codes: $schemas.CountryCode[];
        /**
         * Indicates whether the content being withheld is the `tweet` or a `user`.
         */
        scope?: "tweet" | "user";
      }

      interface TweetWithheldComplianceSchema {
        withheld: $schemas.TweetTakedownComplianceSchema;
      }

      interface UnlikeComplianceSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        favorite: {
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.TweetId;
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          user_id: $schemas.UserId;
        };
      }

      /**
       * Expiration time of the upload URL.
       */
      type UploadExpiration = string;

      /**
       * URL to which the user will upload their Tweet or user IDs.
       */
      type UploadUrl = string;

      /**
       * A validly formatted URL.
       */
      type Url = string;

      /**
       * Represent the portion of text recognized as a URL, and its start and end position within the text.
       */
      type UrlEntity = $schemas.EntityIndicesInclusiveExclusive &
        $schemas.UrlFields;

      /**
       * Represent the portion of text recognized as a URL, and its start and end position within the text.
       */
      type UrlEntityDm = $schemas.EntityIndicesInclusiveExclusive &
        $schemas.UrlFields;

      /**
       * Represent the portion of text recognized as a URL.
       */
      interface UrlFields {
        /**
         * Description of the URL landing page.
         */
        description?: string;
        /**
         * The URL as displayed in the X client.
         */
        display_url?: string;
        /**
         * A validly formatted URL.
         * @format uri
         */
        expanded_url?: $schemas.Url;
        /**
         * @minItems 1
         */
        images?: $schemas.UrlImage[];
        /**
         * The Media Key identifier for this attachment.
         */
        media_key?: $schemas.MediaKey;
        /**
         * HTTP Status Code.
         * @maximum 599
         * @minimum 100
         */
        status?: $schemas.HttpStatusCode;
        /**
         * Title of the page the URL points to.
         */
        title?: string;
        /**
         * Fully resolved url.
         * @format uri
         */
        unwound_url?: string;
        /**
         * A validly formatted URL.
         * @format uri
         */
        url: $schemas.Url;
      }

      /**
       * Represent the information for the URL image.
       */
      interface UrlImage {
        /**
         * The height of the media in pixels.
         */
        height?: $schemas.MediaHeight;
        /**
         * A validly formatted URL.
         * @format uri
         */
        url?: $schemas.Url;
        /**
         * The width of the media in pixels.
         */
        width?: $schemas.MediaWidth;
      }

      /**
       * Usage per client app
       */
      interface Usage {
        /**
         * Number of days left for the Tweet cap to reset
         * @format int32
         */
        cap_reset_day?: number;
        /**
         * The daily usage breakdown for each Client Application a project
         * @minItems 1
         */
        daily_client_app_usage?: $schemas.ClientAppUsage[];
        /**
         * The daily usage breakdown for a project
         */
        daily_project_usage?: {
          /**
           * The unique identifier for this project
           * @format int32
           */
          project_id?: number;
          /**
           * The usage value
           * @minItems 1
           */
          usage?: $schemas.UsageFields[];
        };
        /**
         * Total number of Posts that can be read in this project per month
         * @format int32
         */
        project_cap?: number;
        /**
         * The unique identifier for this project
         * @format ^[0-9]{1,19}$
         */
        project_id?: string;
        /**
         * The number of Posts read in this project
         * @format int32
         */
        project_usage?: number;
      }

      /**
       * Represents the data for Usage
       */
      interface UsageFields {
        /**
         * The time period for the usage
         * @format date-time
         */
        date?: string;
        /**
         * The usage value
         * @format int32
         */
        usage?: number;
      }

      /**
       * The X User object.
       */
      interface User {
        /**
         * Returns detailed information about the relationship between two users.
         */
        connection_status?: Array<
          | "blocking"
          | "follow_request_received"
          | "follow_request_sent"
          | "followed_by"
          | "following"
          | "muting"
        >;
        /**
         * Creation time of this User.
         * @format date-time
         */
        created_at?: string;
        /**
         * The text of this User's profile description (also known as bio), if the User provided one.
         */
        description?: string;
        /**
         * A list of metadata found in the User's profile description.
         */
        entities?: {
          description?: $schemas.FullTextEntities;
          /**
           * Expanded details for the URL specified in the User's profile, with start and end indices.
           */
          url?: {
            /**
             * @minItems 1
             */
            urls?: $schemas.UrlEntity[];
          };
        };
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        id: $schemas.UserId;
        /**
         * The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
         */
        location?: string;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        most_recent_tweet_id?: $schemas.TweetId;
        /**
         * The friendly name of this User, as shown on their profile.
         */
        name: string;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        pinned_tweet_id?: $schemas.TweetId;
        /**
         * The URL to the profile image for this User.
         * @format uri
         */
        profile_image_url?: string;
        /**
         * Indicates if this User has chosen to protect their Posts (in other words, if this User's Posts are private).
         */
        protected?: boolean;
        /**
         * A list of metrics for this User.
         */
        public_metrics?: {
          /**
           * Number of Users who are following this User.
           */
          followers_count: number;
          /**
           * Number of Users this User is following.
           */
          following_count: number;
          /**
           * The number of likes created by this User.
           */
          like_count?: number;
          /**
           * The number of lists that include this User.
           */
          listed_count: number;
          /**
           * The number of Posts (including Retweets) posted by this User.
           */
          tweet_count: number;
        };
        /**
         * Indicates if you can send a DM to this User
         */
        receives_your_dm?: boolean;
        /**
         * The X Blue subscription type of the user, eg: Basic, Premium, PremiumPlus or None.
         */
        subscription_type?: "Basic" | "None" | "Premium" | "PremiumPlus";
        /**
         * The URL specified in the User's profile.
         */
        url?: string;
        /**
         * The X handle (screen name) of this user.
         */
        username: $schemas.UserName;
        /**
         * Indicate if this User is a verified X User.
         */
        verified?: boolean;
        /**
         * The X Blue verified type of the user, eg: blue, government, business or none.
         */
        verified_type?: "blue" | "business" | "government" | "none";
        /**
         * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
         */
        withheld?: $schemas.UserWithheld;
      }

      /**
       * User compliance data.
       */
      type UserComplianceData =
        | $schemas.UserProtectComplianceSchema
        | $schemas.UserUnprotectComplianceSchema
        | $schemas.UserDeleteComplianceSchema
        | $schemas.UserUndeleteComplianceSchema
        | $schemas.UserSuspendComplianceSchema
        | $schemas.UserUnsuspendComplianceSchema
        | $schemas.UserWithheldComplianceSchema
        | $schemas.UserScrubGeoSchema
        | $schemas.UserProfileModificationComplianceSchema;

      interface UserComplianceSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        user: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.UserId;
        };
      }

      /**
       * User compliance stream events.
       */
      type UserComplianceStreamResponse =
        | {
            /**
             * User compliance data.
             */
            data: $schemas.UserComplianceData;
          }
        | {
            /**
             * @minItems 1
             */
            errors: $schemas.Problem[];
          };

      interface UserDeleteComplianceSchema {
        user_delete: $schemas.UserComplianceSchema;
      }

      /**
       * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
       */
      type UserId = string;

      /**
       * Unique identifier of this User. The value must be the same as the authenticated user.
       */
      type UserIdMatchesAuthenticatedUser = string;

      /**
       * The X handle (screen name) of this user.
       */
      type UserName = string;

      interface UserProfileModificationComplianceSchema {
        user_profile_modification: $schemas.UserProfileModificationObjectSchema;
      }

      interface UserProfileModificationObjectSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        new_value: string;
        profile_field: string;
        user: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.UserId;
        };
      }

      interface UserProtectComplianceSchema {
        user_protect: $schemas.UserComplianceSchema;
      }

      interface UserScrubGeoObjectSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        up_to_tweet_id: $schemas.TweetId;
        user: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.UserId;
        };
      }

      interface UserScrubGeoSchema {
        scrub_geo: $schemas.UserScrubGeoObjectSchema;
      }

      /**
       * The the search string by which to query for users.
       */
      type UserSearchQuery = string;

      interface UserSuspendComplianceSchema {
        user_suspend: $schemas.UserComplianceSchema;
      }

      interface UserTakedownComplianceSchema {
        /**
         * Event time.
         * @format date-time
         */
        event_at: string;
        user: {
          /**
           * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id: $schemas.UserId;
        };
        /**
         * @minItems 1
         */
        withheld_in_countries: $schemas.CountryCode[];
      }

      interface UserUndeleteComplianceSchema {
        user_undelete: $schemas.UserComplianceSchema;
      }

      interface UserUnprotectComplianceSchema {
        user_unprotect: $schemas.UserComplianceSchema;
      }

      interface UserUnsuspendComplianceSchema {
        user_unsuspend: $schemas.UserComplianceSchema;
      }

      /**
       * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
       */
      interface UserWithheld {
        /**
         * Provides a list of countries where this content is not available.
         * @minItems 1
         */
        country_codes: $schemas.CountryCode[];
        /**
         * Indicates that the content being withheld is a `user`.
         */
        scope?: "user";
      }

      interface UserWithheldComplianceSchema {
        user_withheld: $schemas.UserTakedownComplianceSchema;
      }

      interface UsersFollowingCreateRequest {
        /**
         * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        target_user_id: $schemas.UserId;
      }

      interface UsersFollowingCreateResponse {
        data?: {
          following?: boolean;
          pending_follow?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface UsersFollowingDeleteResponse {
        data?: {
          following?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface UsersLikesCreateRequest {
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        tweet_id: $schemas.TweetId;
      }

      interface UsersLikesCreateResponse {
        data?: {
          liked?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface UsersLikesDeleteResponse {
        data?: {
          liked?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface UsersRetweetsCreateRequest {
        /**
         * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
         */
        tweet_id: $schemas.TweetId;
      }

      interface UsersRetweetsCreateResponse {
        data?: {
          /**
           * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
           */
          id?: $schemas.TweetId;
          retweeted?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }

      interface UsersRetweetsDeleteResponse {
        data?: {
          retweeted?: boolean;
        };
        /**
         * @minItems 1
         */
        errors?: $schemas.Problem[];
      }
    }
  }
}
