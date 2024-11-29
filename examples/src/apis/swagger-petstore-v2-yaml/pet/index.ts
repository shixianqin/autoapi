import { request, type RequestConfig, type RequestContext } from "@/adapter";

/**
 * Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 * @path `/pet/findByStatus`
 */
export function getFindPetsByStatus(options: {
  queryParams: API.SwaggerPetstoreV2Yaml.Pet.GetFindPetsByStatus.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Pet.GetFindPetsByStatus.Response>(
    "get",
    "/pet/findByStatus",
    options,
  );
}

/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 * @path `/pet/findByTags`
 * @deprecated
 */
export function getFindPetsByTags(options: {
  queryParams: API.SwaggerPetstoreV2Yaml.Pet.GetFindPetsByTags.QueryParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Pet.GetFindPetsByTags.Response>(
    "get",
    "/pet/findByTags",
    options,
  );
}

/**
 * uploads an image
 * @path `/pet/{petId}/uploadImage`
 */
export function postUploadFile(options: {
  pathParams: API.SwaggerPetstoreV2Yaml.Pet.PostUploadFile.PathParams;
  headers?: Record<string, any>;
  formData?: API.SwaggerPetstoreV2Yaml.Pet.PostUploadFile.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Pet.PostUploadFile.Response>(
    "post",
    `/pet/${options.pathParams.petId}/uploadImage`,
    options,
  );
}

/**
 * Deletes a pet
 * @path `/pet/{petId}`
 */
export function deletePet(options: {
  pathParams: API.SwaggerPetstoreV2Yaml.Pet.DeletePet.PathParams;
  headers?: API.SwaggerPetstoreV2Yaml.Pet.DeletePet.Headers;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("delete", `/pet/${options.pathParams.petId}`, options);
}

/**
 * Returns a single pet
 * @summary Find pet by ID
 * @path `/pet/{petId}`
 */
export function getById(options: {
  pathParams: API.SwaggerPetstoreV2Yaml.Pet.GetById.PathParams;
  headers?: Record<string, any>;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<API.SwaggerPetstoreV2Yaml.Pet.GetById.Response>(
    "get",
    `/pet/${options.pathParams.petId}`,
    options,
  );
}

/**
 * Updates a pet in the store with form data
 * @path `/pet/{petId}`
 */
export function postUpdateWithForm(options: {
  pathParams: API.SwaggerPetstoreV2Yaml.Pet.PostUpdateWithForm.PathParams;
  headers?: Record<string, any>;
  formData?: API.SwaggerPetstoreV2Yaml.Pet.PostUpdateWithForm.FormData;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", `/pet/${options.pathParams.petId}`, options);
}

/**
 * Add a new pet to the store
 * @path `/pet`
 */
export function postAdd(options: {
  headers?: Record<string, any>;
  body: API.SwaggerPetstoreV2Yaml.Pet.PostAdd.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("post", "/pet", options);
}

/**
 * Update an existing pet
 * @path `/pet`
 */
export function putUpdate(options: {
  headers?: Record<string, any>;
  body: API.SwaggerPetstoreV2Yaml.Pet.PutUpdate.Body;
  config?: RequestConfig;
  context?: RequestContext;
}) {
  return request<any>("put", "/pet", options);
}
