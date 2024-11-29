import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * delete a CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers/{name}`
 */
export function deleteCsiDriver(options: {
  pathParams: API.K8sV2Json.StorageV1.DeleteCsiDriver.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.DeleteCsiDriver.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCsiDriver.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCsiDriver.Response>(
    "delete",
    `/apis/storage.k8s.io/v1/csidrivers/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers/{name}`
 */
export function getReadCsiDriver(options: {
  pathParams: API.K8sV2Json.StorageV1.GetReadCsiDriver.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetReadCsiDriver.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetReadCsiDriver.Response>(
    "get",
    `/apis/storage.k8s.io/v1/csidrivers/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers/{name}`
 */
export function patchCsiDriver(options: {
  pathParams: API.K8sV2Json.StorageV1.PatchCsiDriver.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PatchCsiDriver.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.PatchCsiDriver.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PatchCsiDriver.Response>(
    "patch",
    `/apis/storage.k8s.io/v1/csidrivers/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers/{name}`
 */
export function putReplaceCsiDriver(options: {
  pathParams: API.K8sV2Json.StorageV1.PutReplaceCsiDriver.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PutReplaceCsiDriver.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PutReplaceCsiDriver.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PutReplaceCsiDriver.Response>(
    "put",
    `/apis/storage.k8s.io/v1/csidrivers/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers`
 */
export function deleteCollectionCsiDriver(options?: {
  queryParams?: API.K8sV2Json.StorageV1.DeleteCollectionCsiDriver.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCollectionCsiDriver.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCollectionCsiDriver.Response>(
    "delete",
    "/apis/storage.k8s.io/v1/csidrivers",
    options || {},
  );
}

/**
 * list or watch objects of kind CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers`
 */
export function getListCsiDriver(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetListCsiDriver.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetListCsiDriver.Response>(
    "get",
    "/apis/storage.k8s.io/v1/csidrivers",
    options || {},
  );
}

/**
 * create a CSIDriver
 * @path `/apis/storage.k8s.io/v1/csidrivers`
 */
