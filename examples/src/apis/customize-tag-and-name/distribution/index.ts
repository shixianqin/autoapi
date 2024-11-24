import { request } from "@/adapter";

/**
 * Get the information about an invalidation.
 * @path `/2020-05-31/distribution/{DistributionId}/invalidation/{Id}`
 */
export function getInvalidation(options: {
  pathParams: API.CustomizeTagAndName.Distribution.GetInvalidation.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.GetInvalidation.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.GetInvalidation.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.DistributionId}/invalidation/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Lists invalidation batches.
 * @path `/2020-05-31/distribution/{DistributionId}/invalidation`
 */
export function getListInvalidations(options: {
  pathParams: API.CustomizeTagAndName.Distribution.GetListInvalidations.PathParams;
  queryParams?: API.CustomizeTagAndName.Distribution.GetListInvalidations.QueryParams;
  headers?: API.CustomizeTagAndName.Distribution.GetListInvalidations.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.GetListInvalidations.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.DistributionId}/invalidation`,
    options,
  );
}

/**
 * Create a new invalidation.
 * @path `/2020-05-31/distribution/{DistributionId}/invalidation`
 */
export function postCreateInvalidation(options: {
  pathParams: API.CustomizeTagAndName.Distribution.PostCreateInvalidation.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.PostCreateInvalidation.Headers;
  body: API.CustomizeTagAndName.Distribution.PostCreateInvalidation.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.PostCreateInvalidation.Response>(
    "post",
    `/2020-05-31/distribution/${options.pathParams.DistributionId}/invalidation`,
    options,
  );
}

/**
 * Get the configuration information about a distribution.
 * @path `/2020-05-31/distribution/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.Distribution.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.GetConfig.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.GetConfig.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/distribution/{Id}/config`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.Distribution.PutUpdate.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.PutUpdate.Headers;
  body: API.CustomizeTagAndName.Distribution.PutUpdate.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.PutUpdate.Response>(
    "put",
    `/2020-05-31/distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
 * @path `/2020-05-31/distribution/{Id}/promote-staging-config`
 */
export function putUpdateWithStagingConfig(options: {
  pathParams: API.CustomizeTagAndName.Distribution.PutUpdateWithStagingConfig.PathParams;
  queryParams?: API.CustomizeTagAndName.Distribution.PutUpdateWithStagingConfig.QueryParams;
  headers?: API.CustomizeTagAndName.Distribution.PutUpdateWithStagingConfig.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.PutUpdateWithStagingConfig.Response>(
    "put",
    `/2020-05-31/distribution/${options.pathParams.Id}/promote-staging-config`,
    options,
  );
}

/**
 * Delete a distribution.
 * @path `/2020-05-31/distribution/{Id}`
 */
export function deleteDistribution(options: {
  pathParams: API.CustomizeTagAndName.Distribution.DeleteDistribution.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.DeleteDistribution.Headers;
  config?: object;
  context?: object;
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
export function getDistribution(options: {
  pathParams: API.CustomizeTagAndName.Distribution.GetDistribution.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.GetDistribution.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.GetDistribution.Response>(
    "get",
    `/2020-05-31/distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p>
 * @path `/2020-05-31/distribution/{PrimaryDistributionId}/copy`
 */
export function postCopy(options: {
  pathParams: API.CustomizeTagAndName.Distribution.PostCopy.PathParams;
  headers?: API.CustomizeTagAndName.Distribution.PostCopy.Headers;
  body: API.CustomizeTagAndName.Distribution.PostCopy.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.PostCopy.Response>(
    "post",
    `/2020-05-31/distribution/${options.pathParams.PrimaryDistributionId}/copy`,
    options,
  );
}

/**
 * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/distribution/{TargetDistributionId}/associate-alias#Alias`
 */
export function putAssociateAlias(options: {
  pathParams: API.CustomizeTagAndName.Distribution.PutAssociateAlias.PathParams;
  queryParams: API.CustomizeTagAndName.Distribution.PutAssociateAlias.QueryParams;
  headers?: API.CustomizeTagAndName.Distribution.PutAssociateAlias.Headers;
  config?: object;
  context?: object;
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
export function getListDistributions(options?: {
  queryParams?: API.CustomizeTagAndName.Distribution.GetListDistributions.QueryParams;
  headers?: API.CustomizeTagAndName.Distribution.GetListDistributions.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.GetListDistributions.Response>(
    "get",
    "/2020-05-31/distribution",
    options || {},
  );
}

/**
 * Creates a CloudFront distribution.
 * @path `/2020-05-31/distribution`
 */
export function postCreate(options: {
  headers?: API.CustomizeTagAndName.Distribution.PostCreate.Headers;
  body: API.CustomizeTagAndName.Distribution.PostCreate.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.Distribution.PostCreate.Response>(
    "post",
    "/2020-05-31/distribution",
    options,
  );
}
