import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'

// import typescript from '@rollup/plugin-typescript'

const input = 'src/components/index.ts'
const output = 'dist/index'
const extensions = ['.js', '.ts', '.tsx']

export default [
  {
    input: input,
    output: {
      file: `${output}.js`,
      format: 'cjs'
    },

    plugins: [
      resolve({
        browser: true,
        extensions
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      external(),
      babel({
        extensions,
        exclude: 'node_modules/**',
        babelrc: false,
        runtimeHelpers: true
      }),
      uglify()
    ]
  },
  // {
  //   input: input,
  //   output: {
  //     file: `${output}.modern.js`,
  //     format: 'es'
  //   },

  //   plugins: [
  //     resolve({
  //       extensions
  //     }),
  //     external(),
  //     babel({
  //       extensions,
  //       exclude: 'node_modules/**',
  //       babelrc: false,
  //       runtimeHelpers: true
  //     }),
  //     terser()
  //   ]
  // },
  {
    input: input,
    output: {
      name: 'SuprimUi',
      file: `${output}.umd.js`,
      globals: {
        react: 'React',
        'styled-components': 'styled',
        'prop-types': 'PropTypes',
        'prop-types/checkPropTypes': 'checkPropTypes'
      },
      format: 'umd'
    },
    plugins: [
      resolve({
        extensions
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'react-dom': ['createPortal']
        }
      }),
      external(),
      babel({
        extensions,
        exclude: 'node_modules/**',
        babelrc: false,
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
