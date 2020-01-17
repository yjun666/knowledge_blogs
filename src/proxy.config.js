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
