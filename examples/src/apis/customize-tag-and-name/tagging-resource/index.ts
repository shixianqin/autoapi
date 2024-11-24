import { request } from "@/adapter";

/**
 * List tags for a CloudFront resource.
 * @path `/2020-05-31/tagging#Resource`
 */
export function getListTagsForResource(options: {
  queryParams: API.CustomizeTagAndName.TaggingResource.GetListTagsForResource.QueryParams;
  headers?: API.CustomizeTagAndName.TaggingResource.GetListTagsForResource.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.TaggingResource.GetListTagsForResource.Response>(
    "get",
    "/2020-05-31/tagging#Resource",
    options,
  );
}
