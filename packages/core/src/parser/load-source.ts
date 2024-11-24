import type { OpenAPI } from 'openapi-types'
import type { ParserHooks, Source } from './types'
import { readFile } from 'node:fs/promises'
import yaml from 'js-yaml'
import fetch from 'node-fetch'

const URL_PREFIX_PATTERN = /^https?:\/\//

async function loadSourceLocal(filePath: string): Promise<OpenAPI.Document> {
  const content = await readFile(filePath, 'utf-8')
  return filePath.endsWith('.yaml') ? yaml.load(content) : JSON.parse(content)
}

async function fetchSource(url: string) {
  const res = await fetch(url).then((res) => res.text())

  try {
    return JSON.parse(res)
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (e) {
    return yaml.load(res) as any
  }
}

export async function loadSource(source: Source | undefined | null, hooks?: ParserHooks): Promise<null | OpenAPI.Document> {
  switch (typeof source) {
    case 'string': {
      if (URL_PREFIX_PATTERN.test(source)) {
        const res = await fetchSource(source)

        if (res) {
          hooks?.onDocumentDownloaded?.(res)
        }

        return res
      }

      return loadSourceLocal(source)
    }

    case 'object': {
      return source as any
    }

    case 'function': {
      return loadSource(await source(), hooks)
    }

    default: {
      return null
    }
  }
}
