import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Deletes a review comment.
 * @summary Delete a review comment for a pull request
 * @path `/repos/{owner}/{repo}/pulls/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/pulls#delete-a-review-comment-for-a-pull-request
 */
export function deleteReviewComment(options: {
  pathParams: API.GithubV3Json.Pulls.DeleteReviewComment.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Provides details for a review comment.
 * @summary Get a review comment for a pull request
 * @path `/repos/{owner}/{repo}/pulls/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/pulls#get-a-review-comment-for-a-pull-request
 */
export function getReviewComment(options: {
  pathParams: API.GithubV3Json.Pulls.GetReviewComment.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetReviewComment.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Enables you to edit a review comment.
 * @summary Update a review comment for a pull request
 * @path `/repos/{owner}/{repo}/pulls/comments/{comment_id}`
 * @docs https://docs.github.com/rest/reference/pulls#update-a-review-comment-for-a-pull-request
 */
export function patchUpdateReviewComment(options: {
  pathParams: API.GithubV3Json.Pulls.PatchUpdateReviewComment.PathParams;
  body: API.GithubV3Json.Pulls.PatchUpdateReviewComment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PatchUpdateReviewComment.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments/${options.pathParams.comment_id}`,
    options,
  );
}

/**
 * Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.
 * @summary List review comments in a repository
 * @path `/repos/{owner}/{repo}/pulls/comments`
 * @docs https://docs.github.com/rest/reference/pulls#list-review-comments-in-a-repository
 */
export function getListReviewCommentsForRepo(options: {
  pathParams: API.GithubV3Json.Pulls.GetListReviewCommentsForRepo.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetListReviewCommentsForRepo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListReviewCommentsForRepo.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/comments`,
    options,
  );
}

/**
 * Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create a reply for a review comment
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies`
 * @docs https://docs.github.com/rest/reference/pulls#create-a-reply-for-a-review-comment
 */
export function postCreateReplyForReviewComment(options: {
  pathParams: API.GithubV3Json.Pulls.PostCreateReplyForReviewComment.PathParams;
  body: API.GithubV3Json.Pulls.PostCreateReplyForReviewComment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PostCreateReplyForReviewComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/comments/${options.pathParams.comment_id}/replies`,
    options,
  );
}

/**
 * Lists all review comments for a pull request. By default, review comments are in ascending order by ID.
 * @summary List review comments on a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/comments`
 * @docs https://docs.github.com/rest/reference/pulls#list-review-comments-on-a-pull-request
 */
export function getListReviewComments(options: {
  pathParams: API.GithubV3Json.Pulls.GetListReviewComments.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetListReviewComments.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListReviewComments.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/comments`,
    options,
  );
}

/**
 *
 * Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://docs.github.com/rest/reference/issues#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.
 *
 * The `position` parameter is deprecated. If you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required.
 *
 * **Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Create a review comment for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/comments`
 * @docs https://docs.github.com/rest/reference/pulls#create-a-review-comment-for-a-pull-request
 */
export function postCreateReviewComment(options: {
  pathParams: API.GithubV3Json.Pulls.PostCreateReviewComment.PathParams;
  body: API.GithubV3Json.Pulls.PostCreateReviewComment.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PostCreateReviewComment.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/comments`,
    options,
  );
}

/**
 * Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://docs.github.com/rest/reference/repos#list-commits) endpoint.
 * @summary List commits on a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/commits`
 * @docs https://docs.github.com/rest/reference/pulls#list-commits-on-a-pull-request
 */
export function getListCommits(options: {
  pathParams: API.GithubV3Json.Pulls.GetListCommits.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetListCommits.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListCommits.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/commits`,
    options,
  );
}

/**
 * **Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.
 * @summary List pull requests files
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/files`
 * @docs https://docs.github.com/rest/reference/pulls#list-pull-requests-files
 */
export function getListFiles(options: {
  pathParams: API.GithubV3Json.Pulls.GetListFiles.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetListFiles.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListFiles.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/files`,
    options,
  );
}

/**
 * Check if a pull request has been merged
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/merge`
 * @docs https://docs.github.com/rest/reference/pulls#check-if-a-pull-request-has-been-merged
 */
export function getCheckIfMerged(options: {
  pathParams: API.GithubV3Json.Pulls.GetCheckIfMerged.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/merge`,
    options,
  );
}

/**
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Merge a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/merge`
 * @docs https://docs.github.com/rest/reference/pulls#merge-a-pull-request
 */
export function putMerge(options: {
  pathParams: API.GithubV3Json.Pulls.PutMerge.PathParams;
  body?: API.GithubV3Json.Pulls.PutMerge.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PutMerge.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/merge`,
    options,
  );
}

/**
 * Remove requested reviewers from a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
 * @docs https://docs.github.com/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request
 */
export function deleteRemoveRequestedReviewers(options: {
  pathParams: API.GithubV3Json.Pulls.DeleteRemoveRequestedReviewers.PathParams;
  body: API.GithubV3Json.Pulls.DeleteRemoveRequestedReviewers.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.DeleteRemoveRequestedReviewers.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/requested_reviewers`,
    options,
  );
}

/**
 * Gets the users or teams whose review is requested for a pull request. Once a requested reviewer submits a review, they are no longer considered a requested reviewer. Their review will instead be returned by the [List reviews for a pull request](https://docs.github.com/rest/pulls/reviews#list-reviews-for-a-pull-request) operation.
 * @summary Get all requested reviewers for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
 * @docs https://docs.github.com/rest/reference/pulls#get-all-requested-reviewers-for-a-pull-request
 */
export function getListRequestedReviewers(options: {
  pathParams: API.GithubV3Json.Pulls.GetListRequestedReviewers.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListRequestedReviewers.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/requested_reviewers`,
    options,
  );
}

/**
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * @summary Request reviewers for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers`
 * @docs https://docs.github.com/rest/reference/pulls#request-reviewers-for-a-pull-request
 */
export function postRequestReviewers(options: {
  pathParams: API.GithubV3Json.Pulls.PostRequestReviewers.PathParams;
  body: API.GithubV3Json.Pulls.PostRequestReviewers.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PostRequestReviewers.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/requested_reviewers`,
    options,
  );
}

/**
 * List comments for a specific pull request review.
 * @summary List comments for a pull request review
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments`
 * @docs https://docs.github.com/rest/reference/pulls#list-comments-for-a-pull-request-review
 */
export function getListCommentsForReview(options: {
  pathParams: API.GithubV3Json.Pulls.GetListCommentsForReview.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetListCommentsForReview.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListCommentsForReview.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews/${options.pathParams.review_id}/comments`,
    options,
  );
}

/**
 * **Note:** To dismiss a pull request review on a [protected branch](https://docs.github.com/rest/reference/repos#branches), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.
 * @summary Dismiss a review for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals`
 * @docs https://docs.github.com/rest/reference/pulls#dismiss-a-review-for-a-pull-request
 */
export function putDismissReview(options: {
  pathParams: API.GithubV3Json.Pulls.PutDismissReview.PathParams;
  body: API.GithubV3Json.Pulls.PutDismissReview.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PutDismissReview.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews/${options.pathParams.review_id}/dismissals`,
    options,
  );
}

/**
 * Submits a pending review for a pull request. For more information about creating a pending review for a pull request, see "[Create a review for a pull request](https://docs.github.com/rest/pulls#create-a-review-for-a-pull-request)."
 * @summary Submit a review for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events`
 * @docs https://docs.github.com/rest/reference/pulls#submit-a-review-for-a-pull-request
 */
export function postSubmitReview(options: {
  pathParams: API.GithubV3Json.Pulls.PostSubmitReview.PathParams;
  body: API.GithubV3Json.Pulls.PostSubmitReview.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PostSubmitReview.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews/${options.pathParams.review_id}/events`,
    options,
  );
}

/**
 * Delete a pending review for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`
 * @docs https://docs.github.com/rest/reference/pulls#delete-a-pending-review-for-a-pull-request
 */
export function deletePendingReview(options: {
  pathParams: API.GithubV3Json.Pulls.DeletePendingReview.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.DeletePendingReview.Response>(
    "delete",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews/${options.pathParams.review_id}`,
    options,
  );
}

/**
 * Get a review for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`
 * @docs https://docs.github.com/rest/reference/pulls#get-a-review-for-a-pull-request
 */
export function getReview(options: {
  pathParams: API.GithubV3Json.Pulls.GetReview.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetReview.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews/${options.pathParams.review_id}`,
    options,
  );
}

/**
 * Update the review summary comment with new text.
 * @summary Update a review for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}`
 * @docs https://docs.github.com/rest/reference/pulls#update-a-review-for-a-pull-request
 */
export function putUpdateReview(options: {
  pathParams: API.GithubV3Json.Pulls.PutUpdateReview.PathParams;
  body: API.GithubV3Json.Pulls.PutUpdateReview.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PutUpdateReview.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews/${options.pathParams.review_id}`,
    options,
  );
}

/**
 * The list of reviews returns in chronological order.
 * @summary List reviews for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews`
 * @docs https://docs.github.com/rest/reference/pulls#list-reviews-for-a-pull-request
 */
export function getListReviews(options: {
  pathParams: API.GithubV3Json.Pulls.GetListReviews.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetListReviews.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetListReviews.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews`,
    options,
  );
}

/**
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 *
 * Pull request reviews created in the `PENDING` state are not submitted and therefore do not include the `submitted_at` property in the response. To create a pending review for a pull request, leave the `event` parameter blank. For more information about submitting a `PENDING` review, see "[Submit a review for a pull request](https://docs.github.com/rest/pulls#submit-a-review-for-a-pull-request)."
 *
 * **Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API offers the `application/vnd.github.v3.diff` [media type](https://docs.github.com/rest/overview/media-types#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://docs.github.com/rest/reference/pulls#get-a-pull-request) endpoint.
 *
 * The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.
 * @summary Create a review for a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/reviews`
 * @docs https://docs.github.com/rest/reference/pulls#create-a-review-for-a-pull-request
 */
export function postCreateReview(options: {
  pathParams: API.GithubV3Json.Pulls.PostCreateReview.PathParams;
  body?: API.GithubV3Json.Pulls.PostCreateReview.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PostCreateReview.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/reviews`,
    options,
  );
}

/**
 * Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.
 * @summary Update a pull request branch
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}/update-branch`
 * @docs https://docs.github.com/rest/reference/pulls#update-a-pull-request-branch
 */
export function putUpdateBranch(options: {
  pathParams: API.GithubV3Json.Pulls.PutUpdateBranch.PathParams;
  body?: API.GithubV3Json.Pulls.PutUpdateBranch.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PutUpdateBranch.Response>(
    "put",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}/update-branch`,
    options,
  );
}

/**
 * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * Lists details of a pull request by providing its number.
 *
 * When you get, [create](https://docs.github.com/rest/reference/pulls/#create-a-pull-request), or [edit](https://docs.github.com/rest/reference/pulls#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://docs.github.com/rest/guides/getting-started-with-the-git-database-api#checking-mergeability-of-pull-requests)".
 *
 * The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.
 *
 * The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:
 *   If merged as a [merge commit](https://docs.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
 *   If merged via a [squash](https://docs.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
 *   If [rebased](https://docs.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.
 *
 * Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
 * @summary Get a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}`
 * @docs https://docs.github.com/rest/reference/pulls#get-a-pull-request
 */
export function getPulls(options: {
  pathParams: API.GithubV3Json.Pulls.GetPulls.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetPulls.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}`,
    options,
  );
}

/**
 * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
 * @summary Update a pull request
 * @path `/repos/{owner}/{repo}/pulls/{pull_number}`
 * @docs https://docs.github.com/rest/reference/pulls/#update-a-pull-request
 */
export function patchUpdate(options: {
  pathParams: API.GithubV3Json.Pulls.PatchUpdate.PathParams;
  body?: API.GithubV3Json.Pulls.PatchUpdate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PatchUpdate.Response>(
    "patch",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls/${options.pathParams.pull_number}`,
    options,
  );
}

/**
 * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * @summary List pull requests
 * @path `/repos/{owner}/{repo}/pulls`
 * @docs https://docs.github.com/rest/reference/pulls#list-pull-requests
 */
export function getList(options: {
  pathParams: API.GithubV3Json.Pulls.GetList.PathParams;
  queryParams?: API.GithubV3Json.Pulls.GetList.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.GetList.Response>(
    "get",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls`,
    options,
  );
}

/**
 * Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 *
 * To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.
 *
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)" for details.
 * @summary Create a pull request
 * @path `/repos/{owner}/{repo}/pulls`
 * @docs https://docs.github.com/rest/reference/pulls#create-a-pull-request
 */
export function postCreate(options: {
  pathParams: API.GithubV3Json.Pulls.PostCreate.PathParams;
  body: API.GithubV3Json.Pulls.PostCreate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GithubV3Json.Pulls.PostCreate.Response>(
    "post",
    `/repos/${options.pathParams.owner}/${options.pathParams.repo}/pulls`,
    options,
  );
}
