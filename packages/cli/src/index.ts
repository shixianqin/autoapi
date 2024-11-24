import type { GeneratorOptions, RequestOptions } from '@autoapi/core'

export { type RequestOptions }

export interface DocumentOptions extends Omit<GeneratorOptions, 'adapter'> {
  adapter?: string
}

export interface Configuration {
  /**
   * 文档配置列表
   */
  docs: DocumentOptions[]

  /**
   * 共享配置
   */
  sharedOptions?: Partial<Omit<DocumentOptions, 'namespace' | 'source'>>

  /**
   * 构建输出目录
   * @default src/apis
   */
  outDir?: string

  /**
   * 是否存储下载的文档
   * @default false
   */
  storeDocs?: boolean
}

export function defineConfig(config: Configuration): Configuration {
  return config
}
