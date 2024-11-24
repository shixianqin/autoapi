declare namespace API {
  namespace GithubV3Json {
    namespace Oidc {
      namespace GetCustomSubTemplateForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.OidcCustomSub;
      }

      namespace PutUpdateCustomSubTemplateForOrg {
        type Body = $schemas.OidcCustomSub;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.EmptyObject;
      }
    }
  }
}
