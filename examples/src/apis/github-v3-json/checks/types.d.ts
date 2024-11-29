declare namespace API {
  namespace GithubV3Json {
    namespace Checks {
      namespace GetListAnnotations {
        interface PathParams {
          /**
           * The unique identifier of the check run.
           */
          check_run_id: number;
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

        type Response = $schemas.CheckAnnotation[];
      }

      namespace PostRerequestRun {
        interface PathParams {
          /**
           * The unique identifier of the check run.
           */
          check_run_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetChecks {
        interface PathParams {
          /**
           * The unique identifier of the check run.
           */
          check_run_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.CheckRun;
      }

      namespace PatchUpdate {
        type Body = {
          /**
           * Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://docs.github.com/rest/reference/checks#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
           * @maxItems 3
           */
          actions?: Array<{
            /**
             * A short explanation of what this action would do. The maximum size is 40 characters.
             * @maxLength 40
             */
            description: string;
            /**
             * A reference for the action on the integrator's system. The maximum size is 20 characters.
             * @maxLength 20
             */
            identifier: string;
            /**
             * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
             * @maxLength 20
             */
            label: string;
          }>;
          /**
           * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          completed_at?: string;
          /**
           * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check.
           * **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
           */
          conclusion?:
            | "action_required"
            | "cancelled"
            | "failure"
            | "neutral"
            | "skipped"
            | "stale"
            | "success"
            | "timed_out";
          /**
           * The URL of the integrator's site that has the full details of the check.
           */
          details_url?: string;
          /**
           * A reference for the run on the integrator's system.
           */
          external_id?: string;
          /**
           * The name of the check. For example, "code-coverage".
           */
          name?: string;
          /**
           * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run.
           */
          output?: {
            /**
             * Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://docs.github.com/articles/about-status-checks#checks)".
             * @maxItems 50
             */
            annotations?: Array<{
              /**
               * The level of the annotation.
               */
              annotation_level: "failure" | "notice" | "warning";
              /**
               * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
               */
              end_column?: number;
              /**
               * The end line of the annotation.
               */
              end_line: number;
              /**
               * A short description of the feedback for these lines of code. The maximum size is 64 KB.
               */
              message: string;
              /**
               * The path of the file to add an annotation to. For example, `assets/css/main.css`.
               */
              path: string;
              /**
               * Details about this annotation. The maximum size is 64 KB.
               */
              raw_details?: string;
              /**
               * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values. Column numbers start at 1.
               */
              start_column?: number;
              /**
               * The start line of the annotation. Line numbers start at 1.
               */
              start_line: number;
              /**
               * The title that represents the annotation. The maximum size is 255 characters.
               */
              title?: string;
            }>;
            /**
             * Adds images to the output displayed in the GitHub pull request UI.
             */
            images?: Array<{
              /**
               * The alternative text for the image.
               */
              alt: string;
              /**
               * A short image description.
               */
              caption?: string;
              /**
               * The full URL of the image.
               */
              image_url: string;
            }>;
            /**
             * Can contain Markdown.
             * @maxLength 65535
             */
            summary: string;
            /**
             * Can contain Markdown.
             * @maxLength 65535
             */
            text?: string;
            /**
             * **Required**.
             */
            title?: string;
          };
          /**
           * This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          started_at?: string;
          /**
           * The current status.
           */
          status?: "completed" | "in_progress" | "queued";
        } & (
          | {
              conclusion:
                | "action_required"
                | "cancelled"
                | "failure"
                | "neutral"
                | "skipped"
                | "stale"
                | "success"
                | "timed_out";
              status?: "completed";
              [P: string]: any;
            }
          | {
              status?: "in_progress" | "queued";
              [P: string]: any;
            }
        );

        interface PathParams {
          /**
           * The unique identifier of the check run.
           */
          check_run_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.CheckRun;
      }

      namespace PostCreate {
        type Body = {
          /**
           * Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://docs.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://docs.github.com/rest/reference/checks#check-runs-and-requested-actions)."
           * @maxItems 3
           */
          actions?: Array<{
            /**
             * A short explanation of what this action would do. The maximum size is 40 characters.
             * @maxLength 40
             */
            description: string;
            /**
             * A reference for the action on the integrator's system. The maximum size is 20 characters.
             * @maxLength 20
             */
            identifier: string;
            /**
             * The text to be displayed on a button in the web UI. The maximum size is 20 characters.
             * @maxLength 20
             */
            label: string;
          }>;
          /**
           * The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          completed_at?: string;
          /**
           * **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check.
           * **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.
           */
          conclusion?:
            | "action_required"
            | "cancelled"
            | "failure"
            | "neutral"
            | "skipped"
            | "stale"
            | "success"
            | "timed_out";
          /**
           * The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
           */
          details_url?: string;
          /**
           * A reference for the run on the integrator's system.
           */
          external_id?: string;
          /**
           * The SHA of the commit.
           */
          head_sha: string;
          /**
           * The name of the check. For example, "code-coverage".
           */
          name: string;
          /**
           * Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run.
           */
          output?: {
            /**
             * Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://docs.github.com/rest/reference/checks#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://docs.github.com/articles/about-status-checks#checks)".
             * @maxItems 50
             */
            annotations?: Array<{
              /**
               * The level of the annotation.
               */
              annotation_level: "failure" | "notice" | "warning";
              /**
               * The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
               */
              end_column?: number;
              /**
               * The end line of the annotation.
               */
              end_line: number;
              /**
               * A short description of the feedback for these lines of code. The maximum size is 64 KB.
               */
              message: string;
              /**
               * The path of the file to add an annotation to. For example, `assets/css/main.css`.
               */
              path: string;
              /**
               * Details about this annotation. The maximum size is 64 KB.
               */
              raw_details?: string;
              /**
               * The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values. Column numbers start at 1.
               */
              start_column?: number;
              /**
               * The start line of the annotation. Line numbers start at 1.
               */
              start_line: number;
              /**
               * The title that represents the annotation. The maximum size is 255 characters.
               */
              title?: string;
            }>;
            /**
             * Adds images to the output displayed in the GitHub pull request UI.
             */
            images?: Array<{
              /**
               * The alternative text for the image.
               */
              alt: string;
              /**
               * A short image description.
               */
              caption?: string;
              /**
               * The full URL of the image.
               */
              image_url: string;
            }>;
            /**
             * The summary of the check run. This parameter supports Markdown. **Maximum length**: 65535 characters.
             * @maxLength 65535
             */
            summary: string;
            /**
             * The details of the check run. This parameter supports Markdown. **Maximum length**: 65535 characters.
             * @maxLength 65535
             */
            text?: string;
            /**
             * The title of the check run.
             */
            title: string;
          };
          /**
           * The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          started_at?: string;
          /**
           * The current status.
           * @default queued
           */
          status?: "completed" | "in_progress" | "queued";
        } & (
          | {
              conclusion:
                | "action_required"
                | "cancelled"
                | "failure"
                | "neutral"
                | "skipped"
                | "stale"
                | "success"
                | "timed_out";
              status: "completed";
              [P: string]: any;
            }
          | {
              status?: "in_progress" | "queued";
              [P: string]: any;
            }
        );

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

        type Response = $schemas.CheckRun;
      }

      namespace PatchSetSuitesPreferences {
        interface Body {
          /**
           * Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default.
           */
          auto_trigger_checks?: Array<{
            /**
             * The `id` of the GitHub App.
             */
            app_id: number;
            /**
             * Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
             * @default true
             */
            setting: boolean;
          }>;
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

        type Response = $schemas.CheckSuitePreference;
      }

      namespace GetListForSuite {
        interface PathParams {
          /**
           * The unique identifier of the check suite.
           */
          check_suite_id: number;
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
           * Returns check runs with the specified `name`.
           */
          check_name?: string;
          /**
           * Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
           * @default latest
           */
          filter?: "all" | "latest";
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
           * Returns check runs with the specified `status`.
           */
          status?: "completed" | "in_progress" | "queued";
        }

        interface Response {
          check_runs: $schemas.CheckRun[];
          total_count: number;
        }
      }

      namespace PostRerequestSuite {
        interface PathParams {
          /**
           * The unique identifier of the check suite.
           */
          check_suite_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetSuite {
        interface PathParams {
          /**
           * The unique identifier of the check suite.
           */
          check_suite_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.CheckSuite;
      }

      namespace PostCreateSuite {
        interface Body {
          /**
           * The sha of the head commit.
           */
          head_sha: string;
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

        type Response = $schemas.CheckSuite;
      }

      namespace GetListForRef {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * ref parameter
           */
          ref: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          app_id?: number;
          /**
           * Returns check runs with the specified `name`.
           */
          check_name?: string;
          /**
           * Filters check runs by their `completed_at` timestamp. `latest` returns the most recent check runs.
           * @default latest
           */
          filter?: "all" | "latest";
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
           * Returns check runs with the specified `status`.
           */
          status?: "completed" | "in_progress" | "queued";
        }

        interface Response {
          check_runs: $schemas.CheckRun[];
          total_count: number;
        }
      }

      namespace GetListSuitesForRef {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * ref parameter
           */
          ref: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Filters check suites by GitHub App `id`.
           */
          app_id?: number;
          /**
           * Returns check runs with the specified `name`.
           */
          check_name?: string;
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

        interface Response {
          check_suites: $schemas.CheckSuite[];
          total_count: number;
        }
      }
    }
  }
}
