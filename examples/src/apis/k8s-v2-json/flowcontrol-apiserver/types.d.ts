declare namespace API {
  namespace K8sV2Json {
    namespace FlowcontrolApiserver {
      namespace GetApiGroup {
        interface Headers {
          "Content-Type"?:
            | "application/json"
            | "application/yaml"
            | "application/vnd.kubernetes.protobuf"
            | string;
          [P: string]: any;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1ApiGroup;
      }
    }
  }
}
