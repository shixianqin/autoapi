declare namespace API {
  namespace GithubV3Json {
    namespace SecretScanning {
      namespace GetListAlertsForEnterprise {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
           */
          enterprise: string;
        }

        interface QueryParams {
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
           */
          after?: string;
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
           */
          before?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
           */
          resolution?: string;
          /**
           * A comma-separated list of secret types to return. By default all secret types are returned.
           * See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
           * for a complete list of secret types.
           */
          secret_type?: string;
          /**
           * The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
           */
          state?: "open" | "resolved";
        }

        type Response = $schemas.OrganizationSecretScanningAlert[];
      }

      namespace GetListAlertsForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
           */
          after?: string;
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.
           */
          before?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
           */
          resolution?: string;
          /**
           * A comma-separated list of secret types to return. By default all secret types are returned.
           * See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
           * for a complete list of secret types.
           */
          secret_type?: string;
          /**
           * The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
           */
          state?: "open" | "resolved";
        }

        type Response = $schemas.OrganizationSecretScanningAlert[];
      }

      namespace GetListLocationsForAlert {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
           */
          alert_number: $schemas.AlertNumber;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.SecretScanningLocation[];
      }

      namespace GetAlert {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
           */
          alert_number: $schemas.AlertNumber;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.SecretScanningAlert;
      }

      namespace PatchUpdateAlert {
        interface Body {
          /**
           * **Required when the `state` is `resolved`.** The reason for resolving the alert.
           */
          resolution?: $schemas.SecretScanningAlertResolution;
          /**
           * An optional comment when closing an alert. Cannot be updated or deleted. Must be `null` when changing `state` to `open`.
           */
          resolution_comment?: $schemas.SecretScanningAlertResolutionComment;
          /**
           * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
           */
          state: $schemas.SecretScanningAlertState;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies an alert. You can find this at the end of the URL for a code scanning alert within GitHub, and in the `number` field in the response from the `GET /repos/{owner}/{repo}/code-scanning/alerts` operation.
           */
          alert_number: $schemas.AlertNumber;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.SecretScanningAlert;
      }

      namespace GetListAlertsForRepo {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.  To receive an initial cursor on your first request, include an empty "after" query string.
           */
          after?: string;
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. To receive an initial cursor on your first request, include an empty "before" query string.
           */
          before?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * A comma-separated list of resolutions. Only secret scanning alerts with one of these resolutions are listed. Valid resolutions are `false_positive`, `wont_fix`, `revoked`, `pattern_edited`, `pattern_deleted` or `used_in_tests`.
           */
          resolution?: string;
          /**
           * A comma-separated list of secret types to return. By default all secret types are returned.
           * See "[Secret scanning patterns](https://docs.github.com/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security)"
           * for a complete list of secret types.
           */
          secret_type?: string;
          /**
           * The property to sort the results by. `created` means when the alert was created. `updated` means when the alert was updated or resolved.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * Set to `open` or `resolved` to only list secret scanning alerts in a specific state.
           */
          state?: "open" | "resolved";
        }

        type Response = $schemas.SecretScanningAlert[];
      }
    }
  }
}
