declare namespace API {
  namespace WhatsappV3Json {
    namespace Users {
      namespace PostLoginUser {
        type Body = $schemas.LoginAdminRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.UserLoginResponse;
      }

      namespace PostLogoutUser {
        interface Headers {
          [P: string]: any;
        }
      }

      namespace DeleteUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          UserUsername: string;
        }

        type Response = $schemas.UserResponse;
      }

      namespace GetUser {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          UserUsername: string;
        }

        type Response = $schemas.DetailedUserResponse;
      }

      namespace PutUpdateUser {
        type Body = $schemas.UpdateUserRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          UserUsername: string;
        }

        type Response = $schemas.UserResponse;
      }

      namespace PostCreateUser {
        type Body = $schemas.CreateUserRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.UserResponse;
      }
    }
  }
}
