import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
 * @summary Get a diff of the dependencies between commits
 * @path `/repos/{owner}/{repo}/dependency-graph/compare/{basehead}`
 * @docs https://docs.github.com/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits
 */
export function getDiffRange(options: {
  pathParams: API.GithubV3Json.DependencyGraph.GetDiffRange.PathParams;
  queryParams?: API.GithubV3Json.DependencyGraph.GetDiffRange.QueryParams;
  headers?: API.GithubV3Json.DependencyGraph.GetDiffRange.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.DependencyGraph.GetDiffRange.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependency-graph/compare/${options.pathParams.basehead}`,
    options,
  );
}

/**
 * Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.
 * @summary Create a snapshot of dependencies for a repository
 * @path `/repos/{owner}/{repo}/dependency-graph/snapshots`
 * @docs https://docs.github.com/rest/reference/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository
 */
export function postCreateRepositorySnapshot(options: {
  pathParams: API.GithubV3Json.DependencyGraph.PostCreateRepositorySnapshot.PathParams;
  headers?: API.GithubV3Json.DependencyGraph.PostCreateRepositorySnapshot.Headers;
  body: API.GithubV3Json.DependencyGraph.PostCreateRepositorySnapshot.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.DependencyGraph.PostCreateRepositorySnapshot.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/dependency-graph/snapshots`,
    options,
  );
}
