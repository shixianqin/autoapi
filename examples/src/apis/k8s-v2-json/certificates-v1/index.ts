import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * read approval of the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval`
 */
export function getReadCertificateSigningRequestApproval(options: {
  pathParams: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestApproval.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestApproval.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestApproval.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestApproval.Response>(
    "get",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}/approval`,
    options,
  );
}

/**
 * partially update approval of the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval`
 */
export function patchCertificateSigningRequestApproval(options: {
  pathParams: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestApproval.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestApproval.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestApproval.Headers;
  body?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestApproval.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestApproval.Response>(
    "patch",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}/approval`,
    options,
  );
}

/**
 * replace approval of the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/approval`
 */
export function putReplaceCertificateSigningRequestApproval(options: {
  pathParams: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestApproval.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestApproval.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestApproval.Headers;
  body: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestApproval.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestApproval.Response>(
    "put",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}/approval`,
    options,
  );
}

/**
 * read status of the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status`
 */
export function getReadCertificateSigningRequestStatus(options: {
  pathParams: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestStatus.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestStatus.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequestStatus.Response>(
    "get",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status`
 */
export function patchCertificateSigningRequestStatus(options: {
  pathParams: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestStatus.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestStatus.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestStatus.Headers;
  body?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequestStatus.Response>(
    "patch",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}/status`
 */
export function putReplaceCertificateSigningRequestStatus(options: {
  pathParams: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestStatus.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestStatus.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestStatus.Headers;
  body: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequestStatus.Response>(
    "put",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`
 */
export function deleteCertificateSigningRequest(options: {
  pathParams: API.K8sV2Json.CertificatesV1.DeleteCertificateSigningRequest.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.DeleteCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.DeleteCertificateSigningRequest.Headers;
  body?: API.K8sV2Json.CertificatesV1.DeleteCertificateSigningRequest.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.DeleteCertificateSigningRequest.Response>(
    "delete",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`
 */
export function getReadCertificateSigningRequest(options: {
  pathParams: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequest.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequest.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetReadCertificateSigningRequest.Response>(
    "get",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`
 */
export function patchCertificateSigningRequest(options: {
  pathParams: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequest.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequest.Headers;
  body?: API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequest.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PatchCertificateSigningRequest.Response>(
    "patch",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests/{name}`
 */
export function putReplaceCertificateSigningRequest(options: {
  pathParams: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequest.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequest.Headers;
  body: API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequest.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PutReplaceCertificateSigningRequest.Response>(
    "put",
    `/apis/certificates.k8s.io/v1/certificatesigningrequests/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests`
 */
export function deleteCollectionCertificateSigningRequest(options?: {
  queryParams?: API.K8sV2Json.CertificatesV1.DeleteCollectionCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.DeleteCollectionCertificateSigningRequest.Headers;
  body?: API.K8sV2Json.CertificatesV1.DeleteCollectionCertificateSigningRequest.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.DeleteCollectionCertificateSigningRequest.Response>(
    "delete",
    "/apis/certificates.k8s.io/v1/certificatesigningrequests",
    options || {},
  );
}

/**
 * list or watch objects of kind CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests`
 */
export function getListCertificateSigningRequest(options?: {
  queryParams?: API.K8sV2Json.CertificatesV1.GetListCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.GetListCertificateSigningRequest.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetListCertificateSigningRequest.Response>(
    "get",
    "/apis/certificates.k8s.io/v1/certificatesigningrequests",
    options || {},
  );
}

/**
 * create a CertificateSigningRequest
 * @path `/apis/certificates.k8s.io/v1/certificatesigningrequests`
 */
export function postCreateCertificateSigningRequest(options: {
  queryParams?: API.K8sV2Json.CertificatesV1.PostCreateCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.PostCreateCertificateSigningRequest.Headers;
  body: API.K8sV2Json.CertificatesV1.PostCreateCertificateSigningRequest.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.PostCreateCertificateSigningRequest.Response>(
    "post",
    "/apis/certificates.k8s.io/v1/certificatesigningrequests",
    options,
  );
}

/**
 * get available resources
 * @path `/apis/certificates.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.CertificatesV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetApiResources.Response>(
    "get",
    "/apis/certificates.k8s.io/v1/",
    options || {},
  );
}

/**
 * watch changes to an object of kind CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/{name}`
 */
export function getWatchCertificateSigningRequest(options: {
  pathParams: API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequest.PathParams;
  queryParams?: API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequest.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequest.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequest.Response>(
    "get",
    `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/certificates.k8s.io/v1/watch/certificatesigningrequests`
 */
export function getWatchCertificateSigningRequestList(options?: {
  queryParams?: API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequestList.QueryParams;
  headers?: API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequestList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.CertificatesV1.GetWatchCertificateSigningRequestList.Response>(
    "get",
    "/apis/certificates.k8s.io/v1/watch/certificatesigningrequests",
    options || {},
  );
}
