declare namespace API {
  namespace WhatsappV3Json {
    namespace Contacts {
      namespace PostCheckContact {
        type Body = $schemas.CheckContactRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.CheckContactResponse;
      }
    }
  }
}
