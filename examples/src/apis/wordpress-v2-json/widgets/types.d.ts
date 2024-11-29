declare namespace API {
  namespace WordpressV2Json {
    namespace Widgets {
      namespace DeleteWpV2Id {
        interface PathParams {
          id: string;
        }

        interface QueryParams {
          /**
           * Whether to force removal of the widget, or move it to the inactive sidebar.
           */
          force?: boolean;
        }
      }

      namespace GetWpV2Id {
        interface PathParams {
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
           * Unique identifier for the widget.
           */
          id: string;
        }

        interface QueryParams {
          /**
           * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
           */
          form_data?: string;
          /**
           * The type of the widget. Corresponds to ID in widget-types endpoint.
           */
          id_base?: string;
          /**
           * Instance settings of the widget, if supported.
           */
          instance?: string;
          /**
           * The sidebar the widget belongs to.
           */
          sidebar?: string;
        }
      }

      namespace PostWpV2Id {
        interface FormData {
          /**
           * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
           */
          form_data?: string;
          /**
           * The type of the widget. Corresponds to ID in widget-types endpoint.
           */
          id_base?: string;
          /**
           * Instance settings of the widget, if supported.
           */
          instance?: string;
          /**
           * The sidebar the widget belongs to.
           */
          sidebar?: string;
        }

        interface PathParams {
          /**
           * Unique identifier for the widget.
           */
          id: string;
        }
      }

      namespace PutWpV2Id {
        interface PathParams {
          /**
           * Unique identifier for the widget.
           */
          id: string;
        }

        interface QueryParams {
          /**
           * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
           */
          form_data?: string;
          /**
           * The type of the widget. Corresponds to ID in widget-types endpoint.
           */
          id_base?: string;
          /**
           * Instance settings of the widget, if supported.
           */
          instance?: string;
          /**
           * The sidebar the widget belongs to.
           */
          sidebar?: string;
        }
      }

      namespace GetWpV2 {
        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
          /**
           * The sidebar to return widgets for.
           */
          sidebar?: string;
        }
      }

      namespace PostWpV2 {
        interface FormData {
          /**
           * URL-encoded form data from the widget admin form. Used to update a widget that does not support instance. Write only.
           */
          form_data?: string;
          /**
           * Unique identifier for the widget.
           */
          id?: string;
          /**
           * The type of the widget. Corresponds to ID in widget-types endpoint.
           */
          id_base?: string;
          /**
           * Instance settings of the widget, if supported.
           */
          instance?: string;
          /**
           * The sidebar the widget belongs to.
           */
          sidebar: string;
        }
      }
    }
  }
}
