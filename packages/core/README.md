# @autoapi/core

> AutoAPI generation core.

See the full [documentation](https://github.com/shixianqin/autoapi).

## Installation

```shell
npm install @autoapi/core
```

## Usage

### Generator

```ts
import { Generator, GeneratorOptions } from '@autoapi/core'

const options: GeneratorOptions = {
  // ...
}

const generator = new Generator(options)

const files = await generator.generate(/* OpenAPI.Document */)
```

### Parser

```ts
import { Parser, ParserOptions } from '@autoapi/core'

const options: ParserOptions = {
  // ...
}

const parser = new Parser(options)

const result = await parser.parse(/* OpenAPI.Document */)
```