declare namespace API {
  namespace GithubV3Json {
    namespace CodeScanning {
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
           * If specified, only code scanning alerts with this severity will be returned.
           */
          severity?: $schemas.CodeScanningAlertSeverity;
          /**
           * The property by which to sort the results.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * If specified, only code scanning alerts with this state will be returned.
           */
          state?: $schemas.CodeScanningAlertState;
          /**
           * The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
           */
          tool_guid?: $schemas.CodeScanningAnalysisToolGuid;
          /**
           * The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
           */
          tool_name?: $schemas.CodeScanningAnalysisToolName;
        }

        type Response = $schemas.CodeScanningOrganizationAlertItems[];
      }

      namespace GetListAlertInstances {
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
          /**
           * The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
           */
          ref?: $schemas.CodeScanningRef;
        }

        type Response = $schemas.CodeScanningAlertInstance[];
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

        type Response = $schemas.CodeScanningAlert;
      }

      namespace PatchUpdateAlert {
        interface Body {
          /**
           * The dismissal comment associated with the dismissal of the alert.
           * @maxLength 280
           */
          dismissed_comment?: $schemas.CodeScanningAlertDismissedComment;
          /**
           * **Required when the state is dismissed.** The reason for dismissing or closing the alert.
           */
          dismissed_reason?: $schemas.CodeScanningAlertDismissedReason;
          /**
           * Sets the state of the code scanning alert. You must provide `dismissed_reason` when you set the state to `dismissed`.
           */
          state: $schemas.CodeScanningAlertSetState;
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

        type Response = $schemas.CodeScanningAlert;
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
           * The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
           */
          ref?: $schemas.CodeScanningRef;
          /**
           * If specified, only code scanning alerts with this severity will be returned.
           */
          severity?: $schemas.CodeScanningAlertSeverity;
          /**
           * The property by which to sort the results.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * If specified, only code scanning alerts with this state will be returned.
           */
          state?: $schemas.CodeScanningAlertState;
          /**
           * The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
           */
          tool_guid?: $schemas.CodeScanningAnalysisToolGuid;
          /**
           * The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
           */
          tool_name?: $schemas.CodeScanningAnalysisToolName;
        }

        type Response = $schemas.CodeScanningAlertItems[];
      }

      namespace DeleteAnalysis {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
           */
          analysis_id: number;
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
           * Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.`
           */
          confirm_delete?: string;
        }

        type Response = $schemas.CodeScanningAnalysisDeletion;
      }

      namespace GetAnalysis {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
           */
          analysis_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response =
          | $schemas.CodeScanningAnalysis
          | {
              [P: string]: any;
            };
      }

      namespace GetListRecentAnalyses {
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
           * The Git reference for the analyses you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
           */
          ref?: $schemas.CodeScanningRef;
          /**
           * Filter analyses belonging to the same SARIF upload.
           */
          sarif_id?: $schemas.CodeScanningAnalysisSarifId;
          /**
           * The property by which to sort the results.
           * @default created
           */
          sort?: "created";
          /**
           * The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
           */
          tool_guid?: $schemas.CodeScanningAnalysisToolGuid;
          /**
           * The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
           */
          tool_name?: $schemas.CodeScanningAnalysisToolName;
        }

        type Response = $schemas.CodeScanningAnalysis[];
      }

      namespace GetCodeqlDatabase {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The language of the CodeQL database.
           */
          language: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.CodeScanningCodeqlDatabase;
      }

      namespace GetListCodeqlDatabases {
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

        type Response = $schemas.CodeScanningCodeqlDatabase[];
      }

      namespace GetSarif {
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
          /**
           * The SARIF ID obtained after uploading.
           */
          sarif_id: string;
        }

        type Response = $schemas.CodeScanningSarifsStatus;
      }

      namespace PostUploadSarif {
        interface Body {
          /**
           * The base directory used in the analysis, as it appears in the SARIF file.
           * This property is used to convert file paths from absolute to relative, so that alerts can be mapped to their correct location in the repository.
           * @format uri
           */
          checkout_uri?: string;
          /**
           * The SHA of the commit to which the analysis you are uploading relates.
           * @maxLength 40
           * @minLength 40
           */
          commit_sha: $schemas.CodeScanningAnalysisCommitSha;
          /**
           * The full Git reference, formatted as `refs/heads/<branch name>`,
           * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
           */
          ref: $schemas.CodeScanningRef;
          /**
           * A Base64 string representing the SARIF file to upload. You must first compress your SARIF file using [`gzip`](http://www.gnu.org/software/gzip/manual/gzip.html) and then translate the contents of the file into a Base64 encoding string. For more information, see "[SARIF support for code scanning](https://docs.github.com/code-security/secure-coding/sarif-support-for-code-scanning)."
           */
          sarif: $schemas.CodeScanningAnalysisSarifFile;
          /**
           * The time that the analysis run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          started_at?: string;
          /**
           * The name of the tool used to generate the code scanning analysis. If this parameter is not used, the tool name defaults to "API". If the uploaded SARIF contains a tool GUID, this will be available for filtering using the `tool_guid` parameter of operations such as `GET /repos/{owner}/{repo}/code-scanning/alerts`.
           */
          tool_name?: string;
          /**
           * Whether the SARIF file will be validated according to the code scanning specifications.
           * This parameter is intended to help integrators ensure that the uploaded SARIF files are correctly rendered by code scanning.
           */
          validate?: boolean;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
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

        type Response = $schemas.CodeScanningSarifsReceipt;
      }
    }
  }
}
