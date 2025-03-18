// rollup.config.js
import babel from '@rollup/plugin-babel';  // Correct Babel plugin
console.log('Starting the build...');
import { terser } from 'rollup-plugin-terser';  // Optional: to minify the output
import resolve from 'rollup-plugin-node-resolve';  // Resolves node_modules
import commonjs from 'rollup-plugin-commonjs';  // Converts CommonJS modules to ES6
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',  // Entry point for your library
  output: [
    {
      file: 'dist/index.cjs.js',  // CommonJS output
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',  // ES module output
      format: 'esm',
    },
    {
      file: 'dist/index.umd.js',  // UMD output for browser use
      format: 'umd',
      name: 'Mylibrary',  // Name for the global variable in the browser
    },
  ],
  external: ['react', 'react-dom'],  // React and ReactDOM should not be bundled
  plugins: [
    resolve(),  // Resolves modules from node_modules
    commonjs({
        exclude: 'src/**',
      }), // Converts CommonJS modules to ES6
      postcss({         // Handles CSS imports
        modules: true,   // If you want to enable CSS Modules, set it to true
        extract: true,   // Extracts CSS into a separate file (optional)
      }),
    babel({
      exclude: 'node_modules/**',  // Exclude node_modules from Babel processing
      presets: ['@babel/preset-env', '@babel/preset-react'],  // Transpile JSX and modern JS
      babelHelpers: 'bundled',  // Ensure Babel helpers are bundled
    }),
    terser(),  // Minifies the output (optional, for production)
  ],
};
