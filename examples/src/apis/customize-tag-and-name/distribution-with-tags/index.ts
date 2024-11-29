import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Create a new distribution with tags.
 * @path `/2020-05-31/distribution#WithTags`
 */
export function postCreate(options: {
  queryParams: API.CustomizeTagAndName.DistributionWithTags.PostCreate.QueryParams;
  body: API.CustomizeTagAndName.DistributionWithTags.PostCreate.Body;
  headers?: API.CustomizeTagAndName.DistributionWithTags.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.DistributionWithTags.PostCreate.Response>(
    "post",
    "/2020-05-31/distribution#WithTags",
    options,
  );
}
