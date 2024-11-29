import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Mark-Message-As-Read
 * @path `/messages/{MessageID}`
 */
export function putMarkMessageAsRead(options: {
  pathParams: API.WhatsappV3Json.Messages.PutMarkMessageAsRead.PathParams;
  headers?: Record<string, any>;
  body: API.WhatsappV3Json.Messages.PutMarkMessageAsRead.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "put",
    `/messages/${options.pathParams.MessageID}`,
    options,
  );
}

/**
 * Send-Message
 * @path `/messages`
 */
export function postSendMessage(options: {
  headers?: Record<string, any>;
  body: API.WhatsappV3Json.Messages.PostSendMessage.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Messages.PostSendMessage.Response>(
    "post",
    "/messages",
    options,
  );
}
