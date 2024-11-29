declare namespace API {
  namespace WordpressV2Json {
    namespace Templates {
      namespace GetWpV2Lookup {
        interface QueryParams {
          /**
           * Indicates if a template is custom or part of the template hierarchy
           */
          is_custom?: boolean;
          /**
           * The slug of the template to get the fallback for
           */
          slug: string;
          /**
           * The template prefix for the created template. This is used to extract the main template type, e.g. in `taxonomy-books` extracts the `taxonomy`
           */
          template_prefix?: string;
        }
      }

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
           * The ID for the author of the template.
           */
          author?: number | string;
          /**
           * Content of template.
           */
          content?: string;
          /**
           * Description of template.
           */
          description?: string;
          /**
           * The ID for the parent of the autosave.
           */
          parent?: number | string;
          /**
           * Unique slug identifying the template.
           */
          slug?: string;
          /**
           * Status of template.
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
           * Theme identifier for the template.
           */
          theme?: string;
          /**
           * Title of template.
           */
          title?: string;
          /**
           * Type of template.
           */
          type?: string;
        }

        interface PathParams {
          id: number | string;
        }
      }

      namespace DeleteWpV2Id {
        interface PathParams {
          /**
           * The id of a template
           */
          id: string;
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
           * The id of a template
           */
          id: string;
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
           * The id of a template
           */
          id: string;
        }

        interface QueryParams {
          /**
           * The ID for the author of the template.
           */
          author?: number | string;
          /**
           * Content of template.
           */
          content?: string;
          /**
           * Description of template.
           */
          description?: string;
          /**
           * Unique slug identifying the template.
           */
          slug?: string;
          /**
           * Status of template.
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
           * Theme identifier for the template.
           */
          theme?: string;
          /**
           * Title of template.
           */
          title?: string;
          /**
           * Type of template.
           */
          type?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * The ID for the author of the template.
           */
          author?: number | string;
          /**
           * Content of template.
           */
          content?: string;
          /**
           * Description of template.
           */
          description?: string;
          /**
           * Unique slug identifying the template.
           */
          slug?: string;
          /**
           * Status of template.
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
           * Theme identifier for the template.
           */
          theme?: string;
          /**
           * Title of template.
           */
          title?: string;
          /**
           * Type of template.
           */
          type?: string;
        }

        interface PathParams {
          /**
           * The id of a template
           */
          id: string;
        }
      }

      namespace PutWpV2Id {
        interface PathParams {
          /**
           * The id of a template
           */
          id: string;
        }

        interface QueryParams {
          /**
           * The ID for the author of the template.
           */
          author?: number | string;
          /**
           * Content of template.
           */
          content?: string;
          /**
           * Description of template.
           */
          description?: string;
          /**
           * Unique slug identifying the template.
           */
          slug?: string;
          /**
           * Status of template.
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
           * Theme identifier for the template.
           */
          theme?: string;
          /**
           * Title of template.
           */
          title?: string;
          /**
           * Type of template.
           */
          type?: string;
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
           * Limit to the specified template part area.
           */
          area?: string;
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * Post type to get the templates for.
           */
          post_type?: string;
          /**
           * Limit to the specified post id.
           */
          wp_id?: number | string;
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * The ID for the author of the template.
           */
          author?: number | string;
          /**
           * Content of template.
           */
          content?: string;
          /**
           * Description of template.
           */
          description?: string;
          /**
           * Unique slug identifying the template.
           */
          slug: string;
          /**
           * Status of template.
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
           * Theme identifier for the template.
           */
          theme?: string;
          /**
           * Title of template.
           */
          title?: string;
          /**
           * Type of template.
           */
          type?: string;
        }
      }
    }
  }
}
