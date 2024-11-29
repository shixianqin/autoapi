import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
 * @path `/2020-05-31/cache-policy/{Id}/config`
 */
export function getCachePolicyConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetCachePolicyConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetCachePolicyConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetCachePolicyConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/cache-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>
 * @path `/2020-05-31/cache-policy/{Id}`
 */
export function deleteCachePolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteCachePolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteCachePolicy2020_05_31.Headers;
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
export function getCachePolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetCachePolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetCachePolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetCachePolicy2020_05_31.Response>(
    "get",
    `/2020-05-31/cache-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/cache-policy/{Id}`
 */
export function putUpdateCachePolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateCachePolicy2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateCachePolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateCachePolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateCachePolicy2020_05_31.Response>(
    "put",
    `/2020-05-31/cache-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/cache-policy`
 */
export function getListCachePolicies2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListCachePolicies2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListCachePolicies2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListCachePolicies2020_05_31.Response>(
    "get",
    "/2020-05-31/cache-policy",
    options || {},
  );
}

/**
 * <p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/cache-policy`
 */
export function postCreateCachePolicy2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateCachePolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateCachePolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateCachePolicy2020_05_31.Response>(
    "post",
    "/2020-05-31/cache-policy",
    options,
  );
}

/**
 * <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/conflicting-alias#DistributionId&Alias`
 */
export function getListConflictingAliases2020_05_31(options: {
  queryParams: API.AwsV3Json.Main.GetListConflictingAliases2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListConflictingAliases2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListConflictingAliases2020_05_31.Response>(
    "get",
    "/2020-05-31/conflicting-alias#DistributionId&Alias",
    options,
  );
}

/**
 * Gets configuration information about a continuous deployment policy.
 * @path `/2020-05-31/continuous-deployment-policy/{Id}/config`
 */
export function getContinuousDeploymentPolicyConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetContinuousDeploymentPolicyConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetContinuousDeploymentPolicyConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetContinuousDeploymentPolicyConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>
 * @path `/2020-05-31/continuous-deployment-policy/{Id}`
 */
export function deleteContinuousDeploymentPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteContinuousDeploymentPolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteContinuousDeploymentPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).
 * @path `/2020-05-31/continuous-deployment-policy/{Id}`
 */
export function getContinuousDeploymentPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetContinuousDeploymentPolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetContinuousDeploymentPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetContinuousDeploymentPolicy2020_05_31.Response>(
    "get",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/continuous-deployment-policy/{Id}`
 */
export function putUpdateContinuousDeploymentPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateContinuousDeploymentPolicy2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateContinuousDeploymentPolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateContinuousDeploymentPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateContinuousDeploymentPolicy2020_05_31.Response>(
    "put",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/continuous-deployment-policy`
 */
export function getListContinuousDeploymentPolicies2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListContinuousDeploymentPolicies2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListContinuousDeploymentPolicies2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListContinuousDeploymentPolicies2020_05_31.Response>(
    "get",
    "/2020-05-31/continuous-deployment-policy",
    options || {},
  );
}

/**
 * <p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>
 * @path `/2020-05-31/continuous-deployment-policy`
 */
export function postCreateContinuousDeploymentPolicy2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateContinuousDeploymentPolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateContinuousDeploymentPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateContinuousDeploymentPolicy2020_05_31.Response>(
    "post",
    "/2020-05-31/continuous-deployment-policy",
    options,
  );
}

/**
 * <p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>
 * @path `/2020-05-31/delete-realtime-log-config/`
 */
export function postDeleteRealtimeLogConfig2020_05_31(options?: {
  body?: API.AwsV3Json.Main.PostDeleteRealtimeLogConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostDeleteRealtimeLogConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/2020-05-31/delete-realtime-log-config/",
    options || {},
  );
}

/**
 * Create a new distribution with tags.
 * @path `/2020-05-31/distribution#WithTags`
 */
