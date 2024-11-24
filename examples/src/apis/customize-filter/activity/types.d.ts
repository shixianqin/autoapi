declare namespace API {
  namespace CustomizeFilter {
    namespace Activity {
      namespace GetFeeds {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.Feed;
      }
    }
  }
}
