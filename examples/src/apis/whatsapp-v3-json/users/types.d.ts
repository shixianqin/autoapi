declare namespace API {
  namespace WhatsappV3Json {
    namespace Users {
      namespace PostLoginUser {
        type Body = $schemas.LoginAdminRequestBody;

        type Response = $schemas.UserLoginResponse;
      }

      namespace PostLogoutUser {}

      namespace DeleteUser {
        interface PathParams {
          UserUsername: string;
        }

        type Response = $schemas.UserResponse;
      }

      namespace GetUser {
        interface PathParams {
          UserUsername: string;
        }

        type Response = $schemas.DetailedUserResponse;
      }

      namespace PutUpdateUser {
        type Body = $schemas.UpdateUserRequestBody;

        interface PathParams {
          UserUsername: string;
        }

        type Response = $schemas.UserResponse;
      }

      namespace PostCreateUser {
        type Body = $schemas.CreateUserRequestBody;

        type Response = $schemas.UserResponse;
      }
    }
  }
}
