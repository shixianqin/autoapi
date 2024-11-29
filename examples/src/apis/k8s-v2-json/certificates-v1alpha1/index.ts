import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * delete a ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`
 */
export function deleteClusterTrustBundle(options: {
  pathParams: API.K8sV2Json.CertificatesV1alpha1.DeleteClusterTrustBundle.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.DeleteClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CertificatesV1alpha1.DeleteClusterTrustBundle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.DeleteClusterTrustBundle.Response>(
    "delete",
    `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`
 */
export function getReadClusterTrustBundle(options: {
  pathParams: API.K8sV2Json.CertificatesV1alpha1.GetReadClusterTrustBundle.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.GetReadClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.GetReadClusterTrustBundle.Response>(
    "get",
    `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`
 */
export function patchClusterTrustBundle(options: {
  pathParams: API.K8sV2Json.CertificatesV1alpha1.PatchClusterTrustBundle.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.PatchClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CertificatesV1alpha1.PatchClusterTrustBundle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.PatchClusterTrustBundle.Response>(
    "patch",
    `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/{name}`
 */
export function putReplaceClusterTrustBundle(options: {
  pathParams: API.K8sV2Json.CertificatesV1alpha1.PutReplaceClusterTrustBundle.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.PutReplaceClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CertificatesV1alpha1.PutReplaceClusterTrustBundle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.PutReplaceClusterTrustBundle.Response>(
    "put",
    `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles`
 */
export function deleteCollectionClusterTrustBundle(options?: {
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.DeleteCollectionClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.CertificatesV1alpha1.DeleteCollectionClusterTrustBundle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.DeleteCollectionClusterTrustBundle.Response>(
    "delete",
    "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles",
    options || {},
  );
}

/**
 * list or watch objects of kind ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles`
 */
export function getListClusterTrustBundle(options?: {
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.GetListClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.GetListClusterTrustBundle.Response>(
    "get",
    "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles",
    options || {},
  );
}

/**
 * create a ClusterTrustBundle
 * @path `/apis/certificates.k8s.io/v1alpha1/clustertrustbundles`
 */
export function postCreateClusterTrustBundle(options: {
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.PostCreateClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  body: API.K8sV2Json.CertificatesV1alpha1.PostCreateClusterTrustBundle.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.PostCreateClusterTrustBundle.Response>(
    "post",
    "/apis/certificates.k8s.io/v1alpha1/clustertrustbundles",
    options,
  );
}

/**
 * get available resources
 * @path `/apis/certificates.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/certificates.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * watch changes to an object of kind ClusterTrustBundle. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles/{name}`
 */
export function getWatchClusterTrustBundle(options: {
  pathParams: API.K8sV2Json.CertificatesV1alpha1.GetWatchClusterTrustBundle.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.GetWatchClusterTrustBundle.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.GetWatchClusterTrustBundle.Response>(
    "get",
    `/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ClusterTrustBundle. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles`
 */
export function getWatchClusterTrustBundleList(options?: {
  queryParams?: API.K8sV2Json.CertificatesV1alpha1.GetWatchClusterTrustBundleList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1alpha1.GetWatchClusterTrustBundleList.Response>(
    "get",
    "/apis/certificates.k8s.io/v1alpha1/watch/clustertrustbundles",
    options || {},
  );
}
