declare namespace API {
  namespace CustomizeParseUnsuccessfulResponses {
    namespace Codespaces {
      namespace GetListInRepositoryForAuthenticatedUser {
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

        type Response = Responses[200];

        interface Responses {
          "200": {
            codespaces: $schemas.Codespace[];
            total_count: number;
          };
          "401": $responses.RequiresAuthentication;
          "403": $responses.Forbidden;
          "404": $responses.NotFound;
          "500": $responses.InternalError;
        }
      }

      namespace PostCreateWithRepoForAuthenticatedUser {
        interface Body {
          /**
           * IP for location auto-detection when proxying a request
           */
          client_ip?: string;
          /**
           * Path to devcontainer.json config to use for this codespace
           */
          devcontainer_path?: string;
          /**
           * Display name for this codespace
           */
          display_name?: string;
          /**
           * Time in minutes before codespace stops from inactivity
           */
          idle_timeout_minutes?: number;
          /**
           * Location for this codespace. Assigned by IP if not provided
           */
          location?: string;
          /**
           * Machine type to use for this codespace
           */
          machine?: string;
          /**
           * Whether to authorize requested permissions from devcontainer.json
           */
          multi_repo_permissions_opt_out?: boolean;
          /**
           * Git ref (typically a branch name) for this codespace
           */
          ref?: string;
          /**
           * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
           */
          retention_period_minutes?: number;
          /**
           * Working directory for this codespace
           */
          working_directory?: string;
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

        type Response = Responses[201] | Responses[202];

        interface Responses {
          "201": $schemas.Codespace;
          "202": $schemas.Codespace;
          "400": $responses.BadRequest;
          "401": $responses.RequiresAuthentication;
          "403": $responses.Forbidden;
          "404": $responses.NotFound;
          "503": $responses.ServiceUnavailable;
        }
      }
    }
  }
}
