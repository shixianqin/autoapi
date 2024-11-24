import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/policy/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.PolicyV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetApiResources.Response>(
    "get",
    "/apis/policy/v1/",
    options || {},
  );
}

/**
 * read status of the specified PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status`
 */
export function getReadNamespacedPodDisruptionBudgetStatus(options: {
  pathParams: API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudgetStatus.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudgetStatus.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudgetStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudgetStatus.Response>(
    "get",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status`
 */
export function patchNamespacedPodDisruptionBudgetStatus(options: {
  pathParams: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudgetStatus.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudgetStatus.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudgetStatus.Headers;
  body?: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudgetStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudgetStatus.Response>(
    "patch",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}/status`
 */
export function putReplaceNamespacedPodDisruptionBudgetStatus(options: {
  pathParams: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudgetStatus.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudgetStatus.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudgetStatus.Headers;
  body?: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudgetStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudgetStatus.Response>(
    "put",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}`
 */
export function deleteNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.DeleteNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.DeleteNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.DeleteNamespacedPodDisruptionBudget.Headers;
  body?: API.K8sV2Json.PolicyV1.DeleteNamespacedPodDisruptionBudget.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.DeleteNamespacedPodDisruptionBudget.Response>(
    "delete",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}`
 */
export function getReadNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudget.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetReadNamespacedPodDisruptionBudget.Response>(
    "get",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}`
 */
export function patchNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudget.Headers;
  body?: API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudget.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.PatchNamespacedPodDisruptionBudget.Response>(
    "patch",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets/{name}`
 */
export function putReplaceNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudget.Headers;
  body?: API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudget.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.PutReplaceNamespacedPodDisruptionBudget.Response>(
    "put",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets`
 */
export function deleteCollectionNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.DeleteCollectionNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.DeleteCollectionNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.DeleteCollectionNamespacedPodDisruptionBudget.Headers;
  body?: API.K8sV2Json.PolicyV1.DeleteCollectionNamespacedPodDisruptionBudget.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.DeleteCollectionNamespacedPodDisruptionBudget.Response>(
    "delete",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets`,
    options,
  );
}

/**
 * list or watch objects of kind PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets`
 */
export function getListNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.GetListNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.GetListNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetListNamespacedPodDisruptionBudget.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetListNamespacedPodDisruptionBudget.Response>(
    "get",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets`,
    options,
  );
}

/**
 * create a PodDisruptionBudget
 * @path `/apis/policy/v1/namespaces/{namespace}/poddisruptionbudgets`
 */
export function postCreateNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.PostCreateNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.PostCreateNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.PostCreateNamespacedPodDisruptionBudget.Headers;
  body?: API.K8sV2Json.PolicyV1.PostCreateNamespacedPodDisruptionBudget.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.PostCreateNamespacedPodDisruptionBudget.Response>(
    "post",
    `/apis/policy/v1/namespaces/${options.pathParams.namespace}/poddisruptionbudgets`,
    options,
  );
}

/**
 * list or watch objects of kind PodDisruptionBudget
 * @path `/apis/policy/v1/poddisruptionbudgets`
 */
export function getListPodDisruptionBudgetForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.PolicyV1.GetListPodDisruptionBudgetForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetListPodDisruptionBudgetForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetListPodDisruptionBudgetForAllNamespaces.Response>(
    "get",
    "/apis/policy/v1/poddisruptionbudgets",
    options || {},
  );
}

/**
 * watch changes to an object of kind PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets/{name}`
 */
export function getWatchNamespacedPodDisruptionBudget(options: {
  pathParams: API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudget.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudget.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudget.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudget.Response>(
    "get",
    `/apis/policy/v1/watch/namespaces/${options.pathParams.namespace}/poddisruptionbudgets/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/policy/v1/watch/namespaces/{namespace}/poddisruptionbudgets`
 */
export function getWatchNamespacedPodDisruptionBudgetList(options: {
  pathParams: API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudgetList.PathParams;
  queryParams?: API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudgetList.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudgetList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetWatchNamespacedPodDisruptionBudgetList.Response>(
    "get",
    `/apis/policy/v1/watch/namespaces/${options.pathParams.namespace}/poddisruptionbudgets`,
    options,
  );
}

/**
 * watch individual changes to a list of PodDisruptionBudget. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/policy/v1/watch/poddisruptionbudgets`
 */
export function getWatchPodDisruptionBudgetListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.PolicyV1.GetWatchPodDisruptionBudgetListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.PolicyV1.GetWatchPodDisruptionBudgetListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.PolicyV1.GetWatchPodDisruptionBudgetListForAllNamespaces.Response>(
    "get",
    "/apis/policy/v1/watch/poddisruptionbudgets",
    options || {},
  );
}
