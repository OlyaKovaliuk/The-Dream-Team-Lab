const gulp = require('gulp');
const rename = require('gulp-rename');
const pipeline = require('readable-stream').pipeline;
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const concat = require("gulp-concat");

module.exports = function js() {
  return pipeline(
      gulp.src('src/scripts/*.js'),
      concat('scripts.js'),
      babel({
          presets: ['@babel/env']
      }),
      terser(),
      rename({
          suffix: ".min"
      }),
      gulp.dest('dist/js'));
};
