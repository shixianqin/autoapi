declare namespace API {
  namespace CustomizeTagAndName {
    namespace ResponseHeadersPolicy {
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
           * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
           */
          Id: string;
        }

        type Response = $schemas.GetResponseHeadersPolicyConfigResult;
      }

      namespace DeleteResponseHeadersPolicy {
        interface Headers {
          /**
           * <p>The version of the response headers policy that you are deleting.</p> <p>The version is the response headers policy's <code>ETag</code> value, which you can get using <code>ListResponseHeadersPolicies</code>, <code>GetResponseHeadersPolicy</code>, or <code>GetResponseHeadersPolicyConfig</code>.</p>
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
           * <p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>
           */
          Id: string;
        }
      }

      namespace GetResponseHeadersPolicy {
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
           * <p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
           */
          Id: string;
        }

        type Response = $schemas.GetResponseHeadersPolicyResult;
      }

      namespace PutUpdate {
        interface Body {
          /**
           * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
           */
          ResponseHeadersPolicyConfig: {
            Comment?: $schemas.String;
            CorsConfig?: $schemas.ResponseHeadersPolicyCorsConfig;
            CustomHeadersConfig?: $schemas.ResponseHeadersPolicyCustomHeadersConfig;
            Name?: $schemas.String;
            RemoveHeadersConfig?: $schemas.ResponseHeadersPolicyRemoveHeadersConfig;
            SecurityHeadersConfig?: $schemas.ResponseHeadersPolicySecurityHeadersConfig;
            ServerTimingHeadersConfig?: $schemas.ResponseHeadersPolicyServerTimingHeadersConfig;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * <p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>
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
           * The identifier for the response headers policy that you are updating.
           */
          Id: string;
        }

        type Response = $schemas.UpdateResponseHeadersPolicyResult;
      }

      namespace GetListResponseHeadersPolicies {
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
           * Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of response headers policies that you want to get in the response.
           */
          MaxItems?: string;
          /**
           * <p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>
           */
          Type?: "custom" | "managed";
        }

        type Response = $schemas.ListResponseHeadersPoliciesResult;
      }

      namespace PostCreate {
        interface Body {
          /**
           * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
           */
          ResponseHeadersPolicyConfig: {
            Comment?: $schemas.String;
            CorsConfig?: $schemas.ResponseHeadersPolicyCorsConfig;
            CustomHeadersConfig?: $schemas.ResponseHeadersPolicyCustomHeadersConfig;
            Name?: $schemas.String;
            RemoveHeadersConfig?: $schemas.ResponseHeadersPolicyRemoveHeadersConfig;
            SecurityHeadersConfig?: $schemas.ResponseHeadersPolicySecurityHeadersConfig;
            ServerTimingHeadersConfig?: $schemas.ResponseHeadersPolicyServerTimingHeadersConfig;
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

        type Response = $schemas.CreateResponseHeadersPolicyResult;
      }
    }
  }
}
