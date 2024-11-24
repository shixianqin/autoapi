declare namespace API {
  namespace TwitterV3Json {
    namespace Usage {
      namespace GetTweets {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The number of days for which you need usage for.
           * @default 7
           * @format int32
           * @maximum 90
           * @minimum 1
           */
          days?: number;
          /**
           * A comma separated list of Usage fields to display.
           * @minItems 1
           */
          "usage.fields"?: Array<
            | "cap_reset_day"
            | "daily_client_app_usage"
            | "daily_project_usage"
            | "project_cap"
            | "project_id"
            | "project_usage"
          >;
        }

        type Response = $schemas.Get2UsageTweetsResponse;
      }
    }
  }
}
