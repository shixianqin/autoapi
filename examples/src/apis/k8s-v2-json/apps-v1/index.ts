import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * list or watch objects of kind ControllerRevision
 * @path `/apis/apps/v1/controllerrevisions`
 */
export function getListControllerRevisionForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetListControllerRevisionForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListControllerRevisionForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/controllerrevisions",
    options || {},
  );
}

/**
 * list or watch objects of kind DaemonSet
 * @path `/apis/apps/v1/daemonsets`
 */
export function getListDaemonSetForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetListDaemonSetForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListDaemonSetForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/daemonsets",
    options || {},
  );
}

/**
 * list or watch objects of kind Deployment
 * @path `/apis/apps/v1/deployments`
 */
export function getListDeploymentForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetListDeploymentForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListDeploymentForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/deployments",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/apps/v1/`
 */
export function getApiResources(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetApiResources.Response>(
    "get",
    "/apis/apps/v1/",
    options || {},
  );
}

/**
 * delete a ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}`
 */
export function deleteNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteNamespacedControllerRevision.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteNamespacedControllerRevision.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteNamespacedControllerRevision.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}`
 */
export function getReadNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedControllerRevision.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedControllerRevision.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}`
 */
export function patchNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedControllerRevision.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedControllerRevision.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedControllerRevision.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions/{name}`
 */
export function putReplaceNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedControllerRevision.QueryParams;
  body: API.K8sV2Json.AppsV1.PutReplaceNamespacedControllerRevision.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedControllerRevision.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions`
 */
export function deleteCollectionNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedControllerRevision.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedControllerRevision.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteCollectionNamespacedControllerRevision.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions`,
    options,
  );
}

/**
 * list or watch objects of kind ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions`
 */
export function getListNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.GetListNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetListNamespacedControllerRevision.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListNamespacedControllerRevision.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions`,
    options,
  );
}

/**
 * create a ControllerRevision
 * @path `/apis/apps/v1/namespaces/{namespace}/controllerrevisions`
 */
export function postCreateNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.PostCreateNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PostCreateNamespacedControllerRevision.QueryParams;
  body: API.K8sV2Json.AppsV1.PostCreateNamespacedControllerRevision.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PostCreateNamespacedControllerRevision.Response>(
    "post",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/controllerrevisions`,
    options,
  );
}

/**
 * read status of the specified DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status`
 */
export function getReadNamespacedDaemonSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedDaemonSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedDaemonSetStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedDaemonSetStatus.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status`
 */
export function patchNamespacedDaemonSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedDaemonSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedDaemonSetStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedDaemonSetStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedDaemonSetStatus.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}/status`
 */
export function putReplaceNamespacedDaemonSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSetStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSetStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSetStatus.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}`
 */
export function deleteNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteNamespacedDaemonSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteNamespacedDaemonSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteNamespacedDaemonSet.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}`
 */
export function getReadNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedDaemonSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedDaemonSet.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}`
 */
export function patchNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedDaemonSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedDaemonSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedDaemonSet.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets/{name}`
 */
export function putReplaceNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedDaemonSet.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets`
 */
export function deleteCollectionNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDaemonSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDaemonSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDaemonSet.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets`,
    options,
  );
}

/**
 * list or watch objects of kind DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets`
 */
export function getListNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetListNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetListNamespacedDaemonSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListNamespacedDaemonSet.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets`,
    options,
  );
}

/**
 * create a DaemonSet
 * @path `/apis/apps/v1/namespaces/{namespace}/daemonsets`
 */
export function postCreateNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PostCreateNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PostCreateNamespacedDaemonSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PostCreateNamespacedDaemonSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PostCreateNamespacedDaemonSet.Response>(
    "post",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/daemonsets`,
    options,
  );
}

/**
 * read scale of the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale`
 */
export function getReadNamespacedDeploymentScale(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedDeploymentScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedDeploymentScale.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedDeploymentScale.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * partially update scale of the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale`
 */
export function patchNamespacedDeploymentScale(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedDeploymentScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedDeploymentScale.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedDeploymentScale.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedDeploymentScale.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * replace scale of the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}/scale`
 */
export function putReplaceNamespacedDeploymentScale(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentScale.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentScale.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentScale.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * read status of the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status`
 */
export function getReadNamespacedDeploymentStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedDeploymentStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedDeploymentStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedDeploymentStatus.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status`
 */
export function patchNamespacedDeploymentStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedDeploymentStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedDeploymentStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedDeploymentStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedDeploymentStatus.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}/status`
 */
export function putReplaceNamespacedDeploymentStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedDeploymentStatus.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}`
 */
export function deleteNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteNamespacedDeployment.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteNamespacedDeployment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteNamespacedDeployment.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}`
 */
export function getReadNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedDeployment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedDeployment.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}`
 */
