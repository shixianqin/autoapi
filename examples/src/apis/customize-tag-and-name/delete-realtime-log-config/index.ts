import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>
 * @path `/2020-05-31/delete-realtime-log-config/`
 */
export function postDeleteRealtimeLogConfig(options?: {
  body?: API.CustomizeTagAndName.DeleteRealtimeLogConfig.PostDeleteRealtimeLogConfig.Body;
  headers?: API.CustomizeTagAndName.DeleteRealtimeLogConfig.PostDeleteRealtimeLogConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/2020-05-31/delete-realtime-log-config/",
    options || {},
  );
}
