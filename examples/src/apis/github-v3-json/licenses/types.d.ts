declare namespace API {
  namespace GithubV3Json {
    namespace Licenses {
      namespace GetLicenses {
        interface PathParams {
          license: string;
        }

        type Response = $schemas.License;
      }

      namespace GetAllCommonlyUsed {
        interface QueryParams {
          featured?: boolean;
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.LicenseSimple[];
      }

      namespace GetForRepo {
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

        type Response = $schemas.LicenseContent;
      }
    }
  }
}
