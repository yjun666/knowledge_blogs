#### webpack-bundle-analyzer可视化分析打包后的代码
`npm install --save-dev webpack-bundle-analyzer`
```
package.json

"scripts":{
  
  ...

  "build:prod:output": "ng build --configuration=production --prod --output-path docs --base-href --stats-json", // 新添 --stats-json 命令
  
  ...

  "bundle-report": "webpack-bundle-analyzer docs/stats.json" // 进行可视化分析打包后的代码
}

【以上 先执行打包命令，再执行 bundle-report命令，可打开可视化页面】
```
