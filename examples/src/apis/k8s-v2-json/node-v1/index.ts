import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/node.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.GetApiResources.Response>(
    "get",
    "/apis/node.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete a RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses/{name}`
 */
export function deleteRuntimeClass(options: {
  pathParams: API.K8sV2Json.NodeV1.DeleteRuntimeClass.PathParams;
  queryParams?: API.K8sV2Json.NodeV1.DeleteRuntimeClass.QueryParams;
  body?: API.K8sV2Json.NodeV1.DeleteRuntimeClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.DeleteRuntimeClass.Response>(
    "delete",
    `/apis/node.k8s.io/v1/runtimeclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses/{name}`
 */
export function getReadRuntimeClass(options: {
  pathParams: API.K8sV2Json.NodeV1.GetReadRuntimeClass.PathParams;
  queryParams?: API.K8sV2Json.NodeV1.GetReadRuntimeClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.GetReadRuntimeClass.Response>(
    "get",
    `/apis/node.k8s.io/v1/runtimeclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses/{name}`
 */
export function patchRuntimeClass(options: {
  pathParams: API.K8sV2Json.NodeV1.PatchRuntimeClass.PathParams;
  queryParams?: API.K8sV2Json.NodeV1.PatchRuntimeClass.QueryParams;
  body?: API.K8sV2Json.NodeV1.PatchRuntimeClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.PatchRuntimeClass.Response>(
    "patch",
    `/apis/node.k8s.io/v1/runtimeclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses/{name}`
 */
export function putReplaceRuntimeClass(options: {
  pathParams: API.K8sV2Json.NodeV1.PutReplaceRuntimeClass.PathParams;
  queryParams?: API.K8sV2Json.NodeV1.PutReplaceRuntimeClass.QueryParams;
  body: API.K8sV2Json.NodeV1.PutReplaceRuntimeClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.PutReplaceRuntimeClass.Response>(
    "put",
    `/apis/node.k8s.io/v1/runtimeclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses`
 */
export function deleteCollectionRuntimeClass(options?: {
  queryParams?: API.K8sV2Json.NodeV1.DeleteCollectionRuntimeClass.QueryParams;
  body?: API.K8sV2Json.NodeV1.DeleteCollectionRuntimeClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.DeleteCollectionRuntimeClass.Response>(
    "delete",
    "/apis/node.k8s.io/v1/runtimeclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses`
 */
export function getListRuntimeClass(options?: {
  queryParams?: API.K8sV2Json.NodeV1.GetListRuntimeClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.GetListRuntimeClass.Response>(
    "get",
    "/apis/node.k8s.io/v1/runtimeclasses",
    options || {},
  );
}

/**
 * create a RuntimeClass
 * @path `/apis/node.k8s.io/v1/runtimeclasses`
 */
export function postCreateRuntimeClass(options: {
  queryParams?: API.K8sV2Json.NodeV1.PostCreateRuntimeClass.QueryParams;
  body: API.K8sV2Json.NodeV1.PostCreateRuntimeClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.PostCreateRuntimeClass.Response>(
    "post",
    "/apis/node.k8s.io/v1/runtimeclasses",
    options,
  );
}

/**
 * watch changes to an object of kind RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/node.k8s.io/v1/watch/runtimeclasses/{name}`
 */
export function getWatchRuntimeClass(options: {
  pathParams: API.K8sV2Json.NodeV1.GetWatchRuntimeClass.PathParams;
  queryParams?: API.K8sV2Json.NodeV1.GetWatchRuntimeClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.GetWatchRuntimeClass.Response>(
    "get",
    `/apis/node.k8s.io/v1/watch/runtimeclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of RuntimeClass. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/node.k8s.io/v1/watch/runtimeclasses`
 */
export function getWatchRuntimeClassList(options?: {
  queryParams?: API.K8sV2Json.NodeV1.GetWatchRuntimeClassList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NodeV1.GetWatchRuntimeClassList.Response>(
    "get",
    "/apis/node.k8s.io/v1/watch/runtimeclasses",
    options || {},
  );
}
