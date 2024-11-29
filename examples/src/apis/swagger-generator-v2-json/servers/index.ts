import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns options for a server framework
 * @path `/gen/servers/{framework}`
 */
export function getServerOptions(options: {
  pathParams: API.SwaggerGeneratorV2Json.Servers.GetServerOptions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Servers.GetServerOptions.Response>(
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
  pathParams: API.SwaggerGeneratorV2Json.Servers.PostGenerateServerForLanguage.PathParams;
  headers?: Record<string, any>;
  body?: API.SwaggerGeneratorV2Json.Servers.PostGenerateServerForLanguage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Servers.PostGenerateServerForLanguage.Response>(
    "post",
    `/gen/servers/${options.pathParams.framework}`,
    options,
  );
}

/**
 * Gets languages supported by the server generator
 * @path `/gen/servers`
 */
export function getServerOptions2(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerGeneratorV2Json.Servers.GetServerOptions2.Response>(
    "get",
    "/gen/servers",
    options || {},
  );
}
