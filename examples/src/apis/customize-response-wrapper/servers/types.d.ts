declare namespace API {
  namespace CustomizeResponseWrapper {
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

        type Response = ResponseWrapper<{
          [P: string]: $schemas.CliOption;
        }>;
      }

      namespace GenerateServerForLanguage {
        type Body = $schemas.GeneratorInput;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        type Response = ResponseWrapper<$schemas.ResponseCode>;
      }

      namespace ServerOptions {
        interface Headers {
          [P: string]: any;
        }

        type Response = ResponseWrapper<string[]>;
      }
    }
  }
}
