declare namespace API {
  namespace SwaggerPetstoreV2Json {
    namespace User {
      namespace PostCreateUsersWithArrayInput {
        type Body = $schemas.User[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace PostCreateUsersWithListInput {
        type Body = $schemas.User[];

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }

      namespace GetLogin {
        interface Headers {
          [P: string]: any;
        }

        interface QueryParams {
          /**
           * The password for login in clear text
           */
          password: string;
          /**
           * The user name for login
           */
          username: string;
        }

        type Response = string;
      }

      namespace GetLogout {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace DeleteUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name that needs to be deleted
           */
          username: string;
        }
      }

      namespace GetByName {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * The name that needs to be fetched. Use user1 for testing.
           */
          username: string;
        }

        type Response = $schemas.User;
      }

      namespace PutUpdate {
        type Body = $schemas.User;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * name that need to be updated
           */
          username: string;
        }
      }

      namespace PostCreate {
        type Body = $schemas.User;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }
      }
    }
  }
}
