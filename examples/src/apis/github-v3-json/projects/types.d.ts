declare namespace API {
  namespace GithubV3Json {
    namespace Projects {
      namespace GetListForOrg {
        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * Indicates the state of the projects to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Project[];
      }

      namespace PostCreateForOrg {
        interface Body {
          /**
           * The description of the project.
           */
          body?: string;
          /**
           * The name of the project.
           */
          name: string;
        }

        interface PathParams {
          /**
           * The organization name. The name is not case sensitive.
           */
          org: string;
        }

        type Response = $schemas.Project;
      }

      namespace PostMoveCard {
        interface Body {
          /**
           * The unique identifier of the column the card should be moved to
           */
          column_id?: number;
          /**
           * The position of the card in a column. Can be one of: `top`, `bottom`, or `after:<card_id>` to place after the specified card.
           */
          position: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the card.
           */
          card_id: number;
        }

        interface Response {}
      }

      namespace DeleteCard {
        interface PathParams {
          /**
           * The unique identifier of the card.
           */
          card_id: number;
        }
      }

      namespace GetCard {
        interface PathParams {
          /**
           * The unique identifier of the card.
           */
          card_id: number;
        }

        type Response = $schemas.ProjectCard;
      }

      namespace PatchUpdateCard {
        interface Body {
          /**
           * Whether or not the card is archived
           */
          archived?: boolean;
          /**
           * The project card's note
           */
          note?: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the card.
           */
          card_id: number;
        }

        type Response = $schemas.ProjectCard;
      }

      namespace GetListCards {
        interface PathParams {
          /**
           * The unique identifier of the column.
           */
          column_id: number;
        }

        interface QueryParams {
          /**
           * Filters the project cards that are returned by the card's state.
           * @default not_archived
           */
          archived_state?: "all" | "archived" | "not_archived";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.ProjectCard[];
      }

      namespace PostCreateCard {
        type Body =
          | {
              /**
               * The project card's note
               */
              note: string;
            }
          | {
              /**
               * The unique identifier of the content associated with the card
               */
              content_id: number;
              /**
               * The piece of content associated with the card
               */
              content_type: string;
            };

        interface PathParams {
          /**
           * The unique identifier of the column.
           */
          column_id: number;
        }

        type Response = $schemas.ProjectCard;
      }

      namespace PostMoveColumn {
        interface Body {
          /**
           * The position of the column in a project. Can be one of: `first`, `last`, or `after:<column_id>` to place after the specified column.
           */
          position: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the column.
           */
          column_id: number;
        }

        interface Response {}
      }

      namespace DeleteColumn {
        interface PathParams {
          /**
           * The unique identifier of the column.
           */
          column_id: number;
        }
      }

      namespace GetColumn {
        interface PathParams {
          /**
           * The unique identifier of the column.
           */
          column_id: number;
        }

        type Response = $schemas.ProjectColumn;
      }

      namespace PatchUpdateColumn {
        interface Body {
          /**
           * Name of the project column
           */
          name: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the column.
           */
          column_id: number;
        }

        type Response = $schemas.ProjectColumn;
      }

      namespace GetPermissionForUser {
        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        type Response = $schemas.ProjectCollaboratorPermission;
      }

      namespace DeleteRemoveCollaborator {
        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace PutAddCollaborator {
        interface Body {
          /**
           * The permission to grant the collaborator.
           * @default write
           */
          permission?: "admin" | "read" | "write";
        }

        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }
      }

      namespace GetListCollaborators {
        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
        }

        interface QueryParams {
          /**
           * Filters the collaborators by their affiliation. `outside` means outside collaborators of a project that are not a member of the project's organization. `direct` means collaborators with permissions to a project, regardless of organization membership status. `all` means all collaborators the authenticated user can see.
           * @default all
           */
          affiliation?: "all" | "direct" | "outside";
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.SimpleUser[];
      }

      namespace GetListColumns {
        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
        }

        type Response = $schemas.ProjectColumn[];
      }

      namespace PostCreateColumn {
        interface Body {
          /**
           * Name of the project column
           */
          name: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
        }

        type Response = $schemas.ProjectColumn;
      }

      namespace DeleteProjects {
        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
        }
      }

      namespace GetProjects {
        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
        }

        type Response = $schemas.Project;
      }

      namespace PatchUpdate {
        interface Body {
          /**
           * Body of the project
           */
          body?: string;
          /**
           * Name of the project
           */
          name?: string;
          /**
           * The baseline permission that all organization members have on this project
           */
          organization_permission?: "admin" | "none" | "read" | "write";
          /**
           * Whether or not this project can be seen by everyone.
           */
          private?: boolean;
          /**
           * State of the project; either 'open' or 'closed'
           */
          state?: string;
        }

        interface PathParams {
          /**
           * The unique identifier of the project.
           */
          project_id: number;
        }

        type Response = $schemas.Project;
      }

      namespace GetListForRepo {
        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * Indicates the state of the projects to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Project[];
      }

      namespace PostCreateForRepo {
        interface Body {
          /**
           * The description of the project.
           */
          body?: string;
          /**
           * The name of the project.
           */
          name: string;
        }

        interface PathParams {
          /**
           * The account owner of the repository. The name is not case sensitive.
           */
          owner: string;
          /**
           * The name of the repository. The name is not case sensitive.
           */
          repo: string;
        }

        type Response = $schemas.Project;
      }

      namespace PostCreateForAuthenticatedUser {
        interface Body {
          /**
           * Body of the project
           */
          body?: string;
          /**
           * Name of the project
           */
          name: string;
        }

        type Response = $schemas.Project;
      }

      namespace GetListForUser {
        interface PathParams {
          /**
           * The handle for the GitHub user account.
           */
          username: string;
        }

        interface QueryParams {
          /**
           * Page number of the results to fetch.
           * @default 1
           */
          page?: number;
          /**
           * The number of results per page (max 100).
           * @default 30
           */
          per_page?: number;
          /**
           * Indicates the state of the projects to return.
           * @default open
           */
          state?: "all" | "closed" | "open";
        }

        type Response = $schemas.Project[];
      }
    }
  }
}
