#### Object.prototype.toLocaleString()
>toLocaleString() 方法返回一个该对象的字符串表示。该方法主要用于被本地化相关对象覆盖。

> `obj.toLocaleString();`

#### Object.prototype.hasOwnProperty()
>hasOwnProperty() 方法会返回一个布尔值，指示对象是否具有指定的属性作为自身（不继承）属性。

> `obj.hasOwnProperty(prop)`

```
o = new Object();
o.prop = 'exists';
function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}
o.hasOwnProperty('prop');   // 返回 true
changeO();
o.hasOwnProperty('prop');   // 返回 false
```

#### Object.prototype.isPrototypeOf()
> isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。

>Note: isPrototypeOf() 与 instanceof  运算符不同。在表达式 "object instanceof AFunction"中，对象原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。

> `prototypeObj.isPrototypeOf(object)`

```
function Fee() {
  // . . .
}
function Fi() {
  // . . .
}
Fi.prototype = new Fee();
function Fo() {
  // . . .
}
Fo.prototype = new Fi();
function Fum() {
  // . . .
}
Fum.prototype = new Fo();
var fum = new Fum();
. . .
if (Fi.prototype.isPrototypeOf(fum)) {
  // do something safe
}
```

>当需要判断对象的后代是否在特定原型链上，例如，以保证一定的方法或属性将存在该对象上，这时候就需要用到 instanceof。

#### instanceof

>instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

`object instanceof constructor`

```
// 定义构造函数
function C(){} 
function D(){} 
var o = new C();
// true，因为 Object.getPrototypeOf(o) === C.prototype
o instanceof C; 
// false，因为 D.prototype不在o的原型链上
o instanceof D; 
o instanceof Object; // true,因为Object.prototype.isPrototypeOf(o)返回true
C.prototype instanceof Object // true,同上
C.prototype = {};
var o2 = new C();
o2 instanceof C; // true
o instanceof C; // false,C.prototype指向了一个空对象,这个空对象不在o的原型链上.
D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true
```
#### getOwnPropertyDescriptor获取对象属性的描述

```
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

#### Object.getOwnPropertyDescriptors
>获取一个对象所有属性的描述

```
const obj = {
  foo: 123,
  get bar() { return 'abc' }
};

Object.getOwnPropertyDescriptors(obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
```

