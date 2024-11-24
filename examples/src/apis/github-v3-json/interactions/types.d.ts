declare namespace API {
  namespace GithubV3Json {
    namespace Interactions {
      namespace DeleteRemoveRestrictionsForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetRestrictionsForOrg {
        interface Headers {
          [P: string]: any;
        }

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

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace DeleteRemoveRestrictionsForRepo {
        interface Headers {
          [P: string]: any;
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
      }

      namespace GetRestrictionsForRepo {
        interface Headers {
          [P: string]: any;
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

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace PutSetRestrictionsForRepo {
        type Body = $schemas.InteractionLimit;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
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

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace DeleteRemoveRestrictionsForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace GetRestrictionsForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.InteractionLimitResponse;
      }

      namespace PutSetRestrictionsForAuthenticatedUser {
        type Body = $schemas.InteractionLimit;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.InteractionLimitResponse;
      }
    }
  }
}
