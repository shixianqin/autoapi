import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/authorization.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
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
  body: API.K8sV2Json.AuthorizationV1.PostCreateNamespacedLocalSubjectAccessReview.Body;
  headers?: Record<string, any>;
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
  body: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectAccessReview.Body;
  headers?: Record<string, any>;
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
  body: API.K8sV2Json.AuthorizationV1.PostCreateSelfSubjectRulesReview.Body;
  headers?: Record<string, any>;
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
  body: API.K8sV2Json.AuthorizationV1.PostCreateSubjectAccessReview.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthorizationV1.PostCreateSubjectAccessReview.Response>(
    "post",
    "/apis/authorization.k8s.io/v1/subjectaccessreviews",
    options,
  );
}
