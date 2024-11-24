import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * list or watch objects of kind CronJob
 * @path `/apis/batch/v1/cronjobs`
 */
export function getListCronJobForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.BatchV1.GetListCronJobForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetListCronJobForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetListCronJobForAllNamespaces.Response>(
    "get",
    "/apis/batch/v1/cronjobs",
    options || {},
  );
}

/**
 * get available resources
 * @path `/apis/batch/v1/`
 */
export function getApiResources(options?: {
  headers?: API.K8sV2Json.BatchV1.GetApiResources.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetApiResources.Response>(
    "get",
    "/apis/batch/v1/",
    options || {},
  );
}

/**
 * list or watch objects of kind Job
 * @path `/apis/batch/v1/jobs`
 */
export function getListJobForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.BatchV1.GetListJobForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetListJobForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetListJobForAllNamespaces.Response>(
    "get",
    "/apis/batch/v1/jobs",
    options || {},
  );
}

/**
 * read status of the specified CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status`
 */
export function getReadNamespacedCronJobStatus(options: {
  pathParams: API.K8sV2Json.BatchV1.GetReadNamespacedCronJobStatus.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetReadNamespacedCronJobStatus.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetReadNamespacedCronJobStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetReadNamespacedCronJobStatus.Response>(
    "get",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status`
 */
export function patchNamespacedCronJobStatus(options: {
  pathParams: API.K8sV2Json.BatchV1.PatchNamespacedCronJobStatus.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PatchNamespacedCronJobStatus.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PatchNamespacedCronJobStatus.Headers;
  body?: API.K8sV2Json.BatchV1.PatchNamespacedCronJobStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PatchNamespacedCronJobStatus.Response>(
    "patch",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status`
 */
export function putReplaceNamespacedCronJobStatus(options: {
  pathParams: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJobStatus.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJobStatus.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJobStatus.Headers;
  body?: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJobStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJobStatus.Response>(
    "put",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}`
 */
export function deleteNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.DeleteNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.DeleteNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.DeleteNamespacedCronJob.Headers;
  body?: API.K8sV2Json.BatchV1.DeleteNamespacedCronJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.DeleteNamespacedCronJob.Response>(
    "delete",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}`
 */
export function getReadNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.GetReadNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetReadNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetReadNamespacedCronJob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetReadNamespacedCronJob.Response>(
    "get",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}`
 */
export function patchNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.PatchNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PatchNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PatchNamespacedCronJob.Headers;
  body?: API.K8sV2Json.BatchV1.PatchNamespacedCronJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PatchNamespacedCronJob.Response>(
    "patch",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs/{name}`
 */
export function putReplaceNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJob.Headers;
  body?: API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PutReplaceNamespacedCronJob.Response>(
    "put",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs`
 */
export function deleteCollectionNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedCronJob.Headers;
  body?: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedCronJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.DeleteCollectionNamespacedCronJob.Response>(
    "delete",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs`,
    options,
  );
}

/**
 * list or watch objects of kind CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs`
 */
export function getListNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.GetListNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetListNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetListNamespacedCronJob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetListNamespacedCronJob.Response>(
    "get",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs`,
    options,
  );
}

/**
 * create a CronJob
 * @path `/apis/batch/v1/namespaces/{namespace}/cronjobs`
 */
export function postCreateNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.PostCreateNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PostCreateNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PostCreateNamespacedCronJob.Headers;
  body?: API.K8sV2Json.BatchV1.PostCreateNamespacedCronJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PostCreateNamespacedCronJob.Response>(
    "post",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/cronjobs`,
    options,
  );
}

/**
 * read status of the specified Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
 */
export function getReadNamespacedJobStatus(options: {
  pathParams: API.K8sV2Json.BatchV1.GetReadNamespacedJobStatus.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetReadNamespacedJobStatus.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetReadNamespacedJobStatus.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetReadNamespacedJobStatus.Response>(
    "get",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * partially update status of the specified Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
 */
export function patchNamespacedJobStatus(options: {
  pathParams: API.K8sV2Json.BatchV1.PatchNamespacedJobStatus.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PatchNamespacedJobStatus.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PatchNamespacedJobStatus.Headers;
  body?: API.K8sV2Json.BatchV1.PatchNamespacedJobStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PatchNamespacedJobStatus.Response>(
    "patch",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * replace status of the specified Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}/status`
 */
export function putReplaceNamespacedJobStatus(options: {
  pathParams: API.K8sV2Json.BatchV1.PutReplaceNamespacedJobStatus.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PutReplaceNamespacedJobStatus.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PutReplaceNamespacedJobStatus.Headers;
  body?: API.K8sV2Json.BatchV1.PutReplaceNamespacedJobStatus.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PutReplaceNamespacedJobStatus.Response>(
    "put",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}/status`,
    options,
  );
}

/**
 * delete a Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
 */
export function deleteNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.DeleteNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.DeleteNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.DeleteNamespacedJob.Headers;
  body?: API.K8sV2Json.BatchV1.DeleteNamespacedJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.DeleteNamespacedJob.Response>(
    "delete",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * read the specified Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
 */
export function getReadNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.GetReadNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetReadNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetReadNamespacedJob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetReadNamespacedJob.Response>(
    "get",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * partially update the specified Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
 */
export function patchNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.PatchNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PatchNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PatchNamespacedJob.Headers;
  body?: API.K8sV2Json.BatchV1.PatchNamespacedJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PatchNamespacedJob.Response>(
    "patch",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * replace the specified Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs/{name}`
 */
export function putReplaceNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.PutReplaceNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PutReplaceNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PutReplaceNamespacedJob.Headers;
  body?: API.K8sV2Json.BatchV1.PutReplaceNamespacedJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PutReplaceNamespacedJob.Response>(
    "put",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * delete collection of Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs`
 */
export function deleteCollectionNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedJob.Headers;
  body?: API.K8sV2Json.BatchV1.DeleteCollectionNamespacedJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.DeleteCollectionNamespacedJob.Response>(
    "delete",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs`,
    options,
  );
}

/**
 * list or watch objects of kind Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs`
 */
export function getListNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.GetListNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetListNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetListNamespacedJob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetListNamespacedJob.Response>(
    "get",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs`,
    options,
  );
}

/**
 * create a Job
 * @path `/apis/batch/v1/namespaces/{namespace}/jobs`
 */
export function postCreateNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.PostCreateNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.PostCreateNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.PostCreateNamespacedJob.Headers;
  body?: API.K8sV2Json.BatchV1.PostCreateNamespacedJob.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.PostCreateNamespacedJob.Response>(
    "post",
    `/apis/batch/v1/namespaces/${options.pathParams.namespace}/jobs`,
    options,
  );
}

/**
 * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/batch/v1/watch/cronjobs`
 */
export function getWatchCronJobListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.BatchV1.GetWatchCronJobListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetWatchCronJobListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetWatchCronJobListForAllNamespaces.Response>(
    "get",
    "/apis/batch/v1/watch/cronjobs",
    options || {},
  );
}

/**
 * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/batch/v1/watch/jobs`
 */
export function getWatchJobListForAllNamespaces(options?: {
  queryParams?: API.K8sV2Json.BatchV1.GetWatchJobListForAllNamespaces.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetWatchJobListForAllNamespaces.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetWatchJobListForAllNamespaces.Response>(
    "get",
    "/apis/batch/v1/watch/jobs",
    options || {},
  );
}

/**
 * watch changes to an object of kind CronJob. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name}`
 */
export function getWatchNamespacedCronJob(options: {
  pathParams: API.K8sV2Json.BatchV1.GetWatchNamespacedCronJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetWatchNamespacedCronJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetWatchNamespacedCronJob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetWatchNamespacedCronJob.Response>(
    "get",
    `/apis/batch/v1/watch/namespaces/${options.pathParams.namespace}/cronjobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of CronJob. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/batch/v1/watch/namespaces/{namespace}/cronjobs`
 */
export function getWatchNamespacedCronJobList(options: {
  pathParams: API.K8sV2Json.BatchV1.GetWatchNamespacedCronJobList.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetWatchNamespacedCronJobList.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetWatchNamespacedCronJobList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetWatchNamespacedCronJobList.Response>(
    "get",
    `/apis/batch/v1/watch/namespaces/${options.pathParams.namespace}/cronjobs`,
    options,
  );
}

/**
 * watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
 * @path `/apis/batch/v1/watch/namespaces/{namespace}/jobs/{name}`
 */
export function getWatchNamespacedJob(options: {
  pathParams: API.K8sV2Json.BatchV1.GetWatchNamespacedJob.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetWatchNamespacedJob.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetWatchNamespacedJob.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetWatchNamespacedJob.Response>(
    "get",
    `/apis/batch/v1/watch/namespaces/${options.pathParams.namespace}/jobs/${options.pathParams.name}`,
    options,
  );
}

/**
 * watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
 * @path `/apis/batch/v1/watch/namespaces/{namespace}/jobs`
 */
export function getWatchNamespacedJobList(options: {
  pathParams: API.K8sV2Json.BatchV1.GetWatchNamespacedJobList.PathParams;
  queryParams?: API.K8sV2Json.BatchV1.GetWatchNamespacedJobList.QueryParams;
  headers?: API.K8sV2Json.BatchV1.GetWatchNamespacedJobList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.K8sV2Json.BatchV1.GetWatchNamespacedJobList.Response>(
    "get",
    `/apis/batch/v1/watch/namespaces/${options.pathParams.namespace}/jobs`,
    options,
  );
}
