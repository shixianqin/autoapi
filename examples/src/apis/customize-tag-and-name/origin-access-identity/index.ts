import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get the configuration information about an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}/config`
 */
export function getCloudFrontConfig(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessIdentity.GetCloudFrontConfig.PathParams;
  headers?: API.CustomizeTagAndName.OriginAccessIdentity.GetCloudFrontConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessIdentity.GetCloudFrontConfig.Response>(
    "get",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Update an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}/config`
 */
export function putUpdateCloudFront(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessIdentity.PutUpdateCloudFront.PathParams;
  body: API.CustomizeTagAndName.OriginAccessIdentity.PutUpdateCloudFront.Body;
  headers?: API.CustomizeTagAndName.OriginAccessIdentity.PutUpdateCloudFront.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessIdentity.PutUpdateCloudFront.Response>(
    "put",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Delete an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}`
 */
export function deleteCloudFront(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessIdentity.DeleteCloudFront.PathParams;
  headers?: API.CustomizeTagAndName.OriginAccessIdentity.DeleteCloudFront.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Get the information about an origin access identity.
 * @path `/2020-05-31/origin-access-identity/cloudfront/{Id}`
 */
export function getCloudFront(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessIdentity.GetCloudFront.PathParams;
  headers?: API.CustomizeTagAndName.OriginAccessIdentity.GetCloudFront.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessIdentity.GetCloudFront.Response>(
    "get",
    `/2020-05-31/origin-access-identity/cloudfront/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Lists origin access identities.
 * @path `/2020-05-31/origin-access-identity/cloudfront`
 */
export function getListCloudFrontOriginAccessIdentities(options?: {
  queryParams?: API.CustomizeTagAndName.OriginAccessIdentity.GetListCloudFrontOriginAccessIdentities.QueryParams;
  headers?: API.CustomizeTagAndName.OriginAccessIdentity.GetListCloudFrontOriginAccessIdentities.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessIdentity.GetListCloudFrontOriginAccessIdentities.Response>(
    "get",
    "/2020-05-31/origin-access-identity/cloudfront",
    options || {},
  );
}

/**
 * Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
 * @path `/2020-05-31/origin-access-identity/cloudfront`
 */
export function postCreateCloudFront(options: {
  body: API.CustomizeTagAndName.OriginAccessIdentity.PostCreateCloudFront.Body;
  headers?: API.CustomizeTagAndName.OriginAccessIdentity.PostCreateCloudFront.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessIdentity.PostCreateCloudFront.Response>(
    "post",
    "/2020-05-31/origin-access-identity/cloudfront",
    options,
  );
}