export function postCreateDistributionWithTags2020_05_31(options: {
  queryParams: API.AwsV3Json.Main.PostCreateDistributionWithTags2020_05_31.QueryParams;
  body: API.AwsV3Json.Main.PostCreateDistributionWithTags2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateDistributionWithTags2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateDistributionWithTags2020_05_31.Response>(
    "post",
    "/2020-05-31/distribution#WithTags",
    options,
  );
}

/**
 * Get the information about an invalidation.
 * @path `/2020-05-31/distribution/{DistributionId}/invalidation/{Id}`
 */
export function getInvalidation2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetInvalidation2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetInvalidation2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetInvalidation2020_05_31.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.DistributionId}/invalidation/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Lists invalidation batches.
 * @path `/2020-05-31/distribution/{DistributionId}/invalidation`
 */
export function getListInvalidations2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetListInvalidations2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetListInvalidations2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListInvalidations2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListInvalidations2020_05_31.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.DistributionId}/invalidation`,
    options,
  );
}

/**
 * Create a new invalidation.
 * @path `/2020-05-31/distribution/{DistributionId}/invalidation`
 */
export function postCreateInvalidation2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PostCreateInvalidation2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PostCreateInvalidation2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateInvalidation2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateInvalidation2020_05_31.Response>(
    "post",
    `/2020-05-31/distribution/${options.pathParams.DistributionId}/invalidation`,
    options,
  );
}

/**
 * Get the configuration information about a distribution.
 * @path `/2020-05-31/distribution/{Id}/config`
 */
export function getDistributionConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetDistributionConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetDistributionConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetDistributionConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/distribution/{Id}/config`
 */
export function putUpdateDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateDistribution2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateDistribution2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateDistribution2020_05_31.Response>(
    "put",
    `/2020-05-31/distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
 * @path `/2020-05-31/distribution/{Id}/promote-staging-config`
 */
export function putUpdateDistributionWithStagingConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateDistributionWithStagingConfig2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.PutUpdateDistributionWithStagingConfig2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.PutUpdateDistributionWithStagingConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateDistributionWithStagingConfig2020_05_31.Response>(
    "put",
    `/2020-05-31/distribution/${options.pathParams.Id}/promote-staging-config`,
    options,
  );
}

/**
 * Delete a distribution.
 * @path `/2020-05-31/distribution/{Id}`
 */
export function deleteDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteDistribution2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Get the information about a distribution.
 * @path `/2020-05-31/distribution/{Id}`
 */
export function getDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetDistribution2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetDistribution2020_05_31.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p>
 * @path `/2020-05-31/distribution/{PrimaryDistributionId}/copy`
 */
export function postCopyDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PostCopyDistribution2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PostCopyDistribution2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCopyDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCopyDistribution2020_05_31.Response>(
    "post",
    `/2020-05-31/distribution/${options.pathParams.PrimaryDistributionId}/copy`,
    options,
  );
}

/**
 * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/distribution/{TargetDistributionId}/associate-alias#Alias`
 */
export function putAssociateAlias2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutAssociateAlias2020_05_31.PathParams;
  queryParams: API.AwsV3Json.Main.PutAssociateAlias2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.PutAssociateAlias2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/2020-05-31/distribution/${options.pathParams.TargetDistributionId}/associate-alias#Alias`,
    options,
  );
}

/**
 * List CloudFront distributions.
 * @path `/2020-05-31/distribution`
 */
export function getListDistributions2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListDistributions2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListDistributions2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListDistributions2020_05_31.Response>(
    "get",
    "/2020-05-31/distribution",
    options || {},
  );
}

/**
 * Creates a CloudFront distribution.
 * @path `/2020-05-31/distribution`
 */
export function postCreateDistribution2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateDistribution2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateDistribution2020_05_31.Response>(
    "post",
    "/2020-05-31/distribution",
    options,
  );
}

/**
 * Disables additional CloudWatch metrics for the specified CloudFront distribution.
 * @path `/2020-05-31/distributions/{DistributionId}/monitoring-subscription/`
 */
export function deleteMonitoringSubscription2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteMonitoringSubscription2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteMonitoringSubscription2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.DeleteMonitoringSubscription2020_05_31.Response>(
    "delete",
    `/2020-05-31/distributions/${options.pathParams.DistributionId}/monitoring-subscription/`,
    options,
  );
}

