import type { OpenAPI } from 'openapi-types'
import type { Source } from './types'
import { readFileSync } from 'node:fs'
import yaml from 'js-yaml'
import fetch from 'node-fetch'

const URL_PREFIX_PATTERN = /^https?:\/\//

function loadSourceLocal(filePath: string): OpenAPI.Document {
  const content = readFileSync(filePath, 'utf8')
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

export async function loadSource(source: Source | undefined | null): Promise<null | OpenAPI.Document> {
  switch (typeof source) {
    case 'string': {
      if (URL_PREFIX_PATTERN.test(source)) {
        return fetchSource(source)
      }

      return loadSourceLocal(source)
    }

    case 'object': {
      return source as any
    }

    case 'function': {
      return loadSource(await source())
    }

    default: {
      return null
    }
  }
}
