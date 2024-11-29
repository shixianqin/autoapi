export enum IDENTIFIERS {
  requestAdapter = 'request',
  requestOptions = 'options',
  requestConfig = 'config',
  requestConfigType = 'RequestConfig',
  requestContext = 'context',
  requestContextType = 'RequestContext',
  response = 'response',
  responses = 'responses',
  responseWrapper = 'ResponseWrapper',
}

export enum PARAMETER_IDENTIFIERS {
  path = 'pathParams',
  query = 'queryParams',
  formData = 'formData',
  body = 'body',
  header = 'headers',
}

export type ParameterLocations = keyof typeof PARAMETER_IDENTIFIERS

export type SchemaLocations = ParameterLocations | 'response'

export const PARAMETER_LOCATIONS = Object.keys(PARAMETER_IDENTIFIERS) as ParameterLocations[]
