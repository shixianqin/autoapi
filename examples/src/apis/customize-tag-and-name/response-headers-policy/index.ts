import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
 * @path `/2020-05-31/response-headers-policy/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.ResponseHeadersPolicy.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.ResponseHeadersPolicy.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ResponseHeadersPolicy.GetConfig.Response>(
    "get",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>
 * @path `/2020-05-31/response-headers-policy/{Id}`
 */
export function deleteResponseHeadersPolicy(options: {
  pathParams: API.CustomizeTagAndName.ResponseHeadersPolicy.DeleteResponseHeadersPolicy.PathParams;
  headers?: API.CustomizeTagAndName.ResponseHeadersPolicy.DeleteResponseHeadersPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
 * @path `/2020-05-31/response-headers-policy/{Id}`
 */
export function getResponseHeadersPolicy(options: {
  pathParams: API.CustomizeTagAndName.ResponseHeadersPolicy.GetResponseHeadersPolicy.PathParams;
  headers?: API.CustomizeTagAndName.ResponseHeadersPolicy.GetResponseHeadersPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ResponseHeadersPolicy.GetResponseHeadersPolicy.Response>(
    "get",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/response-headers-policy/{Id}`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.ResponseHeadersPolicy.PutUpdate.PathParams;
  headers?: API.CustomizeTagAndName.ResponseHeadersPolicy.PutUpdate.Headers;
  body: API.CustomizeTagAndName.ResponseHeadersPolicy.PutUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ResponseHeadersPolicy.PutUpdate.Response>(
    "put",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/response-headers-policy`
 */
export function getListResponseHeadersPolicies(options?: {
  queryParams?: API.CustomizeTagAndName.ResponseHeadersPolicy.GetListResponseHeadersPolicies.QueryParams;
  headers?: API.CustomizeTagAndName.ResponseHeadersPolicy.GetListResponseHeadersPolicies.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ResponseHeadersPolicy.GetListResponseHeadersPolicies.Response>(
    "get",
    "/2020-05-31/response-headers-policy",
    options || {},
  );
}

/**
 * <p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/response-headers-policy`
 */
export function postCreate(options: {
  headers?: API.CustomizeTagAndName.ResponseHeadersPolicy.PostCreate.Headers;
  body: API.CustomizeTagAndName.ResponseHeadersPolicy.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ResponseHeadersPolicy.PostCreate.Response>(
    "post",
    "/2020-05-31/response-headers-policy",
    options,
  );
}
