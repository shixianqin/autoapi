import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
 * @path `/2020-05-31/origin-request-policy/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.OriginRequestPolicy.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.OriginRequestPolicy.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginRequestPolicy.GetConfig.Response>(
    "get",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>
 * @path `/2020-05-31/origin-request-policy/{Id}`
 */
export function deleteOriginRequestPolicy(options: {
  pathParams: API.CustomizeTagAndName.OriginRequestPolicy.DeleteOriginRequestPolicy.PathParams;
  headers?: API.CustomizeTagAndName.OriginRequestPolicy.DeleteOriginRequestPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
 * @path `/2020-05-31/origin-request-policy/{Id}`
 */
export function getOriginRequestPolicy(options: {
  pathParams: API.CustomizeTagAndName.OriginRequestPolicy.GetOriginRequestPolicy.PathParams;
  headers?: API.CustomizeTagAndName.OriginRequestPolicy.GetOriginRequestPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginRequestPolicy.GetOriginRequestPolicy.Response>(
    "get",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/origin-request-policy/{Id}`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.OriginRequestPolicy.PutUpdate.PathParams;
  headers?: API.CustomizeTagAndName.OriginRequestPolicy.PutUpdate.Headers;
  body: API.CustomizeTagAndName.OriginRequestPolicy.PutUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginRequestPolicy.PutUpdate.Response>(
    "put",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/origin-request-policy`
 */
export function getListOriginRequestPolicies(options?: {
  queryParams?: API.CustomizeTagAndName.OriginRequestPolicy.GetListOriginRequestPolicies.QueryParams;
  headers?: API.CustomizeTagAndName.OriginRequestPolicy.GetListOriginRequestPolicies.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginRequestPolicy.GetListOriginRequestPolicies.Response>(
    "get",
    "/2020-05-31/origin-request-policy",
    options || {},
  );
}

/**
 * <p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/origin-request-policy`
 */
export function postCreate(options: {
  headers?: API.CustomizeTagAndName.OriginRequestPolicy.PostCreate.Headers;
  body: API.CustomizeTagAndName.OriginRequestPolicy.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginRequestPolicy.PostCreate.Response>(
    "post",
    "/2020-05-31/origin-request-policy",
    options,
  );
}
