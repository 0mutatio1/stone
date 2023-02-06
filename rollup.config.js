import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';


const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'src/components/index.js',
  external: ['react'],
  plugins: [
    commonjs(),
    nodeResolve({
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
      name: 'craft-react-lib'
    },
    {
      file: 'dist/esm/index.js',
      format: "esm",
      sourcemap: true
    }
  ],
};
