import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/global-styles/themes/{stylesheet}/variations`
 */
export function getWpV2ThemesStylesheetVariations(options: {
  pathParams: API.WordpressV2Json.GlobalStyles.GetWpV2ThemesStylesheetVariations.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/global-styles/themes/${options.pathParams.stylesheet}/variations`,
    options,
  );
}

/**
 * @path `/wp/v2/global-styles/themes/{stylesheet}`
 */
export function getWpV2ThemesStylesheet(options: {
  pathParams: API.WordpressV2Json.GlobalStyles.GetWpV2ThemesStylesheet.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/global-styles/themes/${options.pathParams.stylesheet}`,
    options,
  );
}

/**
 * @path `/wp/v2/global-styles/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.GlobalStyles.GetWpV2Id.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/global-styles/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/global-styles/{id}`
 */
export function patchWpV2Id(options: {
  pathParams: API.WordpressV2Json.GlobalStyles.PatchWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.GlobalStyles.PatchWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/wp/v2/global-styles/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/global-styles/{id}`
 */
export function postWpV2Id(options: {
  pathParams: API.WordpressV2Json.GlobalStyles.PostWpV2Id.PathParams;
  formData?: API.WordpressV2Json.GlobalStyles.PostWpV2Id.FormData;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/global-styles/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/global-styles/{id}`
 */
export function putWpV2Id(options: {
  pathParams: API.WordpressV2Json.GlobalStyles.PutWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.GlobalStyles.PutWpV2Id.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/wp/v2/global-styles/${options.pathParams.id}`,
    options,
  );
}
