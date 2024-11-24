declare namespace API {
  namespace GithubV3Json {
    namespace Orgs {
      namespace GetList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * An organization ID. Only return organizations with an ID greater than this ID.
           */
          since?: number;
        }

        type Response = $schemas.OrganizationSimple[];
      }

      namespace DeleteUnblockUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetCheckBlockedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutBlockUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListBlockedUsers {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace GetListFailedInvitations {
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

        type Response = $schemas.OrganizationInvitation[];
      }

      namespace GetWebhookConfigForOrg {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the hook.
           */
          hook_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.WebhookConfig;
      }

      namespace PatchUpdateWebhookConfigForOrg {
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.OrgHook;
      }

      namespace PatchUpdateWebhook {
        interface Body {
          /**
           * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
           * @default true
           */
          active?: boolean;
          /**
           * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#update-hook-config-params).
           */
          config?: {
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
            url: $schemas.WebhookConfigUrl;
          };
          /**
           * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
           * @default push
           */
          events?: string[];
          name?: string;
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
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.OrgHook;
      }

      namespace GetListWebhooks {
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

        type Response = $schemas.OrgHook[];
      }

      namespace PostCreateWebhook {
        interface Body {
          /**
           * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
           * @default true
           */
          active?: boolean;
          /**
           * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#create-hook-config-params).
           */
          config: {
            /**
             * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
             */
            content_type?: $schemas.WebhookConfigContentType;
            insecure_ssl?: $schemas.WebhookConfigInsecureSsl;
            password?: string;
            /**
             * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
             */
            secret?: $schemas.WebhookConfigSecret;
            /**
             * The URL to which the payloads will be delivered.
             * @format uri
             */
            url: $schemas.WebhookConfigUrl;
            username?: string;
          };
          /**
           * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. Set to `["*"]` to receive all possible events.
           * @default push
           */
          events?: string[];
          /**
           * Must be passed as "web".
           */
          name: string;
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

        type Response = $schemas.OrgHook;
      }

      namespace GetListAppInstallations {
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

        interface Response {
          installations: $schemas.Installation[];
          total_count: number;
        }
      }

      namespace GetListInvitationTeams {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the invitation.
           */
          invitation_id: number;
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

      namespace DeleteCancelInvitation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the invitation.
           */
          invitation_id: number;
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }
      }

      namespace GetListPendingInvitations {
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
           * Filter invitations by their invitation source.
           * @default all
           */
          invitation_source?: "all" | "member" | "scim";
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
           * Filter invitations by their member role.
           * @default all
           */
          role?:
            | "admin"
            | "all"
            | "billing_manager"
            | "direct_member"
            | "hiring_manager";
        }

        type Response = $schemas.OrganizationInvitation[];
      }

      namespace PostCreateInvitation {
        interface Body {
          /**
           * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
           */
          email?: string;
          /**
           * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
           */
          invitee_id?: number;
          /**
           * The role for the new member.
           * `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.
           * `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.
           * `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
           * @default direct_member
           */
          role?: "admin" | "billing_manager" | "direct_member";
          /**
           * Specify IDs for the teams you want to invite new members to.
           */
          team_ids?: number[];
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

        type Response = $schemas.OrganizationInvitation;
      }

      namespace DeleteRemoveMember {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetCheckMembershipForUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListMembers {
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
           * Filter members returned in the list. `2fa_disabled` means that only members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned. This options is only available for organization owners.
           * @default all
           */
          filter?: "2fa_disabled" | "all";
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
           * Filter members returned by their role.
           * @default all
           */
          role?: "admin" | "all" | "member";
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteRemoveMembershipForUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetMembershipForUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.OrgMembership;
      }

      namespace PutSetMembershipForUser {
        interface Body {
          /**
           * The role to give the user in the organization. Can be one of:
           * `admin` - The user will become an owner of the organization.
           * `member` - The user will become a non-owner member of the organization.
           * @default member
           */
          role?: "admin" | "member";
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
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.OrgMembership;
      }

      namespace DeleteRemoveOutsideCollaborator {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutConvertMemberToOutsideCollaborator {
        interface Body {
          /**
           * When set to `true`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.
           */
          async?: boolean;
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
           * The handle for the GitHub user account.
           */
          username: string;
        }

        interface Response {}
      }

      namespace GetListOutsideCollaborators {
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
           * Filter the list of outside collaborators. `2fa_disabled` means that only outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned.
           * @default all
           */
          filter?: "2fa_disabled" | "all";
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

      namespace DeleteRemovePublicMembershipForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetCheckPublicMembershipForUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutSetPublicMembershipForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListPublicMembers {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteRemoveSecurityManagerTeam {
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

      namespace PutAddSecurityManagerTeam {
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

      namespace GetListSecurityManagerTeams {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.TeamSimple[];
      }

      namespace PostEnableOrDisableSecurityProductOnAllOrgRepos {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The action to take.
           *
           * `enable_all` means to enable the specified security feature for all repositories in the organization.
           * `disable_all` means to disable the specified security feature for all repositories in the organization.
           */
          enablement: "disable_all" | "enable_all";
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The security feature to enable or disable.
           */
          security_product:
            | "advanced_security"
            | "dependabot_alerts"
            | "dependabot_security_updates"
            | "dependency_graph"
            | "secret_scanning"
            | "secret_scanning_push_protection";
        }
      }

      namespace GetOrgs {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.OrganizationFull;
      }

      namespace PatchUpdate {
        interface Body {
          /**
           * Whether GitHub Advanced Security is automatically enabled for new repositories.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
           */
          advanced_security_enabled_for_new_repositories?: boolean;
          /**
           * Billing email address. This address is not publicized.
           */
          billing_email?: string;
          blog?: string;
          /**
           * The company name.
           */
          company?: string;
          /**
           * Default permission level members have for organization repositories.
           * @default read
           */
          default_repository_permission?: "admin" | "none" | "read" | "write";
          /**
           * Whether Dependabot alerts is automatically enabled for new repositories.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
           */
          dependabot_alerts_enabled_for_new_repositories?: boolean;
          /**
           * Whether Dependabot security updates is automatically enabled for new repositories.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
           */
          dependabot_security_updates_enabled_for_new_repositories?: boolean;
          /**
           * Whether dependency graph is automatically enabled for new repositories.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
           */
          dependency_graph_enabled_for_new_repositories?: boolean;
          /**
           * The description of the company.
           */
          description?: string;
          /**
           * The publicly visible email address.
           */
          email?: string;
          /**
           * Whether an organization can use organization projects.
           */
          has_organization_projects?: boolean;
          /**
           * Whether repositories that belong to the organization can use repository projects.
           */
          has_repository_projects?: boolean;
          /**
           * The location.
           */
          location?: string;
          /**
           * Specifies which types of repositories non-admin organization members can create. `private` is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
           * **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
           */
          members_allowed_repository_creation_type?: "all" | "none" | "private";
          /**
           * Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
           */
          members_can_create_internal_repositories?: boolean;
          /**
           * Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.
           * @default true
           */
          members_can_create_pages?: boolean;
          /**
           * Whether organization members can create private GitHub Pages sites. Existing published sites will not be impacted.
           * @default true
           */
          members_can_create_private_pages?: boolean;
          /**
           * Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
           */
          members_can_create_private_repositories?: boolean;
          /**
           * Whether organization members can create public GitHub Pages sites. Existing published sites will not be impacted.
           * @default true
           */
          members_can_create_public_pages?: boolean;
          /**
           * Whether organization members can create public repositories, which are visible to anyone. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
           */
          members_can_create_public_repositories?: boolean;
          /**
           * Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
           * @default true
           */
          members_can_create_repositories?: boolean;
          /**
           * Whether organization members can fork private organization repositories.
           */
          members_can_fork_private_repositories?: boolean;
          /**
           * The shorthand name of the company.
           */
          name?: string;
          /**
           * Whether secret scanning is automatically enabled for new repositories.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
           */
          secret_scanning_enabled_for_new_repositories?: boolean;
          /**
           * If `secret_scanning_push_protection_custom_link_enabled` is true, the URL that will be displayed to contributors who are blocked from pushing a secret.
           */
          secret_scanning_push_protection_custom_link?: string;
          /**
           * Whether a custom link is shown to contributors who are blocked from pushing a secret by push protection.
           */
          secret_scanning_push_protection_custom_link_enabled?: boolean;
          /**
           * Whether secret scanning push protection is automatically enabled for new repositories.
           *
           * To use this parameter, you must have admin permissions for the repository or be an owner or security manager for the organization that owns the repository. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
           *
           * You can check which security and analysis features are currently enabled by using a `GET /orgs/{org}` request.
           */
          secret_scanning_push_protection_enabled_for_new_repositories?: boolean;
          /**
           * The Twitter username of the company.
           */
          twitter_username?: string;
          /**
           * Whether contributors to organization repositories are required to sign off on commits they make through GitHub's web interface.
           */
          web_commit_signoff_required?: boolean;
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

        type Response = $schemas.OrganizationFull;
      }

      namespace GetMembershipForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.OrgMembership;
      }

      namespace PatchUpdateMembershipForAuthenticatedUser {
        interface Body {
          /**
           * The state that the membership should be in. Only `"active"` will be accepted.
           */
          state: "active";
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

        type Response = $schemas.OrgMembership;
      }

      namespace GetListMembershipsForAuthenticatedUser {
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
          /**
           * Indicates the state of the memberships to return. If not specified, the API returns both active and pending memberships.
           */
          state?: "active" | "pending";
        }

        type Response = $schemas.OrgMembership[];
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

        type Response = $schemas.OrganizationSimple[];
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

        type Response = $schemas.OrganizationSimple[];
      }
    }
  }
}
