declare namespace API {
  namespace SwaggerPetstoreV2Json {
    namespace Pet {
      namespace GetFindPetsByStatus {
        interface QueryParams {
          /**
           * Status values that need to be considered for filter
           */
          status: Array<"available" | "pending" | "sold">;
        }

        type Response = $schemas.Pet[];
      }

      namespace GetFindPetsByTags {
        interface QueryParams {
          /**
           * Tags to filter by
           */
          tags: string[];
        }

        type Response = $schemas.Pet[];
      }

      namespace PostUploadFile {
        interface FormData {
          /**
           * Additional data to pass to server
           */
          additionalMetadata?: string;
          /**
           * file to upload
           */
          file?: File;
        }

        interface PathParams {
          /**
           * ID of pet to update
           */
          petId: number | string;
        }

        type Response = $schemas.ApiResponse;
      }

      namespace DeletePet {
        interface Headers {
          api_key?: string;
          [P: string]: any;
        }

        interface PathParams {
          /**
           * Pet id to delete
           */
          petId: number | string;
        }
      }

      namespace GetById {
        interface PathParams {
          /**
           * ID of pet to return
           */
          petId: number | string;
        }

        type Response = $schemas.Pet;
      }

      namespace PostUpdateWithForm {
        interface FormData {
          /**
           * Updated name of the pet
           */
          name?: string;
          /**
           * Updated status of the pet
           */
          status?: string;
        }

        interface PathParams {
          /**
           * ID of pet that needs to be updated
           */
          petId: number | string;
        }
      }

      namespace PostAdd {
        type Body = $schemas.Pet;
      }

      namespace PutUpdate {
        type Body = $schemas.Pet;
      }
    }
  }
}
