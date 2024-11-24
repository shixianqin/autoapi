declare namespace API {
  namespace GithubV3Json {
    namespace Repos {
      namespace GetListForOrg {
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
           * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
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
           * The property to sort the results by.
           * @default created
           */
          sort?: "created" | "full_name" | "pushed" | "updated";
          /**
           * Specifies the types of repositories you want returned.
           */
          type?: "all" | "forks" | "member" | "private" | "public" | "sources";
        }

        type Response = $schemas.MinimalRepository[];
      }

      namespace PostCreateInOrg {
        interface Body {
          /**
           * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
           */
          allow_auto_merge?: boolean;
          /**
           * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
           * @default true
           */
          allow_merge_commit?: boolean;
          /**
           * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
           * @default true
           */
          allow_rebase_merge?: boolean;
          /**
           * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
           * @default true
           */
          allow_squash_merge?: boolean;
          /**
           * Pass `true` to create an initial commit with empty README.
           */
          auto_init?: boolean;
          /**
           * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to `true`.**
           */
          delete_branch_on_merge?: boolean;
          /**
           * A short description of the repository.
           */
          description?: string;
          /**
           * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
           */
          gitignore_template?: string;
          /**
           * Whether downloads are enabled.
           * @default true
           */
          has_downloads?: boolean;
          /**
           * Either `true` to enable issues for this repository or `false` to disable them.
           * @default true
           */
          has_issues?: boolean;
          /**
           * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
           * @default true
           */
          has_projects?: boolean;
          /**
           * Either `true` to enable the wiki for this repository or `false` to disable it.
           * @default true
           */
          has_wiki?: boolean;
          /**
           * A URL with more information about the repository.
           */
          homepage?: string;
          /**
           * Either `true` to make this repo available as a template repository or `false` to prevent it.
           */
          is_template?: boolean;
          /**
           * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
           */
          license_template?: string;
          /**
           * The default value for a merge commit message.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `PR_BODY` - default to the pull request's body.
           * - `BLANK` - default to a blank commit message.
           */
          merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
          /**
           * The default value for a merge commit title.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
           */
          merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
          /**
           * The name of the repository.
           */
          name: string;
          /**
           * Whether the repository is private.
           */
          private?: boolean;
          /**
           * The default value for a squash merge commit message:
           *
           * - `PR_BODY` - default to the pull request's body.
           * - `COMMIT_MESSAGES` - default to the branch's commit messages.
           * - `BLANK` - default to a blank commit message.
           */
          squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
          /**
           * The default value for a squash merge commit title:
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
           */
          squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
          /**
           * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
           */
          team_id?: number;
          /**
           * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
           * @deprecated
           */
          use_squash_pr_title_as_default?: boolean;
          /**
           * The visibility of the repository.
           */
          visibility?: "private" | "public";
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

        type Response = $schemas.Repository;
      }

      namespace DeleteAutolink {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the autolink.
           */
          autolink_id: number;
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

      namespace GetAutolink {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the autolink.
           */
          autolink_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Autolink;
      }

      namespace GetListAutolinks {
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
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
        }

        type Response = $schemas.Autolink[];
      }

      namespace PostCreateAutolink {
        interface Body {
          /**
           * Whether this autolink reference matches alphanumeric characters. If true, the `<num>` parameter of the `url_template` matches alphanumeric characters `A-Z` (case insensitive), `0-9`, and `-`. If false, this autolink reference only matches numeric characters.
           * @default true
           */
          is_alphanumeric?: boolean;
          /**
           * This prefix appended by certain characters will generate a link any time it is found in an issue, pull request, or commit.
           */
          key_prefix: string;
          /**
           * The URL must contain `<num>` for the reference number. `<num>` matches different characters depending on the value of `is_alphanumeric`.
           */
          url_template: string;
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
        }

        type Response = $schemas.Autolink;
      }

      namespace DeleteDisableAutomatedSecurityFixes {
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
        }
      }

      namespace PutEnableAutomatedSecurityFixes {
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
        }
      }

      namespace DeleteAdminBranchProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
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

      namespace GetAdminBranchProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranchAdminEnforced;
      }

      namespace PostSetAdminBranchProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranchAdminEnforced;
      }

      namespace DeletePullRequestReviewProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
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

      namespace GetPullRequestReviewProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranchPullRequestReview;
      }

      namespace PatchUpdatePullRequestReviewProtection {
        interface Body {
          /**
           * Allow specific users, teams, or apps to bypass pull request requirements.
           */
          bypass_pull_request_allowances?: {
            /**
             * The list of app `slug`s allowed to bypass pull request requirements.
             */
            apps?: string[];
            /**
             * The list of team `slug`s allowed to bypass pull request requirements.
             */
            teams?: string[];
            /**
             * The list of user `login`s allowed to bypass pull request requirements.
             */
            users?: string[];
          };
          /**
           * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
           */
          dismiss_stale_reviews?: boolean;
          /**
           * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
           */
          dismissal_restrictions?: {
            /**
             * The list of app `slug`s with dismissal access
             */
            apps?: string[];
            /**
             * The list of team `slug`s with dismissal access
             */
            teams?: string[];
            /**
             * The list of user `login`s with dismissal access
             */
            users?: string[];
          };
          /**
           * Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed.
           */
          require_code_owner_reviews?: boolean;
          /**
           * Whether the most recent push must be approved by someone other than the person who pushed it. Default: `false`
           */
          require_last_push_approval?: boolean;
          /**
           * Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.
           */
          required_approving_review_count?: number;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranchPullRequestReview;
      }

      namespace DeleteCommitSignatureProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
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

      namespace GetCommitSignatureProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranchAdminEnforced;
      }

      namespace PostCreateCommitSignatureProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranchAdminEnforced;
      }

      namespace DeleteRemoveStatusCheckContexts {
        type Body =
          | {
              /**
               * The name of the status checks
               */
              contexts: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = string[];
      }

      namespace GetAllStatusCheckContexts {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = string[];
      }

      namespace PostAddStatusCheckContexts {
        type Body =
          | {
              /**
               * The name of the status checks
               */
              contexts: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = string[];
      }

      namespace PutSetStatusCheckContexts {
        type Body =
          | {
              /**
               * The name of the status checks
               */
              contexts: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = string[];
      }

      namespace DeleteRemoveStatusCheckProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
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

      namespace GetStatusChecksProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.StatusCheckPolicy;
      }

      namespace PatchUpdateStatusCheckProtection {
        interface Body {
          /**
           * The list of status checks to require in order to merge into this branch.
           */
          checks?: Array<{
            /**
             * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
             */
            app_id?: number;
            /**
             * The name of the required check
             */
            context: string;
          }>;
          /**
           * **Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.
           *
           * @deprecated
           */
          contexts?: string[];
          /**
           * Require branches to be up to date before merging.
           */
          strict?: boolean;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.StatusCheckPolicy;
      }

      namespace DeleteRemoveAppAccessRestrictions {
        type Body =
          | {
              /**
               * The GitHub Apps that have push access to this branch. Use the slugified version of the app name. **Note**: The list of users, apps, and teams in total is limited to 100 items.
               */
              apps: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Integration[];
      }

      namespace GetAppsWithAccessToProtectedBranch {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Integration[];
      }

      namespace PostAddAppAccessRestrictions {
        type Body =
          | {
              /**
               * The GitHub Apps that have push access to this branch. Use the slugified version of the app name. **Note**: The list of users, apps, and teams in total is limited to 100 items.
               */
              apps: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Integration[];
      }

      namespace PutSetAppAccessRestrictions {
        type Body =
          | {
              /**
               * The GitHub Apps that have push access to this branch. Use the slugified version of the app name. **Note**: The list of users, apps, and teams in total is limited to 100 items.
               */
              apps: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Integration[];
      }

      namespace DeleteRemoveTeamAccessRestrictions {
        type Body =
          | {
              /**
               * The slug values for teams
               */
              teams: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Team[];
      }

      namespace GetTeamsWithAccessToProtectedBranch {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Team[];
      }

      namespace PostAddTeamAccessRestrictions {
        type Body =
          | {
              /**
               * The slug values for teams
               */
              teams: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Team[];
      }

      namespace PutSetTeamAccessRestrictions {
        type Body =
          | {
              /**
               * The slug values for teams
               */
              teams: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Team[];
      }

      namespace DeleteRemoveUserAccessRestrictions {
        type Body =
          | {
              /**
               * The username for users
               */
              users: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace GetUsersWithAccessToProtectedBranch {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace PostAddUserAccessRestrictions {
        type Body =
          | {
              /**
               * The username for users
               */
              users: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace PutSetUserAccessRestrictions {
        type Body =
          | {
              /**
               * The username for users
               */
              users: string[];
            }
          | string[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteAccessRestrictions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
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

      namespace GetAccessRestrictions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.BranchRestrictionPolicy;
      }

      namespace DeleteBranchProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
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

      namespace GetBranchProtection {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.BranchProtection;
      }

      namespace PutUpdateBranchProtection {
        interface Body {
          /**
           * Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.
           */
          allow_deletions?: boolean;
          /**
           * Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
           */
          allow_force_pushes?: boolean;
          /**
           * Whether users can pull changes from upstream when the branch is locked. Set to `true` to allow fork syncing. Set to `false` to prevent fork syncing. Default: `false`.
           */
          allow_fork_syncing?: boolean;
          /**
           * If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to `true` to restrict new branch creation. Default: `false`.
           */
          block_creations?: boolean;
          /**
           * Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
           */
          enforce_admins: boolean;
          /**
           * Whether to set the branch as read-only. If this is true, users will not be able to push to the branch. Default: `false`.
           */
          lock_branch?: boolean;
          /**
           * Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`.
           */
          required_conversation_resolution?: boolean;
          /**
           * Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://docs.github.com/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
           */
          required_linear_history?: boolean;
          /**
           * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
           */
          required_pull_request_reviews: {
            /**
             * Allow specific users, teams, or apps to bypass pull request requirements.
             */
            bypass_pull_request_allowances?: {
              /**
               * The list of app `slug`s allowed to bypass pull request requirements.
               */
              apps?: string[];
              /**
               * The list of team `slug`s allowed to bypass pull request requirements.
               */
              teams?: string[];
              /**
               * The list of user `login`s allowed to bypass pull request requirements.
               */
              users?: string[];
            };
            /**
             * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
             */
            dismiss_stale_reviews?: boolean;
            /**
             * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
             */
            dismissal_restrictions?: {
              /**
               * The list of app `slug`s with dismissal access
               */
              apps?: string[];
              /**
               * The list of team `slug`s with dismissal access
               */
              teams?: string[];
              /**
               * The list of user `login`s with dismissal access
               */
              users?: string[];
            };
            /**
             * Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) review them.
             */
            require_code_owner_reviews?: boolean;
            /**
             * Whether the most recent push must be approved by someone other than the person who pushed it. Default: `false`.
             */
            require_last_push_approval?: boolean;
            /**
             * Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.
             */
            required_approving_review_count?: number;
          };
          /**
           * Require status checks to pass before merging. Set to `null` to disable.
           */
          required_status_checks: {
            /**
             * The list of status checks to require in order to merge into this branch.
             */
            checks?: Array<{
              /**
               * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
               */
              app_id?: number;
              /**
               * The name of the required check
               */
              context: string;
            }>;
            /**
             * **Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.
             *
             * @deprecated
             */
            contexts: string[];
            /**
             * Require branches to be up to date before merging.
             */
            strict: boolean;
          };
          /**
           * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
           */
          restrictions: {
            /**
             * The list of app `slug`s with push access
             */
            apps?: string[];
            /**
             * The list of team `slug`s with push access
             */
            teams: string[];
            /**
             * The list of user `login`s with push access
             */
            users: string[];
          };
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ProtectedBranch;
      }

      namespace PostRenameBranch {
        interface Body {
          /**
           * The new name of the branch.
           */
          new_name: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.BranchWithProtection;
      }

      namespace GetBranch {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the branch. Cannot contain wildcard characters. To use wildcard characters in branch names, use [the GraphQL API](https://docs.github.com/graphql).
           */
          branch: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.BranchWithProtection;
      }

      namespace GetListBranches {
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
           * Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches.
           */
          protected?: boolean;
        }

        type Response = $schemas.ShortBranch[];
      }

      namespace GetCodeownersErrors {
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
        }

        interface QueryParams {
          /**
           * A branch, tag or commit name used to determine which version of the CODEOWNERS file to use. Default: the repository's default branch (e.g. `main`)
           */
          ref?: string;
        }

        type Response = $schemas.CodeownersErrors;
      }

      namespace GetCollaboratorPermissionLevel {
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
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.RepositoryCollaboratorPermission;
      }

      namespace DeleteRemoveCollaborator {
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
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetCheckCollaborator {
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
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutAddCollaborator {
        interface Body {
          /**
           * The permission to grant the collaborator. **Only valid on organization-owned repositories.** We accept the following permissions to be set: `pull`, `triage`, `push`, `maintain`, `admin` and you can also specify a custom repository role name, if the owning organization has defined any.
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
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.RepositoryInvitation;
      }

      namespace GetListCollaborators {
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
        }

        interface QueryParams {
          /**
           * Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see.
           * @default all
           */
          affiliation?: "all" | "direct" | "outside";
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
           * Filter collaborators by the permissions they have on the repository. If not specified, all collaborators will be returned.
           */
          permission?: "admin" | "maintain" | "pull" | "push" | "triage";
        }

        type Response = $schemas.Collaborator[];
      }

      namespace DeleteCommitComment {
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
      }

      namespace GetCommitComment {
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

        type Response = $schemas.CommitComment;
      }

      namespace PatchUpdateCommitComment {
        interface Body {
          /**
           * The contents of the comment
           */
          body: string;
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

        type Response = $schemas.CommitComment;
      }

      namespace GetListCommitCommentsForRepo {
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

        type Response = $schemas.CommitComment[];
      }

      namespace GetListBranchesForHeadCommit {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The SHA of the commit.
           */
          commit_sha: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.BranchShort[];
      }

      namespace GetListCommentsForCommit {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The SHA of the commit.
           */
          commit_sha: string;
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

        type Response = $schemas.CommitComment[];
      }

      namespace PostCreateCommitComment {
        interface Body {
          /**
           * The contents of the comment.
           */
          body: string;
          /**
           * **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
           */
          line?: number;
          /**
           * Relative path of the file to comment on.
           */
          path?: string;
          /**
           * Line index in the diff to comment on.
           */
          position?: number;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The SHA of the commit.
           */
          commit_sha: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.CommitComment;
      }

      namespace GetListPullRequestsAssociatedWithCommit {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The SHA of the commit.
           */
          commit_sha: string;
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

        type Response = $schemas.PullRequestSimple[];
      }

      namespace GetListCommitStatusesForRef {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * ref parameter
           */
          ref: string;
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

        type Response = $schemas.Status[];
      }

      namespace GetCombinedStatusForRef {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * ref parameter
           */
          ref: string;
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

        type Response = $schemas.CombinedCommitStatus;
      }

      namespace GetCommit {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * ref parameter
           */
          ref: string;
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

        type Response = $schemas.Commit;
      }

      namespace GetListCommits {
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
        }

        interface QueryParams {
          /**
           * GitHub login or email address by which to filter by commit author.
           */
          author?: string;
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * Only commits containing this file path will be returned.
           */
          path?: string;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * SHA or branch to start listing commits from. Default: the repository’s default branch (usually `main`).
           */
          sha?: string;
          /**
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
          /**
           * Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          until?: string;
        }

        type Response = $schemas.Commit[];
      }

      namespace GetCommunityProfileMetrics {
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
        }

        type Response = $schemas.CommunityProfile;
      }

      namespace GetCompareCommits {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The base branch and head branch to compare. This parameter expects the format `BASE...HEAD`. Both must be branch names in `repo`. To compare with a branch that exists in a different repository in the same network as `repo`, the `basehead` parameter expects the format `USERNAME:BASE...USERNAME:HEAD`.
           */
          basehead: string;
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

        type Response = $schemas.CommitComparison;
      }

      namespace DeleteFile {
        interface Body {
          /**
           * object containing information about the author.
           */
          author?: {
            /**
             * The email of the author (or committer) of the commit
             */
            email?: string;
            /**
             * The name of the author (or committer) of the commit
             */
            name?: string;
          };
          /**
           * The branch name. Default: the repository’s default branch (usually `master`)
           */
          branch?: string;
          /**
           * object containing information about the committer.
           */
          committer?: {
            /**
             * The email of the author (or committer) of the commit
             */
            email?: string;
            /**
             * The name of the author (or committer) of the commit
             */
            name?: string;
          };
          /**
           * The commit message.
           */
          message: string;
          /**
           * The blob SHA of the file being deleted.
           */
          sha: string;
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
           * path parameter
           */
          path: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.FileCommit;
      }

      namespace GetContent {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * path parameter
           */
          path: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
           */
          ref?: string;
        }

        type Response =
          | (
              | $schemas.ContentDirectory
              | $schemas.ContentFile
              | $schemas.ContentSymlink
              | $schemas.ContentSubmodule
            )
          | $schemas.ContentTree;
      }

      namespace PutCreateOrUpdateFileContents {
        interface Body {
          /**
           * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
           */
          author?: {
            date?: string;
            /**
             * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
             */
            email: string;
            /**
             * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
             */
            name: string;
          };
          /**
           * The branch name. Default: the repository’s default branch (usually `master`)
           */
          branch?: string;
          /**
           * The person that committed the file. Default: the authenticated user.
           */
          committer?: {
            date?: string;
            /**
             * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
             */
            email: string;
            /**
             * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
             */
            name: string;
          };
          /**
           * The new file content, using Base64 encoding.
           */
          content: string;
          /**
           * The commit message.
           */
          message: string;
          /**
           * **Required if you are updating a file**. The blob SHA of the file being replaced.
           */
          sha?: string;
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
           * path parameter
           */
          path: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.FileCommit;
      }

      namespace GetListContributors {
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
        }

        interface QueryParams {
          /**
           * Set to `1` or `true` to include anonymous contributors in results.
           */
          anon?: string;
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

        type Response = $schemas.Contributor[];
      }

      namespace GetDeploymentStatus {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * deployment_id parameter
           */
          deployment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          status_id: number;
        }

        type Response = $schemas.DeploymentStatus;
      }

      namespace GetListDeploymentStatuses {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * deployment_id parameter
           */
          deployment_id: number;
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

        type Response = $schemas.DeploymentStatus[];
      }

      namespace PostCreateDeploymentStatus {
        interface Body {
          /**
           * Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`
           */
          auto_inactive?: boolean;
          /**
           * A short description of the status. The maximum description length is 140 characters.
           */
          description?: string;
          /**
           * Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`.
           */
          environment?: "production" | "qa" | "staging";
          /**
           * Sets the URL for accessing your environment. Default: `""`
           */
          environment_url?: string;
          /**
           * The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`
           */
          log_url?: string;
          /**
           * The state of the status. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
           */
          state:
            | "error"
            | "failure"
            | "in_progress"
            | "inactive"
            | "pending"
            | "queued"
            | "success";
          /**
           * The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.
           */
          target_url?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * deployment_id parameter
           */
          deployment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DeploymentStatus;
      }

      namespace DeleteDeployment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * deployment_id parameter
           */
          deployment_id: number;
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

      namespace GetDeployment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * deployment_id parameter
           */
          deployment_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Deployment;
      }

      namespace GetListDeployments {
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
        }

        interface QueryParams {
          /**
           * The name of the environment that was deployed to (e.g., `staging` or `production`).
           * @default none
           */
          environment?: string;
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
           * The name of the ref. This can be a branch, tag, or SHA.
           * @default none
           */
          ref?: string;
          /**
           * The SHA recorded at creation time.
           * @default none
           */
          sha?: string;
          /**
           * The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
           * @default none
           */
          task?: string;
        }

        type Response = $schemas.Deployment[];
      }

      namespace PostCreateDeployment {
        interface Body {
          /**
           * Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
           * @default true
           */
          auto_merge?: boolean;
          /**
           * Short description of the deployment.
           */
          description?: string;
          /**
           * Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
           * @default production
           */
          environment?: string;
          payload?:
            | {
                [P: string]: any;
              }
            | string;
          /**
           * Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.
           */
          production_environment?: boolean;
          /**
           * The ref to deploy. This can be a branch, tag, or SHA.
           */
          ref: string;
          /**
           * The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
           */
          required_contexts?: string[];
          /**
           * Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
           * @default deploy
           */
          task?: string;
          /**
           * Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`
           */
          transient_environment?: boolean;
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
        }

        type Response =
          | $schemas.Deployment
          | {
              message?: string;
            };
      }

      namespace PostCreateDispatchEvent {
        interface Body {
          /**
           * JSON payload with extra information about the webhook event that your action or workflow may use. The maximum number of top-level properties is 10.
           * @maxProperties 10
           */
          client_payload?: {
            [P: string]: any;
          };
          /**
           * A custom webhook event name. Must be 100 characters or fewer.
           * @maxLength 100
           * @minLength 1
           */
          event_type: string;
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
        }
      }

      namespace DeleteDeploymentBranchPolicy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the branch policy.
           */
          branch_policy_id: number;
          /**
           * The name of the environment.
           */
          environment_name: string;
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

      namespace GetDeploymentBranchPolicy {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the branch policy.
           */
          branch_policy_id: number;
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DeploymentBranchPolicy;
      }

      namespace PutUpdateDeploymentBranchPolicy {
        type Body = $schemas.DeploymentBranchPolicyNamePattern;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the branch policy.
           */
          branch_policy_id: number;
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DeploymentBranchPolicy;
      }

      namespace GetListDeploymentBranchPolicies {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
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

        interface Response {
          branch_policies: $schemas.DeploymentBranchPolicy[];
          /**
           * The number of deployment branch policies for the environment.
           */
          total_count: number;
        }
      }

      namespace PostCreateDeploymentBranchPolicy {
        type Body = $schemas.DeploymentBranchPolicyNamePattern;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DeploymentBranchPolicy;
      }

      namespace DeleteAnEnvironment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
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

      namespace GetEnvironment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Environment;
      }

      namespace PutCreateOrUpdateEnvironment {
        interface Body {
          /**
           * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
           */
          deployment_branch_policy?: $schemas.DeploymentBranchPolicySettings;
          /**
           * The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
           */
          reviewers?: Array<{
            /**
             * The id of the user or team who can review the deployment
             */
            id?: number;
            /**
             * The type of reviewer.
             */
            type?: $schemas.DeploymentReviewerType;
          }>;
          /**
           * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
           */
          wait_timer?: $schemas.WaitTimer;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of the environment.
           */
          environment_name: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Environment;
      }

      namespace GetAllEnvironments {
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

        interface Response {
          environments?: $schemas.Environment[];
          /**
           * The number of environments in this repository
           */
          total_count?: number;
        }
      }

      namespace GetListForks {
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
           * The sort order. `stargazers` will sort by star count.
           * @default newest
           */
          sort?: "newest" | "oldest" | "stargazers" | "watchers";
        }

        type Response = $schemas.MinimalRepository[];
      }

      namespace PostCreateFork {
        interface Body {
          /**
           * When forking from an existing repository, fork with only the default branch.
           */
          default_branch_only?: boolean;
          /**
           * When forking from an existing repository, a new name for the fork.
           */
          name?: string;
          /**
           * Optional parameter to specify the organization name if forking into an organization.
           */
          organization?: string;
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
        }

        type Response = $schemas.FullRepository;
      }

      namespace GetWebhookConfigForRepo {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.WebhookConfig;
      }

      namespace PatchUpdateWebhookConfigForRepo {
        interface Body {
          /**
           * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
           */
          content_type?: $schemas.WebhookConfigContentType;
          insecure_ssl?: $schemas.WebhookConfigInsecureSsl;
          /**
           * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
           */
          secret?: $schemas.WebhookConfigSecret;
          /**
           * The URL to which the payloads will be delivered.
           * @format uri
           */
          url?: $schemas.WebhookConfigUrl;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.WebhookConfig;
      }

      namespace PostRedeliverWebhookDelivery {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          delivery_id: number;
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $responses.Accepted;
      }

      namespace GetWebhookDelivery {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          delivery_id: number;
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.HookDelivery;
      }

      namespace GetListWebhookDeliveries {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
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
           * Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors.
           */
          cursor?: string;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          redelivery?: boolean;
        }

        type Response = $schemas.HookDeliveryItem[];
      }

      namespace PostPingWebhook {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
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

      namespace PostTestPushWebhook {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
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

      namespace DeleteWebhook {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
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

      namespace GetWebhook {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Hook;
      }

      namespace PatchUpdateWebhook {
        interface Body {
          /**
           * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
           * @default true
           */
          active?: boolean;
          /**
           * Determines a list of events to be added to the list of events that the Hook triggers for.
           */
          add_events?: string[];
          /**
           * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
           */
          config?: {
            address?: string;
            /**
             * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
             */
            content_type?: $schemas.WebhookConfigContentType;
            insecure_ssl?: $schemas.WebhookConfigInsecureSsl;
            room?: string;
            /**
             * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
             */
            secret?: $schemas.WebhookConfigSecret;
            /**
             * The URL to which the payloads will be delivered.
             * @format uri
             */
            url: $schemas.WebhookConfigUrl;
          };
          /**
           * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
           * @default push
           */
          events?: string[];
          /**
           * Determines a list of events to be removed from the list of events that the Hook triggers for.
           */
          remove_events?: string[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Hook;
      }

      namespace GetListWebhooks {
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

        type Response = $schemas.Hook[];
      }

      namespace PostCreateWebhook {
        interface Body {
          /**
           * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
           * @default true
           */
          active?: boolean;
          /**
           * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
           */
          config?: {
            /**
             * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
             */
            content_type?: $schemas.WebhookConfigContentType;
            digest?: string;
            insecure_ssl?: $schemas.WebhookConfigInsecureSsl;
            /**
             * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
             */
            secret?: $schemas.WebhookConfigSecret;
            token?: string;
            /**
             * The URL to which the payloads will be delivered.
             * @format uri
             */
            url?: $schemas.WebhookConfigUrl;
          };
          /**
           * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
           * @default push
           */
          events?: string[];
          /**
           * Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
           */
          name?: string;
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
        }

        type Response = $schemas.Hook;
      }

      namespace DeleteInvitation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the invitation.
           */
          invitation_id: number;
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

      namespace PatchUpdateInvitation {
        interface Body {
          /**
           * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
           */
          permissions?: "admin" | "maintain" | "read" | "triage" | "write";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the invitation.
           */
          invitation_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.RepositoryInvitation;
      }

      namespace GetListInvitations {
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

        type Response = $schemas.RepositoryInvitation[];
      }

      namespace DeleteDeployKey {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the key.
           */
          key_id: number;
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

      namespace GetDeployKey {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the key.
           */
          key_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DeployKey;
      }

      namespace GetListDeployKeys {
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

        type Response = $schemas.DeployKey[];
      }

      namespace PostCreateDeployKey {
        interface Body {
          /**
           * The contents of the key.
           */
          key: string;
          /**
           * If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.
           *
           * Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://docs.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://docs.github.com/articles/permission-levels-for-a-user-account-repository/)."
           */
          read_only?: boolean;
          /**
           * A name for the key.
           */
          title?: string;
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
        }

        type Response = $schemas.DeployKey;
      }

      namespace GetListLanguages {
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
        }

        type Response = $schemas.Language;
      }

      namespace DeleteDisableLfsForRepo {
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
        }
      }

      namespace PutEnableLfsForRepo {
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
        }

        type Response = $responses.Accepted;
      }

      namespace PostMergeUpstream {
        interface Body {
          /**
           * The name of the branch which should be updated to match upstream.
           */
          branch: string;
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
        }

        type Response = $schemas.MergedUpstream;
      }

      namespace PostMerge {
        interface Body {
          /**
           * The name of the base branch that the head will be merged into.
           */
          base: string;
          /**
           * Commit message to use for the merge commit. If omitted, a default message will be used.
           */
          commit_message?: string;
          /**
           * The head to merge. This can be a branch name or a commit SHA1.
           */
          head: string;
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
        }

        type Response = $schemas.Commit;
      }

      namespace GetLatestPagesBuild {
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
        }

        type Response = $schemas.PageBuild;
      }

      namespace GetPagesBuild {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          build_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.PageBuild;
      }

      namespace GetListPagesBuilds {
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

        type Response = $schemas.PageBuild[];
      }

      namespace PostRequestPagesBuild {
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
        }

        type Response = $schemas.PageBuildStatus;
      }

      namespace PostCreatePagesDeployment {
        interface Body {
          /**
           * The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository.
           */
          artifact_url: string;
          /**
           * The target environment for this GitHub Pages deployment.
           * @default github-pages
           */
          environment?: string;
          /**
           * The OIDC token issued by GitHub Actions certifying the origin of the deployment.
           */
          oidc_token: string;
          /**
           * A unique string that represents the version of the build for this deployment.
           * @default GITHUB_SHA
           */
          pages_build_version: string;
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
        }

        type Response = $schemas.PageDeployment;
      }

      namespace GetPagesHealthCheck {
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
        }

        type Response = $schemas.PagesHealthCheck | $schemas.EmptyObject;
      }

      namespace DeletePagesSite {
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
        }
      }

      namespace GetPages {
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
        }

        type Response = $schemas.Page;
      }

      namespace PostCreatePagesSite {
        type Body = {
          /**
           * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
           */
          build_type?: "legacy" | "workflow";
          /**
           * The source branch and directory used to publish your Pages site.
           */
          source?: {
            /**
             * The repository branch used to publish your site's source files.
             */
            branch: string;
            /**
             * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
             * @default /
             */
            path?: "/" | "/docs";
          };
        } & (
          | {
              source: {
                /**
                 * The repository branch used to publish your site's source files.
                 */
                branch: string;
                /**
                 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
                 * @default /
                 */
                path?: "/" | "/docs";
              };
            }
          | {
              build_type: "legacy" | "workflow";
            }
        );

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
        }

        type Response = $schemas.Page;
      }

      namespace PutUpdateInformationAboutPagesSite {
        type Body = {
          /**
           * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
           */
          build_type?: "legacy" | "workflow";
          /**
           * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
           */
          cname?: string;
          /**
           * Specify whether HTTPS should be enforced for the repository.
           */
          https_enforced?: boolean;
          source?:
            | ("gh-pages" | "master" | "master /docs")
            | {
                /**
                 * The repository branch used to publish your site's source files.
                 */
                branch: string;
                /**
                 * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
                 */
                path: "/" | "/docs";
              };
        } & (
          | {
              build_type: "legacy" | "workflow";
            }
          | {
              source:
                | ("gh-pages" | "master" | "master /docs")
                | {
                    /**
                     * The repository branch used to publish your site's source files.
                     */
                    branch: string;
                    /**
                     * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
                     */
                    path: "/" | "/docs";
                  };
            }
          | {
              cname: string;
            }
          | {
              public: any;
            }
          | {
              https_enforced: boolean;
            }
        );

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
        }
      }

      namespace GetReadmeInDirectory {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The alternate path to look for a README file
           */
          dir: string;
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
           * The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
           */
          ref?: string;
        }

        type Response = $schemas.ContentFile;
      }

      namespace GetReadme {
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
        }

        interface QueryParams {
          /**
           * The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)
           */
          ref?: string;
        }

        type Response = $schemas.ContentFile;
      }

      namespace DeleteReleaseAsset {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the asset.
           */
          asset_id: number;
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

      namespace GetReleaseAsset {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the asset.
           */
          asset_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ReleaseAsset;
      }

      namespace PatchUpdateReleaseAsset {
        interface Body {
          /**
           * An alternate short description of the asset. Used in place of the filename.
           */
          label?: string;
          /**
           * The file name of the asset.
           */
          name?: string;
          state?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the asset.
           */
          asset_id: number;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.ReleaseAsset;
      }

      namespace PostGenerateReleaseNotes {
        interface Body {
          /**
           * Specifies a path to a file in the repository containing configuration settings used for generating the release notes. If unspecified, the configuration file located in the repository at '.github/release.yml' or '.github/release.yaml' will be used. If that is not present, the default configuration will be used.
           */
          configuration_file_path?: string;
          /**
           * The name of the previous tag to use as the starting point for the release notes. Use to manually specify the range for the set of changes considered as part this release.
           */
          previous_tag_name?: string;
          /**
           * The tag name for the release. This can be an existing tag or a new one.
           */
          tag_name: string;
          /**
           * Specifies the commitish value that will be the target for the release's tag. Required if the supplied tag_name does not reference an existing tag. Ignored if the tag_name already exists.
           */
          target_commitish?: string;
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
        }

        type Response = $schemas.ReleaseNotesContent;
      }

      namespace GetLatestRelease {
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
        }

        type Response = $schemas.Release;
      }

      namespace GetReleaseByTag {
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
           * tag parameter
           */
          tag: string;
        }

        type Response = $schemas.Release;
      }

      namespace GetListReleaseAssets {
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

        type Response = $schemas.ReleaseAsset[];
      }

      namespace PostUploadReleaseAsset {
        type Body = ArrayBuffer | ArrayBufferView | Blob | Buffer | File;

        interface Headers {
          "Content-Type"?: "application/octet-stream" | string;
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
          label?: string;
          name: string;
        }

        type Response = $schemas.ReleaseAsset;
      }

      namespace DeleteRelease {
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
      }

      namespace GetRelease {
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

        type Response = $schemas.Release;
      }

      namespace PatchUpdateRelease {
        interface Body {
          /**
           * Text describing the contents of the tag.
           */
          body?: string;
          /**
           * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
           */
          discussion_category_name?: string;
          /**
           * `true` makes the release a draft, and `false` publishes the release.
           */
          draft?: boolean;
          /**
           * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
           * @default true
           */
          make_latest?: "false" | "legacy" | "true";
          /**
           * The name of the release.
           */
          name?: string;
          /**
           * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
           */
          prerelease?: boolean;
          /**
           * The name of the tag.
           */
          tag_name?: string;
          /**
           * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
           */
          target_commitish?: string;
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

        type Response = $schemas.Release;
      }

      namespace GetListReleases {
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

        type Response = $schemas.Release[];
      }

      namespace PostCreateRelease {
        interface Body {
          /**
           * Text describing the contents of the tag.
           */
          body?: string;
          /**
           * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
           */
          discussion_category_name?: string;
          /**
           * `true` to create a draft (unpublished) release, `false` to create a published one.
           */
          draft?: boolean;
          /**
           * Whether to automatically generate the name and body for this release. If `name` is specified, the specified name will be used; otherwise, a name will be automatically generated. If `body` is specified, the body will be pre-pended to the automatically generated notes.
           */
          generate_release_notes?: boolean;
          /**
           * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
           * @default true
           */
          make_latest?: "false" | "legacy" | "true";
          /**
           * The name of the release.
           */
          name?: string;
          /**
           * `true` to identify the release as a prerelease. `false` to identify the release as a full release.
           */
          prerelease?: boolean;
          /**
           * The name of the tag.
           */
          tag_name: string;
          /**
           * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
           */
          target_commitish?: string;
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
        }

        type Response = $schemas.Release;
      }

      namespace GetCodeFrequencyStats {
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
        }

        type Response =
          | $schemas.CodeFrequencyStat[]
          | $responses.Accepted
          | $responses.NoContent;
      }

      namespace GetCommitActivityStats {
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
        }

        type Response =
          | $schemas.CommitActivity[]
          | $responses.Accepted
          | $responses.NoContent;
      }

      namespace GetContributorsStats {
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
        }

        type Response =
          | $schemas.ContributorActivity[]
          | $responses.Accepted
          | $responses.NoContent;
      }

      namespace GetParticipationStats {
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
        }

        type Response = $schemas.ParticipationStats;
      }

      namespace GetPunchCardStats {
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
        }

        type Response = $schemas.CodeFrequencyStat[] | $responses.NoContent;
      }

      namespace PostCreateCommitStatus {
        interface Body {
          /**
           * A string label to differentiate this status from the status of other systems. This field is case-insensitive.
           * @default default
           */
          context?: string;
          /**
           * A short description of the status.
           */
          description?: string;
          /**
           * The state of the status.
           */
          state: "error" | "failure" | "pending" | "success";
          /**
           * The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.
           * For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:
           * `http://ci.example.com/user/repo/build/sha`
           */
          target_url?: string;
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
          sha: string;
        }

        type Response = $schemas.Status;
      }

      namespace DeleteTagProtection {
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
           * The unique identifier of the tag protection.
           */
          tag_protection_id: number;
        }
      }

      namespace GetListTagProtection {
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
        }

        type Response = $schemas.TagProtection[];
      }

      namespace PostCreateTagProtection {
        interface Body {
          /**
           * An optional glob pattern to match against when enforcing tag protection.
           */
          pattern: string;
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
        }

        type Response = $schemas.TagProtection;
      }

      namespace GetListTags {
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

        type Response = $schemas.Tag[];
      }

      namespace GetDownloadTarballArchive {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          ref: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace GetListTeams {
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

      namespace GetAllTopics {
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

        type Response = $schemas.Topic;
      }

      namespace PutReplaceAllTopics {
        interface Body {
          /**
           * An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
           */
          names: string[];
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
        }

        type Response = $schemas.Topic;
      }

      namespace GetClones {
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
        }

        interface QueryParams {
          /**
           * The time frame to display results for.
           * @default day
           */
          per?: "day" | "week";
        }

        type Response = $schemas.CloneTraffic;
      }

      namespace GetTopPaths {
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
        }

        type Response = $schemas.ContentTraffic[];
      }

      namespace GetTopReferrers {
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
        }

        type Response = $schemas.ReferrerTraffic[];
      }

      namespace GetViews {
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
        }

        interface QueryParams {
          /**
           * The time frame to display results for.
           * @default day
           */
          per?: "day" | "week";
        }

        type Response = $schemas.ViewTraffic;
      }

      namespace PostTransfer {
        interface Body {
          /**
           * The new name to be given to the repository.
           */
          new_name?: string;
          /**
           * The username or organization name the repository will be transferred to.
           */
          new_owner: string;
          /**
           * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
           */
          team_ids?: number[];
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
        }

        type Response = $schemas.MinimalRepository;
      }

      namespace DeleteDisableVulnerabilityAlerts {
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
        }
      }

      namespace GetCheckVulnerabilityAlerts {
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
        }
      }

      namespace PutEnableVulnerabilityAlerts {
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
        }
      }

      namespace GetDownloadZipballArchive {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          ref: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }
      }

      namespace DeleteRepos {
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
        }
      }

      namespace GetRepos {
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
        }

        type Response = $schemas.FullRepository;
      }

      namespace PatchUpdate {
        interface Body {
          /**
           * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
           */
          allow_auto_merge?: boolean;
          /**
           * Either `true` to allow private forks, or `false` to prevent private forks.
           */
          allow_forking?: boolean;
          /**
           * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
           * @default true
           */
          allow_merge_commit?: boolean;
          /**
           * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
           * @default true
           */
          allow_rebase_merge?: boolean;
          /**
           * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
           * @default true
           */
          allow_squash_merge?: boolean;
          /**
           * Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.
           */
          allow_update_branch?: boolean;
          /**
           * Whether to archive this repository. `false` will unarchive a previously archived repository.
           */
          archived?: boolean;
          /**
           * Updates the default branch for this repository.
           */
          default_branch?: string;
          /**
           * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
           */
          delete_branch_on_merge?: boolean;
          /**
           * A short description of the repository.
           */
          description?: string;
          /**
           * Either `true` to enable issues for this repository or `false` to disable them.
           * @default true
           */
          has_issues?: boolean;
          /**
           * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
           * @default true
           */
          has_projects?: boolean;
          /**
           * Either `true` to enable the wiki for this repository or `false` to disable it.
           * @default true
           */
          has_wiki?: boolean;
          /**
           * A URL with more information about the repository.
           */
          homepage?: string;
          /**
           * Either `true` to make this repo available as a template repository or `false` to prevent it.
           */
          is_template?: boolean;
          /**
           * The default value for a merge commit message.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `PR_BODY` - default to the pull request's body.
           * - `BLANK` - default to a blank commit message.
           */
          merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
          /**
           * The default value for a merge commit title.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
           */
          merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
          /**
           * The name of the repository.
           */
          name?: string;
          /**
           * Either `true` to make the repository private or `false` to make it public. Default: `false`.
           * **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
           */
          private?: boolean;
          /**
           * Specify which security and analysis features to enable or disable for the repository.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * For example, to enable GitHub Advanced Security, use this data in the body of the `PATCH` request:
           * `{ "security_and_analysis": {"advanced_security": { "status": "enabled" } } }`.
           *
           * You can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.
           */
          security_and_analysis?: {
            /**
             * Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
             */
            advanced_security?: {
              /**
               * Can be `enabled` or `disabled`.
               */
              status?: string;
            };
            /**
             * Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
             */
            secret_scanning?: {
              /**
               * Can be `enabled` or `disabled`.
               */
              status?: string;
            };
            /**
             * Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
             */
            secret_scanning_push_protection?: {
              /**
               * Can be `enabled` or `disabled`.
               */
              status?: string;
            };
          };
          /**
           * The default value for a squash merge commit message:
           *
           * - `PR_BODY` - default to the pull request's body.
           * - `COMMIT_MESSAGES` - default to the branch's commit messages.
           * - `BLANK` - default to a blank commit message.
           */
          squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
          /**
           * The default value for a squash merge commit title:
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
           */
          squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
          /**
           * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
           * @deprecated
           */
          use_squash_pr_title_as_default?: boolean;
          /**
           * The visibility of the repository.
           */
          visibility?: "private" | "public";
          /**
           * Either `true` to require contributors to sign off on web-based commits, or `false` to not require contributors to sign off on web-based commits.
           */
          web_commit_signoff_required?: boolean;
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
        }

        type Response = $schemas.FullRepository;
      }

      namespace PostCreateUsingTemplate {
        interface Body {
          /**
           * A short description of the new repository.
           */
          description?: string;
          /**
           * Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.
           */
          include_all_branches?: boolean;
          /**
           * The name of the new repository.
           */
          name: string;
          /**
           * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
           */
          owner?: string;
          /**
           * Either `true` to create a new private repository or `false` to create a new public one.
           */
          private?: boolean;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          template_owner: string;
          template_repo: string;
        }

        type Response = $schemas.Repository;
      }

      namespace GetListPublic {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * A repository ID. Only return repositories with an ID greater than this ID.
           */
          since?: number;
        }

        type Response = $schemas.MinimalRepository[];
      }

      namespace GetListForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Comma-separated list of values. Can include:
           * `owner`: Repositories that are owned by the authenticated user.
           * `collaborator`: Repositories that the user has been added to as a collaborator.
           * `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
           * @default owner,collaborator,organization_member
           */
          affiliation?: string;
          /**
           * Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          before?: string;
          /**
           * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
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
           * The property to sort the results by.
           * @default full_name
           */
          sort?: "created" | "full_name" | "pushed" | "updated";
          /**
           * Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
           * @default all
           */
          type?: "all" | "member" | "owner" | "private" | "public";
          /**
           * Limit results to repositories with the specified visibility.
           * @default all
           */
          visibility?: "all" | "private" | "public";
        }

        type Response = $schemas.Repository[];
      }

      namespace DeleteDeclineInvitationForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the invitation.
           */
          invitation_id: number;
        }
      }

      namespace PatchAcceptInvitationForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the invitation.
           */
          invitation_id: number;
        }
      }

      namespace GetListInvitationsForAuthenticatedUser {
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

        type Response = $schemas.RepositoryInvitation[];
      }

      namespace PostCreateForAuthenticatedUser {
        interface Body {
          /**
           * Whether to allow Auto-merge to be used on pull requests.
           */
          allow_auto_merge?: boolean;
          /**
           * Whether to allow merge commits for pull requests.
           * @default true
           */
          allow_merge_commit?: boolean;
          /**
           * Whether to allow rebase merges for pull requests.
           * @default true
           */
          allow_rebase_merge?: boolean;
          /**
           * Whether to allow squash merges for pull requests.
           * @default true
           */
          allow_squash_merge?: boolean;
          /**
           * Whether the repository is initialized with a minimal README.
           */
          auto_init?: boolean;
          /**
           * Whether to delete head branches when pull requests are merged
           */
          delete_branch_on_merge?: boolean;
          /**
           * A short description of the repository.
           */
          description?: string;
          /**
           * The desired language or platform to apply to the .gitignore.
           */
          gitignore_template?: string;
          /**
           * Whether discussions are enabled.
           */
          has_discussions?: boolean;
          /**
           * Whether downloads are enabled.
           * @default true
           */
          has_downloads?: boolean;
          /**
           * Whether issues are enabled.
           * @default true
           */
          has_issues?: boolean;
          /**
           * Whether projects are enabled.
           * @default true
           */
          has_projects?: boolean;
          /**
           * Whether the wiki is enabled.
           * @default true
           */
          has_wiki?: boolean;
          /**
           * A URL with more information about the repository.
           */
          homepage?: string;
          /**
           * Whether this repository acts as a template that can be used to generate new repositories.
           */
          is_template?: boolean;
          /**
           * The license keyword of the open source license for this repository.
           */
          license_template?: string;
          /**
           * The default value for a merge commit message.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `PR_BODY` - default to the pull request's body.
           * - `BLANK` - default to a blank commit message.
           */
          merge_commit_message?: "BLANK" | "PR_BODY" | "PR_TITLE";
          /**
           * The default value for a merge commit title.
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
           */
          merge_commit_title?: "MERGE_MESSAGE" | "PR_TITLE";
          /**
           * The name of the repository.
           */
          name: string;
          /**
           * Whether the repository is private.
           */
          private?: boolean;
          /**
           * The default value for a squash merge commit message:
           *
           * - `PR_BODY` - default to the pull request's body.
           * - `COMMIT_MESSAGES` - default to the branch's commit messages.
           * - `BLANK` - default to a blank commit message.
           */
          squash_merge_commit_message?: "BLANK" | "COMMIT_MESSAGES" | "PR_BODY";
          /**
           * The default value for a squash merge commit title:
           *
           * - `PR_TITLE` - default to the pull request's title.
           * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
           */
          squash_merge_commit_title?: "COMMIT_OR_PR_TITLE" | "PR_TITLE";
          /**
           * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
           */
          team_id?: number;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Repository;
      }

      namespace GetListForUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        interface QueryParams {
          /**
           * The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
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
           * The property to sort the results by.
           * @default full_name
           */
          sort?: "created" | "full_name" | "pushed" | "updated";
          /**
           * Limit results to repositories of the specified type.
           * @default owner
           */
          type?: "all" | "member" | "owner";
        }

        type Response = $schemas.MinimalRepository[];
      }
    }
  }
}
