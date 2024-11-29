import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Creates an account ticket
 * @summary Create Account Ticket
 * @path `/provisioning/createAccountTicket`
 */
export function postAnalyticsProvisioningCreateAccount(options?: {
  headers?: Record<string, any>;
  body?: API.GaV2Yaml.Ticket.PostAnalyticsProvisioningCreateAccount.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    "/provisioning/createAccountTicket",
    options || {},
  );
}
