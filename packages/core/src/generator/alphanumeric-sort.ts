type Segments = null | string[]

const CACHE: Record<string, Segments> = Object.create(null)

function split(key: any): Segments {
  switch (typeof key) {
    case 'number': {
      return [key.toString()]
    }

    case 'string': {
      return key.match(/\d+|\D+/g) || []
    }
  }

  // 其他类型不支持排序
  return null
}

function cached(key: any) {
  return CACHE[key] || (CACHE[key] = split(key))
}

/**
 * 字母数字排序
 * 为了让内容保持稳定变化且可观的结构，我们需要对生成的结果进行排序
 * 注意：这里并没有针对数字的 `负数`、`小数`、`科学计数法` 等情况做特殊处理
 */
export function alphanumericSort<T>(items: T[], getKey?: (item: T) => any) {
  const cachedSplit = getKey ? (item: T) => cached(getKey(item)) : cached

  return [...items].sort((a, b) => {
    const segmentsA = cachedSplit(a)

    // A 为 null 时排在最后
    if (segmentsA === null) {
      return 1
    }

    const keysB = cachedSplit(b)

    // B 为 null 时排在最后
    if (keysB === null) {
      return -1
    }

    // 按照最长的数组长度进行排序
    const maxLength = Math.max(segmentsA.length, keysB.length)

    for (let i = 0; i < maxLength; i++) {
      const A = segmentsA[i]
      const B = keysB[i]

      // 如果 A 已经遍历完，则 A 排在前面
      if (!A) {
        return -1
      }

      // 如果 B 已经遍历完，则 B 排在前面
      if (!B) {
        return 1
      }

      // 如果 A 和 B 相等，则继续比较下一个
      if (A === B) {
        continue
      }

      const numA = +A
      const numB = +B

      // 如果 A 和 B 其中一个不是数字，则按照字符串大小排序
      if (isNaN(numA) || isNaN(numB)) {
        return A < B ? -1 : 1
      }

      // 如果 A 和 B 都是数字，则按照数字大小排序
      // 这里使用的是转换为数字之后的值进行比较，这是必须的，
      // 因为数字字符串比较 '10' < '2' 会返回 true
      return numA - numB
    }

    return 0
  })
}
