declare namespace API {
  namespace SwaggerHubV2Json {
    namespace Projects {
      namespace GetProjectMembersV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Project name (case-sensitive)
           */
          projectId: string;
        }

        type Response = $schemas.ProjectMemberList;
      }

      namespace PutUpdateProjectMembersV2 {
        type Body = $schemas.ProjectMemberList;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Project name (case-sensitive)
           */
          projectId: string;
        }
      }

      namespace PutAddSpecToProjectV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name of an API or domain that you want to add to the project. Case-sensitive.
           */
          name: string;
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Project name (case-sensitive)
           */
          projectId: string;
          /**
           * Definition type - `apis` or `domains`.
           */
          specType: "apis" | "domains";
        }
      }

      namespace DeleteProjectV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Project name (case-sensitive)
           */
          projectId: string;
        }
      }

      namespace GetProjectV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Project name (case-sensitive)
           */
          projectId: string;
        }

        type Response = $schemas.Project;
      }

      namespace PutSaveProjectV2 {
        type Body = $schemas.Project;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
          /**
           * Project name (case-sensitive)
           */
          projectId: string;
        }
      }

      namespace GetOrgV2 {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
        }

        interface QueryParams {
          /**
           * Number of results per page (1 .. 100)
           */
          limit?: number;
          /**
           * Return the project information excluding APIs and domains
           */
          nameOnly?: boolean;
          /**
           * Sort order
           */
          order?: "ASC" | "DESC";
          /**
           * Page to return
           */
          page?: number;
        }

        type Response = $schemas.ProjectsJson;
      }

      namespace PostCreateProject {
        type Body = $schemas.Project;

        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Organization name (case-sensitive)
           */
          owner: string;
        }
      }

      namespace GetUser {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * Number of results per page (1 .. 100)
           */
          limit?: number;
          /**
           * Return the project information excluding APIs and domains
           */
          nameOnly?: boolean;
          /**
           * Sort order
           */
          order?: "ASC" | "DESC";
          /**
           * Page to return
           */
          page?: number;
          /**
           * Sort criteria or result set:
           * NAME
           * OWNER
           *
           */
          sort?: "NAME" | "OWNER";
        }

        type Response = $schemas.ProjectsJson;
      }
    }
  }
}
