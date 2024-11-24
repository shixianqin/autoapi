declare namespace API {
  namespace WhatsappV3Json {
    namespace BusinessProfile {
      namespace GetBusinessProfile {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.GetBusinessProfileResponse;
      }

      namespace PostUpdate {
        type Body = $schemas.BusinessProfile;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }
    }
  }
}
