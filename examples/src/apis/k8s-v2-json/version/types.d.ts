declare namespace API {
  namespace K8sV2Json {
    namespace Version {
      namespace GetCode {
        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.IoK8sApimachineryPkgVersionInfo;
      }
    }
  }
}
