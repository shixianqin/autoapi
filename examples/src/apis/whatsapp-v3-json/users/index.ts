import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Login-User
 * @path `/users/login`
 */
export function postLoginUser(options: {
  headers?: API.WhatsappV3Json.Users.PostLoginUser.Headers;
  body: API.WhatsappV3Json.Users.PostLoginUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Users.PostLoginUser.Response>(
    "post",
    "/users/login",
    options,
  );
}

/**
 * Logout-User
 * @path `/users/logout`
 */
export function postLogoutUser(options?: {
  headers?: API.WhatsappV3Json.Users.PostLogoutUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/users/logout", options || {});
}

/**
 * Delete-User
 * @path `/users/{UserUsername}`
 */
export function deleteUser(options: {
  pathParams: API.WhatsappV3Json.Users.DeleteUser.PathParams;
  headers?: API.WhatsappV3Json.Users.DeleteUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Users.DeleteUser.Response>(
    "delete",
    `/users/${options.pathParams.UserUsername}`,
    options,
  );
}

/**
 * Get-User
 * @path `/users/{UserUsername}`
 */
export function getUser(options: {
  pathParams: API.WhatsappV3Json.Users.GetUser.PathParams;
  headers?: API.WhatsappV3Json.Users.GetUser.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Users.GetUser.Response>(
    "get",
    `/users/${options.pathParams.UserUsername}`,
    options,
  );
}

/**
 * Update-User
 * @path `/users/{UserUsername}`
 */
export function putUpdateUser(options: {
  pathParams: API.WhatsappV3Json.Users.PutUpdateUser.PathParams;
  headers?: API.WhatsappV3Json.Users.PutUpdateUser.Headers;
  body: API.WhatsappV3Json.Users.PutUpdateUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Users.PutUpdateUser.Response>(
    "put",
    `/users/${options.pathParams.UserUsername}`,
    options,
  );
}

/**
 * Create-User
 * @path `/users`
 */
export function postCreateUser(options: {
  headers?: API.WhatsappV3Json.Users.PostCreateUser.Headers;
  body: API.WhatsappV3Json.Users.PostCreateUser.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Users.PostCreateUser.Response>(
    "post",
    "/users",
    options,
  );
}