/**
 * Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.
 * @path `/2020-05-31/distributions/{DistributionId}/monitoring-subscription/`
 */
export function getMonitoringSubscription2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetMonitoringSubscription2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetMonitoringSubscription2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetMonitoringSubscription2020_05_31.Response>(
    "get",
    `/2020-05-31/distributions/${options.pathParams.DistributionId}/monitoring-subscription/`,
    options,
  );
}

/**
 * <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/distributions/{DistributionId}/monitoring-subscription/`
 */
export function postCreateMonitoringSubscription2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PostCreateMonitoringSubscription2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PostCreateMonitoringSubscription2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateMonitoringSubscription2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateMonitoringSubscription2020_05_31.Response>(
    "post",
    `/2020-05-31/distributions/${options.pathParams.DistributionId}/monitoring-subscription/`,
    options,
  );
}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByCachePolicyId/{CachePolicyId}`
 */
export function getListDistributionsByCachePolicyId2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetListDistributionsByCachePolicyId2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetListDistributionsByCachePolicyId2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListDistributionsByCachePolicyId2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListDistributionsByCachePolicyId2020_05_31.Response>(
    "get",
    `/2020-05-31/distributionsByCachePolicyId/${options.pathParams.CachePolicyId}`,
    options,
  );
}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByKeyGroupId/{KeyGroupId}`
 */
export function getListDistributionsByKeyGroup2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetListDistributionsByKeyGroup2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetListDistributionsByKeyGroup2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListDistributionsByKeyGroup2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListDistributionsByKeyGroup2020_05_31.Response>(
    "get",
    `/2020-05-31/distributionsByKeyGroupId/${options.pathParams.KeyGroupId}`,
    options,
  );
}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}`
 */
export function getListDistributionsByOriginRequestPolicyId2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetListDistributionsByOriginRequestPolicyId2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetListDistributionsByOriginRequestPolicyId2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListDistributionsByOriginRequestPolicyId2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListDistributionsByOriginRequestPolicyId2020_05_31.Response>(
    "get",
    `/2020-05-31/distributionsByOriginRequestPolicyId/${options.pathParams.OriginRequestPolicyId}`,
    options,
  );
}

/**
 * <p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByRealtimeLogConfig/`
 */
export function postListDistributionsByRealtimeLogConfig2020_05_31(options?: {
  body?: API.AwsV3Json.Main.PostListDistributionsByRealtimeLogConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostListDistributionsByRealtimeLogConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostListDistributionsByRealtimeLogConfig2020_05_31.Response>(
    "post",
    "/2020-05-31/distributionsByRealtimeLogConfig/",
    options || {},
  );
}

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}`
 */
export function getListDistributionsByResponseHeadersPolicyId2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetListDistributionsByResponseHeadersPolicyId2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetListDistributionsByResponseHeadersPolicyId2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListDistributionsByResponseHeadersPolicyId2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListDistributionsByResponseHeadersPolicyId2020_05_31.Response>(
    "get",
    `/2020-05-31/distributionsByResponseHeadersPolicyId/${options.pathParams.ResponseHeadersPolicyId}`,
    options,
  );
}

/**
 * List the distributions that are associated with a specified WAF web ACL.
 * @path `/2020-05-31/distributionsByWebACLId/{WebACLId}`
 */
export function getListDistributionsByWebAclId2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetListDistributionsByWebAclId2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetListDistributionsByWebAclId2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListDistributionsByWebAclId2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListDistributionsByWebAclId2020_05_31.Response>(
    "get",
    `/2020-05-31/distributionsByWebACLId/${options.pathParams.WebACLId}`,
    options,
  );
}

/**
 * Get the field-level encryption profile configuration information.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}/config`
 */
export function getFieldLevelEncryptionProfileConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetFieldLevelEncryptionProfileConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetFieldLevelEncryptionProfileConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetFieldLevelEncryptionProfileConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update a field-level encryption profile.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}/config`
 */
export function putUpdateFieldLevelEncryptionProfile2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionProfile2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionProfile2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionProfile2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionProfile2020_05_31.Response>(
    "put",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Remove a field-level encryption profile.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}`
 */
