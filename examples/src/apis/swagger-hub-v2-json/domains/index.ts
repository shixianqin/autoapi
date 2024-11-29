import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * The new name must follow the [naming rules](https://support.smartbear.com/swaggerhub/docs/apis/creating-api.html).
 * @summary Rename a domain
 * @path `/domains/{owner}/{domain}/rename`
 */
export function postRenameDomain(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostRenameDomain.PathParams;
  queryParams: API.SwaggerHubV2Json.Domains.PostRenameDomain.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/rename`,
    options,
  );
}

/**
 * This operation returns the version identifier, such as `1.0.0`. To get the definition itself, use `GET /domains/{owner}/{domain}/{version}`.
 * @summary Get the default version of a domain
 * @path `/domains/{owner}/{domain}/settings/default`
 */
export function getDomainDefaultVersion(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainDefaultVersion.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainDefaultVersion.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/settings/default`,
    options,
  );
}

/**
 * Set the default version for a domain
 * @path `/domains/{owner}/{domain}/settings/default`
 */
export function putSetDomainDefaultVersion(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PutSetDomainDefaultVersion.PathParams;
  body: API.SwaggerHubV2Json.Domains.PutSetDomainDefaultVersion.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/settings/default`,
    options,
  );
}

/**
 * Use this operation to clone an existing domain version as a new version.
 *
 * Note that the new version is not automatically set as the default version.
 * @summary Create a new domain version
 * @path `/domains/{owner}/{domain}/{version}/clone`
 */
export function postCloneDomain(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostCloneDomain.PathParams;
  body: API.SwaggerHubV2Json.Domains.PostCloneDomain.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/clone`,
    options,
  );
}

/**
 * Bulk update comments
 * @path `/domains/{owner}/{domain}/{version}/comments/batch`
 */
export function postUpdateDomainCommentsV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostUpdateDomainCommentsV2.PathParams;
  body?: API.SwaggerHubV2Json.Domains.PostUpdateDomainCommentsV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/batch`,
    options,
  );
}

/**
 * Delete a comment reply
 * @path `/domains/{owner}/{domain}/{version}/comments/{comment}/replies/{reply}`
 */
export function deleteDomainCommentReplyV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.DeleteDomainCommentReplyV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/${options.pathParams.comment}/replies/${options.pathParams.reply}`,
    options,
  );
}

/**
 * Update a comment reply
 * @path `/domains/{owner}/{domain}/{version}/comments/{comment}/replies/{reply}`
 */
export function patchUpdateDomainCommentReplyV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PatchUpdateDomainCommentReplyV2.PathParams;
  body?: API.SwaggerHubV2Json.Domains.PatchUpdateDomainCommentReplyV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.PatchUpdateDomainCommentReplyV2.Response>(
    "patch",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/${options.pathParams.comment}/replies/${options.pathParams.reply}`,
    options,
  );
}

/**
 * Reply to a comment
 * @path `/domains/{owner}/{domain}/{version}/comments/{comment}/replies`
 */
export function postAddDomainCommentReplyV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostAddDomainCommentReplyV2.PathParams;
  body: API.SwaggerHubV2Json.Domains.PostAddDomainCommentReplyV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.PostAddDomainCommentReplyV2.Response>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/${options.pathParams.comment}/replies`,
    options,
  );
}

/**
 * Resolve or reopen a comment
 * @path `/domains/{owner}/{domain}/{version}/comments/{comment}/status/{status}`
 */
export function putSetDomainCommentStatusV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PutSetDomainCommentStatusV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/${options.pathParams.comment}/status/${options.pathParams.status}`,
    options,
  );
}

/**
 * Delete a comment
 * @path `/domains/{owner}/{domain}/{version}/comments/{comment}`
 */
export function deleteDomainCommentV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.DeleteDomainCommentV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/${options.pathParams.comment}`,
    options,
  );
}

/**
 * Update a comment
 * @path `/domains/{owner}/{domain}/{version}/comments/{comment}`
 */
export function patchUpdateDomainCommentV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PatchUpdateDomainCommentV2.PathParams;
  body?: API.SwaggerHubV2Json.Domains.PatchUpdateDomainCommentV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.PatchUpdateDomainCommentV2.Response>(
    "patch",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments/${options.pathParams.comment}`,
    options,
  );
}

/**
 * Get comments for the specified domain version
 * @path `/domains/{owner}/{domain}/{version}/comments`
 */
export function getDomainCommentsV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainCommentsV2.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainCommentsV2.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments`,
    options,
  );
}

/**
 * Add a new comment
 * @path `/domains/{owner}/{domain}/{version}/comments`
 */
export function postAddDomainCommentV2(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostAddDomainCommentV2.PathParams;
  body: API.SwaggerHubV2Json.Domains.PostAddDomainCommentV2.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.PostAddDomainCommentV2.Response>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/comments`,
    options,
  );
}

/**
 * Get the OpenAPI definition for the specified domain version in JSON format
 * @path `/domains/{owner}/{domain}/{version}/domain.json`
 */
export function getDomainJsonDefinition(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainJsonDefinition.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainJsonDefinition.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/domain.json`,
    options,
  );
}

