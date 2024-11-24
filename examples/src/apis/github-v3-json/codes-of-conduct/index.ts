import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get a code of conduct
 * @path `/codes_of_conduct/{key}`
 * @docs https://docs.github.com/rest/reference/codes-of-conduct#get-a-code-of-conduct
 */
export function getConductCode(options: {
  pathParams: API.GithubV3Json.CodesOfConduct.GetConductCode.PathParams;
  headers?: API.GithubV3Json.CodesOfConduct.GetConductCode.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.CodesOfConduct.GetConductCode.Response>(
    "get",
    `/codes_of_conduct/${options.pathParams.key}`,
    options,
  );
}

/**
 * Get all codes of conduct
 * @path `/codes_of_conduct`
 * @docs https://docs.github.com/rest/reference/codes-of-conduct#get-all-codes-of-conduct
 */
export function getAll(options?: {
  headers?: API.GithubV3Json.CodesOfConduct.GetAll.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.CodesOfConduct.GetAll.Response>(
    "get",
    "/codes_of_conduct",
    options || {},
  );
}
