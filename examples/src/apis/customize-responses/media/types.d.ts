declare namespace API {
  namespace CustomizeResponses {
    namespace Media {
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

        type Response = Array<
          | {
              _links?: {
                about?: Array<{
                  href?: string;
                }>;
                author?: Array<{
                  embeddable?: boolean;
                  href?: string;
                }>;
                collection?: Array<{
                  href?: string;
                }>;
                replies?: Array<{
                  embeddable?: boolean;
                  href?: string;
                }>;
                self?: Array<{
                  href?: string;
                  targetHints?: {
                    allow?: string[];
                  };
                }>;
              };
              alt_text?: string;
              author?: number;
              caption?: {
                rendered?: string;
              };
              class_list?: string[];
              comment_status?: string;
              date?: string;
              date_gmt?: string;
              description?: {
                rendered?: string;
              };
              featured_media?: number;
              guid?: {
                rendered?: string;
              };
              id?: number;
              jetpack_sharing_enabled?: boolean;
              jetpack_shortlink?: string;
              link?: string;
              media_details?: {
                file?: string;
                filesize?: number;
                height?: number;
                image_meta?: {
                  aperture?: string;
                  camera?: string;
                  caption?: string;
                  copyright?: string;
                  created_timestamp?: string;
                  credit?: string;
                  focal_length?: string;
                  iso?: string;
                  keywords?: any[];
                  orientation?: string;
                  shutter_speed?: string;
                  title?: string;
                };
                sizes?: {
                  "1536x1536"?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  "2048x2048"?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  full?: {
                    file?: string;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  large?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  medium?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  medium_large?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  thumbnail?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                };
                width?: number;
              };
              media_type?: string;
              meta?: {
                advanced_seo_description?: string;
                jetpack_seo_html_title?: string;
                jetpack_seo_noindex?: boolean;
              };
              mime_type?: string;
              modified?: string;
              modified_gmt?: string;
              ping_status?: string;
              post?: number;
              slug?: string;
              source_url?: string;
              status?: string;
              template?: string;
              title?: {
                rendered?: string;
              };
              type?: string;
            }
          | {
              _links?: {
                about?: Array<{
                  href?: string;
                }>;
                author?: Array<{
                  embeddable?: boolean;
                  href?: string;
                }>;
                collection?: Array<{
                  href?: string;
                }>;
                replies?: Array<{
                  embeddable?: boolean;
                  href?: string;
                }>;
                self?: Array<{
                  href?: string;
                  targetHints?: {
                    allow?: string[];
                  };
                }>;
              };
              alt_text?: string;
              author?: number;
              caption?: {
                rendered?: string;
              };
              class_list?: string[];
              comment_status?: string;
              date?: string;
              date_gmt?: string;
              description?: {
                rendered?: string;
              };
              featured_media?: number;
              guid?: {
                rendered?: string;
              };
              id?: number;
              jetpack_sharing_enabled?: boolean;
              jetpack_shortlink?: string;
              link?: string;
              media_details?: {
                file?: string;
                filesize?: number;
                height?: number;
                image_meta?: {
                  aperture?: string;
                  camera?: string;
                  caption?: string;
                  copyright?: string;
                  created_timestamp?: string;
                  credit?: string;
                  focal_length?: string;
                  iso?: string;
                  keywords?: any[];
                  orientation?: string;
                  shutter_speed?: string;
                  title?: string;
                };
                sizes?: {
                  "1536x1536"?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  full?: {
                    file?: string;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  large?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  medium?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  medium_large?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  thumbnail?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                };
                width?: number;
              };
              media_type?: string;
              meta?: {
                advanced_seo_description?: string;
                jetpack_seo_html_title?: string;
                jetpack_seo_noindex?: boolean;
              };
              mime_type?: string;
              modified?: string;
              modified_gmt?: string;
              ping_status?: string;
              post?: number;
              slug?: string;
              source_url?: string;
              status?: string;
              template?: string;
              title?: {
                rendered?: string;
              };
              type?: string;
            }
          | {
              _links?: {
                about?: Array<{
                  href?: string;
                }>;
                author?: Array<{
                  embeddable?: boolean;
                  href?: string;
                }>;
                collection?: Array<{
                  href?: string;
                }>;
                replies?: Array<{
                  embeddable?: boolean;
                  href?: string;
                }>;
                self?: Array<{
                  href?: string;
                  targetHints?: {
                    allow?: string[];
                  };
                }>;
              };
              alt_text?: string;
              author?: number;
              caption?: {
                rendered?: string;
              };
              class_list?: string[];
              comment_status?: string;
              date?: string;
              date_gmt?: string;
              description?: {
                rendered?: string;
              };
              featured_media?: number;
              guid?: {
                rendered?: string;
              };
              id?: number;
              jetpack_sharing_enabled?: boolean;
              jetpack_shortlink?: string;
              link?: string;
              media_details?: {
                file?: string;
                filesize?: number;
                height?: number;
                image_meta?: {
                  aperture?: string;
                  camera?: string;
                  caption?: string;
                  copyright?: string;
                  created_timestamp?: string;
                  credit?: string;
                  focal_length?: string;
                  iso?: string;
                  keywords?: any[];
                  orientation?: string;
                  shutter_speed?: string;
                  title?: string;
                };
                sizes?: {
                  full?: {
                    file?: string;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  large?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  medium?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  medium_large?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                  thumbnail?: {
                    file?: string;
                    filesize?: number;
                    height?: number;
                    mime_type?: string;
                    source_url?: string;
                    width?: number;
                  };
                };
                width?: number;
              };
              media_type?: string;
              meta?: {
                advanced_seo_description?: string;
                jetpack_seo_html_title?: string;
                jetpack_seo_noindex?: boolean;
              };
              mime_type?: string;
              modified?: string;
              modified_gmt?: string;
              ping_status?: string;
              post?: number;
              slug?: string;
              source_url?: string;
              status?: string;
              template?: string;
              title?: {
                rendered?: string;
              };
              type?: string;
            }
        >;
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
