declare namespace API {
  namespace CustomizeTagAndName {
    namespace ConflictingAliasDistributionIdAlias {
      namespace GetListConflictingAliases {
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
           * The alias (also called a CNAME) to search for conflicting aliases.
           * @maxLength 253
           */
          Alias: string;
          /**
           * The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.
           * @maxLength 25
           */
          DistributionId: string;
          /**
           * Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.
           */
          Marker?: string;
          /**
           * The maximum number of conflicting aliases that you want in the response.
           * @maximum 100
           */
          MaxItems?: number;
        }

        type Response = $schemas.ListConflictingAliasesResult;
      }
    }
  }
}
