declare namespace API {
  namespace WhatsappV3Json {
    namespace Messages {
      namespace PutMarkMessageAsRead {
        type Body = $schemas.MarkMessageAsReadRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Message ID from Webhook
           */
          MessageID: string;
        }
      }

      namespace PostSendMessage {
        type Body = $schemas.SendMessageRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.MessageResponse;
      }
    }
  }
}
