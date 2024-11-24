import { request } from "@/adapter";

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}`
 */
export function getList(options: {
  pathParams: API.CustomizeTagAndName.DistributionsByCachePolicyId.GetList.PathParams;
  queryParams?: API.CustomizeTagAndName.DistributionsByCachePolicyId.GetList.QueryParams;
  headers?: API.CustomizeTagAndName.DistributionsByCachePolicyId.GetList.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.DistributionsByCachePolicyId.GetList.Response>(
    "get",
    `/2020-05-31/distributionsByCachePolicyId/${options.pathParams.CachePolicyId}`,
    options,
  );
}
