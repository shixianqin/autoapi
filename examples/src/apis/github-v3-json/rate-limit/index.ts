import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * **Note:** Accessing this endpoint does not count against your REST API rate limit.
 *
 * **Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.
 * @summary Get rate limit status for the authenticated user
 * @path `/rate_limit`
 * @docs https://docs.github.com/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user
 */
export function getRateLimit(options?: {
  headers?: API.GithubV3Json.RateLimit.GetRateLimit.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.RateLimit.GetRateLimit.Response>(
    "get",
    "/rate_limit",
    options || {},
  );
}
