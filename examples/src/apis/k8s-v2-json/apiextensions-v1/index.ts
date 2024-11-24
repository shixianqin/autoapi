import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * read status of the specified CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`
 */
export function getReadCustomResourceDefinitionStatus(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinitionStatus.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinitionStatus.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinitionStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinitionStatus.Response>(
    "get",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`
 */
export function patchCustomResourceDefinitionStatus(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinitionStatus.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinitionStatus.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinitionStatus.Headers;
  body?: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinitionStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinitionStatus.Response>(
    "patch",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}/status`
 */
export function putReplaceCustomResourceDefinitionStatus(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinitionStatus.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinitionStatus.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinitionStatus.Headers;
  body: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinitionStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinitionStatus.Response>(
    "put",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`
 */
export function deleteCustomResourceDefinition(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.DeleteCustomResourceDefinition.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.DeleteCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.DeleteCustomResourceDefinition.Headers;
  body?: API.K8sV2Json.ApiextensionsV1.DeleteCustomResourceDefinition.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.DeleteCustomResourceDefinition.Response>(
    "delete",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`
 */
export function getReadCustomResourceDefinition(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinition.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinition.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.GetReadCustomResourceDefinition.Response>(
    "get",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`
 */
export function patchCustomResourceDefinition(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinition.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinition.Headers;
  body?: API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinition.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.PatchCustomResourceDefinition.Response>(
    "patch",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/{name}`
 */
export function putReplaceCustomResourceDefinition(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinition.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinition.Headers;
  body: API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinition.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.PutReplaceCustomResourceDefinition.Response>(
    "put",
    `/apis/apiextensions.k8s.io/v1/customresourcedefinitions/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`
 */
export function deleteCollectionCustomResourceDefinition(options?: {
  queryParams?: API.K8sV2Json.ApiextensionsV1.DeleteCollectionCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.DeleteCollectionCustomResourceDefinition.Headers;
  body?: API.K8sV2Json.ApiextensionsV1.DeleteCollectionCustomResourceDefinition.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.DeleteCollectionCustomResourceDefinition.Response>(
    "delete",
    "/apis/apiextensions.k8s.io/v1/customresourcedefinitions",
    options || {},
  );
}

/**
 * list or watch objects of kind CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`
 */
export function getListCustomResourceDefinition(options?: {
  queryParams?: API.K8sV2Json.ApiextensionsV1.GetListCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.GetListCustomResourceDefinition.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.GetListCustomResourceDefinition.Response>(
    "get",
    "/apis/apiextensions.k8s.io/v1/customresourcedefinitions",
    options || {},
  );
}

/**
 * create a CustomResourceDefinition
 * @path `/apis/apiextensions.k8s.io/v1/customresourcedefinitions`
 */
export function postCreateCustomResourceDefinition(options: {
  queryParams?: API.K8sV2Json.ApiextensionsV1.PostCreateCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.PostCreateCustomResourceDefinition.Headers;
  body: API.K8sV2Json.ApiextensionsV1.PostCreateCustomResourceDefinition.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.PostCreateCustomResourceDefinition.Response>(
    "post",
    "/apis/apiextensions.k8s.io/v1/customresourcedefinitions",
    options,
  );
}

/**
 * get available resources
 * @path `/apis/apiextensions.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.ApiextensionsV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.GetApiResources.Response>(
    "get",
    "/apis/apiextensions.k8s.io/v1/",
    options || {},
  );
}

/**
 * watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/{name}`
 */
export function getWatchCustomResourceDefinition(options: {
  pathParams: API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinition.PathParams;
  queryParams?: API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinition.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinition.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinition.Response>(
    "get",
    `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions`
 */
export function getWatchCustomResourceDefinitionList(options?: {
  queryParams?: API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinitionList.QueryParams;
  headers?: API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinitionList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.ApiextensionsV1.GetWatchCustomResourceDefinitionList.Response>(
    "get",
    "/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions",
    options || {},
  );
}