export function patchNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedDeployment.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedDeployment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedDeployment.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments/{name}`
 */
export function putReplaceNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeployment.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedDeployment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedDeployment.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments`
 */
export function deleteCollectionNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDeployment.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDeployment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteCollectionNamespacedDeployment.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments`,
    options,
  );
}

/**
 * list or watch objects of kind Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments`
 */
export function getListNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.GetListNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetListNamespacedDeployment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListNamespacedDeployment.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments`,
    options,
  );
}

/**
 * create a Deployment
 * @path `/apis/apps/v1/namespaces/{namespace}/deployments`
 */
export function postCreateNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.PostCreateNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PostCreateNamespacedDeployment.QueryParams;
  body?: API.K8sV2Json.AppsV1.PostCreateNamespacedDeployment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PostCreateNamespacedDeployment.Response>(
    "post",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/deployments`,
    options,
  );
}

/**
 * read scale of the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale`
 */
export function getReadNamespacedReplicaSetScale(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSetScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSetScale.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSetScale.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * partially update scale of the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale`
 */
export function patchNamespacedReplicaSetScale(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetScale.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetScale.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetScale.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * replace scale of the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/scale`
 */
export function putReplaceNamespacedReplicaSetScale(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetScale.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetScale.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetScale.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * read status of the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status`
 */
export function getReadNamespacedReplicaSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSetStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSetStatus.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status`
 */
export function patchNamespacedReplicaSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedReplicaSetStatus.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}/status`
 */
export function putReplaceNamespacedReplicaSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSetStatus.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}`
 */
export function deleteNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteNamespacedReplicaSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteNamespacedReplicaSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteNamespacedReplicaSet.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}`
 */
export function getReadNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedReplicaSet.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}`
 */
export function patchNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedReplicaSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedReplicaSet.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets/{name}`
 */
export function putReplaceNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedReplicaSet.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets`
 */
export function deleteCollectionNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedReplicaSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedReplicaSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteCollectionNamespacedReplicaSet.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets`,
    options,
  );
}

/**
 * list or watch objects of kind ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets`
 */
export function getListNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetListNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetListNamespacedReplicaSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListNamespacedReplicaSet.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets`,
    options,
  );
}

/**
 * create a ReplicaSet
 * @path `/apis/apps/v1/namespaces/{namespace}/replicasets`
 */
export function postCreateNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PostCreateNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PostCreateNamespacedReplicaSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PostCreateNamespacedReplicaSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PostCreateNamespacedReplicaSet.Response>(
    "post",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/replicasets`,
    options,
  );
}

/**
 * read scale of the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale`
 */
export function getReadNamespacedStatefulSetScale(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSetScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSetScale.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSetScale.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * partially update scale of the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale`
 */
export function patchNamespacedStatefulSetScale(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetScale.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetScale.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetScale.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * replace scale of the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/scale`
 */
export function putReplaceNamespacedStatefulSetScale(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetScale.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetScale.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetScale.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetScale.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}/scale`,
    options,
  );
}

/**
 * read status of the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status`
 */
export function getReadNamespacedStatefulSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSetStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSetStatus.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status`
 */
export function patchNamespacedStatefulSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedStatefulSetStatus.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}/status`
 */
export function putReplaceNamespacedStatefulSetStatus(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetStatus.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetStatus.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetStatus.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSetStatus.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}`
 */
export function deleteNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteNamespacedStatefulSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteNamespacedStatefulSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteNamespacedStatefulSet.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}`
 */
export function getReadNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetReadNamespacedStatefulSet.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}`
 */
export function patchNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PatchNamespacedStatefulSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PatchNamespacedStatefulSet.Response>(
    "patch",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets/{name}`
 */
export function putReplaceNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PutReplaceNamespacedStatefulSet.Response>(
    "put",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets`
 */
export function deleteCollectionNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedStatefulSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.DeleteCollectionNamespacedStatefulSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.DeleteCollectionNamespacedStatefulSet.Response>(
    "delete",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets`,
    options,
  );
}

/**
 * list or watch objects of kind StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets`
 */
