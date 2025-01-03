declare namespace API {
  namespace CustomizeResponseReturnPath {
    namespace Servers {
      namespace GetServerOptions {
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

      namespace GenerateServerForLanguage {
        type Body = $schemas.GeneratorInput;

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

        type Response = $schemas.ResponseCode;
      }

      namespace ServerOptions {
        type Response = string[];
      }
    }
  }
}
