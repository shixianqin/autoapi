declare namespace API {
  namespace CustomizeTagAndName {
    namespace TaggingResource {
      namespace GetListTagsForResource {
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
