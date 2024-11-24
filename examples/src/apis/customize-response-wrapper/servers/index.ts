import { request } from "@/adapter";

/**
 * Returns options for a server framework
 * @path `/gen/servers/{framework}`
 */
export function getServerOptions(options: {
  pathParams: API.CustomizeResponseWrapper.Servers.GetServerOptions.PathParams;
  headers?: API.CustomizeResponseWrapper.Servers.GetServerOptions.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeResponseWrapper.Servers.GetServerOptions.Response>(
    "get",
    `/gen/servers/${options.pathParams.framework}`,
    options,
  );
}

/**
 * Accepts a `GeneratorInput` options map for spec location and generation options.
 * @summary Generates a server library
 * @path `/gen/servers/{framework}`
 */
export function generateServerForLanguage(options: {
  pathParams: API.CustomizeResponseWrapper.Servers.GenerateServerForLanguage.PathParams;
  headers?: API.CustomizeResponseWrapper.Servers.GenerateServerForLanguage.Headers;
  body?: API.CustomizeResponseWrapper.Servers.GenerateServerForLanguage.Body;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeResponseWrapper.Servers.GenerateServerForLanguage.Response>(
    "post",
    `/gen/servers/${options.pathParams.framework}`,
    options,
  );
}

/**
 * Gets languages supported by the server generator
 * @path `/gen/servers`
 */
export function serverOptions(options?: {
  headers?: API.CustomizeResponseWrapper.Servers.ServerOptions.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeResponseWrapper.Servers.ServerOptions.Response>(
    "get",
    "/gen/servers",
    options || {},
  );
}
