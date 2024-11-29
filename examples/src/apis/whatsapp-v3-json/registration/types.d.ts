declare namespace API {
  namespace WhatsappV3Json {
    namespace Registration {
      namespace PostRegisterAccount {
        type Body = $schemas.RegisterAccountRequestBody;
      }

      namespace PostRequestCode {
        type Body = $schemas.RequestCodeRequestBody;

        type Response = $schemas.RequestCodeResponse;
      }
    }
  }
}
