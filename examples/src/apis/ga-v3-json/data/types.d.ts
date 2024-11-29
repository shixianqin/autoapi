declare namespace API {
  namespace GaV3Json {
    namespace Data {
      namespace GetAnalyticsGa {
        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
           */
          dimensions?: string;
          /**
           * End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
           */
          "end-date": string;
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * A comma-separated list of dimension or metric filters to be applied to Analytics data.
           */
          filters?: string;
          /**
           * Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
           */
          ids: string;
          /**
           * The response will include empty rows if this parameter is set to true, the default is true
           */
          "include-empty-rows"?: boolean;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of entries to include in this feed.
           */
          "max-results"?: number;
          /**
           * A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
           */
          metrics: string;
          /**
           * OAuth 2.0 token for the current user.
           */
          oauth_token?: string;
          /**
           * The selected format for the response. Default format is JSON.
           */
          output?: "dataTable" | "json";
          /**
           * Returns response with indentations and line breaks.
           */
          prettyPrint?: boolean;
          /**
           * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
           */
          quotaUser?: string;
          /**
           * The desired sampling level.
           */
          samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION";
          /**
           * An Analytics segment to be applied to data.
           */
          segment?: string;
          /**
           * A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
           */
          sort?: string;
          /**
           * Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
           */
          "start-date": string;
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

        type Response = $schemas.GaData;
      }

      namespace GetAnalyticsMcf {
        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
           */
          dimensions?: string;
          /**
           * End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
           */
          "end-date": string;
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * A comma-separated list of dimension or metric filters to be applied to the Analytics data.
           */
          filters?: string;
          /**
           * Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
           */
          ids: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of entries to include in this feed.
           */
          "max-results"?: number;
          /**
           * A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
           */
          metrics: string;
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
           * The desired sampling level.
           */
          samplingLevel?: "DEFAULT" | "FASTER" | "HIGHER_PRECISION";
          /**
           * A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
           */
          sort?: string;
          /**
           * Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
           */
          "start-date": string;
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

        type Response = $schemas.McfData;
      }

      namespace GetAnalyticsRealtime {
        interface QueryParams {
          /**
           * Data format for the response.
           */
          alt?: "json";
          /**
           * A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
           */
          dimensions?: string;
          /**
           * Selector specifying which fields to include in a partial response.
           */
          fields?: string;
          /**
           * A comma-separated list of dimension or metric filters to be applied to real time data.
           */
          filters?: string;
          /**
           * Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
           */
          ids: string;
          /**
           * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
           */
          key?: string;
          /**
           * The maximum number of entries to include in this feed.
           */
          "max-results"?: number;
          /**
           * A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
           */
          metrics: string;
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
           * A comma-separated list of dimensions or metrics that determine the sort order for real time data.
           */
          sort?: string;
          /**
           * Deprecated. Please use quotaUser instead.
           */
          userIp?: string;
        }

        type Response = $schemas.RealtimeData;
      }
    }
  }
}
