import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets configuration information about a continuous deployment policy.
 * @path `/2020-05-31/continuous-deployment-policy/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetConfig.Response>(
    "get",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>
 * @path `/2020-05-31/continuous-deployment-policy/{Id}`
 */
export function deleteContinuousDeploymentPolicy(options: {
  pathParams: API.CustomizeTagAndName.ContinuousDeploymentPolicy.DeleteContinuousDeploymentPolicy.PathParams;
  headers?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.DeleteContinuousDeploymentPolicy.Headers;
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
export function getContinuousDeploymentPolicy(options: {
  pathParams: API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetContinuousDeploymentPolicy.PathParams;
  headers?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetContinuousDeploymentPolicy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetContinuousDeploymentPolicy.Response>(
    "get",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/continuous-deployment-policy/{Id}`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.ContinuousDeploymentPolicy.PutUpdate.PathParams;
  body: API.CustomizeTagAndName.ContinuousDeploymentPolicy.PutUpdate.Body;
  headers?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.PutUpdate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ContinuousDeploymentPolicy.PutUpdate.Response>(
    "put",
    `/2020-05-31/continuous-deployment-policy/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/continuous-deployment-policy`
 */
export function getListContinuousDeploymentPolicies(options?: {
  queryParams?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetListContinuousDeploymentPolicies.QueryParams;
  headers?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetListContinuousDeploymentPolicies.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ContinuousDeploymentPolicy.GetListContinuousDeploymentPolicies.Response>(
    "get",
    "/2020-05-31/continuous-deployment-policy",
    options || {},
  );
}

/**
 * <p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>
 * @path `/2020-05-31/continuous-deployment-policy`
 */
export function postCreate(options: {
  body: API.CustomizeTagAndName.ContinuousDeploymentPolicy.PostCreate.Body;
  headers?: API.CustomizeTagAndName.ContinuousDeploymentPolicy.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.ContinuousDeploymentPolicy.PostCreate.Response>(
    "post",
    "/2020-05-31/continuous-deployment-policy",
    options,
  );
}
