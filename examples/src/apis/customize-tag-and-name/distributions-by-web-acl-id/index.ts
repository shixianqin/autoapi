import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * List the distributions that are associated with a specified WAF web ACL.
 * @path `/2020-05-31/distributionsByWebACLId/{WebACLId}`
 */
export function getList(options: {
  pathParams: API.CustomizeTagAndName.DistributionsByWebAclId.GetList.PathParams;
  queryParams?: API.CustomizeTagAndName.DistributionsByWebAclId.GetList.QueryParams;
  headers?: API.CustomizeTagAndName.DistributionsByWebAclId.GetList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.DistributionsByWebAclId.GetList.Response>(
    "get",
    `/2020-05-31/distributionsByWebACLId/${options.pathParams.WebACLId}`,
    options,
  );
}
