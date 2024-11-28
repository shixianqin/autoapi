# @autoapi/cli

> AutoAPI command line.

See the full [documentation](https://github.com/shixianqin/autoapi).

## Installation

```shell
npm install -D @autoapi/cli
```

## Usage

Initialization:

```shell
npx autoapi --init
```

Build All Documents:

```shell
npx autoapi
```

Build Specific Documents:

```shell
npx autoapi -n Foo Bar Baz
```

## Configuration

`.autoapi/config.ts`

```ts
import { defineConfig } from '@autoapi/cli'

export default defineConfig({
  docs: [
    {
      namespace: 'Example',
      adapter: 'path/to/your/adaper.ts',
      source: 'https://api.example.com/openapi.json',
    },

    // More ...
  ]
})
```