export function deleteFieldLevelEncryptionProfile2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteFieldLevelEncryptionProfile2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteFieldLevelEncryptionProfile2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Get the field-level encryption profile information.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}`
 */
export function getFieldLevelEncryptionProfile2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetFieldLevelEncryptionProfile2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetFieldLevelEncryptionProfile2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetFieldLevelEncryptionProfile2020_05_31.Response>(
    "get",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
 * @path `/2020-05-31/field-level-encryption-profile`
 */
export function getListFieldLevelEncryptionProfiles2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListFieldLevelEncryptionProfiles2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListFieldLevelEncryptionProfiles2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListFieldLevelEncryptionProfiles2020_05_31.Response>(
    "get",
    "/2020-05-31/field-level-encryption-profile",
    options || {},
  );
}

/**
 * Create a field-level encryption profile.
 * @path `/2020-05-31/field-level-encryption-profile`
 */
export function postCreateFieldLevelEncryptionProfile2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateFieldLevelEncryptionProfile2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateFieldLevelEncryptionProfile2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateFieldLevelEncryptionProfile2020_05_31.Response>(
    "post",
    "/2020-05-31/field-level-encryption-profile",
    options,
  );
}

/**
 * Get the field-level encryption configuration information.
 * @path `/2020-05-31/field-level-encryption/{Id}/config`
 */
export function getFieldLevelEncryptionConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetFieldLevelEncryptionConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetFieldLevelEncryptionConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetFieldLevelEncryptionConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update a field-level encryption configuration.
 * @path `/2020-05-31/field-level-encryption/{Id}/config`
 */
export function putUpdateFieldLevelEncryptionConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionConfig2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateFieldLevelEncryptionConfig2020_05_31.Response>(
    "put",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Remove a field-level encryption configuration.
 * @path `/2020-05-31/field-level-encryption/{Id}`
 */
export function deleteFieldLevelEncryptionConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteFieldLevelEncryptionConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteFieldLevelEncryptionConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Get the field-level encryption configuration information.
 * @path `/2020-05-31/field-level-encryption/{Id}`
 */
export function getFieldLevelEncryption2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetFieldLevelEncryption2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetFieldLevelEncryption2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetFieldLevelEncryption2020_05_31.Response>(
    "get",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}`,
    options,
  );
}

/**
 * List all field-level encryption configurations that have been created in CloudFront for this account.
 * @path `/2020-05-31/field-level-encryption`
 */
export function getListFieldLevelEncryptionConfigs2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListFieldLevelEncryptionConfigs2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListFieldLevelEncryptionConfigs2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListFieldLevelEncryptionConfigs2020_05_31.Response>(
    "get",
    "/2020-05-31/field-level-encryption",
    options || {},
  );
}

/**
 * Create a new field-level encryption configuration.
 * @path `/2020-05-31/field-level-encryption`
 */
export function postCreateFieldLevelEncryptionConfig2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateFieldLevelEncryptionConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateFieldLevelEncryptionConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateFieldLevelEncryptionConfig2020_05_31.Response>(
    "post",
    "/2020-05-31/field-level-encryption",
    options,
  );
}

/**
 * <p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}#If-Match`
 */
export function deleteFunction2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteFunction2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/function/${options.pathParams.Name}#If-Match`,
    options,
  );
}

/**
 * <p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}#If-Match`
 */
export function putUpdateFunction2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateFunction2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateFunction2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateFunction2020_05_31.Response>(
    "put",
    `/2020-05-31/function/${options.pathParams.Name}#If-Match`,
    options,
  );
}

/**
 * <p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
 * @path `/2020-05-31/function/{Name}/describe`
 */
export function getDescribeFunction2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetDescribeFunction2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetDescribeFunction2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetDescribeFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetDescribeFunction2020_05_31.Response>(
    "get",
    `/2020-05-31/function/${options.pathParams.Name}/describe`,
    options,
  );
}

/**
 * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}/publish#If-Match`
 */
