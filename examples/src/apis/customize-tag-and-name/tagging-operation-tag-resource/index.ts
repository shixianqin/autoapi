import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Add tags to a CloudFront resource.
 * @path `/2020-05-31/tagging#Operation=Tag&Resource`
 */
export function postTagResource(options: {
  queryParams: API.CustomizeTagAndName.TaggingOperationTagResource.PostTagResource.QueryParams;
  body: API.CustomizeTagAndName.TaggingOperationTagResource.PostTagResource.Body;
  headers?: API.CustomizeTagAndName.TaggingOperationTagResource.PostTagResource.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/2020-05-31/tagging#Operation=Tag&Resource",
    options,
  );
}
