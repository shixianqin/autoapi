import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/rbac.authorization.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: API.K8sV2Json.RbacAuthorization.GetApiGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorization.GetApiGroup.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/",
    options || {},
  );
}
