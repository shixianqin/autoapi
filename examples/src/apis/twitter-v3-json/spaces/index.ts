import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns a variety of information about the Spaces created by the provided User IDs
 * @summary Space lookup by their creators
 * @path `/2/spaces/by/creator_ids`
 * @docs https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids
 */
export function getFindByCreatorIds(options: {
  queryParams: API.TwitterV3Json.Spaces.GetFindByCreatorIds.QueryParams;
  headers?: API.TwitterV3Json.Spaces.GetFindByCreatorIds.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Spaces.GetFindByCreatorIds.Response>(
    "get",
    "/2/spaces/by/creator_ids",
    options,
  );
}

/**
 * Returns Spaces that match the provided query.
 * @summary Search for Spaces
 * @path `/2/spaces/search`
 * @docs https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search
 */
export function getSearch(options: {
  queryParams: API.TwitterV3Json.Spaces.GetSearch.QueryParams;
  headers?: API.TwitterV3Json.Spaces.GetSearch.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Spaces.GetSearch.Response>(
    "get",
    "/2/spaces/search",
    options,
  );
}

/**
 * Retrieves the list of Users who purchased a ticket to the given space
 * @summary Retrieve the list of Users who purchased a ticket to the given space
 * @path `/2/spaces/{id}/buyers`
 * @docs https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers
 */
export function getSpaceBuyers(options: {
  pathParams: API.TwitterV3Json.Spaces.GetSpaceBuyers.PathParams;
  queryParams?: API.TwitterV3Json.Spaces.GetSpaceBuyers.QueryParams;
  headers?: API.TwitterV3Json.Spaces.GetSpaceBuyers.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Spaces.GetSpaceBuyers.Response>(
    "get",
    `/2/spaces/${options.pathParams.id}/buyers`,
    options,
  );
}

/**
 * Retrieves Posts shared in the specified Space.
 * @summary Retrieve Posts from a Space.
 * @path `/2/spaces/{id}/tweets`
 * @docs https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets
 */
export function getSpaceTweets(options: {
  pathParams: API.TwitterV3Json.Spaces.GetSpaceTweets.PathParams;
  queryParams?: API.TwitterV3Json.Spaces.GetSpaceTweets.QueryParams;
  headers?: API.TwitterV3Json.Spaces.GetSpaceTweets.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Spaces.GetSpaceTweets.Response>(
    "get",
    `/2/spaces/${options.pathParams.id}/tweets`,
    options,
  );
}

/**
 * Returns a variety of information about the Space specified by the requested ID
 * @summary Space lookup by Space ID
 * @path `/2/spaces/{id}`
 * @docs https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id
 */
export function getFindSpaceById(options: {
  pathParams: API.TwitterV3Json.Spaces.GetFindSpaceById.PathParams;
  queryParams?: API.TwitterV3Json.Spaces.GetFindSpaceById.QueryParams;
  headers?: API.TwitterV3Json.Spaces.GetFindSpaceById.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Spaces.GetFindSpaceById.Response>(
    "get",
    `/2/spaces/${options.pathParams.id}`,
    options,
  );
}

/**
 * Returns a variety of information about the Spaces specified by the requested IDs
 * @summary Space lookup up Space IDs
 * @path `/2/spaces`
 * @docs https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces
 */
export function getFindByIds(options: {
  queryParams: API.TwitterV3Json.Spaces.GetFindByIds.QueryParams;
  headers?: API.TwitterV3Json.Spaces.GetFindByIds.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.Spaces.GetFindByIds.Response>(
    "get",
    "/2/spaces",
    options,
  );
}
