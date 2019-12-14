import commonjs from 'rollup-plugin-commonjs';
import style from 'rollup-plugin-lit-html-style';
import livereload from 'rollup-plugin-livereload';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: ['src/app/index.js'],
  output: {
    dir: 'public/build',
    entryFileNames: 'bundle.mjs',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    style({
      include: ['src/components/*/*.css', 'src/pages/*/*.css']
    }),
    resolve({
      browser: true
    }),
    typescript(),
    commonjs(),
    !production && serve(),
    !production && livereload('public'),
    production && terser()
  ]
}

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}