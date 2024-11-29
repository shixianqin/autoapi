import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * delete a DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses/{name}`
 */
export function deleteDeviceClass(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteDeviceClass.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteDeviceClass.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteDeviceClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteDeviceClass.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/deviceclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses/{name}`
 */
export function getReadDeviceClass(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadDeviceClass.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadDeviceClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadDeviceClass.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/deviceclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses/{name}`
 */
export function patchDeviceClass(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchDeviceClass.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchDeviceClass.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchDeviceClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchDeviceClass.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/deviceclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses/{name}`
 */
export function putReplaceDeviceClass(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceDeviceClass.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceDeviceClass.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceDeviceClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceDeviceClass.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/deviceclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses`
 */
export function deleteCollectionDeviceClass(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionDeviceClass.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionDeviceClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteCollectionDeviceClass.Response>(
    "delete",
    "/apis/resource.k8s.io/v1alpha3/deviceclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses`
 */
export function getListDeviceClass(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListDeviceClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListDeviceClass.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/deviceclasses",
    options || {},
  );
}

/**
 * create a DeviceClass
 * @path `/apis/resource.k8s.io/v1alpha3/deviceclasses`
 */
export function postCreateDeviceClass(options: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PostCreateDeviceClass.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PostCreateDeviceClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PostCreateDeviceClass.Response>(
    "post",
    "/apis/resource.k8s.io/v1alpha3/deviceclasses",
    options,
  );
}

/**
 * get available resources
 * @path `/apis/resource.k8s.io/v1alpha3/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetApiResources.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/",
    options || {},
  );
}

/**
 * read status of the specified PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}/status`
 */
export function getReadNamespacedPodSchedulingContextStatus(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedPodSchedulingContextStatus.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedPodSchedulingContextStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedPodSchedulingContextStatus.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}/status`
 */
export function patchNamespacedPodSchedulingContextStatus(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContextStatus.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContextStatus.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContextStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContextStatus.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}/status`
 */
export function putReplaceNamespacedPodSchedulingContextStatus(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContextStatus.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContextStatus.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContextStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContextStatus.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}`
 */
export function deleteNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedPodSchedulingContext.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedPodSchedulingContext.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedPodSchedulingContext.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}`
 */
export function getReadNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedPodSchedulingContext.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedPodSchedulingContext.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}`
 */
export function patchNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContext.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContext.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchNamespacedPodSchedulingContext.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts/{name}`
 */
export function putReplaceNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContext.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContext.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedPodSchedulingContext.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts`
 */
export function deleteCollectionNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedPodSchedulingContext.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedPodSchedulingContext.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedPodSchedulingContext.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts`,
    options,
  );
}

/**
 * list or watch objects of kind PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts`
 */
export function getListNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetListNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListNamespacedPodSchedulingContext.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListNamespacedPodSchedulingContext.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts`,
    options,
  );
}

/**
 * create a PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/podschedulingcontexts`
 */
export function postCreateNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedPodSchedulingContext.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedPodSchedulingContext.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedPodSchedulingContext.Response>(
    "post",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/podschedulingcontexts`,
    options,
  );
}

/**
 * read status of the specified ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}/status`
 */
export function getReadNamespacedResourceClaimStatus(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaimStatus.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaimStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaimStatus.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}/status`
 */
export function patchNamespacedResourceClaimStatus(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimStatus.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimStatus.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimStatus.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}/status`
 */
export function putReplaceNamespacedResourceClaimStatus(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimStatus.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimStatus.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimStatus.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}`
 */
export function deleteNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaim.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaim.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaim.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}`
 */
export function getReadNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaim.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaim.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}`
 */
export function patchNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaim.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaim.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaim.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims/{name}`
 */
export function putReplaceNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaim.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaim.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaim.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims`
 */
export function deleteCollectionNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaim.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaim.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaim.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims`,
    options,
  );
}

/**
 * list or watch objects of kind ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims`
 */
export function getListNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetListNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListNamespacedResourceClaim.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListNamespacedResourceClaim.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims`,
    options,
  );
}

/**
 * create a ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaims`
 */
