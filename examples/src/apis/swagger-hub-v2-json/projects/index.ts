import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get project members
 * @path `/projects/{owner}/{projectId}/members`
 */
export function getProjectMembersV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.GetProjectMembersV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Projects.GetProjectMembersV2.Response>(
    "get",
    `/projects/${options.pathParams.owner}/${options.pathParams.projectId}/members`,
    options,
  );
}

/**
 * When updating a project, the `members` list _replaces_ the existing one. This means that to add new members to a project, you need to send the `members` list containing both the existing and new members.
 *
 * @summary Update a project's members list
 * @path `/projects/{owner}/{projectId}/members`
 */
export function putUpdateProjectMembersV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.PutUpdateProjectMembersV2.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerHubV2Json.Projects.PutUpdateProjectMembersV2.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/projects/${options.pathParams.owner}/${options.pathParams.projectId}/members`,
    options,
  );
}

/**
 * Use this operation to add a single API or domain to the specified project.
 *
 * To add multiple APIs or domains at once, use `PUT /projects/{owner}/{projectId}`.
 * @summary Add an API or domain to a project
 * @path `/projects/{owner}/{projectId}/{specType}/{name}`
 */
export function putAddSpecToProjectV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.PutAddSpecToProjectV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/projects/${options.pathParams.owner}/${options.pathParams.projectId}/${options.pathParams.specType}/${options.pathParams.name}`,
    options,
  );
}

/**
 * Delete a project
 * @path `/projects/{owner}/{projectId}`
 */
export function deleteProjectV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.DeleteProjectV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/projects/${options.pathParams.owner}/${options.pathParams.projectId}`,
    options,
  );
}

/**
 * Get project information
 * @path `/projects/{owner}/{projectId}`
 */
export function getProjectV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.GetProjectV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Projects.GetProjectV2.Response>(
    "get",
    `/projects/${options.pathParams.owner}/${options.pathParams.projectId}`,
    options,
  );
}

/**
 * Use this operation to update an existing project, for example, add or remove APIs, or change the project description.
 *
 * When updating a project, the `apis` and `domains` lists _replace_ the existing ones. This means that to add new APIs and domains to a project, you need to send the `apis` and `domains` lists containing both the existing and new APIs and domains.
 *
 * To add a single API or domain to a project, you can use `PUT /projects/{owner}/{projectId}/{specType}/{name}` instead.
 * @summary Update a project
 * @path `/projects/{owner}/{projectId}`
 */
export function putSaveProjectV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.PutSaveProjectV2.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerHubV2Json.Projects.PutSaveProjectV2.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/projects/${options.pathParams.owner}/${options.pathParams.projectId}`,
    options,
  );
}

/**
 * Get all projects of an organization
 * @path `/projects/{owner}`
 */
export function getOrgV2(options: {
  pathParams: API.SwaggerHubV2Json.Projects.GetOrgV2.PathParams;
  queryParams?: API.SwaggerHubV2Json.Projects.GetOrgV2.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Projects.GetOrgV2.Response>(
    "get",
    `/projects/${options.pathParams.owner}`,
    options,
  );
}

/**
 * Create a project in an organization
 * @path `/projects/{owner}`
 */
export function postCreateProject(options: {
  pathParams: API.SwaggerHubV2Json.Projects.PostCreateProject.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerHubV2Json.Projects.PostCreateProject.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/projects/${options.pathParams.owner}`, options);
}

/**
 * Returns all projects that the authenticating user has access to. Organization owners get a list of all projects in owned organizations. Other members get a list of just the projects they are member of.
 * @summary Get all projects that a user has access to
 * @path `/projects`
 */
export function getUser(options?: {
  queryParams?: API.SwaggerHubV2Json.Projects.GetUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Projects.GetUser.Response>(
    "get",
    "/projects",
    options || {},
  );
}
