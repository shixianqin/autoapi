declare namespace API {
  namespace WhatsappV3Json {
    namespace Certificates {
      namespace GetDownloadCaCertificate {
        interface Headers {
          [P: string]: any;
        }

        type Response = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
      }

      namespace PostUploadCertificate {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;

        interface Headers {
          "Content-Type"?: "text/plain" | string;
          [P: string]: any;
        }
      }

      namespace DeleteWebhookCaCertificate {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace GetDownloadWebhookCaCertificate {
        interface Headers {
          [P: string]: any;
        }

        type Response = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
      }

      namespace PostUploadWebhookCaCertificate {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;

        interface Headers {
          "Content-Type"?: "text/plain" | string;
          [P: string]: any;
        }
      }
    }
  }
}
