import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets a CloudFront origin access control configuration.
 * @path `/2020-05-31/origin-access-control/{Id}/config`
 */
export function getConfig(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessControl.GetConfig.PathParams;
  headers?: API.CustomizeTagAndName.OriginAccessControl.GetConfig.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessControl.GetConfig.Response>(
    "get",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * Updates a CloudFront origin access control.
 * @path `/2020-05-31/origin-access-control/{Id}/config`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessControl.PutUpdate.PathParams;
  body: API.CustomizeTagAndName.OriginAccessControl.PutUpdate.Body;
  headers?: API.CustomizeTagAndName.OriginAccessControl.PutUpdate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessControl.PutUpdate.Response>(
    "put",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}/config`,
    options,
  );
}

/**
 * <p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>
 * @path `/2020-05-31/origin-access-control/{Id}`
 */
export function deleteOriginAccessControl(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessControl.DeleteOriginAccessControl.PathParams;
  headers?: API.CustomizeTagAndName.OriginAccessControl.DeleteOriginAccessControl.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}`,
    options,
  );
}

/**
 * Gets a CloudFront origin access control, including its unique identifier.
 * @path `/2020-05-31/origin-access-control/{Id}`
 */
export function getOriginAccessControl(options: {
  pathParams: API.CustomizeTagAndName.OriginAccessControl.GetOriginAccessControl.PathParams;
  headers?: API.CustomizeTagAndName.OriginAccessControl.GetOriginAccessControl.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessControl.GetOriginAccessControl.Response>(
    "get",
    `/2020-05-31/origin-access-control/${options.pathParams.Id}`,
    options,
  );
}

/**
 * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>
 * @path `/2020-05-31/origin-access-control`
 */
export function getListOriginAccessControls(options?: {
  queryParams?: API.CustomizeTagAndName.OriginAccessControl.GetListOriginAccessControls.QueryParams;
  headers?: API.CustomizeTagAndName.OriginAccessControl.GetListOriginAccessControls.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessControl.GetListOriginAccessControls.Response>(
    "get",
    "/2020-05-31/origin-access-control",
    options || {},
  );
}

/**
 * <p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @path `/2020-05-31/origin-access-control`
 */
export function postCreate(options: {
  body: API.CustomizeTagAndName.OriginAccessControl.PostCreate.Body;
  headers?: API.CustomizeTagAndName.OriginAccessControl.PostCreate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.OriginAccessControl.PostCreate.Response>(
    "post",
    "/2020-05-31/origin-access-control",
    options,
  );
}
