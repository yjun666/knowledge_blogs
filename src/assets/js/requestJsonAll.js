// 根据node读取csv文件后生成二维数组解析成对象组成的一维数组
var path = require('path');
var fs = require('fs');

var data = fs.readFileSync(path.join(__dirname, '../json/csv.json'));
parseCsvJson(JSON.parse(data));
// console.log("同步读取: " + data.toString());


function parseCsvJson(aa) {
  let arr = [];
  for (let m = 1; m < aa.length; m++) {
    let obj = {};
    for (let j = 0; j < aa[m].length; j++) {
      obj[aa[0][j]] = aa[m][j];
    }
    if (JSON.stringify(obj) !== "{}") {
      arr.push(obj);
    }
  }
  fs.writeFileSync(path.join(__dirname, '../requestJsonTest/csvJsonTest.json'), JSON.stringify(arr));
}

console.log('程序執行完畢csvJsonTest')
