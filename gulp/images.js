const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = function images() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
}