export function postPublishFunction2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PostPublishFunction2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.PostPublishFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostPublishFunction2020_05_31.Response>(
    "post",
    `/2020-05-31/function/${options.pathParams.Name}/publish#If-Match`,
    options,
  );
}

/**
 * <p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}/test#If-Match`
 */
export function postTestFunction2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PostTestFunction2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PostTestFunction2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostTestFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostTestFunction2020_05_31.Response>(
    "post",
    `/2020-05-31/function/${options.pathParams.Name}/test#If-Match`,
    options,
  );
}

/**
 * <p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
 * @path `/2020-05-31/function/{Name}`
 */
export function getFunction2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetFunction2020_05_31.PathParams;
  queryParams?: API.AwsV3Json.Main.GetFunction2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetFunction2020_05_31.Response>(
    "get",
    `/2020-05-31/function/${options.pathParams.Name}`,
    options,
  );
}

/**
 * <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/function`
 */
export function getListFunctions2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListFunctions2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListFunctions2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListFunctions2020_05_31.Response>(
    "get",
    "/2020-05-31/function",
    options || {},
  );
}

/**
 * <p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>
 * @path `/2020-05-31/function`
 */
export function postCreateFunction2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateFunction2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateFunction2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateFunction2020_05_31.Response>(
    "post",
    "/2020-05-31/function",
    options,
  );
}

/**
 * <p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>
 * @path `/2020-05-31/get-realtime-log-config/`
 */
export function postGetRealtimeLogConfig2020_05_31(options?: {
  body?: API.AwsV3Json.Main.PostGetRealtimeLogConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostGetRealtimeLogConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostGetRealtimeLogConfig2020_05_31.Response>(
    "post",
    "/2020-05-31/get-realtime-log-config/",
    options || {},
  );
}

/**
 * <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
 * @path `/2020-05-31/key-group/{Id}/config`
 */
export function getKeyGroupConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetKeyGroupConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetKeyGroupConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetKeyGroupConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/key-group/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>
 * @path `/2020-05-31/key-group/{Id}`
 */
export function deleteKeyGroup2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteKeyGroup2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteKeyGroup2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/key-group/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
 * @path `/2020-05-31/key-group/{Id}`
 */
export function getKeyGroup2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetKeyGroup2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetKeyGroup2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetKeyGroup2020_05_31.Response>(
    "get",
    `/2020-05-31/key-group/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/key-group/{Id}`
 */
export function putUpdateKeyGroup2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateKeyGroup2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateKeyGroup2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateKeyGroup2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateKeyGroup2020_05_31.Response>(
    "put",
    `/2020-05-31/key-group/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/key-group`
 */
export function getListKeyGroups2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListKeyGroups2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListKeyGroups2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListKeyGroups2020_05_31.Response>(
    "get",
    "/2020-05-31/key-group",
    options || {},
  );
}

/**
 * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/key-group`
 */
export function postCreateKeyGroup2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateKeyGroup2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateKeyGroup2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateKeyGroup2020_05_31.Response>(
    "post",
    "/2020-05-31/key-group",
    options,
  );
}

/**
 * Gets a CloudFront origin access control configuration.
 * @path `/2020-05-31/origin-access-control/{Id}/config`
 */
export function getOriginAccessControlConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetOriginAccessControlConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetOriginAccessControlConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetOriginAccessControlConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Updates a CloudFront origin access control.
 * @path `/2020-05-31/origin-access-control/{Id}/config`
 */
export function putUpdateOriginAccessControl2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateOriginAccessControl2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateOriginAccessControl2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateOriginAccessControl2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateOriginAccessControl2020_05_31.Response>(
    "put",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>
 * @path `/2020-05-31/origin-access-control/{Id}`
 */
export function deleteOriginAccessControl2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteOriginAccessControl2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteOriginAccessControl2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Gets a CloudFront origin access control, including its unique identifier.
 * @path `/2020-05-31/origin-access-control/{Id}`
 */
export function getOriginAccessControl2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetOriginAccessControl2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetOriginAccessControl2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetOriginAccessControl2020_05_31.Response>(
    "get",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>
 * @path `/2020-05-31/origin-access-control`
 */
export function getListOriginAccessControls2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListOriginAccessControls2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListOriginAccessControls2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListOriginAccessControls2020_05_31.Response>(
    "get",
    "/2020-05-31/origin-access-control",
    options || {},
  );
}

/**
 * <p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/origin-access-control`
 */
export function postCreateOriginAccessControl2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateOriginAccessControl2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateOriginAccessControl2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateOriginAccessControl2020_05_31.Response>(
    "post",
    "/2020-05-31/origin-access-control",
    options,
  );
}

/**
 * Get the configuration information about an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}/config`
 */
export function getCloudFrontOriginAccessIdentityConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetCloudFrontOriginAccessIdentityConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetCloudFrontOriginAccessIdentityConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetCloudFrontOriginAccessIdentityConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}/config`
 */
export function putUpdateCloudFrontOriginAccessIdentity2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateCloudFrontOriginAccessIdentity2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateCloudFrontOriginAccessIdentity2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateCloudFrontOriginAccessIdentity2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateCloudFrontOriginAccessIdentity2020_05_31.Response>(
    "put",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Delete an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}`
 */
