import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>
 * @path `/2020-05-31/realtime-log-config/`
 */
export function putUpdate(options?: {
  body?: API.CustomizeTagAndName.RealtimeLogConfig.PutUpdate.Body;
  headers?: API.CustomizeTagAndName.RealtimeLogConfig.PutUpdate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.RealtimeLogConfig.PutUpdate.Response>(
    "put",
    "/2020-05-31/realtime-log-config/",
    options || {},
  );
}

/**
 * <p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/realtime-log-config`
 */
export function getListRealtimeLogConfigs(options?: {
  queryParams?: API.CustomizeTagAndName.RealtimeLogConfig.GetListRealtimeLogConfigs.QueryParams;
  headers?: API.CustomizeTagAndName.RealtimeLogConfig.GetListRealtimeLogConfigs.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.RealtimeLogConfig.GetListRealtimeLogConfigs.Response>(
    "get",
    "/2020-05-31/realtime-log-config",
    options || {},
  );
}

/**
 * <p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/realtime-log-config`
 */
export function postCreate(options: {
  body: API.CustomizeTagAndName.RealtimeLogConfig.PostCreate.Body;
  headers?: API.CustomizeTagAndName.RealtimeLogConfig.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.RealtimeLogConfig.PostCreate.Response>(
    "post",
    "/2020-05-31/realtime-log-config",
    options,
  );
}
