import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/admissionregistration.k8s.io/v1beta1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetApiResources.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1beta1/",
    options || {},
  );
}

/**
 * read status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}/status`
 */
export function getReadValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicyStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicyStatus.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}/status`
 */
export function patchValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyStatus.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}/status`
 */
export function putReplaceValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyStatus.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyStatus.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}`
 */
export function deleteValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicy.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}`
 */
export function getReadValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicy.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}`
 */
export function patchValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicy.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/{name}`
 */
export function putReplaceValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicy.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies`
 */
export function deleteCollectionValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteCollectionValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteCollectionValidatingAdmissionPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.DeleteCollectionValidatingAdmissionPolicy.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies`
 */
export function getListValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetListValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetListValidatingAdmissionPolicy.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * create a ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies`
 */
export function postCreateValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PostCreateValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PostCreateValidatingAdmissionPolicy.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PostCreateValidatingAdmissionPolicy.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * delete a ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}`
 */
export function deleteValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicyBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.DeleteValidatingAdmissionPolicyBinding.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}`
 */
export function getReadValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetReadValidatingAdmissionPolicyBinding.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}`
 */
export function patchValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PatchValidatingAdmissionPolicyBinding.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/{name}`
 */
export function putReplaceValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PutReplaceValidatingAdmissionPolicyBinding.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings`
 */
export function deleteCollectionValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteCollectionValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.DeleteCollectionValidatingAdmissionPolicyBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.DeleteCollectionValidatingAdmissionPolicyBinding.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings`
 */
export function getListValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetListValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetListValidatingAdmissionPolicyBinding.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * create a ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings`
 */
export function postCreateValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.PostCreateValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  body?: API.K8sV2Json.AdmissionregistrationV1beta1.PostCreateValidatingAdmissionPolicyBinding.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.PostCreateValidatingAdmissionPolicyBinding.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1beta1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicies/{name}`
 */
export function getWatchValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicy.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicies`
 */
export function getWatchValidatingAdmissionPolicyList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings/{name}`
 */
export function getWatchValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyBinding.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings`
 */
export function getWatchValidatingAdmissionPolicyBindingList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyBindingList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1beta1.GetWatchValidatingAdmissionPolicyBindingList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1beta1/watch/validatingadmissionpolicybindings",
    options || {},
  );
}
