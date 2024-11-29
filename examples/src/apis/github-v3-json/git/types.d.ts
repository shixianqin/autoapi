declare namespace API {
  namespace GithubV3Json {
    namespace Git {
      namespace GetBlob {
        interface PathParams {
          file_sha: string;
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Blob;
      }

      namespace PostCreateBlob {
        interface Body {
          /**
           * The new blob's content.
           */
          content: string;
          /**
           * The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.
           * @default utf-8
           */
          encoding?: string;
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

        type Response = $schemas.ShortBlob;
      }

      namespace GetCommit {
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

        type Response = $schemas.GitCommit;
      }

      namespace PostCreateCommit {
        interface Body {
          /**
           * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
           */
          author?: {
            /**
             * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             * @format date-time
             */
            date?: string;
            /**
             * The email of the author (or committer) of the commit
             */
            email: string;
            /**
             * The name of the author (or committer) of the commit
             */
            name: string;
          };
          /**
           * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
           */
          committer?: {
            /**
             * Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             * @format date-time
             */
            date?: string;
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
           * The commit message
           */
          message: string;
          /**
           * The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
           */
          parents?: string[];
          /**
           * The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.
           */
          signature?: string;
          /**
           * The SHA of the tree object this commit points to
           */
          tree: string;
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

        type Response = $schemas.GitCommit;
      }

      namespace GetListMatchingRefs {
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

        type Response = $schemas.GitRef[];
      }

      namespace GetRef {
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

        type Response = $schemas.GitRef;
      }

      namespace DeleteRef {
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
      }

      namespace PatchUpdateRef {
        interface Body {
          /**
           * Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
           */
          force?: boolean;
          /**
           * The SHA1 value to set this reference to
           */
          sha: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the fully qualified reference to update. For example, `refs/heads/master`. If the value doesn't start with `refs` and have at least two slashes, it will be rejected.
           */
          ref: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.GitRef;
      }

      namespace PostCreateRef {
        interface Body {
          key?: string;
          /**
           * The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
           */
          ref: string;
          /**
           * The SHA1 value for this reference.
           */
          sha: string;
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

        type Response = $schemas.GitRef;
      }

      namespace GetTag {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          tag_sha: string;
        }

        type Response = $schemas.GitTag;
      }

      namespace PostCreateTag {
        interface Body {
          /**
           * The tag message.
           */
          message: string;
          /**
           * The SHA of the git object this is tagging.
           */
          object: string;
          /**
           * The tag's name. This is typically a version (e.g., "v0.0.1").
           */
          tag: string;
          /**
           * An object with information about the individual creating the tag.
           */
          tagger?: {
            /**
             * When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
             * @format date-time
             */
            date?: string;
            /**
             * The email of the author of the tag
             */
            email: string;
            /**
             * The name of the author of the tag
             */
            name: string;
          };
          /**
           * The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.
           */
          type: "blob" | "commit" | "tree";
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

        type Response = $schemas.GitTag;
      }

      namespace GetTree {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
          tree_sha: string;
        }

        interface QueryParams {
          /**
           * Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.
           */
          recursive?: string;
        }

        type Response = $schemas.GitTree;
      }

      namespace PostCreateTree {
        interface Body {
          /**
           * The SHA1 of an existing Git tree object which will be used as the base for the new tree. If provided, a new Git tree object will be created from entries in the Git tree object pointed to by `base_tree` and entries defined in the `tree` parameter. Entries defined in the `tree` parameter will overwrite items from `base_tree` with the same `path`. If you're creating new changes on a branch, then normally you'd set `base_tree` to the SHA1 of the Git tree object of the current latest commit on the branch you're working on.
           * If not provided, GitHub will create a new Git tree object from only the entries defined in the `tree` parameter. If you create a new commit pointing to such a tree, then all files which were a part of the parent commit's tree and were not defined in the `tree` parameter will be listed as deleted by the new commit.
           *
           */
          base_tree?: string;
          /**
           * Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
           */
          tree: Array<{
            /**
             * The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.
             *
             * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
             */
            content?: string;
            /**
             * The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
             */
            mode?: "040000" | "100644" | "100755" | "120000" | "160000";
            /**
             * The file referenced in the tree.
             */
            path?: string;
            /**
             * The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.
             *
             * **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
             */
            sha?: string;
            /**
             * Either `blob`, `tree`, or `commit`.
             */
            type?: "blob" | "commit" | "tree";
          }>;
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

        type Response = $schemas.GitTree;
      }
    }
  }
}
