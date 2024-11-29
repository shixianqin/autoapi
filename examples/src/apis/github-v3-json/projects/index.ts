import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary List organization projects
 * @path `/orgs/{org}/projects`
 * @docs https://docs.github.com/rest/reference/projects#list-organization-projects
 */
export function getListForOrg(options: {
  pathParams: API.GithubV3Json.Projects.GetListForOrg.PathParams;
  queryParams?: API.GithubV3Json.Projects.GetListForOrg.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetListForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/projects`,
    options,
  );
}

/**
 * Creates an organization project board. Returns a `410 Gone` status if projects are disabled in the organization or if the organization does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary Create an organization project
 * @path `/orgs/{org}/projects`
 * @docs https://docs.github.com/rest/reference/projects#create-an-organization-project
 */
export function postCreateForOrg(options: {
  pathParams: API.GithubV3Json.Projects.PostCreateForOrg.PathParams;
  body: API.GithubV3Json.Projects.PostCreateForOrg.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostCreateForOrg.Response>(
    "post",
    `/orgs/${options.pathParams.org}/projects`,
    options,
  );
}

/**
 * Move a project card
 * @path `/projects/columns/cards/{card_id}/moves`
 * @docs https://docs.github.com/rest/reference/projects#move-a-project-card
 */
export function postMoveCard(options: {
  pathParams: API.GithubV3Json.Projects.PostMoveCard.PathParams;
  body: API.GithubV3Json.Projects.PostMoveCard.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostMoveCard.Response>(
    "post",
    `/projects/columns/cards/${options.pathParams.card_id}/moves`,
    options,
  );
}

/**
 * Delete a project card
 * @path `/projects/columns/cards/{card_id}`
 * @docs https://docs.github.com/rest/reference/projects#delete-a-project-card
 */
export function deleteCard(options: {
  pathParams: API.GithubV3Json.Projects.DeleteCard.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/projects/columns/cards/${options.pathParams.card_id}`,
    options,
  );
}

/**
 * Get a project card
 * @path `/projects/columns/cards/{card_id}`
 * @docs https://docs.github.com/rest/reference/projects#get-a-project-card
 */
