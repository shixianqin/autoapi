import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Creates an account ticket.
 * @path `/provisioning/createAccountTicket`
 */
export function postAnalyticsCreateAccountTicket(options?: {
  queryParams?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTicket.QueryParams;
  body?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTicket.Body;
  headers?: Record<string, any>;
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
  body?: API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTree.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GaV3Json.Provisioning.PostAnalyticsCreateAccountTree.Response>(
    "post",
    "/provisioning/createAccountTree",
    options || {},
  );
}
