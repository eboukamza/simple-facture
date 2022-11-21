import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json';

import pkg from './package.json'

export default [
  {
    input: 'src/main.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
    ],
    external: ['pdfmake'],
    plugins: [
      json(),
      ts({
        hook: {
          // generate only one types.d file
          outputPath: (path, kind) => {
            if (kind === 'declaration') {
              return './dist/types.d.ts'
            }
          }
        }
      }),
      // includes third party modules in the bundle
      resolve(),
      // convert commonjs modules to es6
      commonjs()
    ]
  },
  {
    input: 'src/init-invoice.ts',
    output: {file: 'dist/init.js', format: 'cjs'},
    plugins: [
      resolve(),
      commonjs()
    ]
  }
]
