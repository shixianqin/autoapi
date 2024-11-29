declare namespace API {
  namespace CustomizeTagAndName {
    namespace DistributionWithTags {
      namespace PostCreate {
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
    }
  }
}
