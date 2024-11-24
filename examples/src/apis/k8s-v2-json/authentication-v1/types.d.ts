declare namespace API {
  namespace K8sV2Json {
    namespace AuthenticationV1 {
      namespace GetApiResources {
        interface Headers {
          "Content-Type"?:
            | "application/json"
            | "application/yaml"
            | "application/vnd.kubernetes.protobuf"
            | string;
          [P: string]: any;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1ApiResourceList;
      }

      namespace PostCreateSelfSubjectReview {
        type Body = $schemas.IoK8sApiAuthenticationV1SelfSubjectReview;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiAuthenticationV1SelfSubjectReview;
      }

      namespace PostCreateTokenReview {
        type Body = $schemas.IoK8sApiAuthenticationV1TokenReview;

        interface Headers {
          "Content-Type"?: "*/*" | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
           */
          dryRun?: string;
          /**
           * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
           */
          fieldManager?: string;
          /**
           * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
           */
          fieldValidation?: string;
          /**
           * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
           */
          pretty?: string;
        }

        type Response = $schemas.IoK8sApiAuthenticationV1TokenReview;
      }
    }
  }
}
