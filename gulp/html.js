const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const pipeline = require('readable-stream').pipeline;


module.exports = function html() {
  return pipeline(
      gulp.src('src/*.html'),
      plumber(),
      htmlValidator(),
      gulp.dest('dist'));
};
