declare namespace API {
  namespace WhatsappV3Json {
    namespace BackupRestore {
      namespace PostBackupSettings {
        type Body = $schemas.BackupSettingsRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.BackupSettingsResponse;
      }

      namespace PostRestoreSettings {
        type Body = $schemas.RestoreSettingsRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }
    }
  }
}
