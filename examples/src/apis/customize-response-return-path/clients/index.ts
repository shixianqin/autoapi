import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns options for a client library
 * @path `/gen/clients/{language}`
 */
export function getClientOptions(options: {
  pathParams: API.CustomizeResponseReturnPath.Clients.GetClientOptions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Clients.GetClientOptions.Response["data"]
  >("get", `/gen/clients/${options.pathParams.language}`, options);
}

/**
 * Accepts a `GeneratorInput` options map for spec location and generation options
 * @summary Generates a client library
 * @path `/gen/clients/{language}`
 */
export function generateClient(options: {
  pathParams: API.CustomizeResponseReturnPath.Clients.GenerateClient.PathParams;
  headers?: Record<string, any>;
  body?: API.CustomizeResponseReturnPath.Clients.GenerateClient.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Clients.GenerateClient.Response["data"]
  >("post", `/gen/clients/${options.pathParams.language}`, options);
}

/**
 * Gets languages supported by the client generator
 * @path `/gen/clients`
 */
export function clientOptions(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Clients.ClientOptions.Response["data"]
  >("get", "/gen/clients", options || {});
}

/**
 * A valid `fileId` is generated by the `/clients/{language}` or `/servers/{language}` POST operations.  The fileId code can be used just once, after which a new `fileId` will need to be requested.
 * @summary Downloads a pre-generated file
 * @path `/gen/download/{fileId}`
 */
export function downloadFile(options: {
  pathParams: API.CustomizeResponseReturnPath.Clients.DownloadFile.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Clients.DownloadFile.Response["data"]
  >("get", `/gen/download/${options.pathParams.fileId}`, options);
}
