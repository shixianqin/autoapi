import { request } from "@/adapter";

/**
 * Add tags to a CloudFront resource.
 * @path `/2020-05-31/tagging#Operation=Tag&Resource`
 */
export function postTagResource(options: {
  queryParams: API.CustomizeTagAndName.TaggingOperationTagResource.PostTagResource.QueryParams;
  headers?: API.CustomizeTagAndName.TaggingOperationTagResource.PostTagResource.Headers;
  body: API.CustomizeTagAndName.TaggingOperationTagResource.PostTagResource.Body;
  config?: object;
  context?: object;
}) {
  return request<any>(
    "post",
    "/2020-05-31/tagging#Operation=Tag&Resource",
    options,
  );
}