export function getListNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetListNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetListNamespacedStatefulSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListNamespacedStatefulSet.Response>(
    "get",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets`,
    options,
  );
}

/**
 * create a StatefulSet
 * @path `/apis/apps/v1/namespaces/{namespace}/statefulsets`
 */
export function postCreateNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.PostCreateNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.PostCreateNamespacedStatefulSet.QueryParams;
  body?: API.K8sV2Json.AppsV1.PostCreateNamespacedStatefulSet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.PostCreateNamespacedStatefulSet.Response>(
    "post",
    `/apis/apps/v1/namespaces/${options.pathParams.namespace}/statefulsets`,
    options,
  );
}

/**
 * list or watch objects of kind ReplicaSet
 * @path `/apis/apps/v1/replicasets`
 */
export function getListReplicaSetForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetListReplicaSetForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListReplicaSetForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/replicasets",
    options || {},
  );
}

/**
 * list or watch objects of kind StatefulSet
 * @path `/apis/apps/v1/statefulsets`
 */
export function getListStatefulSetForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetListStatefulSetForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetListStatefulSetForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/statefulsets",
    options || {},
  );
}

/**
 * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/controllerrevisions`
 */
export function getWatchControllerRevisionListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetWatchControllerRevisionListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchControllerRevisionListForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/watch/controllerrevisions",
    options || {},
  );
}

/**
 * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/daemonsets`
 */
export function getWatchDaemonSetListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetWatchDaemonSetListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchDaemonSetListForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/watch/daemonsets",
    options || {},
  );
}

/**
 * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/deployments`
 */
export function getWatchDeploymentListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetWatchDeploymentListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchDeploymentListForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/watch/deployments",
    options || {},
  );
}

/**
 * watch changes to an object of kind ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions/{name}`
 */
export function getWatchNamespacedControllerRevision(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedControllerRevision.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedControllerRevision.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedControllerRevision.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/controllerrevisions/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ControllerRevision. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/controllerrevisions`
 */
export function getWatchNamespacedControllerRevisionList(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedControllerRevisionList.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedControllerRevisionList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedControllerRevisionList.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/controllerrevisions`,
    options,
  );
}

/**
 * watch changes to an object of kind DaemonSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/daemonsets/{name}`
 */
export function getWatchNamespacedDaemonSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedDaemonSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedDaemonSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedDaemonSet.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/daemonsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of DaemonSet. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/daemonsets`
 */
export function getWatchNamespacedDaemonSetList(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedDaemonSetList.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedDaemonSetList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedDaemonSetList.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/daemonsets`,
    options,
  );
}

/**
 * watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/deployments/{name}`
 */
export function getWatchNamespacedDeployment(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedDeployment.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedDeployment.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedDeployment.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/deployments/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/deployments`
 */
export function getWatchNamespacedDeploymentList(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedDeploymentList.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedDeploymentList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedDeploymentList.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/deployments`,
    options,
  );
}

/**
 * watch changes to an object of kind ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/replicasets/{name}`
 */
export function getWatchNamespacedReplicaSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedReplicaSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedReplicaSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedReplicaSet.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/replicasets/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/replicasets`
 */
export function getWatchNamespacedReplicaSetList(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedReplicaSetList.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedReplicaSetList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedReplicaSetList.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/replicasets`,
    options,
  );
}

/**
 * watch changes to an object of kind StatefulSet. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/statefulsets/{name}`
 */
export function getWatchNamespacedStatefulSet(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedStatefulSet.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedStatefulSet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedStatefulSet.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/statefulsets/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/namespaces/{namespace}/statefulsets`
 */
export function getWatchNamespacedStatefulSetList(options: {
  pathParams: API.K8sV2Json.AppsV1.GetWatchNamespacedStatefulSetList.PathParams;
  queryParams?: API.K8sV2Json.AppsV1.GetWatchNamespacedStatefulSetList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchNamespacedStatefulSetList.Response>(
    "get",
    `/apis/apps/v1/watch/namespaces/${options.pathParams.namespace}/statefulsets`,
    options,
  );
}

/**
 * watch individual changes to a list of ReplicaSet. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/replicasets`
 */
export function getWatchReplicaSetListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetWatchReplicaSetListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchReplicaSetListForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/watch/replicasets",
    options || {},
  );
}

/**
 * watch individual changes to a list of StatefulSet. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/apps/v1/watch/statefulsets`
 */
export function getWatchStatefulSetListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.AppsV1.GetWatchStatefulSetListForAllNamespaces.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.AppsV1.GetWatchStatefulSetListForAllNamespaces.Response>(
    "get",
    "/apis/apps/v1/watch/statefulsets",
    options || {},
  );
}
