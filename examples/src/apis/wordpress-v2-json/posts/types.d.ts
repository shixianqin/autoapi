declare namespace API {
  namespace WordpressV2Json {
    namespace Posts {
      namespace GetWpV2IdAutosaves {
        interface PathParams {
          id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * The ID for the parent of the autosave.
           */
          parent?: number | string;
        }
      }

      namespace PostWpV2IdAutosaves {
        interface FormData {
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The terms assigned to the post in the category taxonomy.
           */
          categories?: number[];
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The content for the post.
           */
          content?: string;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The excerpt for the post.
           */
          excerpt?: string;
          /**
           * The ID of the featured media for the post.
           */
          featured_media?: number | string;
          /**
           * The format for the post.
           */
          format?: Array<
            | "aside"
            | "audio"
            | "chat"
            | "gallery"
            | "image"
            | "link"
            | "quote"
            | "standard"
            | "status"
            | "video"
          >;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The ID for the parent of the autosave.
           */
          parent?: number | string;
          /**
           * A password to protect access to the content and excerpt.
           */
          password?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * An alphanumeric identifier for the post unique to its type.
           */
          slug?: string;
          /**
           * A named status for the post.
           */
          status?: Array<
            | "draft"
            | "failed"
            | "future"
            | "in-progress"
            | "pending"
            | "private"
            | "publish"
          >;
          /**
           * Whether or not the post should be treated as sticky.
           */
          sticky?: boolean;
          /**
           * The terms assigned to the post in the table_tags taxonomy.
           */
          table_tags?: number[];
          /**
           * The terms assigned to the post in the post_tag taxonomy.
           */
          tags?: number[];
          /**
           * The theme file to use to display the post.
           */
          template?: string;
          /**
           * The title for the post.
           */
          title?: string;
        }

        interface PathParams {
          id: number | string;
        }
      }

      namespace DeleteWpV2Id {
        interface PathParams {
          /**
           * Unique identifier for the post.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Whether to bypass Trash and force deletion.
           */
          force?: boolean;
        }
      }

      namespace GetWpV2Id {
        interface PathParams {
          /**
           * Unique identifier for the post.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * The password for the post if it is password protected.
           */
          password?: string;
        }
      }

      namespace PatchWpV2Id {
        interface PathParams {
          /**
           * Unique identifier for the post.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The terms assigned to the post in the category taxonomy.
           */
          categories?: number[];
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The content for the post.
           */
          content?: string;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The excerpt for the post.
           */
          excerpt?: string;
          /**
           * The ID of the featured media for the post.
           */
          featured_media?: number | string;
          /**
           * The format for the post.
           */
          format?: Array<
            | "aside"
            | "audio"
            | "chat"
            | "gallery"
            | "image"
            | "link"
            | "quote"
            | "standard"
            | "status"
            | "video"
          >;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * A password to protect access to the content and excerpt.
           */
          password?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * An alphanumeric identifier for the post unique to its type.
           */
          slug?: string;
          /**
           * A named status for the post.
           */
          status?: Array<
            | "draft"
            | "failed"
            | "future"
            | "in-progress"
            | "pending"
            | "private"
            | "publish"
          >;
          /**
           * Whether or not the post should be treated as sticky.
           */
          sticky?: boolean;
          /**
           * The terms assigned to the post in the table_tags taxonomy.
           */
          table_tags?: number[];
          /**
           * The terms assigned to the post in the post_tag taxonomy.
           */
          tags?: number[];
          /**
           * The theme file to use to display the post.
           */
          template?: string;
          /**
           * The title for the post.
           */
          title?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The terms assigned to the post in the category taxonomy.
           */
          categories?: number[];
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The content for the post.
           */
          content?: string;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The excerpt for the post.
           */
          excerpt?: string;
          /**
           * The ID of the featured media for the post.
           */
          featured_media?: number | string;
          /**
           * The format for the post.
           */
          format?: Array<
            | "aside"
            | "audio"
            | "chat"
            | "gallery"
            | "image"
            | "link"
            | "quote"
            | "standard"
            | "status"
            | "video"
          >;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * A password to protect access to the content and excerpt.
           */
          password?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * An alphanumeric identifier for the post unique to its type.
           */
          slug?: string;
          /**
           * A named status for the post.
           */
          status?: Array<
            | "draft"
            | "failed"
            | "future"
            | "in-progress"
            | "pending"
            | "private"
            | "publish"
          >;
          /**
           * Whether or not the post should be treated as sticky.
           */
          sticky?: boolean;
          /**
           * The terms assigned to the post in the table_tags taxonomy.
           */
          table_tags?: number[];
          /**
           * The terms assigned to the post in the post_tag taxonomy.
           */
          tags?: number[];
          /**
           * The theme file to use to display the post.
           */
          template?: string;
          /**
           * The title for the post.
           */
          title?: string;
        }

        interface PathParams {
          /**
           * Unique identifier for the post.
           */
          id: number | string;
        }
      }

      namespace PutWpV2Id {
        interface PathParams {
          /**
           * Unique identifier for the post.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The terms assigned to the post in the category taxonomy.
           */
          categories?: number[];
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The content for the post.
           */
          content?: string;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The excerpt for the post.
           */
          excerpt?: string;
          /**
           * The ID of the featured media for the post.
           */
          featured_media?: number | string;
          /**
           * The format for the post.
           */
          format?: Array<
            | "aside"
            | "audio"
            | "chat"
            | "gallery"
            | "image"
            | "link"
            | "quote"
            | "standard"
            | "status"
            | "video"
          >;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * A password to protect access to the content and excerpt.
           */
          password?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * An alphanumeric identifier for the post unique to its type.
           */
          slug?: string;
          /**
           * A named status for the post.
           */
          status?: Array<
            | "draft"
            | "failed"
            | "future"
            | "in-progress"
            | "pending"
            | "private"
            | "publish"
          >;
          /**
           * Whether or not the post should be treated as sticky.
           */
          sticky?: boolean;
          /**
           * The terms assigned to the post in the table_tags taxonomy.
           */
          table_tags?: number[];
          /**
           * The terms assigned to the post in the post_tag taxonomy.
           */
          tags?: number[];
          /**
           * The theme file to use to display the post.
           */
          template?: string;
          /**
           * The title for the post.
           */
          title?: string;
        }
      }

      namespace GetWpV2ParentRevisions {
        interface PathParams {
          /**
           * The ID for the parent of the revision.
           */
          parent: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Ensure result set excludes specific IDs.
           */
          exclude?: number[];
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
           * Sort collection by object attribute.
           */
          orderby?: Array<
            | "date"
            | "id"
            | "include"
            | "include_slugs"
            | "relevance"
            | "slug"
            | "title"
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
           * Limit results to those matching a string.
           */
          search?: string;
        }
      }

      namespace GetWpV2Parent {
        interface PathParams {
          /**
           * The ID for the parent of the autosave.
           */
          parent: number | string;
        }

        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * The ID for the autosave.
           */
          id?: number | string;
        }
      }

      namespace GetWpV2 {
        interface QueryParams {
          /**
           * Limit response to posts published after a given ISO8601 compliant date.
           */
          after?: string;
          /**
           * Limit result set to posts assigned to specific authors.
           */
          author?: number[];
          /**
           * Ensure result set excludes posts assigned to specific authors.
           */
          author_exclude?: number[];
          /**
           * Limit response to posts published before a given ISO8601 compliant date.
           */
          before?: string;
          /**
           * Limit result set to items with specific terms assigned in the categories taxonomy.
           */
          categories?: string;
          /**
           * Limit result set to items except those with specific terms assigned in the categories taxonomy.
           */
          categories_exclude?: string;
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Ensure result set excludes specific IDs.
           */
          exclude?: number[];
          /**
           * Limit result set to specific IDs.
           */
          include?: number[];
          /**
           * Limit response to posts modified after a given ISO8601 compliant date.
           */
          modified_after?: string;
          /**
           * Limit response to posts modified before a given ISO8601 compliant date.
           */
          modified_before?: string;
          /**
           * Offset the result set by a specific number of items.
           */
          offset?: number | string;
          /**
           * Order sort attribute ascending or descending.
           */
          order?: Array<"asc" | "desc">;
          /**
           * Sort collection by post attribute.
           */
          orderby?: Array<
            | "author"
            | "date"
            | "id"
            | "include"
            | "include_slugs"
            | "modified"
            | "parent"
            | "relevance"
            | "slug"
            | "title"
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
           * Limit results to those matching a string.
           */
          search?: string;
          /**
           * Array of column names to be searched.
           */
          search_columns?: string[];
          /**
           * Limit result set to posts with one or more specific slugs.
           */
          slug?: string[];
          /**
           * Limit result set to posts assigned one or more statuses.
           */
          status?: string[];
          /**
           * Limit result set to items that are sticky.
           */
          sticky?: boolean;
          /**
           * Limit result set to items with specific terms assigned in the table_tags taxonomy.
           */
          table_tags?: string;
          /**
           * Limit result set to items except those with specific terms assigned in the table_tags taxonomy.
           */
          table_tags_exclude?: string;
          /**
           * Limit result set to items with specific terms assigned in the tags taxonomy.
           */
          tags?: string;
          /**
           * Limit result set to items except those with specific terms assigned in the tags taxonomy.
           */
          tags_exclude?: string;
          /**
           * Limit result set based on relationship between multiple taxonomies.
           */
          tax_relation?: Array<"AND" | "OR">;
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The terms assigned to the post in the category taxonomy.
           */
          categories?: number[];
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The content for the post.
           */
          content?: string;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The excerpt for the post.
           */
          excerpt?: string;
          /**
           * The ID of the featured media for the post.
           */
          featured_media?: number | string;
          /**
           * The format for the post.
           */
          format?: Array<
            | "aside"
            | "audio"
            | "chat"
            | "gallery"
            | "image"
            | "link"
            | "quote"
            | "standard"
            | "status"
            | "video"
          >;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * A password to protect access to the content and excerpt.
           */
          password?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * An alphanumeric identifier for the post unique to its type.
           */
          slug?: string;
          /**
           * A named status for the post.
           */
          status?: Array<
            | "draft"
            | "failed"
            | "future"
            | "in-progress"
            | "pending"
            | "private"
            | "publish"
          >;
          /**
           * Whether or not the post should be treated as sticky.
           */
          sticky?: boolean;
          /**
           * The terms assigned to the post in the table_tags taxonomy.
           */
          table_tags?: number[];
          /**
           * The terms assigned to the post in the post_tag taxonomy.
           */
          tags?: number[];
          /**
           * The theme file to use to display the post.
           */
          template?: string;
          /**
           * The title for the post.
           */
          title?: string;
        }
      }
    }
  }
}
