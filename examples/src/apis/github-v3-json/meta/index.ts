import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Get Hypermedia links to resources accessible in GitHub's REST API
 * @summary GitHub API Root
 * @path `/`
 * @docs https://docs.github.com/rest/overview/resources-in-the-rest-api#root-endpoint
 */
export function getRoot(options?: {
  headers?: API.GithubV3Json.Meta.GetRoot.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Meta.GetRoot.Response>(
    "get",
    "/",
    options || {},
  );
}

/**
 * Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://docs.github.com/articles/about-github-s-ip-addresses/)."
 *
 * **Note:** This endpoint returns both IPv4 and IPv6 addresses. However, not all features support IPv6. You should refer to the specific documentation for each feature to determine if IPv6 is supported.
 *
 * **Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses.
 * @summary Get GitHub meta information
 * @path `/meta`
 * @docs https://docs.github.com/rest/reference/meta#get-github-meta-information
 */
export function getMeta(options?: {
  headers?: API.GithubV3Json.Meta.GetMeta.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Meta.GetMeta.Response>(
    "get",
    "/meta",
    options || {},
  );
}

/**
 * Get the octocat as ASCII art
 * @summary Get Octocat
 * @path `/octocat`
 * @docs https://docs.github.com/rest/reference/meta#get-octocat
 */
export function getOctocat(options?: {
  queryParams?: API.GithubV3Json.Meta.GetOctocat.QueryParams;
  headers?: API.GithubV3Json.Meta.GetOctocat.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Meta.GetOctocat.Response>(
    "get",
    "/octocat",
    options || {},
  );
}

/**
 * Get all supported GitHub API versions.
 * @summary Get all API versions
 * @path `/versions`
 * @docs https://docs.github.com/rest/reference/meta#get-all-api-versions
 */
export function getAllVersions(options?: {
  headers?: API.GithubV3Json.Meta.GetAllVersions.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Meta.GetAllVersions.Response>(
    "get",
    "/versions",
    options || {},
  );
}

/**
 * Get a random sentence from the Zen of GitHub
 * @summary Get the Zen of GitHub
 * @path `/zen`
 * @docs https://docs.github.com/rest/meta#get-the-zen-of-github
 */
export function getZen(options?: {
  headers?: API.GithubV3Json.Meta.GetZen.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Meta.GetZen.Response>(
    "get",
    "/zen",
    options || {},
  );
}
