import type { IDENTIFIERS, PARAMETER_IDENTIFIERS } from '../identifiers'

import type {
  IJsonSchema,
  OpenAPI,
  OpenAPIV2,
  OpenAPIV3,
  OpenAPIV3_1,
} from 'openapi-types'

// 补充类型
declare module 'openapi-types' {
  interface IJsonSchema {
    format?: string
    deprecated?: boolean
  }
}

export type HttpMethods = Lowercase<keyof typeof OpenAPIV3.HttpMethods>

export interface ReferenceMeta<T = any> {
  name: string
  namespace: string
  target: T
}

export interface ReferenceTarget<T = any> {
  segments: string[]
  target: T
}

export interface OperationMeta {
  originalPath: string
  path: string
  method: HttpMethods
  tags?: string[]
  summary?: string
  description?: string
  docs?: string
  operationId?: string
  deprecated?: boolean
  _customized?: boolean
}

export interface Operation extends OperationMeta {
  name: string
  tag: string
  types: OperationTypes
}

export interface RequestBodyTypes {
  [PARAMETER_IDENTIFIERS.formData]?: TypeDefinition
  [PARAMETER_IDENTIFIERS.body]?: TypeDefinition
}

export interface RequestTypes extends RequestBodyTypes {
  [PARAMETER_IDENTIFIERS.path]?: TypeDefinition
  [PARAMETER_IDENTIFIERS.query]?: TypeDefinition
  [PARAMETER_IDENTIFIERS.header]?: TypeDefinition
}

export interface ResponseTypes {
  [IDENTIFIERS.response]?: TypeDefinition
  [IDENTIFIERS.responses]?: ObjectType
}

/**
 * AutoAPI Operation types
 */
export interface OperationTypes extends RequestTypes, ResponseTypes {}

/**
 * OpenAPI Parameter Object
 */
export type ParameterObject = Exclude<OpenAPI.Parameter, ReferenceObject>

/**
 * OpenAPI reference object type
 */
export type ReferenceObject = OpenAPIV2.ReferenceObject | OpenAPIV3.ReferenceObject | OpenAPIV3_1.ReferenceObject

/**
 * The schema item type for each version of OpenAPI
 */
export type SchemaObject = OpenAPIV2.SchemaObject | OpenAPIV3.SchemaObject | OpenAPIV3_1.SchemaObject | IJsonSchema

/**
 * OpenAPI Composite Array types
 * `anyOf`, `oneOf`, `allOf`
 */
export type CompositeArray = (ReferenceObject | SchemaObject)[]

/**
 * OpenAPI Response Object
 */
export type ResponseObject = OpenAPIV2.ResponseObject | OpenAPIV3.ResponseObject | OpenAPIV3_1.ResponseObject

/**
 * OpenAPI Headers Object
 */
// export type HeadersObject = Required<ResponseObject>['headers']

/**
 * The type of OpenAPI path item for each version
 */
export type PathItemObject = OpenAPIV2.PathItemObject & OpenAPIV3.PathItemObject & OpenAPIV3_1.PathItemObject

/**
 * Type Declaration
 */
export interface TypeDeclaration {
  name: string
  body: TypeDefinition
  description?: string
  deprecated?: boolean
}

/**
 * Type Definition
 */
export type TypeDefinition =
  | undefined // unknown
  | null // unknown
  | string // Literal: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
  | ObjectType
  | ArrayType
  | EnumType
  | IntersectionType
  | UnionType
  | GenericType
  | InferenceType
  | ReferenceType

/**
 * Object Type
 * @docs https://www.typescriptlang.org/docs/handbook/2/objects.html
 */
export interface ObjectType {
  type: 'object'
  properties: PropertySignature[]
}

/**
 * Property Signature Type
 */
export interface PropertySignature {
  name: string
  type: TypeDefinition
  description?: string
  required?: boolean
  deprecated?: boolean
  additional?: boolean // additionalProperties, `[P: string]: any`
  disabled?: boolean

  schema?: SchemaObject & {
    default?: any
    format?: string
  }
}

/**
 * Array Type
 * @docs https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays
 */
export interface ArrayType {
  type: 'array'
  items: TypeDefinition[]
}

/**
 * Enum Type
 */
export interface EnumType {
  type: 'enum'
  items: (string | number)[]
}

/**
 * Intersection Type (AND)
 * @docs https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
 */
export interface IntersectionType {
  type: 'intersection'
  items: TypeDefinition[]
}

/**
 * Union Type (OR)
 * @docs https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 */
export interface UnionType {
  type: 'union'
  items: TypeDefinition[]
}

/**
 * Generic Type (Foo<a, b, c>)
 * @docs https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types
 */
export interface GenericType {
  type: 'generic'
  name: string
  arguments: TypeDefinition[]
}

/**
 * Inference Type (Inference of type from the input)
 * @docs https://www.typescriptlang.org/docs/handbook/type-inference.html#handbook-content
 */
export interface InferenceType {
  type: 'inference'
  input: any
  required?: boolean
}

/**
 * Reference Type (OpenAPI)
 */
export interface ReferenceType<T = any> {
  type: 'reference'
  value: string
  target: T
  body: TypeDefinition
}
