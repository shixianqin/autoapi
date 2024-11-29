import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
 * @path `/2020-05-31/streaming-distribution#WithTags`
 */
export function postCreate(options: {
  queryParams: API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.QueryParams;
  body: API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.Body;
  headers?: API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.StreamingDistributionWithTags.PostCreate.Response>(
    "post",
    "/2020-05-31/streaming-distribution#WithTags",
    options,
  );
}
