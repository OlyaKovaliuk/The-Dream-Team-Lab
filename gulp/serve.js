const server = require('browser-sync').create();
const gulp = require('gulp');
const html = require('./html');
const js = require('./js');
const styles = require('./styles');

function readyReload(cb) {
  server.reload()
  cb()
}

module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch('src/*.html', gulp.series(html, readyReload));
  gulp.watch('src/scripts/*.js',
    gulp.series(js, (cb) => gulp.src('dist/scripts').pipe(server.stream()).on('end', cb)))
  gulp.watch('src/scss/**/*.scss',
    gulp.series(styles, (cb) => gulp.src('dist/css').pipe(server.stream()).on('end', cb)))

  return cb()
}
