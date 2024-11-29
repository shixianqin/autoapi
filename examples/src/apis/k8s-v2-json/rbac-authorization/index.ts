import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get information of a group
 * @path `/apis/rbac.authorization.k8s.io/`
 */
export function getApiGroup(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorization.GetApiGroup.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/",
    options || {},
  );
}
