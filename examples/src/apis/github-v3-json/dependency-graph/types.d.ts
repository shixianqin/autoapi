declare namespace API {
  namespace GithubV3Json {
    namespace DependencyGraph {
      namespace GetDiffRange {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format `{base}...{head}`.
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
           * The full path, relative to the repository root, of the dependency manifest file.
           */
          name?: string;
        }

        type Response = $schemas.DependencyGraphDiff;
      }

      namespace PostCreateRepositorySnapshot {
        type Body = $schemas.Snapshot;

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

        interface Response {
          /**
           * The time at which the snapshot was created.
           */
          created_at: string;
          /**
           * ID of the created snapshot.
           */
          id: number;
          /**
           * A message providing further details about the result, such as why the dependencies were not updated.
           */
          message: string;
          /**
           * Either "SUCCESS", "ACCEPTED", or "INVALID". "SUCCESS" indicates that the snapshot was successfully created and the repository's dependencies were updated. "ACCEPTED" indicates that the snapshot was successfully created, but the repository's dependencies were not updated. "INVALID" indicates that the snapshot was malformed.
           */
          result: string;
        }
      }
    }
  }
}
