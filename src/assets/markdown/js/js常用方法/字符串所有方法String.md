# string

### fromCharCode    通过一串 Unicode 创建字符串。
```
String.fromCharCode(num1, ..., numN) 
String.fromCharCode(67,68,69,75,74,73,78,86) 
"CDEKJINV"
```

### fromCodePoint    通过一串 码点 创建字符串。



### charAt 从一个字符串中返回指定的字符
```
str.charAt(index)
按下标字符
```

### charCodeAt()    方法返回0到65535之间的整数，表示给定索引处的UTF-16代码单元 (在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，只能匹配 Unicode 代理对的第一个编码单元) 。如果你想要整个代码点的值，使用 codePointAt()。
```
str.charCodeAt(index);
'asdf'.charCodeAt(2)
100
```

### codePointAt() 方法返回 一个 Unicode 编码点值的非负整数。
```
str.codePointAt(pos)
pos
这个字符串中需要转码的元素的位置。
返回值

返回值是在字符串中的给定索引的编码单元体现的数字，如果在索引处没找到元素则返回 undefined 。Ï

'asdflh'.codePointAt(1)
115
'asdflh'.codePointAt(0)
97
```

### concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
```
str.concat(string2, string3[, ..., stringN])

string2...stringN
和原字符串连接的多个字符串
描述

concat 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。 concat 方法并不影响原字符串。

'asdf'.concat('bbb','nnnn','mmmm');
"asdfbbbnnnnmmmm"
```

### endsWith()   方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
```
str.endsWith(searchString [, position]);

searchString
要搜索的子字符串。
position
在 str 中搜索 searchString 的结束位置，默认值为 str.length，也就是真正的字符串结尾处。

var str = "To be, or not to be, that is the question.";

alert( str.endsWith("question.") );  // true
alert( str.endsWith("to be") );      // false
alert( str.endsWith("to be", 19) );  // true
alert( str.endsWith("To be", 5) );   // true
```

### includes()   方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。
```
str.includes(searchString[, position])

searchString
要在此字符串中搜索的字符串。。
position
可选。从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0。
返回值

如果当前字符串包含被搜寻的字符串，就返回true；否则，返回false。

var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
```
### indexOf()  方法返回调用  String 对象中第一次出现的指定值的索引，开始在 fromIndex进行搜索。如果未找到该值，则返回-1。
```
str.indexOf(searchValue[, fromIndex])

searchValue
一个字符串表示被查找的值。
fromIndex 可选
表示调用该方法的字符串中开始查找的位置。可以是任意整数。默认值为 0。如果 fromIndex < 0 则查找整个字符串（如同传进了 0）。如果 fromIndex >= str.length，则该方法返回 -1，除非被查找的字符串是一个空字符串，此时返回 str.length。
返回值

指定值的第一次出现的索引; 如果没有找到 -1。


"Blue Whale".indexOf("Blue");     // returns  0
"Blue Whale".indexOf("Blute");    // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("", 9);      // returns  9
"Blue Whale".indexOf("", 10);     // returns 10
"Blue Whale".indexOf("", 11);     // returns 10
```

### lastIndexOf()  方法返回指定值在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。从该字符串的后面向前查找，从 fromIndex 处开始。
```
str.lastIndexOf(searchValue[, fromIndex])

searchValue
一个字符串，表示被查找的值。
fromIndex
从调用该方法字符串的此位置处开始查找。可以是任意整数。默认值为 str.length。如果为负值，则被看作 0。如果 fromIndex > str.length，则 fromIndex 被看作 str.length。

"canal".lastIndexOf("a")   // returns 3
"canal".lastIndexOf("a",2) // returns 1
"canal".lastIndexOf("a",0) // returns -1
"canal".lastIndexOf("x")   // returns -1
```

### match  当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。
```
str.match(regexp);

regexp
一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你未提供任何参数，直接使用 match() ，那么你会得到一个包含空字符串的 Array ：[""] 。

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);  ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]
```

### anchor  创建html锚
```
'asdf'.anchor()
"<a name="undefined">asdf</a>"
```

### 比较两个字符串是否相等的方法
```
'asdfasdf'.localeCompare('asdfasdf');
```

