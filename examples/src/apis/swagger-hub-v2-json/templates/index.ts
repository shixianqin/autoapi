import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Rename a template
 * @path `/templates/{owner}/{templateId}/rename`
 */
export function postRenameTemplate(options: {
  pathParams: API.SwaggerHubV2Json.Templates.PostRenameTemplate.PathParams;
  queryParams: API.SwaggerHubV2Json.Templates.PostRenameTemplate.QueryParams;
  headers?: API.SwaggerHubV2Json.Templates.PostRenameTemplate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/rename`,
    options,
  );
}

/**
 * Update the list of comments for a template
 * @path `/templates/{owner}/{templateId}/{version}/comments/batch`
 */
export function postUpdateTemplateComments(options: {
  pathParams: API.SwaggerHubV2Json.Templates.PostUpdateTemplateComments.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.PostUpdateTemplateComments.Headers;
  body?: API.SwaggerHubV2Json.Templates.PostUpdateTemplateComments.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/comments/batch`,
    options,
  );
}

/**
 * Return the list of comments for a template
 * @path `/templates/{owner}/{templateId}/{version}/comments`
 */
export function getTemplateComments(options: {
  pathParams: API.SwaggerHubV2Json.Templates.GetTemplateComments.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.GetTemplateComments.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Templates.GetTemplateComments.Response>(
    "get",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/comments`,
    options,
  );
}

/**
 * Create a fork for a template
 * @path `/templates/{owner}/{templateId}/{version}/fork`
 */
export function postForkTemplate(options: {
  pathParams: API.SwaggerHubV2Json.Templates.PostForkTemplate.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.PostForkTemplate.Headers;
  body: API.SwaggerHubV2Json.Templates.PostForkTemplate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/fork`,
    options,
  );
}

/**
 * Retrieve lifecycle settings for a template
 * @path `/templates/{owner}/{templateId}/{version}/settings/lifecycle`
 */
export function getTemplateLifecycleSettings(options: {
  pathParams: API.SwaggerHubV2Json.Templates.GetTemplateLifecycleSettings.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.GetTemplateLifecycleSettings.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Templates.GetTemplateLifecycleSettings.Response>(
    "get",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/settings/lifecycle`,
    options,
  );
}

/**
 * Update lifecycle settings for a template
 * @path `/templates/{owner}/{templateId}/{version}/settings/lifecycle`
 */
export function putSetTemplateLifecycleSettings(options: {
  pathParams: API.SwaggerHubV2Json.Templates.PutSetTemplateLifecycleSettings.PathParams;
  queryParams?: API.SwaggerHubV2Json.Templates.PutSetTemplateLifecycleSettings.QueryParams;
  headers?: API.SwaggerHubV2Json.Templates.PutSetTemplateLifecycleSettings.Headers;
  body?: API.SwaggerHubV2Json.Templates.PutSetTemplateLifecycleSettings.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/settings/lifecycle`,
    options,
  );
}

/**
 * Retrieve visibility settings for a template
 * @path `/templates/{owner}/{templateId}/{version}/settings/private`
 */
export function getTemplatePrivateSettings(options: {
  pathParams: API.SwaggerHubV2Json.Templates.GetTemplatePrivateSettings.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.GetTemplatePrivateSettings.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Templates.GetTemplatePrivateSettings.Response>(
    "get",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/settings/private`,
    options,
  );
}

/**
 * Update visibility settings for a template
 * @path `/templates/{owner}/{templateId}/{version}/settings/private`
 */
export function putSetTemplatePrivateSettings(options: {
  pathParams: API.SwaggerHubV2Json.Templates.PutSetTemplatePrivateSettings.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.PutSetTemplatePrivateSettings.Headers;
  body: API.SwaggerHubV2Json.Templates.PutSetTemplatePrivateSettings.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}/settings/private`,
    options,
  );
}

/**
 * Delete a particular version of a template
 * @path `/templates/{owner}/{templateId}/{version}`
 */
export function deleteTemplateVersion(options: {
  pathParams: API.SwaggerHubV2Json.Templates.DeleteTemplateVersion.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.DeleteTemplateVersion.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}`,
    options,
  );
}

/**
 * Retrieve a template definition
 * @path `/templates/{owner}/{templateId}/{version}`
 */
export function getTemplateDefinition(options: {
  pathParams: API.SwaggerHubV2Json.Templates.GetTemplateDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.Templates.GetTemplateDefinition.QueryParams;
  headers?: API.SwaggerHubV2Json.Templates.GetTemplateDefinition.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Templates.GetTemplateDefinition.Response>(
    "get",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}/${options.pathParams.version}`,
    options,
  );
}

/**
 * Delete a template
 * @path `/templates/{owner}/{templateId}`
 */
export function deleteTemplate(options: {
  pathParams: API.SwaggerHubV2Json.Templates.DeleteTemplate.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.DeleteTemplate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}`,
    options,
  );
}

/**
 * Retrieve an APIs.json listing for all template versions for an owner and template
 * @path `/templates/{owner}/{templateId}`
 */
export function getTemplateVersions(options: {
  pathParams: API.SwaggerHubV2Json.Templates.GetTemplateVersions.PathParams;
  headers?: API.SwaggerHubV2Json.Templates.GetTemplateVersions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Templates.GetTemplateVersions.Response>(
    "get",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}`,
    options,
  );
}

/**
 * Saves the provided template definition; the owner must match the token owner. The version will be extracted from the template definitions itself.
 * @summary Create or update a template
 * @path `/templates/{owner}/{templateId}`
 */
export function postSaveTemplateDefinition(options: {
  pathParams: API.SwaggerHubV2Json.Templates.PostSaveTemplateDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.Templates.PostSaveTemplateDefinition.QueryParams;
  headers?: API.SwaggerHubV2Json.Templates.PostSaveTemplateDefinition.Headers;
  body: API.SwaggerHubV2Json.Templates.PostSaveTemplateDefinition.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/templates/${options.pathParams.owner}/${options.pathParams.templateId}`,
    options,
  );
}

/**
 * Retrieve a list of templates for an owner
 * @path `/templates`
 */
export function getTemplates(options?: {
  queryParams?: API.SwaggerHubV2Json.Templates.GetTemplates.QueryParams;
  headers?: API.SwaggerHubV2Json.Templates.GetTemplates.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Templates.GetTemplates.Response>(
    "get",
    "/templates",
    options || {},
  );
}
