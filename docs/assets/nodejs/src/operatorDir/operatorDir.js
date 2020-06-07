var fs = require('fs');

// 创建文件夹
function createMkDir(path) {
  fs.mkdir(path, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log("目录创建成功。");
  });
}

// 删除文件夹
function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

module.exports = {
  delDir,
  createMkDir
};
