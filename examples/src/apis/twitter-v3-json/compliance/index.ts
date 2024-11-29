import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns a single Compliance Job by ID
 * @summary Get Compliance Job
 * @path `/2/compliance/jobs/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs-id
 */
export function getBatchJob(options: {
  pathParams: API.TwitterV3Json.Compliance.GetBatchJob.PathParams;
  queryParams?: API.TwitterV3Json.Compliance.GetBatchJob.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.GetBatchJob.Response>(
    "get",
    `/2/compliance/jobs/${options.pathParams.id}`,
    options,
  );
}

/**
 * Returns recent Compliance Jobs for a given job type and optional job status
 * @summary List Compliance Jobs
 * @path `/2/compliance/jobs`
 * @docs https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs
 */
export function getListBatchJobs(options: {
  queryParams: API.TwitterV3Json.Compliance.GetListBatchJobs.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.GetListBatchJobs.Response>(
    "get",
    "/2/compliance/jobs",
    options,
  );
}

/**
 * Creates a compliance for the given job type
 * @summary Create compliance job
 * @path `/2/compliance/jobs`
 * @docs https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/post-compliance-jobs
 */
export function postCreateBatchJob(options: {
  body: API.TwitterV3Json.Compliance.PostCreateBatchJob.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.PostCreateBatchJob.Response>(
    "post",
    "/2/compliance/jobs",
    options,
  );
}

/**
 * Streams 100% of compliance data for Users
 * @summary Likes Compliance stream
 * @path `/2/likes/compliance/stream`
 */
export function getLikesStream(options?: {
  queryParams?: API.TwitterV3Json.Compliance.GetLikesStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.GetLikesStream.Response>(
    "get",
    "/2/likes/compliance/stream",
    options || {},
  );
}

/**
 * Streams 100% of compliance data for Posts
 * @summary Posts Compliance stream
 * @path `/2/tweets/compliance/stream`
 */
export function getTweetsStream(options: {
  queryParams: API.TwitterV3Json.Compliance.GetTweetsStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.GetTweetsStream.Response>(
    "get",
    "/2/tweets/compliance/stream",
    options,
  );
}

/**
 * Streams 100% of labeling events applied to Posts
 * @summary Posts Label stream
 * @path `/2/tweets/label/stream`
 */
export function getTweetsLabelStream(options?: {
  queryParams?: API.TwitterV3Json.Compliance.GetTweetsLabelStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.GetTweetsLabelStream.Response>(
    "get",
    "/2/tweets/label/stream",
    options || {},
  );
}

/**
 * Streams 100% of compliance data for Users
 * @summary Users Compliance stream
 * @path `/2/users/compliance/stream`
 */
export function getUsersStream(options: {
  queryParams: API.TwitterV3Json.Compliance.GetUsersStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Compliance.GetUsersStream.Response>(
    "get",
    "/2/users/compliance/stream",
    options,
  );
}
