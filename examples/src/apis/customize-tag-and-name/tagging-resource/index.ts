import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * List tags for a CloudFront resource.
 * @path `/2020-05-31/tagging#Resource`
 */
export function getListTagsForResource(options: {
  queryParams: API.CustomizeTagAndName.TaggingResource.GetListTagsForResource.QueryParams;
  headers?: API.CustomizeTagAndName.TaggingResource.GetListTagsForResource.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.TaggingResource.GetListTagsForResource.Response>(
    "get",
    "/2020-05-31/tagging#Resource",
    options,
  );
}
