declare namespace API {
  namespace WhatsappV3Json {
    namespace Certificates {
      namespace GetDownloadCaCertificate {
        type Response = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
      }

      namespace PostUploadCertificate {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
      }

      namespace DeleteWebhookCaCertificate {}

      namespace GetDownloadWebhookCaCertificate {
        type Response = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
      }

      namespace PostUploadWebhookCaCertificate {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
      }
    }
  }
}
