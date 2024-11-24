declare namespace API {
  namespace CustomizeTagAndName {
    namespace FieldLevelEncryptionProfile {
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
           * Get the ID for the field-level encryption profile configuration information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionProfileConfigResult;
      }

      namespace PutUpdate {
        interface Body {
          /**
           * A complex data type of profiles for the field-level encryption.
           */
          FieldLevelEncryptionProfileConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            EncryptionEntities?: $schemas.EncryptionEntities;
            Name?: $schemas.String;
          };
        }

        interface Headers {
          "Content-Type"?: "text/xml" | string;
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.
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
           * The ID of the field-level encryption profile request.
           */
          Id: string;
        }

        type Response = $schemas.UpdateFieldLevelEncryptionProfileResult;
      }

      namespace DeleteFieldLevelEncryptionProfile {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.
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
           * Request the ID of the profile you want to delete from CloudFront.
           */
          Id: string;
        }
      }

      namespace GetFieldLevelEncryptionProfile {
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
           * Get the ID for the field-level encryption profile information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionProfileResult;
      }

      namespace GetListFieldLevelEncryptionProfiles {
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
           * Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).
           */
          Marker?: string;
          /**
           * The maximum number of field-level encryption profiles you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListFieldLevelEncryptionProfilesResult;
      }

      namespace PostCreate {
        interface Body {
          /**
           * A complex data type of profiles for the field-level encryption.
           */
          FieldLevelEncryptionProfileConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            EncryptionEntities?: $schemas.EncryptionEntities;
            Name?: $schemas.String;
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

        type Response = $schemas.CreateFieldLevelEncryptionProfileResult;
      }
    }
  }
}
