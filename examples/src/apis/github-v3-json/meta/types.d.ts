declare namespace API {
  namespace GithubV3Json {
    namespace Meta {
      namespace GetRoot {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.Root;
      }

      namespace GetMeta {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.ApiOverview;
      }

      namespace GetOctocat {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The words to show in Octocat's speech bubble
           */
          s?: string;
        }

        type Response = string;
      }

      namespace GetAllVersions {
        interface Headers {
          [P: string]: any;
        }

        type Response = string[];
      }

      namespace GetZen {
        interface Headers {
          [P: string]: any;
        }

        type Response = string;
      }
    }
  }
}
