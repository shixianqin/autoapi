declare namespace API {
  namespace CustomizeTagAndName {
    namespace DeleteRealtimeLogConfig {
      namespace PostDeleteRealtimeLogConfig {
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
    }
  }
}
