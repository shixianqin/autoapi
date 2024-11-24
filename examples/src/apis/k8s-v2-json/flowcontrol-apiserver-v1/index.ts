import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * read status of the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status`
 */
export function getReadFlowSchemaStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchemaStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchemaStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchemaStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchemaStatus.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status`
 */
export function patchFlowSchemaStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchemaStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchemaStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchemaStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchemaStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchemaStatus.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}/status`
 */
export function putReplaceFlowSchemaStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchemaStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchemaStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchemaStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchemaStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchemaStatus.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`
 */
export function deleteFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.DeleteFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.DeleteFlowSchema.Response>(
    "delete",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`
 */
export function getReadFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchema.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetReadFlowSchema.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`
 */
export function patchFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PatchFlowSchema.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/{name}`
 */
export function putReplaceFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PutReplaceFlowSchema.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas`
 */
export function deleteCollectionFlowSchema(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionFlowSchema.Response>(
    "delete",
    "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas",
    options || {},
  );
}

/**
 * list or watch objects of kind FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas`
 */
export function getListFlowSchema(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetListFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetListFlowSchema.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetListFlowSchema.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas",
    options || {},
  );
}

/**
 * create a FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas`
 */
export function postCreateFlowSchema(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PostCreateFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PostCreateFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PostCreateFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PostCreateFlowSchema.Response>(
    "post",
    "/apis/flowcontrol.apiserver.k8s.io/v1/flowschemas",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetApiResources.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1/",
    options || {},
  );
}

/**
 * read status of the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status`
 */
export function getReadPriorityLevelConfigurationStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfigurationStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfigurationStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfigurationStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfigurationStatus.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status`
 */
export function patchPriorityLevelConfigurationStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfigurationStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfigurationStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfigurationStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfigurationStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfigurationStatus.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}/status`
 */
export function putReplacePriorityLevelConfigurationStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfigurationStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfigurationStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfigurationStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfigurationStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfigurationStatus.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`
 */
export function deletePriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.DeletePriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.DeletePriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.DeletePriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.DeletePriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.DeletePriorityLevelConfiguration.Response>(
    "delete",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`
 */
export function getReadPriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetReadPriorityLevelConfiguration.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`
 */
export function patchPriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PatchPriorityLevelConfiguration.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/{name}`
 */
export function putReplacePriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PutReplacePriorityLevelConfiguration.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations`
 */
export function deleteCollectionPriorityLevelConfiguration(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionPriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionPriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.DeleteCollectionPriorityLevelConfiguration.Response>(
    "delete",
    "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations",
    options || {},
  );
}

/**
 * list or watch objects of kind PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations`
 */
export function getListPriorityLevelConfiguration(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetListPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetListPriorityLevelConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetListPriorityLevelConfiguration.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations",
    options || {},
  );
}

/**
 * create a PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations`
 */
export function postCreatePriorityLevelConfiguration(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.PostCreatePriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.PostCreatePriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1.PostCreatePriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.PostCreatePriorityLevelConfiguration.Response>(
    "post",
    "/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations",
    options || {},
  );
}

/**
 * watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/{name}`
 */
export function getWatchFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchema.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchema.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas`
 */
export function getWatchFlowSchemaList(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchemaList.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchemaList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetWatchFlowSchemaList.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1/watch/flowschemas",
    options || {},
  );
}

/**
 * watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/{name}`
 */
export function getWatchPriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfiguration.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations`
 */
export function getWatchPriorityLevelConfigurationList(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfigurationList.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfigurationList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1.GetWatchPriorityLevelConfigurationList.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations",
    options || {},
  );
}
