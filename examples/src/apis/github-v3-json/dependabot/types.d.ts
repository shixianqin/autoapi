declare namespace API {
  namespace GithubV3Json {
    namespace Dependabot {
      namespace GetListAlertsForEnterprise {
        interface PathParams {
          /**
           * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
           */
          enterprise: string;
        }

        interface QueryParams {
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
           */
          after?: string;
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
           */
          before?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
           *
           * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
           */
          ecosystem?: string;
          /**
           * **Deprecated**. The number of results per page (max 100), starting from the first matching result.
           * This parameter must not be used in combination with `last`.
           * Instead, use `per_page` in combination with `after` to fetch the first page of results.
           * @default 30
           * @maximum 100
           * @minimum 1
           */
          first?: number;
          /**
           * **Deprecated**. The number of results per page (max 100), starting from the last matching result.
           * This parameter must not be used in combination with `first`.
           * Instead, use `per_page` in combination with `before` to fetch the last page of results.
           * @maximum 100
           * @minimum 1
           */
          last?: number;
          /**
           * A comma-separated list of package names. If specified, only alerts for these packages will be returned.
           */
          package?: string;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
           */
          scope?: "development" | "runtime";
          /**
           * A comma-separated list of severities. If specified, only alerts with these severities will be returned.
           *
           * Can be: `low`, `medium`, `high`, `critical`
           */
          severity?: string;
          /**
           * The property by which to sort the results.
           * `created` means when the alert was created.
           * `updated` means when the alert's state last changed.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * A comma-separated list of states. If specified, only alerts with these states will be returned.
           *
           * Can be: `dismissed`, `fixed`, `open`
           */
          state?: string;
        }

        type Response = $schemas.DependabotAlertWithRepository[];
      }

      namespace GetListAlertsForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
           */
          after?: string;
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
           */
          before?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
           *
           * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
           */
          ecosystem?: string;
          /**
           * **Deprecated**. The number of results per page (max 100), starting from the first matching result.
           * This parameter must not be used in combination with `last`.
           * Instead, use `per_page` in combination with `after` to fetch the first page of results.
           * @default 30
           * @maximum 100
           * @minimum 1
           */
          first?: number;
          /**
           * **Deprecated**. The number of results per page (max 100), starting from the last matching result.
           * This parameter must not be used in combination with `first`.
           * Instead, use `per_page` in combination with `before` to fetch the last page of results.
           * @maximum 100
           * @minimum 1
           */
          last?: number;
          /**
           * A comma-separated list of package names. If specified, only alerts for these packages will be returned.
           */
          package?: string;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
           */
          scope?: "development" | "runtime";
          /**
           * A comma-separated list of severities. If specified, only alerts with these severities will be returned.
           *
           * Can be: `low`, `medium`, `high`, `critical`
           */
          severity?: string;
          /**
           * The property by which to sort the results.
           * `created` means when the alert was created.
           * `updated` means when the alert's state last changed.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * A comma-separated list of states. If specified, only alerts with these states will be returned.
           *
           * Can be: `dismissed`, `fixed`, `open`
           */
          state?: string;
        }

        type Response = $schemas.DependabotAlertWithRepository[];
      }

      namespace GetOrgPublicKey {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.DependabotPublicKey;
      }

      namespace DeleteRemoveSelectedRepoFromOrgSecret {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace PutAddSelectedRepoToOrgSecret {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          repository_id: number;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetListSelectedReposForOrgSecret {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
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
          repositories: $schemas.MinimalRepository[];
          total_count: number;
        }
      }

      namespace PutSetSelectedReposForOrgSecret {
        interface Body {
          /**
           * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints.
           */
          selected_repository_ids: number[];
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace DeleteOrgSecret {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetOrgSecret {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.OrganizationDependabotSecret;
      }

      namespace PutCreateOrUpdateOrgSecret {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/dependabot#get-an-organization-public-key) endpoint.
           */
          encrypted_value?: string;
          /**
           * ID of the key you used to encrypt the secret.
           */
          key_id?: string;
          /**
           * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints.
           */
          selected_repository_ids?: string[];
          /**
           * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
           */
          visibility: "all" | "private" | "selected";
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
          /**
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListOrgSecrets {
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
          secrets: $schemas.OrganizationDependabotSecret[];
          total_count: number;
        }
      }

      namespace GetAlert {
        interface PathParams {
          /**
           * The number that identifies a Dependabot alert in its repository.
           * You can find this at the end of the URL for a Dependabot alert within GitHub,
           * or in `number` fields in the response from the
           * `GET /repos/{owner}/{repo}/dependabot/alerts` operation.
           */
          alert_number: $schemas.AlertNumber;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DependabotAlert;
      }

      namespace PatchUpdateAlert {
        interface Body {
          /**
           * An optional comment associated with dismissing the alert.
           * @maxLength 280
           */
          dismissed_comment?: string;
          /**
           * **Required when `state` is `dismissed`.** A reason for dismissing the alert.
           */
          dismissed_reason?:
            | "fix_started"
            | "inaccurate"
            | "no_bandwidth"
            | "not_used"
            | "tolerable_risk";
          /**
           * The state of the Dependabot alert.
           * A `dismissed_reason` must be provided when setting the state to `dismissed`.
           */
          state: "dismissed" | "open";
        }

        interface PathParams {
          /**
           * The number that identifies a Dependabot alert in its repository.
           * You can find this at the end of the URL for a Dependabot alert within GitHub,
           * or in `number` fields in the response from the
           * `GET /repos/{owner}/{repo}/dependabot/alerts` operation.
           */
          alert_number: $schemas.AlertNumber;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.DependabotAlert;
      }

      namespace GetListAlertsForRepo {
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
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
           */
          after?: string;
          /**
           * A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
           */
          before?: string;
          /**
           * The direction to sort the results by.
           * @default desc
           */
          direction?: "asc" | "desc";
          /**
           * A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
           *
           * Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
           */
          ecosystem?: string;
          /**
           * **Deprecated**. The number of results per page (max 100), starting from the first matching result.
           * This parameter must not be used in combination with `last`.
           * Instead, use `per_page` in combination with `after` to fetch the first page of results.
           * @default 30
           * @maximum 100
           * @minimum 1
           */
          first?: number;
          /**
           * **Deprecated**. The number of results per page (max 100), starting from the last matching result.
           * This parameter must not be used in combination with `first`.
           * Instead, use `per_page` in combination with `before` to fetch the last page of results.
           * @maximum 100
           * @minimum 1
           */
          last?: number;
          /**
           * A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.
           */
          manifest?: string;
          /**
           * A comma-separated list of package names. If specified, only alerts for these packages will be returned.
           */
          package?: string;
          /**
           * **Deprecated**. Page number of the results to fetch. Use cursor-based pagination with `before` or `after` instead.
           * @default 1
           * @deprecated
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           * @deprecated
           */
          per_page?: number;
          /**
           * The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
           */
          scope?: "development" | "runtime";
          /**
           * A comma-separated list of severities. If specified, only alerts with these severities will be returned.
           *
           * Can be: `low`, `medium`, `high`, `critical`
           */
          severity?: string;
          /**
           * The property by which to sort the results.
           * `created` means when the alert was created.
           * `updated` means when the alert's state last changed.
           * @default created
           */
          sort?: "created" | "updated";
          /**
           * A comma-separated list of states. If specified, only alerts with these states will be returned.
           *
           * Can be: `dismissed`, `fixed`, `open`
           */
          state?: string;
        }

        type Response = $schemas.DependabotAlert[];
      }

      namespace GetRepoPublicKey {
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

        type Response = $schemas.DependabotPublicKey;
      }

      namespace DeleteRepoSecret {
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
           * The name of the secret.
           */
          secret_name: string;
        }
      }

      namespace GetRepoSecret {
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
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.DependabotSecret;
      }

      namespace PutCreateOrUpdateRepoSecret {
        interface Body {
          /**
           * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/dependabot#get-a-repository-public-key) endpoint.
           */
          encrypted_value?: string;
          /**
           * ID of the key you used to encrypt the secret.
           */
          key_id?: string;
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
           * The name of the secret.
           */
          secret_name: string;
        }

        type Response = $schemas.EmptyObject;
      }

      namespace GetListRepoSecrets {
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
          secrets: $schemas.DependabotSecret[];
          total_count: number;
        }
      }
    }
  }
}
