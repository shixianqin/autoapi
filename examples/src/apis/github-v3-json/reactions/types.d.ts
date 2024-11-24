declare namespace API {
  namespace GithubV3Json {
    namespace Reactions {
      namespace DeleteForTeamDiscussionComment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the comment.
           */
          comment_number: number;
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetListForTeamDiscussionCommentInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the comment.
           */
          comment_number: number;
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForTeamDiscussionCommentInOrg {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the comment.
           */
          comment_number: number;
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.Reaction;
      }

      namespace DeleteForTeamDiscussion {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetListForTeamDiscussionInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForTeamDiscussionInOrg {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.Reaction;
      }

      namespace DeleteForCommitComment {
        interface Headers {
          [P: string]: any;
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
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetListForCommitComment {
        interface Headers {
          [P: string]: any;
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

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a commit comment.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForCommitComment {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the commit comment.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
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

        type Response = $schemas.Reaction;
      }

      namespace DeleteForIssueComment {
        interface Headers {
          [P: string]: any;
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
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetListForIssueComment {
        interface Headers {
          [P: string]: any;
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

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue comment.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForIssueComment {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue comment.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
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

        type Response = $schemas.Reaction;
      }

      namespace DeleteForIssue {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the issue.
           */
          issue_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetListForIssue {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the issue.
           */
          issue_number: number;
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
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForIssue {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the issue.
           */
          issue_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Reaction;
      }

      namespace DeleteForPullRequestComment {
        interface Headers {
          [P: string]: any;
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
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetListForPullRequestReviewComment {
        interface Headers {
          [P: string]: any;
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

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForPullRequestReviewComment {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the pull request review comment.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
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

        type Response = $schemas.Reaction;
      }

      namespace DeleteForRelease {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The unique identifier of the reaction.
           */
          reaction_id: number;
          /**
           * The unique identifier of the release.
           */
          release_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetListForRelease {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The unique identifier of the release.
           */
          release_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a release.
           */
          content?: "+1" | "eyes" | "heart" | "hooray" | "laugh" | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForRelease {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the release.
           */
          content: "+1" | "eyes" | "heart" | "hooray" | "laugh" | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The unique identifier of the release.
           */
          release_id: number;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Reaction;
      }

      namespace GetListForTeamDiscussionCommentLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the comment.
           */
          comment_number: number;
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForTeamDiscussionCommentLegacy {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the comment.
           */
          comment_number: number;
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.Reaction;
      }

      namespace GetListForTeamDiscussionLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        interface QueryParams {
          /**
           * Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion.
           */
          content?:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
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

        type Response = $schemas.Reaction[];
      }

      namespace PostCreateForTeamDiscussionLegacy {
        interface Body {
          /**
           * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
           */
          content:
            | "+1"
            | "-1"
            | "confused"
            | "eyes"
            | "heart"
            | "hooray"
            | "laugh"
            | "rocket";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The number that identifies the discussion.
           */
          discussion_number: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.Reaction;
      }
    }
  }
}
