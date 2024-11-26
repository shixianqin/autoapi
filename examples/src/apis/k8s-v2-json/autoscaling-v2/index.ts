import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/autoscaling/v2/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.AutoscalingV2.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetApiResources.Response>(
    "get",
    "/apis/autoscaling/v2/",
    options || {},
  );
}

/**
 * list or watch objects of kind HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/horizontalpodautoscalers`
 */
export function getListHorizontalPodAutoscalerForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AutoscalingV2.GetListHorizontalPodAutoscalerForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetListHorizontalPodAutoscalerForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetListHorizontalPodAutoscalerForAllNamespaces.Response>(
    "get",
    "/apis/autoscaling/v2/horizontalpodautoscalers",
    options || {},
  );
}

/**
 * read status of the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`
 */
export function getReadNamespacedHorizontalPodAutoscalerStatus(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscalerStatus.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscalerStatus.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscalerStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscalerStatus.Response>(
    "get",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`
 */
export function patchNamespacedHorizontalPodAutoscalerStatus(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscalerStatus.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscalerStatus.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscalerStatus.Headers;
  body?: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscalerStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscalerStatus.Response>(
    "patch",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}/status`
 */
export function putReplaceNamespacedHorizontalPodAutoscalerStatus(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscalerStatus.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscalerStatus.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscalerStatus.Headers;
  body?: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscalerStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscalerStatus.Response>(
    "put",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function deleteNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.DeleteNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.DeleteNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.DeleteNamespacedHorizontalPodAutoscaler.Headers;
  body?: API.K8sV2Json.AutoscalingV2.DeleteNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.DeleteNamespacedHorizontalPodAutoscaler.Response>(
    "delete",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function getReadNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscaler.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetReadNamespacedHorizontalPodAutoscaler.Response>(
    "get",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function patchNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscaler.Headers;
  body?: API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.PatchNamespacedHorizontalPodAutoscaler.Response>(
    "patch",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function putReplaceNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscaler.Headers;
  body?: API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.PutReplaceNamespacedHorizontalPodAutoscaler.Response>(
    "put",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function deleteCollectionNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.DeleteCollectionNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.DeleteCollectionNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.DeleteCollectionNamespacedHorizontalPodAutoscaler.Headers;
  body?: API.K8sV2Json.AutoscalingV2.DeleteCollectionNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.DeleteCollectionNamespacedHorizontalPodAutoscaler.Response>(
    "delete",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}

/**
 * list or watch objects of kind HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function getListNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.GetListNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.GetListNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetListNamespacedHorizontalPodAutoscaler.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetListNamespacedHorizontalPodAutoscaler.Response>(
    "get",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}

/**
 * create a HorizontalPodAutoscaler
 * @path `/apis/autoscaling/v2/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function postCreateNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.PostCreateNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.PostCreateNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.PostCreateNamespacedHorizontalPodAutoscaler.Headers;
  body?: API.K8sV2Json.AutoscalingV2.PostCreateNamespacedHorizontalPodAutoscaler.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.PostCreateNamespacedHorizontalPodAutoscaler.Response>(
    "post",
    `/apis/autoscaling/v2/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}

/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/autoscaling/v2/watch/horizontalpodautoscalers`
 */
export function getWatchHorizontalPodAutoscalerListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AutoscalingV2.GetWatchHorizontalPodAutoscalerListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetWatchHorizontalPodAutoscalerListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetWatchHorizontalPodAutoscalerListForAllNamespaces.Response>(
    "get",
    "/apis/autoscaling/v2/watch/horizontalpodautoscalers",
    options || {},
  );
}

/**
 * watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/autoscaling/v2/watch/namespaces/{namespace}/horizontalpodautoscalers/{name}`
 */
export function getWatchNamespacedHorizontalPodAutoscaler(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscaler.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscaler.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscaler.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscaler.Response>(
    "get",
    `/apis/autoscaling/v2/watch/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/autoscaling/v2/watch/namespaces/{namespace}/horizontalpodautoscalers`
 */
export function getWatchNamespacedHorizontalPodAutoscalerList(options: {
  pathParams: API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscalerList.PathParams;
  queryParams?: API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscalerList.QueryParams;
  headers?: API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscalerList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AutoscalingV2.GetWatchNamespacedHorizontalPodAutoscalerList.Response>(
    "get",
    `/apis/autoscaling/v2/watch/namespaces/${options.pathParams.namespace}/horizontalpodautoscalers`,
    options,
  );
}
