declare namespace API {
  namespace WhatsappV3Json {
    namespace Profile {
      namespace GetAbout {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.GetProfileAboutResponse;
      }

      namespace PatchUpdateAbout {
        type Body = $schemas.ProfileAbout;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace GetPhoto {
        interface Headers {
          [P: string]: any;
        }

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

        interface Headers {
          "Content-Type"?: "multipart/form-data" | string;
          [P: string]: any;
        }
      }
    }
  }
}
