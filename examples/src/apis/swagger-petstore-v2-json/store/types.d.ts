declare namespace API {
  namespace SwaggerPetstoreV2Json {
    namespace Store {
      namespace GetInventory {
        interface Headers {
          [P: string]: any;
        }

        interface Response {
          [P: string]: number;
        }
      }

      namespace DeleteOrder {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of the order that needs to be deleted
           */
          orderId: number | string;
        }
      }

      namespace GetOrderById {
        interface Headers {
          [P: string]: any;
        }

        interface PathParams {
          /**
           * ID of pet that needs to be fetched
           */
          orderId: number | string;
        }

        type Response = $schemas.Order;
      }

      namespace PostPlaceOrder {
        type Body = $schemas.Order;

        interface Headers {
          "Content-Type"?: "application/json" | string;
          [P: string]: any;
        }

        type Response = $schemas.Order;
      }
    }
  }
}
