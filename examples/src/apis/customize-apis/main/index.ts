import { request } from "@/adapter";

/**
 * @path `/customize/path/to/categories`
 */
export function getCustomizePathToCategories(options?: {
  queryParams?: API.CustomizeApis.Main.GetCustomizePathToCategories.QueryParams;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeApis.Main.GetCustomizePathToCategories.Response>(
    "get",
    "/customize/path/to/categories",
    options || {},
  );
}

/**
 * Create an article
 * @path `/customize/path/to/create`
 */
export function postCreate(options: {
  formData: API.CustomizeApis.Main.PostCreate.FormData;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeApis.Main.PostCreate.Response>(
    "post",
    "/customize/path/to/create",
    options,
  );
}

/**
 * @path `/customize/path/to/media`
 */
export function getCustomizePathToMedia(options: {
  queryParams: API.CustomizeApis.Main.GetCustomizePathToMedia.QueryParams;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeApis.Main.GetCustomizePathToMedia.Response>(
    "get",
    "/customize/path/to/media",
    options,
  );
}
