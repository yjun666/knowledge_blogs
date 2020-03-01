// 打包所有的nodejsOperator和requestJsonTest文件夹下的js文件到一个文件下并运行node命令

const path = require('path');
const fs = require('fs');

const delAndCreateDirFun = require('../src/operatorDir/delAndCreateDir');
delAndCreateDirFun(path.join(__dirname, '../dist/transformFileToJson')); // 创建transformFileToJson文件夹

fs.writeFile(path.join(__dirname, '../dist/transformFileToJson/transformFileToJson.js'), '', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
})

// 获取指定路径 path 下的，默认深度为 3 的目录 JSON
function getIndexByPath(dir, deep = 10) {
  let dirDevide = dir.split('/');
  let preDir = dirDevide.splice(0, dirDevide.length - 1).join('/');
  let index = {};
  let arr = [];
  getIndexOfPathByDeep(index, path.join(__dirname, preDir), dirDevide[0], deep + 1, arr);
  return arr;
}

// 开始对指定 path 递归查找深度为 deep 深度
function getIndexOfPathByDeep(obj, dir, curDir, deep, arr) {
  let curPath = path.join(dir, curDir);
  let newkey = null;
  // 判断当前是文件夹
  if (fs.statSync(curPath).isDirectory()) {
    let lists = fs.readdirSync(curPath);
    lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1, arr))
  } else {
    // 当前不是文件夹，当前是文件
    let key = curDir.split('.');
    newkey = key.pop();
    if (newkey == 'js') {
      // console.log(curPath);
      // 异步读取
      fs.readFile(curPath, function (err, data) {
        if (err) {
          return console.error(err);
        }
        // console.log("异步读取: " + data.toString());
        writeFile(data);
      });

      // console.log(newkey);
    }
  }
}

function writeFile(data) {
  fs.appendFile(path.join(__dirname, '../dist/transformFileToJson/transformFileToJson.js'), data, (err) => {
    if (err) {
      // 读文件是不存在报错 
      // 意外错误
      // 文件权限问题
      // 文件夹找不到(不会自动创建文件夹)
      console.log(err);
    } else {
      console.log('success');
    }
  });
}
getIndexByPath('../src/transformFileToJson');
console.log('程序执行完毕transformFileToJson.js');
