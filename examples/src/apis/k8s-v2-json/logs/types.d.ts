declare namespace API {
  namespace K8sV2Json {
    namespace Logs {
      namespace GetLogFileListHandler {}

      namespace GetLogFileHandler {
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
