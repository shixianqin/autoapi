declare namespace API {
  namespace GithubV3Json {
    namespace Meta {
      namespace GetRoot {
        type Response = $schemas.Root;
      }

      namespace GetMeta {
        type Response = $schemas.ApiOverview;
      }

      namespace GetOctocat {
        interface QueryParams {
          /**
           * The words to show in Octocat's speech bubble
           */
          s?: string;
        }

        type Response = string;
      }

      namespace GetAllVersions {
        type Response = string[];
      }

      namespace GetZen {
        type Response = string;
      }
    }
  }
}
