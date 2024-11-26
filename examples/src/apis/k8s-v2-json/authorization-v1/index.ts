import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/authorization.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.AuthorizationV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthorizationV1.GetApiResources.Response>(
    "get",
    "/apis/authorization.k8s.io/v1/",
    options || {},
  );
}

/**
 * create a LocalSubjectAccessReview
 * @path `/apis/authorization.k8s.io/v1/namespaces/{namespace}/localsubjectaccessreviews`
 */
export function postCreateNamespacedLocalSubjectAccessReview(options: {
  pathParams: API.K8sV2Json.AuthorizationV1.PostCreateNamespacedLocalSubjectAccessReview.PathParams;
  queryParams?: API.K8sV2Json.AuthorizationV1.PostCreateNamespacedLocalSubjectAccessReview.QueryParams;
  headers?: API.K8sV2Json.AuthorizationV1.PostCreateNamespacedLocalSubjectAccessReview.Headers;
  body: API.K8sV2Json.AuthorizationV1.PostCreateNamespacedLocalSubjectAccessReview.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthorizationV1.PostCreateNamespacedLocalSubjectAccessReview.Response>(
    "post",
    `/apis/authorization.k8s.io/v1/namespaces/${options.pathParams.namespace}/localsubjectaccessreviews`,
    options,
  );
}

/**
 * create a SelfSubjectAccessReview
 * @path `/apis/authorization.k8s.io/v1/selfsubjectaccessreviews`
 */
export function postCreateSelfSubjectAccessReview(options: {
  queryParams?: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectAccessReview.QueryParams;
  headers?: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectAccessReview.Headers;
  body: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectAccessReview.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectAccessReview.Response>(
    "post",
    "/apis/authorization.k8s.io/v1/selfsubjectaccessreviews",
    options,
  );
}

/**
 * create a SelfSubjectRulesReview
 * @path `/apis/authorization.k8s.io/v1/selfsubjectrulesreviews`
 */
export function postCreateSelfSubjectRulesReview(options: {
  queryParams?: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectRulesReview.QueryParams;
  headers?: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectRulesReview.Headers;
  body: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectRulesReview.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectRulesReview.Response>(
    "post",
    "/apis/authorization.k8s.io/v1/selfsubjectrulesreviews",
    options,
  );
}

/**
 * create a SubjectAccessReview
 * @path `/apis/authorization.k8s.io/v1/subjectaccessreviews`
 */
export function postCreateSubjectAccessReview(options: {
  queryParams?: API.K8sV2Json.AuthorizationV1.PostCreateSubjectAccessReview.QueryParams;
  headers?: API.K8sV2Json.AuthorizationV1.PostCreateSubjectAccessReview.Headers;
  body: API.K8sV2Json.AuthorizationV1.PostCreateSubjectAccessReview.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthorizationV1.PostCreateSubjectAccessReview.Response>(
    "post",
    "/apis/authorization.k8s.io/v1/subjectaccessreviews",
    options,
  );
}
