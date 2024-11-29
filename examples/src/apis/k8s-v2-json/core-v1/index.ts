import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * read the specified ComponentStatus
 * @path `/api/v1/componentstatuses/{name}`
 */
export function getReadComponentStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadComponentStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadComponentStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadComponentStatus.Response>(
    "get",
    `/api/v1/componentstatuses/${options.pathParams.name}`,
    options,
  );
}

/**
 * list objects of kind ComponentStatus
 * @path `/api/v1/componentstatuses`
 */
export function getListComponentStatus(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListComponentStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListComponentStatus.Response>(
    "get",
    "/api/v1/componentstatuses",
    options || {},
  );
}

/**
 * list or watch objects of kind ConfigMap
 * @path `/api/v1/configmaps`
 */
export function getListConfigMapForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListConfigMapForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListConfigMapForAllNamespaces.Response>(
    "get",
    "/api/v1/configmaps",
    options || {},
  );
}

/**
 * list or watch objects of kind Endpoints
 * @path `/api/v1/endpoints`
 */
export function getListEndpointsForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListEndpointsForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListEndpointsForAllNamespaces.Response>(
    "get",
    "/api/v1/endpoints",
    options || {},
  );
}

/**
 * list or watch objects of kind Event
 * @path `/api/v1/events`
 */
export function getListEventForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListEventForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListEventForAllNamespaces.Response>(
    "get",
    "/api/v1/events",
    options || {},
  );
}

/**
 * get available resources
 * @path `/api/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetApiResources.Response>(
    "get",
    "/api/v1/",
    options || {},
  );
}

/**
 * list or watch objects of kind LimitRange
 * @path `/api/v1/limitranges`
 */
export function getListLimitRangeForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListLimitRangeForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListLimitRangeForAllNamespaces.Response>(
    "get",
    "/api/v1/limitranges",
    options || {},
  );
}

/**
 * create a Binding
 * @path `/api/v1/namespaces/{namespace}/bindings`
 */
export function postCreateNamespacedBinding(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedBinding.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedBinding.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CoreV1.PostCreateNamespacedBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedBinding.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/bindings`,
    options,
  );
}

/**
 * delete a ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps/{name}`
 */
export function deleteNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedConfigMap.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedConfigMap.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps/{name}`
 */
export function getReadNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedConfigMap.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps/{name}`
 */
export function patchNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedConfigMap.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedConfigMap.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps/{name}`
 */
export function putReplaceNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedConfigMap.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedConfigMap.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps`
 */
export function deleteCollectionNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedConfigMap.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedConfigMap.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps`,
    options,
  );
}

/**
 * list or watch objects of kind ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps`
 */
export function getListNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedConfigMap.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps`,
    options,
  );
}

/**
 * create a ConfigMap
 * @path `/api/v1/namespaces/{namespace}/configmaps`
 */
export function postCreateNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedConfigMap.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedConfigMap.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/configmaps`,
    options,
  );
}

/**
 * delete Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints/{name}`
 */
export function deleteNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedEndpoints.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedEndpoints.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints/{name}`
 */
export function getReadNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedEndpoints.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints/{name}`
 */
export function patchNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedEndpoints.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedEndpoints.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints/{name}`
 */
export function putReplaceNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedEndpoints.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedEndpoints.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints`
 */
export function deleteCollectionNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEndpoints.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEndpoints.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints`,
    options,
  );
}

/**
 * list or watch objects of kind Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints`
 */
export function getListNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedEndpoints.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints`,
    options,
  );
}

/**
 * create Endpoints
 * @path `/api/v1/namespaces/{namespace}/endpoints`
 */
export function postCreateNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedEndpoints.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedEndpoints.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/endpoints`,
    options,
  );
}

/**
 * delete an Event
 * @path `/api/v1/namespaces/{namespace}/events/{name}`
 */
export function deleteNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedEvent.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Event
 * @path `/api/v1/namespaces/{namespace}/events/{name}`
 */
export function getReadNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedEvent.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Event
 * @path `/api/v1/namespaces/{namespace}/events/{name}`
 */
export function patchNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedEvent.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Event
 * @path `/api/v1/namespaces/{namespace}/events/{name}`
 */
export function putReplaceNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CoreV1.PutReplaceNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedEvent.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Event
 * @path `/api/v1/namespaces/{namespace}/events`
 */
export function deleteCollectionNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedEvent.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * list or watch objects of kind Event
 * @path `/api/v1/namespaces/{namespace}/events`
 */
export function getListNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedEvent.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * create an Event
 * @path `/api/v1/namespaces/{namespace}/events`
 */
export function postCreateNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CoreV1.PostCreateNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedEvent.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * delete a LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges/{name}`
 */
export function deleteNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedLimitRange.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedLimitRange.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges/{name}`
 */
export function getReadNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedLimitRange.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges/{name}`
 */
export function patchNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedLimitRange.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedLimitRange.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges/{name}`
 */
export function putReplaceNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedLimitRange.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedLimitRange.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges`
 */
export function deleteCollectionNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedLimitRange.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedLimitRange.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges`,
    options,
  );
}

/**
 * list or watch objects of kind LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges`
 */
