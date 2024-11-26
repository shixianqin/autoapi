declare namespace API {
  namespace SwaggerGeneratorV2Json {
    namespace Servers {
      namespace GetServerOptions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The target language for the server framework
           */
          framework:
            | "ada-server"
            | "aspnetcore"
            | "erlang-server"
            | "finch"
            | "go-server"
            | "haskell"
            | "inflector"
            | "java-pkmst"
            | "java-play-framework"
            | "java-vertx"
            | "jaxrs"
            | "jaxrs-cxf"
            | "jaxrs-cxf-cdi"
            | "jaxrs-resteasy"
            | "jaxrs-resteasy-eap"
            | "jaxrs-spec"
            | "kotlin-server"
            | "lumen"
            | "msf4j"
            | "nancyfx"
            | "nodejs-server"
            | "php-silex"
            | "php-symfony"
            | "pistache-server"
            | "python-flask"
            | "rails5"
            | "restbed"
            | "rust-server"
            | "scala-lagom-server"
            | "scalatra"
            | "sinatra"
            | "slim"
            | "spring"
            | "undertow"
            | "ze-ph";
        }

        interface Response {
          [P: string]: $schemas.CliOption;
        }
      }

      namespace PostGenerateServerForLanguage {
        type Body = $schemas.GeneratorInput;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * framework
           */
          framework:
            | "ada-server"
            | "aspnetcore"
            | "erlang-server"
            | "finch"
            | "go-server"
            | "haskell"
            | "inflector"
            | "java-pkmst"
            | "java-play-framework"
            | "java-vertx"
            | "jaxrs"
            | "jaxrs-cxf"
            | "jaxrs-cxf-cdi"
            | "jaxrs-resteasy"
            | "jaxrs-resteasy-eap"
            | "jaxrs-spec"
            | "kotlin-server"
            | "lumen"
            | "msf4j"
            | "nancyfx"
            | "nodejs-server"
            | "php-silex"
            | "php-symfony"
            | "pistache-server"
            | "python-flask"
            | "rails5"
            | "restbed"
            | "rust-server"
            | "scala-lagom-server"
            | "scalatra"
            | "sinatra"
            | "slim"
            | "spring"
            | "undertow"
            | "ze-ph";
        }

        type Response = $schemas.ResponseCode;
      }

      namespace GetServerOptions2 {
        interface Headers {
          [P: string]: any;
        }

        type Response = string[];
      }
    }
  }
}
