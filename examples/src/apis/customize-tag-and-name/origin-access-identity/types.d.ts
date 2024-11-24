declare namespace API {
  namespace CustomizeTagAndName {
    namespace OriginAccessIdentity {
      namespace GetCloudFrontConfig {
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
           * The identity's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetCloudFrontOriginAccessIdentityConfigResult;
      }

      namespace PutUpdateCloudFront {
        interface Body {
          /**
           * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
           */
          CloudFrontOriginAccessIdentityConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
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
           * The identity's id.
           */
          Id: string;
        }

        type Response = $schemas.UpdateCloudFrontOriginAccessIdentityResult;
      }

      namespace DeleteCloudFront {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header you received from a previous <code>GET</code> or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.
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
           * The origin access identity's ID.
           */
          Id: string;
        }
      }

      namespace GetCloudFront {
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
           * The identity's ID.
           */
          Id: string;
        }

        type Response = $schemas.GetCloudFrontOriginAccessIdentityResult;
      }

      namespace GetListCloudFrontOriginAccessIdentities {
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
           * Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).
           */
          Marker?: string;
          /**
           * The maximum number of origin access identities you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListCloudFrontOriginAccessIdentitiesResult;
      }

      namespace PostCreateCloudFront {
        interface Body {
          /**
           * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
           */
          CloudFrontOriginAccessIdentityConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
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

        type Response = $schemas.CreateCloudFrontOriginAccessIdentityResult;
      }
    }
  }
}
