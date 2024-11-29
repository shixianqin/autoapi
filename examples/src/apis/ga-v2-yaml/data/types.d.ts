declare namespace API {
  namespace GaV2Yaml {
    namespace Data {
      namespace PostAnalyticsManagementUploadsDeleteUpload {
        type Body = $schemas.Holder;

        interface PathParams {
          /**
           * Account Id for the uploads to be deleted
           */
          accountId: any;
          /**
           * Custom data source Id for the uploads to be deleted
           */
          customDataSourceId: any;
          /**
           * Web property Id for the uploads to be deleted
           */
          webPropertyId: any;
        }
      }

      namespace PostAnalyticsManagementUploadsUpload {
        interface PathParams {
          /**
           * Account Id associated with the upload
           */
          accountId: any;
          /**
           * Custom data source Id to which the data being uploaded belongs
           */
          customDataSourceId: any;
          /**
           * Web property UA-string associated with the upload
           */
          webPropertyId: any;
        }
      }
    }
  }
}
