import { request } from "@/adapter";

/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
 * @path `/2020-05-31/streaming-distribution#WithTags`
 */
export function postCreate(options: {
  queryParams: API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.QueryParams;
  headers?: API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.Headers;
  body: API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.Response>(
    "post",
    "/2020-05-31/streaming-distribution#WithTags",
    options,
  );
}
