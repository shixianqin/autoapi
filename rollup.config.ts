import type { OutputOptions, RollupOptions } from 'rollup'
import ts from '@rollup/plugin-typescript'
import { dts } from 'rollup-plugin-dts'

const pluginTs = ts({
  compilerOptions: {
    target: 'esnext',
  },
})

const pluginDts = dts()

const packages: { name: string, pureESM?: boolean, entries?: string[] }[] = [
  {
    name: 'core',
    pureESM: true,
  },
  {
    name: 'cli',
  },
]

const options: RollupOptions[] = []

for (const pkg of packages) {
  const { name, entries = ['index'] } = pkg
  const pkgDir = `packages/${name}`
  const outDir = `${pkgDir}/dist`

  if (name === 'cli') {
    entries.push('cli')
  }

  for (const entry of entries) {
    const input = `${pkgDir}/src/${entry}.ts`

    const output: OutputOptions[] = [
      {
        file: `${outDir}/${entry}.mjs`,
        format: 'es',
      },
    ]

    if (!pkg.pureESM && entry !== 'cli') {
      output.push({
        file: `${outDir}/${entry}.cjs`,
        format: 'cjs',
      })
    }

    options.push({
      input,
      output,
      plugins: [pluginTs],
      external: [
        /^@?[a-z]/,
      ],
    })

    if (entry !== 'cli') {
      options.push({
        input,
        output: {
          file: `${outDir}/${entry}.d.ts`,
          format: 'es',
        },
        plugins: [pluginDts],
      })
    }
  }
}

export default options
