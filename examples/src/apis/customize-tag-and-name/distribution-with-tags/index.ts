import { request } from "@/adapter";

/**
 * Create a new distribution with tags.
 * @path `/2020-05-31/distribution#WithTags`
 */
export function postCreate(options: {
  queryParams: API.CustomizeTagAndName.DistributionWithTags.PostCreate.QueryParams;
  headers?: API.CustomizeTagAndName.DistributionWithTags.PostCreate.Headers;
  body: API.CustomizeTagAndName.DistributionWithTags.PostCreate.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.DistributionWithTags.PostCreate.Response>(
    "post",
    "/2020-05-31/distribution#WithTags",
    options,
  );
}
