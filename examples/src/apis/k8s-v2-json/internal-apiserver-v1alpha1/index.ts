import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/internal.apiserver.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * read status of the specified StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status`
 */
export function getReadStorageVersionStatus(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.GetReadStorageVersionStatus.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.GetReadStorageVersionStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.GetReadStorageVersionStatus.Response>(
    "get",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status`
 */
export function patchStorageVersionStatus(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersionStatus.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersionStatus.QueryParams;
  body?: API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersionStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersionStatus.Response>(
    "patch",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}/status`
 */
export function putReplaceStorageVersionStatus(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersionStatus.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersionStatus.QueryParams;
  body: API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersionStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersionStatus.Response>(
    "put",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}`
 */
export function deleteStorageVersion(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.DeleteStorageVersion.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.DeleteStorageVersion.QueryParams;
  body?: API.K8sV2Json.InternalApiserverV1alpha1.DeleteStorageVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.DeleteStorageVersion.Response>(
    "delete",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}`
 */
export function getReadStorageVersion(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.GetReadStorageVersion.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.GetReadStorageVersion.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.GetReadStorageVersion.Response>(
    "get",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}`
 */
export function patchStorageVersion(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersion.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersion.QueryParams;
  body?: API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.PatchStorageVersion.Response>(
    "patch",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/{name}`
 */
export function putReplaceStorageVersion(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersion.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersion.QueryParams;
  body: API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.PutReplaceStorageVersion.Response>(
    "put",
    `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions`
 */
export function deleteCollectionStorageVersion(options?: {
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.DeleteCollectionStorageVersion.QueryParams;
  body?: API.K8sV2Json.InternalApiserverV1alpha1.DeleteCollectionStorageVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.DeleteCollectionStorageVersion.Response>(
    "delete",
    "/apis/internal.apiserver.k8s.io/v1alpha1/storageversions",
    options || {},
  );
}

/**
 * list or watch objects of kind StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions`
 */
export function getListStorageVersion(options?: {
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.GetListStorageVersion.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.GetListStorageVersion.Response>(
    "get",
    "/apis/internal.apiserver.k8s.io/v1alpha1/storageversions",
    options || {},
  );
}

/**
 * create a StorageVersion
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/storageversions`
 */
export function postCreateStorageVersion(options: {
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.PostCreateStorageVersion.QueryParams;
  body: API.K8sV2Json.InternalApiserverV1alpha1.PostCreateStorageVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.PostCreateStorageVersion.Response>(
    "post",
    "/apis/internal.apiserver.k8s.io/v1alpha1/storageversions",
    options,
  );
}

/**
 * watch changes to an object of kind StorageVersion. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions/{name}`
 */
export function getWatchStorageVersion(options: {
  pathParams: API.K8sV2Json.InternalApiserverV1alpha1.GetWatchStorageVersion.PathParams;
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.GetWatchStorageVersion.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.GetWatchStorageVersion.Response>(
    "get",
    `/apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of StorageVersion. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions`
 */
export function getWatchStorageVersionList(options?: {
  queryParams?: API.K8sV2Json.InternalApiserverV1alpha1.GetWatchStorageVersionList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.InternalApiserverV1alpha1.GetWatchStorageVersionList.Response>(
    "get",
    "/apis/internal.apiserver.k8s.io/v1alpha1/watch/storageversions",
    options || {},
  );
}
