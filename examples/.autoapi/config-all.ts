import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import type { DocumentOptions } from '@autoapi/cli'

const files = readdirSync(resolve(__dirname, 'docs'))
const docExtPattern = /\.(json|yaml)$/

export const allDocs: DocumentOptions[] = []

for (const file of files) {
  if (!docExtPattern.test(file)) {
    continue
  }

  const options: DocumentOptions = {
    namespace: file,
    source: resolve(__dirname, `./docs/${file}`),
    requestConfig: {
      assignType: true,
    },
    requestContext: {
      assignType: true,
    },
  }

  allDocs.push(options)
}
