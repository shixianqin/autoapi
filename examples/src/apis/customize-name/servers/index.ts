import { request } from "@/adapter";

/**
 * Returns options for a server framework
 * @path `/gen/servers/{framework}`
 */
export function getServerOptions(options: {
  pathParams: API.CustomizeName.Servers.GetServerOptions.PathParams;
  headers?: API.CustomizeName.Servers.GetServerOptions.Headers;
  config?: object;
  context?: object;
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
  headers?: API.CustomizeName.Servers.PostGenerateServerForLanguage.Headers;
  body?: API.CustomizeName.Servers.PostGenerateServerForLanguage.Body;
  config?: object;
  context?: object;
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
  headers?: API.CustomizeName.Servers.GetServersCustomizeNamed.Headers;
  config?: object;
  context?: object;
}) {
  return request<API.CustomizeName.Servers.GetServersCustomizeNamed.Response>(
    "get",
    "/gen/servers",
    options || {},
  );
}
