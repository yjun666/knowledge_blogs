#### angular proxy.config

1. 使用 proxy.config.json 方式

```
<!-- 在package.json 文件中配置 --proxy-config proxy.config.json 执行代理配置 -->
"start:proxy": "ng serve --proxy-config proxy.config.json --port 4108",

proxy.config.json 内容
"/" 空路径如果存在那么代理都执行空路径代理，只有空路径的不存在才执行其他存在路径的代理
{
  <!-- 请求地址 -->
  "/list/search": {
    "target": "http://localhost:3000", // 代理目标路径
    "secure": "true",
    "pathRewrite": { // 代理配置项能让你在运行时重写 URL 路径。 比如，你可以在代理配置中指定如下的 pathRewrite 值，以移除路径末尾的 "search" 部分,未进行测试，不确定功能
      "^/search": ""
    },
    "logLevel": "debug" // 测试是否执行了代理
  },

  "/list/create": {
    "target": "http://localhost:3000",
    "secure": "true",
    "pathRewrite": {
      "^/create": ""
    },
    "logLevel": "debug"
  },

  "/": {
    "target": "http://localhost:3000",
    "secure": "true"
  }
}
```

2. 使用 proxy.config.js 方式
   需要在 angular.json 文件中配置

```
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "blogs-test:build",
      "proxyConfig": "src/proxy.config.js" // 添加的代理配置代码
    },
    "configurations": {
      "production": {
        "browserTarget": "blogs-test:build:production"
      }
    }
  },
```

<!-- 文件内容 -->

```
const PROXY_CONFIG = [{
  // 同时设置多个代理
  context: [
    "/list/search",
    "/list/create"
  ],
  target: "http://localhost:3000",
  secure: true,
  logLevel: "debug",
  // 绕过代理配置
  bypass: function (req, res, proxyOptions) {
    console.log(req.url);
    // 绕过代理，如果请求地址是list/search，那么绕过代理直接请求
    if (req.url.indexOf('/list/search') !== -1) {
      return false;
    }

    if (req.headers.accept.indexOf("html") !== -1) {
      console.log("Skipping proxy for browser request.");
      return "/index.html";
    }
    req.headers["X-Custom-Header"] = "yes";
  }
}]

module.exports = PROXY_CONFIG;

```
