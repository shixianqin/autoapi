import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Insert or update a user deletion requests.
 * @path `/userDeletion/userDeletionRequests:upsert`
 */
export function postAnalyticsRequestUpsert(options?: {
  queryParams?: API.GaV3Json.UserDeletion.PostAnalyticsRequestUpsert.QueryParams;
  body?: API.GaV3Json.UserDeletion.PostAnalyticsRequestUpsert.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.UserDeletion.PostAnalyticsRequestUpsert.Response>(
    "post",
    "/userDeletion/userDeletionRequests:upsert",
    options || {},
  );
}
