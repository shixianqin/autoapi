import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeName: DocumentOptions = {
  namespace: 'CustomizeName',
  source: resolve(__dirname, './docs/swagger-generator-v2.json'),
  // nameOptimization: false,
  // getName: (meta) => {
  //   return meta.operationId || meta.path
  // },
  paths: {
    '/gen/clients': {
      get: {
        name: 'getClients_CustomizeNamed',
      },
    },
    '/gen/servers': {
      get: {
        name: 'getServers_CustomizeNamed',
      },
    },
  },
}
