import { request } from "@/adapter";

/**
 * Gets a public key configuration.
 * @path `/2020-05-31/public-key/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.PublicKey.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.PublicKey.GetConfig.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.PublicKey.GetConfig.Response>(
    "get",
    `/2020-05-31/public-key/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update public key information. Note that the only value you can change is the comment.
 * @path `/2020-05-31/public-key/{Id}/config`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.PublicKey.PutUpdate.PathParams;
  headers?: API.CustomizeTagAndName.PublicKey.PutUpdate.Headers;
  body: API.CustomizeTagAndName.PublicKey.PutUpdate.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.PublicKey.PutUpdate.Response>(
    "put",
    `/2020-05-31/public-key/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Remove a public key you previously added to CloudFront.
 * @path `/2020-05-31/public-key/{Id}`
 */
export function deletePublicKey(options: {
  pathParams: API.CustomizeTagAndName.PublicKey.DeletePublicKey.PathParams;
  headers?: API.CustomizeTagAndName.PublicKey.DeletePublicKey.Headers;
  config?: object;
  context?: object;
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
export function getPublicKey(options: {
  pathParams: API.CustomizeTagAndName.PublicKey.GetPublicKey.PathParams;
  headers?: API.CustomizeTagAndName.PublicKey.GetPublicKey.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.PublicKey.GetPublicKey.Response>(
    "get",
    `/2020-05-31/public-key/${options.pathParams.Id}`,
    options,
  );
}

/**
 * List all public keys that have been added to CloudFront for this account.
 * @path `/2020-05-31/public-key`
 */
export function getListPublicKeys(options?: {
  queryParams?: API.CustomizeTagAndName.PublicKey.GetListPublicKeys.QueryParams;
  headers?: API.CustomizeTagAndName.PublicKey.GetListPublicKeys.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.PublicKey.GetListPublicKeys.Response>(
    "get",
    "/2020-05-31/public-key",
    options || {},
  );
}

/**
 * Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
 * @path `/2020-05-31/public-key`
 */
export function postCreate(options: {
  headers?: API.CustomizeTagAndName.PublicKey.PostCreate.Headers;
  body: API.CustomizeTagAndName.PublicKey.PostCreate.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeTagAndName.PublicKey.PostCreate.Response>(
    "post",
    "/2020-05-31/public-key",
    options,
  );
}
