import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/storage.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.StorageV1alpha1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/storage.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * delete a VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}`
 */
export function deleteVolumeAttributesClass(options: {
  pathParams: API.K8sV2Json.StorageV1alpha1.DeleteVolumeAttributesClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1alpha1.DeleteVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.DeleteVolumeAttributesClass.Headers;
  body?: API.K8sV2Json.StorageV1alpha1.DeleteVolumeAttributesClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.DeleteVolumeAttributesClass.Response>(
    "delete",
    `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}`
 */
export function getReadVolumeAttributesClass(options: {
  pathParams: API.K8sV2Json.StorageV1alpha1.GetReadVolumeAttributesClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1alpha1.GetReadVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.GetReadVolumeAttributesClass.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.GetReadVolumeAttributesClass.Response>(
    "get",
    `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}`
 */
export function patchVolumeAttributesClass(options: {
  pathParams: API.K8sV2Json.StorageV1alpha1.PatchVolumeAttributesClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1alpha1.PatchVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.PatchVolumeAttributesClass.Headers;
  body?: API.K8sV2Json.StorageV1alpha1.PatchVolumeAttributesClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.PatchVolumeAttributesClass.Response>(
    "patch",
    `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/{name}`
 */
export function putReplaceVolumeAttributesClass(options: {
  pathParams: API.K8sV2Json.StorageV1alpha1.PutReplaceVolumeAttributesClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1alpha1.PutReplaceVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.PutReplaceVolumeAttributesClass.Headers;
  body: API.K8sV2Json.StorageV1alpha1.PutReplaceVolumeAttributesClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.PutReplaceVolumeAttributesClass.Response>(
    "put",
    `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses`
 */
export function deleteCollectionVolumeAttributesClass(options?: {
  queryParams?: API.K8sV2Json.StorageV1alpha1.DeleteCollectionVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.DeleteCollectionVolumeAttributesClass.Headers;
  body?: API.K8sV2Json.StorageV1alpha1.DeleteCollectionVolumeAttributesClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.DeleteCollectionVolumeAttributesClass.Response>(
    "delete",
    "/apis/storage.k8s.io/v1alpha1/volumeattributesclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses`
 */
export function getListVolumeAttributesClass(options?: {
  queryParams?: API.K8sV2Json.StorageV1alpha1.GetListVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.GetListVolumeAttributesClass.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.GetListVolumeAttributesClass.Response>(
    "get",
    "/apis/storage.k8s.io/v1alpha1/volumeattributesclasses",
    options || {},
  );
}

/**
 * create a VolumeAttributesClass
 * @path `/apis/storage.k8s.io/v1alpha1/volumeattributesclasses`
 */
export function postCreateVolumeAttributesClass(options: {
  queryParams?: API.K8sV2Json.StorageV1alpha1.PostCreateVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.PostCreateVolumeAttributesClass.Headers;
  body: API.K8sV2Json.StorageV1alpha1.PostCreateVolumeAttributesClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.PostCreateVolumeAttributesClass.Response>(
    "post",
    "/apis/storage.k8s.io/v1alpha1/volumeattributesclasses",
    options,
  );
}

/**
 * watch changes to an object of kind VolumeAttributesClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storage.k8s.io/v1alpha1/watch/volumeattributesclasses/{name}`
 */
export function getWatchVolumeAttributesClass(options: {
  pathParams: API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClass.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClass.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClass.Response>(
    "get",
    `/apis/storage.k8s.io/v1alpha1/watch/volumeattributesclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of VolumeAttributesClass. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1alpha1/watch/volumeattributesclasses`
 */
export function getWatchVolumeAttributesClassList(options?: {
  queryParams?: API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClassList.QueryParams;
  headers?: API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClassList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1alpha1.GetWatchVolumeAttributesClassList.Response>(
    "get",
    "/apis/storage.k8s.io/v1alpha1/watch/volumeattributesclasses",
    options || {},
  );
}
