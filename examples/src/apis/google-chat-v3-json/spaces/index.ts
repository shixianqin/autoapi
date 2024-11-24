import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Lists spaces the caller is a member of. Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.spaces` or `chat.spaces.readonly` authorization scope. Lists spaces visible to the caller or authenticated user. Group chats and DMs aren't listed until the first message is sent.
 * @path `/v1/spaces`
 */
export function getChatList(options?: {
  queryParams?: API.GoogleChatV3Json.Spaces.GetChatList.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.GetChatList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.GetChatList.Response>(
    "get",
    "/v1/spaces",
    options || {},
  );
}

/**
 * Deletes a message. For example usage, see [Delete a message](https://developers.google.com/chat/api/guides/crudl/messages#delete_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
 * @path `/v1/{name}`
 */
export function deleteChatMessages(options: {
  pathParams: API.GoogleChatV3Json.Spaces.DeleteChatMessages.PathParams;
  queryParams?: API.GoogleChatV3Json.Spaces.DeleteChatMessages.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.DeleteChatMessages.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.DeleteChatMessages.Response>(
    "delete",
    `/v1/${options.pathParams.name}`,
    options,
  );
}

/**
 * Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/chat/api/reference/rest/v1/media/download). Requires [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts).
 * @path `/v1/{name}`
 */
export function getChatMessagesAttachments(options: {
  pathParams: API.GoogleChatV3Json.Spaces.GetChatMessagesAttachments.PathParams;
  queryParams?: API.GoogleChatV3Json.Spaces.GetChatMessagesAttachments.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.GetChatMessagesAttachments.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.GetChatMessagesAttachments.Response>(
    "get",
    `/v1/${options.pathParams.name}`,
    options,
  );
}

/**
 * Updates a message. There's a difference between `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
 * @path `/v1/{name}`
 */
export function patchChatMessages(options: {
  pathParams: API.GoogleChatV3Json.Spaces.PatchChatMessages.PathParams;
  queryParams?: API.GoogleChatV3Json.Spaces.PatchChatMessages.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.PatchChatMessages.Headers;
  body?: API.GoogleChatV3Json.Spaces.PatchChatMessages.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.PatchChatMessages.Response>(
    "patch",
    `/v1/${options.pathParams.name}`,
    options,
  );
}

/**
 * Updates a message. There's a difference between `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For example usage, see [Update a message](https://developers.google.com/chat/api/guides/crudl/messages#update_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` authorization scope.
 * @path `/v1/{name}`
 */
export function putChatMessagesUpdate(options: {
  pathParams: API.GoogleChatV3Json.Spaces.PutChatMessagesUpdate.PathParams;
  queryParams?: API.GoogleChatV3Json.Spaces.PutChatMessagesUpdate.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.PutChatMessagesUpdate.Headers;
  body?: API.GoogleChatV3Json.Spaces.PutChatMessagesUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.PutChatMessagesUpdate.Response>(
    "put",
    `/v1/${options.pathParams.name}`,
    options,
  );
}

/**
 * Lists memberships in a space. Requires [authentication](https://developers.google.com/chat/api/guides/auth/). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.memberships` or `chat.memberships.readonly` authorization scope.
 * @path `/v1/{parent}/members`
 */
export function getChatMembersList(options: {
  pathParams: API.GoogleChatV3Json.Spaces.GetChatMembersList.PathParams;
  queryParams?: API.GoogleChatV3Json.Spaces.GetChatMembersList.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.GetChatMembersList.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.GetChatMembersList.Response>(
    "get",
    `/v1/${options.pathParams.parent}/members`,
    options,
  );
}

/**
 * Creates a message. For example usage, see [Create a message](https://developers.google.com/chat/api/guides/crudl/messages#create_a_message). Requires [authentication](https://developers.google.com/chat/api/guides/auth). Fully supports [service account authentication](https://developers.google.com/chat/api/guides/auth/service-accounts). Supports [user authentication](https://developers.google.com/chat/api/guides/auth/users) as part of the [Google Workspace Developer Preview Program](https://developers.google.com/workspace/preview), which grants early access to certain features. [User authentication](https://developers.google.com/chat/api/guides/auth/users) requires the `chat.messages` or `chat.messages.create` authorization scope. Because Chat provides authentication for [webhooks](https://developers.google.com/chat/how-tos/webhooks) as part of the URL that's generated when a webhook is registered, webhooks can create messages without a service account or user authentication.
 * @path `/v1/{parent}/messages`
 */
export function postChatMessagesCreate(options: {
  pathParams: API.GoogleChatV3Json.Spaces.PostChatMessagesCreate.PathParams;
  queryParams?: API.GoogleChatV3Json.Spaces.PostChatMessagesCreate.QueryParams;
  headers?: API.GoogleChatV3Json.Spaces.PostChatMessagesCreate.Headers;
  body?: API.GoogleChatV3Json.Spaces.PostChatMessagesCreate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.GoogleChatV3Json.Spaces.PostChatMessagesCreate.Response>(
    "post",
    `/v1/${options.pathParams.parent}/messages`,
    options,
  );
}
