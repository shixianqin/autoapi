declare namespace API {
  namespace WhatsappV3Json {
    namespace Messages {
      namespace PutMarkMessageAsRead {
        type Body = $schemas.MarkMessageAsReadRequestBody;

        interface PathParams {
          /**
           * Message ID from Webhook
           */
          MessageID: string;
        }
      }

      namespace PostSendMessage {
        type Body = $schemas.SendMessageRequestBody;

        type Response = $schemas.MessageResponse;
      }
    }
  }
}
