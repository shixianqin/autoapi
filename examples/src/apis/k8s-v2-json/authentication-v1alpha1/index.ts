import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/authentication.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.AuthenticationV1alpha1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthenticationV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/authentication.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * create a SelfSubjectReview
 * @path `/apis/authentication.k8s.io/v1alpha1/selfsubjectreviews`
 */
export function postCreateSelfSubjectReview(options?: {
  queryParams?: API.K8sV2Json.AuthenticationV1alpha1.PostCreateSelfSubjectReview.QueryParams;
  headers?: API.K8sV2Json.AuthenticationV1alpha1.PostCreateSelfSubjectReview.Headers;
  body?: API.K8sV2Json.AuthenticationV1alpha1.PostCreateSelfSubjectReview.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AuthenticationV1alpha1.PostCreateSelfSubjectReview.Response>(
    "post",
    "/apis/authentication.k8s.io/v1alpha1/selfsubjectreviews",
    options || {},
  );
}
