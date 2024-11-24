declare namespace API {
  namespace CustomizeTagAndName {
    namespace StreamingDistribution {
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
           * The streaming distribution's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetStreamingDistributionConfigResult;
      }

      namespace PutUpdate {
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

      namespace DeleteStreamingDistribution {
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

      namespace GetStreamingDistribution {
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

      namespace GetListStreamingDistributions {
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

      namespace PostCreate {
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
    }
  }
}
