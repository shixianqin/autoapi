import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists all the emojis available to use on GitHub.
 * @summary Get emojis
 * @path `/emojis`
 * @docs https://docs.github.com/rest/reference/emojis#get-emojis
 */
export function getEmojis(options?: {
  headers?: API.GithubV3Json.Emojis.GetEmojis.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Emojis.GetEmojis.Response>(
    "get",
    "/emojis",
    options || {},
  );
}
