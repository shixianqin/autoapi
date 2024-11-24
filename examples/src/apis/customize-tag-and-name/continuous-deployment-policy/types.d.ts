declare namespace API {
  namespace CustomizeTagAndName {
    namespace ContinuousDeploymentPolicy {
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
           * The identifier of the continuous deployment policy whose configuration you are getting.
           */
          Id: string;
        }

        type Response = $schemas.GetContinuousDeploymentPolicyConfigResult;
      }

      namespace DeleteContinuousDeploymentPolicy {
        interface Headers {
          /**
           * The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.
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
           * The identifier of the continuous deployment policy that you are deleting.
           */
          Id: string;
        }
      }

      namespace GetContinuousDeploymentPolicy {
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
           * The identifier of the continuous deployment policy that you are getting.
           */
          Id: string;
        }

        type Response = $schemas.GetContinuousDeploymentPolicyResult;
      }

      namespace PutUpdate {
        interface Body {
          /**
           * Contains the configuration for a continuous deployment policy.
           */
          ContinuousDeploymentPolicyConfig: {
            Enabled?: $schemas.Boolean;
            StagingDistributionDnsNames?: $schemas.StagingDistributionDnsNames;
            TrafficConfig?: $schemas.TrafficConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.
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
           * The identifier of the continuous deployment policy that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateContinuousDeploymentPolicyResult;
      }

      namespace GetListContinuousDeploymentPolicies {
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
           * Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of continuous deployment policies that you want returned in the response.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListContinuousDeploymentPoliciesResult;
      }

      namespace PostCreate {
        interface Body {
          /**
           * Contains the configuration for a continuous deployment policy.
           */
          ContinuousDeploymentPolicyConfig: {
            Enabled?: $schemas.Boolean;
            StagingDistributionDnsNames?: $schemas.StagingDistributionDnsNames;
            TrafficConfig?: $schemas.TrafficConfig;
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

        type Response = $schemas.CreateContinuousDeploymentPolicyResult;
      }
    }
  }
}
