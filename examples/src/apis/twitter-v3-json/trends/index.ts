import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns the Trend associated with the supplied WoeId.
 * @summary Trends
 * @path `/2/trends/by/woeid/{woeid}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/trends/api-reference/get-trends-by-woeid
 */
export function getTrends(options: {
  pathParams: API.TwitterV3Json.Trends.GetTrends.PathParams;
  queryParams?: API.TwitterV3Json.Trends.GetTrends.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Trends.GetTrends.Response>(
    "get",
    `/2/trends/by/woeid/${options.pathParams.woeid}`,
    options,
  );
}
