declare namespace API {
  namespace TwitterV3Json {
    namespace Compliance {
      namespace GetBatchJob {
        interface PathParams {
          /**
           * The ID of the Compliance Job to retrieve.
           */
          id: $schemas.JobId;
        }

        interface QueryParams {
          /**
           * A comma separated list of ComplianceJob fields to display.
           * @minItems 1
           */
          "compliance_job.fields"?: Array<
            | "created_at"
            | "download_expires_at"
            | "download_url"
            | "id"
            | "name"
            | "resumable"
            | "status"
            | "type"
            | "upload_expires_at"
            | "upload_url"
          >;
        }

        type Response = $schemas.Get2ComplianceJobsIdResponse;
      }

      namespace GetListBatchJobs {
        interface QueryParams {
          /**
           * A comma separated list of ComplianceJob fields to display.
           * @minItems 1
           */
          "compliance_job.fields"?: Array<
            | "created_at"
            | "download_expires_at"
            | "download_url"
            | "id"
            | "name"
            | "resumable"
            | "status"
            | "type"
            | "upload_expires_at"
            | "upload_url"
          >;
          /**
           * Status of Compliance Job to list.
           */
          status?: "complete" | "created" | "failed" | "in_progress";
          /**
           * Type of Compliance Job to list.
           */
          type: "tweets" | "users";
        }

        type Response = $schemas.Get2ComplianceJobsResponse;
      }

      namespace PostCreateBatchJob {
        type Body = $schemas.CreateComplianceJobRequest;

        type Response = $schemas.CreateComplianceJobResponse;
      }

      namespace GetLikesStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Likes Compliance events will be provided.
           * @format date-time
           */
          end_time?: string;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Likes Compliance events will be provided.
           * @format date-time
           */
          start_time?: string;
        }

        type Response = $schemas.LikesComplianceStreamResponse;
      }

      namespace GetTweetsStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Post Compliance events will be provided.
           * @format date-time
           */
          end_time?: string;
          /**
           * The partition number.
           * @format int32
           * @maximum 4
           * @minimum 1
           */
          partition: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post Compliance events will be provided.
           * @format date-time
           */
          start_time?: string;
        }

        type Response = $schemas.TweetComplianceStreamResponse;
      }

      namespace GetTweetsLabelStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Post labels will be provided.
           * @format date-time
           */
          end_time?: string;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Post labels will be provided.
           * @format date-time
           */
          start_time?: string;
        }

        type Response = $schemas.TweetLabelStreamResponse;
      }

      namespace GetUsersStream {
        interface QueryParams {
          /**
           * The number of minutes of backfill requested.
           * @format int32
           * @maximum 5
           */
          backfill_minutes?: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.
           * @format date-time
           */
          end_time?: string;
          /**
           * The partition number.
           * @format int32
           * @maximum 4
           * @minimum 1
           */
          partition: number;
          /**
           * YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.
           * @format date-time
           */
          start_time?: string;
        }

        type Response = $schemas.UserComplianceStreamResponse;
      }
    }
  }
}
