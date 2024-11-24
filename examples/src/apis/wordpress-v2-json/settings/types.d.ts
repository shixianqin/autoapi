declare namespace API {
  namespace WordpressV2Json {
    namespace Settings {
      namespace GetWpV2 {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }

      namespace PatchWpV2 {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * A date format for all date strings.
           */
          date_format?: string;
          /**
           * Default post category.
           */
          default_category?: number | string;
          /**
           * Allow people to submit comments on new posts.
           */
          default_comment_status?: Array<"closed" | "open">;
          /**
           * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
           */
          default_ping_status?: Array<"closed" | "open">;
          /**
           * Default post format.
           */
          default_post_format?: string;
          /**
           * Site tagline.
           */
          description?: string;
          /**
           * This address is used for admin purposes, like new user notification.
           */
          email?: string;
          /**
           * WordPress locale code.
           */
          language?: string;
          /**
           * The ID of the page that should display the latest posts
           */
          page_for_posts?: number | string;
          /**
           * The ID of the page that should be displayed on the front page
           */
          page_on_front?: number | string;
          /**
           * Blog pages show at most.
           */
          posts_per_page?: number | string;
          /**
           * What to show on the front page
           */
          show_on_front?: string;
          /**
           * Site icon.
           */
          site_icon?: number | string;
          /**
           * Site logo.
           */
          site_logo?: number | string;
          /**
           * A day number of the week that the week should start on.
           */
          start_of_week?: number | string;
          /**
           * A time format for all time strings.
           */
          time_format?: string;
          /**
           * A city in the same timezone as you.
           */
          timezone?: string;
          /**
           * Site title.
           */
          title?: string;
          /**
           * Site URL.
           */
          url?: string;
          /**
           * Convert emoticons like :-) and :-P to graphics on display.
           */
          use_smilies?: boolean;
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * A date format for all date strings.
           */
          date_format?: string;
          /**
           * Default post category.
           */
          default_category?: number | string;
          /**
           * Allow people to submit comments on new posts.
           */
          default_comment_status?: Array<"closed" | "open">;
          /**
           * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
           */
          default_ping_status?: Array<"closed" | "open">;
          /**
           * Default post format.
           */
          default_post_format?: string;
          /**
           * Site tagline.
           */
          description?: string;
          /**
           * This address is used for admin purposes, like new user notification.
           */
          email?: string;
          /**
           * WordPress locale code.
           */
          language?: string;
          /**
           * The ID of the page that should display the latest posts
           */
          page_for_posts?: number | string;
          /**
           * The ID of the page that should be displayed on the front page
           */
          page_on_front?: number | string;
          /**
           * Blog pages show at most.
           */
          posts_per_page?: number | string;
          /**
           * What to show on the front page
           */
          show_on_front?: string;
          /**
           * Site icon.
           */
          site_icon?: number | string;
          /**
           * Site logo.
           */
          site_logo?: number | string;
          /**
           * A day number of the week that the week should start on.
           */
          start_of_week?: number | string;
          /**
           * A time format for all time strings.
           */
          time_format?: string;
          /**
           * A city in the same timezone as you.
           */
          timezone?: string;
          /**
           * Site title.
           */
          title?: string;
          /**
           * Site URL.
           */
          url?: string;
          /**
           * Convert emoticons like :-) and :-P to graphics on display.
           */
          use_smilies?: boolean;
        }

        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }
      }

      namespace PutWpV2 {
        interface Headers {
          "Content-Type"?:
            | "application/x-www-form-urlencoded"
            | "multipart/form-data"
            | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * A date format for all date strings.
           */
          date_format?: string;
          /**
           * Default post category.
           */
          default_category?: number | string;
          /**
           * Allow people to submit comments on new posts.
           */
          default_comment_status?: Array<"closed" | "open">;
          /**
           * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
           */
          default_ping_status?: Array<"closed" | "open">;
          /**
           * Default post format.
           */
          default_post_format?: string;
          /**
           * Site tagline.
           */
          description?: string;
          /**
           * This address is used for admin purposes, like new user notification.
           */
          email?: string;
          /**
           * WordPress locale code.
           */
          language?: string;
          /**
           * The ID of the page that should display the latest posts
           */
          page_for_posts?: number | string;
          /**
           * The ID of the page that should be displayed on the front page
           */
          page_on_front?: number | string;
          /**
           * Blog pages show at most.
           */
          posts_per_page?: number | string;
          /**
           * What to show on the front page
           */
          show_on_front?: string;
          /**
           * Site icon.
           */
          site_icon?: number | string;
          /**
           * Site logo.
           */
          site_logo?: number | string;
          /**
           * A day number of the week that the week should start on.
           */
          start_of_week?: number | string;
          /**
           * A time format for all time strings.
           */
          time_format?: string;
          /**
           * A city in the same timezone as you.
           */
          timezone?: string;
          /**
           * Site title.
           */
          title?: string;
          /**
           * Site URL.
           */
          url?: string;
          /**
           * Convert emoticons like :-) and :-P to graphics on display.
           */
          use_smilies?: boolean;
        }
      }
    }
  }
}