export function getCard(options: {
  pathParams: API.GithubV3Json.Projects.GetCard.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetCard.Response>(
    "get",
    `/projects/columns/cards/${options.pathParams.card_id}`,
    options,
  );
}

/**
 * Update an existing project card
 * @path `/projects/columns/cards/{card_id}`
 * @docs https://docs.github.com/rest/reference/projects#update-a-project-card
 */
export function patchUpdateCard(options: {
  pathParams: API.GithubV3Json.Projects.PatchUpdateCard.PathParams;
  body?: API.GithubV3Json.Projects.PatchUpdateCard.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PatchUpdateCard.Response>(
    "patch",
    `/projects/columns/cards/${options.pathParams.card_id}`,
    options,
  );
}

/**
 * List project cards
 * @path `/projects/columns/{column_id}/cards`
 * @docs https://docs.github.com/rest/reference/projects#list-project-cards
 */
export function getListCards(options: {
  pathParams: API.GithubV3Json.Projects.GetListCards.PathParams;
  queryParams?: API.GithubV3Json.Projects.GetListCards.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetListCards.Response>(
    "get",
    `/projects/columns/${options.pathParams.column_id}/cards`,
    options,
  );
}

/**
 * Create a project card
 * @path `/projects/columns/{column_id}/cards`
 * @docs https://docs.github.com/rest/reference/projects#create-a-project-card
 */
export function postCreateCard(options: {
  pathParams: API.GithubV3Json.Projects.PostCreateCard.PathParams;
  body: API.GithubV3Json.Projects.PostCreateCard.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostCreateCard.Response>(
    "post",
    `/projects/columns/${options.pathParams.column_id}/cards`,
    options,
  );
}

/**
 * Move a project column
 * @path `/projects/columns/{column_id}/moves`
 * @docs https://docs.github.com/rest/reference/projects#move-a-project-column
 */
export function postMoveColumn(options: {
  pathParams: API.GithubV3Json.Projects.PostMoveColumn.PathParams;
  body: API.GithubV3Json.Projects.PostMoveColumn.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostMoveColumn.Response>(
    "post",
    `/projects/columns/${options.pathParams.column_id}/moves`,
    options,
  );
}

/**
 * Delete a project column
 * @path `/projects/columns/{column_id}`
 * @docs https://docs.github.com/rest/reference/projects#delete-a-project-column
 */
export function deleteColumn(options: {
  pathParams: API.GithubV3Json.Projects.DeleteColumn.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/projects/columns/${options.pathParams.column_id}`,
    options,
  );
}

/**
 * Get a project column
 * @path `/projects/columns/{column_id}`
 * @docs https://docs.github.com/rest/reference/projects#get-a-project-column
 */
export function getColumn(options: {
  pathParams: API.GithubV3Json.Projects.GetColumn.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetColumn.Response>(
    "get",
    `/projects/columns/${options.pathParams.column_id}`,
    options,
  );
}

/**
 * Update an existing project column
 * @path `/projects/columns/{column_id}`
 * @docs https://docs.github.com/rest/reference/projects#update-a-project-column
 */
export function patchUpdateColumn(options: {
  pathParams: API.GithubV3Json.Projects.PatchUpdateColumn.PathParams;
  body: API.GithubV3Json.Projects.PatchUpdateColumn.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PatchUpdateColumn.Response>(
    "patch",
    `/projects/columns/${options.pathParams.column_id}`,
    options,
  );
}

/**
 * Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.
 * @summary Get project permission for a user
 * @path `/projects/{project_id}/collaborators/{username}/permission`
 * @docs https://docs.github.com/rest/reference/projects#get-project-permission-for-a-user
 */
export function getPermissionForUser(options: {
  pathParams: API.GithubV3Json.Projects.GetPermissionForUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetPermissionForUser.Response>(
    "get",
    `/projects/${options.pathParams.project_id}/collaborators/${options.pathParams.username}/permission`,
    options,
  );
}

/**
 * Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.
 * @summary Remove user as a collaborator
 * @path `/projects/{project_id}/collaborators/{username}`
 * @docs https://docs.github.com/rest/reference/projects#remove-project-collaborator
 */
export function deleteRemoveCollaborator(options: {
  pathParams: API.GithubV3Json.Projects.DeleteRemoveCollaborator.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/projects/${options.pathParams.project_id}/collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.
 * @summary Add project collaborator
 * @path `/projects/{project_id}/collaborators/{username}`
 * @docs https://docs.github.com/rest/reference/projects#add-project-collaborator
 */
export function putAddCollaborator(options: {
  pathParams: API.GithubV3Json.Projects.PutAddCollaborator.PathParams;
  body?: API.GithubV3Json.Projects.PutAddCollaborator.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/projects/${options.pathParams.project_id}/collaborators/${options.pathParams.username}`,
    options,
  );
}

/**
 * Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.
 * @summary List project collaborators
 * @path `/projects/{project_id}/collaborators`
 * @docs https://docs.github.com/rest/reference/projects#list-project-collaborators
 */
export function getListCollaborators(options: {
  pathParams: API.GithubV3Json.Projects.GetListCollaborators.PathParams;
  queryParams?: API.GithubV3Json.Projects.GetListCollaborators.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetListCollaborators.Response>(
    "get",
    `/projects/${options.pathParams.project_id}/collaborators`,
    options,
  );
}

/**
 * List project columns
 * @path `/projects/{project_id}/columns`
 * @docs https://docs.github.com/rest/reference/projects#list-project-columns
 */
export function getListColumns(options: {
  pathParams: API.GithubV3Json.Projects.GetListColumns.PathParams;
  queryParams?: API.GithubV3Json.Projects.GetListColumns.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetListColumns.Response>(
    "get",
    `/projects/${options.pathParams.project_id}/columns`,
    options,
  );
}

/**
 * Create a project column
 * @path `/projects/{project_id}/columns`
 * @docs https://docs.github.com/rest/reference/projects#create-a-project-column
 */
export function postCreateColumn(options: {
  pathParams: API.GithubV3Json.Projects.PostCreateColumn.PathParams;
  body: API.GithubV3Json.Projects.PostCreateColumn.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostCreateColumn.Response>(
    "post",
    `/projects/${options.pathParams.project_id}/columns`,
    options,
  );
}

/**
 * Deletes a project board. Returns a `404 Not Found` status if projects are disabled.
 * @summary Delete a project
 * @path `/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/projects#delete-a-project
 */
export function deleteProjects(options: {
  pathParams: API.GithubV3Json.Projects.DeleteProjects.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary Get a project
 * @path `/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/projects#get-a-project
 */
export function getProjects(options: {
  pathParams: API.GithubV3Json.Projects.GetProjects.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetProjects.Response>(
    "get",
    `/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary Update a project
 * @path `/projects/{project_id}`
 * @docs https://docs.github.com/rest/reference/projects#update-a-project
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Projects.PatchUpdate.PathParams;
  body?: API.GithubV3Json.Projects.PatchUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PatchUpdate.Response>(
    "patch",
    `/projects/${options.pathParams.project_id}`,
    options,
  );
}

/**
 * Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary List repository projects
 * @path `/repos/{owner}/{repo}/projects`
 * @docs https://docs.github.com/rest/reference/projects#list-repository-projects
 */
export function getListForRepo(options: {
  pathParams: API.GithubV3Json.Projects.GetListForRepo.PathParams;
  queryParams?: API.GithubV3Json.Projects.GetListForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetListForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/projects`,
    options,
  );
}

/**
 * Creates a repository project board. Returns a `410 Gone` status if projects are disabled in the repository or if the repository does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary Create a repository project
 * @path `/repos/{owner}/{repo}/projects`
 * @docs https://docs.github.com/rest/reference/projects#create-a-repository-project
 */
export function postCreateForRepo(options: {
  pathParams: API.GithubV3Json.Projects.PostCreateForRepo.PathParams;
  body: API.GithubV3Json.Projects.PostCreateForRepo.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostCreateForRepo.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/projects`,
    options,
  );
}

/**
 * Creates a user project board. Returns a `410 Gone` status if the user does not have existing classic projects. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.
 * @summary Create a user project
 * @path `/user/projects`
 * @docs https://docs.github.com/rest/reference/projects#create-a-user-project
 */
export function postCreateForAuthenticatedUser(options: {
  body: API.GithubV3Json.Projects.PostCreateForAuthenticatedUser.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.PostCreateForAuthenticatedUser.Response>(
    "post",
    "/user/projects",
    options,
  );
}

/**
 * List user projects
 * @path `/users/{username}/projects`
 * @docs https://docs.github.com/rest/reference/projects#list-user-projects
 */
export function getListForUser(options: {
  pathParams: API.GithubV3Json.Projects.GetListForUser.PathParams;
  queryParams?: API.GithubV3Json.Projects.GetListForUser.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Projects.GetListForUser.Response>(
    "get",
    `/users/${options.pathParams.username}/projects`,
    options,
  );
}
