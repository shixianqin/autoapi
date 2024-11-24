declare namespace API {
  namespace CustomizeFilter {
    namespace Actions {
      namespace GetCacheUsageForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.ActionsCacheUsageOrgEnterprise;
      }
    }
  }
}
