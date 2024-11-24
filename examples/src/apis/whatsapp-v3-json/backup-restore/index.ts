import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Backup-Settings
 * @path `/settings/backup`
 */
export function postBackupSettings(options: {
  headers?: API.WhatsappV3Json.BackupRestore.PostBackupSettings.Headers;
  body: API.WhatsappV3Json.BackupRestore.PostBackupSettings.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.BackupRestore.PostBackupSettings.Response>(
    "post",
    "/settings/backup",
    options,
  );
}

/**
 * Restore-Settings
 * @path `/settings/restore`
 */
export function postRestoreSettings(options: {
  headers?: API.WhatsappV3Json.BackupRestore.PostRestoreSettings.Headers;
  body: API.WhatsappV3Json.BackupRestore.PostRestoreSettings.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/settings/restore", options);
}
