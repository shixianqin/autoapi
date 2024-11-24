declare namespace API {
  namespace GithubV3Json {
    namespace RateLimit {
      namespace GetRateLimit {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.RateLimitOverview;
      }
    }
  }
}
