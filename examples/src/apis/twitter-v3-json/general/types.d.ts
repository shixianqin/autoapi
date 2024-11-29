declare namespace API {
  namespace TwitterV3Json {
    namespace General {
      namespace GetOpenApiSpec {
        interface Response {}
      }

      namespace GetRuleCount {
        interface QueryParams {
          /**
           * A comma separated list of RulesCount fields to display.
           * @minItems 1
           */
          "rules_count.fields"?: Array<
            | "all_project_client_apps"
            | "cap_per_client_app"
            | "cap_per_project"
            | "client_app_rules_count"
            | "project_rules_count"
          >;
        }

        type Response = $schemas.Get2TweetsSearchStreamRulesCountsResponse;
      }
    }
  }
}
