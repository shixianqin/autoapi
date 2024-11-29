declare namespace API {
  namespace WhatsappV3Json {
    namespace Application {
      namespace PostSetShards {
        type Body = $schemas.SetShardsRequestBody;
      }

      namespace DeleteMediaProviders {
        interface PathParams {
          /**
           * Provider Name
           */
          ProviderName: string;
        }
      }

      namespace GetMediaProviders {
        type Response = $schemas.GetMediaProvidersResponse;
      }

      namespace PostUpdateMediaProviders {
        type Body = $schemas.MediaProvider[];
      }

      namespace DeleteResetSettings {}

      namespace GetSettings {
        type Response = $schemas.ApplicationSettings;
      }

      namespace PatchUpdateSettings {
        type Body = $schemas.ApplicationSettings;

        type Response = $schemas.Response;
      }
    }
  }
}
