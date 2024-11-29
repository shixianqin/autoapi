import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Remove tags from a CloudFront resource.
 * @path `/2020-05-31/tagging#Operation=Untag&Resource`
 */
export function postUntagResource(options: {
  queryParams: API.CustomizeTagAndName.TaggingOperationUntagResource.PostUntagResource.QueryParams;
  body: API.CustomizeTagAndName.TaggingOperationUntagResource.PostUntagResource.Body;
  headers?: API.CustomizeTagAndName.TaggingOperationUntagResource.PostUntagResource.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/2020-05-31/tagging#Operation=Untag&Resource",
    options,
  );
}
