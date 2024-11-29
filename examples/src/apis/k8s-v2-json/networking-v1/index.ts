import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * get available resources
 * @path `/apis/networking.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetApiResources.Response>(
    "get",
    "/apis/networking.k8s.io/v1/",
    options || {},
  );
}

/**
 * delete an IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses/{name}`
 */
export function deleteIngressClass(options: {
  pathParams: API.K8sV2Json.NetworkingV1.DeleteIngressClass.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.DeleteIngressClass.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.DeleteIngressClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.DeleteIngressClass.Response>(
    "delete",
    `/apis/networking.k8s.io/v1/ingressclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses/{name}`
 */
export function getReadIngressClass(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetReadIngressClass.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetReadIngressClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetReadIngressClass.Response>(
    "get",
    `/apis/networking.k8s.io/v1/ingressclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses/{name}`
 */
export function patchIngressClass(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PatchIngressClass.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PatchIngressClass.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PatchIngressClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PatchIngressClass.Response>(
    "patch",
    `/apis/networking.k8s.io/v1/ingressclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses/{name}`
 */
export function putReplaceIngressClass(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PutReplaceIngressClass.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PutReplaceIngressClass.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PutReplaceIngressClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PutReplaceIngressClass.Response>(
    "put",
    `/apis/networking.k8s.io/v1/ingressclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses`
 */
export function deleteCollectionIngressClass(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.DeleteCollectionIngressClass.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.DeleteCollectionIngressClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.DeleteCollectionIngressClass.Response>(
    "delete",
    "/apis/networking.k8s.io/v1/ingressclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses`
 */
export function getListIngressClass(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.GetListIngressClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetListIngressClass.Response>(
    "get",
    "/apis/networking.k8s.io/v1/ingressclasses",
    options || {},
  );
}

/**
 * create an IngressClass
 * @path `/apis/networking.k8s.io/v1/ingressclasses`
 */
export function postCreateIngressClass(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.PostCreateIngressClass.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PostCreateIngressClass.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PostCreateIngressClass.Response>(
    "post",
    "/apis/networking.k8s.io/v1/ingressclasses",
    options || {},
  );
}

/**
 * list or watch objects of kind Ingress
 * @path `/apis/networking.k8s.io/v1/ingresses`
 */
export function getListIngressForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.GetListIngressForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetListIngressForAllNamespaces.Response>(
    "get",
    "/apis/networking.k8s.io/v1/ingresses",
    options || {},
  );
}

/**
 * read status of the specified Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status`
 */
export function getReadNamespacedIngressStatus(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetReadNamespacedIngressStatus.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetReadNamespacedIngressStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetReadNamespacedIngressStatus.Response>(
    "get",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status`
 */
export function patchNamespacedIngressStatus(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PatchNamespacedIngressStatus.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PatchNamespacedIngressStatus.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PatchNamespacedIngressStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PatchNamespacedIngressStatus.Response>(
    "patch",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status`
 */
export function putReplaceNamespacedIngressStatus(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngressStatus.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngressStatus.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngressStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngressStatus.Response>(
    "put",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete an Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}`
 */
export function deleteNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.DeleteNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.DeleteNamespacedIngress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.DeleteNamespacedIngress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.DeleteNamespacedIngress.Response>(
    "delete",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}`
 */
export function getReadNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetReadNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetReadNamespacedIngress.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetReadNamespacedIngress.Response>(
    "get",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}`
 */
export function patchNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PatchNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PatchNamespacedIngress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PatchNamespacedIngress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PatchNamespacedIngress.Response>(
    "patch",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}`
 */
export function putReplaceNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PutReplaceNamespacedIngress.Response>(
    "put",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses`
 */
export function deleteCollectionNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedIngress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedIngress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedIngress.Response>(
    "delete",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses`,
    options,
  );
}

/**
 * list or watch objects of kind Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses`
 */
export function getListNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetListNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetListNamespacedIngress.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetListNamespacedIngress.Response>(
    "get",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses`,
    options,
  );
}

/**
 * create an Ingress
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses`
 */
export function postCreateNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PostCreateNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PostCreateNamespacedIngress.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PostCreateNamespacedIngress.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PostCreateNamespacedIngress.Response>(
    "post",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/ingresses`,
    options,
  );
}

/**
 * delete a NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}`
 */
export function deleteNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.DeleteNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.DeleteNamespacedNetworkPolicy.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.DeleteNamespacedNetworkPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.DeleteNamespacedNetworkPolicy.Response>(
    "delete",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}`
 */
export function getReadNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetReadNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetReadNamespacedNetworkPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetReadNamespacedNetworkPolicy.Response>(
    "get",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}`
 */
export function patchNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PatchNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PatchNamespacedNetworkPolicy.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PatchNamespacedNetworkPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PatchNamespacedNetworkPolicy.Response>(
    "patch",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}`
 */
export function putReplaceNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedNetworkPolicy.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PutReplaceNamespacedNetworkPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PutReplaceNamespacedNetworkPolicy.Response>(
    "put",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies`
 */
export function deleteCollectionNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedNetworkPolicy.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedNetworkPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.DeleteCollectionNamespacedNetworkPolicy.Response>(
    "delete",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies`,
    options,
  );
}

/**
 * list or watch objects of kind NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies`
 */
export function getListNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetListNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetListNamespacedNetworkPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetListNamespacedNetworkPolicy.Response>(
    "get",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies`,
    options,
  );
}

/**
 * create a NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies`
 */
export function postCreateNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.PostCreateNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.PostCreateNamespacedNetworkPolicy.QueryParams;
  body?: API.K8sV2Json.NetworkingV1.PostCreateNamespacedNetworkPolicy.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.PostCreateNamespacedNetworkPolicy.Response>(
    "post",
    `/apis/networking.k8s.io/v1/namespaces/${options.pathParams.namespace}/networkpolicies`,
    options,
  );
}

/**
 * list or watch objects of kind NetworkPolicy
 * @path `/apis/networking.k8s.io/v1/networkpolicies`
 */
export function getListNetworkPolicyForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.GetListNetworkPolicyForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetListNetworkPolicyForAllNamespaces.Response>(
    "get",
    "/apis/networking.k8s.io/v1/networkpolicies",
    options || {},
  );
}

/**
 * watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/networking.k8s.io/v1/watch/ingressclasses/{name}`
 */
export function getWatchIngressClass(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetWatchIngressClass.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchIngressClass.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchIngressClass.Response>(
    "get",
    `/apis/networking.k8s.io/v1/watch/ingressclasses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1/watch/ingressclasses`
 */
export function getWatchIngressClassList(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchIngressClassList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchIngressClassList.Response>(
    "get",
    "/apis/networking.k8s.io/v1/watch/ingressclasses",
    options || {},
  );
}

/**
 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1/watch/ingresses`
 */
export function getWatchIngressListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchIngressListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchIngressListForAllNamespaces.Response>(
    "get",
    "/apis/networking.k8s.io/v1/watch/ingresses",
    options || {},
  );
}

/**
 * watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}`
 */
export function getWatchNamespacedIngress(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetWatchNamespacedIngress.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchNamespacedIngress.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchNamespacedIngress.Response>(
    "get",
    `/apis/networking.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/ingresses/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses`
 */
export function getWatchNamespacedIngressList(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetWatchNamespacedIngressList.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchNamespacedIngressList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchNamespacedIngressList.Response>(
    "get",
    `/apis/networking.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/ingresses`,
    options,
  );
}

/**
 * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}`
 */
export function getWatchNamespacedNetworkPolicy(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetWatchNamespacedNetworkPolicy.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchNamespacedNetworkPolicy.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchNamespacedNetworkPolicy.Response>(
    "get",
    `/apis/networking.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/networkpolicies/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies`
 */
export function getWatchNamespacedNetworkPolicyList(options: {
  pathParams: API.K8sV2Json.NetworkingV1.GetWatchNamespacedNetworkPolicyList.PathParams;
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchNamespacedNetworkPolicyList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchNamespacedNetworkPolicyList.Response>(
    "get",
    `/apis/networking.k8s.io/v1/watch/namespaces/${options.pathParams.namespace}/networkpolicies`,
    options,
  );
}

/**
 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/networking.k8s.io/v1/watch/networkpolicies`
 */
export function getWatchNetworkPolicyListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.NetworkingV1.GetWatchNetworkPolicyListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.NetworkingV1.GetWatchNetworkPolicyListForAllNamespaces.Response>(
    "get",
    "/apis/networking.k8s.io/v1/watch/networkpolicies",
    options || {},
  );
}
