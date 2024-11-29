declare namespace API {
  namespace GithubV3Json {
    namespace Interactions {
      namespace DeleteRemoveRestrictionsForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetRestrictionsForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace PutSetRestrictionsForOrg {
        type Body = $schemas.InteractionLimit;

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace DeleteRemoveRestrictionsForRepo {
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
      }

      namespace GetRestrictionsForRepo {
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

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace PutSetRestrictionsForRepo {
        type Body = $schemas.InteractionLimit;

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

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace DeleteRemoveRestrictionsForAuthenticatedUser {}

      namespace GetRestrictionsForAuthenticatedUser {
        type Response = $schemas.InteractionLimitResponse;
      }

      namespace PutSetRestrictionsForAuthenticatedUser {
        type Body = $schemas.InteractionLimit;

        type Response = $schemas.InteractionLimitResponse;
      }
    }
  }
}
