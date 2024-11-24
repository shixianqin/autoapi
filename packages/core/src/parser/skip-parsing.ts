import type { FilterPaths, Filters, OperationMeta, ParserOptions } from './types'

function matchPaths(meta: OperationMeta, paths: FilterPaths) {
  const condition = paths[meta.path]

  return Array.isArray(condition) ? condition.includes(meta.method) : condition
}

function match(meta: OperationMeta, filters: Filters) {
  if (typeof filters === 'object') {
    if (Array.isArray(filters)) {
      const tag = meta.tags?.[0]?.toLowerCase()

      return filters.some((item) => {
        // tag 过滤
        if (typeof item === 'string') {
          return tag === item.toLowerCase()
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
export function skipParsing(meta: OperationMeta, options: ParserOptions) {
  const { include, exclude } = options

  if (include && !match(meta, include)) {
    return true // 不匹配包含条件，跳过
  }

  if (exclude && match(meta, exclude)) {
    return true // 匹配排除条件，跳过
  }

  // 默认不跳过
  return false
}
