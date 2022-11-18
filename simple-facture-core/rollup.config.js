import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-ts'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    plugins: [
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
  }
]
