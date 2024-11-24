declare namespace API {
  namespace CustomizeTagAndName {
    namespace StreamingDistributionWithTags {
      namespace PostCreate {
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
    }
  }
}
