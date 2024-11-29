declare namespace API {
  namespace SwaggerHubV2Json {
    namespace Integrations {
      namespace PostExecuteIntegration {
        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
           */
          integrationId: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * Commit message for source control integrations
           */
          commitMessage?: string;
        }
      }

      namespace DeleteIntegration {
        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
           */
          integrationId: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetIntegrationById {
        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
           */
          integrationId: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.IntegrationConfiguration;
      }

      namespace PatchIntegration {
        interface Body {}

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
           */
          integrationId: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace PutUpdateIntegration {
        interface Body {}

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * Integration ID (case-sensitive). To get the available integration IDs, use `GET /apis/{owner}/{api}/{version}/integrations`
           */
          integrationId: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetIntegrations {
        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.IntegrationConfigurations;
      }

      namespace PostCreateIntegration {
        interface Body {}

        interface PathParams {
          /**
           * API name (case-sensitive)
           */
          api: string;
          /**
           * API owner (organization or user, case-sensitive)
           */
          owner: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.IntegrationConfiguration;
      }
    }
  }
}
