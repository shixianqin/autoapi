declare namespace API {
  namespace WhatsappV3Json {
    namespace TwoStepVerification {
      namespace DeleteDisableTwoStep {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace PostEnableTwoStep {
        type Body = $schemas.EnableTwoStepRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }
    }
  }
}
