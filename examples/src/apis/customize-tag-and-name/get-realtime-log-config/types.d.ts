declare namespace API {
  namespace CustomizeTagAndName {
    namespace GetRealtimeLogConfig {
      namespace PostGetRealtimeLogConfig {
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
    }
  }
}
