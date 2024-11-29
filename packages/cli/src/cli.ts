#!/usr/bin/env node

import { existsSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import { program } from 'commander'
import chalk from 'chalk'
import ora, { type Ora } from 'ora'
import { type FileItem, Generator, type GeneratorOptions, type ParserHooks, kebabCase } from '@autoapi/core'
import { CONFIG_DIR, OWN_PKG, WORK_DIR, initConfig, readConfig } from './config'
import type { DocumentOptions } from './index'

const SOURCE_KEY = 'source'
const REQUIRED_KEYS: (keyof GeneratorOptions)[] = ['namespace', 'adapter', SOURCE_KEY]

async function createDir(dir: string) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true })
  }

  return dir
}

function writeFiles(outDir: string, files: FileItem[]) {
  return Promise.all(files.map(async (file) => {
    const fileDir = await createDir(join(outDir, file.dir))
    await writeFile(join(fileDir, file.name), file.content)
  }))
}

async function writeDoc(name: string, document: object) {
  const docsDir = await createDir(join(CONFIG_DIR, 'docs'))
  await writeFile(join(docsDir, `${kebabCase(name)}.json`), JSON.stringify(document, null, 2))
}

function validateDocument(
  options: DocumentOptions,
  index: number,
  namespaces: string[] | undefined,
  spinner: Ora,
): options is GeneratorOptions {
  const missingKeys = REQUIRED_KEYS.filter((key) => {
    return !(options[key] || (key === SOURCE_KEY && options.paths))
  })

  if (missingKeys.length > 0) {
    spinner
      .fail(
        `${chalk.red.bold('[AUTOAPI ERROR]:')} config.docs[${index}] is missing some required options: `
        + chalk.red(missingKeys.join(', '))
        + (missingKeys.includes(SOURCE_KEY) ? ' or ' + chalk.red('paths') : ''),
      )
      .start()

    return false
  }

  // 如果指定了命名空间，但是没有包含当前文档，则验证失败
  return !(namespaces?.length && namespaces.indexOf(options.namespace) < 0)
}

async function build(namespaces?: string[]) {
  const spinner = ora('Processing...\n').start()

  const { default: config } = await readConfig()
  const outDir = join(WORK_DIR, config.outDir || 'src/apis')

  // 任务计数器
  let taskCount = 0

  const tasks = config.docs.map((options, index) => {
    const _options: DocumentOptions = {
      ...config.sharedOptions,
      ...options,
    }

    // 验证配置是否符合要求
    if (!validateDocument(
      _options,
      index,
      namespaces,
      spinner,
    )) {
      return
    }

    const { namespace } = _options
    const generator = new Generator(_options)

    const hooks: ParserHooks = {
      onNameConflict: (info) => {
        spinner.warn(
          [
            chalk.yellow.bold('[AUTOAPI WARNING]:'),
            `A conflicting method name "${chalk.bold(info.name)}"`,
            `was found in "${chalk.underline(namespace + '/' + info.tag)}"`,
            `and it has been safely renamed to "${chalk.bold(info.renamedAs)}".`,
          ].join(' '),
        ).start()
      },

      onDocumentDownloaded: (document) => {
        if (config.storeDocs) {
          writeDoc(namespace, document)
        }
      },
    }

    taskCount += 1

    return generator.generate(hooks)
      .then(async (files) => {
        // Clean up the output directory
        execSync('rm -rf ' + join(outDir, kebabCase(namespace)))
        await writeFiles(outDir, files)
        spinner.succeed(chalk.green(namespace))
      })
      .catch((err) => {
        spinner.fail(chalk.red(namespace))
        console.error(err)
      })
      .finally(() => {
        // 不是最后一个任务，继续运行 spinner
        if ((taskCount -= 1) > 0) {
          spinner.start()
        }
      })
  })

  return Promise.all(tasks).finally(() => {
    // 如果所有任务都运行结束后，spinner 还是运行，则手动关闭
    if (spinner.isSpinning) {
      spinner.stop()
    }
  })
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

program
  .name('autoapi')
  .description('AutoAPI is a tool based on OpenAPI / Swagger documents to automatically generate atomic request methods and TypeScript types.')
  .version(OWN_PKG.version)
  .option('--init', 'Initialize the configuration')
  .option('-n,--namespaces <namespaces...>', 'Specify the documents that needs to generate')
  .action((opts) => {
    if (opts.init) {
      initConfig()
      return
    }

    console.time('Time')

    build(opts.namespaces).then(() => {
      console.timeEnd('Time')
    })
  })

program.parse()
