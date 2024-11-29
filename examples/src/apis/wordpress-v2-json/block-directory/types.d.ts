declare namespace API {
  namespace WordpressV2Json {
    namespace BlockDirectory {
      namespace GetWpV2Search {
        interface QueryParams {
          /**
           * Scope under which the request is made; determines fields present in response.
           */
          context?: "view"[];
          /**
           * Current page of the collection.
           */
          page?: number | string;
          /**
           * Maximum number of items to be returned in result set.
           */
          per_page?: number | string;
          /**
           * Limit result set to blocks matching the search term.
           */
          term: string;
        }
      }
    }
  }
}
