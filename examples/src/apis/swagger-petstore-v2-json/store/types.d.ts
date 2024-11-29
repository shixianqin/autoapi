declare namespace API {
  namespace SwaggerPetstoreV2Json {
    namespace Store {
      namespace GetInventory {
        interface Response {
          [P: string]: number;
        }
      }

      namespace DeleteOrder {
        interface PathParams {
          /**
           * ID of the order that needs to be deleted
           */
          orderId: number | string;
        }
      }

      namespace GetOrderById {
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

        type Response = $schemas.Order;
      }
    }
  }
}
