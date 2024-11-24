# AutoAPI Configuration

AutoAPI 是一个基于 OpenAPI/Swagger 文档生成 TypeScript 类型和请求方法的工具。以下是其核心配置项的详细说明。

简体中文 | [English](./configuration.md)

---

## Configuration Options

### `docs`

#### 描述

定义要处理的文档配置列表。

#### 类型

[`DocumentOptions[]`](#document-options)

#### 是否必填

是

---

### `sharedOptions`

#### 描述

定义多个文档间的通用配置，可减少重复定义的内容。

#### 类型

[`Omit<DocumentOptions, 'namespace' | 'source'>`](#document-options)

---

### `outDir`

#### 描述

指定生成的请求方法和类型的输出目录。

#### 类型

`string`

#### 默认值

`src/apis`

---

### `storeDocs`

#### 描述

是否将下载的文档存储到磁盘，用于后续版本控制或备份。

#### 类型

`boolean`

#### 默认值

`false`

---

## Document Options

以下为单个文档的详细配置项。

### `namespace`

#### 描述

指定文档的命名空间，用于生成的请求方法和类型的分类。

#### 类型

`string`

#### 是否必填

是

---

### `adapter`

#### 描述

指定请求适配器的路径，可以是本地文件路径或模块别名。

#### 类型

`string`

#### 是否必填

是（可以定义在通用配置中）

#### 示例

```typescript
const options = {
  adapter: 'path/to/adapter/file.ts'
};

const options2 = {
  adapter: '@/utils/request.ts'
};
```  

---

### `source`

#### 描述

定义文档的来源，可以是远程 URL、本地文件路径、文档对象，或者返回文档的异步方法。

#### 类型

`string | object | (() => string | object | Promise<string | object>)`

#### 示例

- **远程文档**

  ```typescript
  const options = {
    source: 'https://api.example.com/autoapi.json' // 支持 JSON 或 YAML
  };
  ```

- **本地文档**

  ```typescript
  const options = {
    source: path.resolve(__dirname, './docs/autoapi.json') // 支持 JSON 或 YAML
  };
  ```

- **文档对象**

  ```typescript
  const options = {
    source: { /* OpenAPI.Document */ }
  };
  ```

- **自定义异步获取**

  ```typescript
  const options = {
    source: async () => {
      const res = await fetch('https://api.example.com/autoapi.json');
      return res.json();
    }
  };
  ```  

---

### `include`

#### 描述

定义需要包含的接口或路径，可根据标签、路径或自定义逻辑进行过滤。

#### 类型

[`Filters`](#filters)

#### 示例

- **按标签过滤**

   ```typescript
   const options = {
     include: ['Tag1', 'Tag2']
   };
   ```

- **按路径过滤**

   ```typescript
   const options = {
     include: {
       '/path/to/api': true,
       '/path/to/api2': ['get', 'post']
     }
   };
   ```

- **按自定义逻辑过滤**

   ```typescript
   const options = {
     include: (meta: OperationMeta) => meta.path.includes('/user')
   };
   ```  

---

### `exclude`

#### 描述

定义需要排除的接口或路径，过滤规则同 [`include`](#include)。

#### 类型

[`Filters`](#filters)

---

### `rootNamespace`

#### 描述

生成的 API 类型顶级命名空间，用于组织接口和类型的层次结构。

#### 类型

`string`

#### 默认值

`API`

---

### `requestConfig`

#### 描述

用于构建操作方法时定义请求配置的参数类型，例如 [AxiosRequestConfig](https://axios-http.com/docs/req_config)。

#### 类型

[`ParameterOptions`](#parameter-options)

---

### `requestContext`

#### 描述

用于构建操作方法时定义请求上下文的参数类型，特别适用于服务端渲染（SSR）。

#### 类型

[`ParameterOptions`](#parameter-options)

---

### `responseWrapper`

#### 描述

定义响应数据的类型包装器，用于自定义实际响应结构与文档定义结构不一致的场景。

#### 类型

[`TypeDefinition`](#type-definition)

#### 示例

```typescript
const options = {
  responseWrapper: {
    type: 'object',
    properties: [
      { name: 'data', type: 'T' }
    ]
  }
};
```  

---

### `responseReturnPath`

#### 描述

指定响应数据的访问路径，从而调整操作方法的返回类型。

#### 类型

`string`

#### 示例

```typescript
const options = {
  responseReturnPath: '.data'
};
```  

---

### `getPath`

#### 描述

自定义接口路径生成逻辑。

#### 类型

`(meta: OperationMeta) => string`

---

### `getTag`

#### 描述

自定义接口分组逻辑。

#### 类型

`(meta: OperationMeta) => string`

---

### `getName`

#### 描述

自定义接口方法名称生成逻辑。

#### 类型

`(meta: OperationMeta) => string`

---

### `nameCase`

#### 描述

定义方法名的命名风格。

#### 类型

`camel` | `pascal` | `snake`

#### 默认值

`camel`

---

### `nameOptimization`

#### 描述

控制是否优化生成的方法名称，优化内容包括：添加 `[method]` 前缀，移除 `[tag]` 和 `[method]` 相同的部分等。

#### 类型

`boolean`

#### 默认值

`true`

---

### `validateStatus`

#### 描述

自定义判断 HTTP 状态码是否表示请求成功的逻辑。

#### 类型

`(code: number) => boolean`

#### 默认值

`200~299`

---

### `parseUnsuccessfulResponses`

#### 描述

是否解析非成功状态的响应结构，依赖于 [`validateStatus`](#validatestatus) 的判断结果。

#### 类型

`boolean`

---

### `paths`

#### 描述

允许完全自定义操作信息和结构，或者声明文档中未定义的接口。

#### 类型

`{ [path: string]: OperationHandlers }`

#### 示例

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