/**
 * Get the OpenAPI definition for the specified domain version in YAML format
 * @path `/domains/{owner}/{domain}/{version}/domain.yaml`
 */
export function getDomainYamlDefinition(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainYamlDefinition.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainYamlDefinition.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/domain.yaml`,
    options,
  );
}

/**
 * Creates a [fork](https://support.smartbear.com/swaggerhub/docs/apis/forking-api.html) of the specified domain definition and version. The fork can be created as a new domain, or as a new version in another existing domain.
 * @summary Fork a domain
 * @path `/domains/{owner}/{domain}/{version}/fork`
 */
export function postForkDomain(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostForkDomain.PathParams;
  body: API.SwaggerHubV2Json.Domains.PostForkDomain.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/fork`,
    options,
  );
}

/**
 * Get the published status for the specified domain and version
 * @path `/domains/{owner}/{domain}/{version}/settings/lifecycle`
 */
export function getDomainLifecycleSettings(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainLifecycleSettings.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainLifecycleSettings.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/settings/lifecycle`,
    options,
  );
}

/**
 * Publish or unpublish a domain version
 * @path `/domains/{owner}/{domain}/{version}/settings/lifecycle`
 */
export function putSetDomainLifecycleSettings(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PutSetDomainLifecycleSettings.PathParams;
  queryParams?: API.SwaggerHubV2Json.Domains.PutSetDomainLifecycleSettings.QueryParams;
  body?: API.SwaggerHubV2Json.Domains.PutSetDomainLifecycleSettings.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/settings/lifecycle`,
    options,
  );
}

/**
 * Get the visibility (public or private) of a domain version
 * @path `/domains/{owner}/{domain}/{version}/settings/private`
 */
export function getDomainPrivateSettings(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainPrivateSettings.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainPrivateSettings.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/settings/private`,
    options,
  );
}

/**
 * Set the visibility (public or private) of a domain version
 * @path `/domains/{owner}/{domain}/{version}/settings/private`
 */
export function putSetDomainPrivateSettings(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PutSetDomainPrivateSettings.PathParams;
  queryParams?: API.SwaggerHubV2Json.Domains.PutSetDomainPrivateSettings.QueryParams;
  body: API.SwaggerHubV2Json.Domains.PutSetDomainPrivateSettings.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}/settings/private`,
    options,
  );
}

/**
 * Delete a domain version
 * @path `/domains/{owner}/{domain}/{version}`
 */
export function deleteDomainVersion(options: {
  pathParams: API.SwaggerHubV2Json.Domains.DeleteDomainVersion.PathParams;
  queryParams?: API.SwaggerHubV2Json.Domains.DeleteDomainVersion.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}`,
    options,
  );
}

/**
 * Get the OpenAPI definition of the specified domain version
 * @path `/domains/{owner}/{domain}/{version}`
 */
export function getDomainDefinition(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainDefinition.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainDefinition.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}/${options.pathParams.version}`,
    options,
  );
}

/**
 * Delete a domain
 * @path `/domains/{owner}/{domain}`
 */
export function deleteDomain(options: {
  pathParams: API.SwaggerHubV2Json.Domains.DeleteDomain.PathParams;
  queryParams?: API.SwaggerHubV2Json.Domains.DeleteDomain.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}`,
    options,
  );
}

/**
 * Get a list of domain versions
 * @path `/domains/{owner}/{domain}`
 */
export function getDomainVersions(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetDomainVersions.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetDomainVersions.Response>(
    "get",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}`,
    options,
  );
}

/**
 * Create or update a domain
 * @path `/domains/{owner}/{domain}`
 */
export function postSaveDomainDefinition(options: {
  pathParams: API.SwaggerHubV2Json.Domains.PostSaveDomainDefinition.PathParams;
  queryParams?: API.SwaggerHubV2Json.Domains.PostSaveDomainDefinition.QueryParams;
  body: API.SwaggerHubV2Json.Domains.PostSaveDomainDefinition.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/domains/${options.pathParams.owner}/${options.pathParams.domain}`,
    options,
  );
}

/**
 * Get a list of domains of the specified owner
 * @path `/domains/{owner}`
 */
export function getOwner(options: {
  pathParams: API.SwaggerHubV2Json.Domains.GetOwner.PathParams;
  queryParams?: API.SwaggerHubV2Json.Domains.GetOwner.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerHubV2Json.Domains.GetOwner.Response>(
    "get",
    `/domains/${options.pathParams.owner}`,
    options,
  );
}

/**
 * This is a convenience alias for `GET /specs?specType=DOMAIN`.
 * @summary Search domains
 * @path `/domains`
 */
export function getSearch(options?: {
  queryParams?: API.SwaggerHubV2Json.Domains.GetSearch.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("get", "/domains", options || {});
}
