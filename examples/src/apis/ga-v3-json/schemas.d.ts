declare namespace API {
  namespace GaV3Json {
    namespace $schemas {
      /**
       * JSON template for Analytics account entry.
       */
      interface Account {
        /**
         * Child link for an account entry. Points to the list of web properties for this account.
         */
        childLink?: {
          /**
           * Link to the list of web properties for this account.
           */
          href?: string;
          /**
           * Type of the child link. Its value is "analytics#webproperties".
           * @default analytics#webproperties
           */
          type?: string;
        };
        /**
         * Time the account was created.
         * @format date-time
         */
        created?: string;
        /**
         * Account ID.
         */
        id?: string;
        /**
         * Resource type for Analytics account.
         * @default analytics#account
         */
        kind?: string;
        /**
         * Account name.
         */
        name?: string;
        /**
         * Permissions the user has for this account.
         */
        permissions?: {
          /**
           * All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW).
           */
          effective?: string[];
        };
        /**
         * Link for this account.
         */
        selfLink?: string;
        /**
         * Indicates whether this account is starred or not.
         */
        starred?: boolean;
        /**
         * Time the account was last modified.
         * @format date-time
         */
        updated?: string;
      }

      /**
       * JSON template for a linked account.
       */
      interface AccountRef {
        /**
         * Link for this account.
         */
        href?: string;
        /**
         * Account ID.
         */
        id?: string;
        /**
         * Analytics account reference.
         * @default analytics#accountRef
         */
        kind?: string;
        /**
         * Account name.
         */
        name?: string;
      }

      /**
       * An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
       */
      interface AccountSummaries {
        /**
         * A list of AccountSummaries.
         */
        items?: $schemas.AccountSummary[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#accountSummaries
         */
        kind?: string;
        /**
         * Link to next page for this AccountSummary collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this AccountSummary collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
       */
      interface AccountSummary {
        /**
         * Account ID.
         */
        id?: string;
        /**
         * Resource type for Analytics AccountSummary.
         * @default analytics#accountSummary
         */
        kind?: string;
        /**
         * Account name.
         */
        name?: string;
        /**
         * Indicates whether this account is starred or not.
         */
        starred?: boolean;
        /**
         * List of web properties under this account.
         */
        webProperties?: $schemas.WebPropertySummary[];
      }

      /**
       * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
       */
      interface AccountTicket {
        /**
         * JSON template for Analytics account entry.
         */
        account?: $schemas.Account;
        /**
         * Account ticket ID used to access the account ticket.
         */
        id?: string;
        /**
         * Resource type for account ticket.
         * @default analytics#accountTicket
         */
        kind?: string;
        /**
         * JSON template for an Analytics view (profile).
         */
        profile?: $schemas.Profile;
        /**
         * Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
         */
        redirectUri?: string;
        /**
         * JSON template for an Analytics web property.
         */
        webproperty?: $schemas.Webproperty;
      }

      /**
       * JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
       */
      interface AccountTreeRequest {
        accountName?: string;
        /**
         * Resource type for account ticket.
         * @default analytics#accountTreeRequest
         */
        kind?: string;
        profileName?: string;
        timezone?: string;
        webpropertyName?: string;
        websiteUrl?: string;
      }

      /**
       * JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
       */
      interface AccountTreeResponse {
        /**
         * JSON template for Analytics account entry.
         */
        account?: $schemas.Account;
        /**
         * Resource type for account ticket.
         * @default analytics#accountTreeResponse
         */
        kind?: string;
        /**
         * JSON template for an Analytics view (profile).
         */
        profile?: $schemas.Profile;
        /**
         * JSON template for an Analytics web property.
         */
        webproperty?: $schemas.Webproperty;
      }

      /**
       * An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
       */
      interface Accounts {
        /**
         * A list of accounts.
         */
        items?: $schemas.Account[];
        /**
         * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#accounts
         */
        kind?: string;
        /**
         * Next link for this account collection.
         */
        nextLink?: string;
        /**
         * Previous link for this account collection.
         */
        previousLink?: string;
        /**
         * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for an Google Ads account.
       */
      interface AdWordsAccount {
        /**
         * True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation.
         */
        autoTaggingEnabled?: boolean;
        /**
         * Customer ID. This field is required when creating a Google Ads link.
         */
        customerId?: string;
        /**
         * Resource type for Google Ads account.
         * @default analytics#adWordsAccount
         */
        kind?: string;
      }

      /**
       * Request template for the delete upload data request.
       */
      interface AnalyticsDataimportDeleteUploadDataRequest {
        /**
         * A list of upload UIDs.
         */
        customDataImportUids?: string[];
      }

      /**
       * JSON template for a metadata column.
       */
      interface Column {
        /**
         * Map of attribute name and value for this column.
         */
        attributes?: {
          /**
           * The name of the attribute.
           */
          [P: string]: string;
        };
        /**
         * Column id.
         */
        id?: string;
        /**
         * Resource type for Analytics column.
         * @default analytics#column
         */
        kind?: string;
      }

      /**
       * Lists columns (dimensions and metrics) for a particular report type.
       */
      interface Columns {
        /**
         * List of attributes names returned by columns.
         */
        attributeNames?: string[];
        /**
         * Etag of collection. This etag can be compared with the last response etag to check if response has changed.
         */
        etag?: string;
        /**
         * List of columns for a report type.
         */
        items?: $schemas.Column[];
        /**
         * Collection type.
         * @default analytics#columns
         */
        kind?: string;
        /**
         * Total number of columns returned in the response.
         * @format int32
         */
        totalResults?: number;
      }

      /**
       * JSON template for an Analytics custom data source.
       */
      interface CustomDataSource {
        /**
         * Account ID to which this custom data source belongs.
         */
        accountId?: string;
        childLink?: {
          /**
           * Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source.
           */
          href?: string;
          /**
           * Value is "analytics#dailyUploads". Value is "analytics#uploads".
           */
          type?: string;
        };
        /**
         * Time this custom data source was created.
         * @format date-time
         */
        created?: string;
        /**
         * Description of custom data source.
         */
        description?: string;
        /**
         * Custom data source ID.
         */
        id?: string;
        importBehavior?: string;
        /**
         * Resource type for Analytics custom data source.
         * @default analytics#customDataSource
         */
        kind?: string;
        /**
         * Name of this custom data source.
         */
        name?: string;
        /**
         * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
         */
        parentLink?: {
          /**
           * Link to the web property to which this custom data source belongs.
           */
          href?: string;
          /**
           * Value is "analytics#webproperty".
           * @default analytics#webproperty
           */
          type?: string;
        };
        /**
         * IDs of views (profiles) linked to the custom data source.
         */
        profilesLinked?: string[];
        /**
         * Collection of schema headers of the custom data source.
         */
        schema?: string[];
        /**
         * Link for this Analytics custom data source.
         */
        selfLink?: string;
        /**
         * Type of the custom data source.
         */
        type?: string;
        /**
         * Time this custom data source was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Upload type of the custom data source.
         */
        uploadType?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.
         */
        webPropertyId?: string;
      }

      /**
       * Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.
       */
      interface CustomDataSources {
        /**
         * Collection of custom data sources.
         */
        items?: $schemas.CustomDataSource[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#customDataSources
         */
        kind?: string;
        /**
         * Link to next page for this custom data source collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this custom data source collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for Analytics Custom Dimension.
       */
      interface CustomDimension {
        /**
         * Account ID.
         */
        accountId?: string;
        /**
         * Boolean indicating whether the custom dimension is active.
         */
        active?: boolean;
        /**
         * Time the custom dimension was created.
         * @format date-time
         */
        created?: string;
        /**
         * Custom dimension ID.
         */
        id?: string;
        /**
         * Index of the custom dimension.
         * @format int32
         */
        index?: number;
        /**
         * Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.
         * @default analytics#customDimension
         */
        kind?: string;
        /**
         * Name of the custom dimension.
         */
        name?: string;
        /**
         * Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
         */
        parentLink?: {
          /**
           * Link to the property to which the custom dimension belongs.
           */
          href?: string;
          /**
           * Type of the parent link. Set to "analytics#webproperty".
           * @default analytics#webproperty
           */
          type?: string;
        };
        /**
         * Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
         */
        scope?: string;
        /**
         * Link for the custom dimension
         */
        selfLink?: string;
        /**
         * Time the custom dimension was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Property ID.
         */
        webPropertyId?: string;
      }

      /**
       * A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.
       */
      interface CustomDimensions {
        /**
         * Collection of custom dimensions.
         */
        items?: $schemas.CustomDimension[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#customDimensions
         */
        kind?: string;
        /**
         * Link to next page for this custom dimension collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this custom dimension collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for Analytics Custom Metric.
       */
      interface CustomMetric {
        /**
         * Account ID.
         */
        accountId?: string;
        /**
         * Boolean indicating whether the custom metric is active.
         */
        active?: boolean;
        /**
         * Time the custom metric was created.
         * @format date-time
         */
        created?: string;
        /**
         * Custom metric ID.
         */
        id?: string;
        /**
         * Index of the custom metric.
         * @format int32
         */
        index?: number;
        /**
         * Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.
         * @default analytics#customMetric
         */
        kind?: string;
        /**
         * Max value of custom metric.
         */
        max_value?: string;
        /**
         * Min value of custom metric.
         */
        min_value?: string;
        /**
         * Name of the custom metric.
         */
        name?: string;
        /**
         * Parent link for the custom metric. Points to the property to which the custom metric belongs.
         */
        parentLink?: {
          /**
           * Link to the property to which the custom metric belongs.
           */
          href?: string;
          /**
           * Type of the parent link. Set to "analytics#webproperty".
           * @default analytics#webproperty
           */
          type?: string;
        };
        /**
         * Scope of the custom metric: HIT or PRODUCT.
         */
        scope?: string;
        /**
         * Link for the custom metric
         */
        selfLink?: string;
        /**
         * Data type of custom metric.
         */
        type?: string;
        /**
         * Time the custom metric was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Property ID.
         */
        webPropertyId?: string;
      }

      /**
       * A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
       */
      interface CustomMetrics {
        /**
         * Collection of custom metrics.
         */
        items?: $schemas.CustomMetric[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#customMetrics
         */
        kind?: string;
        /**
         * Link to next page for this custom metric collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this custom metric collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for Analytics Entity Google Ads Link.
       */
      interface EntityAdWordsLink {
        /**
         * A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.
         */
        adWordsAccounts?: $schemas.AdWordsAccount[];
        /**
         * Web property being linked.
         */
        entity?: {
          /**
           * JSON template for a web property reference.
           */
          webPropertyRef?: $schemas.WebPropertyRef;
        };
        /**
         * Entity Google Ads link ID
         */
        id?: string;
        /**
         * Resource type for entity Google Ads link.
         * @default analytics#entityAdWordsLink
         */
        kind?: string;
        /**
         * Name of the link. This field is required when creating a Google Ads link.
         */
        name?: string;
        /**
         * IDs of linked Views (Profiles) represented as strings.
         */
        profileIds?: string[];
        /**
         * URL link for this Google Analytics - Google Ads link.
         */
        selfLink?: string;
      }

      /**
       * An entity Google Ads link collection provides a list of GA-Google Ads links Each resource in this collection corresponds to a single link.
       */
      interface EntityAdWordsLinks {
        /**
         * A list of entity Google Ads links.
         */
        items?: $schemas.EntityAdWordsLink[];
        /**
         * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#entityAdWordsLinks
         */
        kind?: string;
        /**
         * Next link for this Google Ads link collection.
         */
        nextLink?: string;
        /**
         * Previous link for this Google Ads link collection.
         */
        previousLink?: string;
        /**
         * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
      }

      /**
       * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
       */
      interface EntityUserLink {
        /**
         * Entity for this link. It can be an account, a web property, or a view (profile).
         */
        entity?: {
          /**
           * JSON template for a linked account.
           */
          accountRef?: $schemas.AccountRef;
          /**
           * JSON template for a linked view (profile).
           */
          profileRef?: $schemas.ProfileRef;
          /**
           * JSON template for a web property reference.
           */
          webPropertyRef?: $schemas.WebPropertyRef;
        };
        /**
         * Entity user link ID
         */
        id?: string;
        /**
         * Resource type for entity user link.
         * @default analytics#entityUserLink
         */
        kind?: string;
        /**
         * Permissions the user has for this entity.
         */
        permissions?: {
          /**
           * Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only.
           */
          effective?: string[];
          /**
           * Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.
           */
          local?: string[];
        };
        /**
         * Self link for this resource.
         */
        selfLink?: string;
        /**
         * JSON template for a user reference.
         */
        userRef?: $schemas.UserRef;
      }

      /**
       * An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
       */
      interface EntityUserLinks {
        /**
         * A list of entity user links.
         */
        items?: $schemas.EntityUserLink[];
        /**
         * The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#entityUserLinks
         */
        kind?: string;
        /**
         * Next link for this account collection.
         */
        nextLink?: string;
        /**
         * Previous link for this account collection.
         */
        previousLink?: string;
        /**
         * The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
      }

      /**
       * JSON template for Analytics experiment resource.
       */
      interface Experiment {
        /**
         * Account ID to which this experiment belongs. This field is read-only.
         */
        accountId?: string;
        /**
         * Time the experiment was created. This field is read-only.
         * @format date-time
         */
        created?: string;
        /**
         * Notes about this experiment.
         */
        description?: string;
        /**
         * If true, the end user will be able to edit the experiment via the Google Analytics user interface.
         */
        editableInGaUi?: boolean;
        /**
         * The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.
         * @format date-time
         */
        endTime?: string;
        /**
         * Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.
         */
        equalWeighting?: boolean;
        /**
         * Experiment ID. Required for patch and update. Disallowed for create.
         */
        id?: string;
        /**
         * Internal ID for the web property to which this experiment belongs. This field is read-only.
         */
        internalWebPropertyId?: string;
        /**
         * Resource type for an Analytics experiment. This field is read-only.
         * @default analytics#experiment
         */
        kind?: string;
        /**
         * An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
         * @format int32
         */
        minimumExperimentLengthInDays?: number;
        /**
         * Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.
         */
        name?: string;
        /**
         * The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".
         */
        objectiveMetric?: string;
        /**
         * Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
         */
        optimizationType?: string;
        /**
         * Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
         */
        parentLink?: {
          /**
           * Link to the view (profile) to which this experiment belongs. This field is read-only.
           */
          href?: string;
          /**
           * Value is "analytics#profile". This field is read-only.
           * @default analytics#profile
           */
          type?: string;
        };
        /**
         * View (Profile) ID to which this experiment belongs. This field is read-only.
         */
        profileId?: string;
        /**
         * Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.
         */
        reasonExperimentEnded?: string;
        /**
         * Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.
         */
        rewriteVariationUrlsAsOriginal?: boolean;
        /**
         * Link for this experiment. This field is read-only.
         */
        selfLink?: string;
        /**
         * The framework used to serve the experiment variations and evaluate the results. One of:
         * - REDIRECT: Google Analytics redirects traffic to different variation pages, reports the chosen variation and evaluates the results.
         * - API: Google Analytics chooses and reports the variation to serve and evaluates the results; the caller is responsible for serving the selected variation.
         * - EXTERNAL: The variations will be served externally and the chosen variation reported to Google Analytics. The caller is responsible for serving the selected variation and evaluating the results.
         */
        servingFramework?: string;
        /**
         * The snippet of code to include on the control page(s). This field is read-only.
         */
        snippet?: string;
        /**
         * The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.
         * @format date-time
         */
        startTime?: string;
        /**
         * Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
         */
        status?: string;
        /**
         * A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
         * @format double
         */
        trafficCoverage?: number;
        /**
         * Time the experiment was last modified. This field is read-only.
         * @format date-time
         */
        updated?: string;
        /**
         * Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
         */
        variations?: Array<{
          /**
           * The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.
           */
          name?: string;
          /**
           * Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.
           */
          status?: string;
          /**
           * The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.
           */
          url?: string;
          /**
           * Weight that this variation should receive. Only present if the experiment is running. This field is read-only.
           * @format double
           */
          weight?: number;
          /**
           * True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.
           */
          won?: boolean;
        }>;
        /**
         * Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.
         */
        webPropertyId?: string;
        /**
         * A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.
         * @format double
         */
        winnerConfidenceLevel?: number;
        /**
         * Boolean specifying whether a winner has been found for this experiment. This field is read-only.
         */
        winnerFound?: boolean;
      }

      /**
       * An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
       */
      interface Experiments {
        /**
         * A list of experiments.
         */
        items?: $schemas.Experiment[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#experiments
         */
        kind?: string;
        /**
         * Link to next page for this experiment collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this experiment collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of resources in the result.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for an Analytics account filter.
       */
      interface Filter {
        /**
         * Account ID to which this filter belongs.
         */
        accountId?: string;
        /**
         * Details for the filter of the type ADVANCED.
         */
        advancedDetails?: {
          /**
           * Indicates if the filter expressions are case sensitive.
           */
          caseSensitive?: boolean;
          /**
           * Expression to extract from field A.
           */
          extractA?: string;
          /**
           * Expression to extract from field B.
           */
          extractB?: string;
          /**
           * Field A.
           */
          fieldA?: string;
          /**
           * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
           * @format int32
           */
          fieldAIndex?: number;
          /**
           * Indicates if field A is required to match.
           */
          fieldARequired?: boolean;
          /**
           * Field B.
           */
          fieldB?: string;
          /**
           * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
           * @format int32
           */
          fieldBIndex?: number;
          /**
           * Indicates if field B is required to match.
           */
          fieldBRequired?: boolean;
          /**
           * Expression used to construct the output value.
           */
          outputConstructor?: string;
          /**
           * Output field.
           */
          outputToField?: string;
          /**
           * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
           * @format int32
           */
          outputToFieldIndex?: number;
          /**
           * Indicates if the existing value of the output field, if any, should be overridden by the output expression.
           */
          overrideOutputField?: boolean;
        };
        /**
         * Time this filter was created.
         * @format date-time
         */
        created?: string;
        /**
         * JSON template for an Analytics filter expression.
         */
        excludeDetails?: $schemas.FilterExpression;
        /**
         * Filter ID.
         */
        id?: string;
        /**
         * JSON template for an Analytics filter expression.
         */
        includeDetails?: $schemas.FilterExpression;
        /**
         * Resource type for Analytics filter.
         * @default analytics#filter
         */
        kind?: string;
        /**
         * Details for the filter of the type LOWER.
         */
        lowercaseDetails?: {
          /**
           * Field to use in the filter.
           */
          field?: string;
          /**
           * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
           * @format int32
           */
          fieldIndex?: number;
        };
        /**
         * Name of this filter.
         */
        name?: string;
        /**
         * Parent link for this filter. Points to the account to which this filter belongs.
         */
        parentLink?: {
          /**
           * Link to the account to which this filter belongs.
           */
          href?: string;
          /**
           * Value is "analytics#account".
           * @default analytics#account
           */
          type?: string;
        };
        /**
         * Details for the filter of the type SEARCH_AND_REPLACE.
         */
        searchAndReplaceDetails?: {
          /**
           * Determines if the filter is case sensitive.
           */
          caseSensitive?: boolean;
          /**
           * Field to use in the filter.
           */
          field?: string;
          /**
           * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
           * @format int32
           */
          fieldIndex?: number;
          /**
           * Term to replace the search term with.
           */
          replaceString?: string;
          /**
           * Term to search.
           */
          searchString?: string;
        };
        /**
         * Link for this filter.
         */
        selfLink?: string;
        /**
         * Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
         */
        type?: string;
        /**
         * Time this filter was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Details for the filter of the type UPPER.
         */
        uppercaseDetails?: {
          /**
           * Field to use in the filter.
           */
          field?: string;
          /**
           * The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
           * @format int32
           */
          fieldIndex?: number;
        };
      }

      /**
       * JSON template for an Analytics filter expression.
       */
      interface FilterExpression {
        /**
         * Determines if the filter is case sensitive.
         */
        caseSensitive?: boolean;
        /**
         * Filter expression value
         */
        expressionValue?: string;
        /**
         * Field to filter. Possible values:
         * - Content and Traffic
         * - PAGE_REQUEST_URI,
         * - PAGE_HOSTNAME,
         * - PAGE_TITLE,
         * - REFERRAL,
         * - COST_DATA_URI (Campaign target URL),
         * - HIT_TYPE,
         * - INTERNAL_SEARCH_TERM,
         * - INTERNAL_SEARCH_TYPE,
         * - SOURCE_PROPERTY_TRACKING_ID,
         * - Campaign or AdGroup
         * - CAMPAIGN_SOURCE,
         * - CAMPAIGN_MEDIUM,
         * - CAMPAIGN_NAME,
         * - CAMPAIGN_AD_GROUP,
         * - CAMPAIGN_TERM,
         * - CAMPAIGN_CONTENT,
         * - CAMPAIGN_CODE,
         * - CAMPAIGN_REFERRAL_PATH,
         * - E-Commerce
         * - TRANSACTION_COUNTRY,
         * - TRANSACTION_REGION,
         * - TRANSACTION_CITY,
         * - TRANSACTION_AFFILIATION (Store or order location),
         * - ITEM_NAME,
         * - ITEM_CODE,
         * - ITEM_VARIATION,
         * - TRANSACTION_ID,
         * - TRANSACTION_CURRENCY_CODE,
         * - PRODUCT_ACTION_TYPE,
         * - Audience/Users
         * - BROWSER,
         * - BROWSER_VERSION,
         * - BROWSER_SIZE,
         * - PLATFORM,
         * - PLATFORM_VERSION,
         * - LANGUAGE,
         * - SCREEN_RESOLUTION,
         * - SCREEN_COLORS,
         * - JAVA_ENABLED (Boolean Field),
         * - FLASH_VERSION,
         * - GEO_SPEED (Connection speed),
         * - VISITOR_TYPE,
         * - GEO_ORGANIZATION (ISP organization),
         * - GEO_DOMAIN,
         * - GEO_IP_ADDRESS,
         * - GEO_IP_VERSION,
         * - Location
         * - GEO_COUNTRY,
         * - GEO_REGION,
         * - GEO_CITY,
         * - Event
         * - EVENT_CATEGORY,
         * - EVENT_ACTION,
         * - EVENT_LABEL,
         * - Other
         * - CUSTOM_FIELD_1,
         * - CUSTOM_FIELD_2,
         * - USER_DEFINED_VALUE,
         * - Application
         * - APP_ID,
         * - APP_INSTALLER_ID,
         * - APP_NAME,
         * - APP_VERSION,
         * - SCREEN,
         * - IS_APP (Boolean Field),
         * - IS_FATAL_EXCEPTION (Boolean Field),
         * - EXCEPTION_DESCRIPTION,
         * - Mobile device
         * - IS_MOBILE (Boolean Field, Deprecated. Use DEVICE_CATEGORY=mobile),
         * - IS_TABLET (Boolean Field, Deprecated. Use DEVICE_CATEGORY=tablet),
         * - DEVICE_CATEGORY,
         * - MOBILE_HAS_QWERTY_KEYBOARD (Boolean Field),
         * - MOBILE_HAS_NFC_SUPPORT (Boolean Field),
         * - MOBILE_HAS_CELLULAR_RADIO (Boolean Field),
         * - MOBILE_HAS_WIFI_SUPPORT (Boolean Field),
         * - MOBILE_BRAND_NAME,
         * - MOBILE_MODEL_NAME,
         * - MOBILE_MARKETING_NAME,
         * - MOBILE_POINTING_METHOD,
         * - Social
         * - SOCIAL_NETWORK,
         * - SOCIAL_ACTION,
         * - SOCIAL_ACTION_TARGET,
         * - Custom dimension
         * - CUSTOM_DIMENSION (See accompanying field index),
         */
        field?: string;
        /**
         * The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.
         * @format int32
         */
        fieldIndex?: number;
        /**
         * Kind value for filter expression
         * @default analytics#filterExpression
         */
        kind?: string;
        /**
         * Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.
         */
        matchType?: string;
      }

      /**
       * JSON template for a profile filter link.
       */
      interface FilterRef {
        /**
         * Account ID to which this filter belongs.
         */
        accountId?: string;
        /**
         * Link for this filter.
         */
        href?: string;
        /**
         * Filter ID.
         */
        id?: string;
        /**
         * Kind value for filter reference.
         * @default analytics#filterRef
         */
        kind?: string;
        /**
         * Name of this filter.
         */
        name?: string;
      }

      /**
       * A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
       */
      interface Filters {
        /**
         * A list of filters.
         */
        items?: $schemas.Filter[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#filters
         */
        kind?: string;
        /**
         * Link to next page for this filter collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this filter collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * Analytics data for a given view (profile).
       */
      interface GaData {
        /**
         * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
         */
        columnHeaders?: Array<{
          /**
           * Column Type. Either DIMENSION or METRIC.
           */
          columnType?: string;
          /**
           * Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
           */
          dataType?: string;
          /**
           * Column name.
           */
          name?: string;
        }>;
        /**
         * Determines if Analytics data contains samples.
         */
        containsSampledData?: boolean;
        /**
         * The last refreshed time in seconds for Analytics data.
         * @format int64
         */
        dataLastRefreshed?: string;
        dataTable?: {
          cols?: Array<{
            id?: string;
            label?: string;
            type?: string;
          }>;
          rows?: Array<{
            c?: Array<{
              v?: string;
            }>;
          }>;
        };
        /**
         * Unique ID for this data response.
         */
        id?: string;
        /**
         * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Resource type.
         * @default analytics#gaData
         */
        kind?: string;
        /**
         * Link to next page for this Analytics data query.
         */
        nextLink?: string;
        /**
         * Link to previous page for this Analytics data query.
         */
        previousLink?: string;
        /**
         * Information for the view (profile), for which the Analytics data was requested.
         */
        profileInfo?: {
          /**
           * Account ID to which this view (profile) belongs.
           */
          accountId?: string;
          /**
           * Internal ID for the web property to which this view (profile) belongs.
           */
          internalWebPropertyId?: string;
          /**
           * View (Profile) ID.
           */
          profileId?: string;
          /**
           * View (Profile) name.
           */
          profileName?: string;
          /**
           * Table ID for view (profile).
           */
          tableId?: string;
          /**
           * Web Property ID to which this view (profile) belongs.
           */
          webPropertyId?: string;
        };
        /**
         * Analytics data request query parameters.
         */
        query?: {
          /**
           * List of analytics dimensions.
           */
          dimensions?: string;
          /**
           * End date.
           */
          "end-date"?: string;
          /**
           * Comma-separated list of dimension or metric filters.
           */
          filters?: string;
          /**
           * Unique table ID.
           */
          ids?: string;
          /**
           * Maximum results per page.
           * @format int32
           */
          "max-results"?: number;
          /**
           * List of analytics metrics.
           */
          metrics?: string[];
          /**
           * Desired sampling level
           */
          samplingLevel?: string;
          /**
           * Analytics advanced segment.
           */
          segment?: string;
          /**
           * List of dimensions or metrics based on which Analytics data is sorted.
           */
          sort?: string[];
          /**
           * Start date.
           */
          "start-date"?: string;
          /**
           * Start index.
           * @format int32
           */
          "start-index"?: number;
        };
        /**
         * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
         */
        rows?: Array<string[]>;
        /**
         * The number of samples used to calculate the result.
         * @format int64
         */
        sampleSize?: string;
        /**
         * Total size of the sample space from which the samples were selected.
         * @format int64
         */
        sampleSpace?: string;
        /**
         * Link to this page.
         */
        selfLink?: string;
        /**
         * The total number of rows for the query, regardless of the number of rows in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
         */
        totalsForAllResults?: {
          /**
           * Key-value pair for the total value of a metric. Key is the metric name and the value is the total value for that metric.
           */
          [P: string]: string;
        };
      }

      /**
       * JSON template for Analytics goal resource.
       */
      interface Goal {
        /**
         * Account ID to which this goal belongs.
         */
        accountId?: string;
        /**
         * Determines whether this goal is active.
         */
        active?: boolean;
        /**
         * Time this goal was created.
         * @format date-time
         */
        created?: string;
        /**
         * Details for the goal of the type EVENT.
         */
        eventDetails?: {
          /**
           * List of event conditions.
           */
          eventConditions?: Array<{
            /**
             * Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.
             */
            comparisonType?: string;
            /**
             * Value used for this comparison.
             * @format int64
             */
            comparisonValue?: string;
            /**
             * Expression used for this match.
             */
            expression?: string;
            /**
             * Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.
             */
            matchType?: string;
            /**
             * Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.
             */
            type?: string;
          }>;
          /**
           * Determines if the event value should be used as the value for this goal.
           */
          useEventValue?: boolean;
        };
        /**
         * Goal ID.
         */
        id?: string;
        /**
         * Internal ID for the web property to which this goal belongs.
         */
        internalWebPropertyId?: string;
        /**
         * Resource type for an Analytics goal.
         * @default analytics#goal
         */
        kind?: string;
        /**
         * Goal name.
         */
        name?: string;
        /**
         * Parent link for a goal. Points to the view (profile) to which this goal belongs.
         */
        parentLink?: {
          /**
           * Link to the view (profile) to which this goal belongs.
           */
          href?: string;
          /**
           * Value is "analytics#profile".
           * @default analytics#profile
           */
          type?: string;
        };
        /**
         * View (Profile) ID to which this goal belongs.
         */
        profileId?: string;
        /**
         * Link for this goal.
         */
        selfLink?: string;
        /**
         * Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
         */
        type?: string;
        /**
         * Time this goal was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Details for the goal of the type URL_DESTINATION.
         */
        urlDestinationDetails?: {
          /**
           * Determines if the goal URL must exactly match the capitalization of visited URLs.
           */
          caseSensitive?: boolean;
          /**
           * Determines if the first step in this goal is required.
           */
          firstStepRequired?: boolean;
          /**
           * Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.
           */
          matchType?: string;
          /**
           * List of steps configured for this goal funnel.
           */
          steps?: Array<{
            /**
             * Step name.
             */
            name?: string;
            /**
             * Step number.
             * @format int32
             */
            number?: number;
            /**
             * URL for this step.
             */
            url?: string;
          }>;
          /**
           * URL for this goal.
           */
          url?: string;
        };
        /**
         * Goal value.
         * @format float
         */
        value?: number;
        /**
         * Details for the goal of the type VISIT_NUM_PAGES.
         */
        visitNumPagesDetails?: {
          /**
           * Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.
           */
          comparisonType?: string;
          /**
           * Value used for this comparison.
           * @format int64
           */
          comparisonValue?: string;
        };
        /**
         * Details for the goal of the type VISIT_TIME_ON_SITE.
         */
        visitTimeOnSiteDetails?: {
          /**
           * Type of comparison. Possible values are LESS_THAN or GREATER_THAN.
           */
          comparisonType?: string;
          /**
           * Value used for this comparison.
           * @format int64
           */
          comparisonValue?: string;
        };
        /**
         * Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.
         */
        webPropertyId?: string;
      }

      /**
       * A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
       */
      interface Goals {
        /**
         * A list of goals.
         */
        items?: $schemas.Goal[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#goals
         */
        kind?: string;
        /**
         * Link to next page for this goal collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this goal collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of resources in the result.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for a hash Client Id request resource.
       */
      interface HashClientIdRequest {
        clientId?: string;
        /**
         * @default analytics#hashClientIdRequest
         */
        kind?: string;
        webPropertyId?: string;
      }

      /**
       * JSON template for a hash Client Id response resource.
       */
      interface HashClientIdResponse {
        clientId?: string;
        hashedClientId?: string;
        /**
         * @default analytics#hashClientIdResponse
         */
        kind?: string;
        webPropertyId?: string;
      }

      /**
       * JSON template for an Analytics Remarketing Include Conditions.
       */
      interface IncludeConditions {
        /**
         * The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.
         * @format int32
         */
        daysToLookBack?: number;
        /**
         * Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577
         */
        isSmartList?: boolean;
        /**
         * Resource type for include conditions.
         * @default analytics#includeConditions
         */
        kind?: string;
        /**
         * Number of days (in the range 1 to 540) a user remains in the audience.
         * @format int32
         */
        membershipDurationDays?: number;
        /**
         * The segment condition that will cause a user to be added to an audience.
         */
        segment?: string;
      }

      /**
       * JSON template for an Analytics Remarketing Audience Foreign Link.
       */
      interface LinkedForeignAccount {
        /**
         * Account ID to which this linked foreign account belongs.
         */
        accountId?: string;
        /**
         * Boolean indicating whether this is eligible for search.
         */
        eligibleForSearch?: boolean;
        /**
         * Entity ad account link ID.
         */
        id?: string;
        /**
         * Internal ID for the web property to which this linked foreign account belongs.
         */
        internalWebPropertyId?: string;
        /**
         * Resource type for linked foreign account.
         * @default analytics#linkedForeignAccount
         */
        kind?: string;
        /**
         * The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.
         */
        linkedAccountId?: string;
        /**
         * Remarketing audience ID to which this linked foreign account belongs.
         */
        remarketingAudienceId?: string;
        /**
         * The status of this foreign account link.
         */
        status?: string;
        /**
         * The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.
         */
        type?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.
         */
        webPropertyId?: string;
      }

      /**
       * Multi-Channel Funnels data for a given view (profile).
       */
      interface McfData {
        /**
         * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
         */
        columnHeaders?: Array<{
          /**
           * Column Type. Either DIMENSION or METRIC.
           */
          columnType?: string;
          /**
           * Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc.
           */
          dataType?: string;
          /**
           * Column name.
           */
          name?: string;
        }>;
        /**
         * Determines if the Analytics data contains sampled data.
         */
        containsSampledData?: boolean;
        /**
         * Unique ID for this data response.
         */
        id?: string;
        /**
         * The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Resource type.
         * @default analytics#mcfData
         */
        kind?: string;
        /**
         * Link to next page for this Analytics data query.
         */
        nextLink?: string;
        /**
         * Link to previous page for this Analytics data query.
         */
        previousLink?: string;
        /**
         * Information for the view (profile), for which the Analytics data was requested.
         */
        profileInfo?: {
          /**
           * Account ID to which this view (profile) belongs.
           */
          accountId?: string;
          /**
           * Internal ID for the web property to which this view (profile) belongs.
           */
          internalWebPropertyId?: string;
          /**
           * View (Profile) ID.
           */
          profileId?: string;
          /**
           * View (Profile) name.
           */
          profileName?: string;
          /**
           * Table ID for view (profile).
           */
          tableId?: string;
          /**
           * Web Property ID to which this view (profile) belongs.
           */
          webPropertyId?: string;
        };
        /**
         * Analytics data request query parameters.
         */
        query?: {
          /**
           * List of analytics dimensions.
           */
          dimensions?: string;
          /**
           * End date.
           */
          "end-date"?: string;
          /**
           * Comma-separated list of dimension or metric filters.
           */
          filters?: string;
          /**
           * Unique table ID.
           */
          ids?: string;
          /**
           * Maximum results per page.
           * @format int32
           */
          "max-results"?: number;
          /**
           * List of analytics metrics.
           */
          metrics?: string[];
          /**
           * Desired sampling level
           */
          samplingLevel?: string;
          /**
           * Analytics advanced segment.
           */
          segment?: string;
          /**
           * List of dimensions or metrics based on which Analytics data is sorted.
           */
          sort?: string[];
          /**
           * Start date.
           */
          "start-date"?: string;
          /**
           * Start index.
           * @format int32
           */
          "start-index"?: number;
        };
        /**
         * Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
         */
        rows?: Array<
          Array<{
            /**
             * A conversion path dimension value, containing a list of interactions with their attributes.
             */
            conversionPathValue?: Array<{
              /**
               * Type of an interaction on conversion path. Such as CLICK, IMPRESSION etc.
               */
              interactionType?: string;
              /**
               * Node value of an interaction on conversion path. Such as source, medium etc.
               */
              nodeValue?: string;
            }>;
            /**
             * A primitive dimension value. A primitive metric value.
             */
            primitiveValue?: string;
          }>
        >;
        /**
         * The number of samples used to calculate the result.
         * @format int64
         */
        sampleSize?: string;
        /**
         * Total size of the sample space from which the samples were selected.
         * @format int64
         */
        sampleSpace?: string;
        /**
         * Link to this page.
         */
        selfLink?: string;
        /**
         * The total number of rows for the query, regardless of the number of rows in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
         */
        totalsForAllResults?: {
          /**
           * Key-value pair for the total value of a metric. Key is the metric name and the value is the total value for that metric.
           */
          [P: string]: string;
        };
      }

      /**
       * JSON template for an Analytics view (profile).
       */
      interface Profile {
        /**
         * Account ID to which this view (profile) belongs.
         */
        accountId?: string;
        /**
         * Indicates whether bot filtering is enabled for this view (profile).
         */
        botFilteringEnabled?: boolean;
        /**
         * Child link for this view (profile). Points to the list of goals for this view (profile).
         */
        childLink?: {
          /**
           * Link to the list of goals for this view (profile).
           */
          href?: string;
          /**
           * Value is "analytics#goals".
           * @default analytics#goals
           */
          type?: string;
        };
        /**
         * Time this view (profile) was created.
         * @format date-time
         */
        created?: string;
        /**
         * The currency type associated with this view (profile), defaults to USD. The supported values are:
         * USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL
         */
        currency?: string;
        /**
         * Default page for this view (profile).
         */
        defaultPage?: string;
        /**
         * Indicates whether ecommerce tracking is enabled for this view (profile).
         */
        eCommerceTracking?: boolean;
        /**
         * Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.
         */
        enhancedECommerceTracking?: boolean;
        /**
         * The query parameters that are excluded from this view (profile).
         */
        excludeQueryParameters?: string;
        /**
         * View (Profile) ID.
         */
        id?: string;
        /**
         * Internal ID for the web property to which this view (profile) belongs.
         */
        internalWebPropertyId?: string;
        /**
         * Resource type for Analytics view (profile).
         * @default analytics#profile
         */
        kind?: string;
        /**
         * Name of this view (profile).
         */
        name?: string;
        /**
         * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
         */
        parentLink?: {
          /**
           * Link to the web property to which this view (profile) belongs.
           */
          href?: string;
          /**
           * Value is "analytics#webproperty".
           * @default analytics#webproperty
           */
          type?: string;
        };
        /**
         * Permissions the user has for this view (profile).
         */
        permissions?: {
          /**
           * All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property.
           */
          effective?: string[];
        };
        /**
         * Link for this view (profile).
         */
        selfLink?: string;
        /**
         * Site search category parameters for this view (profile).
         */
        siteSearchCategoryParameters?: string;
        /**
         * The site search query parameters for this view (profile).
         */
        siteSearchQueryParameters?: string;
        /**
         * Indicates whether this view (profile) is starred or not.
         */
        starred?: boolean;
        /**
         * Whether or not Analytics will strip search category parameters from the URLs in your reports.
         */
        stripSiteSearchCategoryParameters?: boolean;
        /**
         * Whether or not Analytics will strip search query parameters from the URLs in your reports.
         */
        stripSiteSearchQueryParameters?: boolean;
        /**
         * Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
         */
        timezone?: string;
        /**
         * View (Profile) type. Supported types: WEB or APP.
         */
        type?: string;
        /**
         * Time this view (profile) was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
         */
        webPropertyId?: string;
        /**
         * Website URL for this view (profile).
         */
        websiteUrl?: string;
      }

      /**
       * JSON template for an Analytics profile filter link.
       */
      interface ProfileFilterLink {
        /**
         * JSON template for a profile filter link.
         */
        filterRef?: $schemas.FilterRef;
        /**
         * Profile filter link ID.
         */
        id?: string;
        /**
         * Resource type for Analytics filter.
         * @default analytics#profileFilterLink
         */
        kind?: string;
        /**
         * JSON template for a linked view (profile).
         */
        profileRef?: $schemas.ProfileRef;
        /**
         * The rank of this profile filter link relative to the other filters linked to the same profile.
         * For readonly (i.e., list and get) operations, the rank always starts at 1.
         * For write (i.e., create, update, or delete) operations, you may specify a value between 0 and 255 inclusively, [0, 255]. In order to insert a link at the end of the list, either don't specify a rank or set a rank to a number greater than the largest rank in the list. In order to insert a link to the beginning of the list specify a rank that is less than or equal to 1. The new link will move all existing filters with the same or lower rank down the list. After the link is inserted/updated/deleted all profile filter links will be renumbered starting at 1.
         * @format int32
         */
        rank?: number;
        /**
         * Link for this profile filter link.
         */
        selfLink?: string;
      }

      /**
       * A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
       */
      interface ProfileFilterLinks {
        /**
         * A list of profile filter links.
         */
        items?: $schemas.ProfileFilterLink[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#profileFilterLinks
         */
        kind?: string;
        /**
         * Link to next page for this profile filter link collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this profile filter link collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for a linked view (profile).
       */
      interface ProfileRef {
        /**
         * Account ID to which this view (profile) belongs.
         */
        accountId?: string;
        /**
         * Link for this view (profile).
         */
        href?: string;
        /**
         * View (Profile) ID.
         */
        id?: string;
        /**
         * Internal ID for the web property to which this view (profile) belongs.
         */
        internalWebPropertyId?: string;
        /**
         * Analytics view (profile) reference.
         * @default analytics#profileRef
         */
        kind?: string;
        /**
         * Name of this view (profile).
         */
        name?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
         */
        webPropertyId?: string;
      }

      /**
       * JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
       */
      interface ProfileSummary {
        /**
         * View (profile) ID.
         */
        id?: string;
        /**
         * Resource type for Analytics ProfileSummary.
         * @default analytics#profileSummary
         */
        kind?: string;
        /**
         * View (profile) name.
         */
        name?: string;
        /**
         * Indicates whether this view (profile) is starred or not.
         */
        starred?: boolean;
        /**
         * View (Profile) type. Supported types: WEB or APP.
         */
        type?: string;
      }

      /**
       * A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
       */
      interface Profiles {
        /**
         * A list of views (profiles).
         */
        items?: $schemas.Profile[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#profiles
         */
        kind?: string;
        /**
         * Link to next page for this view (profile) collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this view (profile) collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * Real time data for a given view (profile).
       */
      interface RealtimeData {
        /**
         * Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
         */
        columnHeaders?: Array<{
          /**
           * Column Type. Either DIMENSION or METRIC.
           */
          columnType?: string;
          /**
           * Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
           */
          dataType?: string;
          /**
           * Column name.
           */
          name?: string;
        }>;
        /**
         * Unique ID for this data response.
         */
        id?: string;
        /**
         * Resource type.
         * @default analytics#realtimeData
         */
        kind?: string;
        /**
         * Information for the view (profile), for which the real time data was requested.
         */
        profileInfo?: {
          /**
           * Account ID to which this view (profile) belongs.
           */
          accountId?: string;
          /**
           * Internal ID for the web property to which this view (profile) belongs.
           */
          internalWebPropertyId?: string;
          /**
           * View (Profile) ID.
           */
          profileId?: string;
          /**
           * View (Profile) name.
           */
          profileName?: string;
          /**
           * Table ID for view (profile).
           */
          tableId?: string;
          /**
           * Web Property ID to which this view (profile) belongs.
           */
          webPropertyId?: string;
        };
        /**
         * Real time data request query parameters.
         */
        query?: {
          /**
           * List of real time dimensions.
           */
          dimensions?: string;
          /**
           * Comma-separated list of dimension or metric filters.
           */
          filters?: string;
          /**
           * Unique table ID.
           */
          ids?: string;
          /**
           * Maximum results per page.
           * @format int32
           */
          "max-results"?: number;
          /**
           * List of real time metrics.
           */
          metrics?: string[];
          /**
           * List of dimensions or metrics based on which real time data is sorted.
           */
          sort?: string[];
        };
        /**
         * Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
         */
        rows?: Array<string[]>;
        /**
         * Link to this page.
         */
        selfLink?: string;
        /**
         * The total number of rows for the query, regardless of the number of rows in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.
         */
        totalsForAllResults?: {
          /**
           * Key-value pair for the total value of a metric. Key is the metric name and the value is the total value for that metric.
           */
          [P: string]: string;
        };
      }

      /**
       * JSON template for an Analytics remarketing audience.
       */
      interface RemarketingAudience {
        /**
         * Account ID to which this remarketing audience belongs.
         */
        accountId?: string;
        /**
         * The simple audience definition that will cause a user to be added to an audience.
         */
        audienceDefinition?: {
          /**
           * JSON template for an Analytics Remarketing Include Conditions.
           */
          includeConditions?: $schemas.IncludeConditions;
        };
        /**
         * The type of audience, either SIMPLE or STATE_BASED.
         */
        audienceType?: string;
        /**
         * Time this remarketing audience was created.
         * @format date-time
         */
        created?: string;
        /**
         * The description of this remarketing audience.
         */
        description?: string;
        /**
         * Remarketing Audience ID.
         */
        id?: string;
        /**
         * Internal ID for the web property to which this remarketing audience belongs.
         */
        internalWebPropertyId?: string;
        /**
         * Collection type.
         * @default analytics#remarketingAudience
         */
        kind?: string;
        /**
         * The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.
         */
        linkedAdAccounts?: $schemas.LinkedForeignAccount[];
        /**
         * The views (profiles) that this remarketing audience is linked to.
         */
        linkedViews?: string[];
        /**
         * The name of this remarketing audience.
         */
        name?: string;
        /**
         * A state based audience definition that will cause a user to be added or removed from an audience.
         */
        stateBasedAudienceDefinition?: {
          /**
           * Defines the conditions to exclude users from the audience.
           */
          excludeConditions?: {
            /**
             * Whether to make the exclusion TEMPORARY or PERMANENT.
             */
            exclusionDuration?: string;
            /**
             * The segment condition that will cause a user to be removed from an audience.
             */
            segment?: string;
          };
          /**
           * JSON template for an Analytics Remarketing Include Conditions.
           */
          includeConditions?: $schemas.IncludeConditions;
        };
        /**
         * Time this remarketing audience was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.
         */
        webPropertyId?: string;
      }

      /**
       * A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.
       */
      interface RemarketingAudiences {
        /**
         * A list of remarketing audiences.
         */
        items?: $schemas.RemarketingAudience[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#remarketingAudiences
         */
        kind?: string;
        /**
         * Link to next page for this remarketing audience collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this view (profile) collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for an Analytics segment.
       */
      interface Segment {
        /**
         * Time the segment was created.
         * @format date-time
         */
        created?: string;
        /**
         * Segment definition.
         */
        definition?: string;
        /**
         * Segment ID.
         */
        id?: string;
        /**
         * Resource type for Analytics segment.
         * @default analytics#segment
         */
        kind?: string;
        /**
         * Segment name.
         */
        name?: string;
        /**
         * Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
         */
        segmentId?: string;
        /**
         * Link for this segment.
         */
        selfLink?: string;
        /**
         * Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
         */
        type?: string;
        /**
         * Time the segment was last modified.
         * @format date-time
         */
        updated?: string;
      }

      /**
       * An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
       */
      interface Segments {
        /**
         * A list of segments.
         */
        items?: $schemas.Segment[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type for segments.
         * @default analytics#segments
         */
        kind?: string;
        /**
         * Link to next page for this segment collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this segment collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for Analytics unsampled report resource.
       */
      interface UnsampledReport {
        /**
         * Account ID to which this unsampled report belongs.
         */
        accountId?: string;
        /**
         * Download details for a file stored in Google Cloud Storage.
         */
        cloudStorageDownloadDetails?: {
          /**
           * Id of the bucket the file object is stored in.
           */
          bucketId?: string;
          /**
           * Id of the file object containing the report data.
           */
          objectId?: string;
        };
        /**
         * Time this unsampled report was created.
         * @format date-time
         */
        created?: string;
        /**
         * The dimensions for the unsampled report.
         */
        dimensions?: string;
        /**
         * The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
         */
        downloadType?: string;
        /**
         * Download details for a file stored in Google Drive.
         */
        driveDownloadDetails?: {
          /**
           * Id of the document/file containing the report data.
           */
          documentId?: string;
        };
        /**
         * The end date for the unsampled report.
         */
        "end-date"?: string;
        /**
         * The filters for the unsampled report.
         */
        filters?: string;
        /**
         * Unsampled report ID.
         */
        id?: string;
        /**
         * Resource type for an Analytics unsampled report.
         * @default analytics#unsampledReport
         */
        kind?: string;
        /**
         * The metrics for the unsampled report.
         */
        metrics?: string;
        /**
         * View (Profile) ID to which this unsampled report belongs.
         */
        profileId?: string;
        /**
         * The segment for the unsampled report.
         */
        segment?: string;
        /**
         * Link for this unsampled report.
         */
        selfLink?: string;
        /**
         * The start date for the unsampled report.
         */
        "start-date"?: string;
        /**
         * Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
         */
        status?: string;
        /**
         * Title of the unsampled report.
         */
        title?: string;
        /**
         * Time this unsampled report was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.
         */
        webPropertyId?: string;
      }

      /**
       * An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
       */
      interface UnsampledReports {
        /**
         * A list of unsampled reports.
         */
        items?: $schemas.UnsampledReport[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#unsampledReports
         */
        kind?: string;
        /**
         * Link to next page for this unsampled report collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this unsampled report collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of resources in the result.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * Metadata returned for an upload operation.
       */
      interface Upload {
        /**
         * Account Id to which this upload belongs.
         * @format int64
         */
        accountId?: string;
        /**
         * Custom data source Id to which this data import belongs.
         */
        customDataSourceId?: string;
        /**
         * Data import errors collection.
         */
        errors?: string[];
        /**
         * A unique ID for this upload.
         */
        id?: string;
        /**
         * Resource type for Analytics upload.
         * @default analytics#upload
         */
        kind?: string;
        /**
         * Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
         */
        status?: string;
        /**
         * Time this file is uploaded.
         * @format date-time
         */
        uploadTime?: string;
      }

      /**
       * Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
       */
      interface Uploads {
        /**
         * A list of uploads.
         */
        items?: $schemas.Upload[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#uploads
         */
        kind?: string;
        /**
         * Link to next page for this upload collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this upload collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of resources in the result.
         * @format int32
         */
        totalResults?: number;
      }

      /**
       * JSON template for a user deletion request resource.
       */
      interface UserDeletionRequest {
        /**
         * This marks the point in time for which all user data before should be deleted
         * @format date-time
         */
        deletionRequestTime?: string;
        /**
         * Firebase Project Id
         */
        firebaseProjectId?: string;
        /**
         * User ID.
         */
        id?: {
          /**
           * Type of user
           */
          type?: string;
          /**
           * The User's id
           */
          userId?: string;
        };
        /**
         * Value is "analytics#userDeletionRequest".
         * @default analytics#userDeletionRequest
         */
        kind?: string;
        /**
         * Property ID
         */
        propertyId?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY.
         */
        webPropertyId?: string;
      }

      /**
       * JSON template for a user reference.
       */
      interface UserRef {
        /**
         * Email ID of this user.
         */
        email?: string;
        /**
         * User ID.
         */
        id?: string;
        /**
         * @default analytics#userRef
         */
        kind?: string;
      }

      /**
       * JSON template for a web property reference.
       */
      interface WebPropertyRef {
        /**
         * Account ID to which this web property belongs.
         */
        accountId?: string;
        /**
         * Link for this web property.
         */
        href?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY.
         */
        id?: string;
        /**
         * Internal ID for this web property.
         */
        internalWebPropertyId?: string;
        /**
         * Analytics web property reference.
         * @default analytics#webPropertyRef
         */
        kind?: string;
        /**
         * Name of this web property.
         */
        name?: string;
      }

      /**
       * JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
       */
      interface WebPropertySummary {
        /**
         * Web property ID of the form UA-XXXXX-YY.
         */
        id?: string;
        /**
         * Internal ID for this web property.
         */
        internalWebPropertyId?: string;
        /**
         * Resource type for Analytics WebPropertySummary.
         * @default analytics#webPropertySummary
         */
        kind?: string;
        /**
         * Level for this web property. Possible values are STANDARD or PREMIUM.
         */
        level?: string;
        /**
         * Web property name.
         */
        name?: string;
        /**
         * List of profiles under this web property.
         */
        profiles?: $schemas.ProfileSummary[];
        /**
         * Indicates whether this web property is starred or not.
         */
        starred?: boolean;
        /**
         * Website url for this web property.
         */
        websiteUrl?: string;
      }

      /**
       * A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
       */
      interface Webproperties {
        /**
         * A list of web properties.
         */
        items?: $schemas.Webproperty[];
        /**
         * The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
         * @format int32
         */
        itemsPerPage?: number;
        /**
         * Collection type.
         * @default analytics#webproperties
         */
        kind?: string;
        /**
         * Link to next page for this web property collection.
         */
        nextLink?: string;
        /**
         * Link to previous page for this web property collection.
         */
        previousLink?: string;
        /**
         * The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
         * @format int32
         */
        startIndex?: number;
        /**
         * The total number of results for the query, regardless of the number of results in the response.
         * @format int32
         */
        totalResults?: number;
        /**
         * Email ID of the authenticated user
         */
        username?: string;
      }

      /**
       * JSON template for an Analytics web property.
       */
      interface Webproperty {
        /**
         * Account ID to which this web property belongs.
         */
        accountId?: string;
        /**
         * Child link for this web property. Points to the list of views (profiles) for this web property.
         */
        childLink?: {
          /**
           * Link to the list of views (profiles) for this web property.
           */
          href?: string;
          /**
           * Type of the parent link. Its value is "analytics#profiles".
           * @default analytics#profiles
           */
          type?: string;
        };
        /**
         * Time this web property was created.
         * @format date-time
         */
        created?: string;
        /**
         * Set to true to reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period).
         * Set to false to delete data associated with the user identifier automatically after the rentention period.
         * This property cannot be set on insert.
         */
        dataRetentionResetOnNewActivity?: boolean;
        /**
         * The length of time for which user and event data is retained.
         * This property cannot be set on insert.
         */
        dataRetentionTtl?: string;
        /**
         * Default view (profile) ID.
         * @format int64
         */
        defaultProfileId?: string;
        /**
         * Web property ID of the form UA-XXXXX-YY.
         */
        id?: string;
        /**
         * The industry vertical/category selected for this web property.
         */
        industryVertical?: string;
        /**
         * Internal ID for this web property.
         */
        internalWebPropertyId?: string;
        /**
         * Resource type for Analytics WebProperty.
         * @default analytics#webproperty
         */
        kind?: string;
        /**
         * Level for this web property. Possible values are STANDARD or PREMIUM.
         */
        level?: string;
        /**
         * Name of this web property.
         */
        name?: string;
        /**
         * Parent link for this web property. Points to the account to which this web property belongs.
         */
        parentLink?: {
          /**
           * Link to the account for this web property.
           */
          href?: string;
          /**
           * Type of the parent link. Its value is "analytics#account".
           * @default analytics#account
           */
          type?: string;
        };
        /**
         * Permissions the user has for this web property.
         */
        permissions?: {
          /**
           * All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account.
           */
          effective?: string[];
        };
        /**
         * View (Profile) count for this web property.
         * @format int32
         */
        profileCount?: number;
        /**
         * Link for this web property.
         */
        selfLink?: string;
        /**
         * Indicates whether this web property is starred or not.
         */
        starred?: boolean;
        /**
         * Time this web property was last modified.
         * @format date-time
         */
        updated?: string;
        /**
         * Website url for this web property.
         */
        websiteUrl?: string;
      }
    }
  }
}
