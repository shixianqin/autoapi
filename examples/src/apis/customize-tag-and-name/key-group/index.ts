import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
 * @path `/2020-05-31/key-group/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.KeyGroup.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.KeyGroup.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.KeyGroup.GetConfig.Response>(
    "get",
    `/2020-05-31/key-group/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>
 * @path `/2020-05-31/key-group/{Id}`
 */
export function deleteKeyGroup(options: {
  pathParams: API.CustomizeTagAndName.KeyGroup.DeleteKeyGroup.PathParams;
  headers?: API.CustomizeTagAndName.KeyGroup.DeleteKeyGroup.Headers;
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
export function getKeyGroup(options: {
  pathParams: API.CustomizeTagAndName.KeyGroup.GetKeyGroup.PathParams;
  headers?: API.CustomizeTagAndName.KeyGroup.GetKeyGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.KeyGroup.GetKeyGroup.Response>(
    "get",
    `/2020-05-31/key-group/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @path `/2020-05-31/key-group/{Id}`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.KeyGroup.PutUpdate.PathParams;
  headers?: API.CustomizeTagAndName.KeyGroup.PutUpdate.Headers;
  body: API.CustomizeTagAndName.KeyGroup.PutUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.KeyGroup.PutUpdate.Response>(
    "put",
    `/2020-05-31/key-group/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/key-group`
 */
export function getListKeyGroups(options?: {
  queryParams?: API.CustomizeTagAndName.KeyGroup.GetListKeyGroups.QueryParams;
  headers?: API.CustomizeTagAndName.KeyGroup.GetListKeyGroups.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.KeyGroup.GetListKeyGroups.Response>(
    "get",
    "/2020-05-31/key-group",
    options || {},
  );
}

/**
 * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/key-group`
 */
export function postCreate(options: {
  headers?: API.CustomizeTagAndName.KeyGroup.PostCreate.Headers;
  body: API.CustomizeTagAndName.KeyGroup.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.KeyGroup.PostCreate.Response>(
    "post",
    "/2020-05-31/key-group",
    options,
  );
}
