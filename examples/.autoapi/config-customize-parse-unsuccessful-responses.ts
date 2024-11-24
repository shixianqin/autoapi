import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeParseUnsuccessfulResponses: DocumentOptions = {
  namespace: 'CustomizeParseUnsuccessfulResponses',
  source: resolve(__dirname, './docs/github-v3.json'),
  include: {
    '/repos/{owner}/{repo}/codespaces': true,
  },
  parseUnsuccessfulResponses: true,
}
