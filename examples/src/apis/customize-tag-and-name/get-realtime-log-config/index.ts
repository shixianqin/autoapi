import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>
 * @path `/2020-05-31/get-realtime-log-config/`
 */
export function postGetRealtimeLogConfig(options?: {
  headers?: API.CustomizeTagAndName.GetRealtimeLogConfig.PostGetRealtimeLogConfig.Headers;
  body?: API.CustomizeTagAndName.GetRealtimeLogConfig.PostGetRealtimeLogConfig.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.GetRealtimeLogConfig.PostGetRealtimeLogConfig.Response>(
    "post",
    "/2020-05-31/get-realtime-log-config/",
    options || {},
  );
}
