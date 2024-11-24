declare namespace API {
  namespace GithubV3Json {
    namespace Gitignore {
      namespace GetTemplate {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          name: string;
        }

        type Response = $schemas.GitignoreTemplate;
      }

      namespace GetAllTemplates {
        interface Headers {
          [P: string]: any;
        }

        type Response = string[];
      }
    }
  }
}
