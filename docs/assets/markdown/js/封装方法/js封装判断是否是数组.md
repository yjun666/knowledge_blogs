
#### js判断当时是否是数组
```
var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  }
};
var isString = isType('String');
var isArray = isType('Array');
var isNumber = isType('Number');
console.log(isArray([1, 2, 3]));
```

#### 利用循环批量注册isType函数

```
var Type = {};
for (var i = 0, type; type = ['String', 'Array', 'Number'][i++];) {
  (function (type) {
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  })(type)
};


Type.isArray([1,2,3,4,5,6]); //true
Type.isString('asdlfasdflkj'); //true
Type.isNumber(123123); //true
Type.isArray(123123); //false
Type.isString(123123);//false
Type.isNumber([]);//false
```
