### Ajax跨域请求COOKIE无法带上的完美解决办法
> 原生
1、原生ajax请求方式：

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



