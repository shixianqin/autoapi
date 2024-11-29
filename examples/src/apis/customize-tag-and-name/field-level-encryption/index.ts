import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get the field-level encryption configuration information.
 * @path `/2020-05-31/field-level-encryption/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryption.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryption.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryption.GetConfig.Response>(
    "get",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update a field-level encryption configuration.
 * @path `/2020-05-31/field-level-encryption/{Id}/config`
 */
export function putUpdateConfig(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryption.PutUpdateConfig.PathParams;
  body: API.CustomizeTagAndName.FieldLevelEncryption.PutUpdateConfig.Body;
  headers?: API.CustomizeTagAndName.FieldLevelEncryption.PutUpdateConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryption.PutUpdateConfig.Response>(
    "put",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Remove a field-level encryption configuration.
 * @path `/2020-05-31/field-level-encryption/{Id}`
 */
export function deleteConfig(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryption.DeleteConfig.PathParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryption.DeleteConfig.Headers;
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
export function getFieldLevelEncryption(options: {
  pathParams: API.CustomizeTagAndName.FieldLevelEncryption.GetFieldLevelEncryption.PathParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryption.GetFieldLevelEncryption.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryption.GetFieldLevelEncryption.Response>(
    "get",
    `/2020-05-31/field-level-encryption/${options.pathParams.Id}`,
    options,
  );
}

/**
 * List all field-level encryption configurations that have been created in CloudFront for this account.
 * @path `/2020-05-31/field-level-encryption`
 */
export function getListConfigs(options?: {
  queryParams?: API.CustomizeTagAndName.FieldLevelEncryption.GetListConfigs.QueryParams;
  headers?: API.CustomizeTagAndName.FieldLevelEncryption.GetListConfigs.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryption.GetListConfigs.Response>(
    "get",
    "/2020-05-31/field-level-encryption",
    options || {},
  );
}

/**
 * Create a new field-level encryption configuration.
 * @path `/2020-05-31/field-level-encryption`
 */
export function postCreateConfig(options: {
  body: API.CustomizeTagAndName.FieldLevelEncryption.PostCreateConfig.Body;
  headers?: API.CustomizeTagAndName.FieldLevelEncryption.PostCreateConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.FieldLevelEncryption.PostCreateConfig.Response>(
    "post",
    "/2020-05-31/field-level-encryption",
    options,
  );
}
