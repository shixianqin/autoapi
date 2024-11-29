declare namespace API {
  namespace WhatsappV3Json {
    namespace BackupRestore {
      namespace PostBackupSettings {
        type Body = $schemas.BackupSettingsRequestBody;

        type Response = $schemas.BackupSettingsResponse;
      }

      namespace PostRestoreSettings {
        type Body = $schemas.RestoreSettingsRequestBody;
      }
    }
  }
}
