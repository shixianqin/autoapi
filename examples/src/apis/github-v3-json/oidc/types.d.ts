declare namespace API {
  namespace GithubV3Json {
    namespace Oidc {
      namespace GetCustomSubTemplateForOrg {
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
