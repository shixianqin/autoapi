import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Check-Contact
 * @path `/contacts`
 */
export function postCheckContact(options: {
  headers?: API.WhatsappV3Json.Contacts.PostCheckContact.Headers;
  body: API.WhatsappV3Json.Contacts.PostCheckContact.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Contacts.PostCheckContact.Response>(
    "post",
    "/contacts",
    options,
  );
}
