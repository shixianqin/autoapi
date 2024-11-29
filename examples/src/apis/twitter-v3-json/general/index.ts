import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)
 * @summary Returns the OpenAPI Specification document.
 * @path `/2/openapi.json`
 */
export function getOpenApiSpec(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.General.GetOpenApiSpec.Response>(
    "get",
    "/2/openapi.json",
    options || {},
  );
}

/**
 * Returns the counts of rules from a User's active rule set, to reflect usage by project and application.
 * @summary Rules Count
 * @path `/2/tweets/search/stream/rules/counts`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules-counts
 */
export function getRuleCount(options?: {
  queryParams?: API.TwitterV3Json.General.GetRuleCount.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.General.GetRuleCount.Response>(
    "get",
    "/2/tweets/search/stream/rules/counts",
    options || {},
  );
}