export function deleteCloudFrontOriginAccessIdentity2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteCloudFrontOriginAccessIdentity2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteCloudFrontOriginAccessIdentity2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Get the information about an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}`
 */
export function getCloudFrontOriginAccessIdentity2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetCloudFrontOriginAccessIdentity2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetCloudFrontOriginAccessIdentity2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetCloudFrontOriginAccessIdentity2020_05_31.Response>(
    "get",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Lists origin access identities.
 * @path `/2020-05-31/origin-access-identity/cloudfront`
 */
export function getListCloudFrontOriginAccessIdentities2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListCloudFrontOriginAccessIdentities2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListCloudFrontOriginAccessIdentities2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListCloudFrontOriginAccessIdentities2020_05_31.Response>(
    "get",
    "/2020-05-31/origin-access-identity/cloudfront",
    options || {},
  );
}

/**
 * Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
 * @path `/2020-05-31/origin-access-identity/cloudfront`
 */
export function postCreateCloudFrontOriginAccessIdentity2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateCloudFrontOriginAccessIdentity2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateCloudFrontOriginAccessIdentity2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateCloudFrontOriginAccessIdentity2020_05_31.Response>(
    "post",
    "/2020-05-31/origin-access-identity/cloudfront",
    options,
  );
}

/**
 * <p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
 * @path `/2020-05-31/origin-request-policy/{Id}/config`
 */
export function getOriginRequestPolicyConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetOriginRequestPolicyConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetOriginRequestPolicyConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetOriginRequestPolicyConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>
 * @path `/2020-05-31/origin-request-policy/{Id}`
 */
export function deleteOriginRequestPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteOriginRequestPolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteOriginRequestPolicy2020_05_31.Headers;
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
export function getOriginRequestPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetOriginRequestPolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetOriginRequestPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetOriginRequestPolicy2020_05_31.Response>(
    "get",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/origin-request-policy/{Id}`
 */
export function putUpdateOriginRequestPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateOriginRequestPolicy2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateOriginRequestPolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateOriginRequestPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateOriginRequestPolicy2020_05_31.Response>(
    "put",
    `/2020-05-31/origin-request-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/origin-request-policy`
 */
export function getListOriginRequestPolicies2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListOriginRequestPolicies2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListOriginRequestPolicies2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListOriginRequestPolicies2020_05_31.Response>(
    "get",
    "/2020-05-31/origin-request-policy",
    options || {},
  );
}

/**
 * <p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/origin-request-policy`
 */
export function postCreateOriginRequestPolicy2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateOriginRequestPolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateOriginRequestPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateOriginRequestPolicy2020_05_31.Response>(
    "post",
    "/2020-05-31/origin-request-policy",
    options,
  );
}

/**
 * Gets a public key configuration.
 * @path `/2020-05-31/public-key/{Id}/config`
 */
