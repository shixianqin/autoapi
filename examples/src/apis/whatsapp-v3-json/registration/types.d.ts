declare namespace API {
  namespace WhatsappV3Json {
    namespace Registration {
      namespace PostRegisterAccount {
        type Body = $schemas.RegisterAccountRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace PostRequestCode {
        type Body = $schemas.RequestCodeRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.RequestCodeResponse;
      }
    }
  }
}
