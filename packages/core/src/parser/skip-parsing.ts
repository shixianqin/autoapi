import { pascalCase } from 'change-case'
import type { FilterPaths, Filters, OperationMeta } from './types'

interface SkipParsingOptions {
  getTag: (meta: OperationMeta) => string
  include?: Filters
  exclude?: Filters
}

function matchPaths(meta: OperationMeta, paths: FilterPaths) {
  const condition = paths[meta.path]

  return Array.isArray(condition) ? condition.includes(meta.method) : condition
}

function match(meta: OperationMeta, filters: Filters, options: SkipParsingOptions) {
  if (typeof filters === 'object') {
    if (Array.isArray(filters)) {
      // getTag 返回的是 pascalCase 风格字符串
      const tag = options.getTag(meta)

      return filters.some((item) => {
        // tag 过滤
        if (typeof item === 'string') {
          return tag === pascalCase(item)
        }

        // 路径过滤
        return matchPaths(meta, item)
      })
    }

    // 路径过滤
    return matchPaths(meta, filters)
  }

  // 自定义过滤
  return filters(meta)
}

/**
 * 检测是否跳过解析某个操作
 * @private
 */
export function skipParsing(meta: OperationMeta, options: SkipParsingOptions) {
  const { include, exclude } = options

  if (include && !match(meta, include, options)) {
    return true // 不匹配包含条件，跳过
  }

  if (exclude && match(meta, exclude, options)) {
    return true // 匹配排除条件，跳过
  }

  // 默认不跳过
  return false
}
