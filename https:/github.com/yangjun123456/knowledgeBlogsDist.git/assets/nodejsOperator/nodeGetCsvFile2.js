// node 读取csv文件生成二位数组
var path = require('path');
var fs = require('fs');

fs.readFile(path.join(__dirname, '../file/PCG_dbo_allCountryInfo_manualAdjustment_2.csv'), function (err, data) {
  var table = new Array();
  if (err) {
    console.log(err.stack);
    return;
  }

  ConvertToTable2(data);
});

function ConvertToTable2(data) {
  data = data.toString();
  var table = new Array();
  var rows = new Array();
  rows = data.split("\r\n");
  for (var i = 0; i < rows.length; i++) {
    table.push(rows[i].split(","));
  }
  fs.writeFile(path.join(__dirname, '../json/PCG_dbo_allCountryInfo_manualAdjustment_2.json'), JSON.stringify(table), (err) => {
    if (err) {
      console.log(err);
    }else{
      console.log('success');
    }
  });
}

console.log('程序执行完毕nodeGetCsvFile----PCG_dbo_allCountryInfo_manualAdjustment_2');
