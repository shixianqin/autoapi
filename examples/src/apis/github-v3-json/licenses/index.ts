import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get a license
 * @path `/licenses/{license}`
 * @docs https://docs.github.com/rest/reference/licenses#get-a-license
 */
export function getLicenses(options: {
  pathParams: API.GithubV3Json.Licenses.GetLicenses.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Licenses.GetLicenses.Response>(
    "get",
    `/licenses/${options.pathParams.license}`,
    options,
  );
}

/**
 * Get all commonly used licenses
 * @path `/licenses`
 * @docs https://docs.github.com/rest/reference/licenses#get-all-commonly-used-licenses
 */
export function getAllCommonlyUsed(options?: {
  queryParams?: API.GithubV3Json.Licenses.GetAllCommonlyUsed.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Licenses.GetAllCommonlyUsed.Response>(
    "get",
    "/licenses",
    options || {},
  );
}

/**
 * This method returns the contents of the repository's license file, if one is detected.
 *
 * Similar to [Get repository content](https://docs.github.com/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
 * @summary Get the license for a repository
 * @path `/repos/{owner}/{repo}/license`
 * @docs https://docs.github.com/rest/reference/licenses/#get-the-license-for-a-repository
 */
export function getForRepo(options: {
  pathParams: API.GithubV3Json.Licenses.GetForRepo.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Licenses.GetForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/license`,
    options,
  );
}
