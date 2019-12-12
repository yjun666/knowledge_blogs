### 布尔值
let isDone: boolean = false;

### 数字
和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，Typescript还支持ECMAScript 2015中引入的二进制和八进制字面量。
```
{
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;
    console.log(decLiteral,hexLiteral,binaryLiteral,octalLiteral) //6 61453 10 484
}
```
### 字符串
第二个是使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
```
{
    let name: string="bob";
    name = "smith";
    console.log(name);
}
{
    let name: string = `Gene`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${ name }.

    I'll be ${ age + 1 } years old next month.`;
    console.log(sentence)
    同以下:
    let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
    console.log(sentence)
}
```
### 数组
TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组(前提是前边定义了数组内的值得类型)：

`let list: number[] = [1, 2, 3];`

第二种方式是使用数组泛型，Array<元素类型>：

`let list: Array<number> = [1, 2, 3];`

### 元组 Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。

```
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error

当访问一个已知索引的元素，会得到正确的类型：

console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

当访问一个越界的元素，会使用联合类型替代：

x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
x[5]=123;
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
```
以上方式在使用string及number内置方法时，需同时使用字符串和数值类型都有的方法，例如toString，不能使用substr，因为 number类型没有substr方法，添加元素时，也只能添加string和number类型的值或元素，不能添加boolean和obj和func

### 枚举　enum
enum类型是对JavaScript标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。
```
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
```
默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
```
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
```
或者，全部都采用手动赋值：
```
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
```
枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
```
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
let b: Color = Color.Blue; 
console.log(b);  //3 像是通过名字获取数值
alert(colorName); //  像是通过数值获取名字
```
### 任意值
就是可以定义任意类型的值，any
```
{
    let anyType: any=4.123;
    
    // anyType.toFixed(2)
    // console.log(anyType.toFixed(2))
    
    // anyType="123";
    //anyType={"a":1,"b":2};
    anyType=[1,2,"3"];
    console.log(anyType);
    
}
let list: any[] = [1, true, "free"];//数组中可以添加任意类型的值
list[1] = 100;
```

















