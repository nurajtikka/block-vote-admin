// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'next',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', '@typescript-eslint', 'sort-destructure-keys', 'json'
    ],
    rules: {
        // For marketplace configs
        'import/no-unresolved': [
            2,
            {
                ignore: ['@noonConfig', '@marketplaceConfig'
                ]
            }
        ],
        // Prettier config
        'prettier/prettier': [
            1,
            {
                jsxSingleQuote: false,
                jsxBracketSameLine: true,
                printWidth: 120,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
        // JSON - [FACEPALM] had to list all props to simulate 'recommended'
        // as overriding doesn't work :(
        // More info - https://www.npmjs.com/package/eslint-plugin-json
        'json/undefined': 'error',
        'json/enum-value-mismatch': 'error',
        'json/unexpected-end-of-comment': 'error',
        'json/unexpected-end-of-string': 'error',
        'json/unexpected-end-of-number': 'error',
        'json/invalid-unicode': 'error',
        'json/invalid-escape-character': 'error',
        'json/invalid-character': 'error',
        'json/property-expected': 'error',
        'json/comma-expected': 'error',
        'json/colon-expected': 'error',
        'json/value-expected': 'error',
        'json/comma-or-close-backet-expected': 'error',
        'json/comma-or-close-brace-expected': 'error',
        'json/trailing-comma': 1,
        'json/duplicate-key': 'error',
        'json/comment-not-permitted': 'error',
        'json/schema-resolve-error': 'error',
        'json/unknown': 1,
        // Monorepo compatibility
        'import/no-extraneous-dependencies': [
            'error',
            {
                packageDir: [__dirname, path.join(__dirname, 'core')
                ],
            },
        ],
        // So that .ts and .tsx should not be in imports
        'import/extensions': [
            'error',
            {
                json: 'always',
                ts: 'never',
                tsx: 'never',
                css: 'always',
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // Built-in types are first
                    'external',
                    'internal',
                    'unknown',
                    ['sibling', 'parent'
                    ], // Then sibling and parent types. They can be mingled together
                    'index', // Then the index file
                    'object',
                ],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@com /**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: '@com/core/**/contexts /**',
                        group: 'unknown',
                        position: 'after',
                    },
                    {
                        pattern: '@*Config',
                        group: 'sibling',
                        position: 'after',
                    },
                    {
                        pattern: '.**',
                        group: 'object',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
            },
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // Built-in types are first
                    'external',
                    'internal',
                    'unknown',
                    ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
                    'index', // Then the index file
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before',
                    },
                    {
                        pattern: '@mp-food/core/consumer/components/**',
                        group: 'object',
                    },
                    {
                        pattern: '@mp-food/core/consumer/contexts/**',
                        group: 'internal',
                    },
                    {
                        pattern: './**',
                        group: 'object',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // So that Type Definitions which have /// don't throw an error
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        // So that typescript files can't have JSX
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z][a-zA-Z0-9]+$',
                    match: true,
                },
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                custom: {
                    regex: '^T[A-Z][a-zA-Z0-9]+$',
                    match: true,
                },
            },
        ],
        'import/prefer-default-export': 'off',
        'sort-destructure-keys/sort-destructure-keys': 2,
        'sort-keys': [0, 'asc', { natural: true, minKeys: 3 }], // For later
        'react/require-default-props': 0,

        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 0,

        '@typescript-eslint/camelcase': 0, // Turn this on later, airbnb hadn't updated this yet
        camelcase: [0, { properties: 'always' }],
        // Disable base rule as it can report incorrect errors https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md#how-to-use
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    ignorePatterns: [
        '**/lib /**',
        'widgets/node_modules/**', // hmm
        '**/package.json',
        'node_modules/',
        '**/.next/**',
    ],
};