export function getListNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedLimitRange.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges`,
    options,
  );
}

/**
 * create a LimitRange
 * @path `/api/v1/namespaces/{namespace}/limitranges`
 */
export function postCreateNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedLimitRange.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedLimitRange.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/limitranges`,
    options,
  );
}

/**
 * read status of the specified PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status`
 */
export function getReadNamespacedPersistentVolumeClaimStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPersistentVolumeClaimStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPersistentVolumeClaimStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPersistentVolumeClaimStatus.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status`
 */
export function patchNamespacedPersistentVolumeClaimStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaimStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaimStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaimStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaimStatus.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}/status`
 */
export function putReplaceNamespacedPersistentVolumeClaimStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaimStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaimStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaimStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaimStatus.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}`
 */
export function deleteNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedPersistentVolumeClaim.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedPersistentVolumeClaim.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}`
 */
export function getReadNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPersistentVolumeClaim.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}`
 */
export function patchNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaim.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedPersistentVolumeClaim.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims/{name}`
 */
export function putReplaceNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaim.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedPersistentVolumeClaim.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims`
 */
export function deleteCollectionNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPersistentVolumeClaim.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPersistentVolumeClaim.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims`,
    options,
  );
}

/**
 * list or watch objects of kind PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims`
 */
export function getListNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedPersistentVolumeClaim.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims`,
    options,
  );
}

/**
 * create a PersistentVolumeClaim
 * @path `/api/v1/namespaces/{namespace}/persistentvolumeclaims`
 */
export function postCreateNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedPersistentVolumeClaim.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedPersistentVolumeClaim.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/persistentvolumeclaims`,
    options,
  );
}

/**
 * connect GET requests to attach of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/attach`
 */
