import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get the field-level encryption profile configuration information.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetConfig.Response>(
    "get",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update a field-level encryption profile.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}/config`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryptionProfile.PutUpdate.PathParams;
  body: API.CustomizeTagAndName.FieldLevelEncryptionProfile.PutUpdate.Body;
  headers?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.PutUpdate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryptionProfile.PutUpdate.Response>(
    "put",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Remove a field-level encryption profile.
 * @path `/2020-05-31/field-level-encryption-profile/{Id}`
 */
export function deleteFieldLevelEncryptionProfile(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryptionProfile.DeleteFieldLevelEncryptionProfile.PathParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.DeleteFieldLevelEncryptionProfile.Headers;
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
export function getFieldLevelEncryptionProfile(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetFieldLevelEncryptionProfile.PathParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetFieldLevelEncryptionProfile.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetFieldLevelEncryptionProfile.Response>(
    "get",
    `/2020-05-31/field-level-encryption-profile/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
 * @path `/2020-05-31/field-level-encryption-profile`
 */
export function getListFieldLevelEncryptionProfiles(options?: {
  queryParams?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetListFieldLevelEncryptionProfiles.QueryParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetListFieldLevelEncryptionProfiles.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryptionProfile.GetListFieldLevelEncryptionProfiles.Response>(
    "get",
    "/2020-05-31/field-level-encryption-profile",
    options || {},
  );
}

/**
 * Create a field-level encryption profile.
 * @path `/2020-05-31/field-level-encryption-profile`
 */
export function postCreate(options: {
  body: API.CustomizeTagAndName.FieldLevelEncryptionProfile.PostCreate.Body;
  headers?: API.CustomizeTagAndName.FieldLevelEncryptionProfile.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryptionProfile.PostCreate.Response>(
    "post",
    "/2020-05-31/field-level-encryption-profile",
    options,
  );
}
