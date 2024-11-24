import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * read status of the specified APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`
 */
export function getReadApiServiceStatus(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.GetReadApiServiceStatus.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.GetReadApiServiceStatus.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.GetReadApiServiceStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.GetReadApiServiceStatus.Response>(
    "get",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`
 */
export function patchApiServiceStatus(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.PatchApiServiceStatus.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.PatchApiServiceStatus.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.PatchApiServiceStatus.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.PatchApiServiceStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.PatchApiServiceStatus.Response>(
    "patch",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}/status`
 */
export function putReplaceApiServiceStatus(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.PutReplaceApiServiceStatus.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.PutReplaceApiServiceStatus.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.PutReplaceApiServiceStatus.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.PutReplaceApiServiceStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.PutReplaceApiServiceStatus.Response>(
    "put",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete an APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}`
 */
export function deleteApiService(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.DeleteApiService.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.DeleteApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.DeleteApiService.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.DeleteApiService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.DeleteApiService.Response>(
    "delete",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}`
 */
export function getReadApiService(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.GetReadApiService.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.GetReadApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.GetReadApiService.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.GetReadApiService.Response>(
    "get",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}`
 */
export function patchApiService(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.PatchApiService.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.PatchApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.PatchApiService.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.PatchApiService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.PatchApiService.Response>(
    "patch",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices/{name}`
 */
export function putReplaceApiService(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.PutReplaceApiService.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.PutReplaceApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.PutReplaceApiService.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.PutReplaceApiService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.PutReplaceApiService.Response>(
    "put",
    `/apis/apiregistration.k8s.io/v1/apiservices/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices`
 */
export function deleteCollectionApiService(options?: {
  queryParams?: API.K8sV2Json.ApiregistrationV1.DeleteCollectionApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.DeleteCollectionApiService.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.DeleteCollectionApiService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.DeleteCollectionApiService.Response>(
    "delete",
    "/apis/apiregistration.k8s.io/v1/apiservices",
    options || {},
  );
}

/**
 * list or watch objects of kind APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices`
 */
export function getListApiService(options?: {
  queryParams?: API.K8sV2Json.ApiregistrationV1.GetListApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.GetListApiService.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.GetListApiService.Response>(
    "get",
    "/apis/apiregistration.k8s.io/v1/apiservices",
    options || {},
  );
}

/**
 * create an APIService
 * @path `/apis/apiregistration.k8s.io/v1/apiservices`
 */
export function postCreateApiService(options?: {
  queryParams?: API.K8sV2Json.ApiregistrationV1.PostCreateApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.PostCreateApiService.Headers;
  body?: API.K8sV2Json.ApiregistrationV1.PostCreateApiService.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.PostCreateApiService.Response>(
    "post",
    "/apis/apiregistration.k8s.io/v1/apiservices",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/apiregistration.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.ApiregistrationV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.GetApiResources.Response>(
    "get",
    "/apis/apiregistration.k8s.io/v1/",
    options || {},
  );
}

/**
 * watch changes to an object of kind APIService. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apiregistration.k8s.io/v1/watch/apiservices/{name}`
 */
export function getWatchApiService(options: {
  pathParams: API.K8sV2Json.ApiregistrationV1.GetWatchApiService.PathParams;
  queryParams?: API.K8sV2Json.ApiregistrationV1.GetWatchApiService.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.GetWatchApiService.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.GetWatchApiService.Response>(
    "get",
    `/apis/apiregistration.k8s.io/v1/watch/apiservices/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of APIService. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apiregistration.k8s.io/v1/watch/apiservices`
 */
export function getWatchApiServiceList(options?: {
  queryParams?: API.K8sV2Json.ApiregistrationV1.GetWatchApiServiceList.QueryParams;
  headers?: API.K8sV2Json.ApiregistrationV1.GetWatchApiServiceList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiregistrationV1.GetWatchApiServiceList.Response>(
    "get",
    "/apis/apiregistration.k8s.io/v1/watch/apiservices",
    options || {},
  );
}
