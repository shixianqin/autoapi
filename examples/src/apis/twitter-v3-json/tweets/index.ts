import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns a list of Posts associated with the provided List ID.
 * @summary List Posts timeline by List ID.
 * @path `/2/lists/{id}/tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets
 */
export function getListsId(options: {
  pathParams: API.TwitterV3Json.Tweets.GetListsId.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetListsId.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetListsId.Response>(
    "get",
    `/2/lists/${options.pathParams.id}/tweets`,
    options,
  );
}

/**
 * Returns Post Counts that match a search query.
 * @summary Full archive search counts
 * @path `/2/tweets/counts/all`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export function getTweetCountsFullArchiveSearch(options: {
  queryParams: API.TwitterV3Json.Tweets.GetTweetCountsFullArchiveSearch.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetTweetCountsFullArchiveSearch.Response>(
    "get",
    "/2/tweets/counts/all",
    options,
  );
}

/**
 * Returns Post Counts from the last 7 days that match a search query.
 * @summary Recent search counts
 * @path `/2/tweets/counts/recent`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent
 */
export function getTweetCountsRecentSearch(options: {
  queryParams: API.TwitterV3Json.Tweets.GetTweetCountsRecentSearch.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetTweetCountsRecentSearch.Response>(
    "get",
    "/2/tweets/counts/recent",
    options,
  );
}

/**
 * Streams 100% of English Language public Posts.
 * @summary English Language Firehose stream
 * @path `/2/tweets/firehose/stream/lang/en`
 */
export function getFirehoseStreamLangEn(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFirehoseStreamLangEn.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFirehoseStreamLangEn.Response>(
    "get",
    "/2/tweets/firehose/stream/lang/en",
    options,
  );
}

/**
 * Streams 100% of Japanese Language public Posts.
 * @summary Japanese Language Firehose stream
 * @path `/2/tweets/firehose/stream/lang/ja`
 */
export function getFirehoseStreamLangJa(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFirehoseStreamLangJa.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFirehoseStreamLangJa.Response>(
    "get",
    "/2/tweets/firehose/stream/lang/ja",
    options,
  );
}

/**
 * Streams 100% of Korean Language public Posts.
 * @summary Korean Language Firehose stream
 * @path `/2/tweets/firehose/stream/lang/ko`
 */
export function getFirehoseStreamLangKo(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFirehoseStreamLangKo.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFirehoseStreamLangKo.Response>(
    "get",
    "/2/tweets/firehose/stream/lang/ko",
    options,
  );
}

/**
 * Streams 100% of Portuguese Language public Posts.
 * @summary Portuguese Language Firehose stream
 * @path `/2/tweets/firehose/stream/lang/pt`
 */
export function getFirehoseStreamLangPt(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFirehoseStreamLangPt.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFirehoseStreamLangPt.Response>(
    "get",
    "/2/tweets/firehose/stream/lang/pt",
    options,
  );
}

/**
 * Streams 100% of public Posts.
 * @summary Firehose stream
 * @path `/2/tweets/firehose/stream`
 */
export function getFirehoseStream(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFirehoseStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFirehoseStream.Response>(
    "get",
    "/2/tweets/firehose/stream",
    options,
  );
}

/**
 * Streams a deterministic 10% of public Posts.
 * @summary Sample 10% stream
 * @path `/2/tweets/sample10/stream`
 */
export function getSample10Stream(options: {
  queryParams: API.TwitterV3Json.Tweets.GetSample10Stream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetSample10Stream.Response>(
    "get",
    "/2/tweets/sample10/stream",
    options,
  );
}

/**
 * Streams a deterministic 1% of public Posts.
 * @summary Sample stream
 * @path `/2/tweets/sample/stream`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream
 */
export function getSampleStream(options?: {
  queryParams?: API.TwitterV3Json.Tweets.GetSampleStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetSampleStream.Response>(
    "get",
    "/2/tweets/sample/stream",
    options || {},
  );
}

/**
 * Returns Posts that match a search query.
 * @summary Full-archive search
 * @path `/2/tweets/search/all`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all
 */
export function getFullarchiveSearch(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFullarchiveSearch.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFullarchiveSearch.Response>(
    "get",
    "/2/tweets/search/all",
    options,
  );
}

/**
 * Returns Posts from the last 7 days that match a search query.
 * @summary Recent search
 * @path `/2/tweets/search/recent`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent
 */
export function getRecentSearch(options: {
  queryParams: API.TwitterV3Json.Tweets.GetRecentSearch.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetRecentSearch.Response>(
    "get",
    "/2/tweets/search/recent",
    options,
  );
}

/**
 * Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.
 * @summary Rules lookup
 * @path `/2/tweets/search/stream/rules`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules
 */
export function getRules(options?: {
  queryParams?: API.TwitterV3Json.Tweets.GetRules.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetRules.Response>(
    "get",
    "/2/tweets/search/stream/rules",
    options || {},
  );
}

/**
 * Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.
 * @summary Add/Delete rules
 * @path `/2/tweets/search/stream/rules`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules
 */
export function postAddOrDeleteRules(options: {
  queryParams?: API.TwitterV3Json.Tweets.PostAddOrDeleteRules.QueryParams;
  body: API.TwitterV3Json.Tweets.PostAddOrDeleteRules.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.PostAddOrDeleteRules.Response>(
    "post",
    "/2/tweets/search/stream/rules",
    options,
  );
}

/**
 * Streams Posts matching the stream's active rule set.
 * @summary Filtered stream
 * @path `/2/tweets/search/stream`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream
 */
export function getSearchStream(options?: {
  queryParams?: API.TwitterV3Json.Tweets.GetSearchStream.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetSearchStream.Response>(
    "get",
    "/2/tweets/search/stream",
    options || {},
  );
}

/**
 * Returns a variety of information about each Post that quotes the Post specified by the requested ID.
 * @summary Retrieve Posts that quote a Post.
 * @path `/2/tweets/{id}/quote_tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets
 */
