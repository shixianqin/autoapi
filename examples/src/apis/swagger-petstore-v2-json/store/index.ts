import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 * @path `/store/inventory`
 */
export function getInventory(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Json.Store.GetInventory.Response>(
    "get",
    "/store/inventory",
    options || {},
  );
}

/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @summary Delete purchase order by ID
 * @path `/store/order/{orderId}`
 */
export function deleteOrder(options: {
  pathParams: API.SwaggerPetstoreV2Json.Store.DeleteOrder.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>(
    "delete",
    `/store/order/${options.pathParams.orderId}`,
    options,
  );
}

/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @summary Find purchase order by ID
 * @path `/store/order/{orderId}`
 */
export function getOrderById(options: {
  pathParams: API.SwaggerPetstoreV2Json.Store.GetOrderById.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Json.Store.GetOrderById.Response>(
    "get",
    `/store/order/${options.pathParams.orderId}`,
    options,
  );
}

/**
 * Place an order for a pet
 * @path `/store/order`
 */
export function postPlaceOrder(options?: {
  headers?: Record<string, any>;
  body?: API.SwaggerPetstoreV2Json.Store.PostPlaceOrder.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Json.Store.PostPlaceOrder.Response>(
    "post",
    "/store/order",
    options || {},
  );
}
