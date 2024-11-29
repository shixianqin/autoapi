import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Check-Contact
 * @path `/contacts`
 */
export function postCheckContact(options: {
  body: API.WhatsappV3Json.Contacts.PostCheckContact.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Contacts.PostCheckContact.Response>(
    "post",
    "/contacts",
    options,
  );
}
