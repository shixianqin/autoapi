declare namespace API {
  namespace SwaggerPetstoreV2Yaml {
    namespace $schemas {
      interface ApiResponse {
        /**
         * @format int32
         */
        code?: number;
        message?: string;
        type?: string;
      }

      interface Category {
        /**
         * @format int64
         */
        id?: number | string;
        name?: string;
      }

      interface Order {
        complete?: boolean;
        /**
         * @format int64
         */
        id?: number | string;
        /**
         * @format int64
         */
        petId?: number | string;
        /**
         * @format int32
         */
        quantity?: number;
        /**
         * @format date-time
         */
        shipDate?: string;
        /**
         * Order Status
         */
        status?: "approved" | "delivered" | "placed";
      }

      interface Pet {
        category?: $schemas.Category;
        /**
         * @format int64
         */
        id?: number | string;
        name: string;
        photoUrls: string[];
        /**
         * pet status in the store
         */
        status?: "available" | "pending" | "sold";
        tags?: $schemas.Tag[];
      }

      interface Tag {
        /**
         * @format int64
         */
        id?: number | string;
        name?: string;
      }

      interface User {
        email?: string;
        firstName?: string;
        /**
         * @format int64
         */
        id?: number | string;
        lastName?: string;
        password?: string;
        phone?: string;
        /**
         * User Status
         * @format int32
         */
        userStatus?: number;
        username?: string;
      }
    }
  }
}
