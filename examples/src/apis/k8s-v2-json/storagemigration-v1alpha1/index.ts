import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/storagemigration.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/storagemigration.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * read status of the specified StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}/status`
 */
export function getReadStorageVersionMigrationStatus(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.GetReadStorageVersionMigrationStatus.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.GetReadStorageVersionMigrationStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.GetReadStorageVersionMigrationStatus.Response>(
    "get",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}/status`
 */
export function patchStorageVersionMigrationStatus(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigrationStatus.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigrationStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigrationStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigrationStatus.Response>(
    "patch",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}/status`
 */
export function putReplaceStorageVersionMigrationStatus(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigrationStatus.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigrationStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigrationStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigrationStatus.Response>(
    "put",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}`
 */
export function deleteStorageVersionMigration(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.DeleteStorageVersionMigration.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.DeleteStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.DeleteStorageVersionMigration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.DeleteStorageVersionMigration.Response>(
    "delete",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}`
 */
export function getReadStorageVersionMigration(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.GetReadStorageVersionMigration.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.GetReadStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.GetReadStorageVersionMigration.Response>(
    "get",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}`
 */
export function patchStorageVersionMigration(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigration.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.PatchStorageVersionMigration.Response>(
    "patch",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/{name}`
 */
export function putReplaceStorageVersionMigration(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigration.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.PutReplaceStorageVersionMigration.Response>(
    "put",
    `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations`
 */
export function deleteCollectionStorageVersionMigration(options?: {
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.DeleteCollectionStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.DeleteCollectionStorageVersionMigration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.DeleteCollectionStorageVersionMigration.Response>(
    "delete",
    "/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations",
    options || {},
  );
}

/**
 * list or watch objects of kind StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations`
 */
export function getListStorageVersionMigration(options?: {
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.GetListStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.GetListStorageVersionMigration.Response>(
    "get",
    "/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations",
    options || {},
  );
}

/**
 * create a StorageVersionMigration
 * @path `/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations`
 */
export function postCreateStorageVersionMigration(options?: {
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.PostCreateStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StoragemigrationV1alpha1.PostCreateStorageVersionMigration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.PostCreateStorageVersionMigration.Response>(
    "post",
    "/apis/storagemigration.k8s.io/v1alpha1/storageversionmigrations",
    options || {},
  );
}

/**
 * watch changes to an object of kind StorageVersionMigration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storagemigration.k8s.io/v1alpha1/watch/storageversionmigrations/{name}`
 */
export function getWatchStorageVersionMigration(options: {
  pathParams: API.K8sV2Json.StoragemigrationV1alpha1.GetWatchStorageVersionMigration.PathParams;
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.GetWatchStorageVersionMigration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.GetWatchStorageVersionMigration.Response>(
    "get",
    `/apis/storagemigration.k8s.io/v1alpha1/watch/storageversionmigrations/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of StorageVersionMigration. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storagemigration.k8s.io/v1alpha1/watch/storageversionmigrations`
 */
export function getWatchStorageVersionMigrationList(options?: {
  queryParams?: API.K8sV2Json.StoragemigrationV1alpha1.GetWatchStorageVersionMigrationList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StoragemigrationV1alpha1.GetWatchStorageVersionMigrationList.Response>(
    "get",
    "/apis/storagemigration.k8s.io/v1alpha1/watch/storageversionmigrations",
    options || {},
  );
}
