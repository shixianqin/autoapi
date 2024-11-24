declare namespace API {
  namespace WhatsappV3Json {
    namespace Media {
      namespace DeleteMedia {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          MediaId: string;
        }
      }

      namespace GetDownload {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          MediaId: string;
        }

        type Response = any;
      }

      namespace PostUpload {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;

        interface Headers {
          "Content-Type"?:
            | "application/msword"
            | "application/pdf"
            | "application/vnd.ms-excel"
            | "application/vnd.ms-powerpoint"
            | "audio/acc"
            | "audio/amr"
            | "audio/mp4"
            | "audio/mpeg"
            | "audio/ogg"
            | "codecs=opus"
            | "image/jpeg"
            | "image/png"
            | "text/plain"
            | "video/mp4"
            | string;
          [P: string]: any;
        }

        type Response = $schemas.UploadMediaResponse;
      }
    }
  }
}
