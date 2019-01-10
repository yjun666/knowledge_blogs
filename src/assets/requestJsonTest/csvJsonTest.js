// 根据node读取csv文件后生成二维数组解析成对象组成的一维数组
const path = require('path');
const fs = require('fs');

// 同步读取
var data = fs.readFileSync('../json/csv.json');
parseCsvJson(JSON.parse(data));
console.log("同步读取: " + data.toString());


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

  // 生成同级的json数组对象
  const path = require('path');
  const fs = require('fs');
  fs.writeFileSync('./csvJsonTest.json', JSON.stringify(arr));

}

console.log('chenggong')
