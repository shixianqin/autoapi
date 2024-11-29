import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns options for a server framework
 * @path `/gen/servers/{framework}`
 */
export function getServerOptions(options: {
  pathParams: API.CustomizeResponseReturnPath.Servers.GetServerOptions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Servers.GetServerOptions.Response["data"]
  >("get", `/gen/servers/${options.pathParams.framework}`, options);
}

/**
 * Accepts a `GeneratorInput` options map for spec location and generation options.
 * @summary Generates a server library
 * @path `/gen/servers/{framework}`
 */
export function generateServerForLanguage(options: {
  pathParams: API.CustomizeResponseReturnPath.Servers.GenerateServerForLanguage.PathParams;
  headers?: Record<string, any>;
  body?: API.CustomizeResponseReturnPath.Servers.GenerateServerForLanguage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Servers.GenerateServerForLanguage.Response["data"]
  >("post", `/gen/servers/${options.pathParams.framework}`, options);
}

/**
 * Gets languages supported by the server generator
 * @path `/gen/servers`
 */
export function serverOptions(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<
    API.CustomizeResponseReturnPath.Servers.ServerOptions.Response["data"]
  >("get", "/gen/servers", options || {});
}
