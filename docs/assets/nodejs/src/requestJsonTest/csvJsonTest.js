// 根据node读取csv文件后生成二维数组解析成对象组成的一维数组   json/errorlist.json    to     json/csvJsonTest.json
var path = require('path');
var fs = require('fs');

function csvJsonTest() {
  var data = fs.readFileSync(path.join(__dirname, '../../../json/errorlist.json'));
  parseCsvJson(JSON.parse(data));

  function parseCsvJson(aa) {
    let arr = [];
    for (let m = 0; m < aa.length; m++) {
      let obj = {};
      for (let j = 0; j < aa[m].length; j++) {
        obj[aa[0][j]] = aa[m][j];
      }
      if (JSON.stringify(obj) !== "{}") {
        arr.push(obj);
      }
    }
    fs.writeFileSync(path.join(__dirname, '../../../json/csvJsonTest.json'), JSON.stringify(arr));
  }

  console.log('程序执行完毕  根据node读取csv文件后生成二维数组解析成对象组成的一维数组')
}

module.exports = csvJsonTest;
