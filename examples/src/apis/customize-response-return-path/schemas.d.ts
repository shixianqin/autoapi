declare namespace API {
  namespace CustomizeResponseReturnPath {
    namespace $schemas {
      interface AuthorizationValue {
        keyName?: string;
        type?: string;
        urlMatcher?: $schemas.UrlMatcher;
        value?: string;
      }

      interface CliOption {
        default?: string;
        description?: string;
        enum?: {
          [P: string]: string;
        };
        optionName?: string;
        /**
         * Data type is based on the types supported by the JSON-Schema
         */
        type?: string;
      }

      interface GeneratorInput {
        authorizationValue?: $schemas.AuthorizationValue;
        options?: {
          [P: string]: string;
        };
        securityDefinition?: $schemas.SecuritySchemeDefinition;
        spec?: {};
        swaggerUrl?: string;
        usingFlattenSpec?: boolean;
      }

      interface ResponseCode {
        /**
         * File download code
         */
        code?: string;
        /**
         * URL for fetching the generated client
         */
        link?: string;
      }

      interface SecuritySchemeDefinition {
        description?: string;
        type?: string;
      }

      interface UrlMatcher {}
    }
  }
}
