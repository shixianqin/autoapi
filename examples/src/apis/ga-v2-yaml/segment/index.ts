import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists segments to which the user has access
 * @summary Get Segments
 * @path `/management/segments`
 */
export function getAnalyticsManagementSegmentsList(options?: {
  queryParams?: API.GaV2Yaml.Segment.GetAnalyticsManagementSegmentsList.QueryParams;
  headers?: API.GaV2Yaml.Segment.GetAnalyticsManagementSegmentsList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/management/segments", options || {});
}
