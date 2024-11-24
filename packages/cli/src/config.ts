import { join, parse, resolve } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import type { Configuration } from './index'

export const WORK_DIR = process.cwd()

export const CONFIG_DIR = join(WORK_DIR, '.autoapi')

// 支持的配置文件名
const CONFIG_FILE_NAMES: string[] = [
  'config.ts', // TS preferred
  'config.js',
  'config.cjs',
  'config.mjs',
  'config.json',
]

export const OWN_PKG = readJson(resolve(import.meta.dirname, '../package.json'))

function readJson(filePath: string) {
  return JSON.parse(readFileSync(filePath, 'utf8'))
}

export function initConfig() {
  for (const name of CONFIG_FILE_NAMES) {
    const filePath = join(CONFIG_DIR, name)

    if (existsSync(filePath)) {
      return filePath
    }
  }

  // config.ts
  const filePath = join(CONFIG_DIR, CONFIG_FILE_NAMES[0])

  if (!existsSync(CONFIG_DIR)) {
    mkdirSync(CONFIG_DIR)
  }

  writeFileSync(filePath, [
    `import { defineConfig } from '${OWN_PKG.name}'`,
    '',
    'export default defineConfig({',
    '  docs: [], // Configure your documents',
    '})',
  ].join('\n'))

  return filePath
}

export async function readConfig(): Promise<{ default: Configuration }> {
  const filePath = initConfig()
  const parsed = parse(filePath)

  switch (parsed.ext) {
    case '.ts': {
      return import('tsx/cjs/api').then((m) => m.require(filePath, WORK_DIR))
    }

    case '.json': {
      return {
        default: readJson(filePath),
      }
    }

    default: {
      return import(filePath)
    }
  }
}