export function getConnectNamespacedPodAttach(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedPodAttach.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedPodAttach.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedPodAttach.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/attach`,
    options,
  );
}

/**
 * connect POST requests to attach of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/attach`
 */
export function postConnectNamespacedPodAttach(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedPodAttach.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedPodAttach.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedPodAttach.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/attach`,
    options,
  );
}

/**
 * create binding of a Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/binding`
 */
export function postCreateNamespacedPodBinding(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedPodBinding.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedPodBinding.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CoreV1.PostCreateNamespacedPodBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedPodBinding.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/binding`,
    options,
  );
}

/**
 * read ephemeralcontainers of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers`
 */
export function getReadNamespacedPodEphemeralcontainers(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPodEphemeralcontainers.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPodEphemeralcontainers.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPodEphemeralcontainers.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/ephemeralcontainers`,
    options,
  );
}

/**
 * partially update ephemeralcontainers of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers`
 */
export function patchNamespacedPodEphemeralcontainers(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedPodEphemeralcontainers.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedPodEphemeralcontainers.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedPodEphemeralcontainers.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedPodEphemeralcontainers.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/ephemeralcontainers`,
    options,
  );
}

/**
 * replace ephemeralcontainers of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/ephemeralcontainers`
 */
export function putReplaceNamespacedPodEphemeralcontainers(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodEphemeralcontainers.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodEphemeralcontainers.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodEphemeralcontainers.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedPodEphemeralcontainers.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/ephemeralcontainers`,
    options,
  );
}

/**
 * create eviction of a Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/eviction`
 */
export function postCreateNamespacedPodEviction(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedPodEviction.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedPodEviction.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedPodEviction.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedPodEviction.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/eviction`,
    options,
  );
}

/**
 * connect GET requests to exec of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/exec`
 */
export function getConnectNamespacedPodExec(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedPodExec.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedPodExec.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedPodExec.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/exec`,
    options,
  );
}

/**
 * connect POST requests to exec of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/exec`
 */
export function postConnectNamespacedPodExec(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedPodExec.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedPodExec.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedPodExec.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/exec`,
    options,
  );
}

/**
 * read log of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/log`
 */
export function getReadNamespacedPodLog(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPodLog.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPodLog.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPodLog.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/log`,
    options,
  );
}

/**
 * connect GET requests to portforward of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/portforward`
 */
export function getConnectNamespacedPodPortforward(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedPodPortforward.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedPodPortforward.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedPodPortforward.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/portforward`,
    options,
  );
}

/**
 * connect POST requests to portforward of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/portforward`
 */
export function postConnectNamespacedPodPortforward(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedPodPortforward.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedPodPortforward.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedPodPortforward.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/portforward`,
    options,
  );
}

/**
 * connect DELETE requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function deleteConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteConnectNamespacedPodProxyWithPath.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect GET requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function getConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedPodProxyWithPath.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect HEAD requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function headConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.HeadConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.HeadConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.HeadConnectNamespacedPodProxyWithPath.Response>(
    "head",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect OPTIONS requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function optionsConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.OptionsConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.OptionsConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.OptionsConnectNamespacedPodProxyWithPath.Response>(
    "options",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect PATCH requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function patchConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchConnectNamespacedPodProxyWithPath.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect POST requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function postConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedPodProxyWithPath.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect PUT requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy/{path}`
 */
export function putConnectNamespacedPodProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PutConnectNamespacedPodProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutConnectNamespacedPodProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutConnectNamespacedPodProxyWithPath.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect DELETE requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function deleteConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteConnectNamespacedPodProxy.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect GET requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function getConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedPodProxy.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect HEAD requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function headConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.HeadConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.HeadConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.HeadConnectNamespacedPodProxy.Response>(
    "head",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect OPTIONS requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function optionsConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.OptionsConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.OptionsConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.OptionsConnectNamespacedPodProxy.Response>(
    "options",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect PATCH requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function patchConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchConnectNamespacedPodProxy.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect POST requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function postConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedPodProxy.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect PUT requests to proxy of Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/proxy`
 */
export function putConnectNamespacedPodProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PutConnectNamespacedPodProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutConnectNamespacedPodProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutConnectNamespacedPodProxy.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * read status of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/status`
 */
export function getReadNamespacedPodStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPodStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPodStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPodStatus.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/status`
 */
export function patchNamespacedPodStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedPodStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedPodStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedPodStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedPodStatus.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}/status`
 */
export function putReplaceNamespacedPodStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedPodStatus.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}`
 */
export function deleteNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedPod.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedPod.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}`
 */
export function getReadNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPod.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}`
 */
export function patchNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedPod.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedPod.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Pod
 * @path `/api/v1/namespaces/{namespace}/pods/{name}`
 */
export function putReplaceNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPod.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedPod.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Pod
 * @path `/api/v1/namespaces/{namespace}/pods`
 */
export function deleteCollectionNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPod.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPod.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods`,
    options,
  );
}

/**
 * list or watch objects of kind Pod
 * @path `/api/v1/namespaces/{namespace}/pods`
 */
export function getListNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedPod.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods`,
    options,
  );
}

/**
 * create a Pod
 * @path `/api/v1/namespaces/{namespace}/pods`
 */
export function postCreateNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedPod.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedPod.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/pods`,
    options,
  );
}

/**
 * delete a PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates/{name}`
 */
export function deleteNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedPodTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedPodTemplate.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates/{name}`
 */
export function getReadNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedPodTemplate.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates/{name}`
 */
export function patchNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedPodTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedPodTemplate.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates/{name}`
 */
export function putReplaceNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedPodTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedPodTemplate.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates`
 */
export function deleteCollectionNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPodTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedPodTemplate.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates`,
    options,
  );
}

/**
 * list or watch objects of kind PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates`
 */
export function getListNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedPodTemplate.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates`,
    options,
  );
}

/**
 * create a PodTemplate
 * @path `/api/v1/namespaces/{namespace}/podtemplates`
 */
export function postCreateNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedPodTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedPodTemplate.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/podtemplates`,
    options,
  );
}

/**
 * read scale of the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale`
 */
export function getReadNamespacedReplicationControllerScale(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedReplicationControllerScale.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedReplicationControllerScale.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedReplicationControllerScale.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * partially update scale of the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale`
 */
export function patchNamespacedReplicationControllerScale(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerScale.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerScale.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerScale.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerScale.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * replace scale of the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/scale`
 */
export function putReplaceNamespacedReplicationControllerScale(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerScale.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerScale.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerScale.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerScale.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * read status of the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status`
 */
export function getReadNamespacedReplicationControllerStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedReplicationControllerStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedReplicationControllerStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedReplicationControllerStatus.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status`
 */
export function patchNamespacedReplicationControllerStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedReplicationControllerStatus.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}/status`
 */
export function putReplaceNamespacedReplicationControllerStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationControllerStatus.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}`
 */
export function deleteNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedReplicationController.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedReplicationController.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}`
 */
export function getReadNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedReplicationController.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}`
 */
export function patchNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedReplicationController.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedReplicationController.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers/{name}`
 */
export function putReplaceNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationController.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedReplicationController.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers`
 */
export function deleteCollectionNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedReplicationController.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedReplicationController.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers`,
    options,
  );
}

/**
 * list or watch objects of kind ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers`
 */
export function getListNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedReplicationController.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers`,
    options,
  );
}

/**
 * create a ReplicationController
 * @path `/api/v1/namespaces/{namespace}/replicationcontrollers`
 */
export function postCreateNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedReplicationController.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedReplicationController.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/replicationcontrollers`,
    options,
  );
}

/**
 * read status of the specified ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}/status`
 */
export function getReadNamespacedResourceQuotaStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedResourceQuotaStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedResourceQuotaStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedResourceQuotaStatus.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}/status`
 */
export function patchNamespacedResourceQuotaStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedResourceQuotaStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedResourceQuotaStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedResourceQuotaStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedResourceQuotaStatus.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}/status`
 */
export function putReplaceNamespacedResourceQuotaStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuotaStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuotaStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuotaStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuotaStatus.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}`
 */
export function deleteNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedResourceQuota.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedResourceQuota.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}`
 */
export function getReadNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedResourceQuota.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}`
 */
export function patchNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedResourceQuota.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedResourceQuota.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas/{name}`
 */
export function putReplaceNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuota.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedResourceQuota.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas`
 */
export function deleteCollectionNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedResourceQuota.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedResourceQuota.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas`,
    options,
  );
}

