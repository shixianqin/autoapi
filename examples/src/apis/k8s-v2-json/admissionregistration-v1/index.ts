import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/admissionregistration.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetApiResources.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete a MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`
 */
export function deleteMutatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.DeleteMutatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteMutatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteMutatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteMutatingWebhookConfiguration.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`
 */
export function getReadMutatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetReadMutatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetReadMutatingWebhookConfiguration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetReadMutatingWebhookConfiguration.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`
 */
export function patchMutatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PatchMutatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PatchMutatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PatchMutatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PatchMutatingWebhookConfiguration.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/{name}`
 */
export function putReplaceMutatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PutReplaceMutatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceMutatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceMutatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PutReplaceMutatingWebhookConfiguration.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`
 */
export function deleteCollectionMutatingWebhookConfiguration(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionMutatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionMutatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionMutatingWebhookConfiguration.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations",
    options || {},
  );
}

/**
 * list or watch objects of kind MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`
 */
export function getListMutatingWebhookConfiguration(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetListMutatingWebhookConfiguration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetListMutatingWebhookConfiguration.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations",
    options || {},
  );
}

/**
 * create a MutatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations`
 */
export function postCreateMutatingWebhookConfiguration(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PostCreateMutatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PostCreateMutatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PostCreateMutatingWebhookConfiguration.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations",
    options || {},
  );
}

/**
 * read status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status`
 */
export function getReadValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicyStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicyStatus.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status`
 */
export function patchValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyStatus.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyStatus.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}/status`
 */
export function putReplaceValidatingAdmissionPolicyStatus(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyStatus.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyStatus.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyStatus.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`
 */
export function deleteValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicy.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`
 */
export function getReadValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicy.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`
 */
export function patchValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicy.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/{name}`
 */
export function putReplaceValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicy.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies`
 */
export function deleteCollectionValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingAdmissionPolicy.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies`
 */
export function getListValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetListValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetListValidatingAdmissionPolicy.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * create a ValidatingAdmissionPolicy
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies`
 */
export function postCreateValidatingAdmissionPolicy(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingAdmissionPolicy.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingAdmissionPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingAdmissionPolicy.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * delete a ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`
 */
export function deleteValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingAdmissionPolicyBinding.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`
 */
export function getReadValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingAdmissionPolicyBinding.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`
 */
export function patchValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PatchValidatingAdmissionPolicyBinding.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/{name}`
 */
export function putReplaceValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingAdmissionPolicyBinding.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings`
 */
export function deleteCollectionValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingAdmissionPolicyBinding.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings`
 */
export function getListValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetListValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetListValidatingAdmissionPolicyBinding.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * create a ValidatingAdmissionPolicyBinding
 * @path `/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings`
 */
export function postCreateValidatingAdmissionPolicyBinding(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingAdmissionPolicyBinding.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingAdmissionPolicyBinding.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingAdmissionPolicyBinding.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * delete a ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`
 */
export function deleteValidatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteValidatingWebhookConfiguration.Response>(
    "delete",
    `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`
 */
export function getReadValidatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingWebhookConfiguration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetReadValidatingWebhookConfiguration.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`
 */
export function patchValidatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PatchValidatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PatchValidatingWebhookConfiguration.Response>(
    "patch",
    `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/{name}`
 */
export function putReplaceValidatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PutReplaceValidatingWebhookConfiguration.Response>(
    "put",
    `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`
 */
export function deleteCollectionValidatingWebhookConfiguration(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.DeleteCollectionValidatingWebhookConfiguration.Response>(
    "delete",
    "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations",
    options || {},
  );
}

/**
 * list or watch objects of kind ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`
 */
export function getListValidatingWebhookConfiguration(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetListValidatingWebhookConfiguration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetListValidatingWebhookConfiguration.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations",
    options || {},
  );
}

/**
 * create a ValidatingWebhookConfiguration
 * @path `/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations`
 */
export function postCreateValidatingWebhookConfiguration(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingWebhookConfiguration.QueryParams;
  body?: API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingWebhookConfiguration.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.PostCreateValidatingWebhookConfiguration.Response>(
    "post",
    "/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations",
    options || {},
  );
}

/**
 * watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/{name}`
 */
export function getWatchMutatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetWatchMutatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchMutatingWebhookConfiguration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchMutatingWebhookConfiguration.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations`
 */
export function getWatchMutatingWebhookConfigurationList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchMutatingWebhookConfigurationList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchMutatingWebhookConfigurationList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/{name}`
 */
export function getWatchValidatingAdmissionPolicy(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicy.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicy.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingAdmissionPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies`
 */
export function getWatchValidatingAdmissionPolicyList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicies",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/{name}`
 */
export function getWatchValidatingAdmissionPolicyBinding(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyBinding.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyBinding.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyBinding.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingAdmissionPolicyBinding. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings`
 */
export function getWatchValidatingAdmissionPolicyBindingList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyBindingList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingAdmissionPolicyBindingList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/watch/validatingadmissionpolicybindings",
    options || {},
  );
}

/**
 * watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/{name}`
 */
export function getWatchValidatingWebhookConfiguration(options: {
  pathParams: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingWebhookConfiguration.PathParams;
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingWebhookConfiguration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingWebhookConfiguration.Response>(
    "get",
    `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations`
 */
export function getWatchValidatingWebhookConfigurationList(options?: {
  queryParams?: API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingWebhookConfigurationList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AdmissionregistrationV1.GetWatchValidatingWebhookConfigurationList.Response>(
    "get",
    "/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations",
    options || {},
  );
}