export function getFindThatQuoteATweet(options: {
  pathParams: API.TwitterV3Json.Tweets.GetFindThatQuoteATweet.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetFindThatQuoteATweet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFindThatQuoteATweet.Response>(
    "get",
    `/2/tweets/${options.pathParams.id}/quote_tweets`,
    options,
  );
}

/**
 * Returns a variety of information about each Post that has retweeted the Post specified by the requested ID.
 * @summary Retrieve Posts that repost a Post.
 * @path `/2/tweets/{id}/retweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweets
 */
export function getFindThatRetweetATweet(options: {
  pathParams: API.TwitterV3Json.Tweets.GetFindThatRetweetATweet.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetFindThatRetweetATweet.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFindThatRetweetATweet.Response>(
    "get",
    `/2/tweets/${options.pathParams.id}/retweets`,
    options,
  );
}

/**
 * Delete specified Post (in the path) by ID.
 * @summary Post delete by Post ID
 * @path `/2/tweets/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id
 */
export function deleteTweetById(options: {
  pathParams: API.TwitterV3Json.Tweets.DeleteTweetById.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.DeleteTweetById.Response>(
    "delete",
    `/2/tweets/${options.pathParams.id}`,
    options,
  );
}

/**
 * Returns a variety of information about the Post specified by the requested ID.
 * @summary Post lookup by Post ID
 * @path `/2/tweets/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id
 */
export function getFindTweetById(options: {
  pathParams: API.TwitterV3Json.Tweets.GetFindTweetById.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetFindTweetById.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFindTweetById.Response>(
    "get",
    `/2/tweets/${options.pathParams.id}`,
    options,
  );
}

/**
 * Hides or unhides a reply to an owned conversation.
 * @summary Hide replies
 * @path `/2/tweets/{tweet_id}/hidden`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden
 */
export function putHideReplyById(options: {
  pathParams: API.TwitterV3Json.Tweets.PutHideReplyById.PathParams;
  body: API.TwitterV3Json.Tweets.PutHideReplyById.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.PutHideReplyById.Response>(
    "put",
    `/2/tweets/${options.pathParams.tweet_id}/hidden`,
    options,
  );
}

/**
 * Returns a variety of information about the Post specified by the requested ID.
 * @summary Post lookup by Post IDs
 * @path `/2/tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets
 */
export function getFindById(options: {
  queryParams: API.TwitterV3Json.Tweets.GetFindById.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetFindById.Response>(
    "get",
    "/2/tweets",
    options,
  );
}

/**
 * Causes the User to create a Post under the authorized account.
 * @summary Creation of a Post
 * @path `/2/tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets
 */
export function postCreateTweet(options?: {
  body?: API.TwitterV3Json.Tweets.PostCreateTweet.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.PostCreateTweet.Response>(
    "post",
    "/2/tweets",
    options || {},
  );
}

/**
 * Returns a list of Posts liked by the provided User ID
 * @summary Returns Post objects liked by the provided User ID
 * @path `/2/users/{id}/liked_tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets
 */
export function getUsersIdLiked(options: {
  pathParams: API.TwitterV3Json.Tweets.GetUsersIdLiked.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetUsersIdLiked.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetUsersIdLiked.Response>(
    "get",
    `/2/users/${options.pathParams.id}/liked_tweets`,
    options,
  );
}

/**
 * Causes the User (in the path) to unlike the specified Post. The User must match the User context authorizing the request
 * @summary Causes the User (in the path) to unlike the specified Post
 * @path `/2/users/{id}/likes/{tweet_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id
 */
export function deleteUsersIdUnlike(options: {
  pathParams: API.TwitterV3Json.Tweets.DeleteUsersIdUnlike.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.DeleteUsersIdUnlike.Response>(
    "delete",
    `/2/users/${options.pathParams.id}/likes/${options.pathParams.tweet_id}`,
    options,
  );
}

/**
 * Causes the User (in the path) to like the specified Post. The User in the path must match the User context authorizing the request.
 * @summary Causes the User (in the path) to like the specified Post
 * @path `/2/users/{id}/likes`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes
 */
export function postUsersIdLike(options: {
  pathParams: API.TwitterV3Json.Tweets.PostUsersIdLike.PathParams;
  body: API.TwitterV3Json.Tweets.PostUsersIdLike.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.PostUsersIdLike.Response>(
    "post",
    `/2/users/${options.pathParams.id}/likes`,
    options,
  );
}

/**
 * Returns Post objects that mention username associated to the provided User ID
 * @summary User mention timeline by User ID
 * @path `/2/users/{id}/mentions`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions
 */
export function getUsersIdMentions(options: {
  pathParams: API.TwitterV3Json.Tweets.GetUsersIdMentions.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetUsersIdMentions.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetUsersIdMentions.Response>(
    "get",
    `/2/users/${options.pathParams.id}/mentions`,
    options,
  );
}

/**
 * Causes the User (in the path) to unretweet the specified Post. The User must match the User context authorizing the request
 * @summary Causes the User (in the path) to unretweet the specified Post
 * @path `/2/users/{id}/retweets/{source_tweet_id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id
 */
export function deleteUsersIdUnretweets(options: {
  pathParams: API.TwitterV3Json.Tweets.DeleteUsersIdUnretweets.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.DeleteUsersIdUnretweets.Response>(
    "delete",
    `/2/users/${options.pathParams.id}/retweets/${options.pathParams.source_tweet_id}`,
    options,
  );
}

/**
 * Causes the User (in the path) to repost the specified Post. The User in the path must match the User context authorizing the request.
 * @summary Causes the User (in the path) to repost the specified Post.
 * @path `/2/users/{id}/retweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets
 */
export function postUsersIdRetweets(options: {
  pathParams: API.TwitterV3Json.Tweets.PostUsersIdRetweets.PathParams;
  body: API.TwitterV3Json.Tweets.PostUsersIdRetweets.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.PostUsersIdRetweets.Response>(
    "post",
    `/2/users/${options.pathParams.id}/retweets`,
    options,
  );
}

/**
 * Returns Post objects that appears in the provided User ID's home timeline
 * @summary User home timeline by User ID
 * @path `/2/users/{id}/timelines/reverse_chronological`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-reverse-chronological
 */
export function getUsersIdTimeline(options: {
  pathParams: API.TwitterV3Json.Tweets.GetUsersIdTimeline.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetUsersIdTimeline.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetUsersIdTimeline.Response>(
    "get",
    `/2/users/${options.pathParams.id}/timelines/reverse_chronological`,
    options,
  );
}

/**
 * Returns a list of Posts authored by the provided User ID
 * @summary User Posts timeline by User ID
 * @path `/2/users/{id}/tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets
 */
export function getUsersId(options: {
  pathParams: API.TwitterV3Json.Tweets.GetUsersId.PathParams;
  queryParams?: API.TwitterV3Json.Tweets.GetUsersId.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Tweets.GetUsersId.Response>(
    "get",
    `/2/users/${options.pathParams.id}/tweets`,
    options,
  );
}
