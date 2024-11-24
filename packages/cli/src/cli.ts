#!/usr/bin/env node

import { existsSync, mkdirSync, writeFile } from 'node:fs'
import { join } from 'node:path'
import { execSync } from 'node:child_process'
import { program } from 'commander'
import chalk from 'chalk'
import ora from 'ora'
import { type FileItem, Generator, type GeneratorOptions, type ParserHooks, kebabCase } from '@autoapi/core'
import { CONFIG_DIR, OWN_PKG, WORK_DIR, initConfig, readConfig } from './config'
import type { DocumentOptions } from './index'

function write(outDir: string, files: FileItem[]) {
  for (const file of files) {
    const fileDir = join(outDir, file.dir)

    if (!existsSync(fileDir)) {
      mkdirSync(fileDir, { recursive: true })
    }

    writeFile(join(fileDir, file.name), file.content, (err) => {
      if (err) {
        throw err
      }
    })
  }
}

function validateOptions(options: DocumentOptions, index: number, namespaces?: string[]): options is GeneratorOptions {
  const keys: (keyof GeneratorOptions)[] = ['namespace', 'adapter']

  for (const key of keys) {
    if (!options[key]) {
      console.log(`${chalk.red.bold('[AUTOAPI ERROR]:')} config.docs[${index}] is missing \`${chalk.red(key)}\` option.`)

      return false
    }
  }

  return !(namespaces?.length && namespaces.indexOf(options.namespace) < 0)
}

async function build(namespaces?: string[]) {
  const spinner = ora('Processing...\n').start()

  const { default: config } = await readConfig()
  const outDir = join(WORK_DIR, config.outDir || 'src/apis')

  let count = 0

  const tasks = config.docs.map((options, index) => {
    const _options: DocumentOptions = {
      ...config.sharedOptions,
      ...options,
    }

    if (!validateOptions(_options, index, namespaces)) {
      return
    }

    const { namespace } = _options
    const generator = new Generator(_options)

    const hooks: ParserHooks = {
      onNameConflict: (info) => {
        const paragraphs = [
          chalk.yellow.bold('[AUTOAPI WARNING]:'),
          `A conflicting method name "${chalk.bold(info.name)}"`,
          `was found in "${chalk.underline(namespace + '/' + info.tag)}"`,
          `and it has been safely renamed to "${chalk.bold(info.renamedAs)}".\n`,
        ]

        console.log(paragraphs.join(' '))
      },

      onDocumentLoaded: (document) => {
        if (config.storeDocs) {
          writeFile(CONFIG_DIR, JSON.stringify(document, null, 2), (err) => {
            if (err) console.error(err)
          })
        }
      },
    }

    count += 1

    return generator.generate(hooks)
      .then((files) => {
        // Clean up the output directory
        execSync('rm -rf ' + join(outDir, kebabCase(namespace)))
        write(outDir, files)
        spinner.succeed(chalk.green(namespace))
      })
      .catch((err) => {
        spinner.fail(chalk.red(namespace))
        console.error(err)
      })
      .finally(() => {
        if ((count -= 1) > 0) {
          spinner.start()
        }
      })
  })

  return Promise.all(tasks).finally(() => {
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