export function postCreateNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaim.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaim.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaim.Response>(
    "post",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaims`,
    options,
  );
}

/**
 * delete a ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates/{name}`
 */
export function deleteNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaimTemplate.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaimTemplate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteNamespacedResourceClaimTemplate.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates/{name}`
 */
export function getReadNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaimTemplate.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadNamespacedResourceClaimTemplate.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates/{name}`
 */
export function patchNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimTemplate.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimTemplate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchNamespacedResourceClaimTemplate.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates/{name}`
 */
export function putReplaceNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimTemplate.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimTemplate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceNamespacedResourceClaimTemplate.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates`
 */
export function deleteCollectionNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaimTemplate.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaimTemplate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteCollectionNamespacedResourceClaimTemplate.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates`,
    options,
  );
}

/**
 * list or watch objects of kind ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates`
 */
export function getListNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetListNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListNamespacedResourceClaimTemplate.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListNamespacedResourceClaimTemplate.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates`,
    options,
  );
}

/**
 * create a ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/namespaces/{namespace}/resourceclaimtemplates`
 */
export function postCreateNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaimTemplate.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaimTemplate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PostCreateNamespacedResourceClaimTemplate.Response>(
    "post",
    `/apis/resource.k8s.io/v1alpha3/namespaces/${options.pathParams.namespace}/resourceclaimtemplates`,
    options,
  );
}

/**
 * list or watch objects of kind PodSchedulingContext
 * @path `/apis/resource.k8s.io/v1alpha3/podschedulingcontexts`
 */
export function getListPodSchedulingContextForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListPodSchedulingContextForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListPodSchedulingContextForAllNamespaces.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/podschedulingcontexts",
    options || {},
  );
}

/**
 * list or watch objects of kind ResourceClaim
 * @path `/apis/resource.k8s.io/v1alpha3/resourceclaims`
 */
export function getListResourceClaimForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListResourceClaimForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListResourceClaimForAllNamespaces.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/resourceclaims",
    options || {},
  );
}

/**
 * list or watch objects of kind ResourceClaimTemplate
 * @path `/apis/resource.k8s.io/v1alpha3/resourceclaimtemplates`
 */
export function getListResourceClaimTemplateForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListResourceClaimTemplateForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListResourceClaimTemplateForAllNamespaces.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/resourceclaimtemplates",
    options || {},
  );
}

/**
 * delete a ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices/{name}`
 */
