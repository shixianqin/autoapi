declare namespace API {
  namespace CustomizeTagAndName {
    namespace Distributions {
      namespace DeleteMonitoringSubscription {
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

      namespace GetMonitoringSubscription {
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

      namespace PostCreateMonitoringSubscription {
        interface Body {
          /**
           * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
           */
          MonitoringSubscription: {
            RealtimeMetricsSubscriptionConfig?: $schemas.RealtimeMetricsSubscriptionConfig;
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

        interface PathParams {
          /**
           * The ID of the distribution that you are enabling metrics for.
           */
          DistributionId: string;
        }

        type Response = $schemas.CreateMonitoringSubscriptionResult;
      }
    }
  }
}
