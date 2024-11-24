declare namespace API {
  namespace K8sV2Json {
    namespace Apis {
      namespace GetApiVersions {
        interface Headers {
          "Content-Type"?:
            | "application/json"
            | "application/yaml"
            | "application/vnd.kubernetes.protobuf"
            | string;
          [P: string]: any;
        }

        type Response = $schemas.IoK8sApimachineryPkgApisMetaV1ApiGroupList;
      }
    }
  }
}
