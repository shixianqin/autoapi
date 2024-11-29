import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * <p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}#If-Match`
 */
export function deleteFunction(options: {
  pathParams: API.CustomizeTagAndName.Function.DeleteFunction.PathParams;
  headers?: API.CustomizeTagAndName.Function.DeleteFunction.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/2020-05-31/function/${options.pathParams.Name}#If-Match`,
    options,
  );
}

/**
 * <p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}#If-Match`
 */
export function putUpdate(options: {
  pathParams: API.CustomizeTagAndName.Function.PutUpdate.PathParams;
  headers?: API.CustomizeTagAndName.Function.PutUpdate.Headers;
  body: API.CustomizeTagAndName.Function.PutUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.PutUpdate.Response>(
    "put",
    `/2020-05-31/function/${options.pathParams.Name}#If-Match`,
    options,
  );
}

/**
 * <p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
 * @path `/2020-05-31/function/{Name}/describe`
 */
export function getDescribe(options: {
  pathParams: API.CustomizeTagAndName.Function.GetDescribe.PathParams;
  queryParams?: API.CustomizeTagAndName.Function.GetDescribe.QueryParams;
  headers?: API.CustomizeTagAndName.Function.GetDescribe.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.GetDescribe.Response>(
    "get",
    `/2020-05-31/function/${options.pathParams.Name}/describe`,
    options,
  );
}

/**
 * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}/publish#If-Match`
 */
export function postPublish(options: {
  pathParams: API.CustomizeTagAndName.Function.PostPublish.PathParams;
  headers?: API.CustomizeTagAndName.Function.PostPublish.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.PostPublish.Response>(
    "post",
    `/2020-05-31/function/${options.pathParams.Name}/publish#If-Match`,
    options,
  );
}

/**
 * <p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @path `/2020-05-31/function/{Name}/test#If-Match`
 */
export function postTest(options: {
  pathParams: API.CustomizeTagAndName.Function.PostTest.PathParams;
  headers?: API.CustomizeTagAndName.Function.PostTest.Headers;
  body: API.CustomizeTagAndName.Function.PostTest.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.PostTest.Response>(
    "post",
    `/2020-05-31/function/${options.pathParams.Name}/test#If-Match`,
    options,
  );
}

/**
 * <p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
 * @path `/2020-05-31/function/{Name}`
 */
export function getFunction(options: {
  pathParams: API.CustomizeTagAndName.Function.GetFunction.PathParams;
  queryParams?: API.CustomizeTagAndName.Function.GetFunction.QueryParams;
  headers?: API.CustomizeTagAndName.Function.GetFunction.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.GetFunction.Response>(
    "get",
    `/2020-05-31/function/${options.pathParams.Name}`,
    options,
  );
}

/**
 * <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @path `/2020-05-31/function`
 */
export function getListFunctions(options?: {
  queryParams?: API.CustomizeTagAndName.Function.GetListFunctions.QueryParams;
  headers?: API.CustomizeTagAndName.Function.GetListFunctions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.GetListFunctions.Response>(
    "get",
    "/2020-05-31/function",
    options || {},
  );
}

/**
 * <p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>
 * @path `/2020-05-31/function`
 */
export function postCreate(options: {
  headers?: API.CustomizeTagAndName.Function.PostCreate.Headers;
  body: API.CustomizeTagAndName.Function.PostCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeTagAndName.Function.PostCreate.Response>(
    "post",
    "/2020-05-31/function",
    options,
  );
}
