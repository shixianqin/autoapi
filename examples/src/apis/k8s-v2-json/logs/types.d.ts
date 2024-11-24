declare namespace API {
  namespace K8sV2Json {
    namespace Logs {
      namespace GetLogFileListHandler {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace GetLogFileHandler {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * path to the log
           */
          logpath: string;
        }
      }
    }
  }
}
