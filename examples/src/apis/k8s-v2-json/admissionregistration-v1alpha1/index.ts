import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetApiResources.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1alpha1/",
    options || {},
  );
}

/**
 * read status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}/status`
 */
export function getReadValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicyStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicyStatus.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}/status`
 */
export function patchValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyStatus.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyStatus.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}/status`
 */
export function putReplaceValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyStatus.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyStatus.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}`
 */
export function deleteValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicy.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}`
 */
export function getReadValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicy.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}`
 */
export function patchValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicy.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/{name}`
 */
export function putReplaceValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicy.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies`
 */
export function deleteCollectionValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteCollectionValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteCollectionValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteCollectionValidatingAdmissionPolicy.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies`
 */
export function getListValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetListValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetListValidatingAdmissionPolicy.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * create a ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies`
 */
export function postCreateValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PostCreateValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PostCreateValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PostCreateValidatingAdmissionPolicy.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * delete a ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}`
 */
export function deleteValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteValidatingAdmissionPolicyBinding.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}`
 */
export function getReadValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetReadValidatingAdmissionPolicyBinding.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}`
 */
export function patchValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PatchValidatingAdmissionPolicyBinding.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/{name}`
 */
export function putReplaceValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PutReplaceValidatingAdmissionPolicyBinding.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings`
 */
export function deleteCollectionValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteCollectionValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteCollectionValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.DeleteCollectionValidatingAdmissionPolicyBinding.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings`
 */
export function getListValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetListValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetListValidatingAdmissionPolicyBinding.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * create a ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings`
 */
export function postCreateValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.PostCreateValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1alpha1.PostCreateValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.PostCreateValidatingAdmissionPolicyBinding.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1alpha1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicies/{name}`
 */
export function getWatchValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicy.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicies`
 */
export function getWatchValidatingAdmissionPolicyList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicybindings/{name}`
 */
export function getWatchValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyBinding.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicybindings`
 */
export function getWatchValidatingAdmissionPolicyBindingList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyBindingList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1alpha1.GetWatchValidatingAdmissionPolicyBindingList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1alpha1/watch/validatingadmissionpolicybindings",
    options || {},
  );
}
