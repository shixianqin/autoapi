declare namespace API {
  namespace WordpressV2Json {
    namespace MenuItems {
      namespace GetWpV2IdAutosaves {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

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
           * Text for the title attribute of the link element for this menu item.
           */
          attr_title?: string;
          /**
           * Class names for the link element of this menu item.
           */
          classes?: string[];
          /**
           * The description of this menu item.
           */
          description?: string;
          /**
           * The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.
           */
          menu_order?: number | string;
          /**
           * The terms assigned to the object in the nav_menu taxonomy.
           */
          menus?: number | string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The type of object originally represented, such as "category", "post", or "attachment".
           */
          object?: string;
          /**
           * The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.
           */
          object_id?: number | string;
          /**
           * The ID for the parent of the object.
           */
          parent?: number | string;
          /**
           * A named status for the object.
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
           * The target attribute of the link element for this menu item.
           */
          target?: Array<"" | "_blank">;
          /**
           * The title for the object.
           */
          title?: string;
          /**
           * The family of objects originally represented, such as "post_type" or "taxonomy".
           */
          type?: Array<
            "custom" | "post_type" | "post_type_archive" | "taxonomy"
          >;
          /**
           * The URL to which this menu item points.
           */
          url?: string;
          /**
           * The XFN relationship expressed in the link of this menu item.
           */
          xfn?: string[];
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          id: number | string;
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
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

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
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Unique identifier for the post.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Text for the title attribute of the link element for this menu item.
           */
          attr_title?: string;
          /**
           * Class names for the link element of this menu item.
           */
          classes?: string[];
          /**
           * The description of this menu item.
           */
          description?: string;
          /**
           * The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.
           */
          menu_order?: number | string;
          /**
           * The terms assigned to the object in the nav_menu taxonomy.
           */
          menus?: number | string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The type of object originally represented, such as "category", "post", or "attachment".
           */
          object?: string;
          /**
           * The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.
           */
          object_id?: number | string;
          /**
           * The ID for the parent of the object.
           */
          parent?: number | string;
          /**
           * A named status for the object.
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
           * The target attribute of the link element for this menu item.
           */
          target?: Array<"" | "_blank">;
          /**
           * The title for the object.
           */
          title?: string;
          /**
           * The family of objects originally represented, such as "post_type" or "taxonomy".
           */
          type?: Array<
            "custom" | "post_type" | "post_type_archive" | "taxonomy"
          >;
          /**
           * The URL to which this menu item points.
           */
          url?: string;
          /**
           * The XFN relationship expressed in the link of this menu item.
           */
          xfn?: string[];
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * Text for the title attribute of the link element for this menu item.
           */
          attr_title?: string;
          /**
           * Class names for the link element of this menu item.
           */
          classes?: string[];
          /**
           * The description of this menu item.
           */
          description?: string;
          /**
           * The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.
           */
          menu_order?: number | string;
          /**
           * The terms assigned to the object in the nav_menu taxonomy.
           */
          menus?: number | string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The type of object originally represented, such as "category", "post", or "attachment".
           */
          object?: string;
          /**
           * The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.
           */
          object_id?: number | string;
          /**
           * The ID for the parent of the object.
           */
          parent?: number | string;
          /**
           * A named status for the object.
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
           * The target attribute of the link element for this menu item.
           */
          target?: Array<"" | "_blank">;
          /**
           * The title for the object.
           */
          title?: string;
          /**
           * The family of objects originally represented, such as "post_type" or "taxonomy".
           */
          type?: Array<
            "custom" | "post_type" | "post_type_archive" | "taxonomy"
          >;
          /**
           * The URL to which this menu item points.
           */
          url?: string;
          /**
           * The XFN relationship expressed in the link of this menu item.
           */
          xfn?: string[];
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
           * Unique identifier for the post.
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
           * Unique identifier for the post.
           */
          id: number | string;
        }

        interface QueryParams {
          /**
           * Text for the title attribute of the link element for this menu item.
           */
          attr_title?: string;
          /**
           * Class names for the link element of this menu item.
           */
          classes?: string[];
          /**
           * The description of this menu item.
           */
          description?: string;
          /**
           * The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.
           */
          menu_order?: number | string;
          /**
           * The terms assigned to the object in the nav_menu taxonomy.
           */
          menus?: number | string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The type of object originally represented, such as "category", "post", or "attachment".
           */
          object?: string;
          /**
           * The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.
           */
          object_id?: number | string;
          /**
           * The ID for the parent of the object.
           */
          parent?: number | string;
          /**
           * A named status for the object.
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
           * The target attribute of the link element for this menu item.
           */
          target?: Array<"" | "_blank">;
          /**
           * The title for the object.
           */
          title?: string;
          /**
           * The family of objects originally represented, such as "post_type" or "taxonomy".
           */
          type?: Array<
            "custom" | "post_type" | "post_type_archive" | "taxonomy"
          >;
          /**
           * The URL to which this menu item points.
           */
          url?: string;
          /**
           * The XFN relationship expressed in the link of this menu item.
           */
          xfn?: string[];
        }
      }

      namespace GetWpV2Parent {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

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
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Limit response to posts published after a given ISO8601 compliant date.
           */
          after?: string;
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
           * Limit result set to posts with a specific menu_order value.
           */
          menu_order?: number | string;
          /**
           * Limit result set to items with specific terms assigned in the menus taxonomy.
           */
          menus?: string;
          /**
           * Limit result set to items except those with specific terms assigned in the menus taxonomy.
           */
          menus_exclude?: string;
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
           * Sort collection by object attribute.
           */
          orderby?: Array<
            | "author"
            | "date"
            | "id"
            | "include"
            | "include_slugs"
            | "menu_order"
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
           * Limit result set based on relationship between multiple taxonomies.
           */
          tax_relation?: Array<"AND" | "OR">;
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * Text for the title attribute of the link element for this menu item.
           */
          attr_title?: string;
          /**
           * Class names for the link element of this menu item.
           */
          classes?: string[];
          /**
           * The description of this menu item.
           */
          description?: string;
          /**
           * The DB ID of the nav_menu_item that is this item's menu parent, if any, otherwise 0.
           */
          menu_order?: number | string;
          /**
           * The terms assigned to the object in the nav_menu taxonomy.
           */
          menus?: number | string;
          /**
           * Meta fields.
           */
          meta?: string;
          /**
           * The type of object originally represented, such as "category", "post", or "attachment".
           */
          object?: string;
          /**
           * The database ID of the original object this menu item represents, for example the ID for posts or the term_id for categories.
           */
          object_id?: number | string;
          /**
           * The ID for the parent of the object.
           */
          parent?: number | string;
          /**
           * A named status for the object.
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
           * The target attribute of the link element for this menu item.
           */
          target?: Array<"" | "_blank">;
          /**
           * The title for the object.
           */
          title?: string;
          /**
           * The family of objects originally represented, such as "post_type" or "taxonomy".
           */
          type?: Array<
            "custom" | "post_type" | "post_type_archive" | "taxonomy"
          >;
          /**
           * The URL to which this menu item points.
           */
          url?: string;
          /**
           * The XFN relationship expressed in the link of this menu item.
           */
          xfn?: string[];
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
