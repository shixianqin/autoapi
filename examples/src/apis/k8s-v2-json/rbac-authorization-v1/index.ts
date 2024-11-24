import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * delete a ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}`
 */
export function deleteClusterRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRoleBinding.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRoleBinding.Response>(
    "delete",
    `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}`
 */
export function getReadClusterRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRoleBinding.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRoleBinding.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}`
 */
export function patchClusterRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRoleBinding.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PatchClusterRoleBinding.Response>(
    "patch",
    `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/{name}`
 */
export function putReplaceClusterRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRoleBinding.Headers;
  body: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRoleBinding.Response>(
    "put",
    `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`
 */
export function deleteCollectionClusterRoleBinding(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRoleBinding.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRoleBinding.Response>(
    "delete",
    "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings",
    options || {},
  );
}

/**
 * list or watch objects of kind ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`
 */
export function getListClusterRoleBinding(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetListClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetListClusterRoleBinding.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetListClusterRoleBinding.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings",
    options || {},
  );
}

/**
 * create a ClusterRoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterrolebindings`
 */
export function postCreateClusterRoleBinding(options: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRoleBinding.Headers;
  body: API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRoleBinding.Response>(
    "post",
    "/apis/rbac.authorization.k8s.io/v1/clusterrolebindings",
    options,
  );
}

/**
 * delete a ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}`
 */
export function deleteClusterRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteClusterRole.Response>(
    "delete",
    `/apis/rbac.authorization.k8s.io/v1/clusterroles/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}`
 */
export function getReadClusterRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRole.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetReadClusterRole.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/clusterroles/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}`
 */
export function patchClusterRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PatchClusterRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PatchClusterRole.Response>(
    "patch",
    `/apis/rbac.authorization.k8s.io/v1/clusterroles/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles/{name}`
 */
export function putReplaceClusterRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PutReplaceClusterRole.Response>(
    "put",
    `/apis/rbac.authorization.k8s.io/v1/clusterroles/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles`
 */
export function deleteCollectionClusterRole(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionClusterRole.Response>(
    "delete",
    "/apis/rbac.authorization.k8s.io/v1/clusterroles",
    options || {},
  );
}

/**
 * list or watch objects of kind ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles`
 */
export function getListClusterRole(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetListClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetListClusterRole.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetListClusterRole.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/clusterroles",
    options || {},
  );
}

/**
 * create a ClusterRole
 * @path `/apis/rbac.authorization.k8s.io/v1/clusterroles`
 */
export function postCreateClusterRole(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PostCreateClusterRole.Response>(
    "post",
    "/apis/rbac.authorization.k8s.io/v1/clusterroles",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/rbac.authorization.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetApiResources.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete a RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}`
 */
export function deleteNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRoleBinding.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRoleBinding.Response>(
    "delete",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}`
 */
export function getReadNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRoleBinding.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRoleBinding.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}`
 */
export function patchNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRoleBinding.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRoleBinding.Response>(
    "patch",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings/{name}`
 */
export function putReplaceNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRoleBinding.Headers;
  body: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRoleBinding.Response>(
    "put",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings`
 */
export function deleteCollectionNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRoleBinding.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRoleBinding.Response>(
    "delete",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings`,
    options,
  );
}

/**
 * list or watch objects of kind RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings`
 */
export function getListNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRoleBinding.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRoleBinding.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings`,
    options,
  );
}

/**
 * create a RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/rolebindings`
 */
export function postCreateNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRoleBinding.Headers;
  body: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRoleBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRoleBinding.Response>(
    "post",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/rolebindings`,
    options,
  );
}

/**
 * delete a Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}`
 */
export function deleteNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteNamespacedRole.Response>(
    "delete",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}`
 */
export function getReadNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRole.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetReadNamespacedRole.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}`
 */
export function patchNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PatchNamespacedRole.Response>(
    "patch",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles/{name}`
 */
export function putReplaceNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PutReplaceNamespacedRole.Response>(
    "put",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles`
 */
export function deleteCollectionNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.DeleteCollectionNamespacedRole.Response>(
    "delete",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles`,
    options,
  );
}

/**
 * list or watch objects of kind Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles`
 */
export function getListNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRole.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetListNamespacedRole.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles`,
    options,
  );
}

/**
 * create a Role
 * @path `/apis/rbac.authorization.k8s.io/v1/namespaces/{namespace}/roles`
 */
export function postCreateNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRole.Headers;
  body?: API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRole.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.PostCreateNamespacedRole.Response>(
    "post",
    `/apis/rbac.authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/roles`,
    options,
  );
}

/**
 * list or watch objects of kind RoleBinding
 * @path `/apis/rbac.authorization.k8s.io/v1/rolebindings`
 */
export function getListRoleBindingForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetListRoleBindingForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetListRoleBindingForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetListRoleBindingForAllNamespaces.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/rolebindings",
    options || {},
  );
}

/**
 * list or watch objects of kind Role
 * @path `/apis/rbac.authorization.k8s.io/v1/roles`
 */
export function getListRoleForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetListRoleForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetListRoleForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetListRoleForAllNamespaces.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/roles",
    options || {},
  );
}

/**
 * watch changes to an object of kind ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/{name}`
 */
export function getWatchClusterRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBinding.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBinding.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings`
 */
export function getWatchClusterRoleBindingList(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBindingList.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBindingList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleBindingList.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings",
    options || {},
  );
}

/**
 * watch changes to an object of kind ClusterRole. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/{name}`
 */
export function getWatchClusterRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRole.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRole.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ClusterRole. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/clusterroles`
 */
export function getWatchClusterRoleList(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleList.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchClusterRoleList.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/watch/clusterroles",
    options || {},
  );
}

/**
 * watch changes to an object of kind RoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings/{name}`
 */
export function getWatchNamespacedRoleBinding(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBinding.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBinding.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBinding.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBinding.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/rolebindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/rolebindings`
 */
export function getWatchNamespacedRoleBindingList(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBindingList.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBindingList.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBindingList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleBindingList.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/rolebindings`,
    options,
  );
}

/**
 * watch changes to an object of kind Role. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles/{name}`
 */
export function getWatchNamespacedRole(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRole.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRole.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRole.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRole.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/roles/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Role. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/{namespace}/roles`
 */
export function getWatchNamespacedRoleList(options: {
  pathParams: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleList.PathParams;
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleList.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchNamespacedRoleList.Response>(
    "get",
    `/apis/rbac.authorization.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/roles`,
    options,
  );
}

/**
 * watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/rolebindings`
 */
export function getWatchRoleBindingListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchRoleBindingListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchRoleBindingListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchRoleBindingListForAllNamespaces.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/watch/rolebindings",
    options || {},
  );
}

/**
 * watch individual changes to a list of Role. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/rbac.authorization.k8s.io/v1/watch/roles`
 */
export function getWatchRoleListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.RbacAuthorizationV1.GetWatchRoleListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.RbacAuthorizationV1.GetWatchRoleListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.RbacAuthorizationV1.GetWatchRoleListForAllNamespaces.Response>(
    "get",
    "/apis/rbac.authorization.k8s.io/v1/watch/roles",
    options || {},
  );
}
