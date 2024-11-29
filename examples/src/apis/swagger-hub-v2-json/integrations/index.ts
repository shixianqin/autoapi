import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Use this operation to trigger an existing integration.
 *
 * Source control integrations push to (not pull from) the configured repository and branch. You can optionally provide a custom commit message.
 *
 * **Note:** Webhooks cannot be triggered by this operation, they are only triggered when an API is saved or published. An attempt to trigger a webhook will return status code 400.
 * @summary Run an integration
 * @path `/apis/{owner}/{api}/{version}/integrations/{integrationId}/execute`
 */
export function postExecuteIntegration(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.PostExecuteIntegration.PathParams;
  queryParams?: API.SwaggerHubV2Json.Integrations.PostExecuteIntegration.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations/${options.pathParams.integrationId}/execute`,
    options,
  );
}

/**
 * Delete an existing integration specified by its ID.
 * @summary Delete an integration
 * @path `/apis/{owner}/{api}/{version}/integrations/{integrationId}`
 */
export function deleteIntegration(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.DeleteIntegration.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations/${options.pathParams.integrationId}`,
    options,
  );
}

/**
 * Returns the configuration of the specified integration. Access tokens and passwords are not returned for security reasons.
 * @summary Get integration settings
 * @path `/apis/{owner}/{api}/{version}/integrations/{integrationId}`
 */
export function getIntegrationById(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.GetIntegrationById.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Integrations.GetIntegrationById.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations/${options.pathParams.integrationId}`,
    options,
  );
}

/**
 * Use this operation to partially update integration settings for the specified API and integration ID. For example, enable or disable an integration, or specify a new access token.
 *
 * Only the fields provided in the request body will be updated; other settings will remain unchanged. For a list of fields that can be updated, see the following objects in the "Models" section at the bottom of API docs:
 * `AmazonApiGatewayIntegration`
 * `AmazonApiGatewayLambdaIntegration`
 * `ApigeeEdgeIntegration`
 * `AutoMockingIntegration`
 * `AzureApiManagementIntegration`
 * `AzureDevopsServicesIntegration`
 * `BitbucketCloudIntegration`
 * `BitbucketServerIntegration`
 * `GitHubIntegration`
 * `GitHubEnterpriseIntegration`
 * `GitLabIntegration`
 * `IBMApiConnectIntegration`
 * `WebhookIntegration`
 *
 * **Notes:**
 * `configType` (integration type) cannot be changed.
 * If updating the integration `name`, make sure the new name is unique among all integrations configured for the given API version.
 * If you change `target` to the YAMl/JSON definition, you must also specify the `outputFile`.
 * If you change `syncMethod` to _Advanced Sync_, you must also specify a non-empty list of either `providedPaths` or `managedPaths` (or both). If you are not sure which paths to use, use `providedPaths`=`["*"]`.
 * The update operation does not validate the repository details and access tokens.
 * @summary Partially update integration settings
 * @path `/apis/{owner}/{api}/{version}/integrations/{integrationId}`
 */
export function patchIntegration(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.PatchIntegration.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerHubV2Json.Integrations.PatchIntegration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations/${options.pathParams.integrationId}`,
    options,
  );
}

/**
 * Updates integration settings for the specified API and integration ID. The integration type is determined by which object is passed in the request body.
 *
 * The request body must contain a **full representation** of an integration object. If you want to update just a few parameters, use the PATCH operation instead.
 *
 * For a list of fields that need to be provided in the request body, see the descriptions of the following objects in the "Models" section at the bottom of API docs:
 * `AmazonApiGatewayIntegration`
 * `AmazonApiGatewayLambdaIntegration`
 * `ApigeeEdgeIntegration`
 * `AutoMockingIntegration`
 * `AzureApiManagementIntegration`
 * `AzureDevopsServicesIntegration`
 * `BitbucketCloudIntegration`
 * `BitbucketServerIntegration`
 * `GitHubIntegration`
 * `GitHubEnterpriseIntegration`
 * `GitLabIntegration`
 * `IBMApiConnectIntegration`
 * `WebhookIntegration`
 *
 * **Notes:**
 * The integration `name` must be unique among all integrations configured for the given API version.
 * If `target` is the YAMl/JSON definition, you must specify the `outputFile`.
 * If `syncMethod`=_Advanced Sync_, you must specify a non-empty list of either `providedPaths` or `managedPaths` (or both). If you are not sure which paths to use, use `providedPaths`=`["*"]`.
 * The operation does not validate the repository details and access tokens.
 * @summary Update integration settings
 * @path `/apis/{owner}/{api}/{version}/integrations/{integrationId}`
 */
export function putUpdateIntegration(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.PutUpdateIntegration.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerHubV2Json.Integrations.PutUpdateIntegration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations/${options.pathParams.integrationId}`,
    options,
  );
}

/**
 * The returned information includes integration types, names, unique IDs, and enabled/disabled status.
 *
 * **Note:** The following integration types are currently not returned: Amazon API Gateway Lambda Sync, Apigee Edge, Azure API Management, IBM API Connect.
 * @summary Get all integrations configured for the specified API version
 * @path `/apis/{owner}/{api}/{version}/integrations`
 */
export function getIntegrations(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.GetIntegrations.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Integrations.GetIntegrations.Response>(
    "get",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations`,
    options,
  );
}

/**
 * Use this operation to configure an integration for a specific API version. The integration type is determined by which object is provided in the request body (specifically, by the `configType` value).
 *
 * For a list of fields that need to be provided in the request body, see the descriptions of the following objects in the "Models" section at the bottom of API docs:
 * `AmazonApiGatewayIntegration`
 * `AmazonApiGatewayLambdaIntegration`
 * `ApigeeEdgeIntegration`
 * `AutoMockingIntegration`
 * `AzureApiManagementIntegration`
 * `AzureDevopsServicesIntegration`
 * `BitbucketCloudIntegration`
 * `BitbucketServerIntegration`
 * `GitHubIntegration`
 * `GitHubEnterpriseIntegration`
 * `GitLabIntegration`
 * `IBMApiConnectIntegration`
 * `WebhookIntegration`
 *
 * **Notes:**
 * The integration `name` must be unique among all integrations configured for the given API version.
 * If `target` is the YAMl/JSON definition, you must specify the `outputFile`.
 * If `syncMethod`=_Advanced Sync_, you must specify a non-empty list of either `providedPaths` or `managedPaths` (or both). If you are not sure which paths to use, use `providedPaths`=`["*"]`.
 * The operation does not validate the repository details and access tokens.
 * @summary Create an integration for the specified API and version
 * @path `/apis/{owner}/{api}/{version}/integrations`
 */
export function postCreateIntegration(options: {
  pathParams: API.SwaggerHubV2Json.Integrations.PostCreateIntegration.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerHubV2Json.Integrations.PostCreateIntegration.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Integrations.PostCreateIntegration.Response>(
    "post",
    `/apis/${options.pathParams.owner}/${options.pathParams.api}/${options.pathParams.version}/integrations`,
    options,
  );
}
