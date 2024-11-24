import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeResponseReturnPath: DocumentOptions = {
  namespace: 'CustomizeResponseReturnPath',
  source: resolve(__dirname, './docs/swagger-generator-v2.json'),
  nameOptimization: false,
  getName: (meta) => {
    return meta.operationId || meta.path
  },
  responseReturnPath: '.data',
}