/**
 * list or watch objects of kind ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas`
 */
export function getListNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedResourceQuota.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas`,
    options,
  );
}

/**
 * create a ResourceQuota
 * @path `/api/v1/namespaces/{namespace}/resourcequotas`
 */
export function postCreateNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedResourceQuota.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedResourceQuota.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/resourcequotas`,
    options,
  );
}

/**
 * delete a Secret
 * @path `/api/v1/namespaces/{namespace}/secrets/{name}`
 */
export function deleteNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedSecret.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedSecret.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Secret
 * @path `/api/v1/namespaces/{namespace}/secrets/{name}`
 */
export function getReadNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedSecret.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Secret
 * @path `/api/v1/namespaces/{namespace}/secrets/{name}`
 */
export function patchNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedSecret.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedSecret.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Secret
 * @path `/api/v1/namespaces/{namespace}/secrets/{name}`
 */
export function putReplaceNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedSecret.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedSecret.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Secret
 * @path `/api/v1/namespaces/{namespace}/secrets`
 */
export function deleteCollectionNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedSecret.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedSecret.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets`,
    options,
  );
}

/**
 * list or watch objects of kind Secret
 * @path `/api/v1/namespaces/{namespace}/secrets`
 */
export function getListNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedSecret.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets`,
    options,
  );
}

/**
 * create a Secret
 * @path `/api/v1/namespaces/{namespace}/secrets`
 */
export function postCreateNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedSecret.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedSecret.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/secrets`,
    options,
  );
}

/**
 * create token of a ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts/{name}/token`
 */
export function postCreateNamespacedServiceAccountToken(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccountToken.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccountToken.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccountToken.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccountToken.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts/${options.pathParams.name}/token`,
    options,
  );
}

/**
 * delete a ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts/{name}`
 */
export function deleteNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedServiceAccount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedServiceAccount.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts/{name}`
 */
export function getReadNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedServiceAccount.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts/{name}`
 */
export function patchNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedServiceAccount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedServiceAccount.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts/{name}`
 */
export function putReplaceNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceAccount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceAccount.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts`
 */
export function deleteCollectionNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedServiceAccount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedServiceAccount.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts`,
    options,
  );
}

/**
 * list or watch objects of kind ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts`
 */
export function getListNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedServiceAccount.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts`,
    options,
  );
}

/**
 * create a ServiceAccount
 * @path `/api/v1/namespaces/{namespace}/serviceaccounts`
 */
export function postCreateNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedServiceAccount.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/serviceaccounts`,
    options,
  );
}

/**
 * connect DELETE requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function deleteConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteConnectNamespacedServiceProxyWithPath.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect GET requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function getConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedServiceProxyWithPath.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect HEAD requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function headConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.HeadConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.HeadConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.HeadConnectNamespacedServiceProxyWithPath.Response>(
    "head",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect OPTIONS requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function optionsConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.OptionsConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.OptionsConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.OptionsConnectNamespacedServiceProxyWithPath.Response>(
    "options",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect PATCH requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function patchConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchConnectNamespacedServiceProxyWithPath.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect POST requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function postConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedServiceProxyWithPath.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect PUT requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy/{path}`
 */
export function putConnectNamespacedServiceProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PutConnectNamespacedServiceProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutConnectNamespacedServiceProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutConnectNamespacedServiceProxyWithPath.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect DELETE requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function deleteConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteConnectNamespacedServiceProxy.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect GET requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function getConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNamespacedServiceProxy.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect HEAD requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function headConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.HeadConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.HeadConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.HeadConnectNamespacedServiceProxy.Response>(
    "head",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect OPTIONS requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function optionsConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.OptionsConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.OptionsConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.OptionsConnectNamespacedServiceProxy.Response>(
    "options",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect PATCH requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function patchConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchConnectNamespacedServiceProxy.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect POST requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function postConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNamespacedServiceProxy.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect PUT requests to proxy of Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/proxy`
 */
export function putConnectNamespacedServiceProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PutConnectNamespacedServiceProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutConnectNamespacedServiceProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutConnectNamespacedServiceProxy.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * read status of the specified Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/status`
 */
export function getReadNamespacedServiceStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedServiceStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedServiceStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedServiceStatus.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/status`
 */
export function patchNamespacedServiceStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedServiceStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedServiceStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedServiceStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedServiceStatus.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}/status`
 */
export function putReplaceNamespacedServiceStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedServiceStatus.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}`
 */
export function deleteNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespacedService.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespacedService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespacedService.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}`
 */
export function getReadNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespacedService.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespacedService.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}`
 */
export function patchNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespacedService.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespacedService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespacedService.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Service
 * @path `/api/v1/namespaces/{namespace}/services/{name}`
 */
export function putReplaceNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespacedService.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespacedService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespacedService.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Service
 * @path `/api/v1/namespaces/{namespace}/services`
 */
export function deleteCollectionNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedService.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNamespacedService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNamespacedService.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.namespace}/services`,
    options,
  );
}

