declare namespace API {
  namespace CustomizeTagAndName {
    namespace $schemas {
      type AccessControlAllowHeadersList = any[];

      type AccessControlAllowMethodsList = any[];

      type AccessControlAllowOriginsList = any[];

      type AccessControlExposeHeadersList = any[];

      /**
       * A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
       */
      interface ActiveTrustedKeyGroups {
        Enabled: $schemas.Boolean;
        Items?: $schemas.KgKeyPairIdsList;
        Quantity: $schemas.Integer;
      }

      /**
       * A list of Amazon Web Services accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
       */
      interface ActiveTrustedSigners {
        Enabled: $schemas.Boolean;
        Items?: $schemas.SignerList;
        Quantity: $schemas.Integer;
      }

      type AliasIcpRecordals = any[];

      type AliasList = any[];

      /**
       * A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
       */
      interface Aliases {
        Items?: $schemas.AliasList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
       */
      interface AllowedMethods {
        /**
         * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>
         */
        CachedMethods?: $schemas.CachedMethods;
        Items: $schemas.MethodsList;
        Quantity: $schemas.Integer;
      }

      type AwsAccountNumberList = any[];

      type Boolean = boolean;

      type CacheBehaviorList = any[];

      /**
       * A complex type that contains zero or more <code>CacheBehavior</code> elements.
       */
      interface CacheBehaviors {
        Items?: $schemas.CacheBehaviorList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>A cache policy.</p> <p>When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
       */
      interface CachePolicy {
        CachePolicyConfig: $schemas.CachePolicyConfig;
        Id: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
      }

      /**
       * <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
       */
      interface CachePolicyConfig {
        Comment?: $schemas.String;
        DefaultTTL?: $schemas.Long;
        MaxTTL?: $schemas.Long;
        MinTTL: $schemas.Long;
        Name: $schemas.String;
        ParametersInCacheKeyAndForwardedToOrigin?: $schemas.ParametersInCacheKeyAndForwardedToOrigin;
      }

      type CachePolicyCookieBehavior =
        | "all"
        | "allExcept"
        | "none"
        | "whitelist";

      /**
       * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
       */
      interface CachePolicyCookiesConfig {
        CookieBehavior: $schemas.CachePolicyCookieBehavior;
        /**
         * Contains a list of cookie names.
         */
        Cookies?: $schemas.CookieNames;
      }

      type CachePolicyHeaderBehavior = "none" | "whitelist";

      /**
       * An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
       */
      interface CachePolicyHeadersConfig {
        HeaderBehavior: $schemas.CachePolicyHeaderBehavior;
        /**
         * Contains a list of HTTP header names.
         */
        Headers?: $schemas.Headers;
      }

      /**
       * A list of cache policies.
       */
      interface CachePolicyList {
        Items?: $schemas.CachePolicySummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type CachePolicyQueryStringBehavior =
        | "all"
        | "allExcept"
        | "none"
        | "whitelist";

      /**
       * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.
       */
      interface CachePolicyQueryStringsConfig {
        QueryStringBehavior: $schemas.CachePolicyQueryStringBehavior;
        QueryStrings?: $schemas.QueryStringNames;
      }

      type CachePolicySummaryList = any[];

      /**
       * <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.</p>
       */
      interface CachedMethods {
        Items: $schemas.MethodsList;
        Quantity: $schemas.Integer;
      }

      type CertificateSource = "acm" | "cloudfront" | "iam";

      /**
       * CloudFront origin access identity.
       */
      interface CloudFrontOriginAccessIdentity {
        CloudFrontOriginAccessIdentityConfig?: $schemas.CloudFrontOriginAccessIdentityConfig;
        Id: $schemas.String;
        S3CanonicalUserId: $schemas.String;
      }

      /**
       * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
       */
      interface CloudFrontOriginAccessIdentityConfig {
        CallerReference: $schemas.String;
        Comment: $schemas.String;
      }

      /**
       * Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.
       */
      interface CloudFrontOriginAccessIdentityList {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.CloudFrontOriginAccessIdentitySummaryList;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type CloudFrontOriginAccessIdentitySummaryList = any[];

      type CommentType = string;

      type ConflictingAliases = any[];

      /**
       * A list of aliases (also called CNAMEs) and the CloudFront distributions and Amazon Web Services accounts that they are associated with. In the list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.
       */
      interface ConflictingAliasesList {
        Items?: $schemas.ConflictingAliases;
        MaxItems?: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity?: $schemas.Integer;
      }

      /**
       * The configuration for a field-level encryption content type-profile mapping.
       */
      interface ContentTypeProfileConfig {
        ContentTypeProfiles?: $schemas.ContentTypeProfiles;
        ForwardWhenContentTypeIsUnknown: $schemas.Boolean;
      }

      type ContentTypeProfileList = any[];

      /**
       * Field-level encryption content type-profile.
       */
      interface ContentTypeProfiles {
        Items?: $schemas.ContentTypeProfileList;
        Quantity: $schemas.Integer;
      }

      /**
       * A continuous deployment policy.
       */
      interface ContinuousDeploymentPolicy {
        /**
         * Contains the configuration for a continuous deployment policy.
         */
        ContinuousDeploymentPolicyConfig: $schemas.ContinuousDeploymentPolicyConfig;
        Id: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
      }

      /**
       * Contains the configuration for a continuous deployment policy.
       */
      interface ContinuousDeploymentPolicyConfig {
        Enabled: $schemas.Boolean;
        StagingDistributionDnsNames: $schemas.StagingDistributionDnsNames;
        TrafficConfig?: $schemas.TrafficConfig;
      }

      /**
       * Contains a list of continuous deployment policies.
       */
      interface ContinuousDeploymentPolicyList {
        Items?: $schemas.ContinuousDeploymentPolicySummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type ContinuousDeploymentPolicySummaryList = any[];

      type ContinuousDeploymentPolicyType = "SingleHeader" | "SingleWeight";

