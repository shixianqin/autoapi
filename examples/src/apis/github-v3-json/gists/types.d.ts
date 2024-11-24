declare namespace API {
  namespace GithubV3Json {
    namespace Gists {
      namespace GetListPublic {
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
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
        }

        type Response = $schemas.BaseGist[];
      }

      namespace GetListStarred {
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
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
        }

        type Response = $schemas.BaseGist[];
      }

      namespace DeleteComment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the comment.
           */
          comment_id: number;
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }
      }

      namespace GetComment {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the comment.
           */
          comment_id: number;
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }

        type Response = $schemas.GistComment;
      }

      namespace PatchUpdateComment {
        interface Body {
          /**
           * The comment text.
           * @maxLength 65535
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
           * The unique identifier of the gist.
           */
          gist_id: string;
        }

        type Response = $schemas.GistComment;
      }

      namespace GetListComments {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
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

        type Response = $schemas.GistComment[];
      }

      namespace PostCreateComment {
        interface Body {
          /**
           * The comment text.
           * @maxLength 65535
           */
          body: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }

        type Response = $schemas.GistComment;
      }

      namespace GetListCommits {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
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

        type Response = $schemas.GistCommit[];
      }

      namespace GetListForks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
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

        type Response = $schemas.GistSimple[];
      }

      namespace PostFork {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }

        type Response = $schemas.BaseGist;
      }

      namespace DeleteUnstar {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }
      }

      namespace GetCheckIsStarred {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }
      }

      namespace PutStar {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }
      }

      namespace GetRevision {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
          sha: string;
        }

        type Response = $schemas.GistSimple;
      }

      namespace DeleteGists {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }
      }

      namespace GetGists {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }

        type Response = $schemas.GistSimple;
      }

      namespace PatchUpdate {
        type Body = {
          /**
           * The description of the gist.
           */
          description?: string;
          /**
           * The gist files to be updated, renamed, or deleted. Each `key` must match the current filename
           * (including extension) of the targeted gist file. For example: `hello.py`.
           *
           * To delete a file, set the whole file to null. For example: `hello.py : null`.
           */
          files?: {
            [P: string]: {
              /**
               * The new content of the file.
               */
              content?: string;
              /**
               * The new filename for the file.
               */
              filename?: string;
            } & (
              | {
                  content: string;
                }
              | {
                  filename: string;
                }
            );
          };
        } & (
          | {
              description: string;
            }
          | {
              files: {
                [P: string]: {
                  /**
                   * The new content of the file.
                   */
                  content?: string;
                  /**
                   * The new filename for the file.
                   */
                  filename?: string;
                } & (
                  | {
                      content: string;
                    }
                  | {
                      filename: string;
                    }
                );
              };
            }
        );

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the gist.
           */
          gist_id: string;
        }

        type Response = $schemas.GistSimple;
      }

      namespace GetList {
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
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
        }

        type Response = $schemas.BaseGist[];
      }

      namespace PostCreate {
        interface Body {
          /**
           * Description of the gist
           */
          description?: string;
          /**
           * Names and content for the files that make up the gist
           */
          files: {
            [P: string]: {
              /**
               * Content of the file
               */
              content: string;
            };
          };
          public?: boolean | ("false" | "true");
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.GistSimple;
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
          /**
           * Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
           * @format date-time
           */
          since?: string;
        }

        type Response = $schemas.BaseGist[];
      }
    }
  }
}
