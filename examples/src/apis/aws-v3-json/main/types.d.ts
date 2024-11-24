declare namespace API {
  namespace AwsV3Json {
    namespace Main {
      namespace GetCachePolicyConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetCachePolicyConfigResult;
      }

      namespace DeleteCachePolicy2020_05_31 {
        interface Headers {
          /**
           * The version of the cache policy that you are deleting. The version is the cache policy's <code>ETag</code> value, which you can get using <code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or <code>GetCachePolicyConfig</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the cache policy that you are deleting. To get the identifier, you can use <code>ListCachePolicies</code>.
           */
          Id: string;
        }
      }

      namespace GetCachePolicy2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetCachePolicyResult;
      }

      namespace PutUpdateCachePolicy2020_05_31 {
        interface Body {
          /**
           * <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
           */
          CachePolicyConfig: {
            Comment?: $schemas.String;
            DefaultTTL?: $schemas.Long;
            MaxTTL?: $schemas.Long;
            MinTTL?: $schemas.Long;
            Name?: $schemas.String;
            ParametersInCacheKeyAndForwardedToOrigin?: $schemas.ParametersInCacheKeyAndForwardedToOrigin;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The version of the cache policy that you are updating. The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetCachePolicyConfig</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's <code>CachePolicyId</code> field in the response to <code>GetDistributionConfig</code>.
           */
          Id: string;
        }

        type Response = $schemas.UpdateCachePolicyResult;
      }

      namespace GetListCachePolicies2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of cache policies that you want in the response.
           */
          MaxItems?: string;
          /**
           * <p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
           */
          Type?: "custom" | "managed";
        }

        type Response = $schemas.ListCachePoliciesResult;
      }

      namespace PostCreateCachePolicy2020_05_31 {
        interface Body {
          /**
           * <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find a valid object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
           */
          CachePolicyConfig: {
            Comment?: $schemas.String;
            DefaultTTL?: $schemas.Long;
            MaxTTL?: $schemas.Long;
            MinTTL?: $schemas.Long;
            Name?: $schemas.String;
            ParametersInCacheKeyAndForwardedToOrigin?: $schemas.ParametersInCacheKeyAndForwardedToOrigin;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateCachePolicyResult;
      }

      namespace GetListConflictingAliases2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The alias (also called a CNAME) to search for conflicting aliases.
           * @maxLength 253
           */
          Alias: string;
          /**
           * The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.
           * @maxLength 25
           */
          DistributionId: string;
          /**
           * Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of conflicting aliases that you want in the response.
           * @maximum 100
           */
          MaxItems?: number;
        }

        type Response = $schemas.ListConflictingAliasesResult;
      }

      namespace GetContinuousDeploymentPolicyConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the continuous deployment policy whose configuration you are getting.
           */
          Id: string;
        }

        type Response = $schemas.GetContinuousDeploymentPolicyConfigResult;
      }

      namespace DeleteContinuousDeploymentPolicy2020_05_31 {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the continuous deployment policy that you are deleting.
           */
          Id: string;
        }
      }

      namespace GetContinuousDeploymentPolicy2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the continuous deployment policy that you are getting.
           */
          Id: string;
        }

        type Response = $schemas.GetContinuousDeploymentPolicyResult;
      }

      namespace PutUpdateContinuousDeploymentPolicy2020_05_31 {
        interface Body {
          /**
           * Contains the configuration for a continuous deployment policy.
           */
          ContinuousDeploymentPolicyConfig: {
            Enabled?: $schemas.Boolean;
            StagingDistributionDnsNames?: $schemas.StagingDistributionDnsNames;
            TrafficConfig?: $schemas.TrafficConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the continuous deployment policy that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateContinuousDeploymentPolicyResult;
      }

      namespace GetListContinuousDeploymentPolicies2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of continuous deployment policies that you want returned in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListContinuousDeploymentPoliciesResult;
      }

      namespace PostCreateContinuousDeploymentPolicy2020_05_31 {
        interface Body {
          /**
           * Contains the configuration for a continuous deployment policy.
           */
          ContinuousDeploymentPolicyConfig: {
            Enabled?: $schemas.Boolean;
            StagingDistributionDnsNames?: $schemas.StagingDistributionDnsNames;
            TrafficConfig?: $schemas.TrafficConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateContinuousDeploymentPolicyResult;
      }

      namespace PostDeleteRealtimeLogConfig2020_05_31 {
        interface Body {
          /**
           * The Amazon Resource Name (ARN) of the real-time log configuration to delete.
           */
          ARN?: string;
          /**
           * The name of the real-time log configuration to delete.
           */
          Name?: string;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }
      }

      namespace PostCreateDistributionWithTags2020_05_31 {
        interface Body {
          /**
           * A distribution Configuration and a list of tags to be associated with the distribution.
           */
          DistributionConfigWithTags: {
            DistributionConfig?: $schemas.DistributionConfig;
            Tags?: $schemas.Tags;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          WithTags: true;
        }

        type Response = $schemas.CreateDistributionWithTagsResult;
      }

      namespace GetInvalidation2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution's ID.
           */
          DistributionId: string;
          /**
           * The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetInvalidationResult;
      }

      namespace GetListInvalidations2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution's ID.
           */
          DistributionId: string;
        }

        interface QueryParams {
          /**
           * Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.
           */
          Marker?: string;
          /**
           * The maximum number of invalidation batches that you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListInvalidationsResult;
      }

      namespace PostCreateInvalidation2020_05_31 {
        interface Body {
          /**
           * An invalidation batch.
           */
          InvalidationBatch: {
            CallerReference?: $schemas.String;
            Paths?: $schemas.Paths;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution's id.
           */
          DistributionId: string;
        }

        type Response = $schemas.CreateInvalidationResult;
      }

      namespace GetDistributionConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
           */
          Id: string;
        }

        type Response = $schemas.GetDistributionConfigResult;
      }

      namespace PutUpdateDistribution2020_05_31 {
        interface Body {
          /**
           * A distribution configuration.
           */
          DistributionConfig: {
            Aliases?: $schemas.Aliases;
            CacheBehaviors?: $schemas.CacheBehaviors;
            CallerReference?: $schemas.String;
            Comment?: $schemas.CommentType;
            ContinuousDeploymentPolicyId?: $schemas.String;
            CustomErrorResponses?: $schemas.CustomErrorResponses;
            DefaultCacheBehavior?: $schemas.DefaultCacheBehavior;
            DefaultRootObject?: $schemas.String;
            Enabled?: $schemas.Boolean;
            HttpVersion?: $schemas.HttpVersion;
            IsIPV6Enabled?: $schemas.Boolean;
            Logging?: $schemas.LoggingConfig;
            OriginGroups?: $schemas.OriginGroups;
            Origins?: $schemas.Origins;
            PriceClass?: $schemas.PriceClass;
            Restrictions?: $schemas.Restrictions;
            Staging?: $schemas.Boolean;
            ViewerCertificate?: $schemas.ViewerCertificate;
            WebACLId?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution's id.
           */
          Id: string;
        }

        type Response = $schemas.UpdateDistributionResult;
      }

      namespace PutUpdateDistributionWithStagingConfig2020_05_31 {
        interface Headers {
          /**
           * <p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the primary distribution to which you are copying a staging distribution's configuration.
           */
          Id: string;
        }

        interface QueryParams {
          /**
           * The identifier of the staging distribution whose configuration you are copying to the primary distribution.
           */
          StagingDistributionId?: string;
        }

        type Response = $schemas.UpdateDistributionWithStagingConfigResult;
      }

      namespace DeleteDistribution2020_05_31 {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when you disabled the distribution. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution ID.
           */
          Id: string;
        }
      }

      namespace GetDistribution2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution's ID. If the ID is empty, an empty distribution configuration is returned.
           */
          Id: string;
        }

        type Response = $schemas.GetDistributionResult;
      }

      namespace PostCopyDistribution2020_05_31 {
        interface Body {
          /**
           * A value that uniquely identifies a request to create a resource. This helps to prevent CloudFront from creating a duplicate resource if you accidentally resubmit an identical request.
           */
          CallerReference: string;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The version identifier of the primary distribution whose configuration you are copying. This is the <code>ETag</code> value returned in the response to <code>GetDistribution</code> and <code>GetDistributionConfig</code>.
           */
          "If-Match"?: string;
          /**
           * The type of distribution that your primary distribution will be copied to. The only valid value is <code>True</code>, indicating that you are copying to a staging distribution.
           */
          Staging?: boolean;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use <code>ListDistributions</code>.
           */
          PrimaryDistributionId: string;
        }

        type Response = $schemas.CopyDistributionResult;
      }

      namespace PutAssociateAlias2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the distribution that you're associating the alias with.
           */
          TargetDistributionId: string;
        }

        interface QueryParams {
          /**
           * The alias (also known as a CNAME) to add to the target distribution.
           */
          Alias: string;
        }
      }

      namespace GetListDistributions2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).
           */
          Marker?: string;
          /**
           * The maximum number of distributions you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsResult;
      }

      namespace PostCreateDistribution2020_05_31 {
        interface Body {
          /**
           * A distribution configuration.
           */
          DistributionConfig: {
            Aliases?: $schemas.Aliases;
            CacheBehaviors?: $schemas.CacheBehaviors;
            CallerReference?: $schemas.String;
            Comment?: $schemas.CommentType;
            ContinuousDeploymentPolicyId?: $schemas.String;
            CustomErrorResponses?: $schemas.CustomErrorResponses;
            DefaultCacheBehavior?: $schemas.DefaultCacheBehavior;
            DefaultRootObject?: $schemas.String;
            Enabled?: $schemas.Boolean;
            HttpVersion?: $schemas.HttpVersion;
            IsIPV6Enabled?: $schemas.Boolean;
            Logging?: $schemas.LoggingConfig;
            OriginGroups?: $schemas.OriginGroups;
            Origins?: $schemas.Origins;
            PriceClass?: $schemas.PriceClass;
            Restrictions?: $schemas.Restrictions;
            Staging?: $schemas.Boolean;
            ViewerCertificate?: $schemas.ViewerCertificate;
            WebACLId?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateDistributionResult;
      }

      namespace DeleteMonitoringSubscription2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the distribution that you are disabling metrics for.
           */
          DistributionId: string;
        }

        type Response = $schemas.DeleteMonitoringSubscriptionResult;
      }

      namespace GetMonitoringSubscription2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the distribution that you are getting metrics information for.
           */
          DistributionId: string;
        }

        type Response = $schemas.GetMonitoringSubscriptionResult;
      }

      namespace PostCreateMonitoringSubscription2020_05_31 {
        interface Body {
          /**
           * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
           */
          MonitoringSubscription: {
            RealtimeMetricsSubscriptionConfig?: $schemas.RealtimeMetricsSubscriptionConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the distribution that you are enabling metrics for.
           */
          DistributionId: string;
        }

        type Response = $schemas.CreateMonitoringSubscriptionResult;
      }

      namespace GetListDistributionsByCachePolicyId2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the cache policy whose associated distribution IDs you want to list.
           */
          CachePolicyId: string;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distribution IDs that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsByCachePolicyIdResult;
      }

      namespace GetListDistributionsByKeyGroup2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the key group whose associated distribution IDs you are listing.
           */
          KeyGroupId: string;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distribution IDs that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsByKeyGroupResult;
      }

      namespace GetListDistributionsByOriginRequestPolicyId2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the origin request policy whose associated distribution IDs you want to list.
           */
          OriginRequestPolicyId: string;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distribution IDs that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsByOriginRequestPolicyIdResult;
      }

      namespace PostListDistributionsByRealtimeLogConfig2020_05_31 {
        interface Body {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distributions that you want in the response.
           */
          MaxItems?: string;
          /**
           * The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.
           */
          RealtimeLogConfigArn?: string;
          /**
           * The name of the real-time log configuration whose associated distributions you want to list.
           */
          RealtimeLogConfigName?: string;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.ListDistributionsByRealtimeLogConfigResult;
      }

      namespace GetListDistributionsByResponseHeadersPolicyId2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the response headers policy whose associated distribution IDs you want to list.
           */
          ResponseHeadersPolicyId: string;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distribution IDs that you want to get in the response.
           */
          MaxItems?: string;
        }

        type Response =
          $schemas.ListDistributionsByResponseHeadersPolicyIdResult;
      }

      namespace GetListDistributionsByWebAclId2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL.
           */
          WebACLId: string;
        }

        interface QueryParams {
          /**
           * Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)
           */
          Marker?: string;
          /**
           * The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsByWebAclIdResult;
      }

      namespace GetFieldLevelEncryptionProfileConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Get the ID for the field-level encryption profile configuration information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionProfileConfigResult;
      }

      namespace PutUpdateFieldLevelEncryptionProfile2020_05_31 {
        interface Body {
          /**
           * A complex data type of profiles for the field-level encryption.
           */
          FieldLevelEncryptionProfileConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            EncryptionEntities?: $schemas.EncryptionEntities;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the field-level encryption profile request.
           */
          Id: string;
        }

        type Response = $schemas.UpdateFieldLevelEncryptionProfileResult;
      }

      namespace DeleteFieldLevelEncryptionProfile2020_05_31 {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Request the ID of the profile you want to delete from CloudFront.
           */
          Id: string;
        }
      }

      namespace GetFieldLevelEncryptionProfile2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Get the ID for the field-level encryption profile information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionProfileResult;
      }

      namespace GetListFieldLevelEncryptionProfiles2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).
           */
          Marker?: string;
          /**
           * The maximum number of field-level encryption profiles you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListFieldLevelEncryptionProfilesResult;
      }

      namespace PostCreateFieldLevelEncryptionProfile2020_05_31 {
        interface Body {
          /**
           * A complex data type of profiles for the field-level encryption.
           */
          FieldLevelEncryptionProfileConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            EncryptionEntities?: $schemas.EncryptionEntities;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateFieldLevelEncryptionProfileResult;
      }

      namespace GetFieldLevelEncryptionConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Request the ID for the field-level encryption configuration information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionConfigResult;
      }

      namespace PutUpdateFieldLevelEncryptionConfig2020_05_31 {
        interface Body {
          /**
           * A complex data type that includes the profile configurations specified for field-level encryption.
           */
          FieldLevelEncryptionConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            ContentTypeProfileConfig?: $schemas.ContentTypeProfileConfig;
            QueryArgProfileConfig?: $schemas.QueryArgProfileConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the configuration you want to update.
           */
          Id: string;
        }

        type Response = $schemas.UpdateFieldLevelEncryptionConfigResult;
      }

      namespace DeleteFieldLevelEncryptionConfig2020_05_31 {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the configuration you want to delete from CloudFront.
           */
          Id: string;
        }
      }

      namespace GetFieldLevelEncryption2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Request the ID for the field-level encryption configuration information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionResult;
      }

      namespace GetListFieldLevelEncryptionConfigs2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).
           */
          Marker?: string;
          /**
           * The maximum number of field-level encryption configurations you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListFieldLevelEncryptionConfigsResult;
      }

      namespace PostCreateFieldLevelEncryptionConfig2020_05_31 {
        interface Body {
          /**
           * A complex data type that includes the profile configurations specified for field-level encryption.
           */
          FieldLevelEncryptionConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            ContentTypeProfileConfig?: $schemas.ContentTypeProfileConfig;
            QueryArgProfileConfig?: $schemas.QueryArgProfileConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateFieldLevelEncryptionConfigResult;
      }

      namespace DeleteFunction2020_05_31 {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the function that you are deleting, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are deleting.
           */
          Name: string;
        }
      }

      namespace PutUpdateFunction2020_05_31 {
        interface Body {
          /**
           * The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
           * @format password
           * @maxLength 40960
           * @minLength 1
           */
          FunctionCode: string;
          /**
           * Contains configuration information about a CloudFront function.
           */
          FunctionConfig: {
            Comment?: $schemas.String;
            Runtime?: $schemas.FunctionRuntime;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are updating.
           */
          Name: string;
        }

        type Response = $schemas.UpdateFunctionResult;
      }

      namespace GetDescribeFunction2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are getting information about.
           */
          Name: string;
        }

        interface QueryParams {
          /**
           * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        type Response = $schemas.DescribeFunctionResult;
      }

      namespace PostPublishFunction2020_05_31 {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are publishing.
           */
          Name: string;
        }

        type Response = $schemas.PublishFunctionResult;
      }

      namespace PostTestFunction2020_05_31 {
        interface Body {
          /**
           * The event object to test the function with. For more information about the structure of the event object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
           * @format password
           * @maxLength 40960
           */
          EventObject: string;
          /**
           * The stage of the function that you are testing, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function that you are testing.
           */
          Name: string;
        }

        type Response = $schemas.TestFunctionResult;
      }

      namespace GetFunction2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the function whose code you are getting.
           */
          Name: string;
        }

        interface QueryParams {
          /**
           * The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        type Response = $schemas.GetFunctionResult;
      }

      namespace GetListFunctions2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of functions that you want in the response.
           */
          MaxItems?: string;
          /**
           * An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.
           */
          Stage?: "DEVELOPMENT" | "LIVE";
        }

        type Response = $schemas.ListFunctionsResult;
      }

      namespace PostCreateFunction2020_05_31 {
        interface Body {
          /**
           * The function code. For more information about writing a CloudFront function, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html">Writing function code for CloudFront Functions</a> in the <i>Amazon CloudFront Developer Guide</i>.
           * @format password
           * @maxLength 40960
           * @minLength 1
           */
          FunctionCode: string;
          /**
           * Contains configuration information about a CloudFront function.
           */
          FunctionConfig: {
            Comment?: $schemas.String;
            Runtime?: $schemas.FunctionRuntime;
          };
          /**
           * A name to identify the function.
           * @maxLength 64
           * @minLength 1
           */
          Name: string;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateFunctionResult;
      }

      namespace PostGetRealtimeLogConfig2020_05_31 {
        interface Body {
          /**
           * The Amazon Resource Name (ARN) of the real-time log configuration to get.
           */
          ARN?: string;
          /**
           * The name of the real-time log configuration to get.
           */
          Name?: string;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.GetRealtimeLogConfigResult;
      }

      namespace GetKeyGroupConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the key group whose configuration you are getting. To get the identifier, use <code>ListKeyGroups</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetKeyGroupConfigResult;
      }

      namespace DeleteKeyGroup2020_05_31 {
        interface Headers {
          /**
           * The version of the key group that you are deleting. The version is the key group's <code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the key group that you are deleting. To get the identifier, use <code>ListKeyGroups</code>.
           */
          Id: string;
        }
      }

      namespace GetKeyGroup2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the key group that you are getting. To get the identifier, use <code>ListKeyGroups</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetKeyGroupResult;
      }

      namespace PutUpdateKeyGroup2020_05_31 {
        interface Body {
          /**
           * <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
           */
          KeyGroupConfig: {
            Comment?: $schemas.String;
            Items?: $schemas.PublicKeyIdList;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The version of the key group that you are updating. The version is the key group's <code>ETag</code> value.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the key group that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateKeyGroupResult;
      }

      namespace GetListKeyGroups2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of key groups that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListKeyGroupsResult;
      }

      namespace PostCreateKeyGroup2020_05_31 {
        interface Body {
          /**
           * <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
           */
          KeyGroupConfig: {
            Comment?: $schemas.String;
            Items?: $schemas.PublicKeyIdList;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateKeyGroupResult;
      }

      namespace GetOriginAccessControlConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the origin access control.
           */
          Id: string;
        }

        type Response = $schemas.GetOriginAccessControlConfigResult;
      }

      namespace PutUpdateOriginAccessControl2020_05_31 {
        interface Body {
          /**
           * A CloudFront origin access control configuration.
           */
          OriginAccessControlConfig: {
            Description?: $schemas.String;
            Name?: $schemas.String;
            OriginAccessControlOriginType?: $schemas.OriginAccessControlOriginTypes;
            SigningBehavior?: $schemas.OriginAccessControlSigningBehaviors;
            SigningProtocol?: $schemas.OriginAccessControlSigningProtocols;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the origin access control that you are updating.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the origin access control that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateOriginAccessControlResult;
      }

      namespace DeleteOriginAccessControl2020_05_31 {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the origin access control that you are deleting.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the origin access control that you are deleting.
           */
          Id: string;
        }
      }

      namespace GetOriginAccessControl2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the origin access control.
           */
          Id: string;
        }

        type Response = $schemas.GetOriginAccessControlResult;
      }

      namespace GetListOriginAccessControls2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of origin access controls that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListOriginAccessControlsResult;
      }

      namespace PostCreateOriginAccessControl2020_05_31 {
        interface Body {
          /**
           * A CloudFront origin access control configuration.
           */
          OriginAccessControlConfig: {
            Description?: $schemas.String;
            Name?: $schemas.String;
            OriginAccessControlOriginType?: $schemas.OriginAccessControlOriginTypes;
            SigningBehavior?: $schemas.OriginAccessControlSigningBehaviors;
            SigningProtocol?: $schemas.OriginAccessControlSigningProtocols;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateOriginAccessControlResult;
      }

      namespace GetCloudFrontOriginAccessIdentityConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identity's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetCloudFrontOriginAccessIdentityConfigResult;
      }

      namespace PutUpdateCloudFrontOriginAccessIdentity2020_05_31 {
        interface Body {
          /**
           * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
           */
          CloudFrontOriginAccessIdentityConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identity's id.
           */
          Id: string;
        }

        type Response = $schemas.UpdateCloudFrontOriginAccessIdentityResult;
      }

      namespace DeleteCloudFrontOriginAccessIdentity2020_05_31 {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header you received from a previous <code>GET</code> or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The origin access identity's ID.
           */
          Id: string;
        }
      }

      namespace GetCloudFrontOriginAccessIdentity2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identity's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetCloudFrontOriginAccessIdentityResult;
      }

      namespace GetListCloudFrontOriginAccessIdentities2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).
           */
          Marker?: string;
          /**
           * The maximum number of origin access identities you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListCloudFrontOriginAccessIdentitiesResult;
      }

      namespace PostCreateCloudFrontOriginAccessIdentity2020_05_31 {
        interface Body {
          /**
           * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
           */
          CloudFrontOriginAccessIdentityConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateCloudFrontOriginAccessIdentityResult;
      }

      namespace GetOriginRequestPolicyConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetOriginRequestPolicyConfigResult;
      }

      namespace DeleteOriginRequestPolicy2020_05_31 {
        interface Headers {
          /**
           * The version of the origin request policy that you are deleting. The version is the origin request policy's <code>ETag</code> value, which you can get using <code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or <code>GetOriginRequestPolicyConfig</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use <code>ListOriginRequestPolicies</code>.
           */
          Id: string;
        }
      }

      namespace GetOriginRequestPolicy2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.
           */
          Id: string;
        }

        type Response = $schemas.GetOriginRequestPolicyResult;
      }

      namespace PutUpdateOriginRequestPolicy2020_05_31 {
        interface Body {
          /**
           * <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
           */
          OriginRequestPolicyConfig: {
            Comment?: $schemas.String;
            CookiesConfig?: $schemas.OriginRequestPolicyCookiesConfig;
            HeadersConfig?: $schemas.OriginRequestPolicyHeadersConfig;
            Name?: $schemas.String;
            QueryStringsConfig?: $schemas.OriginRequestPolicyQueryStringsConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The version of the origin request policy that you are updating. The version is returned in the origin request policy's <code>ETag</code> field in the response to <code>GetOriginRequestPolicyConfig</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in the response to <code>GetDistributionConfig</code>.
           */
          Id: string;
        }

        type Response = $schemas.UpdateOriginRequestPolicyResult;
      }

      namespace GetListOriginRequestPolicies2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of origin request policies that you want in the response.
           */
          MaxItems?: string;
          /**
           * <p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
           */
          Type?: "custom" | "managed";
        }

        type Response = $schemas.ListOriginRequestPoliciesResult;
      }

      namespace PostCreateOriginRequestPolicy2020_05_31 {
        interface Body {
          /**
           * <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
           */
          OriginRequestPolicyConfig: {
            Comment?: $schemas.String;
            CookiesConfig?: $schemas.OriginRequestPolicyCookiesConfig;
            HeadersConfig?: $schemas.OriginRequestPolicyHeadersConfig;
            Name?: $schemas.String;
            QueryStringsConfig?: $schemas.OriginRequestPolicyQueryStringsConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateOriginRequestPolicyResult;
      }

      namespace GetPublicKeyConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the public key whose configuration you are getting.
           */
          Id: string;
        }

        type Response = $schemas.GetPublicKeyConfigResult;
      }

      namespace PutUpdatePublicKey2020_05_31 {
        interface Body {
          /**
           * Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
           */
          PublicKeyConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            EncodedKey?: $schemas.String;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the public key to update. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the public key that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdatePublicKeyResult;
      }

      namespace DeletePublicKey2020_05_31 {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the public key you want to remove from CloudFront.
           */
          Id: string;
        }
      }

      namespace GetPublicKey2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier of the public key you are getting.
           */
          Id: string;
        }

        type Response = $schemas.GetPublicKeyResult;
      }

      namespace GetListPublicKeys2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).
           */
          Marker?: string;
          /**
           * The maximum number of public keys you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListPublicKeysResult;
      }

      namespace PostCreatePublicKey2020_05_31 {
        interface Body {
          /**
           * Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
           */
          PublicKeyConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            EncodedKey?: $schemas.String;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreatePublicKeyResult;
      }

      namespace PutUpdateRealtimeLogConfig2020_05_31 {
        interface Body {
          /**
           * The Amazon Resource Name (ARN) for this real-time log configuration.
           */
          ARN?: string;
          /**
           * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
           */
          EndPoints?: $schemas.EndPoint[];
          /**
           * <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
           */
          Fields?: any[];
          /**
           * The name for this real-time log configuration.
           */
          Name?: string;
          /**
           * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.
           */
          SamplingRate?: number;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.UpdateRealtimeLogConfigResult;
      }

      namespace GetListRealtimeLogConfigs2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of real-time log configurations that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListRealtimeLogConfigsResult;
      }

      namespace PostCreateRealtimeLogConfig2020_05_31 {
        interface Body {
          /**
           * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
           */
          EndPoints: $schemas.EndPoint[];
          /**
           * <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
           */
          Fields: any[];
          /**
           * A unique name to identify this real-time log configuration.
           */
          Name: string;
          /**
           * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.
           */
          SamplingRate: number;
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateRealtimeLogConfigResult;
      }

      namespace GetResponseHeadersPolicyConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
           */
          Id: string;
        }

        type Response = $schemas.GetResponseHeadersPolicyConfigResult;
      }

      namespace DeleteResponseHeadersPolicy2020_05_31 {
        interface Headers {
          /**
           * <p>The version of the response headers policy that you are deleting.</p> <p>The version is the response headers policy's <code>ETag</code> value, which you can get using <code>ListResponseHeadersPolicies</code>, <code>GetResponseHeadersPolicy</code>, or <code>GetResponseHeadersPolicyConfig</code>.</p>
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * <p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>
           */
          Id: string;
        }
      }

      namespace GetResponseHeadersPolicy2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
           */
          Id: string;
        }

        type Response = $schemas.GetResponseHeadersPolicyResult;
      }

      namespace PutUpdateResponseHeadersPolicy2020_05_31 {
        interface Body {
          /**
           * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
           */
          ResponseHeadersPolicyConfig: {
            Comment?: $schemas.String;
            CorsConfig?: $schemas.ResponseHeadersPolicyCorsConfig;
            CustomHeadersConfig?: $schemas.ResponseHeadersPolicyCustomHeadersConfig;
            Name?: $schemas.String;
            RemoveHeadersConfig?: $schemas.ResponseHeadersPolicyRemoveHeadersConfig;
            SecurityHeadersConfig?: $schemas.ResponseHeadersPolicySecurityHeadersConfig;
            ServerTimingHeadersConfig?: $schemas.ResponseHeadersPolicyServerTimingHeadersConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * <p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The identifier for the response headers policy that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateResponseHeadersPolicyResult;
      }

      namespace GetListResponseHeadersPolicies2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of response headers policies that you want to get in the response.
           */
          MaxItems?: string;
          /**
           * <p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
           */
          Type?: "custom" | "managed";
        }

        type Response = $schemas.ListResponseHeadersPoliciesResult;
      }

      namespace PostCreateResponseHeadersPolicy2020_05_31 {
        interface Body {
          /**
           * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
           */
          ResponseHeadersPolicyConfig: {
            Comment?: $schemas.String;
            CorsConfig?: $schemas.ResponseHeadersPolicyCorsConfig;
            CustomHeadersConfig?: $schemas.ResponseHeadersPolicyCustomHeadersConfig;
            Name?: $schemas.String;
            RemoveHeadersConfig?: $schemas.ResponseHeadersPolicyRemoveHeadersConfig;
            SecurityHeadersConfig?: $schemas.ResponseHeadersPolicySecurityHeadersConfig;
            ServerTimingHeadersConfig?: $schemas.ResponseHeadersPolicyServerTimingHeadersConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateResponseHeadersPolicyResult;
      }

      namespace PostCreateStreamingDistributionWithTags2020_05_31 {
        interface Body {
          /**
           * A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
           */
          StreamingDistributionConfigWithTags: {
            StreamingDistributionConfig?: $schemas.StreamingDistributionConfig;
            Tags?: $schemas.Tags;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          WithTags: true;
        }

        type Response = $schemas.CreateStreamingDistributionWithTagsResult;
      }

      namespace GetStreamingDistributionConfig2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The streaming distribution's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetStreamingDistributionConfigResult;
      }

      namespace PutUpdateStreamingDistribution2020_05_31 {
        interface Body {
          /**
           * The RTMP distribution's configuration information.
           */
          StreamingDistributionConfig: {
            Aliases?: $schemas.Aliases;
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            Enabled?: $schemas.Boolean;
            Logging?: $schemas.StreamingLoggingConfig;
            PriceClass?: $schemas.PriceClass;
            S3Origin?: $schemas.S3Origin;
            TrustedSigners?: $schemas.TrustedSigners;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The streaming distribution's id.
           */
          Id: string;
        }

        type Response = $schemas.UpdateStreamingDistributionResult;
      }

      namespace DeleteStreamingDistribution2020_05_31 {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when you disabled the streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.
           */
          "If-Match"?: string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The distribution ID.
           */
          Id: string;
        }
      }

      namespace GetStreamingDistribution2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The streaming distribution's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetStreamingDistributionResult;
      }

      namespace GetListStreamingDistributions2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The value that you provided for the <code>Marker</code> request parameter.
           */
          Marker?: string;
          /**
           * The value that you provided for the <code>MaxItems</code> request parameter.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListStreamingDistributionsResult;
      }

      namespace PostCreateStreamingDistribution2020_05_31 {
        interface Body {
          /**
           * The RTMP distribution's configuration information.
           */
          StreamingDistributionConfig: {
            Aliases?: $schemas.Aliases;
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            Enabled?: $schemas.Boolean;
            Logging?: $schemas.StreamingLoggingConfig;
            PriceClass?: $schemas.PriceClass;
            S3Origin?: $schemas.S3Origin;
            TrustedSigners?: $schemas.TrustedSigners;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        type Response = $schemas.CreateStreamingDistributionResult;
      }

      namespace PostTagResource2020_05_31 {
        interface Body {
          /**
           * A complex type that contains zero or more <code>Tag</code> elements.
           */
          Tags: {
            Items?: $schemas.TagList;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          Operation: "Tag";
          /**
           * An ARN of a CloudFront resource.
           */
          Resource: string;
        }
      }

      namespace PostUntagResource2020_05_31 {
        interface Body {
          /**
           * A complex type that contains zero or more <code>Tag</code> elements.
           */
          TagKeys: {
            Items?: $schemas.TagKeyList;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          Operation: "Untag";
          /**
           * An ARN of a CloudFront resource.
           */
          Resource: string;
        }
      }

      namespace GetListTagsForResource2020_05_31 {
        interface Headers {
          "X-Amz-Algorithm"?: string;
          "X-Amz-Content-Sha256"?: string;
          "X-Amz-Credential"?: string;
          "X-Amz-Date"?: string;
          "X-Amz-Security-Token"?: string;
          "X-Amz-Signature"?: string;
          "X-Amz-SignedHeaders"?: string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * An ARN of a CloudFront resource.
           */
          Resource: string;
        }

        type Response = $schemas.ListTagsForResourceResult;
      }
    }
  }
}
