import type { DocumentOptions } from '@autoapi/cli'
import { resolve } from 'node:path'

export const configCustomizeResponses: DocumentOptions = {
  namespace: 'CustomizeResponses',
  source: resolve(__dirname, './docs/wordpress-v2.json'),
  include: (meta) => {
    switch (meta.path) {
      case '/wp/v2/media':
      case '/wp/v2/categories': {
        return true
      }
    }

    return false
  },
  paths: {
    '/wp/v2/media': {
      get: async () => {
        const res = await fetch('https://wordpress.org/wp-json/wp/v2/media').then((res) => res.json())

        return {
          types: {
            response: {
              type: 'inference',
              input: res,
            },
          },
        }
      },
    },

    '/wp/v2/categories': {
      get: async () => {
        const res = await fetch('https://wordpress.org/wp-json/wp/v2/categories').then((res) => res.json())

        return {
          types: {
            response: {
              type: 'inference',
              input: res,
            },
          },
        }
      },
    },
  },
}
