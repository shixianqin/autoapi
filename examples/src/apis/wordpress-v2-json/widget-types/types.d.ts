declare namespace API {
  namespace WordpressV2Json {
    namespace WidgetTypes {
      namespace PostWpV2IdEncode {
        interface FormData {
          /**
           * Serialized widget form data to encode into instance settings.
           */
          form_data?: string;
          /**
           * Current instance settings of the widget.
           */
          instance?: string;
        }

        interface PathParams {
          /**
           * The widget type id.
           */
          id: string;
        }
      }

      namespace PostWpV2IdRender {
        interface FormData {
          /**
           * Current instance settings of the widget.
           */
          instance?: string;
        }

        interface PathParams {
          /**
           * The widget type id.
           */
          id: string;
        }
      }

      namespace GetWpV2Id {
        interface PathParams {
          /**
           * The widget type id.
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

      namespace GetWpV2 {
        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: Array<"edit" | "embed" | "view">;
        }
      }
    }
  }
}
