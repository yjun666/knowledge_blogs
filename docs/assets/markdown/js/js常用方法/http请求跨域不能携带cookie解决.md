# Ajax跨域请求COOKIE无法带上的完美解决办法

> 1、原生ajax请求方式：

```
1 var xhr = new XMLHttpRequest();
2 xhr.open("POST", "http://xxxx.com/demo/b/index.php", true);
3 xhr.withCredentials = true; //支持跨域发送cookies
4 xhr.send();
```

> 2、jquery的ajax的post方法请求：

```
$.ajax({
    type: "POST",
    url: "http://xxx.com/api/test",
    dataType: 'json',
    // 允许携带证书
    xhrFields: {
       withCredentials: true
    },
　　// 允许跨域
    crossDomain: true,
    success:function(){
    },
    error:function(){
  }
})
```

> 3、服务器端设置：

```
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: http://www.xxx.com");
```

> http 跨域请求携带cookie的demo

```
// angular5 使用
document.cookie = 'alsdkjf=asdfasdf';
const headers = new HttpHeaders();
console.log(headers);
this.http.get('http://localhost:3000/search', {
    headers,
    withCredentials: true // 解决跨域请求不能携带cookie的问题
}).subscribe((data) => {
    console.log(data);
});
// jqueryAjax使用
$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/search',
    // 允许携带证书
    xhrFields: {
    withCredentials: true
    },
    // 允许跨域
    // crossDomain: true,
    success: () => {
    // alert('success');
    },
    error: (err) => {
    console.error(err);
    }
});
```

> jsonp跨域方式具体实现

```
// 前端代码
// 1.
 <script>
    function test(data) {
      console.log(data);
    }
  </script>
  <!-- jsonp 跨域回调函数,接口是github上边的express启动的服务接口 -->
  <script src="http://localhost:3000/search?name=123&callback=test"></script>

// 2.
{
// jsonp跨域调用方式---------start
const test = (data) => { console.log(data); };
this.http.jsonp('http://localhost:3000/search', 'callback=test').subscribe((data) => {
    console.log(data);
});
// jsonp跨域调用方式---------end
}

<!-- 后台代码实现调用回调函数 -->
router.get('/search', function (req, res, next) {
  console.log(req.cookies);
  TodoModel.
  find().
  sort('updated_at').
  exec(function (err, aa, count) {
    // 解析url参数获取到回调函数的函数名称
    var _callback = req.query.callback;
    // 如果回调函数存在
    if (_callback) {
      // 设置类型为javascript，之后send一个函数的调用，并把数据传回
      res.type('text/javascript');
      res.send(_callback + '(' + JSON.stringify(aa) + ')');
    } else {
    // 直接返回数据
      res.send(aa);
    }
  });
});
```

