import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeResponseWrapper: DocumentOptions = {
  namespace: 'CustomizeResponseWrapper',
  source: resolve(__dirname, './docs/swagger-generator-v2.json'),
  nameOptimization: false,
  responseWrapper: {
    type: 'object',
    properties: [
      { name: 'code', type: 'number' },
      { name: 'message', type: 'string' },
      { name: 'data', type: 'T' },
    ],
  },
}
