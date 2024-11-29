import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets the total GitHub Actions cache usage for an organization.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
 * @summary Get GitHub Actions cache usage for an organization
 * @path `/orgs/{org}/actions/cache/usage`
 * @docs https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-an-organization
 */
export function getCacheUsageForOrg(options: {
  pathParams: API.CustomizeFilter.Actions.GetCacheUsageForOrg.PathParams;
  headers?: API.CustomizeFilter.Actions.GetCacheUsageForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeFilter.Actions.GetCacheUsageForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/cache/usage`,
    options,
  );
}
