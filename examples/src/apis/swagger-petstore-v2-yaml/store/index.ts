import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 * @path `/store/inventory`
 */
export function getInventory(options?: {
  headers?: API.SwaggerPetstoreV2Yaml.Store.GetInventory.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Store.GetInventory.Response>(
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
  pathParams: API.SwaggerPetstoreV2Yaml.Store.DeleteOrder.PathParams;
  headers?: API.SwaggerPetstoreV2Yaml.Store.DeleteOrder.Headers;
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
  pathParams: API.SwaggerPetstoreV2Yaml.Store.GetOrderById.PathParams;
  headers?: API.SwaggerPetstoreV2Yaml.Store.GetOrderById.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Store.GetOrderById.Response>(
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
  headers?: API.SwaggerPetstoreV2Yaml.Store.PostPlaceOrder.Headers;
  body?: API.SwaggerPetstoreV2Yaml.Store.PostPlaceOrder.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Store.PostPlaceOrder.Response>(
    "post",
    "/store/order",
    options || {},
  );
}
