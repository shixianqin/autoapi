import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

/**
 * @type {string[]}
 */
const multipleStatements = [
  'block',
  'block-like',
  'multiline-block-like',
  'multiline-const',
  'multiline-expression',
  'multiline-let',
  'multiline-var',
]

/**
 * @type {import('typescript-eslint').ConfigWithExtends[]}
 */
const configs = [
  {
    ignores: ['examples/src/apis'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  stylistic.configs['recommended-flat'],

  /**
   * base
   */
  {
    rules: {
      'sort-imports': [
        'error', {
          allowSeparatedGroups: true,
          ignoreDeclarationSort: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': ['warn'],
    },
  },

  /**
   * stylistic
   */
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/function-paren-newline': ['error', 'consistent'],
      '@stylistic/object-curly-newline': [
        'error', {
          consistent: true,
          multiline: true,
        },
      ],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['*'],
          next: multipleStatements,
        },
        {
          blankLine: 'always',
          prev: multipleStatements,
          next: ['*'],
        },
        {
          blankLine: 'any',
          prev: ['case'],
          next: ['case'],
        },
      ],
    },
  },
]

export default configs
