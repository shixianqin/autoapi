declare namespace API {
  namespace CustomizeTagAndName {
    namespace DistributionsByRealtimeLogConfig {
      namespace PostList {
        interface Body {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distributions that you want in the response.
           */
          MaxItems?: string;
          /**
           * The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.
           */
          RealtimeLogConfigArn?: string;
          /**
           * The name of the real-time log configuration whose associated distributions you want to list.
           */
          RealtimeLogConfigName?: string;
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

        type Response = $schemas.ListDistributionsByRealtimeLogConfigResult;
      }
    }
  }
}
