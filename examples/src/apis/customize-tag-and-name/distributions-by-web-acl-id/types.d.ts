declare namespace API {
  namespace CustomizeTagAndName {
    namespace DistributionsByWebAclId {
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
           * The ID of the WAF web ACL that you want to list the associated distributions. If you specify "null" for the ID, the request returns a list of the distributions that aren't associated with a web ACL.
           */
          WebACLId: string;
        }

        interface QueryParams {
          /**
           * Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)
           */
          Marker?: string;
          /**
           * The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListDistributionsByWebAclIdResult;
      }
    }
  }
}
