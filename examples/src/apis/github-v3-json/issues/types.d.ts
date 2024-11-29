declare namespace API {
  namespace GithubV3Json {
    namespace Issues {
      namespace GetList {
        interface QueryParams {
          collab?: boolean;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
           * @default assigned
           */
          filter?:
            | "all"
            | "assigned"
            | "created"
            | "mentioned"
            | "repos"
            | "subscribed";
          /**
           * A list of comma separated label names. Example: `bug,ui,@high`
           */
          labels?: string;
          orgs?: boolean;
          owned?: boolean;
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
          pulls?: boolean;
          /**
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
          /**
           * What to sort results by.
           * @default created
           */
          sort?: "comments" | "created" | "updated";
          /**
           * Indicates the state of the issues to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Issue[];
      }

      namespace GetListForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
           * @default assigned
           */
          filter?:
            | "all"
            | "assigned"
            | "created"
            | "mentioned"
            | "repos"
            | "subscribed";
          /**
           * A list of comma separated label names. Example: `bug,ui,@high`
           */
          labels?: string;
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
           * What to sort results by.
           * @default created
           */
          sort?: "comments" | "created" | "updated";
          /**
           * Indicates the state of the issues to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Issue[];
      }

      namespace GetCheckUserCanBeAssigned {
        interface PathParams {
          assignee: string;
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

      namespace GetListAssignees {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteComment {
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

      namespace GetComment {
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

        type Response = $schemas.IssueComment;
      }

      namespace PatchUpdateComment {
        interface Body {
          /**
           * The contents of the comment.
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

        type Response = $schemas.IssueComment;
      }

      namespace GetListCommentsForRepo {
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
           * Either `asc` or `desc`. Ignored without the `sort` parameter.
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

        type Response = $schemas.IssueComment[];
      }

      namespace GetEvent {
        interface PathParams {
          event_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.IssueEvent;
      }

      namespace GetListEventsForRepo {
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

        type Response = $schemas.IssueEvent[];
      }

      namespace GetCheckUserCanBeAssignedToIssue {
        interface PathParams {
          assignee: string;
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
      }

      namespace DeleteRemoveAssignees {
        interface Body {
          /**
           * Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._
           */
          assignees?: string[];
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

        type Response = $schemas.Issue;
      }

      namespace PostAddAssignees {
        interface Body {
          /**
           * Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
           */
          assignees?: string[];
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

        type Response = $schemas.Issue;
      }

      namespace GetListComments {
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
        }

        type Response = $schemas.IssueComment[];
      }

      namespace PostCreateComment {
        interface Body {
          /**
           * The contents of the comment.
           */
          body: string;
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

        type Response = $schemas.IssueComment;
      }

      namespace GetListEvents {
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

        type Response = $schemas.IssueEventForIssue[];
      }

      namespace DeleteRemoveLabel {
        interface PathParams {
          /**
           * The number that identifies the issue.
           */
          issue_number: number;
          name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Label[];
      }

      namespace DeleteRemoveAllLabels {
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
      }

      namespace GetListLabelsOnIssue {
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

        type Response = $schemas.Label[];
      }

      namespace PostAddLabels {
        type Body =
          | {
              /**
               * The names of the labels to add to the issue's existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also replace all of the labels for an issue. For more information, see "[Set labels for an issue](https://docs.github.com/rest/reference/issues#set-labels-for-an-issue)."
               * @minItems 1
               */
              labels?: string[];
            }
          | string[]
          | {
              /**
               * @minItems 1
               */
              labels?: Array<{
                name: string;
              }>;
            }
          | Array<{
              name: string;
            }>
          | string;

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

        type Response = $schemas.Label[];
      }

      namespace PutSetLabels {
        type Body =
          | {
              /**
               * The names of the labels to set for the issue. The labels you set replace any existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also add labels to the existing labels for an issue. For more information, see "[Add labels to an issue](https://docs.github.com/rest/reference/issues#add-labels-to-an-issue)."
               * @minItems 1
               */
              labels?: string[];
            }
          | string[]
          | {
              /**
               * @minItems 1
               */
              labels?: Array<{
                name: string;
              }>;
            }
          | Array<{
              name: string;
            }>
          | string;

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

        type Response = $schemas.Label[];
      }

      namespace DeleteUnlock {
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
      }

      namespace PutLock {
        interface Body {
          /**
           * The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:
           * `off-topic`
           * `too heated`
           * `resolved`
           * `spam`
           */
          lock_reason?: "off-topic" | "resolved" | "spam" | "too heated";
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
      }

      namespace GetListEventsForTimeline {
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

        type Response = $schemas.TimelineIssueEvents[];
      }

      namespace GetIssues {
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

        type Response = $schemas.Issue;
      }

      namespace PatchUpdate {
        interface Body {
          /**
           * Username to assign to this issue. **This field is deprecated.**
           */
          assignee?: string;
          /**
           * Usernames to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this issue. Send an empty array (`[]`) to clear all assignees from the issue. Only users with push access can set assignees for new issues. Without push access to the repository, assignee changes are silently dropped.
           */
          assignees?: string[];
          /**
           * The contents of the issue.
           */
          body?: string;
          /**
           * Labels to associate with this issue. Pass one or more labels to _replace_ the set of labels on this issue. Send an empty array (`[]`) to clear all labels from the issue. Only users with push access can set labels for issues. Without push access to the repository, label changes are silently dropped.
           */
          labels?: any[];
          milestone?: string | number;
          /**
           * The open or closed state of the issue.
           */
          state?: "closed" | "open";
          /**
           * The reason for the state change. Ignored unless `state` is changed.
           */
          state_reason?: "completed" | "not_planned" | "reopened";
          /**
           * The title of the issue.
           */
          title?: string | number;
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

        type Response = $schemas.Issue;
      }

      namespace GetListForRepo {
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
           * Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
           */
          assignee?: string;
          /**
           * The user that created the issue.
           */
          creator?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * A list of comma separated label names. Example: `bug,ui,@high`
           */
          labels?: string;
          /**
           * A user that's mentioned in the issue.
           */
          mentioned?: string;
          /**
           * If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
           */
          milestone?: string;
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
           * What to sort results by.
           * @default created
           */
          sort?: "comments" | "created" | "updated";
          /**
           * Indicates the state of the issues to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Issue[];
      }

      namespace PostCreate {
        interface Body {
          /**
           * Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
           */
          assignee?: string;
          /**
           * Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
           */
          assignees?: string[];
          /**
           * The contents of the issue.
           */
          body?: string;
          /**
           * Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
           */
          labels?: any[];
          milestone?: string | number;
          /**
           * The title of the issue.
           */
          title: string | number;
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

        type Response = $schemas.Issue;
      }

      namespace DeleteLabel {
        interface PathParams {
          name: string;
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

      namespace GetLabel {
        interface PathParams {
          name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Label;
      }

      namespace PatchUpdateLabel {
        interface Body {
          /**
           * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
           */
          color?: string;
          /**
           * A short description of the label. Must be 100 characters or fewer.
           */
          description?: string;
          /**
           * The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."
           */
          new_name?: string;
        }

        interface PathParams {
          name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Label;
      }

      namespace GetListLabelsForRepo {
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

        type Response = $schemas.Label[];
      }

      namespace PostCreateLabel {
        interface Body {
          /**
           * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
           */
          color?: string;
          /**
           * A short description of the label. Must be 100 characters or fewer.
           */
          description?: string;
          /**
           * The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."
           */
          name: string;
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

        type Response = $schemas.Label;
      }

      namespace GetListLabelsForMilestone {
        interface PathParams {
          /**
           * The number that identifies the milestone.
           */
          milestone_number: number;
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

        type Response = $schemas.Label[];
      }

      namespace DeleteMilestone {
        interface PathParams {
          /**
           * The number that identifies the milestone.
           */
          milestone_number: number;
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

      namespace GetMilestone {
        interface PathParams {
          /**
           * The number that identifies the milestone.
           */
          milestone_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Milestone;
      }

      namespace PatchUpdateMilestone {
        interface Body {
          /**
           * A description of the milestone.
           */
          description?: string;
          /**
           * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          due_on?: string;
          /**
           * The state of the milestone. Either `open` or `closed`.
           * @default open
           */
          state?: "closed" | "open";
          /**
           * The title of the milestone.
           */
          title?: string;
        }

        interface PathParams {
          /**
           * The number that identifies the milestone.
           */
          milestone_number: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Milestone;
      }

      namespace GetListMilestones {
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
           * The direction of the sort. Either `asc` or `desc`.
           * @default asc
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
           * What to sort results by. Either `due_on` or `completeness`.
           * @default due_on
           */
          sort?: "completeness" | "due_on";
          /**
           * The state of the milestone. Either `open`, `closed`, or `all`.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Milestone[];
      }

      namespace PostCreateMilestone {
        interface Body {
          /**
           * A description of the milestone.
           */
          description?: string;
          /**
           * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          due_on?: string;
          /**
           * The state of the milestone. Either `open` or `closed`.
           * @default open
           */
          state?: "closed" | "open";
          /**
           * The title of the milestone.
           */
          title: string;
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

        type Response = $schemas.Milestone;
      }

      namespace GetListForAuthenticatedUser {
        interface QueryParams {
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
           * @default assigned
           */
          filter?:
            | "all"
            | "assigned"
            | "created"
            | "mentioned"
            | "repos"
            | "subscribed";
          /**
           * A list of comma separated label names. Example: `bug,ui,@high`
           */
          labels?: string;
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
           * What to sort results by.
           * @default created
           */
          sort?: "comments" | "created" | "updated";
          /**
           * Indicates the state of the issues to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Issue[];
      }
    }
  }
}
