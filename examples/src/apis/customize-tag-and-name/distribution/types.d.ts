declare namespace API {
  namespace CustomizeTagAndName {
    namespace Distribution {
      namespace GetInvalidation {
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

      namespace GetListInvalidations {
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

      namespace PostCreateInvalidation {
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

      namespace GetConfig {
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

      namespace PutUpdate {
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

      namespace PutUpdateWithStagingConfig {
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

      namespace DeleteDistribution {
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

      namespace GetDistribution {
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

      namespace PostCopy {
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

      namespace PutAssociateAlias {
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

      namespace GetListDistributions {
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

      namespace PostCreate {
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
    }
  }
}