export function getPublicKeyConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetPublicKeyConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetPublicKeyConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetPublicKeyConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/public-key/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update public key information. Note that the only value you can change is the comment.
 * @path `/2020-05-31/public-key/{Id}/config`
 */
export function putUpdatePublicKey2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdatePublicKey2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdatePublicKey2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdatePublicKey2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdatePublicKey2020_05_31.Response>(
    "put",
    `/2020-05-31/public-key/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Remove a public key you previously added to CloudFront.
 * @path `/2020-05-31/public-key/{Id}`
 */
export function deletePublicKey2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeletePublicKey2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeletePublicKey2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/public-key/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Gets a public key.
 * @path `/2020-05-31/public-key/{Id}`
 */
export function getPublicKey2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetPublicKey2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetPublicKey2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetPublicKey2020_05_31.Response>(
    "get",
    `/2020-05-31/public-key/${options.pathParams.Id}`,
    options,
  );
}

/**
 * List all public keys that have been added to CloudFront for this account.
 * @path `/2020-05-31/public-key`
 */
export function getListPublicKeys2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListPublicKeys2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListPublicKeys2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListPublicKeys2020_05_31.Response>(
    "get",
    "/2020-05-31/public-key",
    options || {},
  );
}

/**
 * Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
 * @path `/2020-05-31/public-key`
 */
export function postCreatePublicKey2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreatePublicKey2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreatePublicKey2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreatePublicKey2020_05_31.Response>(
    "post",
    "/2020-05-31/public-key",
    options,
  );
}

/**
 * <p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>
 * @path `/2020-05-31/realtime-log-config/`
 */
export function putUpdateRealtimeLogConfig2020_05_31(options?: {
  body?: API.AwsV3Json.Main.PutUpdateRealtimeLogConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateRealtimeLogConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateRealtimeLogConfig2020_05_31.Response>(
    "put",
    "/2020-05-31/realtime-log-config/",
    options || {},
  );
}

/**
 * <p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/realtime-log-config`
 */
export function getListRealtimeLogConfigs2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListRealtimeLogConfigs2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListRealtimeLogConfigs2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListRealtimeLogConfigs2020_05_31.Response>(
    "get",
    "/2020-05-31/realtime-log-config",
    options || {},
  );
}

/**
 * <p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/realtime-log-config`
 */
export function postCreateRealtimeLogConfig2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateRealtimeLogConfig2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateRealtimeLogConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateRealtimeLogConfig2020_05_31.Response>(
    "post",
    "/2020-05-31/realtime-log-config",
    options,
  );
}

/**
 * <p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
 * @path `/2020-05-31/response-headers-policy/{Id}/config`
 */
export function getResponseHeadersPolicyConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetResponseHeadersPolicyConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetResponseHeadersPolicyConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetResponseHeadersPolicyConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>
 * @path `/2020-05-31/response-headers-policy/{Id}`
 */
export function deleteResponseHeadersPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteResponseHeadersPolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteResponseHeadersPolicy2020_05_31.Headers;
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
export function getResponseHeadersPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetResponseHeadersPolicy2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetResponseHeadersPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetResponseHeadersPolicy2020_05_31.Response>(
    "get",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/response-headers-policy/{Id}`
 */
export function putUpdateResponseHeadersPolicy2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateResponseHeadersPolicy2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateResponseHeadersPolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateResponseHeadersPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateResponseHeadersPolicy2020_05_31.Response>(
    "put",
    `/2020-05-31/response-headers-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/response-headers-policy`
 */
export function getListResponseHeadersPolicies2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListResponseHeadersPolicies2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListResponseHeadersPolicies2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListResponseHeadersPolicies2020_05_31.Response>(
    "get",
    "/2020-05-31/response-headers-policy",
    options || {},
  );
}

/**
 * <p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/response-headers-policy`
 */
export function postCreateResponseHeadersPolicy2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateResponseHeadersPolicy2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateResponseHeadersPolicy2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateResponseHeadersPolicy2020_05_31.Response>(
    "post",
    "/2020-05-31/response-headers-policy",
    options,
  );
}

