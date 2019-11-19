### angular 开发环境下配置代理实现跨域请求获取数据

1. 根目录下设置proxy.config.json

```
// 配置代理，代理服务器到10.110.147.33;
// 只能使用ip地址，不能使用localhost
// 可以配置多个代理
{
    "/": {
      "target": "http://10.110.147.33:8014",
      "secure": "true"
    }
}
```

2. 设置package.json中script命令并重启服务

```
"start": "ng serve --proxy-config proxy.config.json",
```

3. 前端代码实现 不用输全路径，域名自己匹配

```
{
    // get调用方式跨域携带cookie---------start
    // 通过配置代理在开发环境跨域访问
    this.http.get('/1.0/machine-learning/app/project/getProjectById?projectId=4d812b56cb5c47bcb4c1cbf5e99bdf7f', {
    headers,
    withCredentials: true, // 解决跨域请求不能携带cookie的问题
    observe: 'response',  // 加入该参数可获取完整的响应体
    }).subscribe((data) => {
    console.log(data);
    });
    // get调用方式跨域携带cookie---------end
}
```

4. 后端需要改成域名访问，不能使用localhost在express启动项目即npm start 命令后边添加 --host ip