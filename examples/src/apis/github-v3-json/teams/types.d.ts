declare namespace API {
  namespace GithubV3Json {
    namespace Teams {
      namespace DeleteDiscussionCommentInOrg {
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
      }

      namespace GetDiscussionCommentInOrg {
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

        type Response = $schemas.TeamDiscussionComment;
      }

      namespace PatchUpdateDiscussionCommentInOrg {
        interface Body {
          /**
           * The discussion comment's body text.
           */
          body: string;
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

        type Response = $schemas.TeamDiscussionComment;
      }

      namespace GetListDiscussionCommentsInOrg {
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
           * The direction to sort the results by.
           * @default desc
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
        }

        type Response = $schemas.TeamDiscussionComment[];
      }

      namespace PostCreateDiscussionCommentInOrg {
        interface Body {
          /**
           * The discussion comment's body text.
           */
          body: string;
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

        type Response = $schemas.TeamDiscussionComment;
      }

      namespace DeleteDiscussionInOrg {
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
      }

      namespace GetDiscussionInOrg {
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

        type Response = $schemas.TeamDiscussion;
      }

      namespace PatchUpdateDiscussionInOrg {
        interface Body {
          /**
           * The discussion post's body text.
           */
          body?: string;
          /**
           * The discussion post's title.
           */
          title?: string;
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

        type Response = $schemas.TeamDiscussion;
      }

      namespace GetListDiscussionsInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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
           * The direction to sort the results by.
           * @default desc
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
           * Pinned discussions only filter
           */
          pinned?: string;
        }

        type Response = $schemas.TeamDiscussion[];
      }

      namespace PostCreateDiscussionInOrg {
        interface Body {
          /**
           * The discussion post's body text.
           */
          body: string;
          /**
           * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
           */
          private?: boolean;
          /**
           * The discussion post's title.
           */
          title: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.TeamDiscussion;
      }

      namespace GetListPendingInvitationsInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        type Response = $schemas.OrganizationInvitation[];
      }

      namespace GetListMembersInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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
           * Filters members returned by their role in the team.
           * @default all
           */
          role?: "all" | "maintainer" | "member";
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteRemoveMembershipForUserInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetMembershipForUserInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.TeamMembership;
      }

      namespace PutAddOrUpdateMembershipForUserInOrg {
        interface Body {
          /**
           * The role that this user should have in the team.
           * @default member
           */
          role?: "maintainer" | "member";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.TeamMembership;
      }

      namespace DeleteRemoveProjectInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetCheckPermissionsForProjectInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.TeamProject;
      }

      namespace PutAddOrUpdateProjectPermissionsInOrg {
        interface Body {
          /**
           * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
           */
          permission?: "admin" | "read" | "write";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetListProjectsInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        type Response = $schemas.TeamProject[];
      }

      namespace DeleteRemoveRepoInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetCheckPermissionsForRepoInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.TeamRepository;
      }

      namespace PutAddOrUpdateRepoPermissionsInOrg {
        interface Body {
          /**
           * The permission to grant the team on this repository. We accept the following permissions to be set: `pull`, `triage`, `push`, `maintain`, `admin` and you can also specify a custom repository role name, if the owning organization has defined any. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
           * @default push
           */
          permission?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetListReposInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        type Response = $schemas.MinimalRepository[];
      }

      namespace GetListChildInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
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

        type Response = $schemas.Team[];
      }

      namespace DeleteInOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }
      }

      namespace GetByName {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.TeamFull;
      }

      namespace PatchUpdateInOrg {
        interface Body {
          /**
           * The description of the team.
           */
          description?: string;
          /**
           * The name of the team.
           */
          name?: string;
          /**
           * The ID of a team to set as the parent team.
           */
          parent_team_id?: number;
          /**
           * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
           * @default pull
           */
          permission?: "admin" | "pull" | "push";
          /**
           * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:
           * **For a non-nested team:**
           * `secret` - only visible to organization owners and members of this team.
           * `closed` - visible to all members of this organization.
           * **For a parent or child team:**
           * `closed` - visible to all members of this organization.
           */
          privacy?: "closed" | "secret";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The slug of the team name.
           */
          team_slug: string;
        }

        type Response = $schemas.TeamFull;
      }

      namespace GetList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
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

        type Response = $schemas.Team[];
      }

      namespace PostCreate {
        interface Body {
          /**
           * The description of the team.
           */
          description?: string;
          /**
           * List GitHub IDs for organization members who will become team maintainers.
           */
          maintainers?: string[];
          /**
           * The name of the team.
           */
          name: string;
          /**
           * The ID of a team to set as the parent team.
           */
          parent_team_id?: number;
          /**
           * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
           * @default pull
           */
          permission?: "pull" | "push";
          /**
           * The level of privacy this team should have. The options are:
           * **For a non-nested team:**
           * `secret` - only visible to organization owners and members of this team.
           * `closed` - visible to all members of this organization.
           * Default: `secret`
           * **For a parent or child team:**
           * `closed` - visible to all members of this organization.
           * Default for child team: `closed`
           */
          privacy?: "closed" | "secret";
          /**
           * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
           */
          repo_names?: string[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.TeamFull;
      }

      namespace DeleteDiscussionCommentLegacy {
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
      }

      namespace GetDiscussionCommentLegacy {
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

        type Response = $schemas.TeamDiscussionComment;
      }

      namespace PatchUpdateDiscussionCommentLegacy {
        interface Body {
          /**
           * The discussion comment's body text.
           */
          body: string;
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

        type Response = $schemas.TeamDiscussionComment;
      }

      namespace GetListDiscussionCommentsLegacy {
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
           * The direction to sort the results by.
           * @default desc
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
        }

        type Response = $schemas.TeamDiscussionComment[];
      }

      namespace PostCreateDiscussionCommentLegacy {
        interface Body {
          /**
           * The discussion comment's body text.
           */
          body: string;
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

        type Response = $schemas.TeamDiscussionComment;
      }

      namespace DeleteDiscussionLegacy {
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
      }

      namespace GetDiscussionLegacy {
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

        type Response = $schemas.TeamDiscussion;
      }

      namespace PatchUpdateDiscussionLegacy {
        interface Body {
          /**
           * The discussion post's body text.
           */
          body?: string;
          /**
           * The discussion post's title.
           */
          title?: string;
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

        type Response = $schemas.TeamDiscussion;
      }

      namespace GetListDiscussionsLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        interface QueryParams {
          /**
           * The direction to sort the results by.
           * @default desc
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
        }

        type Response = $schemas.TeamDiscussion[];
      }

      namespace PostCreateDiscussionLegacy {
        interface Body {
          /**
           * The discussion post's body text.
           */
          body: string;
          /**
           * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
           */
          private?: boolean;
          /**
           * The discussion post's title.
           */
          title: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.TeamDiscussion;
      }

      namespace GetListPendingInvitationsLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
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

        type Response = $schemas.OrganizationInvitation[];
      }

      namespace DeleteRemoveMemberLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetMemberLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutAddMemberLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListMembersLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
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
           * Filters members returned by their role in the team.
           * @default all
           */
          role?: "all" | "maintainer" | "member";
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteRemoveMembershipForUserLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetMembershipForUserLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.TeamMembership;
      }

      namespace PutAddOrUpdateMembershipForUserLegacy {
        interface Body {
          /**
           * The role that this user should have in the team.
           * @default member
           */
          role?: "maintainer" | "member";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.TeamMembership;
      }

      namespace DeleteRemoveProjectLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }
      }

      namespace GetCheckPermissionsForProjectLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.TeamProject;
      }

      namespace PutAddOrUpdateProjectPermissionsLegacy {
        interface Body {
          /**
           * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
           */
          permission?: "admin" | "read" | "write";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }
      }

      namespace GetListProjectsLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
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

        type Response = $schemas.TeamProject[];
      }

      namespace DeleteRemoveRepoLegacy {
        interface Headers {
          [P: string]: any;
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
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }
      }

      namespace GetCheckPermissionsForRepoLegacy {
        interface Headers {
          [P: string]: any;
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
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.TeamRepository;
      }

      namespace PutAddOrUpdateRepoPermissionsLegacy {
        interface Body {
          /**
           * The permission to grant the team on this repository. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
           */
          permission?: "admin" | "pull" | "push";
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
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }
      }

      namespace GetListReposLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
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

        type Response = $schemas.MinimalRepository[];
      }

      namespace GetListChildLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
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

        type Response = $schemas.Team[];
      }

      namespace DeleteLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }
      }

      namespace GetLegacy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.TeamFull;
      }

      namespace PatchUpdateLegacy {
        interface Body {
          /**
           * The description of the team.
           */
          description?: string;
          /**
           * The name of the team.
           */
          name: string;
          /**
           * The ID of a team to set as the parent team.
           */
          parent_team_id?: number;
          /**
           * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
           * @default pull
           */
          permission?: "admin" | "pull" | "push";
          /**
           * The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:
           * **For a non-nested team:**
           * `secret` - only visible to organization owners and members of this team.
           * `closed` - visible to all members of this organization.
           * **For a parent or child team:**
           * `closed` - visible to all members of this organization.
           */
          privacy?: "closed" | "secret";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the team.
           */
          team_id: number;
        }

        type Response = $schemas.TeamFull;
      }

      namespace GetListForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
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

        type Response = $schemas.TeamFull[];
      }
    }
  }
}
