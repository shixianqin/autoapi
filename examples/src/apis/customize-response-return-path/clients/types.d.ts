declare namespace API {
  namespace CustomizeResponseReturnPath {
    namespace Clients {
      namespace GetClientOptions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The target language for the client library
           */
          language:
            | "ada"
            | "akka-scala"
            | "android"
            | "apex"
            | "bash"
            | "clojure"
            | "cpprest"
            | "csharp"
            | "csharp-dotnet2"
            | "cwiki"
            | "dart"
            | "dart-jaguar"
            | "dynamic-html"
            | "eiffel"
            | "elixir"
            | "elm"
            | "erlang-client"
            | "flash"
            | "go"
            | "groovy"
            | "haskell-http-client"
            | "html"
            | "html2"
            | "java"
            | "javascript"
            | "javascript-closure-angular"
            | "jaxrs-cxf-client"
            | "jmeter"
            | "kotlin"
            | "lua"
            | "objc"
            | "perl"
            | "php"
            | "powershell"
            | "python"
            | "qt5cpp"
            | "r"
            | "ruby"
            | "rust"
            | "scala"
            | "scalaz"
            | "swagger"
            | "swagger-yaml"
            | "swift"
            | "swift3"
            | "swift4"
            | "swift5"
            | "tizen"
            | "typescript-angular"
            | "typescript-angularjs"
            | "typescript-aurelia"
            | "typescript-fetch"
            | "typescript-inversify"
            | "typescript-jquery"
            | "typescript-node"
            | "ue4cpp";
        }

        interface Response {
          [P: string]: $schemas.CliOption;
        }
      }

      namespace GenerateClient {
        type Body = $schemas.GeneratorInput;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The target language for the client library
           */
          language:
            | "ada"
            | "akka-scala"
            | "android"
            | "apex"
            | "bash"
            | "clojure"
            | "cpprest"
            | "csharp"
            | "csharp-dotnet2"
            | "cwiki"
            | "dart"
            | "dart-jaguar"
            | "dynamic-html"
            | "eiffel"
            | "elixir"
            | "elm"
            | "erlang-client"
            | "flash"
            | "go"
            | "groovy"
            | "haskell-http-client"
            | "html"
            | "html2"
            | "java"
            | "javascript"
            | "javascript-closure-angular"
            | "jaxrs-cxf-client"
            | "jmeter"
            | "kotlin"
            | "lua"
            | "objc"
            | "perl"
            | "php"
            | "powershell"
            | "python"
            | "qt5cpp"
            | "r"
            | "ruby"
            | "rust"
            | "scala"
            | "scalaz"
            | "swagger"
            | "swagger-yaml"
            | "swift"
            | "swift3"
            | "swift4"
            | "swift5"
            | "tizen"
            | "typescript-angular"
            | "typescript-angularjs"
            | "typescript-aurelia"
            | "typescript-fetch"
            | "typescript-inversify"
            | "typescript-jquery"
            | "typescript-node"
            | "ue4cpp";
        }

        type Response = $schemas.ResponseCode;
      }

      namespace ClientOptions {
        interface Headers {
          [P: string]: any;
        }

        type Response = string[];
      }

      namespace DownloadFile {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          fileId: string;
        }

        type Response = string;
      }
    }
  }
}