/**
 * list or watch objects of kind Service
 * @path `/api/v1/namespaces/{namespace}/services`
 */
export function getListNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.GetListNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespacedService.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespacedService.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.namespace}/services`,
    options,
  );
}

/**
 * create a Service
 * @path `/api/v1/namespaces/{namespace}/services`
 */
export function postCreateNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.PostCreateNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespacedService.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespacedService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespacedService.Response>(
    "post",
    `/api/v1/namespaces/${options.pathParams.namespace}/services`,
    options,
  );
}

/**
 * replace finalize of the specified Namespace
 * @path `/api/v1/namespaces/{name}/finalize`
 */
export function putReplaceNamespaceFinalize(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespaceFinalize.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespaceFinalize.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespaceFinalize.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespaceFinalize.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.name}/finalize`,
    options,
  );
}

/**
 * read status of the specified Namespace
 * @path `/api/v1/namespaces/{name}/status`
 */
export function getReadNamespaceStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespaceStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespaceStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespaceStatus.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Namespace
 * @path `/api/v1/namespaces/{name}/status`
 */
export function patchNamespaceStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespaceStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespaceStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespaceStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespaceStatus.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Namespace
 * @path `/api/v1/namespaces/{name}/status`
 */
export function putReplaceNamespaceStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespaceStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespaceStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespaceStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespaceStatus.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a Namespace
 * @path `/api/v1/namespaces/{name}`
 */
