# AutoAPI Configuration

AutoAPI is a tool designed to generate TypeScript types and request methods based on OpenAPI/Swagger documents. Below is
a detailed description of its core configuration options.

English | [简体中文](./configuration-zh.md)

---

## Configuration Options

### `docs`

#### Description

Defines a list of document configurations to process.

#### Type

[`DocumentOptions[]`](#document-options)

#### Required

Yes

---

### `sharedOptions`

#### Description

Defines shared configuration for multiple documents, reducing duplicate definitions.

#### Type

[`Omit<DocumentOptions, 'namespace' | 'source'>`](#document-options)

---

### `outDir`

#### Description

Specifies the output directory for generated request methods and types.

#### Type

`string`

#### Default

`src/apis`

---

### `storeDocs`

#### Description

Determines whether to store downloaded documents on disk for version control or backup purposes.

#### Type

`boolean`

#### Default

`false`

---

## Document Options

Detailed configuration options for individual documents.

### `namespace`

#### Description

Specifies the namespace for the document, used to categorize generated request methods and types.

#### Type

`string`

#### Required

Yes

---

### `adapter`

#### Description

Specifies the path to the request adapter, either as a local file path or a module alias.

#### Type

`string`

#### Required

Yes (can be defined in shared configuration)

#### Example

```typescript
const options = {
  adapter: 'path/to/adapter/file.ts',
};

const options2 = {
  adapter: '@/utils/request.ts',
};
```  

---

### `source`

#### Description

Defines the source of the document, which can be a remote URL, a local file path, a document object, or an asynchronous
function returning the document.

#### Type

`string | object | (() => string | object | Promise<string | object>)`

#### Examples

- **Remote Document**

  ```typescript
  const options = {
    source: 'https://api.example.com/autoapi.json', // Supports JSON or YAML
  };
  ```

- **Local Document**

  ```typescript
  const options = {
    source: path.resolve(__dirname, './docs/autoapi.json'), // Supports JSON or YAML
  };
  ```

- **Document Object**

  ```typescript
  const options = {
    source: { /* OpenAPI.Document */ },
  };
  ```

- **Custom Asynchronous Fetch**

  ```typescript
  const options = {
    source: async () => {
      const res = await fetch('https://api.example.com/autoapi.json');
      return res.json();
    },
  };
  ```  

---

### `include`

#### Description

Defines the interfaces or paths to include, supporting filtering by tags, paths, or custom logic.

#### Type

`Filters`

#### Examples

- **Filter by Tags**

   ```typescript
   const options = {
     include: ['Tag1', 'Tag2'],
   };
   ```

- **Filter by Paths**

   ```typescript
   const options = {
     include: {
       '/path/to/api': true,
       '/path/to/api2': ['get', 'post'],
     },
   };
   ```

- **Custom Logic**

   ```typescript
   const options = {
     include: (meta: OperationMeta) => meta.path.includes('/user'),
   };
   ```  

---

### `exclude`

#### Description

Defines the interfaces or paths to exclude, using the same filtering rules as [`include`](#include).

#### Type

`Filters`

---

### `rootNamespace`

#### Description

Top-level namespace for generated API types, used to organize interfaces and types hierarchically.

#### Type

`string`

#### Default

`API`

---

### `requestConfig`

#### Description

Specifies the parameter type for request configuration, such
as [AxiosRequestConfig](https://axios-http.com/docs/req_config).

#### Type

[`ParameterOptions`](#parameter-options)

---

### `requestContext`

#### Description

Defines the type of context parameters for requests, especially useful for server-side rendering (SSR).

#### Type

[`ParameterOptions`](#parameter-options)

---

### `responseWrapper`

#### Description

Specifies the type wrapper for response data, used to handle discrepancies between actual response structures and those
defined in the document.

#### Type

[`TypeDefinition`](#type-definition)

#### Example

```typescript
const options = {
  responseWrapper: {
    type: 'object',
    properties: [
      { name: 'data', type: 'T' },
    ],
  },
};
```  

---

### `responseReturnPath`

#### Description

Specifies the path to access response data, adjusting the return type of the operation method.

#### Type

`string`

#### Example

```typescript
const options = {
  responseReturnPath: '.data',
};
```  

---

### `getPath`

#### Description

Customizes the logic for generating interface paths.

#### Type

`(meta: OperationMeta) => string`

---

### `getTag`

#### Description

Customizes the logic for grouping interfaces.

#### Type

`(meta: OperationMeta) => string`

---

### `getName`

#### Description

Customizes the logic for generating method names.

#### Type

`(meta: OperationMeta) => string`

---

### `nameCase`

#### Description

Defines the naming style for method names.

#### Type

`camel` | `pascal` | `snake`

#### Default

`camel`

---

### `nameOptimization`

#### Description

Controls whether to optimize generated method names, such as adding `[method]` prefixes and removing redundant parts.

#### Type

`boolean`

#### Default

`true`

---

### `validateStatus`

#### Description

Custom logic for determining whether an HTTP status code indicates a successful request.

#### Type

`(code: number) => boolean`

#### Default

`200~299`

---

### `parseUnsuccessfulResponses`

#### Description

Determines whether to parse responses for unsuccessful requests, based on [`validateStatus`](#validatestatus).

#### Type

`boolean`

---

### `paths`

#### Description

Allows complete customization of operation information and structure or declaration of undocumented interfaces.

#### Type

`{ [path: string]: OperationHandlers }`

#### Example

```ts
const options = {
  paths: {
    '/path/to/api': {
      get: {
        name: 'customMethodName',
        tag: 'CustomTag',
        types: {
          // pathParams: {}
          queryParams: {
            type: 'object',
            properties: [
              {
                name: 'page',
                type: 'number',
              },
              {
                name: 'size',
                type: 'number',
              }
            ]
          },
          // headers: {}
          // formData: {}
          // body: {}
          response: async () => {
            return {
              type: 'inference',
              input: await fetch('http://api.example.com/get-some-list').then((res) => res.json()),
            }
          }
        }
      },
      // post: {}
      // put: {}
      // delete: {}
    }
  }
}
```

--- 

## Filters

```ts
export type Filters = FilterPaths | (FilterPaths | string)[] | ((meta: OperationMeta) => boolean)

export interface FilterPaths {
  [Path: string]: boolean | HttpMethods[]
}
```

## Parameter Options

```ts
export interface ParameterOptions {
  assignType?: boolean
  required?: boolean
  disabled?: boolean
}
```

## Type Definition

```ts

/**
 * Type definition
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

```

---