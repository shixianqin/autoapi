import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Creates an account ticket.
 * @path `/provisioning/createAccountTicket`
 */
export function postAnalyticsCreateAccountTicket(options?: {
  queryParams?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTicket.QueryParams;
  headers?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTicket.Headers;
  body?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTicket.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTicket.Response>(
    "post",
    "/provisioning/createAccountTicket",
    options || {},
  );
}

/**
 * Provision account.
 * @path `/provisioning/createAccountTree`
 */
export function postAnalyticsCreateAccountTree(options?: {
  queryParams?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTree.QueryParams;
  headers?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTree.Headers;
  body?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTree.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTree.Response>(
    "post",
    "/provisioning/createAccountTree",
    options || {},
  );
}
