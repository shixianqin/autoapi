import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/themes/{stylesheet}`
 */
export function getWpV2Stylesheet(options: {
  pathParams: API.WordpressV2Json.Themes.GetWpV2Stylesheet.PathParams;
  headers?: API.WordpressV2Json.Themes.GetWpV2Stylesheet.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/themes/${options.pathParams.stylesheet}`,
    options,
  );
}

/**
 * @path `/wp/v2/themes`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Themes.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Themes.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/themes", options || {});
}
