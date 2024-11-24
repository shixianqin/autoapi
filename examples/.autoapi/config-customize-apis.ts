import type { DocumentOptions } from '@autoapi/cli'

export const configCustomizeApis: DocumentOptions = {
  namespace: 'CustomizeApis',
  paths: {
    '/customize/path/to/create': {
      post: {
        name: 'postCreate',
        description: 'Create an article',
        types: {
          formData: {
            type: 'object',
            properties: [
              { name: 'file', type: 'File', required: true },
              { name: 'title', type: 'string', required: true },
              { name: 'content', type: 'string' },
            ],
          },
          response: {
            type: 'object',
            properties: [],
          },
        },
      },
    },

    '/customize/path/to/categories': {
      get: async () => {
        const res = await fetch('https://wordpress.org/wp-json/wp/v2/categories').then((res) => res.json())

        return {
          types: {
            queryParams: {
              type: 'object',
              properties: [
                {
                  name: 'foo',
                  type: 'string',
                  description: 'Customize params (foo)',
                },
                {
                  name: 'bar',
                  type: 'number',
                },
              ],
            },
            response: {
              type: 'inference',
              input: res[0],
            },
          },
        }
      },
    },

    '/customize/path/to/media': {
      get: async () => {
        const res = await fetch('https://wordpress.org/wp-json/wp/v2/media').then((res) => res.json())

        return {
          types: {
            queryParams: `{ 
              foo: string; // foo
              bar:number; // bar
            }`,
            response: {
              type: 'inference',
              input: res[0],
            },
          },
        }
      },
    },
  },
}
