declare namespace API {
  namespace GithubV3Json {
    namespace Users {
      namespace DeleteUnblock {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetCheckBlocked {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutBlock {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListBlockedByAuthenticatedUser {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace PatchSetPrimaryEmailVisibilityForAuthenticatedUser {
        interface Body {
          /**
           * Denotes whether an email is publicly visible.
           */
          visibility: "private" | "public";
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Email[];
      }

      namespace DeleteEmailForAuthenticatedUser {
        type Body =
          | {
              /**
               * Email addresses associated with the GitHub user account.
               */
              emails: string[];
            }
          | string[]
          | string;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace GetListEmailsForAuthenticatedUser {
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

        type Response = $schemas.Email[];
      }

      namespace PostAddEmailForAuthenticatedUser {
        type Body =
          | {
              /**
               * Adds one or more email addresses to your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
               */
              emails: string[];
            }
          | string[]
          | string;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Email[];
      }

      namespace GetListFollowersForAuthenticatedUser {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteUnfollow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetCheckPersonIsFollowedByAuthenticated {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutFollow {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListFollowedByAuthenticatedUser {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace DeleteGpgKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the GPG key.
           */
          gpg_key_id: number;
        }
      }

      namespace GetGpgKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the GPG key.
           */
          gpg_key_id: number;
        }

        type Response = $schemas.GpgKey;
      }

      namespace GetListGpgKeysForAuthenticatedUser {
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

        type Response = $schemas.GpgKey[];
      }

      namespace PostCreateGpgKeyForAuthenticatedUser {
        interface Body {
          /**
           * A GPG key in ASCII-armored format.
           */
          armored_public_key: string;
          /**
           * A descriptive name for the new key.
           */
          name?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.GpgKey;
      }

      namespace DeletePublicSshKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the key.
           */
          key_id: number;
        }
      }

      namespace GetPublicSshKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the key.
           */
          key_id: number;
        }

        type Response = $schemas.Key;
      }

      namespace GetListPublicSshKeysForAuthenticatedUser {
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

        type Response = $schemas.Key[];
      }

      namespace PostCreatePublicSshKeyForAuthenticatedUser {
        interface Body {
          /**
           * The public SSH key to add to your GitHub account.
           */
          key: string;
          /**
           * A descriptive name for the new key.
           */
          title?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Key;
      }

      namespace GetListPublicEmailsForAuthenticatedUser {
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

        type Response = $schemas.Email[];
      }

      namespace DeleteSshSigningKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the SSH signing key.
           */
          ssh_signing_key_id: number;
        }
      }

      namespace GetSshSigningKeyForAuthenticatedUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The unique identifier of the SSH signing key.
           */
          ssh_signing_key_id: number;
        }

        type Response = $schemas.SshSigningKey;
      }

      namespace GetListSshSigningKeysForAuthenticatedUser {
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

        type Response = $schemas.SshSigningKey[];
      }

      namespace PostCreateSshSigningKeyForAuthenticatedUser {
        interface Body {
          /**
           * The public SSH key to add to your GitHub account. For more information, see "[Checking for existing SSH keys](https://docs.github.com/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)."
           */
          key: string;
          /**
           * A descriptive name for the new key.
           */
          title?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.SshSigningKey;
      }

      namespace GetAuthenticated {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.PrivateUser | $schemas.PublicUser;
      }

      namespace PatchUpdateAuthenticated {
        interface Body {
          /**
           * The new short biography of the user.
           */
          bio?: string;
          /**
           * The new blog URL of the user.
           */
          blog?: string;
          /**
           * The new company of the user.
           */
          company?: string;
          /**
           * The publicly visible email address of the user.
           */
          email?: string;
          /**
           * The new hiring availability of the user.
           */
          hireable?: boolean;
          /**
           * The new location of the user.
           */
          location?: string;
          /**
           * The new name of the user.
           */
          name?: string;
          /**
           * The new Twitter username of the user.
           */
          twitter_username?: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.PrivateUser;
      }

      namespace GetListFollowersForUser {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace GetCheckFollowingForUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          target_user: string;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListFollowingForUser {
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

        type Response = $schemas.SimpleUser[];
      }

      namespace GetListGpgKeysForUser {
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

        type Response = $schemas.GpgKey[];
      }

      namespace GetContextForUser {
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
           * Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.
           */
          subject_id?: string;
          /**
           * Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
           */
          subject_type?:
            | "issue"
            | "organization"
            | "pull_request"
            | "repository";
        }

        type Response = $schemas.Hovercard;
      }

      namespace GetListPublicKeysForUser {
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

        type Response = $schemas.KeySimple[];
      }

      namespace GetListSshSigningKeysForUser {
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

        type Response = $schemas.SshSigningKey[];
      }

      namespace GetByUsername {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.PrivateUser | $schemas.PublicUser;
      }

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
           * A user ID. Only return users with an ID greater than this ID.
           */
          since?: number;
        }

        type Response = $schemas.SimpleUser[];
      }
    }
  }
}
