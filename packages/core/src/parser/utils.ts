import { split } from 'change-case'
import type { IntersectionType, ObjectType, ReferenceObject, ResponseObject, TypeDefinition, UnionType } from './schema-types'
import type { HttpMethods, Operation } from './types'
import type { OpenAPIV2 } from 'openapi-types'

/**
 * 判断是否为引用类型
 * @example
 * { "$ref": "#/components/schemas/Foo" }
 * { "$ref": "#/components/parameters/Foo" }
 * { "$ref": "#/components/responses/Foo" }
 * { "$ref": "#/definitions/Foo" }
 * { "$ref": "#/parameters/Foo" }
 * { "$ref": "#/responses/Foo" }
 * { "$ref": "#/..." }
 * @param obj
 */
export function isRef(obj: any): obj is ReferenceObject {
  return !!obj?.$ref
}

/**
 * 是否为 OpenAPI V2 的 ResponseObject
 * @param obj
 */
export function isV2ResponseObject(obj: ResponseObject): obj is OpenAPIV2.ResponseObject {
  return 'schema' in obj
}

/**
 * 是否为 `对象` 类型
 * @param type
 */
export function isObjectType(type: TypeDefinition): type is ObjectType {
  return !!(
    type
    && typeof type === 'object'
    && type.type === 'object'
  )
}

/**
 * 使用 `__` 分隔单词，通过 `replaceAll` 实现全局替换，确保按完整单词匹配，避免部分字符串误匹配。
 * 使用在字符串和标签的前后添加 `_` 的方式，确保替换操作基于完整单词匹配。
 *
 * @example
 * name='foo__bar__xxxfoo__bar'
 * tag='foo__bar'
 * result='__xxx' ❌
 *
 * @example
 * name='_foo__bar__xxxfoo__bar_'
 * tag='_foo__bar_'
 * result='_xxxfoo__bar_' ✅
 *
 * @example
 * name='_foo__bar__xxxfoo__bar__foo__bar_'
 * tag='_foo__bar_'
 * result='_xxxfoo__bar_' ✅
 */
export function transformWords(value: string) {
  const words = split(value).map((item) => item.toLowerCase())

  return `_${words.join('__')}_`
}

/**
 * 获取并优化方法名
 * 该方法通过移除与 `method`、`tag` 相同的字符串，从而精简请求的方法名
 * 前缀加上 `method` 以区分请求类型
 */
export function optimizeName(operation: Operation, originName: string) {
  const { method, tag } = operation

  const _name = transformWords(originName)
  const _tag = transformWords(tag)

  // 移除所有与 `method`、`tag` 相同的字符串
  const words = _name
    .replaceAll(_tag, '')
    .split('_')
    .filter((word) => word && word !== method)
    .filter((item, index, segments) => {
      // 过滤掉连续的重复单词
      return index > 0 ? item !== segments[index - 1] : true
    })

  // 拼接 `method` 前缀
  // 注意如果上面的移除结果为空，则拼接 `tag`
  return method + '_' + (words.length ? words.join('_') : tag)
}

/**
 * 是否为 `空对象` 类型
 * @example {}
 * @param type
 */
export function isEmptyObjectType(type: TypeDefinition): type is ObjectType {
  return isObjectType(type) && type.properties.length === 0
}

/**
 * 验证状态码
 * @param code
 */
export function validateStatus(code: number) {
  return code >= 200 && code < 300
}

/**
 * 迭代给定 paths 对象中的每个路径和方法，并执行回调函数.
 */
export function eachPaths<PathItem, Operation>(
  paths: Record<string, any> | undefined,
  callback: (path: string, method: HttpMethods, pathItem: PathItem, operation: Operation) => void,
) {
  if (!paths) {
    return
  }

  for (const path in paths) {
    const pathItem = paths[path]

    for (const method in pathItem) {
      switch (method) {
        case 'get':
        case 'put':
        case 'post':
        case 'delete':
        case 'options':
        case 'head':
        case 'patch':
        case 'trace': {
          callback(path, method, pathItem, pathItem[method])
          break
        }
      }
    }
  }
}

/**
 * 修正复合属性类型
 * 复合类型的属性类型可能会被简化为 `any`，这里需要根据 normal 对象的结构进行修正
 */
export function fixCompositePropertyType(compositeTypeItems: (IntersectionType | UnionType)[], normalObjectType: ObjectType) {
  const typeMap = new Map(
    normalObjectType.properties.map((item) => {
      return [item.name, item.type]
    }),
  )

  return compositeTypeItems.map((item) => {
    for (const subItem of item.items) {
      if (isObjectType(subItem)) {
        // 修正对象属性类型
        for (const property of subItem.properties) {
          if (property.type === 'any') {
            property.type = typeMap.get(property.name) || 'any'
          }
        }
      }
    }

    return item
  })
}
