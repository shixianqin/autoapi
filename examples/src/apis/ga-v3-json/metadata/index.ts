import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists all columns for a report type
 * @path `/metadata/{reportType}/columns`
 */
export function getAnalyticsColumnsList(options: {
  pathParams: API.GaV3Json.Metadata.GetAnalyticsColumnsList.PathParams;
  queryParams?: API.GaV3Json.Metadata.GetAnalyticsColumnsList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Metadata.GetAnalyticsColumnsList.Response>(
    "get",
    `/metadata/${options.pathParams.reportType}/columns`,
    options,
  );
}
