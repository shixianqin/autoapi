import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns options for a server framework
 * @path `/gen/servers/{framework}`
 */
export function getServerOptions(options: {
  pathParams: API.CustomizeName.Servers.GetServerOptions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeName.Servers.GetServerOptions.Response>(
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
export function postGenerateServerForLanguage(options: {
  pathParams: API.CustomizeName.Servers.PostGenerateServerForLanguage.PathParams;
  body?: API.CustomizeName.Servers.PostGenerateServerForLanguage.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeName.Servers.PostGenerateServerForLanguage.Response>(
    "post",
    `/gen/servers/${options.pathParams.framework}`,
    options,
  );
}

/**
 * Gets languages supported by the server generator
 * @path `/gen/servers`
 */
export function getServers_CustomizeNamed(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeName.Servers.GetServersCustomizeNamed.Response>(
    "get",
    "/gen/servers",
    options || {},
  );
}
