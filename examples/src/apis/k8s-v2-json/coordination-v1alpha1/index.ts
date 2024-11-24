import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/coordination.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/coordination.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * list or watch objects of kind LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/leasecandidates`
 */
export function getListLeaseCandidateForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.GetListLeaseCandidateForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetListLeaseCandidateForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetListLeaseCandidateForAllNamespaces.Response>(
    "get",
    "/apis/coordination.k8s.io/v1alpha1/leasecandidates",
    options || {},
  );
}

/**
 * delete a LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates/{name}`
 */
export function deleteNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.DeleteNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.DeleteNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.DeleteNamespacedLeaseCandidate.Headers;
  body?: API.K8sV2Json.CoordinationV1alpha1.DeleteNamespacedLeaseCandidate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.DeleteNamespacedLeaseCandidate.Response>(
    "delete",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates/{name}`
 */
export function getReadNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.GetReadNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.GetReadNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetReadNamespacedLeaseCandidate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetReadNamespacedLeaseCandidate.Response>(
    "get",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates/{name}`
 */
export function patchNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.PatchNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.PatchNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.PatchNamespacedLeaseCandidate.Headers;
  body?: API.K8sV2Json.CoordinationV1alpha1.PatchNamespacedLeaseCandidate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.PatchNamespacedLeaseCandidate.Response>(
    "patch",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates/{name}`
 */
export function putReplaceNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.PutReplaceNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.PutReplaceNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.PutReplaceNamespacedLeaseCandidate.Headers;
  body?: API.K8sV2Json.CoordinationV1alpha1.PutReplaceNamespacedLeaseCandidate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.PutReplaceNamespacedLeaseCandidate.Response>(
    "put",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates`
 */
export function deleteCollectionNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.DeleteCollectionNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.DeleteCollectionNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.DeleteCollectionNamespacedLeaseCandidate.Headers;
  body?: API.K8sV2Json.CoordinationV1alpha1.DeleteCollectionNamespacedLeaseCandidate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.DeleteCollectionNamespacedLeaseCandidate.Response>(
    "delete",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates`,
    options,
  );
}

/**
 * list or watch objects of kind LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates`
 */
export function getListNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.GetListNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.GetListNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetListNamespacedLeaseCandidate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetListNamespacedLeaseCandidate.Response>(
    "get",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates`,
    options,
  );
}

/**
 * create a LeaseCandidate
 * @path `/apis/coordination.k8s.io/v1alpha1/namespaces/{namespace}/leasecandidates`
 */
export function postCreateNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.PostCreateNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.PostCreateNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.PostCreateNamespacedLeaseCandidate.Headers;
  body?: API.K8sV2Json.CoordinationV1alpha1.PostCreateNamespacedLeaseCandidate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.PostCreateNamespacedLeaseCandidate.Response>(
    "post",
    `/apis/coordination.k8s.io/v1alpha1/namespaces/${options.pathParams.namespace}/leasecandidates`,
    options,
  );
}

/**
 * watch individual changes to a list of LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/coordination.k8s.io/v1alpha1/watch/leasecandidates`
 */
export function getWatchLeaseCandidateListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.GetWatchLeaseCandidateListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetWatchLeaseCandidateListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetWatchLeaseCandidateListForAllNamespaces.Response>(
    "get",
    "/apis/coordination.k8s.io/v1alpha1/watch/leasecandidates",
    options || {},
  );
}

/**
 * watch changes to an object of kind LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/coordination.k8s.io/v1alpha1/watch/namespaces/{namespace}/leasecandidates/{name}`
 */
export function getWatchNamespacedLeaseCandidate(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidate.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidate.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidate.Response>(
    "get",
    `/apis/coordination.k8s.io/v1alpha1/watch/namespaces/${options.pathParams.namespace}/leasecandidates/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of LeaseCandidate. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/coordination.k8s.io/v1alpha1/watch/namespaces/{namespace}/leasecandidates`
 */
export function getWatchNamespacedLeaseCandidateList(options: {
  pathParams: API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidateList.PathParams;
  queryParams?: API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidateList.QueryParams;
  headers?: API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidateList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoordinationV1alpha1.GetWatchNamespacedLeaseCandidateList.Response>(
    "get",
    `/apis/coordination.k8s.io/v1alpha1/watch/namespaces/${options.pathParams.namespace}/leasecandidates`,
    options,
  );
}
