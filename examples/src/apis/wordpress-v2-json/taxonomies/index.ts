import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * @path `/wp/v2/taxonomies/{taxonomy}`
 */
export function getWpV2Taxonomy(options: {
  pathParams: API.WordpressV2Json.Taxonomies.GetWpV2Taxonomy.PathParams;
  queryParams?: API.WordpressV2Json.Taxonomies.GetWpV2Taxonomy.QueryParams;
  headers?: API.WordpressV2Json.Taxonomies.GetWpV2Taxonomy.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/wp/v2/taxonomies/${options.pathParams.taxonomy}`,
    options,
  );
}

/**
 * @path `/wp/v2/taxonomies`
 */
export function getWpV2(options?: {
  queryParams?: API.WordpressV2Json.Taxonomies.GetWpV2.QueryParams;
  headers?: API.WordpressV2Json.Taxonomies.GetWpV2.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/wp/v2/taxonomies", options || {});
}
