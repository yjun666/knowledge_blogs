# array数组方法
* every

数组中的数值经过函数逻辑处理后返回都为true则为true
```
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
```
* some

有一个为true则为true
```
function isBigEnough(element, index, array) {
  return (element >= 10);
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true
```
* filter

> filter(callback[,thisArg])

>filter是`过滤`的意思，所以这个方法的作用就是返回一个匹配过滤条件的新数组，其接收两个参数callback和thisArg, callback也是回调函数，主要用于对元素进行条件匹配，thisArg和forEach中的thisArg作用一样

```
var arr = ["a","b","a","c"];
var newArr = arr.filter(function(item){
     return item === "a";
});
       
newArr -> ["a","a"]
```
* map

> map(callback[,thisArg])

map的作用是对原数组进行加工处理后并将其作为一个新数组返回，该方法同样接收两个参数，callback是回调函数用于对数组进行加工处理，thisArg和上面的一样。


```
var arr = [
   {w:10,h:10}, //定义长和宽
   {w:15,h:20},
   {w:12,h:12}
];
var newArr = arr.map(function(item){
   //根据长宽计算出面积并赋值给新属性area 
   item.area = item.w * item.h;
   return item;
});
newArr[0] - > {w: 10, h: 10, area: 100}
```

* 判断两个1维数组是否全等

> 先排序再比较

```
alert([1,2,3].sort().toString()== [3,2,1].sort().toString());
```
