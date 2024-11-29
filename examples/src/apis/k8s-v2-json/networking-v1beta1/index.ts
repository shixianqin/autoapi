import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/networking.k8s.io/v1beta1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetApiResources.Response>(
    "get",
    "/apis/networking.k8s.io/v1beta1/",
    options || {},
  );
}

/**
 * delete an IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses/{name}`
 */
export function deleteIpAddress(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.DeleteIpAddress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.DeleteIpAddress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.DeleteIpAddress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.DeleteIpAddress.Response>(
    "delete",
    `/apis/networking.k8s.io/v1beta1/ipaddresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses/{name}`
 */
export function getReadIpAddress(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.GetReadIpAddress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetReadIpAddress.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetReadIpAddress.Response>(
    "get",
    `/apis/networking.k8s.io/v1beta1/ipaddresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses/{name}`
 */
export function patchIpAddress(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.PatchIpAddress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PatchIpAddress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PatchIpAddress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PatchIpAddress.Response>(
    "patch",
    `/apis/networking.k8s.io/v1beta1/ipaddresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses/{name}`
 */
export function putReplaceIpAddress(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.PutReplaceIpAddress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PutReplaceIpAddress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PutReplaceIpAddress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PutReplaceIpAddress.Response>(
    "put",
    `/apis/networking.k8s.io/v1beta1/ipaddresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses`
 */
export function deleteCollectionIpAddress(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.DeleteCollectionIpAddress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.DeleteCollectionIpAddress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.DeleteCollectionIpAddress.Response>(
    "delete",
    "/apis/networking.k8s.io/v1beta1/ipaddresses",
    options || {},
  );
}

/**
 * list or watch objects of kind IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses`
 */
export function getListIpAddress(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetListIpAddress.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetListIpAddress.Response>(
    "get",
    "/apis/networking.k8s.io/v1beta1/ipaddresses",
    options || {},
  );
}

/**
 * create an IPAddress
 * @path `/apis/networking.k8s.io/v1beta1/ipaddresses`
 */
export function postCreateIpAddress(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PostCreateIpAddress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PostCreateIpAddress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PostCreateIpAddress.Response>(
    "post",
    "/apis/networking.k8s.io/v1beta1/ipaddresses",
    options || {},
  );
}

/**
 * read status of the specified ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}/status`
 */
export function getReadServiceCidrStatus(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.GetReadServiceCidrStatus.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetReadServiceCidrStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetReadServiceCidrStatus.Response>(
    "get",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}/status`
 */
export function patchServiceCidrStatus(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.PatchServiceCidrStatus.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PatchServiceCidrStatus.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PatchServiceCidrStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PatchServiceCidrStatus.Response>(
    "patch",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}/status`
 */
export function putReplaceServiceCidrStatus(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidrStatus.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidrStatus.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidrStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidrStatus.Response>(
    "put",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}`
 */
export function deleteServiceCidr(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.DeleteServiceCidr.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.DeleteServiceCidr.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.DeleteServiceCidr.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.DeleteServiceCidr.Response>(
    "delete",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}`
 */
export function getReadServiceCidr(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.GetReadServiceCidr.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetReadServiceCidr.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetReadServiceCidr.Response>(
    "get",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}`
 */
export function patchServiceCidr(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.PatchServiceCidr.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PatchServiceCidr.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PatchServiceCidr.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PatchServiceCidr.Response>(
    "patch",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs/{name}`
 */
export function putReplaceServiceCidr(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidr.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidr.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidr.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PutReplaceServiceCidr.Response>(
    "put",
    `/apis/networking.k8s.io/v1beta1/servicecidrs/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs`
 */
export function deleteCollectionServiceCidr(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.DeleteCollectionServiceCidr.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.DeleteCollectionServiceCidr.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.DeleteCollectionServiceCidr.Response>(
    "delete",
    "/apis/networking.k8s.io/v1beta1/servicecidrs",
    options || {},
  );
}

/**
 * list or watch objects of kind ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs`
 */
export function getListServiceCidr(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetListServiceCidr.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetListServiceCidr.Response>(
    "get",
    "/apis/networking.k8s.io/v1beta1/servicecidrs",
    options || {},
  );
}

/**
 * create a ServiceCIDR
 * @path `/apis/networking.k8s.io/v1beta1/servicecidrs`
 */
export function postCreateServiceCidr(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.PostCreateServiceCidr.QueryParams;
  body?: API.K8sV2Json.NetworkingV1beta1.PostCreateServiceCidr.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.PostCreateServiceCidr.Response>(
    "post",
    "/apis/networking.k8s.io/v1beta1/servicecidrs",
    options || {},
  );
}

/**
 * watch changes to an object of kind IPAddress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/networking.k8s.io/v1beta1/watch/ipaddresses/{name}`
 */
export function getWatchIpAddress(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.GetWatchIpAddress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetWatchIpAddress.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetWatchIpAddress.Response>(
    "get",
    `/apis/networking.k8s.io/v1beta1/watch/ipaddresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of IPAddress. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1beta1/watch/ipaddresses`
 */
export function getWatchIpAddressList(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetWatchIpAddressList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetWatchIpAddressList.Response>(
    "get",
    "/apis/networking.k8s.io/v1beta1/watch/ipaddresses",
    options || {},
  );
}

/**
 * watch changes to an object of kind ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/networking.k8s.io/v1beta1/watch/servicecidrs/{name}`
 */
export function getWatchServiceCidr(options: {
  pathParams: API.K8sV2Json.NetworkingV1beta1.GetWatchServiceCidr.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetWatchServiceCidr.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetWatchServiceCidr.Response>(
    "get",
    `/apis/networking.k8s.io/v1beta1/watch/servicecidrs/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ServiceCIDR. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1beta1/watch/servicecidrs`
 */
export function getWatchServiceCidrList(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1beta1.GetWatchServiceCidrList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1beta1.GetWatchServiceCidrList.Response>(
    "get",
    "/apis/networking.k8s.io/v1beta1/watch/servicecidrs",
    options || {},
  );
}
