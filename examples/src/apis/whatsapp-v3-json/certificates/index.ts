import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Download-CA-Certificate
 * @path `/certificates/external/ca`
 */
export function getDownloadCaCertificate(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Certificates.GetDownloadCaCertificate.Response>(
    "get",
    "/certificates/external/ca",
    options || {},
  );
}

/**
 * Upload-Certificate
 * @path `/certificates/external`
 */
export function postUploadCertificate(options: {
  body: API.WhatsappV3Json.Certificates.PostUploadCertificate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/certificates/external", options);
}

/**
 * Delete Webhook CA Certificate
 * @path `/certificates/webhooks/ca`
 */
export function deleteWebhookCaCertificate(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", "/certificates/webhooks/ca", options || {});
}

/**
 * Download Webhook CA Certificate
 * @path `/certificates/webhooks/ca`
 */
export function getDownloadWebhookCaCertificate(options?: {
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.WhatsappV3Json.Certificates.GetDownloadWebhookCaCertificate.Response>(
    "get",
    "/certificates/webhooks/ca",
    options || {},
  );
}

/**
 * Upload Webhook CA Certificate
 * @path `/certificates/webhooks/ca`
 */
export function postUploadWebhookCaCertificate(options: {
  body: API.WhatsappV3Json.Certificates.PostUploadWebhookCaCertificate.Body;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/certificates/webhooks/ca", options);
}
