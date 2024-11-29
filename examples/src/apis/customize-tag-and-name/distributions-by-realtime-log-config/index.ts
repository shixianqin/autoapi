import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByRealtimeLogConfig/`
 */
export function postList(options?: {
  headers?: API.CustomizeTagAndName.DistributionsByRealtimeLogConfig.PostList.Headers;
  body?: API.CustomizeTagAndName.DistributionsByRealtimeLogConfig.PostList.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.DistributionsByRealtimeLogConfig.PostList.Response>(
    "post",
    "/2020-05-31/distributionsByRealtimeLogConfig/",
    options || {},
  );
}
