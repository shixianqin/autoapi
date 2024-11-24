import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeFilter: DocumentOptions = {
  namespace: 'CustomizeFilter',
  source: resolve(__dirname, './docs/github-v3.json'),
  include: {
    '/orgs/{org}/actions/cache/usage': true,
    // '/events': true,
    '/feeds': true,
  },
}