/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
 * @path `/2020-05-31/streaming-distribution#WithTags`
 */
export function postCreateStreamingDistributionWithTags2020_05_31(options: {
  queryParams: API.AwsV3Json.Main.PostCreateStreamingDistributionWithTags2020_05_31.QueryParams;
  body: API.AwsV3Json.Main.PostCreateStreamingDistributionWithTags2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateStreamingDistributionWithTags2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateStreamingDistributionWithTags2020_05_31.Response>(
    "post",
    "/2020-05-31/streaming-distribution#WithTags",
    options,
  );
}

/**
 * Get the configuration information about a streaming distribution.
 * @path `/2020-05-31/streaming-distribution/{Id}/config`
 */
export function getStreamingDistributionConfig2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetStreamingDistributionConfig2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetStreamingDistributionConfig2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetStreamingDistributionConfig2020_05_31.Response>(
    "get",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update a streaming distribution.
 * @path `/2020-05-31/streaming-distribution/{Id}/config`
 */
export function putUpdateStreamingDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.PutUpdateStreamingDistribution2020_05_31.PathParams;
  body: API.AwsV3Json.Main.PutUpdateStreamingDistribution2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PutUpdateStreamingDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PutUpdateStreamingDistribution2020_05_31.Response>(
    "put",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/streaming-distribution/{Id}`
 */
export function deleteStreamingDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.DeleteStreamingDistribution2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.DeleteStreamingDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Gets information about a specified RTMP distribution, including the distribution configuration.
 * @path `/2020-05-31/streaming-distribution/{Id}`
 */
export function getStreamingDistribution2020_05_31(options: {
  pathParams: API.AwsV3Json.Main.GetStreamingDistribution2020_05_31.PathParams;
  headers?: API.AwsV3Json.Main.GetStreamingDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetStreamingDistribution2020_05_31.Response>(
    "get",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * List streaming distributions.
 * @path `/2020-05-31/streaming-distribution`
 */
export function getListStreamingDistributions2020_05_31(options?: {
  queryParams?: API.AwsV3Json.Main.GetListStreamingDistributions2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListStreamingDistributions2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListStreamingDistributions2020_05_31.Response>(
    "get",
    "/2020-05-31/streaming-distribution",
    options || {},
  );
}

/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
 * @path `/2020-05-31/streaming-distribution`
 */
export function postCreateStreamingDistribution2020_05_31(options: {
  body: API.AwsV3Json.Main.PostCreateStreamingDistribution2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostCreateStreamingDistribution2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.PostCreateStreamingDistribution2020_05_31.Response>(
    "post",
    "/2020-05-31/streaming-distribution",
    options,
  );
}

/**
 * Add tags to a CloudFront resource.
 * @path `/2020-05-31/tagging#Operation=Tag&Resource`
 */
export function postTagResource2020_05_31(options: {
  queryParams: API.AwsV3Json.Main.PostTagResource2020_05_31.QueryParams;
  body: API.AwsV3Json.Main.PostTagResource2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostTagResource2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/2020-05-31/tagging#Operation=Tag&Resource",
    options,
  );
}

/**
 * Remove tags from a CloudFront resource.
 * @path `/2020-05-31/tagging#Operation=Untag&Resource`
 */
export function postUntagResource2020_05_31(options: {
  queryParams: API.AwsV3Json.Main.PostUntagResource2020_05_31.QueryParams;
  body: API.AwsV3Json.Main.PostUntagResource2020_05_31.Body;
  headers?: API.AwsV3Json.Main.PostUntagResource2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/2020-05-31/tagging#Operation=Untag&Resource",
    options,
  );
}

/**
 * List tags for a CloudFront resource.
 * @path `/2020-05-31/tagging#Resource`
 */
export function getListTagsForResource2020_05_31(options: {
  queryParams: API.AwsV3Json.Main.GetListTagsForResource2020_05_31.QueryParams;
  headers?: API.AwsV3Json.Main.GetListTagsForResource2020_05_31.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.AwsV3Json.Main.GetListTagsForResource2020_05_31.Response>(
    "get",
    "/2020-05-31/tagging#Resource",
    options,
  );
}
