import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
 * @path `/2020-05-31/cache-policy/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.CachePolicy.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.CachePolicy.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.CachePolicy.GetConfig.Response>(
    "get",
    `/2020-05-31/cache-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>
 * @path `/2020-05-31/cache-policy/{Id}`
 */
export function deleteCachePolicy(options: {
  pathParams: API.CustomizeTagAndName.CachePolicy.DeleteCachePolicy.PathParams;
  headers?: API.CustomizeTagAndName.CachePolicy.DeleteCachePolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/cache-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
 * @path `/2020-05-31/cache-policy/{Id}`
 */
export function getCachePolicy(options: {
  pathParams: API.CustomizeTagAndName.CachePolicy.GetCachePolicy.PathParams;
  headers?: API.CustomizeTagAndName.CachePolicy.GetCachePolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.CachePolicy.GetCachePolicy.Response>(
    "get",
    `/2020-05-31/cache-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/cache-policy/{Id}`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.CachePolicy.PutUpdate.PathParams;
  body: API.CustomizeTagAndName.CachePolicy.PutUpdate.Body;
  headers?: API.CustomizeTagAndName.CachePolicy.PutUpdate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.CachePolicy.PutUpdate.Response>(
    "put",
    `/2020-05-31/cache-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/cache-policy`
 */
export function getListCachePolicies(options?: {
  queryParams?: API.CustomizeTagAndName.CachePolicy.GetListCachePolicies.QueryParams;
  headers?: API.CustomizeTagAndName.CachePolicy.GetListCachePolicies.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.CachePolicy.GetListCachePolicies.Response>(
    "get",
    "/2020-05-31/cache-policy",
    options || {},
  );
}

/**
 * <p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/cache-policy`
 */
export function postCreate(options: {
  body: API.CustomizeTagAndName.CachePolicy.PostCreate.Body;
  headers?: API.CustomizeTagAndName.CachePolicy.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.CachePolicy.PostCreate.Response>(
    "post",
    "/2020-05-31/cache-policy",
    options,
  );
}
