declare namespace API {
  namespace GithubV3Json {
    namespace Gitignore {
      namespace GetTemplate {
        interface PathParams {
          name: string;
        }

        type Response = $schemas.GitignoreTemplate;
      }

      namespace GetAllTemplates {
        type Response = string[];
      }
    }
  }
}
