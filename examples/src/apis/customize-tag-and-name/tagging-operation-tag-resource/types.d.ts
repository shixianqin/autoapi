declare namespace API {
  namespace CustomizeTagAndName {
    namespace TaggingOperationTagResource {
      namespace PostTagResource {
        interface Body {
          /**
           * A complex type that contains zero or more <code>Tag</code> elements.
           */
          Tags: {
            Items?: $schemas.TagList;
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
          Operation: "Tag";
          /**
           * An ARN of a CloudFront resource.
           */
          Resource: string;
        }
      }
    }
  }
}
