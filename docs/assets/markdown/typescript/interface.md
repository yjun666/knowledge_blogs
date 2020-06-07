# interface
### 接口
```
function printLabel(labelledObj: { label: string }) {
                                //接口中参数能少不能多
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
##### 使用接口实现以上
```
interface Label{
    label:string;
}
function printLabel( labeledObj: Label ){
    console.log(labelledObj.label)
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
### 可选属性 ? 问号表示可选属性

> 接口里的属性不全都是必需的，所以会用到可选属性

> 实现方式和普通函数没什么区别只是可以不必一定要实现接口里的可选属性

```
interface SquareConfig {
  color?: string;
  width?: number;
}
```
### 只读属性
只读属性只能在对象刚刚创建的时候修改其值
```
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```
> 数组的只读属性     
> TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似
```
let ro: ReadonlyArray<number> = [1, 2, 3, 4];
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
改变只读数组可以用类型断言重写
```
let a=ro as number[];
a.length=100;
```
### 额外的属性检查
> 传入的为对象类型时，会进行额外的类型检查，若接口中没有对应的参数进行定义，会报错，解决方式之一是将对象赋值给变量，变量传参，则会跳过额外的属性检查

### 函数类型
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
//函数中的参数不必一定要和接口中的相同，类型一样就行了
//函数参数中也不必一定写上类型，typescript会进行类型推断
mySearch = function(sou: string, sub: string) {
  let result = sou.search(sub);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}
```
### 可索引的类型    数组类型

```
//索引对象中的键名为number类型，数组也为number类型，值为string类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = { 0:"1",1:"2" };

let myStr: string = myArray[0];
console.log(myStr);
```

```
//索引对象中的键名为number类型，数组也为string类型，值为string类型
interface StringArray {
    [index: string]: string;
}

let myArray: StringArray;
myArray = { "name":"1","age":"2" };

let myStr: string = myArray[name];
console.log(myStr);
```

```
//index的类型签名可以描述常用的数组，这点会强制所有的属性都需要和其返回值匹配
interface Dictionary {
  [index: string]: string;
  length: number;    // error, the type of 'length' is not a subtype of the indexer
  name:string;       // OK
} 
```



### 类类型     类实现接口
implements 类实现接口
```
interface ClockInterface {
    time?: Date;
    currentTime?: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    name: Date;
    setTime(d: Date) {
        this.name = d;
    }
    constructor(h: number, m: number) { }
}
```
### 扩展接口
extends
```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {   //继承多个接口
    sideLength: number;
}

let square = <Square>{};   //实现Square类型的对象
square.color = "blue";      //color赋值，实现string类型
square.sideLength = 10;
square.penWidth = 5.0;
```
### 混合类型

```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { console.log(start) };  //定义一个Counter类型的函数
    counter.interval = 123;                                                  //counter像对象一样可以添加属性和方法  //向counter中添加属性及方法
    counter.reset = function () { console.log("222222") };  
    counter.fun = function(){ consoel.log("1111111111) }                      //报错，不能实现接口里边没有的属性
    console.log(counter);
    return counter;
}

let c = getCounter();
console.log(c) 
c(10);                
c.reset();
c.interval = 5.0;
```
```
//或仅定义一个Counter类型的对象，可扩展
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

let counter = <Counter>{};                           //定义一个Counter类型的对象
counter.interval = 123;                              //counter像对象一样可以添加属性和方法  //向counter中添加属性及方法
counter.reset = function () { console.log("222222") };  
console.log(counter);
return counter;

let c = getCounter();
console.log(c) 
c(10);                
c.reset();
c.interval = 5.0;
```

### 接口继承类
接口继承类  接口如果继承了类，只能由该类及其子类实现接口的继承

```
class Control implements SelectableControl {
  private state: any = "123";
    select(){}
}
interface SelectableControl extends Control {
    select(): void;
}

class Button  extends Control implements SelectableControl {  //Button是control的子类，可以实现接口
  select(){}
}
class TextBox implements Control {           //TextBox不是control的子类不能实现SelectableControl接口  报错
    select() { }
}
```