export function postCreateCsiDriver(options: {
  queryParams?: API.K8sV2Json.StorageV1.PostCreateCsiDriver.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PostCreateCsiDriver.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PostCreateCsiDriver.Response>(
    "post",
    "/apis/storage.k8s.io/v1/csidrivers",
    options,
  );
}

/**
 * delete a CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes/{name}`
 */
export function deleteCsiNode(options: {
  pathParams: API.K8sV2Json.StorageV1.DeleteCsiNode.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.DeleteCsiNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCsiNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCsiNode.Response>(
    "delete",
    `/apis/storage.k8s.io/v1/csinodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes/{name}`
 */
export function getReadCsiNode(options: {
  pathParams: API.K8sV2Json.StorageV1.GetReadCsiNode.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetReadCsiNode.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetReadCsiNode.Response>(
    "get",
    `/apis/storage.k8s.io/v1/csinodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes/{name}`
 */
export function patchCsiNode(options: {
  pathParams: API.K8sV2Json.StorageV1.PatchCsiNode.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PatchCsiNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.PatchCsiNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PatchCsiNode.Response>(
    "patch",
    `/apis/storage.k8s.io/v1/csinodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes/{name}`
 */
export function putReplaceCsiNode(options: {
  pathParams: API.K8sV2Json.StorageV1.PutReplaceCsiNode.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PutReplaceCsiNode.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PutReplaceCsiNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PutReplaceCsiNode.Response>(
    "put",
    `/apis/storage.k8s.io/v1/csinodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes`
 */
export function deleteCollectionCsiNode(options?: {
  queryParams?: API.K8sV2Json.StorageV1.DeleteCollectionCsiNode.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCollectionCsiNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCollectionCsiNode.Response>(
    "delete",
    "/apis/storage.k8s.io/v1/csinodes",
    options || {},
  );
}

/**
 * list or watch objects of kind CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes`
 */
export function getListCsiNode(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetListCsiNode.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetListCsiNode.Response>(
    "get",
    "/apis/storage.k8s.io/v1/csinodes",
    options || {},
  );
}

/**
 * create a CSINode
 * @path `/apis/storage.k8s.io/v1/csinodes`
 */
export function postCreateCsiNode(options: {
  queryParams?: API.K8sV2Json.StorageV1.PostCreateCsiNode.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PostCreateCsiNode.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PostCreateCsiNode.Response>(
    "post",
    "/apis/storage.k8s.io/v1/csinodes",
    options,
  );
}

/**
 * list or watch objects of kind CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/csistoragecapacities`
 */
export function getListCsiStorageCapacityForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetListCsiStorageCapacityForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetListCsiStorageCapacityForAllNamespaces.Response>(
    "get",
    "/apis/storage.k8s.io/v1/csistoragecapacities",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/storage.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetApiResources.Response>(
    "get",
    "/apis/storage.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete a CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}`
 */
export function deleteNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.DeleteNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.DeleteNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteNamespacedCsiStorageCapacity.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteNamespacedCsiStorageCapacity.Response>(
    "delete",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}`
 */
export function getReadNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.GetReadNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetReadNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetReadNamespacedCsiStorageCapacity.Response>(
    "get",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}`
 */
export function patchNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.PatchNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PatchNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.PatchNamespacedCsiStorageCapacity.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PatchNamespacedCsiStorageCapacity.Response>(
    "patch",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}`
 */
export function putReplaceNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.PutReplaceNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PutReplaceNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PutReplaceNamespacedCsiStorageCapacity.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PutReplaceNamespacedCsiStorageCapacity.Response>(
    "put",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities`
 */
export function deleteCollectionNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.DeleteCollectionNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.DeleteCollectionNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCollectionNamespacedCsiStorageCapacity.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCollectionNamespacedCsiStorageCapacity.Response>(
    "delete",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities`,
    options,
  );
}

/**
 * list or watch objects of kind CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities`
 */
export function getListNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.GetListNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetListNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetListNamespacedCsiStorageCapacity.Response>(
    "get",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities`,
    options,
  );
}

/**
 * create a CSIStorageCapacity
 * @path `/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities`
 */
export function postCreateNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.PostCreateNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PostCreateNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PostCreateNamespacedCsiStorageCapacity.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PostCreateNamespacedCsiStorageCapacity.Response>(
    "post",
    `/apis/storage.k8s.io/v1/namespaces/${options.pathParams.namespace}/csistoragecapacities`,
    options,
  );
}

/**
 * delete a StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses/{name}`
 */
export function deleteStorageClass(options: {
  pathParams: API.K8sV2Json.StorageV1.DeleteStorageClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.DeleteStorageClass.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteStorageClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteStorageClass.Response>(
    "delete",
    `/apis/storage.k8s.io/v1/storageclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses/{name}`
 */
export function getReadStorageClass(options: {
  pathParams: API.K8sV2Json.StorageV1.GetReadStorageClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetReadStorageClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetReadStorageClass.Response>(
    "get",
    `/apis/storage.k8s.io/v1/storageclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses/{name}`
 */
export function patchStorageClass(options: {
  pathParams: API.K8sV2Json.StorageV1.PatchStorageClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PatchStorageClass.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.PatchStorageClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PatchStorageClass.Response>(
    "patch",
    `/apis/storage.k8s.io/v1/storageclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses/{name}`
 */
export function putReplaceStorageClass(options: {
  pathParams: API.K8sV2Json.StorageV1.PutReplaceStorageClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PutReplaceStorageClass.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PutReplaceStorageClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PutReplaceStorageClass.Response>(
    "put",
    `/apis/storage.k8s.io/v1/storageclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses`
 */
export function deleteCollectionStorageClass(options?: {
  queryParams?: API.K8sV2Json.StorageV1.DeleteCollectionStorageClass.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCollectionStorageClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCollectionStorageClass.Response>(
    "delete",
    "/apis/storage.k8s.io/v1/storageclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses`
 */
export function getListStorageClass(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetListStorageClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetListStorageClass.Response>(
    "get",
    "/apis/storage.k8s.io/v1/storageclasses",
    options || {},
  );
}

/**
 * create a StorageClass
 * @path `/apis/storage.k8s.io/v1/storageclasses`
 */
export function postCreateStorageClass(options: {
  queryParams?: API.K8sV2Json.StorageV1.PostCreateStorageClass.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PostCreateStorageClass.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PostCreateStorageClass.Response>(
    "post",
    "/apis/storage.k8s.io/v1/storageclasses",
    options,
  );
}

/**
 * read status of the specified VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}/status`
 */
export function getReadVolumeAttachmentStatus(options: {
  pathParams: API.K8sV2Json.StorageV1.GetReadVolumeAttachmentStatus.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetReadVolumeAttachmentStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetReadVolumeAttachmentStatus.Response>(
    "get",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}/status`
 */
export function patchVolumeAttachmentStatus(options: {
  pathParams: API.K8sV2Json.StorageV1.PatchVolumeAttachmentStatus.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PatchVolumeAttachmentStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.PatchVolumeAttachmentStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PatchVolumeAttachmentStatus.Response>(
    "patch",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}/status`
 */
export function putReplaceVolumeAttachmentStatus(options: {
  pathParams: API.K8sV2Json.StorageV1.PutReplaceVolumeAttachmentStatus.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PutReplaceVolumeAttachmentStatus.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PutReplaceVolumeAttachmentStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PutReplaceVolumeAttachmentStatus.Response>(
    "put",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}`
 */
export function deleteVolumeAttachment(options: {
  pathParams: API.K8sV2Json.StorageV1.DeleteVolumeAttachment.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.DeleteVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteVolumeAttachment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteVolumeAttachment.Response>(
    "delete",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}`
 */
export function getReadVolumeAttachment(options: {
  pathParams: API.K8sV2Json.StorageV1.GetReadVolumeAttachment.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetReadVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetReadVolumeAttachment.Response>(
    "get",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}`
 */
export function patchVolumeAttachment(options: {
  pathParams: API.K8sV2Json.StorageV1.PatchVolumeAttachment.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PatchVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.PatchVolumeAttachment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PatchVolumeAttachment.Response>(
    "patch",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments/{name}`
 */
export function putReplaceVolumeAttachment(options: {
  pathParams: API.K8sV2Json.StorageV1.PutReplaceVolumeAttachment.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.PutReplaceVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PutReplaceVolumeAttachment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PutReplaceVolumeAttachment.Response>(
    "put",
    `/apis/storage.k8s.io/v1/volumeattachments/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments`
 */
export function deleteCollectionVolumeAttachment(options?: {
  queryParams?: API.K8sV2Json.StorageV1.DeleteCollectionVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.StorageV1.DeleteCollectionVolumeAttachment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.DeleteCollectionVolumeAttachment.Response>(
    "delete",
    "/apis/storage.k8s.io/v1/volumeattachments",
    options || {},
  );
}

/**
 * list or watch objects of kind VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments`
 */
export function getListVolumeAttachment(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetListVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetListVolumeAttachment.Response>(
    "get",
    "/apis/storage.k8s.io/v1/volumeattachments",
    options || {},
  );
}

/**
 * create a VolumeAttachment
 * @path `/apis/storage.k8s.io/v1/volumeattachments`
 */
export function postCreateVolumeAttachment(options: {
  queryParams?: API.K8sV2Json.StorageV1.PostCreateVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.StorageV1.PostCreateVolumeAttachment.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.PostCreateVolumeAttachment.Response>(
    "post",
    "/apis/storage.k8s.io/v1/volumeattachments",
    options,
  );
}

/**
 * watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storage.k8s.io/v1/watch/csidrivers/{name}`
 */
export function getWatchCsiDriver(options: {
  pathParams: API.K8sV2Json.StorageV1.GetWatchCsiDriver.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetWatchCsiDriver.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchCsiDriver.Response>(
    "get",
    `/apis/storage.k8s.io/v1/watch/csidrivers/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1/watch/csidrivers`
 */
export function getWatchCsiDriverList(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetWatchCsiDriverList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchCsiDriverList.Response>(
    "get",
    "/apis/storage.k8s.io/v1/watch/csidrivers",
    options || {},
  );
}

/**
 * watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storage.k8s.io/v1/watch/csinodes/{name}`
 */
export function getWatchCsiNode(options: {
  pathParams: API.K8sV2Json.StorageV1.GetWatchCsiNode.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetWatchCsiNode.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchCsiNode.Response>(
    "get",
    `/apis/storage.k8s.io/v1/watch/csinodes/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1/watch/csinodes`
 */
export function getWatchCsiNodeList(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetWatchCsiNodeList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchCsiNodeList.Response>(
    "get",
    "/apis/storage.k8s.io/v1/watch/csinodes",
    options || {},
  );
}

/**
 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1/watch/csistoragecapacities`
 */
export function getWatchCsiStorageCapacityListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetWatchCsiStorageCapacityListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchCsiStorageCapacityListForAllNamespaces.Response>(
    "get",
    "/apis/storage.k8s.io/v1/watch/csistoragecapacities",
    options || {},
  );
}

/**
 * watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities/{name}`
 */
export function getWatchNamespacedCsiStorageCapacity(options: {
  pathParams: API.K8sV2Json.StorageV1.GetWatchNamespacedCsiStorageCapacity.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetWatchNamespacedCsiStorageCapacity.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchNamespacedCsiStorageCapacity.Response>(
    "get",
    `/apis/storage.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/csistoragecapacities/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities`
 */
export function getWatchNamespacedCsiStorageCapacityList(options: {
  pathParams: API.K8sV2Json.StorageV1.GetWatchNamespacedCsiStorageCapacityList.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetWatchNamespacedCsiStorageCapacityList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchNamespacedCsiStorageCapacityList.Response>(
    "get",
    `/apis/storage.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/csistoragecapacities`,
    options,
  );
}

/**
 * watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storage.k8s.io/v1/watch/storageclasses/{name}`
 */
export function getWatchStorageClass(options: {
  pathParams: API.K8sV2Json.StorageV1.GetWatchStorageClass.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetWatchStorageClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchStorageClass.Response>(
    "get",
    `/apis/storage.k8s.io/v1/watch/storageclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1/watch/storageclasses`
 */
export function getWatchStorageClassList(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetWatchStorageClassList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchStorageClassList.Response>(
    "get",
    "/apis/storage.k8s.io/v1/watch/storageclasses",
    options || {},
  );
}

/**
 * watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/storage.k8s.io/v1/watch/volumeattachments/{name}`
 */
export function getWatchVolumeAttachment(options: {
  pathParams: API.K8sV2Json.StorageV1.GetWatchVolumeAttachment.PathParams;
  queryParams?: API.K8sV2Json.StorageV1.GetWatchVolumeAttachment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchVolumeAttachment.Response>(
    "get",
    `/apis/storage.k8s.io/v1/watch/volumeattachments/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/storage.k8s.io/v1/watch/volumeattachments`
 */
export function getWatchVolumeAttachmentList(options?: {
  queryParams?: API.K8sV2Json.StorageV1.GetWatchVolumeAttachmentList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.StorageV1.GetWatchVolumeAttachmentList.Response>(
    "get",
    "/apis/storage.k8s.io/v1/watch/volumeattachments",
    options || {},
  );
}
