### tsconfigJson配置说明
```
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "module": "esnext", // 使用esnext 打包出来多个文件，使用commonjs打包出来一个mainjs文件，分别请求和多个请求的区别
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es5", // 使用es5 关闭差异化构建， 使用es2015 开启差异化构建
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2018",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "fullTemplateTypeCheck": true,
    "strictInjectionParameters": true
  }
}
```
