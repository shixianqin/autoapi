declare namespace API {
  namespace WordpressV2Json {
    namespace Media {
      namespace PostWpV2IdEdit {
        interface FormData {
          /**
           * As a percentage of the image, the height to crop the image to. DEPRECATED: Use `modifiers` instead.
           */
          height?: number;
          /**
           * Array of image edits.
           */
          modifiers?: Array<{}>;
          /**
           * The amount to rotate the image clockwise in degrees. DEPRECATED: Use `modifiers` instead.
           */
          rotation?: number | string;
          /**
           * URL to the edited image file.
           */
          src: string;
          /**
           * As a percentage of the image, the width to crop the image to. DEPRECATED: Use `modifiers` instead.
           */
          width?: number;
          /**
           * As a percentage of the image, the x position to start the crop from. DEPRECATED: Use `modifiers` instead.
           */
          x?: number;
          /**
           * As a percentage of the image, the y position to start the crop from. DEPRECATED: Use `modifiers` instead.
           */
          y?: number;
        }

        interface PathParams {
          id: number | string;
        }
      }

      namespace PostWpV2IdProcess {
        interface FormData {
          action: "create-image-subsizes"[];
        }

        interface PathParams {
          /**
           * Unique identifier for the attachment.
           */
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
           * Alternative text to display when attachment is not displayed.
           */
          alt_text?: string;
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The attachment caption.
           */
          caption?: string;
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The attachment description.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * The ID for the associated post of the attachment.
           */
          post?: number | string;
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
           * Alternative text to display when attachment is not displayed.
           */
          alt_text?: string;
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The attachment caption.
           */
          caption?: string;
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The attachment description.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * The ID for the associated post of the attachment.
           */
          post?: number | string;
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
           * Alternative text to display when attachment is not displayed.
           */
          alt_text?: string;
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The attachment caption.
           */
          caption?: string;
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The attachment description.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * The ID for the associated post of the attachment.
           */
          post?: number | string;
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
           * The theme file to use to display the post.
           */
          template?: string;
          /**
           * The title for the post.
           */
          title?: string;
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
           * Limit result set to attachments of a particular media type.
           */
          media_type?: Array<
            "application" | "audio" | "image" | "text" | "video"
          >;
          /**
           * Limit result set to attachments of a particular MIME type.
           */
          mime_type?: string;
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
           * Limit result set to items with particular parent IDs.
           */
          parent?: number[];
          /**
           * Limit result set to all items except those of a particular parent ID.
           */
          parent_exclude?: number[];
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
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * Alternative text to display when attachment is not displayed.
           */
          alt_text?: string;
          /**
           * The ID for the author of the post.
           */
          author?: number | string;
          /**
           * The attachment caption.
           */
          caption?: string;
          /**
           * Whether or not comments are open on the post.
           */
          comment_status?: Array<"closed" | "open">;
          /**
           * The date the post was published, in the site's timezone.
           */
          date?: string;
          /**
           * The date the post was published, as GMT.
           */
          date_gmt?: string;
          /**
           * The attachment description.
           */
          description?: string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * Whether or not the post can be pinged.
           */
          ping_status?: Array<"closed" | "open">;
          /**
           * The ID for the associated post of the attachment.
           */
          post?: number | string;
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
