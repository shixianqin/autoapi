import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * list or watch objects of kind Event
 * @path `/apis/events.k8s.io/v1/events`
 */
export function getListEventForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.EventsV1.GetListEventForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetListEventForAllNamespaces.Response>(
    "get",
    "/apis/events.k8s.io/v1/events",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/events.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetApiResources.Response>(
    "get",
    "/apis/events.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete an Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
 */
export function deleteNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.DeleteNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.DeleteNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.EventsV1.DeleteNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.DeleteNamespacedEvent.Response>(
    "delete",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
 */
export function getReadNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.GetReadNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.GetReadNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetReadNamespacedEvent.Response>(
    "get",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
 */
export function patchNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.PatchNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.PatchNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.EventsV1.PatchNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.PatchNamespacedEvent.Response>(
    "patch",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events/{name}`
 */
export function putReplaceNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.PutReplaceNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.PutReplaceNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.EventsV1.PutReplaceNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.PutReplaceNamespacedEvent.Response>(
    "put",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events`
 */
export function deleteCollectionNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.DeleteCollectionNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.DeleteCollectionNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.EventsV1.DeleteCollectionNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.DeleteCollectionNamespacedEvent.Response>(
    "delete",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * list or watch objects of kind Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events`
 */
export function getListNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.GetListNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.GetListNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetListNamespacedEvent.Response>(
    "get",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * create an Event
 * @path `/apis/events.k8s.io/v1/namespaces/{namespace}/events`
 */
export function postCreateNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.PostCreateNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.PostCreateNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.EventsV1.PostCreateNamespacedEvent.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.PostCreateNamespacedEvent.Response>(
    "post",
    `/apis/events.k8s.io/v1/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}

/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/events.k8s.io/v1/watch/events`
 */
export function getWatchEventListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.EventsV1.GetWatchEventListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetWatchEventListForAllNamespaces.Response>(
    "get",
    "/apis/events.k8s.io/v1/watch/events",
    options || {},
  );
}

/**
 * watch changes to an object of kind Event. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events/{name}`
 */
export function getWatchNamespacedEvent(options: {
  pathParams: API.K8sV2Json.EventsV1.GetWatchNamespacedEvent.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.GetWatchNamespacedEvent.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetWatchNamespacedEvent.Response>(
    "get",
    `/apis/events.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/events/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Event. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/events.k8s.io/v1/watch/namespaces/{namespace}/events`
 */
export function getWatchNamespacedEventList(options: {
  pathParams: API.K8sV2Json.EventsV1.GetWatchNamespacedEventList.PathParams;
  queryParams?: API.K8sV2Json.EventsV1.GetWatchNamespacedEventList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.EventsV1.GetWatchNamespacedEventList.Response>(
    "get",
    `/apis/events.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/events`,
    options,
  );
}
