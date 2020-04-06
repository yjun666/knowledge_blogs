// 生成同级的json数组对象
var path = require('path');
var fs = require('fs');

function modifyBgPath() {
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
    obj = obj ? obj : {};
    if (dir.includes('assets') || curDir === 'assets') {
      return;
    }
    // console.log(obj, dir, curDir, deep, arr);
    let curPath = path.join(dir, curDir);
    let newkey = null;
    // 判断当前是文件夹
    if (fs.statSync(curPath).isDirectory()) {
      newkey = null;
      let lists = fs.readdirSync(curPath);
      lists.forEach(list => getIndexOfPathByDeep(obj[curDir], curPath, list, deep - 1, arr))
    } else {
      // 当前不是文件夹，当前是文件
      let key = curDir.split('.');
      newkey = key.pop(); // 获取文件后缀名称
      // console.log(curPath, '++');

      if (newkey === 'js' || newkey === 'css') {
        // 替换js文件中的 背景图片/assets/ 改为相对路径，相对于当前项目目录根目录
        fs.readFile(curPath, 'utf8', function (err, data) {
          if (err) throw err;
          // 替换js文件中的 背景图片/assets/ 改为相对路径，相对于当前项目目录根目录----start
          // console.log('-image:url(/assets', data.includes('-image:url(/assets'));
          // console.log('-image:url(./assets', data.includes('-image:url(./assets'));
          const str1 = data.replace(/-image:url\(\/assets/ig, '-image:url(./assets');
          // 替换js文件中的 背景图片/assets/ 改为相对路径，相对于当前项目目录根目录----end

          // 替换css文件中的 字体引入 /assets/ 改为相对路径，相对于当前项目目录根目录-------start
          // console.log('src:url(/assets', data.includes('src:url(/assets'));
          // console.log('src:url(./assets', data.includes('src:url(./assets'));
          const newcontent = str1.replace(/src:url\(\/assets/ig, 'src:url(./assets');
          // 替换css文件中的 字体引入 /assets/ 改为相对路径，相对于当前项目目录根目录-------end

          // 重新写入文件
          if (data !== newcontent) {
            fs.writeFile(curPath, newcontent, 'utf8', (err) => {
              if (err) throw err;
              console.log('success done', curDir);
            });
          }
        });
      } else if (newkey !== 'js' && newkey !== 'css' && newkey !== 'ico' && newkey !== 'txt' && newkey !== 'html' && newkey !== 'map' && newkey !== 'md') {
        // 删除掉除了js、css、txt、ico、html文件以外的所有文件，避免assets 中的静态文件打包到根目录中，造成资源重复

        // } else if (newkey === 'svg' || newkey == 'png' || newkey == 'jpg' || newkey == 'jpeg' || newkey == 'gif' || newkey === 'otf' || newkey === 'ttf' || newkey === 'woff') {
        try {
          /**
           * @des 判断文件或文件夹是否存在
           */
          if (fs.existsSync(curPath)) {
            console.log('图片已删除', curDir);
            fs.unlinkSync(curPath);
          } else {
            console.log('inexistence path：', curPath);
          }
        } catch (error) {
          console.log('del error', error);
        }
      }
    }
  }

  getIndexByPath('../../../dist');
  getIndexByPath('../../../docs');
  console.log('程序执行完毕');
}

modifyBgPath();

// module.exports = modifyBgPath;
