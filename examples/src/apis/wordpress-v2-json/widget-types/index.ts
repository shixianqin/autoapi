import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/widget-types/{id}/encode`
 */
export function postWpV2IdEncode(options: {
  pathParams: API.WordpressV2Json.WidgetTypes.PostWpV2IdEncode.PathParams;
  headers?: API.WordpressV2Json.WidgetTypes.PostWpV2IdEncode.Headers;
  formData?: API.WordpressV2Json.WidgetTypes.PostWpV2IdEncode.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/widget-types/${options.pathParams.id}/encode`,
    options,
  );
}

/**
 * @path `/wp/v2/widget-types/{id}/render`
 */
export function postWpV2IdRender(options: {
  pathParams: API.WordpressV2Json.WidgetTypes.PostWpV2IdRender.PathParams;
  headers?: API.WordpressV2Json.WidgetTypes.PostWpV2IdRender.Headers;
  formData?: API.WordpressV2Json.WidgetTypes.PostWpV2IdRender.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/wp/v2/widget-types/${options.pathParams.id}/render`,
    options,
  );
}

/**
 * @path `/wp/v2/widget-types/{id}`
 */
export function getWpV2Id(options: {
  pathParams: API.WordpressV2Json.WidgetTypes.GetWpV2Id.PathParams;
  queryParams?: API.WordpressV2Json.WidgetTypes.GetWpV2Id.QueryParams;
  headers?: API.WordpressV2Json.WidgetTypes.GetWpV2Id.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/widget-types/${options.pathParams.id}`,
    options,
  );
}

/**
 * @path `/wp/v2/widget-types`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.WidgetTypes.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.WidgetTypes.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/widget-types", options || {});
}
