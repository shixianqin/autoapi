declare namespace API {
  namespace GithubV3Json {
    namespace Apps {
      namespace PostCreateFromManifest {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          code: string;
        }

        type Response = $schemas.Integration & {
          client_id: string;
          client_secret: string;
          pem: string;
          webhook_secret: string;
          [P: string]: any;
        };
      }

      namespace GetWebhookConfigForApp {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.WebhookConfig;
      }

      namespace PatchUpdateWebhookConfigForApp {
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

        type Response = $schemas.WebhookConfig;
      }

      namespace PostRedeliverWebhookDelivery {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          delivery_id: number;
        }

        type Response = $responses.Accepted;
      }

      namespace GetWebhookDelivery {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          delivery_id: number;
        }

        type Response = $schemas.HookDelivery;
      }

      namespace GetListWebhookDeliveries {
        interface Headers {
          [P: string]: any;
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

      namespace PostCreateInstallationAccessToken {
        interface Body {
          /**
           * The permissions granted to the user-to-server access token.
           */
          permissions?: $schemas.AppPermissions;
          /**
           * List of repository names that the token should have access to
           */
          repositories?: string[];
          /**
           * List of repository IDs that the token should have access to
           */
          repository_ids?: number[];
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
        }

        type Response = $schemas.InstallationToken;
      }

      namespace DeleteUnsuspendInstallation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
        }
      }

      namespace PutSuspendInstallation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
        }
      }

      namespace DeleteInstallation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
        }
      }

      namespace GetInstallation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
        }

        type Response = $schemas.Installation;
      }

      namespace GetListInstallations {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          outdated?: string;
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

        type Response = $schemas.Installation[];
      }

      namespace GetAuthenticated {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.Integration;
      }

      namespace DeleteAuthorization {
        interface Body {
          /**
           * The OAuth access token used to authenticate to the GitHub API.
           */
          access_token: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The client ID of the GitHub app.
           */
          client_id: string;
        }
      }

      namespace PostScopeToken {
        interface Body {
          /**
           * The access token used to authenticate to the GitHub API.
           */
          access_token: string;
          /**
           * The permissions granted to the user-to-server access token.
           */
          permissions?: $schemas.AppPermissions;
          /**
           * The list of repository names to scope the user-to-server access token to. `repositories` may not be specified if `repository_ids` is specified.
           */
          repositories?: string[];
          /**
           * The list of repository IDs to scope the user-to-server access token to. `repository_ids` may not be specified if `repositories` is specified.
           */
          repository_ids?: number[];
          /**
           * The name of the user or organization to scope the user-to-server access token to. **Required** unless `target_id` is specified.
           */
          target?: string;
          /**
           * The ID of the user or organization to scope the user-to-server access token to. **Required** unless `target` is specified.
           */
          target_id?: number;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The client ID of the GitHub app.
           */
          client_id: string;
        }

        type Response = $schemas.Authorization;
      }

      namespace DeleteToken {
        interface Body {
          /**
           * The OAuth access token used to authenticate to the GitHub API.
           */
          access_token: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The client ID of the GitHub app.
           */
          client_id: string;
        }
      }

      namespace PatchResetToken {
        interface Body {
          /**
           * The access_token of the OAuth application.
           */
          access_token: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The client ID of the GitHub app.
           */
          client_id: string;
        }

        type Response = $schemas.Authorization;
      }

      namespace PostCheckToken {
        interface Body {
          /**
           * The access_token of the OAuth application.
           */
          access_token: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The client ID of the GitHub app.
           */
          client_id: string;
        }

        type Response = $schemas.Authorization;
      }

      namespace GetBySlug {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          app_slug: string;
        }

        type Response = $schemas.Integration;
      }

      namespace GetListReposAccessibleToInstallation {
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

        interface Response {
          repositories: $schemas.Repository[];
          repository_selection?: string;
          total_count: number;
        }
      }

      namespace DeleteRevokeInstallationAccessToken {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace GetSubscriptionPlanForAccount {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * account_id parameter
           */
          account_id: number;
        }

        type Response = $schemas.MarketplacePurchase;
      }

      namespace GetListAccountsForPlan {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the plan.
           */
          plan_id: number;
        }

        interface QueryParams {
          /**
           * To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.
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
           * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
           * @default created
           */
          sort?: "created" | "updated";
        }

        type Response = $schemas.MarketplacePurchase[];
      }

      namespace GetListPlans {
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

        type Response = $schemas.MarketplaceListingPlan[];
      }

      namespace GetSubscriptionPlanForAccountStubbed {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * account_id parameter
           */
          account_id: number;
        }

        type Response = $schemas.MarketplacePurchase;
      }

      namespace GetListAccountsForPlanStubbed {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the plan.
           */
          plan_id: number;
        }

        interface QueryParams {
          /**
           * To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter.
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
           * The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
           * @default created
           */
          sort?: "created" | "updated";
        }

        type Response = $schemas.MarketplacePurchase[];
      }

      namespace GetListPlansStubbed {
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

        type Response = $schemas.MarketplaceListingPlan[];
      }

      namespace GetOrgInstallation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.Installation;
      }

      namespace GetRepoInstallation {
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

        type Response = $schemas.Installation;
      }

      namespace DeleteRemoveRepoFromInstallationForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }
      }

      namespace PutAddRepoToInstallationForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
          /**
           * The unique identifier of the repository.
           */
          repository_id: number;
        }
      }

      namespace GetListInstallationReposForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the installation.
           */
          installation_id: number;
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
          repositories: $schemas.Repository[];
          repository_selection?: string;
          total_count: number;
        }
      }

      namespace GetListInstallationsForAuthenticatedUser {
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

        interface Response {
          installations: $schemas.Installation[];
          total_count: number;
        }
      }

      namespace GetListSubscriptionsForAuthenticatedUserStubbed {
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

        type Response = $schemas.UserMarketplacePurchase[];
      }

      namespace GetListSubscriptionsForAuthenticatedUser {
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

        type Response = $schemas.UserMarketplacePurchase[];
      }

      namespace GetUserInstallation {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.Installation;
      }
    }
  }
}
