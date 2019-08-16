// var program = require('commander')
var fs = require('fs');
var path = require('path');

var csvJsonTestFun = require('./src/requestJsonTest/csvJsonTest');
var buildErrorListJsonFun = require('./src/transformFileToJson/buildErrorListJson');
var buildPCG_dbo_allCountryInfo_manualAdjustment_2JsonFun = require('./src/transformFileToJson/buildPCG_dbo_allCountryInfo_manualAdjustment_2Json');
var fsReadFileToJsonFun = require('./src/transformFileToJson/fsReadFileToJson');
var fsReadFileToJson2Fun = require('./src/transformFileToJson/fsReadFileToJson2');
var delAndCreateDirFun = require('./src/operatorDir/delAndCreateDir');

delAndCreateDirFun(path.join(__dirname, '../../json'));

buildErrorListJsonFun();
buildPCG_dbo_allCountryInfo_manualAdjustment_2JsonFun();
fsReadFileToJsonFun();
fsReadFileToJson2Fun();
setTimeout(() => {
  csvJsonTestFun(); // 异步需要使用到 buildErrorListJsonFun 方法生成的json文件，所有需要添加延时器，或都转换成同步执行
}, 1000);
