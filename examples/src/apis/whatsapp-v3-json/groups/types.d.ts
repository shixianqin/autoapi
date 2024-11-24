declare namespace API {
  namespace WhatsappV3Json {
    namespace Groups {
      namespace DeleteDemoteGroupAdmin {
        type Body = $schemas.GroupAdminRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace PatchPromoteToGroupAdmin {
        type Body = $schemas.GroupAdminRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace DeleteGroupIcon {
        interface FormData {
          /**
           * @format binary
           */
          File: ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
        }

        interface Headers {
          "Content-Type"?: "multipart/form-data" | string;
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetGroupIconBinary {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace PostSetGroupIcon {
        interface FormData {
          /**
           * @format binary
           */
          File: ArrayBuffer | ArrayBufferView | Blob | Buffer | File;
        }

        interface Headers {
          "Content-Type"?: "multipart/form-data" | string;
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace DeleteGroupInvite {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetGroupInvite {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }

        type Response = $schemas.GroupInviteResponse;
      }

      namespace PostLeaveGroup {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace DeleteRemoveGroupParticipant {
        type Body = $schemas.RemoveGroupParticipantRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetGroupInfo {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }

        type Response = $schemas.GroupResponse;
      }

      namespace PutUpdateGroupInfo {
        type Body = $schemas.UpdateGroupInfoRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetAll {
        interface Headers {
          [P: string]: any;
        }

        type Response = $schemas.GroupsResponse;
      }

      namespace PostCreateGroup {
        type Body = $schemas.CreateGroupRequestBody;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.GroupsResponse;
      }
    }
  }
}
