## typescript
1、使用ts作为文件扩展名  typescript.ts

2、npm安装typescript   
 - npm install -g typescript
 
3、官网代码ts基本写法

```
function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);
```

4、在npm中运行 `tsc greeter.ts`可实现生成同样代码的js文件

5、类型注解
```
function greeter(person: string) {
    return "Hello, " + person;
}

var user = [0, 1, 2];

document.body.innerHTML = greeter(user);
```

类型注解不好用，ts文件在sublime中会报函数中的冒号的错误

#### 接口　　interface

```
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);
```
以上代码是使用了接口代码

#### 类
在构造函数参数中使用public是一种简写形式，它将自动创建具有该名称的属性。
```
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```
