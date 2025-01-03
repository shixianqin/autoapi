declare namespace API {
  namespace CustomizeResponseWrapper {
    namespace Clients {
      namespace GetClientOptions {
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

        type Response = ResponseWrapper<{
          [P: string]: $schemas.CliOption;
        }>;
      }

      namespace GenerateClient {
        type Body = $schemas.GeneratorInput;

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

        type Response = ResponseWrapper<$schemas.ResponseCode>;
      }

      namespace ClientOptions {
        type Response = ResponseWrapper<string[]>;
      }

      namespace DownloadFile {
        interface PathParams {
          fileId: string;
        }

        type Response = ResponseWrapper<string>;
      }
    }
  }
}
