import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * The new name must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html).
 * @summary Rename an API
 * @path `/apis/{owner}/{api}/rename`
 */
export function postRenameApi(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostRenameApi.PathParams;
  queryParams: API.SwaggerHubV2Json.ApIs.PostRenameApi.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/rename`,
    options,
  );
}

/**
 * This operation returns the version identifier, such as `1.0.0`. To get the definition itself, use `GET /apis/{owner}/{api}/{version}`.
 * @summary Get the default version of an API
 * @path `/apis/{owner}/{api}/settings/default`
 */
export function getApiDefaultVersion(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetApiDefaultVersion.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetApiDefaultVersion.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/settings/default`,
    options,
  );
}

/**
 * Set the default API version
 * @path `/apis/{owner}/{api}/settings/default`
 */
export function putSetApiDefaultVersion(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PutSetApiDefaultVersion.PathParams;
  body: API.SwaggerHubV2Json.ApIs.PutSetApiDefaultVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/settings/default`,
    options,
  );
}

/**
 * Use this operation to clone an existing API version as a new version. The new version will have the same YAML content but with updated `info.version`.
 *
 * **Note:** Comments, integrations, and codegen options are not copied to the new version. The default version also remains unchanged.
 * @summary Create a new API version
 * @path `/apis/{owner}/{api}/{version}/clone`
 */
export function postCloneApi(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostCloneApi.PathParams;
  body: API.SwaggerHubV2Json.ApIs.PostCloneApi.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/clone`,
    options,
  );
}

/**
 * Bulk update comments
 * @path `/apis/{owner}/{api}/{version}/comments/batch`
 */
export function postUpdateApiCommentsV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostUpdateApiCommentsV2.PathParams;
  body?: API.SwaggerHubV2Json.ApIs.PostUpdateApiCommentsV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/batch`,
    options,
  );
}

/**
 * Delete a comment reply
 * @path `/apis/{owner}/{api}/{version}/comments/{comment}/replies/{reply}`
 */
export function deleteApiCommentReplyV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.DeleteApiCommentReplyV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/${options.pathParams.comment}/replies/${options.pathParams.reply}`,
    options,
  );
}

/**
 * Update a comment reply
 * @path `/apis/{owner}/{api}/{version}/comments/{comment}/replies/{reply}`
 */
export function patchUpdateApiCommentReplyV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PatchUpdateApiCommentReplyV2.PathParams;
  body?: API.SwaggerHubV2Json.ApIs.PatchUpdateApiCommentReplyV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.PatchUpdateApiCommentReplyV2.Response>(
    "patch",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/${options.pathParams.comment}/replies/${options.pathParams.reply}`,
    options,
  );
}

/**
 * Reply to a comment
 * @path `/apis/{owner}/{api}/{version}/comments/{comment}/replies`
 */
export function postAddApiCommentReplyV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostAddApiCommentReplyV2.PathParams;
  body: API.SwaggerHubV2Json.ApIs.PostAddApiCommentReplyV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.PostAddApiCommentReplyV2.Response>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/${options.pathParams.comment}/replies`,
    options,
  );
}

/**
 * Resolve or reopen a comment
 * @path `/apis/{owner}/{api}/{version}/comments/{comment}/status/{status}`
 */
export function putSetApiCommentStatusV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PutSetApiCommentStatusV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/${options.pathParams.comment}/status/${options.pathParams.status}`,
    options,
  );
}

/**
 * Delete a comment
 * @path `/apis/{owner}/{api}/{version}/comments/{comment}`
 */
export function deleteApiCommentV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.DeleteApiCommentV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/${options.pathParams.comment}`,
    options,
  );
}

/**
 * Update a comment
 * @path `/apis/{owner}/{api}/{version}/comments/{comment}`
 */
export function patchUpdateApiCommentV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PatchUpdateApiCommentV2.PathParams;
  body?: API.SwaggerHubV2Json.ApIs.PatchUpdateApiCommentV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.PatchUpdateApiCommentV2.Response>(
    "patch",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments/${options.pathParams.comment}`,
    options,
  );
}

/**
 * Get comments for the specified API version
 * @path `/apis/{owner}/{api}/{version}/comments`
 */
export function getApiCommentsV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetApiCommentsV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetApiCommentsV2.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments`,
    options,
  );
}

/**
 * Add a new comment
 * @path `/apis/{owner}/{api}/{version}/comments`
 */
export function postAddApiCommentV2(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostAddApiCommentV2.PathParams;
  body: API.SwaggerHubV2Json.ApIs.PostAddApiCommentV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.PostAddApiCommentV2.Response>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/comments`,
    options,
  );
}

/**
 * Creates a [fork](https://support.smartbear.com/swaggerhub/docs/apis/forking-api.html) of the specified API definition and version. The fork can be created as a new API, or as a new version in another existing API.
 * @summary Fork an API
 * @path `/apis/{owner}/{api}/{version}/fork`
 */
export function postForkApi(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostForkApi.PathParams;
  body: API.SwaggerHubV2Json.ApIs.PostForkApi.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/fork`,
    options,
  );
}

/**
 * Get the published status for the specified API and version
 * @path `/apis/{owner}/{api}/{version}/settings/lifecycle`
 */
export function getLifecycleSettings(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetLifecycleSettings.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetLifecycleSettings.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/settings/lifecycle`,
    options,
  );
}

/**
 * Publish or unpublish an API version
 * @path `/apis/{owner}/{api}/{version}/settings/lifecycle`
 */
export function putSetLifecycleSettings(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PutSetLifecycleSettings.PathParams;
  queryParams?: API.SwaggerHubV2Json.ApIs.PutSetLifecycleSettings.QueryParams;
  body?: API.SwaggerHubV2Json.ApIs.PutSetLifecycleSettings.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/settings/lifecycle`,
    options,
  );
}

