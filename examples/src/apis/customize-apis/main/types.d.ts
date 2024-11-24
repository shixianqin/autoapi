declare namespace API {
  namespace CustomizeApis {
    namespace Main {
      namespace GetCustomizePathToCategories {
        interface QueryParams {
          bar?: number;
          /**
           * Customize params (foo)
           */
          foo?: string;
        }

        interface Response {
          _links?: {
            about?: Array<{
              href?: string;
            }>;
            collection?: Array<{
              href?: string;
            }>;
            curies?: Array<{
              href?: string;
              name?: string;
              templated?: boolean;
            }>;
            self?: Array<{
              href?: string;
              targetHints?: {
                allow?: string[];
              };
            }>;
            "wp:post_type"?: Array<{
              href?: string;
            }>;
          };
          count?: number;
          description?: string;
          id?: number;
          link?: string;
          meta?: any[];
          name?: string;
          parent?: number;
          slug?: string;
          taxonomy?: string;
        }
      }

      namespace PostCreate {
        interface FormData {
          content?: string;
          file: File;
          title: string;
        }

        interface Response {}
      }

      namespace GetCustomizePathToMedia {
        type QueryParams = {
          foo: string; // foo
          bar: number; // bar
        };

        interface Response {
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
      }
    }
  }
}
