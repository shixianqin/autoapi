import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Streams 100% of public Likes.
 * @summary Likes Firehose stream
 * @path `/2/likes/firehose/stream`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-likes-firehose-stream
 */
export function getFirehoseStream(options: {
  queryParams: API.TwitterV3Json.Likes.GetFirehoseStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Likes.GetFirehoseStream.Response>(
    "get",
    "/2/likes/firehose/stream",
    options,
  );
}

/**
 * Streams 10% of public Likes.
 * @summary Likes Sample 10 stream
 * @path `/2/likes/sample10/stream`
 * @docs https://developer.twitter.com/en/docs/twitter-api/likes/firehose/api-reference/get-likes-sample10-stream
 */
export function getSample10Stream(options: {
  queryParams: API.TwitterV3Json.Likes.GetSample10Stream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Likes.GetSample10Stream.Response>(
    "get",
    "/2/likes/sample10/stream",
    options,
  );
}
