import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * read status of the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}/status`
 */
export function getReadFlowSchemaStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchemaStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchemaStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchemaStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchemaStatus.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}/status`
 */
export function patchFlowSchemaStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchemaStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchemaStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchemaStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchemaStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchemaStatus.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}/status`
 */
export function putReplaceFlowSchemaStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchemaStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchemaStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchemaStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchemaStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchemaStatus.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}`
 */
export function deleteFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteFlowSchema.Response>(
    "delete",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}`
 */
export function getReadFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchema.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadFlowSchema.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}`
 */
export function patchFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchFlowSchema.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/{name}`
 */
export function putReplaceFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplaceFlowSchema.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas`
 */
export function deleteCollectionFlowSchema(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionFlowSchema.Response>(
    "delete",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas",
    options || {},
  );
}

/**
 * list or watch objects of kind FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas`
 */
export function getListFlowSchema(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetListFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetListFlowSchema.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetListFlowSchema.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas",
    options || {},
  );
}

/**
 * create a FlowSchema
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas`
 */
export function postCreateFlowSchema(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreateFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreateFlowSchema.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreateFlowSchema.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreateFlowSchema.Response>(
    "post",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/flowschemas",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetApiResources.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/",
    options || {},
  );
}

/**
 * read status of the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}/status`
 */
export function getReadPriorityLevelConfigurationStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfigurationStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfigurationStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfigurationStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfigurationStatus.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}/status`
 */
export function patchPriorityLevelConfigurationStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfigurationStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfigurationStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfigurationStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfigurationStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfigurationStatus.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}/status`
 */
export function putReplacePriorityLevelConfigurationStatus(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfigurationStatus.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfigurationStatus.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfigurationStatus.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfigurationStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfigurationStatus.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}`
 */
export function deletePriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeletePriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeletePriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeletePriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeletePriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.DeletePriorityLevelConfiguration.Response>(
    "delete",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}`
 */
export function getReadPriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetReadPriorityLevelConfiguration.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}`
 */
export function patchPriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PatchPriorityLevelConfiguration.Response>(
    "patch",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/{name}`
 */
export function putReplacePriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PutReplacePriorityLevelConfiguration.Response>(
    "put",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations`
 */
export function deleteCollectionPriorityLevelConfiguration(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionPriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionPriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.DeleteCollectionPriorityLevelConfiguration.Response>(
    "delete",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations",
    options || {},
  );
}

/**
 * list or watch objects of kind PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations`
 */
export function getListPriorityLevelConfiguration(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetListPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetListPriorityLevelConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetListPriorityLevelConfiguration.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations",
    options || {},
  );
}

/**
 * create a PriorityLevelConfiguration
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations`
 */
export function postCreatePriorityLevelConfiguration(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreatePriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreatePriorityLevelConfiguration.Headers;
  body?: API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreatePriorityLevelConfiguration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.PostCreatePriorityLevelConfiguration.Response>(
    "post",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/prioritylevelconfigurations",
    options || {},
  );
}

/**
 * watch changes to an object of kind FlowSchema. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/flowschemas/{name}`
 */
export function getWatchFlowSchema(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchema.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchema.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchema.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchema.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/flowschemas/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of FlowSchema. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/flowschemas`
 */
export function getWatchFlowSchemaList(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchemaList.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchemaList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchFlowSchemaList.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/flowschemas",
    options || {},
  );
}

/**
 * watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/prioritylevelconfigurations/{name}`
 */
export function getWatchPriorityLevelConfiguration(options: {
  pathParams: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfiguration.PathParams;
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfiguration.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfiguration.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfiguration.Response>(
    "get",
    `/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/prioritylevelconfigurations/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/prioritylevelconfigurations`
 */
export function getWatchPriorityLevelConfigurationList(options?: {
  queryParams?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfigurationList.QueryParams;
  headers?: API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfigurationList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.FlowcontrolApiserverV1beta3.GetWatchPriorityLevelConfigurationList.Response>(
    "get",
    "/apis/flowcontrol.apiserver.k8s.io/v1beta3/watch/prioritylevelconfigurations",
    options || {},
  );
}
