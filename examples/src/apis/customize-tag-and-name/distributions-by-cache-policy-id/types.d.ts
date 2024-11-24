declare namespace API {
  namespace CustomizeTagAndName {
    namespace DistributionsByCachePolicyId {
      namespace GetList {
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
           * The ID of the cache policy whose associated distribution IDs you want to list.
           */
          CachePolicyId: string;
        }

        interface QueryParams {
          /**
           * Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of distribution IDs that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsByCachePolicyIdResult;
      }
    }
  }
}
