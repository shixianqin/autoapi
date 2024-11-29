import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Creates list of users with given input array
 * @path `/user/createWithArray`
 */
export function postCreateUsersWithArrayInput(options?: {
  headers?: Record<string, any>;
  body?: API.SwaggerPetstoreV2Json.User.PostCreateUsersWithArrayInput.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/user/createWithArray", options || {});
}

/**
 * Creates list of users with given input array
 * @path `/user/createWithList`
 */
export function postCreateUsersWithListInput(options?: {
  headers?: Record<string, any>;
  body?: API.SwaggerPetstoreV2Json.User.PostCreateUsersWithListInput.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/user/createWithList", options || {});
}

/**
 * Logs user into the system
 * @path `/user/login`
 */
export function getLogin(options: {
  queryParams: API.SwaggerPetstoreV2Json.User.GetLogin.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Json.User.GetLogin.Response>(
    "get",
    "/user/login",
    options,
  );
}

/**
 * Logs out current logged in user session
 * @path `/user/logout`
 */
export function getLogout(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/user/logout", options || {});
}

/**
 * This can only be done by the logged in user.
 * @summary Delete user
 * @path `/user/{username}`
 */
export function deleteUser(options: {
  pathParams: API.SwaggerPetstoreV2Json.User.DeleteUser.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/user/${options.pathParams.username}`,
    options,
  );
}

/**
 * Get user by user name
 * @path `/user/{username}`
 */
export function getByName(options: {
  pathParams: API.SwaggerPetstoreV2Json.User.GetByName.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Json.User.GetByName.Response>(
    "get",
    `/user/${options.pathParams.username}`,
    options,
  );
}

/**
 * This can only be done by the logged in user.
 * @summary Updated user
 * @path `/user/{username}`
 */
export function putUpdate(options: {
  pathParams: API.SwaggerPetstoreV2Json.User.PutUpdate.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerPetstoreV2Json.User.PutUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/user/${options.pathParams.username}`, options);
}

/**
 * This can only be done by the logged in user.
 * @summary Create user
 * @path `/user`
 */
export function postCreate(options?: {
  headers?: Record<string, any>;
  body?: API.SwaggerPetstoreV2Json.User.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/user", options || {});
}
