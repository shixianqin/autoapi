import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Mark-Message-As-Read
 * @path `/messages/{MessageID}`
 */
export function putMarkMessageAsRead(options: {
  pathParams: API.WhatsappV3Json.Messages.PutMarkMessageAsRead.PathParams;
  body: API.WhatsappV3Json.Messages.PutMarkMessageAsRead.Body;
  headers?: Record<string, any>;
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
  body: API.WhatsappV3Json.Messages.PostSendMessage.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Messages.PostSendMessage.Response>(
    "post",
    "/messages",
    options,
  );
}
