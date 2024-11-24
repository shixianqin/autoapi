import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets the customization template for an OpenID Connect (OIDC) subject claim.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint.
 * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
 * @summary Get the customization template for an OIDC subject claim for an organization
 * @path `/orgs/{org}/actions/oidc/customization/sub`
 * @docs https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization
 */
export function getCustomSubTemplateForOrg(options: {
  pathParams: API.GithubV3Json.Oidc.GetCustomSubTemplateForOrg.PathParams;
  headers?: API.GithubV3Json.Oidc.GetCustomSubTemplateForOrg.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Oidc.GetCustomSubTemplateForOrg.Response>(
    "get",
    `/orgs/${options.pathParams.org}/actions/oidc/customization/sub`,
    options,
  );
}

/**
 * Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.
 * You must authenticate using an access token with the `write:org` scope to use this endpoint.
 * GitHub Apps must have the `admin:org` permission to use this endpoint.
 * @summary Set the customization template for an OIDC subject claim for an organization
 * @path `/orgs/{org}/actions/oidc/customization/sub`
 * @docs https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization
 */
export function putUpdateCustomSubTemplateForOrg(options: {
  pathParams: API.GithubV3Json.Oidc.PutUpdateCustomSubTemplateForOrg.PathParams;
  headers?: API.GithubV3Json.Oidc.PutUpdateCustomSubTemplateForOrg.Headers;
  body: API.GithubV3Json.Oidc.PutUpdateCustomSubTemplateForOrg.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Oidc.PutUpdateCustomSubTemplateForOrg.Response>(
    "put",
    `/orgs/${options.pathParams.org}/actions/oidc/customization/sub`,
    options,
  );
}
