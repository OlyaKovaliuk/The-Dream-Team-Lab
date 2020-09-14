const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const pipeline = require('readable-stream').pipeline;

module.exports = function styles() {
  return pipeline(
      gulp.src('src/scss/**/*.scss'),
      plumber(),
      sourcemaps.init(),
      sass(),
      autoprefixer({
        cascade: false,
      }),
      shorthand(),
      cleanCSS({
        debug: true,
        compability: '',
      }, (details) => {
        console.log(`${details.name}: Original size: ${details.stats.originalSize} - Minimized size: ${details.stats.minifiedSize}`)
      }),
      sourcemaps.write(),
      rename({
        suffix: '.min'
      }),
      gulp.dest('dist/css'));
};
