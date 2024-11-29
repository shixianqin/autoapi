declare namespace API {
  namespace CustomizeTagAndName {
    namespace FieldLevelEncryption {
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
           * Request the ID for the field-level encryption configuration information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionConfigResult;
      }

      namespace PutUpdateConfig {
        interface Body {
          /**
           * A complex data type that includes the profile configurations specified for field-level encryption.
           */
          FieldLevelEncryptionConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            ContentTypeProfileConfig?: $schemas.ContentTypeProfileConfig;
            QueryArgProfileConfig?: $schemas.QueryArgProfileConfig;
          };
        }

        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.
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
           * The ID of the configuration you want to update.
           */
          Id: string;
        }

        type Response = $schemas.UpdateFieldLevelEncryptionConfigResult;
      }

      namespace DeleteConfig {
        interface Headers {
          /**
           * The value of the <code>ETag</code> header that you received when retrieving the configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.
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
           * The ID of the configuration you want to delete from CloudFront.
           */
          Id: string;
        }
      }

      namespace GetFieldLevelEncryption {
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
           * Request the ID for the field-level encryption configuration information.
           */
          Id: string;
        }

        type Response = $schemas.GetFieldLevelEncryptionResult;
      }

      namespace GetListConfigs {
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
           * Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).
           */
          Marker?: string;
          /**
           * The maximum number of field-level encryption configurations you want in the response body.
           */
          MaxItems?: string;
        }

        type Response = $schemas.ListFieldLevelEncryptionConfigsResult;
      }

      namespace PostCreateConfig {
        interface Body {
          /**
           * A complex data type that includes the profile configurations specified for field-level encryption.
           */
          FieldLevelEncryptionConfig: {
            CallerReference?: $schemas.String;
            Comment?: $schemas.String;
            ContentTypeProfileConfig?: $schemas.ContentTypeProfileConfig;
            QueryArgProfileConfig?: $schemas.QueryArgProfileConfig;
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

        type Response = $schemas.CreateFieldLevelEncryptionConfigResult;
      }
    }
  }
}
