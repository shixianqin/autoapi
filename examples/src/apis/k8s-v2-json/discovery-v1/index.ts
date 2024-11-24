import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * list or watch objects of kind EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/endpointslices`
 */
export function getListEndpointSliceForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.DiscoveryV1.GetListEndpointSliceForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.GetListEndpointSliceForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetListEndpointSliceForAllNamespaces.Response>(
    "get",
    "/apis/discovery.k8s.io/v1/endpointslices",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/discovery.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.DiscoveryV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetApiResources.Response>(
    "get",
    "/apis/discovery.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete an EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}`
 */
export function deleteNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.DeleteNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.DeleteNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.DeleteNamespacedEndpointSlice.Headers;
  body?: API.K8sV2Json.DiscoveryV1.DeleteNamespacedEndpointSlice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.DeleteNamespacedEndpointSlice.Response>(
    "delete",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}`
 */
export function getReadNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.GetReadNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.GetReadNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.GetReadNamespacedEndpointSlice.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetReadNamespacedEndpointSlice.Response>(
    "get",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}`
 */
export function patchNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.PatchNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.PatchNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.PatchNamespacedEndpointSlice.Headers;
  body?: API.K8sV2Json.DiscoveryV1.PatchNamespacedEndpointSlice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.PatchNamespacedEndpointSlice.Response>(
    "patch",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices/{name}`
 */
export function putReplaceNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.PutReplaceNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.PutReplaceNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.PutReplaceNamespacedEndpointSlice.Headers;
  body: API.K8sV2Json.DiscoveryV1.PutReplaceNamespacedEndpointSlice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.PutReplaceNamespacedEndpointSlice.Response>(
    "put",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices`
 */
export function deleteCollectionNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.DeleteCollectionNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.DeleteCollectionNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.DeleteCollectionNamespacedEndpointSlice.Headers;
  body?: API.K8sV2Json.DiscoveryV1.DeleteCollectionNamespacedEndpointSlice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.DeleteCollectionNamespacedEndpointSlice.Response>(
    "delete",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices`,
    options,
  );
}

/**
 * list or watch objects of kind EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices`
 */
export function getListNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.GetListNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.GetListNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.GetListNamespacedEndpointSlice.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetListNamespacedEndpointSlice.Response>(
    "get",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices`,
    options,
  );
}

/**
 * create an EndpointSlice
 * @path `/apis/discovery.k8s.io/v1/namespaces/{namespace}/endpointslices`
 */
export function postCreateNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.PostCreateNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.PostCreateNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.PostCreateNamespacedEndpointSlice.Headers;
  body: API.K8sV2Json.DiscoveryV1.PostCreateNamespacedEndpointSlice.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.PostCreateNamespacedEndpointSlice.Response>(
    "post",
    `/apis/discovery.k8s.io/v1/namespaces/${options.pathParams.namespace}/endpointslices`,
    options,
  );
}

/**
 * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/discovery.k8s.io/v1/watch/endpointslices`
 */
export function getWatchEndpointSliceListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.DiscoveryV1.GetWatchEndpointSliceListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.GetWatchEndpointSliceListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetWatchEndpointSliceListForAllNamespaces.Response>(
    "get",
    "/apis/discovery.k8s.io/v1/watch/endpointslices",
    options || {},
  );
}

/**
 * watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices/{name}`
 */
export function getWatchNamespacedEndpointSlice(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSlice.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSlice.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSlice.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSlice.Response>(
    "get",
    `/apis/discovery.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/endpointslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/discovery.k8s.io/v1/watch/namespaces/{namespace}/endpointslices`
 */
export function getWatchNamespacedEndpointSliceList(options: {
  pathParams: API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSliceList.PathParams;
  queryParams?: API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSliceList.QueryParams;
  headers?: API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSliceList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.DiscoveryV1.GetWatchNamespacedEndpointSliceList.Response>(
    "get",
    `/apis/discovery.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/endpointslices`,
    options,
  );
}