export function deleteNamespace(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNamespace.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNamespace.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNamespace.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNamespace.Response>(
    "delete",
    `/api/v1/namespaces/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Namespace
 * @path `/api/v1/namespaces/{name}`
 */
export function getReadNamespace(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNamespace.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNamespace.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNamespace.Response>(
    "get",
    `/api/v1/namespaces/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Namespace
 * @path `/api/v1/namespaces/{name}`
 */
export function patchNamespace(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNamespace.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNamespace.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNamespace.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNamespace.Response>(
    "patch",
    `/api/v1/namespaces/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Namespace
 * @path `/api/v1/namespaces/{name}`
 */
export function putReplaceNamespace(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNamespace.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNamespace.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNamespace.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNamespace.Response>(
    "put",
    `/api/v1/namespaces/${options.pathParams.name}`,
    options,
  );
}

/**
 * list or watch objects of kind Namespace
 * @path `/api/v1/namespaces`
 */
export function getListNamespace(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListNamespace.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNamespace.Response>(
    "get",
    "/api/v1/namespaces",
    options || {},
  );
}

/**
 * create a Namespace
 * @path `/api/v1/namespaces`
 */
export function postCreateNamespace(options?: {
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNamespace.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNamespace.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNamespace.Response>(
    "post",
    "/api/v1/namespaces",
    options || {},
  );
}

/**
 * connect DELETE requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function deleteConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteConnectNodeProxyWithPath.Response>(
    "delete",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect GET requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function getConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNodeProxyWithPath.Response>(
    "get",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect HEAD requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function headConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.HeadConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.HeadConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.HeadConnectNodeProxyWithPath.Response>(
    "head",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect OPTIONS requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function optionsConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.OptionsConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.OptionsConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.OptionsConnectNodeProxyWithPath.Response>(
    "options",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect PATCH requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function patchConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchConnectNodeProxyWithPath.Response>(
    "patch",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect POST requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function postConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNodeProxyWithPath.Response>(
    "post",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect PUT requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy/{path}`
 */
export function putConnectNodeProxyWithPath(options: {
  pathParams: API.K8sV2Json.CoreV1.PutConnectNodeProxyWithPath.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutConnectNodeProxyWithPath.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutConnectNodeProxyWithPath.Response>(
    "put",
    `/api/v1/nodes/${options.pathParams.name}/proxy/${options.pathParams.path}`,
    options,
  );
}

/**
 * connect DELETE requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function deleteConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteConnectNodeProxy.Response>(
    "delete",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect GET requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function getConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.GetConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetConnectNodeProxy.Response>(
    "get",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect HEAD requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function headConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.HeadConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.HeadConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.HeadConnectNodeProxy.Response>(
    "head",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect OPTIONS requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function optionsConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.OptionsConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.OptionsConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.OptionsConnectNodeProxy.Response>(
    "options",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect PATCH requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function patchConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchConnectNodeProxy.Response>(
    "patch",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect POST requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function postConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PostConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PostConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostConnectNodeProxy.Response>(
    "post",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * connect PUT requests to proxy of Node
 * @path `/api/v1/nodes/{name}/proxy`
 */
export function putConnectNodeProxy(options: {
  pathParams: API.K8sV2Json.CoreV1.PutConnectNodeProxy.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutConnectNodeProxy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutConnectNodeProxy.Response>(
    "put",
    `/api/v1/nodes/${options.pathParams.name}/proxy`,
    options,
  );
}

/**
 * read status of the specified Node
 * @path `/api/v1/nodes/{name}/status`
 */
export function getReadNodeStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNodeStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNodeStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNodeStatus.Response>(
    "get",
    `/api/v1/nodes/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Node
 * @path `/api/v1/nodes/{name}/status`
 */
export function patchNodeStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNodeStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNodeStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNodeStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNodeStatus.Response>(
    "patch",
    `/api/v1/nodes/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Node
 * @path `/api/v1/nodes/{name}/status`
 */
export function putReplaceNodeStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNodeStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNodeStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNodeStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNodeStatus.Response>(
    "put",
    `/api/v1/nodes/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a Node
 * @path `/api/v1/nodes/{name}`
 */
export function deleteNode(options: {
  pathParams: API.K8sV2Json.CoreV1.DeleteNode.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeleteNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteNode.Response>(
    "delete",
    `/api/v1/nodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Node
 * @path `/api/v1/nodes/{name}`
 */
export function getReadNode(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadNode.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadNode.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadNode.Response>(
    "get",
    `/api/v1/nodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Node
 * @path `/api/v1/nodes/{name}`
 */
export function patchNode(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchNode.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchNode.Response>(
    "patch",
    `/api/v1/nodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Node
 * @path `/api/v1/nodes/{name}`
 */
export function putReplaceNode(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplaceNode.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplaceNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplaceNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplaceNode.Response>(
    "put",
    `/api/v1/nodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Node
 * @path `/api/v1/nodes`
 */
export function deleteCollectionNode(options?: {
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionNode.Response>(
    "delete",
    "/api/v1/nodes",
    options || {},
  );
}

/**
 * list or watch objects of kind Node
 * @path `/api/v1/nodes`
 */
export function getListNode(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListNode.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListNode.Response>(
    "get",
    "/api/v1/nodes",
    options || {},
  );
}

/**
 * create a Node
 * @path `/api/v1/nodes`
 */
export function postCreateNode(options?: {
  queryParams?: API.K8sV2Json.CoreV1.PostCreateNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreateNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreateNode.Response>(
    "post",
    "/api/v1/nodes",
    options || {},
  );
}

/**
 * list or watch objects of kind PersistentVolumeClaim
 * @path `/api/v1/persistentvolumeclaims`
 */
export function getListPersistentVolumeClaimForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListPersistentVolumeClaimForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListPersistentVolumeClaimForAllNamespaces.Response>(
    "get",
    "/api/v1/persistentvolumeclaims",
    options || {},
  );
}

/**
 * read status of the specified PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}/status`
 */
export function getReadPersistentVolumeStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadPersistentVolumeStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadPersistentVolumeStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadPersistentVolumeStatus.Response>(
    "get",
    `/api/v1/persistentvolumes/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}/status`
 */
export function patchPersistentVolumeStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchPersistentVolumeStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchPersistentVolumeStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchPersistentVolumeStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchPersistentVolumeStatus.Response>(
    "patch",
    `/api/v1/persistentvolumes/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}/status`
 */
export function putReplacePersistentVolumeStatus(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplacePersistentVolumeStatus.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplacePersistentVolumeStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplacePersistentVolumeStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplacePersistentVolumeStatus.Response>(
    "put",
    `/api/v1/persistentvolumes/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}`
 */
export function deletePersistentVolume(options: {
  pathParams: API.K8sV2Json.CoreV1.DeletePersistentVolume.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.DeletePersistentVolume.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeletePersistentVolume.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeletePersistentVolume.Response>(
    "delete",
    `/api/v1/persistentvolumes/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}`
 */
export function getReadPersistentVolume(options: {
  pathParams: API.K8sV2Json.CoreV1.GetReadPersistentVolume.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetReadPersistentVolume.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetReadPersistentVolume.Response>(
    "get",
    `/api/v1/persistentvolumes/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}`
 */
export function patchPersistentVolume(options: {
  pathParams: API.K8sV2Json.CoreV1.PatchPersistentVolume.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PatchPersistentVolume.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PatchPersistentVolume.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PatchPersistentVolume.Response>(
    "patch",
    `/api/v1/persistentvolumes/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PersistentVolume
 * @path `/api/v1/persistentvolumes/{name}`
 */
export function putReplacePersistentVolume(options: {
  pathParams: API.K8sV2Json.CoreV1.PutReplacePersistentVolume.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.PutReplacePersistentVolume.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PutReplacePersistentVolume.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PutReplacePersistentVolume.Response>(
    "put",
    `/api/v1/persistentvolumes/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PersistentVolume
 * @path `/api/v1/persistentvolumes`
 */
export function deleteCollectionPersistentVolume(options?: {
  queryParams?: API.K8sV2Json.CoreV1.DeleteCollectionPersistentVolume.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.DeleteCollectionPersistentVolume.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.DeleteCollectionPersistentVolume.Response>(
    "delete",
    "/api/v1/persistentvolumes",
    options || {},
  );
}

/**
 * list or watch objects of kind PersistentVolume
 * @path `/api/v1/persistentvolumes`
 */
export function getListPersistentVolume(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListPersistentVolume.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListPersistentVolume.Response>(
    "get",
    "/api/v1/persistentvolumes",
    options || {},
  );
}

/**
 * create a PersistentVolume
 * @path `/api/v1/persistentvolumes`
 */
export function postCreatePersistentVolume(options?: {
  queryParams?: API.K8sV2Json.CoreV1.PostCreatePersistentVolume.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CoreV1.PostCreatePersistentVolume.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.PostCreatePersistentVolume.Response>(
    "post",
    "/api/v1/persistentvolumes",
    options || {},
  );
}

/**
 * list or watch objects of kind Pod
 * @path `/api/v1/pods`
 */
export function getListPodForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListPodForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListPodForAllNamespaces.Response>(
    "get",
    "/api/v1/pods",
    options || {},
  );
}

/**
 * list or watch objects of kind PodTemplate
 * @path `/api/v1/podtemplates`
 */
export function getListPodTemplateForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListPodTemplateForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListPodTemplateForAllNamespaces.Response>(
    "get",
    "/api/v1/podtemplates",
    options || {},
  );
}

/**
 * list or watch objects of kind ReplicationController
 * @path `/api/v1/replicationcontrollers`
 */
export function getListReplicationControllerForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListReplicationControllerForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListReplicationControllerForAllNamespaces.Response>(
    "get",
    "/api/v1/replicationcontrollers",
    options || {},
  );
}

/**
 * list or watch objects of kind ResourceQuota
 * @path `/api/v1/resourcequotas`
 */
export function getListResourceQuotaForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListResourceQuotaForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListResourceQuotaForAllNamespaces.Response>(
    "get",
    "/api/v1/resourcequotas",
    options || {},
  );
}

/**
 * list or watch objects of kind Secret
 * @path `/api/v1/secrets`
 */
export function getListSecretForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListSecretForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListSecretForAllNamespaces.Response>(
    "get",
    "/api/v1/secrets",
    options || {},
  );
}

/**
 * list or watch objects of kind ServiceAccount
 * @path `/api/v1/serviceaccounts`
 */
export function getListServiceAccountForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListServiceAccountForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListServiceAccountForAllNamespaces.Response>(
    "get",
    "/api/v1/serviceaccounts",
    options || {},
  );
}

/**
 * list or watch objects of kind Service
 * @path `/api/v1/services`
 */
export function getListServiceForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetListServiceForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetListServiceForAllNamespaces.Response>(
    "get",
    "/api/v1/services",
    options || {},
  );
}

/**
 * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/configmaps`
 */
export function getWatchConfigMapListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchConfigMapListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchConfigMapListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/configmaps",
    options || {},
  );
}

/**
 * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/endpoints`
 */
export function getWatchEndpointsListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchEndpointsListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchEndpointsListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/endpoints",
    options || {},
  );
}

/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/events`
 */
export function getWatchEventListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchEventListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchEventListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/events",
    options || {},
  );
}

/**
 * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/limitranges`
 */
export function getWatchLimitRangeListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchLimitRangeListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchLimitRangeListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/limitranges",
    options || {},
  );
}

/**
 * watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/configmaps/{name}`
 */
export function getWatchNamespacedConfigMap(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedConfigMap.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedConfigMap.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedConfigMap.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/configmaps/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/configmaps`
 */
export function getWatchNamespacedConfigMapList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedConfigMapList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedConfigMapList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedConfigMapList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/configmaps`,
    options,
  );
}

/**
 * watch changes to an object of kind Endpoints. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/endpoints/{name}`
 */
export function getWatchNamespacedEndpoints(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedEndpoints.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedEndpoints.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedEndpoints.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/endpoints/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Endpoints. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/endpoints`
 */
export function getWatchNamespacedEndpointsList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedEndpointsList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedEndpointsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedEndpointsList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/endpoints`,
    options,
  );
}

/**
 * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/events/{name}`
 */
export function getWatchNamespacedEvent(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedEvent.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/events`
 */
export function getWatchNamespacedEventList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedEventList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedEventList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedEventList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * watch changes to an object of kind LimitRange. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/limitranges/{name}`
 */
export function getWatchNamespacedLimitRange(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedLimitRange.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedLimitRange.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedLimitRange.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/limitranges/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of LimitRange. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/limitranges`
 */
export function getWatchNamespacedLimitRangeList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedLimitRangeList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedLimitRangeList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedLimitRangeList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/limitranges`,
    options,
  );
}

/**
 * watch changes to an object of kind PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims/{name}`
 */
export function getWatchNamespacedPersistentVolumeClaim(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedPersistentVolumeClaim.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedPersistentVolumeClaim.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedPersistentVolumeClaim.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/persistentvolumeclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/persistentvolumeclaims`
 */
export function getWatchNamespacedPersistentVolumeClaimList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedPersistentVolumeClaimList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedPersistentVolumeClaimList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedPersistentVolumeClaimList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/persistentvolumeclaims`,
    options,
  );
}

/**
 * watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/pods/{name}`
 */
export function getWatchNamespacedPod(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedPod.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedPod.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedPod.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/pods/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/pods`
 */
export function getWatchNamespacedPodList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedPodList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedPodList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedPodList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/pods`,
    options,
  );
}

/**
 * watch changes to an object of kind PodTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/podtemplates/{name}`
 */
export function getWatchNamespacedPodTemplate(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedPodTemplate.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedPodTemplate.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedPodTemplate.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/podtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/podtemplates`
 */
export function getWatchNamespacedPodTemplateList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedPodTemplateList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedPodTemplateList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedPodTemplateList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/podtemplates`,
    options,
  );
}

/**
 * watch changes to an object of kind ReplicationController. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/replicationcontrollers/{name}`
 */
export function getWatchNamespacedReplicationController(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedReplicationController.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedReplicationController.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedReplicationController.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/replicationcontrollers/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/replicationcontrollers`
 */
export function getWatchNamespacedReplicationControllerList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedReplicationControllerList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedReplicationControllerList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedReplicationControllerList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/replicationcontrollers`,
    options,
  );
}

/**
 * watch changes to an object of kind ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/resourcequotas/{name}`
 */
export function getWatchNamespacedResourceQuota(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedResourceQuota.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedResourceQuota.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedResourceQuota.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/resourcequotas/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/resourcequotas`
 */
export function getWatchNamespacedResourceQuotaList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedResourceQuotaList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedResourceQuotaList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedResourceQuotaList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/resourcequotas`,
    options,
  );
}

/**
 * watch changes to an object of kind Secret. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/secrets/{name}`
 */
export function getWatchNamespacedSecret(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedSecret.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedSecret.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedSecret.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/secrets/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/secrets`
 */
export function getWatchNamespacedSecretList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedSecretList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedSecretList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedSecretList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/secrets`,
    options,
  );
}

/**
 * watch changes to an object of kind ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/serviceaccounts/{name}`
 */
export function getWatchNamespacedServiceAccount(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedServiceAccount.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedServiceAccount.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedServiceAccount.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/serviceaccounts/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/serviceaccounts`
 */
export function getWatchNamespacedServiceAccountList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedServiceAccountList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedServiceAccountList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedServiceAccountList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/serviceaccounts`,
    options,
  );
}

/**
 * watch changes to an object of kind Service. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{namespace}/services/{name}`
 */
export function getWatchNamespacedService(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedService.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedService.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedService.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/services/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces/{namespace}/services`
 */
export function getWatchNamespacedServiceList(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespacedServiceList.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespacedServiceList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespacedServiceList.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.namespace}/services`,
    options,
  );
}

/**
 * watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/namespaces/{name}`
 */
export function getWatchNamespace(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNamespace.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespace.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespace.Response>(
    "get",
    `/api/v1/watch/namespaces/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/namespaces`
 */
export function getWatchNamespaceList(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNamespaceList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNamespaceList.Response>(
    "get",
    "/api/v1/watch/namespaces",
    options || {},
  );
}

/**
 * watch changes to an object of kind Node. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/nodes/{name}`
 */
export function getWatchNode(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchNode.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNode.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNode.Response>(
    "get",
    `/api/v1/watch/nodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Node. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/nodes`
 */
export function getWatchNodeList(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchNodeList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchNodeList.Response>(
    "get",
    "/api/v1/watch/nodes",
    options || {},
  );
}

/**
 * watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/persistentvolumeclaims`
 */
export function getWatchPersistentVolumeClaimListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchPersistentVolumeClaimListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchPersistentVolumeClaimListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/persistentvolumeclaims",
    options || {},
  );
}

/**
 * watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/api/v1/watch/persistentvolumes/{name}`
 */
export function getWatchPersistentVolume(options: {
  pathParams: API.K8sV2Json.CoreV1.GetWatchPersistentVolume.PathParams;
  queryParams?: API.K8sV2Json.CoreV1.GetWatchPersistentVolume.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchPersistentVolume.Response>(
    "get",
    `/api/v1/watch/persistentvolumes/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/persistentvolumes`
 */
export function getWatchPersistentVolumeList(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchPersistentVolumeList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchPersistentVolumeList.Response>(
    "get",
    "/api/v1/watch/persistentvolumes",
    options || {},
  );
}

/**
 * watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/pods`
 */
export function getWatchPodListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchPodListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchPodListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/pods",
    options || {},
  );
}

/**
 * watch individual changes to a list of PodTemplate. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/podtemplates`
 */
export function getWatchPodTemplateListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchPodTemplateListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchPodTemplateListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/podtemplates",
    options || {},
  );
}

/**
 * watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/replicationcontrollers`
 */
export function getWatchReplicationControllerListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchReplicationControllerListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchReplicationControllerListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/replicationcontrollers",
    options || {},
  );
}

/**
 * watch individual changes to a list of ResourceQuota. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/resourcequotas`
 */
export function getWatchResourceQuotaListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchResourceQuotaListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchResourceQuotaListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/resourcequotas",
    options || {},
  );
}

/**
 * watch individual changes to a list of Secret. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/secrets`
 */
export function getWatchSecretListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchSecretListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchSecretListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/secrets",
    options || {},
  );
}

/**
 * watch individual changes to a list of ServiceAccount. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/serviceaccounts`
 */
export function getWatchServiceAccountListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchServiceAccountListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchServiceAccountListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/serviceaccounts",
    options || {},
  );
}

/**
 * watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/api/v1/watch/services`
 */
export function getWatchServiceListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.CoreV1.GetWatchServiceListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CoreV1.GetWatchServiceListForAllNamespaces.Response>(
    "get",
    "/api/v1/watch/services",
    options || {},
  );
}
