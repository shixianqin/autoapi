import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Demote-Group-Admin
 * @path `/groups/{GroupId}/admins`
 */
export function deleteDemoteGroupAdmin(options: {
  pathParams: API.WhatsappV3Json.Groups.DeleteDemoteGroupAdmin.PathParams;
  headers?: API.WhatsappV3Json.Groups.DeleteDemoteGroupAdmin.Headers;
  body: API.WhatsappV3Json.Groups.DeleteDemoteGroupAdmin.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/groups/${options.pathParams.GroupId}/admins`,
    options,
  );
}

/**
 * Promote-To-Group-Admin
 * @path `/groups/{GroupId}/admins`
 */
export function patchPromoteToGroupAdmin(options: {
  pathParams: API.WhatsappV3Json.Groups.PatchPromoteToGroupAdmin.PathParams;
  headers?: API.WhatsappV3Json.Groups.PatchPromoteToGroupAdmin.Headers;
  body: API.WhatsappV3Json.Groups.PatchPromoteToGroupAdmin.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "patch",
    `/groups/${options.pathParams.GroupId}/admins`,
    options,
  );
}

/**
 * Delete-Group-Icon
 * @path `/groups/{GroupId}/icon`
 */
export function deleteGroupIcon(options: {
  pathParams: API.WhatsappV3Json.Groups.DeleteGroupIcon.PathParams;
  headers?: API.WhatsappV3Json.Groups.DeleteGroupIcon.Headers;
  formData: API.WhatsappV3Json.Groups.DeleteGroupIcon.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/groups/${options.pathParams.GroupId}/icon`,
    options,
  );
}

/**
 * Get-Group-Icon-Binary
 * @path `/groups/{GroupId}/icon`
 */
export function getGroupIconBinary(options: {
  pathParams: API.WhatsappV3Json.Groups.GetGroupIconBinary.PathParams;
  headers?: API.WhatsappV3Json.Groups.GetGroupIconBinary.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "get",
    `/groups/${options.pathParams.GroupId}/icon`,
    options,
  );
}

/**
 * Set-Group-Icon
 * @path `/groups/{GroupId}/icon`
 */
export function postSetGroupIcon(options: {
  pathParams: API.WhatsappV3Json.Groups.PostSetGroupIcon.PathParams;
  headers?: API.WhatsappV3Json.Groups.PostSetGroupIcon.Headers;
  formData: API.WhatsappV3Json.Groups.PostSetGroupIcon.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/groups/${options.pathParams.GroupId}/icon`,
    options,
  );
}

/**
 * Delete-Group-Invite
 * @path `/groups/{GroupId}/invite`
 */
export function deleteGroupInvite(options: {
  pathParams: API.WhatsappV3Json.Groups.DeleteGroupInvite.PathParams;
  headers?: API.WhatsappV3Json.Groups.DeleteGroupInvite.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/groups/${options.pathParams.GroupId}/invite`,
    options,
  );
}

/**
 * Get-Group-Invite
 * @path `/groups/{GroupId}/invite`
 */
export function getGroupInvite(options: {
  pathParams: API.WhatsappV3Json.Groups.GetGroupInvite.PathParams;
  headers?: API.WhatsappV3Json.Groups.GetGroupInvite.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Groups.GetGroupInvite.Response>(
    "get",
    `/groups/${options.pathParams.GroupId}/invite`,
    options,
  );
}

/**
 * Leave-Group
 * @path `/groups/{GroupId}/leave`
 */
export function postLeaveGroup(options: {
  pathParams: API.WhatsappV3Json.Groups.PostLeaveGroup.PathParams;
  headers?: API.WhatsappV3Json.Groups.PostLeaveGroup.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "post",
    `/groups/${options.pathParams.GroupId}/leave`,
    options,
  );
}

/**
 * Remove-Group-Participant
 * @path `/groups/{GroupId}/participants`
 */
export function deleteRemoveGroupParticipant(options: {
  pathParams: API.WhatsappV3Json.Groups.DeleteRemoveGroupParticipant.PathParams;
  headers?: API.WhatsappV3Json.Groups.DeleteRemoveGroupParticipant.Headers;
  body: API.WhatsappV3Json.Groups.DeleteRemoveGroupParticipant.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/groups/${options.pathParams.GroupId}/participants`,
    options,
  );
}

/**
 * Get-Group-Info
 * @path `/groups/{GroupId}`
 */
export function getGroupInfo(options: {
  pathParams: API.WhatsappV3Json.Groups.GetGroupInfo.PathParams;
  headers?: API.WhatsappV3Json.Groups.GetGroupInfo.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Groups.GetGroupInfo.Response>(
    "get",
    `/groups/${options.pathParams.GroupId}`,
    options,
  );
}

/**
 * Update-Group-Info
 * @path `/groups/{GroupId}`
 */
export function putUpdateGroupInfo(options: {
  pathParams: API.WhatsappV3Json.Groups.PutUpdateGroupInfo.PathParams;
  headers?: API.WhatsappV3Json.Groups.PutUpdateGroupInfo.Headers;
  body: API.WhatsappV3Json.Groups.PutUpdateGroupInfo.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", `/groups/${options.pathParams.GroupId}`, options);
}

/**
 * Get-All-Groups
 * @path `/groups`
 */
export function getAll(options?: {
  headers?: API.WhatsappV3Json.Groups.GetAll.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Groups.GetAll.Response>(
    "get",
    "/groups",
    options || {},
  );
}

/**
 * Create-Group
 * @path `/groups`
 */
export function postCreateGroup(options: {
  headers?: API.WhatsappV3Json.Groups.PostCreateGroup.Headers;
  body: API.WhatsappV3Json.Groups.PostCreateGroup.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Groups.PostCreateGroup.Response>(
    "post",
    "/groups",
    options,
  );
}