export function deleteResourceSlice(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.DeleteResourceSlice.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteResourceSlice.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteResourceSlice.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteResourceSlice.Response>(
    "delete",
    `/apis/resource.k8s.io/v1alpha3/resourceslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices/{name}`
 */
export function getReadResourceSlice(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetReadResourceSlice.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetReadResourceSlice.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetReadResourceSlice.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/resourceslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices/{name}`
 */
export function patchResourceSlice(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PatchResourceSlice.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PatchResourceSlice.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.PatchResourceSlice.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PatchResourceSlice.Response>(
    "patch",
    `/apis/resource.k8s.io/v1alpha3/resourceslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices/{name}`
 */
export function putReplaceResourceSlice(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.PutReplaceResourceSlice.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PutReplaceResourceSlice.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PutReplaceResourceSlice.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PutReplaceResourceSlice.Response>(
    "put",
    `/apis/resource.k8s.io/v1alpha3/resourceslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices`
 */
export function deleteCollectionResourceSlice(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionResourceSlice.QueryParams;
  body?: API.K8sV2Json.ResourceV1alpha3.DeleteCollectionResourceSlice.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.DeleteCollectionResourceSlice.Response>(
    "delete",
    "/apis/resource.k8s.io/v1alpha3/resourceslices",
    options || {},
  );
}

/**
 * list or watch objects of kind ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices`
 */
export function getListResourceSlice(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetListResourceSlice.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetListResourceSlice.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/resourceslices",
    options || {},
  );
}

/**
 * create a ResourceSlice
 * @path `/apis/resource.k8s.io/v1alpha3/resourceslices`
 */
export function postCreateResourceSlice(options: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.PostCreateResourceSlice.QueryParams;
  body: API.K8sV2Json.ResourceV1alpha3.PostCreateResourceSlice.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.PostCreateResourceSlice.Response>(
    "post",
    "/apis/resource.k8s.io/v1alpha3/resourceslices",
    options,
  );
}

/**
 * watch changes to an object of kind DeviceClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/deviceclasses/{name}`
 */
export function getWatchDeviceClass(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchDeviceClass.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchDeviceClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchDeviceClass.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/deviceclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of DeviceClass. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/deviceclasses`
 */
export function getWatchDeviceClassList(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchDeviceClassList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchDeviceClassList.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/watch/deviceclasses",
    options || {},
  );
}

/**
 * watch changes to an object of kind PodSchedulingContext. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/namespaces/{namespace}/podschedulingcontexts/{name}`
 */
export function getWatchNamespacedPodSchedulingContext(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedPodSchedulingContext.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedPodSchedulingContext.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedPodSchedulingContext.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/namespaces/${options.pathParams.namespace}/podschedulingcontexts/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PodSchedulingContext. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/namespaces/{namespace}/podschedulingcontexts`
 */
export function getWatchNamespacedPodSchedulingContextList(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedPodSchedulingContextList.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedPodSchedulingContextList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedPodSchedulingContextList.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/namespaces/${options.pathParams.namespace}/podschedulingcontexts`,
    options,
  );
}

/**
 * watch changes to an object of kind ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/namespaces/{namespace}/resourceclaims/{name}`
 */
export function getWatchNamespacedResourceClaim(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaim.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaim.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaim.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/namespaces/${options.pathParams.namespace}/resourceclaims/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/namespaces/{namespace}/resourceclaims`
 */
export function getWatchNamespacedResourceClaimList(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimList.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimList.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/namespaces/${options.pathParams.namespace}/resourceclaims`,
    options,
  );
}

/**
 * watch changes to an object of kind ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/namespaces/{namespace}/resourceclaimtemplates/{name}`
 */
export function getWatchNamespacedResourceClaimTemplate(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimTemplate.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimTemplate.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimTemplate.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/namespaces/${options.pathParams.namespace}/resourceclaimtemplates/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/namespaces/{namespace}/resourceclaimtemplates`
 */
export function getWatchNamespacedResourceClaimTemplateList(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimTemplateList.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimTemplateList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchNamespacedResourceClaimTemplateList.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/namespaces/${options.pathParams.namespace}/resourceclaimtemplates`,
    options,
  );
}

/**
 * watch individual changes to a list of PodSchedulingContext. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/podschedulingcontexts`
 */
export function getWatchPodSchedulingContextListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchPodSchedulingContextListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchPodSchedulingContextListForAllNamespaces.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/watch/podschedulingcontexts",
    options || {},
  );
}

/**
 * watch individual changes to a list of ResourceClaim. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/resourceclaims`
 */
export function getWatchResourceClaimListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchResourceClaimListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchResourceClaimListForAllNamespaces.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/watch/resourceclaims",
    options || {},
  );
}

/**
 * watch individual changes to a list of ResourceClaimTemplate. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/resourceclaimtemplates`
 */
export function getWatchResourceClaimTemplateListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchResourceClaimTemplateListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchResourceClaimTemplateListForAllNamespaces.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/watch/resourceclaimtemplates",
    options || {},
  );
}

/**
 * watch changes to an object of kind ResourceSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/resourceslices/{name}`
 */
export function getWatchResourceSlice(options: {
  pathParams: API.K8sV2Json.ResourceV1alpha3.GetWatchResourceSlice.PathParams;
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchResourceSlice.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchResourceSlice.Response>(
    "get",
    `/apis/resource.k8s.io/v1alpha3/watch/resourceslices/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ResourceSlice. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/resource.k8s.io/v1alpha3/watch/resourceslices`
 */
export function getWatchResourceSliceList(options?: {
  queryParams?: API.K8sV2Json.ResourceV1alpha3.GetWatchResourceSliceList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ResourceV1alpha3.GetWatchResourceSliceList.Response>(
    "get",
    "/apis/resource.k8s.io/v1alpha3/watch/resourceslices",
    options || {},
  );
}
