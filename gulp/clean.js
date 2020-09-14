const del = require('del');

module.exports = function clean(done) {
  del.sync('dist');
  done()
}
