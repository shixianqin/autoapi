import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.
 * @summary Render a Markdown document in raw mode
 * @path `/markdown/raw`
 * @docs https://docs.github.com/rest/reference/markdown#render-a-markdown-document-in-raw-mode
 */
export function postRenderRaw(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Markdown.PostRenderRaw.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Markdown.PostRenderRaw.Response>(
    "post",
    "/markdown/raw",
    options,
  );
}

/**
 * Render a Markdown document
 * @path `/markdown`
 * @docs https://docs.github.com/rest/reference/markdown#render-a-markdown-document
 */
export function postRender(options: {
  headers?: Record<string, any>;
  body: API.GithubV3Json.Markdown.PostRender.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Markdown.PostRender.Response>(
    "post",
    "/markdown",
    options,
  );
}
