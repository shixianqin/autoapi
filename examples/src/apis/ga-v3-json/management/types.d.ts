declare namespace API {
  namespace GaV3Json {
    namespace Management {
      namespace GetAnalyticsAccountSummariesList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.AccountSummaries;
      }

      namespace DeleteAnalyticsAccountUserLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the user link for.
           */
          accountId: string;
          /**
           * Link ID to delete the user link for.
           */
          linkId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace PutAnalyticsAccountUserLinksUpdate {
        type Body = $schemas.EntityUserLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the account-user link for.
           */
          accountId: string;
          /**
           * Link ID to update the account-user link for.
           */
          linkId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLink;
      }

      namespace GetAnalyticsAccountUserLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the user links for.
           */
          accountId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of account-user links to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLinks;
      }

      namespace PostAnalyticsAccountUserLinksInsert {
        type Body = $schemas.EntityUserLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the user link for.
           */
          accountId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLink;
      }

      namespace DeleteAnalyticsFilters {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the filter for.
           */
          accountId: string;
          /**
           * ID of the filter to be deleted.
           */
          filterId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Filter;
      }

      namespace GetAnalyticsFilters {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve filters for.
           */
          accountId: string;
          /**
           * Filter ID to retrieve filters for.
           */
          filterId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Filter;
      }

      namespace PatchAnalyticsFilters {
        type Body = $schemas.Filter;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the filter belongs.
           */
          accountId: string;
          /**
           * ID of the filter to be updated.
           */
          filterId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Filter;
      }

      namespace PutAnalyticsFiltersUpdate {
        type Body = $schemas.Filter;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the filter belongs.
           */
          accountId: string;
          /**
           * ID of the filter to be updated.
           */
          filterId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Filter;
      }

      namespace GetAnalyticsFiltersList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve filters for.
           */
          accountId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of filters to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Filters;
      }

      namespace PostAnalyticsFiltersInsert {
        type Body = $schemas.Filter;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create filter for.
           */
          accountId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Filter;
      }

      namespace PostAnalyticsUploadsDeleteUploadData {
        type Body = $schemas.AnalyticsDataimportDeleteUploadDataRequest;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account Id for the uploads to be deleted.
           */
          accountId: string;
          /**
           * Custom data source Id for the uploads to be deleted.
           */
          customDataSourceId: string;
          /**
           * Web property Id for the uploads to be deleted.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsUploads {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account Id for the upload to retrieve.
           */
          accountId: string;
          /**
           * Custom data source Id for upload to retrieve.
           */
          customDataSourceId: string;
          /**
           * Upload Id to retrieve.
           */
          uploadId: string;
          /**
           * Web property Id for the upload to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Upload;
      }

      namespace GetAnalyticsUploadsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account Id for the uploads to retrieve.
           */
          accountId: string;
          /**
           * Custom data source Id for uploads to retrieve.
           */
          customDataSourceId: string;
          /**
           * Web property Id for the uploads to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of uploads to include in this response.
           * @minimum 1
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Uploads;
      }

      namespace PostAnalyticsUploadsUploadData {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account Id associated with the upload.
           */
          accountId: string;
          /**
           * Custom data source Id to which the data being uploaded belongs.
           */
          customDataSourceId: string;
          /**
           * Web property UA-string associated with the upload.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Upload;
      }

      namespace GetAnalyticsCustomDataSourcesList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account Id for the custom data sources to retrieve.
           */
          accountId: string;
          /**
           * Web property Id for the custom data sources to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of custom data sources to include in this response.
           * @minimum 1
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomDataSources;
      }

      namespace GetAnalyticsCustomDimensions {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom dimension to retrieve.
           */
          accountId: string;
          /**
           * The ID of the custom dimension to retrieve.
           */
          customDimensionId: string;
          /**
           * Web property ID for the custom dimension to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomDimension;
      }

      namespace PatchAnalyticsCustomDimensions {
        type Body = $schemas.CustomDimension;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom dimension to update.
           */
          accountId: string;
          /**
           * Custom dimension ID for the custom dimension to update.
           */
          customDimensionId: string;
          /**
           * Web property ID for the custom dimension to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
           */
          ignoreCustomDataSourceLinks?: boolean;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomDimension;
      }

      namespace PutAnalyticsCustomDimensionsUpdate {
        type Body = $schemas.CustomDimension;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom dimension to update.
           */
          accountId: string;
          /**
           * Custom dimension ID for the custom dimension to update.
           */
          customDimensionId: string;
          /**
           * Web property ID for the custom dimension to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
           */
          ignoreCustomDataSourceLinks?: boolean;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomDimension;
      }

      namespace GetAnalyticsCustomDimensionsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom dimensions to retrieve.
           */
          accountId: string;
          /**
           * Web property ID for the custom dimensions to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of custom dimensions to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomDimensions;
      }

      namespace PostAnalyticsCustomDimensionsInsert {
        type Body = $schemas.CustomDimension;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom dimension to create.
           */
          accountId: string;
          /**
           * Web property ID for the custom dimension to create.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomDimension;
      }

      namespace GetAnalyticsCustomMetrics {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom metric to retrieve.
           */
          accountId: string;
          /**
           * The ID of the custom metric to retrieve.
           */
          customMetricId: string;
          /**
           * Web property ID for the custom metric to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomMetric;
      }

      namespace PatchAnalyticsCustomMetrics {
        type Body = $schemas.CustomMetric;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom metric to update.
           */
          accountId: string;
          /**
           * Custom metric ID for the custom metric to update.
           */
          customMetricId: string;
          /**
           * Web property ID for the custom metric to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
           */
          ignoreCustomDataSourceLinks?: boolean;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomMetric;
      }

      namespace PutAnalyticsCustomMetricsUpdate {
        type Body = $schemas.CustomMetric;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom metric to update.
           */
          accountId: string;
          /**
           * Custom metric ID for the custom metric to update.
           */
          customMetricId: string;
          /**
           * Web property ID for the custom metric to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
           */
          ignoreCustomDataSourceLinks?: boolean;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomMetric;
      }

      namespace GetAnalyticsCustomMetricsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom metrics to retrieve.
           */
          accountId: string;
          /**
           * Web property ID for the custom metrics to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of custom metrics to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomMetrics;
      }

      namespace PostAnalyticsCustomMetricsInsert {
        type Body = $schemas.CustomMetric;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the custom metric to create.
           */
          accountId: string;
          /**
           * Web property ID for the custom dimension to create.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.CustomMetric;
      }

      namespace DeleteAnalyticsWebPropertyAdWordsLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to.
           */
          accountId: string;
          /**
           * Web property Google Ads link ID.
           */
          webPropertyAdWordsLinkId: string;
          /**
           * Web property ID to delete the Google Ads link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsWebPropertyAdWordsLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to.
           */
          accountId: string;
          /**
           * Web property-Google Ads link ID.
           */
          webPropertyAdWordsLinkId: string;
          /**
           * Web property ID to retrieve the Google Ads link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityAdWordsLink;
      }

      namespace PatchAnalyticsWebPropertyAdWordsLinks {
        type Body = $schemas.EntityAdWordsLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to.
           */
          accountId: string;
          /**
           * Web property-Google Ads link ID.
           */
          webPropertyAdWordsLinkId: string;
          /**
           * Web property ID to retrieve the Google Ads link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityAdWordsLink;
      }

      namespace PutAnalyticsWebPropertyAdWordsLinksUpdate {
        type Body = $schemas.EntityAdWordsLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to.
           */
          accountId: string;
          /**
           * Web property-Google Ads link ID.
           */
          webPropertyAdWordsLinkId: string;
          /**
           * Web property ID to retrieve the Google Ads link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityAdWordsLink;
      }

      namespace GetAnalyticsWebPropertyAdWordsLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the account which the given web property belongs to.
           */
          accountId: string;
          /**
           * Web property ID to retrieve the Google Ads links for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of webProperty-Google Ads links to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first webProperty-Google Ads link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityAdWordsLinks;
      }

      namespace PostAnalyticsWebPropertyAdWordsLinksInsert {
        type Body = $schemas.EntityAdWordsLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the Google Analytics account to create the link for.
           */
          accountId: string;
          /**
           * Web property ID to create the link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityAdWordsLink;
      }

      namespace DeleteAnalyticsWebpropertyUserLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the user link for.
           */
          accountId: string;
          /**
           * Link ID to delete the user link for.
           */
          linkId: string;
          /**
           * Web Property ID to delete the user link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace PutAnalyticsWebpropertyUserLinksUpdate {
        type Body = $schemas.EntityUserLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the account-user link for.
           */
          accountId: string;
          /**
           * Link ID to update the account-user link for.
           */
          linkId: string;
          /**
           * Web property ID to update the account-user link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLink;
      }

      namespace GetAnalyticsWebpropertyUserLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID which the given web property belongs to.
           */
          accountId: string;
          /**
           * Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of webProperty-user Links to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLinks;
      }

      namespace PostAnalyticsWebpropertyUserLinksInsert {
        type Body = $schemas.EntityUserLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the user link for.
           */
          accountId: string;
          /**
           * Web Property ID to create the user link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLink;
      }

      namespace DeleteAnalyticsProfileUserLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the user link for.
           */
          accountId: string;
          /**
           * Link ID to delete the user link for.
           */
          linkId: string;
          /**
           * View (Profile) ID to delete the user link for.
           */
          profileId: string;
          /**
           * Web Property ID to delete the user link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace PutAnalyticsProfileUserLinksUpdate {
        type Body = $schemas.EntityUserLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the user link for.
           */
          accountId: string;
          /**
           * Link ID to update the user link for.
           */
          linkId: string;
          /**
           * View (Profile ID) to update the user link for.
           */
          profileId: string;
          /**
           * Web Property ID to update the user link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLink;
      }

      namespace GetAnalyticsProfileUserLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID which the given view (profile) belongs to.
           */
          accountId: string;
          /**
           * View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
           */
          profileId: string;
          /**
           * Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of profile-user links to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLinks;
      }

      namespace PostAnalyticsProfileUserLinksInsert {
        type Body = $schemas.EntityUserLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the user link for.
           */
          accountId: string;
          /**
           * View (Profile) ID to create the user link for.
           */
          profileId: string;
          /**
           * Web Property ID to create the user link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.EntityUserLink;
      }

      namespace DeleteAnalyticsExperiments {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the experiment belongs
           */
          accountId: string;
          /**
           * ID of the experiment to delete
           */
          experimentId: string;
          /**
           * View (Profile) ID to which the experiment belongs
           */
          profileId: string;
          /**
           * Web property ID to which the experiment belongs
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsExperiments {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the experiment for.
           */
          accountId: string;
          /**
           * Experiment ID to retrieve the experiment for.
           */
          experimentId: string;
          /**
           * View (Profile) ID to retrieve the experiment for.
           */
          profileId: string;
          /**
           * Web property ID to retrieve the experiment for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Experiment;
      }

      namespace PatchAnalyticsExperiments {
        type Body = $schemas.Experiment;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID of the experiment to update.
           */
          accountId: string;
          /**
           * Experiment ID of the experiment to update.
           */
          experimentId: string;
          /**
           * View (Profile) ID of the experiment to update.
           */
          profileId: string;
          /**
           * Web property ID of the experiment to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Experiment;
      }

      namespace PutAnalyticsExperimentsUpdate {
        type Body = $schemas.Experiment;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID of the experiment to update.
           */
          accountId: string;
          /**
           * Experiment ID of the experiment to update.
           */
          experimentId: string;
          /**
           * View (Profile) ID of the experiment to update.
           */
          profileId: string;
          /**
           * Web property ID of the experiment to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Experiment;
      }

      namespace GetAnalyticsExperimentsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve experiments for.
           */
          accountId: string;
          /**
           * View (Profile) ID to retrieve experiments for.
           */
          profileId: string;
          /**
           * Web property ID to retrieve experiments for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of experiments to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Experiments;
      }

      namespace PostAnalyticsExperimentsInsert {
        type Body = $schemas.Experiment;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the experiment for.
           */
          accountId: string;
          /**
           * View (Profile) ID to create the experiment for.
           */
          profileId: string;
          /**
           * Web property ID to create the experiment for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Experiment;
      }

      namespace GetAnalyticsGoals {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the goal for.
           */
          accountId: string;
          /**
           * Goal ID to retrieve the goal for.
           */
          goalId: string;
          /**
           * View (Profile) ID to retrieve the goal for.
           */
          profileId: string;
          /**
           * Web property ID to retrieve the goal for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Goal;
      }

      namespace PatchAnalyticsGoals {
        type Body = $schemas.Goal;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the goal.
           */
          accountId: string;
          /**
           * Index of the goal to be updated.
           */
          goalId: string;
          /**
           * View (Profile) ID to update the goal.
           */
          profileId: string;
          /**
           * Web property ID to update the goal.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Goal;
      }

      namespace PutAnalyticsGoalsUpdate {
        type Body = $schemas.Goal;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to update the goal.
           */
          accountId: string;
          /**
           * Index of the goal to be updated.
           */
          goalId: string;
          /**
           * View (Profile) ID to update the goal.
           */
          profileId: string;
          /**
           * Web property ID to update the goal.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Goal;
      }

      namespace GetAnalyticsGoalsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
           */
          accountId: string;
          /**
           * View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
           */
          profileId: string;
          /**
           * Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of goals to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Goals;
      }

      namespace PostAnalyticsGoalsInsert {
        type Body = $schemas.Goal;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the goal for.
           */
          accountId: string;
          /**
           * View (Profile) ID to create the goal for.
           */
          profileId: string;
          /**
           * Web property ID to create the goal for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Goal;
      }

      namespace DeleteAnalyticsProfileFilterLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the profile filter link belongs.
           */
          accountId: string;
          /**
           * ID of the profile filter link to delete.
           */
          linkId: string;
          /**
           * Profile ID to which the filter link belongs.
           */
          profileId: string;
          /**
           * Web property Id to which the profile filter link belongs.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsProfileFilterLinks {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve profile filter link for.
           */
          accountId: string;
          /**
           * ID of the profile filter link.
           */
          linkId: string;
          /**
           * Profile ID to retrieve filter link for.
           */
          profileId: string;
          /**
           * Web property Id to retrieve profile filter link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.ProfileFilterLink;
      }

      namespace PatchAnalyticsProfileFilterLinks {
        type Body = $schemas.ProfileFilterLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which profile filter link belongs.
           */
          accountId: string;
          /**
           * ID of the profile filter link to be updated.
           */
          linkId: string;
          /**
           * Profile ID to which filter link belongs
           */
          profileId: string;
          /**
           * Web property Id to which profile filter link belongs
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.ProfileFilterLink;
      }

      namespace PutAnalyticsProfileFilterLinksUpdate {
        type Body = $schemas.ProfileFilterLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which profile filter link belongs.
           */
          accountId: string;
          /**
           * ID of the profile filter link to be updated.
           */
          linkId: string;
          /**
           * Profile ID to which filter link belongs
           */
          profileId: string;
          /**
           * Web property Id to which profile filter link belongs
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.ProfileFilterLink;
      }

      namespace GetAnalyticsProfileFilterLinksList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve profile filter links for.
           */
          accountId: string;
          /**
           * Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
           */
          profileId: string;
          /**
           * Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of profile filter links to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.ProfileFilterLinks;
      }

      namespace PostAnalyticsProfileFilterLinksInsert {
        type Body = $schemas.ProfileFilterLink;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create profile filter link for.
           */
          accountId: string;
          /**
           * Profile ID to create filter link for.
           */
          profileId: string;
          /**
           * Web property Id to create profile filter link for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.ProfileFilterLink;
      }

      namespace DeleteAnalyticsUnsampledReports {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the unsampled report for.
           */
          accountId: string;
          /**
           * View (Profile) ID to delete the unsampled report for.
           */
          profileId: string;
          /**
           * ID of the unsampled report to be deleted.
           */
          unsampledReportId: string;
          /**
           * Web property ID to delete the unsampled reports for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsUnsampledReports {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve unsampled report for.
           */
          accountId: string;
          /**
           * View (Profile) ID to retrieve unsampled report for.
           */
          profileId: string;
          /**
           * ID of the unsampled report to retrieve.
           */
          unsampledReportId: string;
          /**
           * Web property ID to retrieve unsampled reports for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.UnsampledReport;
      }

      namespace GetAnalyticsUnsampledReportsList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
           */
          accountId: string;
          /**
           * View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
           */
          profileId: string;
          /**
           * Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of unsampled reports to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.UnsampledReports;
      }

      namespace PostAnalyticsUnsampledReportsInsert {
        type Body = $schemas.UnsampledReport;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the unsampled report for.
           */
          accountId: string;
          /**
           * View (Profile) ID to create the unsampled report for.
           */
          profileId: string;
          /**
           * Web property ID to create the unsampled report for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.UnsampledReport;
      }

      namespace DeleteAnalyticsProfiles {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to delete the view (profile) for.
           */
          accountId: string;
          /**
           * ID of the view (profile) to be deleted.
           */
          profileId: string;
          /**
           * Web property ID to delete the view (profile) for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsProfiles {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the view (profile) for.
           */
          accountId: string;
          /**
           * View (Profile) ID to retrieve the view (profile) for.
           */
          profileId: string;
          /**
           * Web property ID to retrieve the view (profile) for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Profile;
      }

      namespace PatchAnalyticsProfiles {
        type Body = $schemas.Profile;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the view (profile) belongs
           */
          accountId: string;
          /**
           * ID of the view (profile) to be updated.
           */
          profileId: string;
          /**
           * Web property ID to which the view (profile) belongs
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Profile;
      }

      namespace PutAnalyticsProfilesUpdate {
        type Body = $schemas.Profile;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the view (profile) belongs
           */
          accountId: string;
          /**
           * ID of the view (profile) to be updated.
           */
          profileId: string;
          /**
           * Web property ID to which the view (profile) belongs
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Profile;
      }

      namespace GetAnalyticsProfilesList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
           */
          accountId: string;
          /**
           * Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of views (profiles) to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Profiles;
      }

      namespace PostAnalyticsProfilesInsert {
        type Body = $schemas.Profile;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the view (profile) for.
           */
          accountId: string;
          /**
           * Web property ID to create the view (profile) for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Profile;
      }

      namespace DeleteAnalyticsRemarketingAudience {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the remarketing audience belongs.
           */
          accountId: string;
          /**
           * The ID of the remarketing audience to delete.
           */
          remarketingAudienceId: string;
          /**
           * Web property ID to which the remarketing audience belongs.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }
      }

      namespace GetAnalyticsRemarketingAudience {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account ID of the remarketing audience to retrieve.
           */
          accountId: string;
          /**
           * The ID of the remarketing audience to retrieve.
           */
          remarketingAudienceId: string;
          /**
           * The web property ID of the remarketing audience to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.RemarketingAudience;
      }

      namespace PatchAnalyticsRemarketingAudience {
        type Body = $schemas.RemarketingAudience;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account ID of the remarketing audience to update.
           */
          accountId: string;
          /**
           * The ID of the remarketing audience to update.
           */
          remarketingAudienceId: string;
          /**
           * The web property ID of the remarketing audience to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.RemarketingAudience;
      }

      namespace PutAnalyticsRemarketingAudienceUpdate {
        type Body = $schemas.RemarketingAudience;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account ID of the remarketing audience to update.
           */
          accountId: string;
          /**
           * The ID of the remarketing audience to update.
           */
          remarketingAudienceId: string;
          /**
           * The web property ID of the remarketing audience to update.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.RemarketingAudience;
      }

      namespace GetAnalyticsRemarketingAudienceList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account ID of the remarketing audiences to retrieve.
           */
          accountId: string;
          /**
           * The web property ID of the remarketing audiences to retrieve.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of remarketing audiences to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          type?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.RemarketingAudiences;
      }

      namespace PostAnalyticsRemarketingAudienceInsert {
        type Body = $schemas.RemarketingAudience;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The account ID for which to create the remarketing audience.
           */
          accountId: string;
          /**
           * Web property ID for which to create the remarketing audience.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.RemarketingAudience;
      }

      namespace GetAnalyticsWebproperties {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve the web property for.
           */
          accountId: string;
          /**
           * ID to retrieve the web property for.
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Webproperty;
      }

      namespace PatchAnalyticsWebproperties {
        type Body = $schemas.Webproperty;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the web property belongs
           */
          accountId: string;
          /**
           * Web property ID
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Webproperty;
      }

      namespace PutAnalyticsWebpropertiesUpdate {
        type Body = $schemas.Webproperty;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to which the web property belongs
           */
          accountId: string;
          /**
           * Web property ID
           */
          webPropertyId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Webproperty;
      }

      namespace GetAnalyticsWebpropertiesList {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
           */
          accountId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of web properties to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Webproperties;
      }

      namespace PostAnalyticsWebpropertiesInsert {
        type Body = $schemas.Webproperty;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Account ID to create the web property for.
           */
          accountId: string;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Webproperty;
      }

      namespace GetAnalyticsAccountsList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of accounts to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Accounts;
      }

      namespace PostAnalyticsClientIdHashClientId {
        type Body = $schemas.HashClientIdRequest;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.HashClientIdResponse;
      }

      namespace GetAnalyticsSegmentsList {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of segments to include in this response.
           */
          "max-results"?: number;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
           * @minimum 1
           */
          "start-index"?: number;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.Segments;
      }
    }
  }
}
