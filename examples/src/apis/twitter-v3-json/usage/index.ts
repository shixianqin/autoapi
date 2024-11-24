import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns the Post Usage.
 * @summary Post Usage
 * @path `/2/usage/tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/usage/tweets/api-reference/get-usage-tweets
 */
export function getTweets(options?: {
  queryParams?: API.TwitterV3Json.Usage.GetTweets.QueryParams;
  headers?: API.TwitterV3Json.Usage.GetTweets.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Usage.GetTweets.Response>(
    "get",
    "/2/usage/tweets",
    options || {},
  );
}
