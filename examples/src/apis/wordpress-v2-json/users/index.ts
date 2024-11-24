import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/users/me`
 */
export function deleteWpV2Me(options: {
  queryParams: API.WordpressV2Json.Users.DeleteWpV2Me.QueryParams;
  headers?: API.WordpressV2Json.Users.DeleteWpV2Me.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/wp/v2/users/me", options);
}

/**
 * @path `/wp/v2/users/me`
 */
export function getWpV2Me(options?: {
  queryParams?: API.WordpressV2Json.Users.GetWpV2Me.QueryParams;
  headers?: API.WordpressV2Json.Users.GetWpV2Me.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/users/me", options || {});
}

/**
 * @path `/wp/v2/users/me`
 */
export function patchWpV2Me(options?: {
  queryParams?: API.WordpressV2Json.Users.PatchWpV2Me.QueryParams;
  headers?: API.WordpressV2Json.Users.PatchWpV2Me.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("patch", "/wp/v2/users/me", options || {});
}

/**
 * @path `/wp/v2/users/me`
 */
export function postWpV2Me(options?: {
  headers?: API.WordpressV2Json.Users.PostWpV2Me.Headers;
  formData?: API.WordpressV2Json.Users.PostWpV2Me.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/users/me", options || {});
}

/**
 * @path `/wp/v2/users/me`
 */
export function putWpV2Me(options?: {
  queryParams?: API.WordpressV2Json.Users.PutWpV2Me.QueryParams;
  headers?: API.WordpressV2Json.Users.PutWpV2Me.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", "/wp/v2/users/me", options || {});
}

/**
 * @path `/wp/v2/users/{id}`
 */
export function deleteWpV2Id(options: {
  pathParams: API.WordpressV2Json.Users.DeleteWpV2Id.PathParams;
  queryParams: API.WordpressV2Json.Users.DeleteWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Users.DeleteWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/users/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.Users.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Users.GetWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Users.GetWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", `/wp/v2/users/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/users/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.Users.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Users.PatchWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Users.PatchWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/users/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.Users.PostWpV2Id.PathParams;
  headers?: API.WordpressV2Json.Users.PostWpV2Id.Headers;
  formData?: API.WordpressV2Json.Users.PostWpV2Id.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/wp/v2/users/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/users/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.Users.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.Users.PutWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.Users.PutWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/wp/v2/users/${options.pathParams.id}`, options);
}

/**
 * @path `/wp/v2/users/{user_id}/application-passwords/introspect`
 */
export function getWpV2UserIdApplicationPasswordsIntrospect(options: {
  pathParams: API.WordpressV2Json.Users.GetWpV2UserIdApplicationPasswordsIntrospect.PathParams;
  queryParams?: API.WordpressV2Json.Users.GetWpV2UserIdApplicationPasswordsIntrospect.QueryParams;
  headers?: API.WordpressV2Json.Users.GetWpV2UserIdApplicationPasswordsIntrospect.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/users/${options.pathParams.user_id}/application-passwords/introspect`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}/application-passwords`
 */
export function deleteWpV2UserIdApplicationPasswords(options: {
  pathParams: API.WordpressV2Json.Users.DeleteWpV2UserIdApplicationPasswords.PathParams;
  headers?: API.WordpressV2Json.Users.DeleteWpV2UserIdApplicationPasswords.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/users/${options.pathParams.user_id}/application-passwords`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}/application-passwords`
 */
export function getWpV2UserIdApplicationPasswords(options: {
  pathParams: API.WordpressV2Json.Users.GetWpV2UserIdApplicationPasswords.PathParams;
  queryParams?: API.WordpressV2Json.Users.GetWpV2UserIdApplicationPasswords.QueryParams;
  headers?: API.WordpressV2Json.Users.GetWpV2UserIdApplicationPasswords.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/users/${options.pathParams.user_id}/application-passwords`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}/application-passwords`
 */
export function postWpV2UserIdApplicationPasswords(options: {
  pathParams: API.WordpressV2Json.Users.PostWpV2UserIdApplicationPasswords.PathParams;
  headers?: API.WordpressV2Json.Users.PostWpV2UserIdApplicationPasswords.Headers;
  formData: API.WordpressV2Json.Users.PostWpV2UserIdApplicationPasswords.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/users/${options.pathParams.user_id}/application-passwords`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}`
 */
export function deleteWpV2UserId(options: {
  pathParams: API.WordpressV2Json.Users.DeleteWpV2UserId.PathParams;
  headers?: API.WordpressV2Json.Users.DeleteWpV2UserId.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/wp/v2/users/${options.pathParams.user_id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}`
 */
export function getWpV2UserId(options: {
  pathParams: API.WordpressV2Json.Users.GetWpV2UserId.PathParams;
  queryParams?: API.WordpressV2Json.Users.GetWpV2UserId.QueryParams;
  headers?: API.WordpressV2Json.Users.GetWpV2UserId.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/users/${options.pathParams.user_id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}`
 */
export function patchWpV2UserId(options: {
  pathParams: API.WordpressV2Json.Users.PatchWpV2UserId.PathParams;
  queryParams?: API.WordpressV2Json.Users.PatchWpV2UserId.QueryParams;
  headers?: API.WordpressV2Json.Users.PatchWpV2UserId.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/users/${options.pathParams.user_id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}`
 */
export function postWpV2UserId(options: {
  pathParams: API.WordpressV2Json.Users.PostWpV2UserId.PathParams;
  headers?: API.WordpressV2Json.Users.PostWpV2UserId.Headers;
  formData?: API.WordpressV2Json.Users.PostWpV2UserId.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/users/${options.pathParams.user_id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users/{user_id}`
 */
export function putWpV2UserId(options: {
  pathParams: API.WordpressV2Json.Users.PutWpV2UserId.PathParams;
  queryParams?: API.WordpressV2Json.Users.PutWpV2UserId.QueryParams;
  headers?: API.WordpressV2Json.Users.PutWpV2UserId.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/users/${options.pathParams.user_id}`,
    options,
  );
}

/**
 * @path `/wp/v2/users`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Users.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Users.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/users", options || {});
}

/**
 * @path `/wp/v2/users`
 */
export function postWpV2(options: {
  headers?: API.WordpressV2Json.Users.PostWpV2.Headers;
  formData: API.WordpressV2Json.Users.PostWpV2.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/wp/v2/users", options);
}
