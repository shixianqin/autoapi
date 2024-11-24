declare namespace API {
  namespace WordpressV2Json {
    namespace Users {
      namespace DeleteWpV2Me {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Required to be true, as users do not support trashing.
           */
          force?: boolean;
          /**
           * Reassign the deleted user's posts and links to this user ID.
           */
          reassign: number | string;
        }
      }

      namespace GetWpV2Me {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace PatchWpV2Me {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email?: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password?: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username?: string;
        }
      }

      namespace PostWpV2Me {
        interface FormData {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email?: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password?: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username?: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }

      namespace PutWpV2Me {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email?: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password?: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username?: string;
        }
      }

      namespace DeleteWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the user.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Required to be true, as users do not support trashing.
           */
          force?: boolean;
          /**
           * Reassign the deleted user's posts and links to this user ID.
           */
          reassign: number | string;
        }
      }

      namespace GetWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the user.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace PatchWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the user.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email?: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password?: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email?: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password?: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username?: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the user.
           */
          id: number | string;
        }
      }

      namespace PutWpV2Id {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the user.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email?: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password?: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username?: string;
        }
      }

      namespace GetWpV2UserIdApplicationPasswordsIntrospect {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace DeleteWpV2UserIdApplicationPasswords {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }
      }

      namespace GetWpV2UserIdApplicationPasswords {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace PostWpV2UserIdApplicationPasswords {
        interface FormData {
          /**
           * A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
           */
          app_id?: string;
          /**
           * The name of the application password.
           */
          name: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }
      }

      namespace DeleteWpV2UserId {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }
      }

      namespace GetWpV2UserId {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }

      namespace PatchWpV2UserId {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }

        interface QueryParams {
          /**
           * A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
           */
          app_id?: string;
          /**
           * The name of the application password.
           */
          name?: string;
        }
      }

      namespace PostWpV2UserId {
        interface FormData {
          /**
           * A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
           */
          app_id?: string;
          /**
           * The name of the application password.
           */
          name?: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }
      }

      namespace PutWpV2UserId {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          user_id: number | string;
        }

        interface QueryParams {
          /**
           * A UUID provided by the application to uniquely identify it. It is recommended to use an UUID v5 with the URL or DNS namespace.
           */
          app_id?: string;
          /**
           * The name of the application password.
           */
          name?: string;
        }
      }

      namespace GetWpV2 {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Limit result set to users matching at least one specific capability provided. Accepts csv list or single capability.
           */
          capabilities?: string[];
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Ensure result set excludes specific IDs.
           */
          exclude?: number[];
          /**
           * Limit result set to users who have published posts.
           */
          has_published_posts?: boolean;
          /**
           * Limit result set to specific IDs.
           */
          include?: number[];
          /**
           * Offset the result set by a specific number of items.
           */
          offset?: number | string;
          /**
           * Order sort attribute ascending or descending.
           */
          order?: Array<"asc" | "desc">;
          /**
           * Sort collection by user attribute.
           */
          orderby?: Array<
            | "email"
            | "id"
            | "include"
            | "include_slugs"
            | "name"
            | "registered_date"
            | "slug"
            | "url"
          >;
          /**
           * Current page of the collection.
           */
          page?: number | string;
          /**
           * Maximum number of items to be returned in result set.
           */
          per_page?: number | string;
          /**
           * Limit result set to users matching at least one specific role provided. Accepts csv list or single role.
           */
          roles?: string[];
          /**
           * Limit results to those matching a string.
           */
          search?: string;
          /**
           * Limit result set to users with one or more specific slugs.
           */
          slug?: string[];
          /**
           * Limit result set to users who are considered authors.
           */
          who?: "authors"[];
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * Description of the user.
           */
          description?: string;
          /**
           * The email address for the user.
           */
          email: string;
          /**
           * First name for the user.
           */
          first_name?: string;
          /**
           * Last name for the user.
           */
          last_name?: string;
          /**
           * Locale for the user.
           */
          locale?: Array<"" | "en_US" | "zh_CN">;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Display name for the user.
           */
          name?: string;
          /**
           * The nickname for the user.
           */
          nickname?: string;
          /**
           * Password for the user (never included).
           */
          password: string;
          /**
           * Roles assigned to the user.
           */
          roles?: string[];
          /**
           * An alphanumeric identifier for the user.
           */
          slug?: string;
          /**
           * URL of the user.
           */
          url?: string;
          /**
           * Login name for the user.
           */
          username: string;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }
    }
  }
}
