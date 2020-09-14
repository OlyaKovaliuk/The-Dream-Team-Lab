const gulp = require('gulp');

const serve = require('./gulp/serve');
const html = require('./gulp/html');
const styles = require('./gulp/styles');
const js = require('./gulp/js');
const clean = require('./gulp/clean');
const images = require('./gulp/images');

const dev = gulp.parallel(html, js, styles);
const build = gulp.series(clean, images, styles, js, html);

module.exports.dev = gulp.series(dev, serve);
module.exports.build = gulp.series(build);
