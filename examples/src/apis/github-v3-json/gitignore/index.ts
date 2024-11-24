import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * The API also allows fetching the source of a single template.
 * Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.
 * @summary Get a gitignore template
 * @path `/gitignore/templates/{name}`
 * @docs https://docs.github.com/rest/reference/gitignore#get-a-gitignore-template
 */
export function getTemplate(options: {
  pathParams: API.GithubV3Json.Gitignore.GetTemplate.PathParams;
  headers?: API.GithubV3Json.Gitignore.GetTemplate.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gitignore.GetTemplate.Response>(
    "get",
    `/gitignore/templates/${options.pathParams.name}`,
    options,
  );
}

/**
 * List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user).
 * @summary Get all gitignore templates
 * @path `/gitignore/templates`
 * @docs https://docs.github.com/rest/reference/gitignore#get-all-gitignore-templates
 */
export function getAllTemplates(options?: {
  headers?: API.GithubV3Json.Gitignore.GetAllTemplates.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Gitignore.GetAllTemplates.Response>(
    "get",
    "/gitignore/templates",
    options || {},
  );
}