      /**
       * This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
       */
      interface ContinuousDeploymentSingleHeaderConfig {
        Header: $schemas.String;
        Value: $schemas.String;
      }

      /**
       * Contains the percentage of traffic to send to a staging distribution.
       */
      interface ContinuousDeploymentSingleWeightConfig {
        /**
         * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
         */
        SessionStickinessConfig?: $schemas.SessionStickinessConfig;
        Weight: $schemas.Float;
      }

      type CookieNameList = any[];

      /**
       * Contains a list of cookie names.
       */
      interface CookieNames {
        Items?: $schemas.CookieNameList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
       */
      interface CookiePreference {
        Forward: $schemas.ItemSelection;
        WhitelistedNames?: $schemas.CookieNames;
      }

      interface CopyDistributionResult {
        /**
         * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
         */
        Distribution?: $schemas.Distribution;
      }

      interface CreateCachePolicyResult {
        CachePolicy?: $schemas.CachePolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface CreateCloudFrontOriginAccessIdentityResult {
        CloudFrontOriginAccessIdentity?: $schemas.CloudFrontOriginAccessIdentity;
      }

      interface CreateContinuousDeploymentPolicyResult {
        ContinuousDeploymentPolicy?: $schemas.ContinuousDeploymentPolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface CreateDistributionResult {
        Distribution?: $schemas.Distribution;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface CreateDistributionWithTagsResult {
        Distribution?: $schemas.Distribution;
      }

      interface CreateFieldLevelEncryptionConfigResult {
        FieldLevelEncryption?: $schemas.FieldLevelEncryption;
      }

      interface CreateFieldLevelEncryptionProfileResult {
        FieldLevelEncryptionProfile?: $schemas.FieldLevelEncryptionProfile;
      }

      interface CreateFunctionResult {
        FunctionSummary?: $schemas.FunctionSummary;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface CreateInvalidationResult {
        Invalidation?: $schemas.Invalidation;
      }

      interface CreateKeyGroupResult {
        KeyGroup?: $schemas.KeyGroup;
      }

      interface CreateMonitoringSubscriptionResult {
        MonitoringSubscription?: $schemas.MonitoringSubscription;
      }

      interface CreateOriginAccessControlResult {
        OriginAccessControl?: $schemas.OriginAccessControl;
      }

      interface CreateOriginRequestPolicyResult {
        OriginRequestPolicy?: $schemas.OriginRequestPolicy;
      }

      interface CreatePublicKeyResult {
        PublicKey?: $schemas.PublicKey;
      }

      interface CreateRealtimeLogConfigResult {
        RealtimeLogConfig?: $schemas.RealtimeLogConfig;
      }

      interface CreateResponseHeadersPolicyResult {
        ResponseHeadersPolicy?: $schemas.ResponseHeadersPolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface CreateStreamingDistributionResult {
        StreamingDistribution?: $schemas.StreamingDistribution;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface CreateStreamingDistributionWithTagsResult {
        StreamingDistribution?: $schemas.StreamingDistribution;
      }

      type CustomErrorResponseList = any[];

      /**
       * <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
       */
      interface CustomErrorResponses {
        Items?: $schemas.CustomErrorResponseList;
        Quantity: $schemas.Integer;
      }

      /**
       * A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if request URLs don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
       */
      interface DefaultCacheBehavior {
        /**
         * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
         */
        AllowedMethods?: $schemas.AllowedMethods;
        CachePolicyId?: $schemas.String;
        Compress?: $schemas.Boolean;
        DefaultTTL?: $schemas.Long;
        FieldLevelEncryptionId?: $schemas.String;
        ForwardedValues?: $schemas.ForwardedValues;
        FunctionAssociations?: $schemas.FunctionAssociations;
        LambdaFunctionAssociations?: $schemas.LambdaFunctionAssociations;
        MaxTTL?: $schemas.Long;
        MinTTL?: $schemas.Long;
        OriginRequestPolicyId?: $schemas.String;
        RealtimeLogConfigArn?: $schemas.String;
        ResponseHeadersPolicyId?: $schemas.String;
        SmoothStreaming?: $schemas.Boolean;
        TargetOriginId: $schemas.String;
        TrustedKeyGroups?: $schemas.TrustedKeyGroups;
        TrustedSigners?: $schemas.TrustedSigners;
        ViewerProtocolPolicy: $schemas.ViewerProtocolPolicy;
      }

      interface DeleteMonitoringSubscriptionResult {}

      interface DescribeFunctionResult {
        FunctionSummary?: $schemas.FunctionSummary;
      }

      /**
       * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
       */
      interface Distribution {
        ARN: $schemas.String;
        ActiveTrustedKeyGroups?: $schemas.ActiveTrustedKeyGroups;
        ActiveTrustedSigners?: $schemas.ActiveTrustedSigners;
        AliasICPRecordals?: $schemas.AliasIcpRecordals;
        DistributionConfig: $schemas.DistributionConfig;
        DomainName: $schemas.String;
        Id: $schemas.String;
        InProgressInvalidationBatches: $schemas.Integer;
        LastModifiedTime: $schemas.Timestamp;
        Status: $schemas.String;
      }

      /**
       * A distribution configuration.
       */
      interface DistributionConfig {
        Aliases?: $schemas.Aliases;
        CacheBehaviors?: $schemas.CacheBehaviors;
        CallerReference: $schemas.String;
        Comment: $schemas.CommentType;
        ContinuousDeploymentPolicyId?: $schemas.String;
        CustomErrorResponses?: $schemas.CustomErrorResponses;
        DefaultCacheBehavior: $schemas.DefaultCacheBehavior;
        DefaultRootObject?: $schemas.String;
        Enabled: $schemas.Boolean;
        HttpVersion?: $schemas.HttpVersion;
        IsIPV6Enabled?: $schemas.Boolean;
        Logging?: $schemas.LoggingConfig;
        OriginGroups?: $schemas.OriginGroups;
        Origins: $schemas.Origins;
        PriceClass?: $schemas.PriceClass;
        Restrictions?: $schemas.Restrictions;
        Staging?: $schemas.Boolean;
        ViewerCertificate?: $schemas.ViewerCertificate;
        WebACLId?: $schemas.String;
      }

      /**
       * A list of distribution IDs.
       */
      interface DistributionIdList {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.DistributionIdListSummary;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type DistributionIdListSummary = any[];

      /**
       * A distribution list.
       */
      interface DistributionList {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.DistributionSummaryList;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type DistributionSummaryList = any[];

      /**
       * Complex data type for field-level encryption profiles that includes all of the encryption entities.
       */
      interface EncryptionEntities {
        Items?: $schemas.EncryptionEntityList;
        Quantity: $schemas.Integer;
      }

      type EncryptionEntityList = any[];

      /**
       * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
       */
      interface EndPoint {
        KinesisStreamConfig?: $schemas.KinesisStreamConfig;
        StreamType: $schemas.String;
      }

      type EndPointList = $schemas.EndPoint[];

      /**
       * A complex data type that includes the profile configurations and other options specified for field-level encryption.
       */
      interface FieldLevelEncryption {
        FieldLevelEncryptionConfig: $schemas.FieldLevelEncryptionConfig;
        Id: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
      }

      /**
       * A complex data type that includes the profile configurations specified for field-level encryption.
       */
      interface FieldLevelEncryptionConfig {
        CallerReference: $schemas.String;
        Comment?: $schemas.String;
        ContentTypeProfileConfig?: $schemas.ContentTypeProfileConfig;
        QueryArgProfileConfig?: $schemas.QueryArgProfileConfig;
      }

      /**
       * List of field-level encrpytion configurations.
       */
      interface FieldLevelEncryptionList {
        Items?: $schemas.FieldLevelEncryptionSummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      /**
       * A complex data type for field-level encryption profiles.
       */
      interface FieldLevelEncryptionProfile {
        FieldLevelEncryptionProfileConfig: $schemas.FieldLevelEncryptionProfileConfig;
        Id: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
      }

      /**
       * A complex data type of profiles for the field-level encryption.
       */
      interface FieldLevelEncryptionProfileConfig {
        CallerReference: $schemas.String;
        Comment?: $schemas.String;
        EncryptionEntities: $schemas.EncryptionEntities;
        Name: $schemas.String;
      }

      /**
       * List of field-level encryption profiles.
       */
      interface FieldLevelEncryptionProfileList {
        Items?: $schemas.FieldLevelEncryptionProfileSummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type FieldLevelEncryptionProfileSummaryList = any[];

      type FieldLevelEncryptionSummaryList = any[];

      type FieldList = any[];

      type Float = number;

      /**
       * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
       */
      interface ForwardedValues {
        Cookies: $schemas.CookiePreference;
        Headers?: $schemas.Headers;
        QueryString: $schemas.Boolean;
        QueryStringCacheKeys?: $schemas.QueryStringCacheKeys;
      }

      type FrameOptionsList = "DENY" | "SAMEORIGIN";

      type FunctionAssociationList = any[];

      /**
       * A list of CloudFront functions that are associated with a cache behavior in a CloudFront distribution. CloudFront functions must be published to the <code>LIVE</code> stage to associate them with a cache behavior.
       */
      interface FunctionAssociations {
        Items?: $schemas.FunctionAssociationList;
        Quantity: $schemas.Integer;
      }

      type FunctionBlob = string;

      /**
       * Contains configuration information about a CloudFront function.
       */
      interface FunctionConfig {
        Comment: $schemas.String;
        Runtime: $schemas.FunctionRuntime;
      }

      type FunctionExecutionLogList = $schemas.String[];

      /**
       * A list of CloudFront functions.
       */
      interface FunctionList {
        Items?: $schemas.FunctionSummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      /**
       * Contains metadata about a CloudFront function.
       */
      interface FunctionMetadata {
        CreatedTime?: $schemas.Timestamp;
        FunctionARN: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
        Stage?: $schemas.FunctionStage;
      }

      type FunctionName = string;

      type FunctionRuntime = "cloudfront-js-1.0";

      type FunctionStage = "DEVELOPMENT" | "LIVE";

      /**
       * Contains configuration information and metadata about a CloudFront function.
       */
      interface FunctionSummary {
        FunctionConfig: $schemas.FunctionConfig;
        FunctionMetadata: $schemas.FunctionMetadata;
        Name: $schemas.FunctionName;
        Status?: $schemas.String;
      }

      type FunctionSummaryList = any[];

      /**
       * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
       */
      interface GeoRestriction {
        Items?: $schemas.LocationList;
        Quantity: $schemas.Integer;
        RestrictionType: $schemas.GeoRestrictionType;
      }

      type GeoRestrictionType = "blacklist" | "none" | "whitelist";

      interface GetCachePolicyConfigResult {
        CachePolicyConfig?: $schemas.CachePolicyConfig;
      }

      interface GetCachePolicyResult {
        CachePolicy?: $schemas.CachePolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetCloudFrontOriginAccessIdentityConfigResult {
        CloudFrontOriginAccessIdentityConfig?: $schemas.CloudFrontOriginAccessIdentityConfig;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetCloudFrontOriginAccessIdentityResult {
        CloudFrontOriginAccessIdentity?: $schemas.CloudFrontOriginAccessIdentity;
      }

      interface GetContinuousDeploymentPolicyConfigResult {
        /**
         * Contains the configuration for a continuous deployment policy.
         */
        ContinuousDeploymentPolicyConfig?: $schemas.ContinuousDeploymentPolicyConfig;
      }

      interface GetContinuousDeploymentPolicyResult {
        ContinuousDeploymentPolicy?: $schemas.ContinuousDeploymentPolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetDistributionConfigResult {
        DistributionConfig?: $schemas.DistributionConfig;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetDistributionResult {
        Distribution?: $schemas.Distribution;
      }

      interface GetFieldLevelEncryptionConfigResult {
        FieldLevelEncryptionConfig?: $schemas.FieldLevelEncryptionConfig;
      }

      interface GetFieldLevelEncryptionProfileConfigResult {
        FieldLevelEncryptionProfileConfig?: $schemas.FieldLevelEncryptionProfileConfig;
      }

      interface GetFieldLevelEncryptionProfileResult {
        FieldLevelEncryptionProfile?: $schemas.FieldLevelEncryptionProfile;
      }

      interface GetFieldLevelEncryptionResult {
        FieldLevelEncryption?: $schemas.FieldLevelEncryption;
      }

      interface GetFunctionResult {
        FunctionCode?: $schemas.FunctionBlob;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetInvalidationResult {
        Invalidation?: $schemas.Invalidation;
      }

      interface GetKeyGroupConfigResult {
        KeyGroupConfig?: $schemas.KeyGroupConfig;
      }

      interface GetKeyGroupResult {
        KeyGroup?: $schemas.KeyGroup;
      }

      interface GetMonitoringSubscriptionResult {
        MonitoringSubscription?: $schemas.MonitoringSubscription;
      }

      interface GetOriginAccessControlConfigResult {
        OriginAccessControlConfig?: $schemas.OriginAccessControlConfig;
      }

      interface GetOriginAccessControlResult {
        OriginAccessControl?: $schemas.OriginAccessControl;
      }

      interface GetOriginRequestPolicyConfigResult {
        OriginRequestPolicyConfig?: $schemas.OriginRequestPolicyConfig;
      }

      interface GetOriginRequestPolicyResult {
        OriginRequestPolicy?: $schemas.OriginRequestPolicy;
      }

      interface GetPublicKeyConfigResult {
        PublicKeyConfig?: $schemas.PublicKeyConfig;
      }

      interface GetPublicKeyResult {
        PublicKey?: $schemas.PublicKey;
      }

      interface GetRealtimeLogConfigResult {
        RealtimeLogConfig?: $schemas.RealtimeLogConfig;
      }

      interface GetResponseHeadersPolicyConfigResult {
        ResponseHeadersPolicyConfig?: $schemas.ResponseHeadersPolicyConfig;
      }

      interface GetResponseHeadersPolicyResult {
        ResponseHeadersPolicy?: $schemas.ResponseHeadersPolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetStreamingDistributionConfigResult {
        StreamingDistributionConfig?: $schemas.StreamingDistributionConfig;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface GetStreamingDistributionResult {
        StreamingDistribution?: $schemas.StreamingDistribution;
      }

      type HeaderList = any[];

      /**
       * Contains a list of HTTP header names.
       */
      interface Headers {
        Items?: $schemas.HeaderList;
        Quantity: $schemas.Integer;
      }

      type HttpVersion = "http1.1" | "http2" | "http2and3" | "http3";

      type Integer = number;

      /**
       * An invalidation.
       */
      interface Invalidation {
        CreateTime: $schemas.Timestamp;
        Id: $schemas.String;
        InvalidationBatch: $schemas.InvalidationBatch;
        Status: $schemas.String;
      }

      /**
       * An invalidation batch.
       */
      interface InvalidationBatch {
        CallerReference: $schemas.String;
        Paths: $schemas.Paths;
      }

      /**
       * The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
       */
      interface InvalidationList {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.InvalidationSummaryList;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type InvalidationSummaryList = any[];

      type ItemSelection = "all" | "none" | "whitelist";

      /**
       * <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
       */
      interface KeyGroup {
        Id: $schemas.String;
        KeyGroupConfig: $schemas.KeyGroupConfig;
        LastModifiedTime: $schemas.Timestamp;
      }

      /**
       * <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
       */
      interface KeyGroupConfig {
        Comment?: $schemas.String;
        Items: $schemas.PublicKeyIdList;
        Name: $schemas.String;
      }

      /**
       * A list of key groups.
       */
      interface KeyGroupList {
        Items?: $schemas.KeyGroupSummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type KeyGroupSummaryList = any[];

      type KgKeyPairIdsList = any[];

      /**
       * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
       */
      interface KinesisStreamConfig {
        RoleARN: $schemas.String;
        StreamARN: $schemas.String;
      }

      type LambdaFunctionAssociationList = any[];

      /**
       * <p>A complex type that specifies a list of Lambda@Edge functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda@Edge functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with only one function.</p> <p>If you don't want to invoke any Lambda@Edge functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>.</p>
       */
      interface LambdaFunctionAssociations {
        Items?: $schemas.LambdaFunctionAssociationList;
        Quantity: $schemas.Integer;
      }

      interface ListCachePoliciesResult {
        CachePolicyList?: $schemas.CachePolicyList;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface ListCloudFrontOriginAccessIdentitiesResult {
        CloudFrontOriginAccessIdentityList?: $schemas.CloudFrontOriginAccessIdentityList;
      }

      interface ListConflictingAliasesResult {
        ConflictingAliasesList?: $schemas.ConflictingAliasesList;
      }

      interface ListContinuousDeploymentPoliciesResult {
        ContinuousDeploymentPolicyList?: $schemas.ContinuousDeploymentPolicyList;
      }

      interface ListDistributionsByCachePolicyIdResult {
        DistributionIdList?: $schemas.DistributionIdList;
      }

      interface ListDistributionsByKeyGroupResult {
        /**
         * A list of distribution IDs.
         */
        DistributionIdList?: $schemas.DistributionIdList;
      }

      interface ListDistributionsByOriginRequestPolicyIdResult {
        DistributionIdList?: $schemas.DistributionIdList;
      }

      interface ListDistributionsByRealtimeLogConfigResult {
        /**
         * A distribution list.
         */
        DistributionList?: $schemas.DistributionList;
      }

      interface ListDistributionsByResponseHeadersPolicyIdResult {
        /**
         * A list of distribution IDs.
         */
        DistributionIdList?: $schemas.DistributionIdList;
      }

      /**
       * The response to a request to list the distributions that are associated with a specified WAF web ACL.
       */
      interface ListDistributionsByWebAclIdResult {
        DistributionList?: $schemas.DistributionList;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface ListDistributionsResult {
        DistributionList?: $schemas.DistributionList;
      }

      interface ListFieldLevelEncryptionConfigsResult {
        FieldLevelEncryptionList?: $schemas.FieldLevelEncryptionList;
      }

      interface ListFieldLevelEncryptionProfilesResult {
        FieldLevelEncryptionProfileList?: $schemas.FieldLevelEncryptionProfileList;
      }

      interface ListFunctionsResult {
        FunctionList?: $schemas.FunctionList;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface ListInvalidationsResult {
        InvalidationList?: $schemas.InvalidationList;
      }

      interface ListKeyGroupsResult {
        KeyGroupList?: $schemas.KeyGroupList;
      }

      interface ListOriginAccessControlsResult {
        OriginAccessControlList?: $schemas.OriginAccessControlList;
      }

      interface ListOriginRequestPoliciesResult {
        OriginRequestPolicyList?: $schemas.OriginRequestPolicyList;
      }

      interface ListPublicKeysResult {
        PublicKeyList?: $schemas.PublicKeyList;
      }

      interface ListRealtimeLogConfigsResult {
        RealtimeLogConfigs?: $schemas.RealtimeLogConfigs;
      }

      interface ListResponseHeadersPoliciesResult {
        ResponseHeadersPolicyList?: $schemas.ResponseHeadersPolicyList;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface ListStreamingDistributionsResult {
        StreamingDistributionList?: $schemas.StreamingDistributionList;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface ListTagsForResourceResult {
        Tags: $schemas.Tags;
      }

      type LocationList = any[];

      /**
       * A complex type that controls whether access logs are written for the distribution.
       */
      interface LoggingConfig {
        Bucket: $schemas.String;
        Enabled: $schemas.Boolean;
        IncludeCookies: $schemas.Boolean;
        Prefix: $schemas.String;
      }

      type Long = number;

      type MethodsList = any[];

      type MinimumProtocolVersion =
        | "SSLv3"
        | "TLSv1"
        | "TLSv1.1_2016"
        | "TLSv1.2_2018"
        | "TLSv1.2_2019"
        | "TLSv1.2_2021"
        | "TLSv1_2016";

      /**
       * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
       */
      interface MonitoringSubscription {
        RealtimeMetricsSubscriptionConfig?: $schemas.RealtimeMetricsSubscriptionConfig;
      }

      /**
       * A CloudFront origin access control, including its unique identifier.
       */
      interface OriginAccessControl {
        Id: $schemas.String;
        OriginAccessControlConfig?: $schemas.OriginAccessControlConfig;
      }

      /**
       * A CloudFront origin access control configuration.
       */
      interface OriginAccessControlConfig {
        Description?: $schemas.String;
        Name: $schemas.String;
        OriginAccessControlOriginType: $schemas.OriginAccessControlOriginTypes;
        SigningBehavior: $schemas.OriginAccessControlSigningBehaviors;
        SigningProtocol: $schemas.OriginAccessControlSigningProtocols;
      }

      /**
       * A list of CloudFront origin access controls.
       */
      interface OriginAccessControlList {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.OriginAccessControlSummaryList;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type OriginAccessControlOriginTypes = "mediastore" | "s3";

      type OriginAccessControlSigningBehaviors =
        | "always"
        | "never"
        | "no-override";

      type OriginAccessControlSigningProtocols = "sigv4";

      type OriginAccessControlSummaryList = any[];

      /**
       * List of origin groups for a distribution.
       */
      type OriginGroupList = any[];

      /**
       * A complex data type for the origin groups specified for a distribution.
       */
      interface OriginGroups {
        Items?: $schemas.OriginGroupList;
        Quantity: $schemas.Integer;
      }

      type OriginList = any[];

      /**
       * <p>An origin request policy.</p> <p>When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
       */
      interface OriginRequestPolicy {
        Id: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
        OriginRequestPolicyConfig: $schemas.OriginRequestPolicyConfig;
      }

      /**
       * <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
       */
      interface OriginRequestPolicyConfig {
        Comment?: $schemas.String;
        CookiesConfig: $schemas.OriginRequestPolicyCookiesConfig;
        HeadersConfig: $schemas.OriginRequestPolicyHeadersConfig;
        Name: $schemas.String;
        QueryStringsConfig: $schemas.OriginRequestPolicyQueryStringsConfig;
      }

      type OriginRequestPolicyCookieBehavior =
        | "all"
        | "allExcept"
        | "none"
        | "whitelist";

      /**
       * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
       */
      interface OriginRequestPolicyCookiesConfig {
        CookieBehavior: $schemas.OriginRequestPolicyCookieBehavior;
        /**
         * Contains a list of cookie names.
         */
        Cookies?: $schemas.CookieNames;
      }

      type OriginRequestPolicyHeaderBehavior =
        | "allExcept"
        | "allViewer"
        | "allViewerAndWhitelistCloudFront"
        | "none"
        | "whitelist";

      /**
       * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
       */
      interface OriginRequestPolicyHeadersConfig {
        HeaderBehavior: $schemas.OriginRequestPolicyHeaderBehavior;
        /**
         * Contains a list of HTTP header names.
         */
        Headers?: $schemas.Headers;
      }

      /**
       * A list of origin request policies.
       */
      interface OriginRequestPolicyList {
        Items?: $schemas.OriginRequestPolicySummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type OriginRequestPolicyQueryStringBehavior =
        | "all"
        | "allExcept"
        | "none"
        | "whitelist";

      /**
       * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
       */
      interface OriginRequestPolicyQueryStringsConfig {
        QueryStringBehavior: $schemas.OriginRequestPolicyQueryStringBehavior;
        QueryStrings?: $schemas.QueryStringNames;
      }

      type OriginRequestPolicySummaryList = any[];

      /**
       * Contains information about the origins for this distribution.
       */
      interface Origins {
        Items: $schemas.OriginList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
       */
      interface ParametersInCacheKeyAndForwardedToOrigin {
        CookiesConfig: $schemas.CachePolicyCookiesConfig;
        EnableAcceptEncodingBrotli?: $schemas.Boolean;
        EnableAcceptEncodingGzip: $schemas.Boolean;
        HeadersConfig: $schemas.CachePolicyHeadersConfig;
        QueryStringsConfig: $schemas.CachePolicyQueryStringsConfig;
      }

      type PathList = any[];

      /**
       * A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>.
       */
      interface Paths {
        Items?: $schemas.PathList;
        Quantity: $schemas.Integer;
      }

      type PriceClass = "PriceClass_100" | "PriceClass_200" | "PriceClass_All";

      /**
       * A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
       */
      interface PublicKey {
        CreatedTime: $schemas.Timestamp;
        Id: $schemas.String;
        PublicKeyConfig: $schemas.PublicKeyConfig;
      }

      /**
       * Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
       */
      interface PublicKeyConfig {
        CallerReference: $schemas.String;
        Comment?: $schemas.String;
        EncodedKey: $schemas.String;
        Name: $schemas.String;
      }

      type PublicKeyIdList = any[];

      /**
       * A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
       */
      interface PublicKeyList {
        Items?: $schemas.PublicKeySummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type PublicKeySummaryList = any[];

      interface PublishFunctionResult {
        FunctionSummary?: $schemas.FunctionSummary;
      }

      /**
       * Configuration for query argument-profile mapping for field-level encryption.
       */
      interface QueryArgProfileConfig {
        ForwardWhenQueryArgProfileIsUnknown: $schemas.Boolean;
        QueryArgProfiles?: $schemas.QueryArgProfiles;
      }

      type QueryArgProfileList = any[];

      /**
       * Query argument-profile mapping for field-level encryption.
       */
      interface QueryArgProfiles {
        Items?: $schemas.QueryArgProfileList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior.</p>
       */
      interface QueryStringCacheKeys {
        Items?: $schemas.QueryStringCacheKeysList;
        Quantity: $schemas.Integer;
      }

      type QueryStringCacheKeysList = any[];

      /**
       * Contains a list of query string names.
       */
      interface QueryStringNames {
        Items?: $schemas.QueryStringNamesList;
        Quantity: $schemas.Integer;
      }

      type QueryStringNamesList = any[];

      /**
       * A real-time log configuration.
       */
      interface RealtimeLogConfig {
        ARN: $schemas.String;
        EndPoints: $schemas.EndPointList;
        Fields: $schemas.FieldList;
        Name: $schemas.String;
        SamplingRate: $schemas.Long;
      }

      type RealtimeLogConfigList = $schemas.RealtimeLogConfig[];

      /**
       * A list of real-time log configurations.
       */
      interface RealtimeLogConfigs {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.RealtimeLogConfigList;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
      }

      /**
       * A subscription configuration for additional CloudWatch metrics.
       */
      interface RealtimeMetricsSubscriptionConfig {
        RealtimeMetricsSubscriptionStatus: $schemas.RealtimeMetricsSubscriptionStatus;
      }

      type RealtimeMetricsSubscriptionStatus = "Disabled" | "Enabled";

      type ReferrerPolicyList =
        | "no-referrer"
        | "no-referrer-when-downgrade"
        | "origin"
        | "origin-when-cross-origin"
        | "same-origin"
        | "strict-origin"
        | "strict-origin-when-cross-origin"
        | "unsafe-url";

      /**
       * <p>A response headers policy.</p> <p>A response headers policy contains information about a set of HTTP response headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
       */
      interface ResponseHeadersPolicy {
        Id: $schemas.String;
        LastModifiedTime: $schemas.Timestamp;
        ResponseHeadersPolicyConfig: $schemas.ResponseHeadersPolicyConfig;
      }

      /**
       * <p>A list of HTTP header names that CloudFront includes as values for the <code>Access-Control-Allow-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers">Access-Control-Allow-Headers</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyAccessControlAllowHeaders {
        Items: $schemas.AccessControlAllowHeadersList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>A list of HTTP methods that CloudFront includes as values for the <code>Access-Control-Allow-Methods</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Methods</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods">Access-Control-Allow-Methods</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyAccessControlAllowMethods {
        Items: $schemas.AccessControlAllowMethodsList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>A list of origins (domain names) that CloudFront can use as the value for the <code>Access-Control-Allow-Origin</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Allow-Origin</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin">Access-Control-Allow-Origin</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyAccessControlAllowOrigins {
        Items: $schemas.AccessControlAllowOriginsList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>A list of HTTP headers that CloudFront includes as values for the <code>Access-Control-Expose-Headers</code> HTTP response header.</p> <p>For more information about the <code>Access-Control-Expose-Headers</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers">Access-Control-Expose-Headers</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyAccessControlExposeHeaders {
        Items?: $schemas.AccessControlExposeHeadersList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
       */
      interface ResponseHeadersPolicyConfig {
        Comment?: $schemas.String;
        CorsConfig?: $schemas.ResponseHeadersPolicyCorsConfig;
        CustomHeadersConfig?: $schemas.ResponseHeadersPolicyCustomHeadersConfig;
        Name: $schemas.String;
        RemoveHeadersConfig?: $schemas.ResponseHeadersPolicyRemoveHeadersConfig;
        SecurityHeadersConfig?: $schemas.ResponseHeadersPolicySecurityHeadersConfig;
        ServerTimingHeadersConfig?: $schemas.ResponseHeadersPolicyServerTimingHeadersConfig;
      }

      /**
       * <p>The policy directives and their values that CloudFront includes as values for the <code>Content-Security-Policy</code> HTTP response header.</p> <p>For more information about the <code>Content-Security-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy">Content-Security-Policy</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyContentSecurityPolicy {
        ContentSecurityPolicy: $schemas.String;
        Override: $schemas.Boolean;
      }

      /**
       * <p>Determines whether CloudFront includes the <code>X-Content-Type-Options</code> HTTP response header with its value set to <code>nosniff</code>.</p> <p>For more information about the <code>X-Content-Type-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options">X-Content-Type-Options</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyContentTypeOptions {
        Override: $schemas.Boolean;
      }

      /**
       * <p>A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS). CloudFront adds these headers to HTTP responses that it sends for CORS requests that match a cache behavior associated with this response headers policy.</p> <p>For more information about CORS, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS)</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyCorsConfig {
        AccessControlAllowCredentials: $schemas.Boolean;
        AccessControlAllowHeaders: $schemas.ResponseHeadersPolicyAccessControlAllowHeaders;
        AccessControlAllowMethods: $schemas.ResponseHeadersPolicyAccessControlAllowMethods;
        AccessControlAllowOrigins: $schemas.ResponseHeadersPolicyAccessControlAllowOrigins;
        AccessControlExposeHeaders?: $schemas.ResponseHeadersPolicyAccessControlExposeHeaders;
        AccessControlMaxAgeSec?: $schemas.Integer;
        OriginOverride: $schemas.Boolean;
      }

      type ResponseHeadersPolicyCustomHeaderList = any[];

      /**
       * A list of HTTP response header names and their values. CloudFront includes these headers in HTTP responses that it sends for requests that match a cache behavior that's associated with this response headers policy.
       */
      interface ResponseHeadersPolicyCustomHeadersConfig {
        Items?: $schemas.ResponseHeadersPolicyCustomHeaderList;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>Determines whether CloudFront includes the <code>X-Frame-Options</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-Frame-Options</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options">X-Frame-Options</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyFrameOptions {
        FrameOption: $schemas.FrameOptionsList;
        Override: $schemas.Boolean;
      }

      /**
       * A list of response headers policies.
       */
      interface ResponseHeadersPolicyList {
        Items?: $schemas.ResponseHeadersPolicySummaryList;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      /**
       * <p>Determines whether CloudFront includes the <code>Referrer-Policy</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Referrer-Policy</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy">Referrer-Policy</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyReferrerPolicy {
        Override: $schemas.Boolean;
        ReferrerPolicy: $schemas.ReferrerPolicyList;
      }

      type ResponseHeadersPolicyRemoveHeaderList = any[];

      /**
       * A list of HTTP header names that CloudFront removes from HTTP responses to requests that match the cache behavior that this response headers policy is attached to.
       */
      interface ResponseHeadersPolicyRemoveHeadersConfig {
        Items?: $schemas.ResponseHeadersPolicyRemoveHeaderList;
        Quantity: $schemas.Integer;
      }

      /**
       * A configuration for a set of security-related HTTP response headers. CloudFront adds these headers to HTTP responses that it sends for requests that match a cache behavior associated with this response headers policy.
       */
      interface ResponseHeadersPolicySecurityHeadersConfig {
        ContentSecurityPolicy?: $schemas.ResponseHeadersPolicyContentSecurityPolicy;
        ContentTypeOptions?: $schemas.ResponseHeadersPolicyContentTypeOptions;
        FrameOptions?: $schemas.ResponseHeadersPolicyFrameOptions;
        ReferrerPolicy?: $schemas.ResponseHeadersPolicyReferrerPolicy;
        StrictTransportSecurity?: $schemas.ResponseHeadersPolicyStrictTransportSecurity;
        XSSProtection?: $schemas.ResponseHeadersPolicyXssProtection;
      }

      /**
       * <p>A configuration for enabling the <code>Server-Timing</code> header in HTTP responses sent from CloudFront. CloudFront adds this header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.</p> <p>You can use the <code>Server-Timing</code> header to view metrics that can help you gain insights about the behavior and performance of CloudFront. For example, you can see which cache layer served a cache hit, or the first byte latency from the origin when there was a cache miss. You can use the metrics in the <code>Server-Timing</code> header to troubleshoot issues or test the efficiency of your CloudFront configuration. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#server-timing-header">Server-Timing header</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
       */
      interface ResponseHeadersPolicyServerTimingHeadersConfig {
        Enabled: $schemas.Boolean;
        SamplingRate?: $schemas.SamplingRate;
      }

      /**
       * <p>Determines whether CloudFront includes the <code>Strict-Transport-Security</code> HTTP response header and the header's value.</p> <p>For more information about the <code>Strict-Transport-Security</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyStrictTransportSecurity {
        AccessControlMaxAgeSec: $schemas.Integer;
        IncludeSubdomains?: $schemas.Boolean;
        Override: $schemas.Boolean;
        Preload?: $schemas.Boolean;
      }

      type ResponseHeadersPolicySummaryList = any[];

      /**
       * <p>Determines whether CloudFront includes the <code>X-XSS-Protection</code> HTTP response header and the header's value.</p> <p>For more information about the <code>X-XSS-Protection</code> HTTP response header, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection">X-XSS-Protection</a> in the MDN Web Docs.</p>
       */
      interface ResponseHeadersPolicyXssProtection {
        ModeBlock?: $schemas.Boolean;
        Override: $schemas.Boolean;
        Protection: $schemas.Boolean;
        ReportUri?: $schemas.String;
      }

      /**
       * A complex type that identifies ways in which you want to restrict distribution of your content.
       */
      interface Restrictions {
        GeoRestriction: $schemas.GeoRestriction;
      }

      /**
       * A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
       */
      interface S3Origin {
        DomainName: $schemas.String;
        OriginAccessIdentity: $schemas.String;
      }

      type SamplingRate = number;

      type SensitiveStringType = string;

      /**
       * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
       */
      interface SessionStickinessConfig {
        IdleTTL: $schemas.Integer;
        MaximumTTL: $schemas.Integer;
      }

      type SignerList = any[];

      type SslSupportMethod = "sni-only" | "static-ip" | "vip";

      type StagingDistributionDnsNameList = any[];

      /**
       * The CloudFront domain name of the staging distribution.
       */
      interface StagingDistributionDnsNames {
        Items?: $schemas.StagingDistributionDnsNameList;
        Quantity: $schemas.Integer;
      }

      /**
       * A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
       */
      interface StreamingDistribution {
        ARN: $schemas.String;
        ActiveTrustedSigners: $schemas.ActiveTrustedSigners;
        DomainName: $schemas.String;
        Id: $schemas.String;
        LastModifiedTime?: $schemas.Timestamp;
        Status: $schemas.String;
        StreamingDistributionConfig: $schemas.StreamingDistributionConfig;
      }

      /**
       * The RTMP distribution's configuration information.
       */
      interface StreamingDistributionConfig {
        Aliases?: $schemas.Aliases;
        CallerReference: $schemas.String;
        Comment: $schemas.String;
        Enabled: $schemas.Boolean;
        Logging?: $schemas.StreamingLoggingConfig;
        PriceClass?: $schemas.PriceClass;
        S3Origin: $schemas.S3Origin;
        TrustedSigners: $schemas.TrustedSigners;
      }

      /**
       * A streaming distribution list.
       */
      interface StreamingDistributionList {
        IsTruncated: $schemas.Boolean;
        Items?: $schemas.StreamingDistributionSummaryList;
        Marker: $schemas.String;
        MaxItems: $schemas.Integer;
        NextMarker?: $schemas.String;
        Quantity: $schemas.Integer;
      }

      type StreamingDistributionSummaryList = any[];

      /**
       * A complex type that controls whether access logs are written for this streaming distribution.
       */
      interface StreamingLoggingConfig {
        Bucket: $schemas.String;
        Enabled: $schemas.Boolean;
        Prefix: $schemas.String;
      }

      type String = string;

      type TagKeyList = any[];

      type TagList = any[];

      /**
       * A complex type that contains zero or more <code>Tag</code> elements.
       */
      interface Tags {
        Items?: $schemas.TagList;
      }

      interface TestFunctionResult {
        TestResult?: $schemas.TestResult;
      }

      /**
       * Contains the result of testing a CloudFront function with <code>TestFunction</code>.
       */
      interface TestResult {
        ComputeUtilization?: $schemas.String;
        FunctionErrorMessage?: $schemas.SensitiveStringType;
        FunctionExecutionLogs?: $schemas.FunctionExecutionLogList;
        FunctionOutput?: $schemas.SensitiveStringType;
        FunctionSummary?: $schemas.FunctionSummary;
      }

      type Timestamp = string;

      /**
       * The traffic configuration of your continuous deployment.
       */
      interface TrafficConfig {
        SingleHeaderConfig?: $schemas.ContinuousDeploymentSingleHeaderConfig;
        SingleWeightConfig?: $schemas.ContinuousDeploymentSingleWeightConfig;
        Type: $schemas.ContinuousDeploymentPolicyType;
      }

      type TrustedKeyGroupIdList = any[];

      /**
       * A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
       */
      interface TrustedKeyGroups {
        Enabled: $schemas.Boolean;
        Items?: $schemas.TrustedKeyGroupIdList;
        Quantity: $schemas.Integer;
      }

      /**
       * A list of Amazon Web Services accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
       */
      interface TrustedSigners {
        Enabled: $schemas.Boolean;
        Items?: $schemas.AwsAccountNumberList;
        Quantity: $schemas.Integer;
      }

      interface UpdateCachePolicyResult {
        CachePolicy?: $schemas.CachePolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface UpdateCloudFrontOriginAccessIdentityResult {
        CloudFrontOriginAccessIdentity?: $schemas.CloudFrontOriginAccessIdentity;
      }

      interface UpdateContinuousDeploymentPolicyResult {
        ContinuousDeploymentPolicy?: $schemas.ContinuousDeploymentPolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface UpdateDistributionResult {
        Distribution?: $schemas.Distribution;
      }

      interface UpdateDistributionWithStagingConfigResult {
        /**
         * A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
         */
        Distribution?: $schemas.Distribution;
      }

      interface UpdateFieldLevelEncryptionConfigResult {
        FieldLevelEncryption?: $schemas.FieldLevelEncryption;
      }

      interface UpdateFieldLevelEncryptionProfileResult {
        FieldLevelEncryptionProfile?: $schemas.FieldLevelEncryptionProfile;
      }

      interface UpdateFunctionResult {
        FunctionSummary?: $schemas.FunctionSummary;
      }

      interface UpdateKeyGroupResult {
        KeyGroup?: $schemas.KeyGroup;
      }

      interface UpdateOriginAccessControlResult {
        OriginAccessControl?: $schemas.OriginAccessControl;
      }

      interface UpdateOriginRequestPolicyResult {
        OriginRequestPolicy?: $schemas.OriginRequestPolicy;
      }

      interface UpdatePublicKeyResult {
        PublicKey?: $schemas.PublicKey;
      }

      interface UpdateRealtimeLogConfigResult {
        RealtimeLogConfig?: $schemas.RealtimeLogConfig;
      }

      interface UpdateResponseHeadersPolicyResult {
        ResponseHeadersPolicy?: $schemas.ResponseHeadersPolicy;
      }

      /**
       * The returned result of the corresponding request.
       */
      interface UpdateStreamingDistributionResult {
        StreamingDistribution?: $schemas.StreamingDistribution;
      }

      /**
       * <p>A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn't use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don't support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don't support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront.</p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Identity and Access Management (IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
       */
      interface ViewerCertificate {
        ACMCertificateArn?: $schemas.String;
        Certificate?: $schemas.String;
        CertificateSource?: $schemas.CertificateSource;
        CloudFrontDefaultCertificate?: $schemas.Boolean;
        IAMCertificateId?: $schemas.String;
        MinimumProtocolVersion?: $schemas.MinimumProtocolVersion;
        SSLSupportMethod?: $schemas.SslSupportMethod;
      }

      type ViewerProtocolPolicy =
        | "allow-all"
        | "https-only"
        | "redirect-to-https";
    }
  }
}
