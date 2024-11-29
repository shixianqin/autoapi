import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/coordination.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetApiResources.Response>(
    "get",
    "/apis/coordination.k8s.io/v1/",
    options || {},
  );
}

/**
 * list or watch objects of kind Lease
 * @path `/apis/coordination.k8s.io/v1/leases`
 */
export function getListLeaseForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoordinationV1.GetListLeaseForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetListLeaseForAllNamespaces.Response>(
    "get",
    "/apis/coordination.k8s.io/v1/leases",
    options || {},
  );
}

/**
 * delete a Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`
 */
export function deleteNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.DeleteNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.DeleteNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoordinationV1.DeleteNamespacedLease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.DeleteNamespacedLease.Response>(
    "delete",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`
 */
export function getReadNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.GetReadNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.GetReadNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetReadNamespacedLease.Response>(
    "get",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`
 */
export function patchNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.PatchNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.PatchNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoordinationV1.PatchNamespacedLease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.PatchNamespacedLease.Response>(
    "patch",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases/{name}`
 */
export function putReplaceNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.PutReplaceNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.PutReplaceNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoordinationV1.PutReplaceNamespacedLease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.PutReplaceNamespacedLease.Response>(
    "put",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`
 */
export function deleteCollectionNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.DeleteCollectionNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.DeleteCollectionNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoordinationV1.DeleteCollectionNamespacedLease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.DeleteCollectionNamespacedLease.Response>(
    "delete",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases`,
    options,
  );
}

/**
 * list or watch objects of kind Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`
 */
export function getListNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.GetListNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.GetListNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetListNamespacedLease.Response>(
    "get",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases`,
    options,
  );
}

/**
 * create a Lease
 * @path `/apis/coordination.k8s.io/v1/namespaces/{namespace}/leases`
 */
export function postCreateNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.PostCreateNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.PostCreateNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoordinationV1.PostCreateNamespacedLease.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.PostCreateNamespacedLease.Response>(
    "post",
    `/apis/coordination.k8s.io/v1/namespaces/${options.pathParams.namespace}/leases`,
    options,
  );
}

/**
 * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/coordination.k8s.io/v1/watch/leases`
 */
export function getWatchLeaseListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoordinationV1.GetWatchLeaseListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetWatchLeaseListForAllNamespaces.Response>(
    "get",
    "/apis/coordination.k8s.io/v1/watch/leases",
    options || {},
  );
}

/**
 * watch changes to an object of kind Lease. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases/{name}`
 */
export function getWatchNamespacedLease(options: {
  pathParams: API.K8sV2Json.CoordinationV1.GetWatchNamespacedLease.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.GetWatchNamespacedLease.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetWatchNamespacedLease.Response>(
    "get",
    `/apis/coordination.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/leases/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Lease. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/coordination.k8s.io/v1/watch/namespaces/{namespace}/leases`
 */
export function getWatchNamespacedLeaseList(options: {
  pathParams: API.K8sV2Json.CoordinationV1.GetWatchNamespacedLeaseList.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1.GetWatchNamespacedLeaseList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1.GetWatchNamespacedLeaseList.Response>(
    "get",
    `/apis/coordination.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/leases`,
    options,
  );
}