/**
 * Get the visibility (public or private) of API version
 * @path `/apis/{owner}/{api}/{version}/settings/private`
 */
export function getPrivateSettings(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetPrivateSettings.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetPrivateSettings.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/settings/private`,
    options,
  );
}

/**
 * Set the visibility (public or private) of an API version
 * @path `/apis/{owner}/{api}/{version}/settings/private`
 */
export function putSetPrivateSettings(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PutSetPrivateSettings.PathParams;
  body: API.SwaggerHubV2Json.ApIs.PutSetPrivateSettings.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/settings/private`,
    options,
  );
}

/**
 * Retrieve the standardization errors for a given API definition
 * @path `/apis/{owner}/{api}/{version}/standardization`
 */
export function getStandardizationErrors(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetStandardizationErrors.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetStandardizationErrors.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/standardization`,
    options,
  );
}

/**
 * Get the OpenAPI definition for the specified API version in JSON format
 * @path `/apis/{owner}/{api}/{version}/swagger.json`
 */
export function getJsonDefinition(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetJsonDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.ApIs.GetJsonDefinition.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetJsonDefinition.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/swagger.json`,
    options,
  );
}

/**
 * Get the OpenAPI definition for the specified API version in YAML format
 * @path `/apis/{owner}/{api}/{version}/swagger.yaml`
 */
export function getYamlDefinition(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetYamlDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.ApIs.GetYamlDefinition.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetYamlDefinition.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/swagger.yaml`,
    options,
  );
}

/**
 * **Note:** This endpoint is deprecated. Use the following new endpoint instead:
 * GET /apis/{owner}/{api}/{version}/standardization
 *
 * If your organization has [API standardization](https://support.smartbear.com/swaggerhub/docs/organizations/api-standardization.html) configured, you can use this operation to validate a specific API version and get a list of errors or warnings with line numbers.
 *
 * This operation checks for standardization errors only and does not return OpenAPI syntax errors (such as misspelled keywords) or YAML syntax errors.
 * @summary Deprecated Get API Standardization errors and warnings
 * @path `/apis/{owner}/{api}/{version}/validation`
 * @deprecated
 */
export function getValidation(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetValidation.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetValidation.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/validation`,
    options,
  );
}

/**
 * Delete an API version
 * @path `/apis/{owner}/{api}/{version}`
 */
export function deleteApiVersion(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.DeleteApiVersion.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}`,
    options,
  );
}

/**
 * Get the OpenAPI definition of the specified API version
 * @path `/apis/{owner}/{api}/{version}`
 */
export function getDefinition(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.ApIs.GetDefinition.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetDefinition.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}`,
    options,
  );
}

/**
 * Delete an API
 * @path `/apis/{owner}/{api}`
 */
export function deleteApi(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.DeleteApi.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}`,
    options,
  );
}

/**
 * Get a list of API versions
 * @path `/apis/{owner}/{api}`
 */
export function getApiVersions(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetApiVersions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetApiVersions.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}`,
    options,
  );
}

/**
 * Use this operation to create a new API or update an existing API by uploading its OpenAPI definition in YAML or JSON format. The authenticating user must have permissions to create or update APIs in the specified `owner` account.
 *
 * The API name and version must follow SwaggerHub naming rules, otherwise the request will be rejected. Refer to:
 * [API name format](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html)
 * [Version format](https://support.smartbear.com/swaggerhub/docs/apis/versioning.html#format)
 *
 *
 * When a new version of an existing API is created, it does not automatically become the default version. You can use `PUT /apis/{owner}/{api}/settings/default` to set the default version.
 *
 * ### cURL example
 * Line breaks are added for readability.
 *
 *     curl -X POST "https://api.swaggerhub.com/apis/OWNER/API_TO_CREATE_OR_UPDATE"
 *          -H "Authorization: SWAGGERHUB_API_KEY"
 *          -H "Content-Type: application/yaml"
 *          --data-binary @C:\work\swagger.yaml
 *
 * **Note:** Use `--data-binary` (not `-d`) when uploading YAML files using cURL, and remember to specify the correct `Content-Type` header.
 * @summary Create or update an API
 * @path `/apis/{owner}/{api}`
 */
export function postSaveDefinition(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.PostSaveDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.ApIs.PostSaveDefinition.QueryParams;
  body: API.SwaggerHubV2Json.ApIs.PostSaveDefinition.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}`,
    options,
  );
}

/**
 * Get a list of APIs of the specified owner
 * @path `/apis/{owner}`
 */
export function getOwnerApis(options: {
  pathParams: API.SwaggerHubV2Json.ApIs.GetOwnerApis.PathParams;
  queryParams?: API.SwaggerHubV2Json.ApIs.GetOwnerApis.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetOwnerApis.Response>(
    "get",
    `/apis/${options.pathParams.owner}`,
    options,
  );
}

/**
 * This is a convenience alias for `GET /specs?specType=API`.
 * @summary Search APIs
 * @path `/apis`
 */
export function getSearchApis(options?: {
  queryParams?: API.SwaggerHubV2Json.ApIs.GetSearchApis.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/apis", options || {});
}

/**
 * Retrieve a list of currently defined APIs, domains, and templates in APIs.json format
 * @path `/specs`
 */
export function getSearchApisAndDomains(options?: {
  queryParams?: API.SwaggerHubV2Json.ApIs.GetSearchApisAndDomains.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.ApIs.GetSearchApisAndDomains.Response>(
    "get",
    "/specs",
    options || {},
  );
}
