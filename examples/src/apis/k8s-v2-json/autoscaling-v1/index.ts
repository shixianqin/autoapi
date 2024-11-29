import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/autoscaling/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetApiResources.Response>(
    "get",
    "/apis/autoscaling/v1/",
    options || {},
  );
}

/**
 * list or watch objects of kind HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/horizontalpodautoscalers`
 */
export function getListHorizontalPodAutoscalerForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AutoscalingV1.GetListHorizontalPodAutoscalerForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetListHorizontalPodAutoscalerForAllNamespaces.Response>(
    "get",
    "/apis/autoscaling/v1/horizontalpodautoscalers",
    options || {},
  );
}

/**
 * read status of the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`
 */
export function getReadNamespacedHorizontalPodAutoscalerStatus(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.GetReadNamespacedHorizontalPodAutoscalerStatus.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.GetReadNamespacedHorizontalPodAutoscalerStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetReadNamespacedHorizontalPodAutoscalerStatus.Response>(
    "get",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`
 */
export function patchNamespacedHorizontalPodAutoscalerStatus(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscalerStatus.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscalerStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscalerStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscalerStatus.Response>(
    "patch",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`
 */
export function putReplaceNamespacedHorizontalPodAutoscalerStatus(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscalerStatus.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscalerStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscalerStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscalerStatus.Response>(
    "put",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function deleteNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.DeleteNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.DeleteNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.DeleteNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.DeleteNamespacedHorizontalPodAutoscaler.Response>(
    "delete",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function getReadNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.GetReadNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.GetReadNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetReadNamespacedHorizontalPodAutoscaler.Response>(
    "get",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function patchNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.PatchNamespacedHorizontalPodAutoscaler.Response>(
    "patch",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function putReplaceNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.PutReplaceNamespacedHorizontalPodAutoscaler.Response>(
    "put",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function deleteCollectionNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.DeleteCollectionNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.DeleteCollectionNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.DeleteCollectionNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.DeleteCollectionNamespacedHorizontalPodAutoscaler.Response>(
    "delete",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}

/**
 * list or watch objects of kind HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function getListNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.GetListNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.GetListNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetListNamespacedHorizontalPodAutoscaler.Response>(
    "get",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}

/**
 * create a HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v1/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function postCreateNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.PostCreateNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.PostCreateNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AutoscalingV1.PostCreateNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.PostCreateNamespacedHorizontalPodAutoscaler.Response>(
    "post",
    `/apis/autoscaling/v1/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}

/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/autoscaling/v1/watch/horizontalpodautoscalers`
 */
export function getWatchHorizontalPodAutoscalerListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AutoscalingV1.GetWatchHorizontalPodAutoscalerListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetWatchHorizontalPodAutoscalerListForAllNamespaces.Response>(
    "get",
    "/apis/autoscaling/v1/watch/horizontalpodautoscalers",
    options || {},
  );
}

/**
 * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function getWatchNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.GetWatchNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.GetWatchNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetWatchNamespacedHorizontalPodAutoscaler.Response>(
    "get",
    `/apis/autoscaling/v1/watch/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/autoscaling/v1/watch/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function getWatchNamespacedHorizontalPodAutoscalerList(options: {
  pathParams: API.K8sV2Json.AutoscalingV1.GetWatchNamespacedHorizontalPodAutoscalerList.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV1.GetWatchNamespacedHorizontalPodAutoscalerList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV1.GetWatchNamespacedHorizontalPodAutoscalerList.Response>(
    "get",
    `/apis/autoscaling/v1/watch/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}
