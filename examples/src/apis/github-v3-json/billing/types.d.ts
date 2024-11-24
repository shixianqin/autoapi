declare namespace API {
  namespace GithubV3Json {
    namespace Billing {
      namespace GetGithubActionsOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.ActionsBillingUsage;
      }

      namespace GetGithubPackagesOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.PackagesBillingUsage;
      }

      namespace GetSharedStorageOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.CombinedBillingUsage;
      }

      namespace GetGithubActionsUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.ActionsBillingUsage;
      }

      namespace GetGithubPackagesUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.PackagesBillingUsage;
      }

      namespace GetSharedStorageUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.CombinedBillingUsage;
      }
    }
  }
}
