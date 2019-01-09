// node 读取csv文件生成二位数组
const path = require('path');
const fs = require('fs');

fs.readFile('../file/errorlist.csv', function (err, data) {
  var table = new Array();
  if (err) {
    console.log(err.stack);
    return;
  }

  ConvertToTable(data, function (table) {
    // console.log(table);
    fs.writeFileSync('../json/csv.json', JSON.stringify(table));
  })
});
console.log("程序执行完毕");

function ConvertToTable(data, callBack) {
  data = data.toString();
  var table = new Array();
  var rows = new Array();
  rows = data.split("\r\n");
  for (var i = 0; i < rows.length; i++) {
    table.push(rows[i].split(","));
  }
  callBack(table);
}

console.log('wancheng');
