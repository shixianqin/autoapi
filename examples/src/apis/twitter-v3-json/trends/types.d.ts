declare namespace API {
  namespace TwitterV3Json {
    namespace Trends {
      namespace GetTrends {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The WOEID of the place to lookup a trend for.
           * @format int32
           */
          woeid: number;
        }

        interface QueryParams {
          /**
           * A comma separated list of Trend fields to display.
           * @minItems 1
           */
          "trend.fields"?: Array<"trend_name" | "tweet_count">;
        }

        type Response = $schemas.Get2TrendsByWoeidWoeidResponse;
      }
    }
  }
}
