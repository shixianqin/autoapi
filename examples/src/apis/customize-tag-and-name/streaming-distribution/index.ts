import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get the configuration information about a streaming distribution.
 * @path `/2020-05-31/streaming-distribution/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.StreamingDistribution.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.StreamingDistribution.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.StreamingDistribution.GetConfig.Response>(
    "get",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update a streaming distribution.
 * @path `/2020-05-31/streaming-distribution/{Id}/config`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.StreamingDistribution.PutUpdate.PathParams;
  body: API.CustomizeTagAndName.StreamingDistribution.PutUpdate.Body;
  headers?: API.CustomizeTagAndName.StreamingDistribution.PutUpdate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.StreamingDistribution.PutUpdate.Response>(
    "put",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/streaming-distribution/{Id}`
 */
export function deleteStreamingDistribution(options: {
  pathParams: API.CustomizeTagAndName.StreamingDistribution.DeleteStreamingDistribution.PathParams;
  headers?: API.CustomizeTagAndName.StreamingDistribution.DeleteStreamingDistribution.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Gets information about a specified RTMP distribution, including the distribution configuration.
 * @path `/2020-05-31/streaming-distribution/{Id}`
 */
export function getStreamingDistribution(options: {
  pathParams: API.CustomizeTagAndName.StreamingDistribution.GetStreamingDistribution.PathParams;
  headers?: API.CustomizeTagAndName.StreamingDistribution.GetStreamingDistribution.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.StreamingDistribution.GetStreamingDistribution.Response>(
    "get",
    `/2020-05-31/streaming-distribution/${options.pathParams.Id}`,
    options,
  );
}

/**
 * List streaming distributions.
 * @path `/2020-05-31/streaming-distribution`
 */
export function getListStreamingDistributions(options?: {
  queryParams?: API.CustomizeTagAndName.StreamingDistribution.GetListStreamingDistributions.QueryParams;
  headers?: API.CustomizeTagAndName.StreamingDistribution.GetListStreamingDistributions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.StreamingDistribution.GetListStreamingDistributions.Response>(
    "get",
    "/2020-05-31/streaming-distribution",
    options || {},
  );
}

/**
 * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
 * @path `/2020-05-31/streaming-distribution`
 */
export function postCreate(options: {
  body: API.CustomizeTagAndName.StreamingDistribution.PostCreate.Body;
  headers?: API.CustomizeTagAndName.StreamingDistribution.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.StreamingDistribution.PostCreate.Response>(
    "post",
    "/2020-05-31/streaming-distribution",
    options,
  );
}
