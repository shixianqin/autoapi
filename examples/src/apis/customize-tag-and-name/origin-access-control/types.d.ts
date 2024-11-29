declare namespace API {
  namespace CustomizeTagAndName {
    namespace OriginAccessControl {
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
           * The unique identifier of the origin access control.
           */
          Id: string;
        }

        type Response = $schemas.GetOriginAccessControlConfigResult;
      }

      namespace PutUpdate {
        interface Body {
          /**
           * A CloudFront origin access control configuration.
           */
          OriginAccessControlConfig: {
            Description?: $schemas.String;
            Name?: $schemas.String;
            OriginAccessControlOriginType?: $schemas.OriginAccessControlOriginTypes;
            SigningBehavior?: $schemas.OriginAccessControlSigningBehaviors;
            SigningProtocol?: $schemas.OriginAccessControlSigningProtocols;
          };
        }

        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the origin access control that you are updating.
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
           * The unique identifier of the origin access control that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateOriginAccessControlResult;
      }

      namespace DeleteOriginAccessControl {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the origin access control that you are deleting.
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
           * The unique identifier of the origin access control that you are deleting.
           */
          Id: string;
        }
      }

      namespace GetOriginAccessControl {
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
           * The unique identifier of the origin access control.
           */
          Id: string;
        }

        type Response = $schemas.GetOriginAccessControlResult;
      }

      namespace GetListOriginAccessControls {
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
           * Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of origin access controls that you want in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListOriginAccessControlsResult;
      }

      namespace PostCreate {
        interface Body {
          /**
           * A CloudFront origin access control configuration.
           */
          OriginAccessControlConfig: {
            Description?: $schemas.String;
            Name?: $schemas.String;
            OriginAccessControlOriginType?: $schemas.OriginAccessControlOriginTypes;
            SigningBehavior?: $schemas.OriginAccessControlSigningBehaviors;
            SigningProtocol?: $schemas.OriginAccessControlSigningProtocols;
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

        type Response = $schemas.CreateOriginAccessControlResult;
      }
    }
  }
}
