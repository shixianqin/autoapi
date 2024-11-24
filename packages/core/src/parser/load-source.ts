import http from 'node:http'
import https from 'node:https'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import yaml from 'js-yaml'
import type { Source } from './types'
import type { OpenAPI } from 'openapi-types'

const URL_PREFIX_PATTERN = /^https?:\/\//

function loadSourceLocal(filePath: string): OpenAPI.Document {
  const content = readFileSync(filePath, 'utf8')
  return filePath.endsWith('.yaml') ? yaml.load(content) : JSON.parse(content)
}

function fetchSource(url: string) {
  const client = url.startsWith('https://') ? https : http

  return new Promise<OpenAPI.Document>((resolve, reject) => {
    client
      .get(url, (response) => {
        let data = ''

        response.on('data', (chunk) => {
          data += chunk
        })

        response.on('end', () => {
          try {
            return resolve(JSON.parse(data))
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          catch (e) {
            return resolve(yaml.load(data) as OpenAPI.Document)
          }
        })
      })
      .on('error', reject)
  })
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
      return source as OpenAPI.Document
    }

    case 'function': {
      return loadSource(await source())
    }

    default: {
      return null
    }
  }
}
