declare namespace API {
  namespace GithubV3Json {
    namespace Pulls {
      namespace DeleteReviewComment {
        interface PathParams {
          /**
           * The unique identifier of the comment.
           */
          comment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetReviewComment {
        interface PathParams {
          /**
           * The unique identifier of the comment.
           */
          comment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestReviewComment;
      }

      namespace PatchUpdateReviewComment {
        interface Body {
          /**
           * The text of the reply to the review comment.
           */
          body: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the comment.
           */
          comment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestReviewComment;
      }

      namespace GetListReviewCommentsForRepo {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * The direction to sort results. Ignored without `sort` parameter.
           */
          direction?: "asc" | "desc";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
          sort?: "created" | "created_at" | "updated";
        }

        type Response = $schemas.PullRequestReviewComment[];
      }

      namespace PostCreateReplyForReviewComment {
        interface Body {
          /**
           * The text of the review comment.
           */
          body: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the comment.
           */
          comment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestReviewComment;
      }

      namespace GetListReviewComments {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * The direction to sort results. Ignored without `sort` parameter.
           */
          direction?: "asc" | "desc";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
          /**
           * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
           * @default created
           */
          sort?: "created" | "updated";
        }

        type Response = $schemas.PullRequestReviewComment[];
      }

      namespace PostCreateReviewComment {
        interface Body {
          /**
           * The text of the review comment.
           */
          body: string;
          /**
           * The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
           */
          commit_id: string;
          /**
           * The ID of the review comment to reply to. To find the ID of a review comment with ["List review comments on a pull request"](#list-review-comments-on-a-pull-request). When specified, all parameters other than `body` in the request body are ignored.
           */
          in_reply_to?: number;
          /**
           * The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
           */
          line: number;
          /**
           * The relative path to the file that necessitates a comment.
           */
          path: string;
          /**
           * **This parameter is deprecated. Use `line` instead**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.
           * @deprecated
           */
          position?: number;
          /**
           * In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://docs.github.com/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
           */
          side?: "LEFT" | "RIGHT";
          /**
           * **Required when using multi-line comments unless using `in_reply_to`**. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.
           */
          start_line?: number;
          /**
           * **Required when using multi-line comments unless using `in_reply_to`**. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://docs.github.com/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.
           */
          start_side?: "LEFT" | "RIGHT" | "side";
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestReviewComment;
      }

      namespace GetListCommits {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.Commit[];
      }

      namespace GetListFiles {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.DiffEntry[];
      }

      namespace GetCheckIfMerged {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace PutMerge {
        interface Body {
          /**
           * Extra detail to append to automatic commit message.
           */
          commit_message?: string;
          /**
           * Title for the automatic commit message.
           */
          commit_title?: string;
          /**
           * The merge method to use.
           */
          merge_method?: "merge" | "rebase" | "squash";
          /**
           * SHA that pull request head must match to allow merge.
           */
          sha?: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestMergeResult;
      }

      namespace DeleteRemoveRequestedReviewers {
        interface Body {
          /**
           * An array of user `login`s that will be removed.
           */
          reviewers: string[];
          /**
           * An array of team `slug`s that will be removed.
           */
          team_reviewers?: string[];
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestSimple;
      }

      namespace GetListRequestedReviewers {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestReviewRequest;
      }

      namespace PostRequestReviewers {
        type Body = {
          /**
           * An array of user `login`s that will be requested.
           */
          reviewers?: string[];
          /**
           * An array of team `slug`s that will be requested.
           */
          team_reviewers?: string[];
        } & (
          | {
              reviewers: string[];
            }
          | {
              team_reviewers: string[];
            }
        );

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestSimple;
      }

      namespace GetListCommentsForReview {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the review.
           */
          review_id: number;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.ReviewComment[];
      }

      namespace PutDismissReview {
        interface Body {
          event?: "DISMISS";
          /**
           * The message for the pull request review dismissal
           */
          message: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the review.
           */
          review_id: number;
        }

        type Response = $schemas.PullRequestReview;
      }

      namespace PostSubmitReview {
        interface Body {
          /**
           * The body text of the pull request review
           */
          body?: string;
          /**
           * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
           */
          event: "APPROVE" | "COMMENT" | "REQUEST_CHANGES";
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the review.
           */
          review_id: number;
        }

        type Response = $schemas.PullRequestReview;
      }

      namespace DeletePendingReview {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the review.
           */
          review_id: number;
        }

        type Response = $schemas.PullRequestReview;
      }

      namespace GetReview {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the review.
           */
          review_id: number;
        }

        type Response = $schemas.PullRequestReview;
      }

      namespace PutUpdateReview {
        interface Body {
          /**
           * The body text of the pull request review.
           */
          body: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the review.
           */
          review_id: number;
        }

        type Response = $schemas.PullRequestReview;
      }

      namespace GetListReviews {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.PullRequestReview[];
      }

      namespace PostCreateReview {
        interface Body {
          /**
           * **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
           */
          body?: string;
          /**
           * Use the following table to specify the location, destination, and contents of the draft review comment.
           */
          comments?: Array<{
            /**
             * Text of the review comment.
             */
            body: string;
            line?: number;
            /**
             * The relative path to the file that necessitates a review comment.
             */
            path: string;
            /**
             * The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
             */
            position?: number;
            side?: string;
            start_line?: number;
            start_side?: string;
          }>;
          /**
           * The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
           */
          commit_id?: string;
          /**
           * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/rest/pulls#submit-a-review-for-a-pull-request) when you are ready.
           */
          event?: "APPROVE" | "COMMENT" | "REQUEST_CHANGES";
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequestReview;
      }

      namespace PutUpdateBranch {
        interface Body {
          /**
           * The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits](https://docs.github.com/rest/reference/repos#list-commits)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.
           */
          expected_head_sha?: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface Response {
          message?: string;
          url?: string;
        }
      }

      namespace GetPulls {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequest;
      }

      namespace PatchUpdate {
        interface Body {
          /**
           * The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
           */
          base?: string;
          /**
           * The contents of the pull request.
           */
          body?: string;
          /**
           * Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
           */
          maintainer_can_modify?: boolean;
          /**
           * State of this Pull Request. Either `open` or `closed`.
           */
          state?: "closed" | "open";
          /**
           * The title of the pull request.
           */
          title?: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The number that identifies the pull request.
           */
          pull_number: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequest;
      }

      namespace GetList {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Filter pulls by base branch name. Example: `gh-pages`.
           */
          base?: string;
          /**
           * The direction of the sort. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
           */
          direction?: "asc" | "desc";
          /**
           * Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
           */
          head?: string;
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * What to sort results by. `popularity` will sort by the number of comments. `long-running` will sort by date created and will limit the results to pull requests that have been open for more than a month and have had activity within the past month.
           * @default created
           */
          sort?: "created" | "long-running" | "popularity" | "updated";
          /**
           * Either `open`, `closed`, or `all` to filter by state.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.PullRequestSimple[];
      }

      namespace PostCreate {
        interface Body {
          /**
           * The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
           */
          base: string;
          /**
           * The contents of the pull request.
           */
          body?: string;
          /**
           * Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://docs.github.com/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
           */
          draft?: boolean;
          /**
           * The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
           */
          head: string;
          /**
           * The name of the repository where the changes in the pull request were made. This field is required for cross-repository pull requests if both repositories are owned by the same organization.
           * @format repo.nwo
           */
          head_repo?: string;
          /**
           * An issue in the repository to convert to a pull request. The issue title, body, and comments will become the title, body, and comments on the new pull request. Required unless `title` is specified.
           */
          issue?: number;
          /**
           * Indicates whether [maintainers can modify](https://docs.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
           */
          maintainer_can_modify?: boolean;
          /**
           * The title of the new pull request. Required unless `issue` is specified.
           */
          title?: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PullRequest;
      }
    }
  }
}
