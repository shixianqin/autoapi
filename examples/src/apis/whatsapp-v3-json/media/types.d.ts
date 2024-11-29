declare namespace API {
  namespace WhatsappV3Json {
    namespace Media {
      namespace DeleteMedia {
        interface PathParams {
          MediaId: string;
        }
      }

      namespace GetDownload {
        interface PathParams {
          MediaId: string;
        }

        type Response = any;
      }

      namespace PostUpload {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;

        type Response = $schemas.UploadMediaResponse;
      }
    }
  }
}
