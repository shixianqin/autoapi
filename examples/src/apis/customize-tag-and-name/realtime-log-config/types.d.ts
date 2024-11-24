declare namespace API {
  namespace CustomizeTagAndName {
    namespace RealtimeLogConfig {
      namespace PutUpdate {
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

      namespace GetListRealtimeLogConfigs {
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

      namespace PostCreate {
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
    }
  }
}
