declare namespace API {
  namespace GithubV3Json {
    namespace Markdown {
      namespace PostRenderRaw {
        type Body = string;

        interface Headers {
          "Content-Type"?: "text/plain" | "text/x-markdown" | string;
          [P: string]: any;
        }

        type Response = string;
      }

      namespace PostRender {
        interface Body {
          /**
           * The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.
           */
          context?: string;
          /**
           * The rendering mode.
           * @default markdown
           */
          mode?: "gfm" | "markdown";
          /**
           * The Markdown text to render in HTML.
           */
          text: string;
        }

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = string;
      }
    }
  }
}
