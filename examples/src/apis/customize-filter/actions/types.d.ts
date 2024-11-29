declare namespace API {
  namespace CustomizeFilter {
    namespace Actions {
      namespace GetCacheUsageForOrg {
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
