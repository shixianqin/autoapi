import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
 *   **Timeline**: The GitHub global public timeline
 *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia)
 *   **Current user public**: The public timeline for the authenticated user
 *   **Current user**: The private timeline for the authenticated user
 *   **Current user actor**: The private timeline for activity created by the authenticated user
 *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
 *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
 *
 * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens.
 * @summary Get feeds
 * @path `/feeds`
 * @docs https://docs.github.com/rest/reference/activity#get-feeds
 */
export function getFeeds(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.CustomizeFilter.Activity.GetFeeds.Response>(
    "get",
    "/feeds",
    options || {},
  );
}
