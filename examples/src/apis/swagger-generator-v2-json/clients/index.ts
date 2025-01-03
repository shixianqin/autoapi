import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns options for a client library
 * @path `/gen/clients/{language}`
 */
export function getClientOptions(options: {
  pathParams: API.SwaggerGeneratorV2Json.Clients.GetClientOptions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Clients.GetClientOptions.Response>(
    "get",
    `/gen/clients/${options.pathParams.language}`,
    options,
  );
}

/**
 * Accepts a `GeneratorInput` options map for spec location and generation options
 * @summary Generates a client library
 * @path `/gen/clients/{language}`
 */
export function postGenerateClient(options: {
  pathParams: API.SwaggerGeneratorV2Json.Clients.PostGenerateClient.PathParams;
  body?: API.SwaggerGeneratorV2Json.Clients.PostGenerateClient.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Clients.PostGenerateClient.Response>(
    "post",
    `/gen/clients/${options.pathParams.language}`,
    options,
  );
}

/**
 * Gets languages supported by the client generator
 * @path `/gen/clients`
 */
export function getClientOptions2(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Clients.GetClientOptions2.Response>(
    "get",
    "/gen/clients",
    options || {},
  );
}

/**
 * A valid `fileId` is generated by the `/clients/{language}` or `/servers/{language}` POST operations.  The fileId code can be used just once, after which a new `fileId` will need to be requested.
 * @summary Downloads a pre-generated file
 * @path `/gen/download/{fileId}`
 */
export function getDownloadFile(options: {
  pathParams: API.SwaggerGeneratorV2Json.Clients.GetDownloadFile.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Clients.GetDownloadFile.Response>(
    "get",
    `/gen/download/${options.pathParams.fileId}`,
    options,
  );
}
