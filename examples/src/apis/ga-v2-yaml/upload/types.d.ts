declare namespace API {
  namespace GaV2Yaml {
    namespace Upload {
      namespace GetAnalyticsManagementUploads {
        interface PathParams {
          /**
           * Account Id for the upload to retrieve
           */
          accountId: any;
          /**
           * Custom data source Id for upload to retrieve
           */
          customDataSourceId: any;
          /**
           * Upload Id to retrieve
           */
          uploadId: any;
          /**
           * Web property Id for the upload to retrieve
           */
          webPropertyId: any;
        }
      }

      namespace GetAnalyticsManagementUploadsList {
        interface PathParams {
          /**
           * Account Id for the uploads to retrieve
           */
          accountId: any;
          /**
           * Custom data source Id for uploads to retrieve
           */
          customDataSourceId: any;
          /**
           * Web property Id for the uploads to retrieve
           */
          webPropertyId: any;
        }

        interface QueryParams {
          /**
           * The maximum number of uploads to include in this response
           */
          "max-results"?: any;
          /**
           * A 1-based index of the first upload to retrieve
           */
          "start-index"?: any;
        }
      }
    }
  }
}
