declare namespace API {
  namespace WhatsappV3Json {
    namespace Groups {
      namespace DeleteDemoteGroupAdmin {
        type Body = $schemas.GroupAdminRequestBody;

        interface PathParams {
          GroupId: string;
        }
      }

      namespace PatchPromoteToGroupAdmin {
        type Body = $schemas.GroupAdminRequestBody;

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

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetGroupIconBinary {
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

        interface PathParams {
          GroupId: string;
        }
      }

      namespace DeleteGroupInvite {
        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetGroupInvite {
        interface PathParams {
          GroupId: string;
        }

        type Response = $schemas.GroupInviteResponse;
      }

      namespace PostLeaveGroup {
        interface PathParams {
          GroupId: string;
        }
      }

      namespace DeleteRemoveGroupParticipant {
        type Body = $schemas.RemoveGroupParticipantRequestBody;

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetGroupInfo {
        interface PathParams {
          GroupId: string;
        }

        type Response = $schemas.GroupResponse;
      }

      namespace PutUpdateGroupInfo {
        type Body = $schemas.UpdateGroupInfoRequestBody;

        interface PathParams {
          GroupId: string;
        }
      }

      namespace GetAll {
        type Response = $schemas.GroupsResponse;
      }

      namespace PostCreateGroup {
        type Body = $schemas.CreateGroupRequestBody;

        type Response = $schemas.GroupsResponse;
      }
    }
  }
}
