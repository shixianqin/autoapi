import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Disables additional CloudWatch metrics for the specified CloudFront distribution.
 * @path `/2020-05-31/distributions/{DistributionId}/monitoring-subscription/`
 */
export function deleteMonitoringSubscription(options: {
  pathParams: API.CustomizeTagAndName.Distributions.DeleteMonitoringSubscription.PathParams;
  headers?: API.CustomizeTagAndName.Distributions.DeleteMonitoringSubscription.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Distributions.DeleteMonitoringSubscription.Response>(
    "delete",
    `/2020-05-31/distributions/${options.pathParams.DistributionId}/monitoring-subscription/`,
    options,
  );
}

/**
 * Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.
 * @path `/2020-05-31/distributions/{DistributionId}/monitoring-subscription/`
 */
export function getMonitoringSubscription(options: {
  pathParams: API.CustomizeTagAndName.Distributions.GetMonitoringSubscription.PathParams;
  headers?: API.CustomizeTagAndName.Distributions.GetMonitoringSubscription.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Distributions.GetMonitoringSubscription.Response>(
    "get",
    `/2020-05-31/distributions/${options.pathParams.DistributionId}/monitoring-subscription/`,
    options,
  );
}

/**
 * <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/distributions/{DistributionId}/monitoring-subscription/`
 */
export function postCreateMonitoringSubscription(options: {
  pathParams: API.CustomizeTagAndName.Distributions.PostCreateMonitoringSubscription.PathParams;
  body: API.CustomizeTagAndName.Distributions.PostCreateMonitoringSubscription.Body;
  headers?: API.CustomizeTagAndName.Distributions.PostCreateMonitoringSubscription.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Distributions.PostCreateMonitoringSubscription.Response>(
    "post",
    `/2020-05-31/distributions/${options.pathParams.DistributionId}/monitoring-subscription/`,
    options,
  );
}
