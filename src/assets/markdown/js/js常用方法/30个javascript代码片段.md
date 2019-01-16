### 30段javascript代码片段
### 1. 区分IE浏览器和非IE浏览器
```
IE11不支持
if( !+[1,] ){
    alert(这是IE浏览器);
}else {
    alert(这是非IE浏览器);
}
```

### 2.将日期直接转换成数值
```
+new Date(); 等同于 new Date().getTime();
```
### 3.非IE浏览器下将类数组对象"arguments"转为数组
```
Array.prototype.slice.call(arguments);

等同于es6中的Array.from()

Array().slice或[].slice 效率较低
```

### 4.  ||运算符
```
var aa = 0||3;
```

### 5. 单链式运算
```
var a=10;
console.log(a++-1);
先执行“a-1”，再执行a=a+1;
```
