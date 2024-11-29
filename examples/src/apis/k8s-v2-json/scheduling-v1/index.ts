import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/scheduling.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.GetApiResources.Response>(
    "get",
    "/apis/scheduling.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete a PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`
 */
export function deletePriorityClass(options: {
  pathParams: API.K8sV2Json.SchedulingV1.DeletePriorityClass.PathParams;
  queryParams?: API.K8sV2Json.SchedulingV1.DeletePriorityClass.QueryParams;
  body?: API.K8sV2Json.SchedulingV1.DeletePriorityClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.DeletePriorityClass.Response>(
    "delete",
    `/apis/scheduling.k8s.io/v1/priorityclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`
 */
export function getReadPriorityClass(options: {
  pathParams: API.K8sV2Json.SchedulingV1.GetReadPriorityClass.PathParams;
  queryParams?: API.K8sV2Json.SchedulingV1.GetReadPriorityClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.GetReadPriorityClass.Response>(
    "get",
    `/apis/scheduling.k8s.io/v1/priorityclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`
 */
export function patchPriorityClass(options: {
  pathParams: API.K8sV2Json.SchedulingV1.PatchPriorityClass.PathParams;
  queryParams?: API.K8sV2Json.SchedulingV1.PatchPriorityClass.QueryParams;
  body?: API.K8sV2Json.SchedulingV1.PatchPriorityClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.PatchPriorityClass.Response>(
    "patch",
    `/apis/scheduling.k8s.io/v1/priorityclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses/{name}`
 */
export function putReplacePriorityClass(options: {
  pathParams: API.K8sV2Json.SchedulingV1.PutReplacePriorityClass.PathParams;
  queryParams?: API.K8sV2Json.SchedulingV1.PutReplacePriorityClass.QueryParams;
  body: API.K8sV2Json.SchedulingV1.PutReplacePriorityClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.PutReplacePriorityClass.Response>(
    "put",
    `/apis/scheduling.k8s.io/v1/priorityclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses`
 */
export function deleteCollectionPriorityClass(options?: {
  queryParams?: API.K8sV2Json.SchedulingV1.DeleteCollectionPriorityClass.QueryParams;
  body?: API.K8sV2Json.SchedulingV1.DeleteCollectionPriorityClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.DeleteCollectionPriorityClass.Response>(
    "delete",
    "/apis/scheduling.k8s.io/v1/priorityclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses`
 */
export function getListPriorityClass(options?: {
  queryParams?: API.K8sV2Json.SchedulingV1.GetListPriorityClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.GetListPriorityClass.Response>(
    "get",
    "/apis/scheduling.k8s.io/v1/priorityclasses",
    options || {},
  );
}

/**
 * create a PriorityClass
 * @path `/apis/scheduling.k8s.io/v1/priorityclasses`
 */
export function postCreatePriorityClass(options: {
  queryParams?: API.K8sV2Json.SchedulingV1.PostCreatePriorityClass.QueryParams;
  body: API.K8sV2Json.SchedulingV1.PostCreatePriorityClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.PostCreatePriorityClass.Response>(
    "post",
    "/apis/scheduling.k8s.io/v1/priorityclasses",
    options,
  );
}

/**
 * watch changes to an object of kind PriorityClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/scheduling.k8s.io/v1/watch/priorityclasses/{name}`
 */
export function getWatchPriorityClass(options: {
  pathParams: API.K8sV2Json.SchedulingV1.GetWatchPriorityClass.PathParams;
  queryParams?: API.K8sV2Json.SchedulingV1.GetWatchPriorityClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.GetWatchPriorityClass.Response>(
    "get",
    `/apis/scheduling.k8s.io/v1/watch/priorityclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PriorityClass. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/scheduling.k8s.io/v1/watch/priorityclasses`
 */
export function getWatchPriorityClassList(options?: {
  queryParams?: API.K8sV2Json.SchedulingV1.GetWatchPriorityClassList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.SchedulingV1.GetWatchPriorityClassList.Response>(
    "get",
    "/apis/scheduling.k8s.io/v1/watch/priorityclasses",
    options || {},
  );
}
