var operatorDir = require('../operatorDir/operatorDir');

function clearJsonCatalog(path) {
  operatorDir.delDir(path);
  operatorDir.createMkDir(path);
}
module.exports = clearJsonCatalog;
