import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists all columns for a report type
 * @summary Get Columsn
 * @path `/metadata/{reportType}/columns`
 */
export function getAnalyticsMetadataColumnsList(options: {
  pathParams: API.GaV2Yaml.Column.GetAnalyticsMetadataColumnsList.PathParams;
  headers?: API.GaV2Yaml.Column.GetAnalyticsMetadataColumnsList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/metadata/${options.pathParams.reportType}/columns`,
    options,
  );
}
