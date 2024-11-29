declare namespace API {
  namespace GithubV3Json {
    namespace Billing {
      namespace GetGithubActionsOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.ActionsBillingUsage;
      }

      namespace GetGithubPackagesOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.PackagesBillingUsage;
      }

      namespace GetSharedStorageOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.CombinedBillingUsage;
      }

      namespace GetGithubActionsUser {
        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.ActionsBillingUsage;
      }

      namespace GetGithubPackagesUser {
        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.PackagesBillingUsage;
      }

      namespace GetSharedStorageUser {
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
