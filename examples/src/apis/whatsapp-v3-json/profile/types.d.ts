declare namespace API {
  namespace WhatsappV3Json {
    namespace Profile {
      namespace GetAbout {
        type Response = $schemas.GetProfileAboutResponse;
      }

      namespace PatchUpdateAbout {
        type Body = $schemas.ProfileAbout;
      }

      namespace GetPhoto {
        interface QueryParams {
          format?: string;
        }

        type Response =
          | $schemas.GetProfilePhotoResponse
          | (ArrayBuffer | ArrayBufferView | Blob | Buffer | File);
      }

      namespace PostUpdatePhoto {
        interface FormData {
          /**
           * @format binary
           */
          File: ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
        }
      }
    }
  }
}
