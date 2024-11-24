declare namespace API {
  namespace WhatsappV3Json {
    namespace Application {
      namespace PostSetShards {
        type Body = $schemas.SetShardsRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace DeleteMediaProviders {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Provider Name
           */
          ProviderName: string;
        }
      }

      namespace GetMediaProviders {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.GetMediaProvidersResponse;
      }

      namespace PostUpdateMediaProviders {
        type Body = $schemas.MediaProvider[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace DeleteResetSettings {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace GetSettings {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.ApplicationSettings;
      }

      namespace PatchUpdateSettings {
        type Body = $schemas.ApplicationSettings;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Response;
      }
    }
  }
}
