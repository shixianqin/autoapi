declare namespace API {
  namespace GithubV3Json {
    namespace Search {
      namespace GetCode {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
           * @default desc
           */
          order?: "asc" | "desc";
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
           * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching code](https://docs.github.com/search-github/searching-on-github/searching-code)" for a detailed list of qualifiers.
           */
          q: string;
          /**
           * Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
           */
          sort?: "indexed";
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.CodeSearchResultItem[];
          total_count: number;
        }
      }

      namespace GetCommits {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
           * @default desc
           */
          order?: "asc" | "desc";
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
           * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching commits](https://docs.github.com/search-github/searching-on-github/searching-commits)" for a detailed list of qualifiers.
           */
          q: string;
          /**
           * Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
           */
          sort?: "author-date" | "committer-date";
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.CommitSearchResultItem[];
          total_count: number;
        }
      }

      namespace GetIssuesAndPullRequests {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
           * @default desc
           */
          order?: "asc" | "desc";
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
           * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching issues and pull requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)" for a detailed list of qualifiers.
           */
          q: string;
          /**
           * Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
           */
          sort?:
            | "comments"
            | "created"
            | "interactions"
            | "reactions"
            | "reactions-+1"
            | "reactions--1"
            | "reactions-heart"
            | "reactions-smile"
            | "reactions-tada"
            | "reactions-thinking_face"
            | "updated";
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.IssueSearchResultItem[];
          total_count: number;
        }
      }

      namespace GetLabels {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
           * @default desc
           */
          order?: "asc" | "desc";
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
           * The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).
           */
          q: string;
          /**
           * The id of the repository.
           */
          repository_id: number;
          /**
           * Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
           */
          sort?: "created" | "updated";
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.LabelSearchResultItem[];
          total_count: number;
        }
      }

      namespace GetRepos {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
           * @default desc
           */
          order?: "asc" | "desc";
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
           * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
           */
          q: string;
          /**
           * Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
           */
          sort?: "forks" | "help-wanted-issues" | "stars" | "updated";
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.RepoSearchResultItem[];
          total_count: number;
        }
      }

      namespace GetTopics {
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
           * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).
           */
          q: string;
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.TopicSearchResultItem[];
          total_count: number;
        }
      }

      namespace GetUsers {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
           * @default desc
           */
          order?: "asc" | "desc";
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
           * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching users](https://docs.github.com/search-github/searching-on-github/searching-users)" for a detailed list of qualifiers.
           */
          q: string;
          /**
           * Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
           */
          sort?: "followers" | "joined" | "repositories";
        }

        interface Response {
          incomplete_results: boolean;
          items: $schemas.UserSearchResultItem[];
          total_count: number;
        }
      }
    }
  }
}
