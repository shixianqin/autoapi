declare namespace API {
  namespace SwaggerHubV2Json {
    namespace Templates {
      namespace PostRenameTemplate {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
        }

        interface QueryParams {
          /**
           * New name
           */
          newName: string;
        }
      }

      namespace PostUpdateTemplateComments {
        type Body = $schemas.CommentsBatch;

        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetTemplateComments {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.ClosableComment[];
      }

      namespace PostForkTemplate {
        type Body = $schemas.ForkVersion;

        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetTemplateLifecycleSettings {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.LifecycleSettings;
      }

      namespace PutSetTemplateLifecycleSettings {
        type Body = $schemas.LifecycleSettings;

        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * Force update
           */
          force?: boolean;
        }
      }

      namespace GetTemplatePrivateSettings {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }

        type Response = $schemas.VisibilitySettings;
      }

      namespace PutSetTemplatePrivateSettings {
        type Body = $schemas.VisibilitySettings;

        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace DeleteTemplateVersion {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }
      }

      namespace GetTemplateDefinition {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
          /**
           * Version identifier
           */
          version: string;
        }

        interface QueryParams {
          /**
           * If set to `true`, it creates models from inline schemas in OpenAPI definition. AsyncAPI definitions cannot be flattened.
           */
          flatten?: boolean;
        }

        interface Response {}
      }

      namespace DeleteTemplate {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
        }
      }

      namespace GetTemplateVersions {
        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
        }

        type Response = $schemas.ApisJson;
      }

      namespace PostSaveTemplateDefinition {
        type Body = string;

        interface PathParams {
          /**
           * API, domain, or template owner identifier (case-sensitive)
           */
          owner: string;
          /**
           * Template identifier
           */
          templateId: string;
        }

        interface QueryParams {
          /**
           * Force update
           */
          force?: boolean;
          /**
           * Defines whether the API or template has to be private
           */
          isPrivate?: boolean;
          /**
           * The project to add the API, domain, or template to
           */
          projectName?: string;
          /**
           * Template version to create or update. If omitted, the version will be taken from the `info.version` field in the definition.
           */
          version?: string;
        }
      }

      namespace GetTemplates {
        interface QueryParams {
          /**
           * Owner name
           */
          owner?: string;
        }

        type Response = $schemas.TemplateWrapper;
      }
    }
  }
}
