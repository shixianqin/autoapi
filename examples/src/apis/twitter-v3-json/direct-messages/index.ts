import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns DM Events for a DM Conversation
 * @summary Get DM Events for a DM Conversation
 * @path `/2/dm_conversations/with/{participant_id}/dm_events`
 */
export function getDmConversationsWithParticipantIdDmEvents(options: {
  pathParams: API.TwitterV3Json.DirectMessages.GetDmConversationsWithParticipantIdDmEvents.PathParams;
  queryParams?: API.TwitterV3Json.DirectMessages.GetDmConversationsWithParticipantIdDmEvents.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.GetDmConversationsWithParticipantIdDmEvents.Response>(
    "get",
    `/2/dm_conversations/with/${options.pathParams.participant_id}/dm_events`,
    options,
  );
}

/**
 * Creates a new message for a DM Conversation with a participant user by ID
 * @summary Send a new message to a user
 * @path `/2/dm_conversations/with/{participant_id}/messages`
 */
export function postDmConversationWithUserEventIdCreate(options: {
  pathParams: API.TwitterV3Json.DirectMessages.PostDmConversationWithUserEventIdCreate.PathParams;
  body: API.TwitterV3Json.DirectMessages.PostDmConversationWithUserEventIdCreate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.PostDmConversationWithUserEventIdCreate.Response>(
    "post",
    `/2/dm_conversations/with/${options.pathParams.participant_id}/messages`,
    options,
  );
}

/**
 * Creates a new message for a DM Conversation specified by DM Conversation ID
 * @summary Send a new message to a DM Conversation
 * @path `/2/dm_conversations/{dm_conversation_id}/messages`
 */
export function postDmConversationByIdEventIdCreate(options: {
  pathParams: API.TwitterV3Json.DirectMessages.PostDmConversationByIdEventIdCreate.PathParams;
  body: API.TwitterV3Json.DirectMessages.PostDmConversationByIdEventIdCreate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.PostDmConversationByIdEventIdCreate.Response>(
    "post",
    `/2/dm_conversations/${options.pathParams.dm_conversation_id}/messages`,
    options,
  );
}

/**
 * Returns DM Events for a DM Conversation
 * @summary Get DM Events for a DM Conversation
 * @path `/2/dm_conversations/{id}/dm_events`
 */
export function getDmConversationsIdDmEvents(options: {
  pathParams: API.TwitterV3Json.DirectMessages.GetDmConversationsIdDmEvents.PathParams;
  queryParams?: API.TwitterV3Json.DirectMessages.GetDmConversationsIdDmEvents.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.GetDmConversationsIdDmEvents.Response>(
    "get",
    `/2/dm_conversations/${options.pathParams.id}/dm_events`,
    options,
  );
}

/**
 * Creates a new DM Conversation.
 * @summary Create a new DM Conversation
 * @path `/2/dm_conversations`
 */
export function postDmConversationIdCreate(options: {
  body: API.TwitterV3Json.DirectMessages.PostDmConversationIdCreate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.PostDmConversationIdCreate.Response>(
    "post",
    "/2/dm_conversations",
    options,
  );
}

/**
 * Delete a Dm Event that you own.
 * @summary Delete Dm
 * @path `/2/dm_events/{event_id}`
 */
export function deleteDmEvent(options: {
  pathParams: API.TwitterV3Json.DirectMessages.DeleteDmEvent.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.DeleteDmEvent.Response>(
    "delete",
    `/2/dm_events/${options.pathParams.event_id}`,
    options,
  );
}

/**
 * Returns DM Events by event id.
 * @summary Get DM Events by id
 * @path `/2/dm_events/{event_id}`
 */
export function getDmEventsById(options: {
  pathParams: API.TwitterV3Json.DirectMessages.GetDmEventsById.PathParams;
  queryParams?: API.TwitterV3Json.DirectMessages.GetDmEventsById.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.GetDmEventsById.Response>(
    "get",
    `/2/dm_events/${options.pathParams.event_id}`,
    options,
  );
}

/**
 * Returns recent DM Events across DM conversations
 * @summary Get recent DM Events
 * @path `/2/dm_events`
 */
export function getDmEvents(options?: {
  queryParams?: API.TwitterV3Json.DirectMessages.GetDmEvents.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.TwitterV3Json.DirectMessages.GetDmEvents.Response>(
    "get",
    "/2/dm_events",
    options || {},
  );
}
