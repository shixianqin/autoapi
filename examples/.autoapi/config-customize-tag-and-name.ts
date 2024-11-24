import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeTagAndName: DocumentOptions = {
  namespace: 'CustomizeTagAndName',
  source: resolve(__dirname, './docs/aws-v3.json'),
  getTag: (meta) => {
    return meta.path.split('/')[2]
  },
  getName: (meta) => {
    return (meta.operationId || meta.path).replace(/2020_05_31/g, '')
  },
}
