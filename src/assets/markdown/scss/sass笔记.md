# sass阮一峰的网络日志
```
http://www.ruanyifeng.com/blog/2012/06/sass.html
```
>SASS是一种CSS的开发工具,css预处理器，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。

#### 二、安装和使用
* 2.1 安装

>SASS是Ruby语言写的，但是两者的语法没有关系。不懂Ruby，照样使用。只是必须先安装Ruby，然后再安装SASS。


>假定你已经安装好了Ruby，接着在命令行输入下面的命令：
`gem install sass`

* 2.2 使用

>编译sass
`sass test.scss test.css`

2.2.1  SASS提供四个[**编译风格**](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style)的选项：
```
* nested：嵌套缩进的css代码，它是默认值。

* expanded：没有缩进的、扩展的css代码。

* compact：简洁格式的css代码。

* compressed：压缩后的css代码。
```
>生产环境当中，一般使用最后一个选项--
`sass --style compressed test.sass test.css`

2.2.2 SASS编译监听
```
// watch a file

sass --watch input.scss:output.css

// watch a directory

sass --watch app/sass:public/stylesheets
```

#### 三、基本用法

* 3.1 变量

>SASS允许使用变量，所有变量以$开头。

```
$blue : #1875e7;　
div {
　color : $blue;
}
```
>如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。

```
$side : left;
.rounded {
　border-#{$side}-radius: 5px;
}
```

* 3.2 计算功能

```
body {
　　margin: (14px/2);
　　top: 50px + 100px;
　  right: $var * 10%;
}
```

* 3.3 嵌套
 
 ~~3.3.1  选择器嵌套~~

> SASS允许选择器嵌套。比如，下面的CSS代码：

```
div h1 {
　　color : red;
}
```

可以写成：

```
div {
　h1 {
　　color:red;
　}
}
```

~~3.3.2 属性嵌套~~

```
p {
　border: {
　　color: red;
　}
}
```

~~3.3.3 &符号引用父元素~~

```
a {
　&:hover { color: #ffb3ff; }
}
```

*  3.4 注释

- SASS共有两种注释风格。

- - 标准的CSS注释 /* comment */ ，会保留到编译后的文件。

- - 单行注释 // comment，只保留在SASS源文件中，编译后被省略。

- - 在/*后面加一个感叹号，表示这是"重要注释"。即使是压缩模式编译，也会保留这行注释，通常可以用于声明版权信息。

```
/*!
　　重要注释！
　　*/
```

#### 四、代码的重用

* 4.1 继承

SASS允许一个选择器，继承另一个选择器。比如，现有class1：

```
.class1 {
　　border: 1px solid #ddd;
}
```

class2要继承class1，就要使用@extend命令：

```
.class2 {
　　@extend .class1;
　　font-size:120%;
}
```

* 4.2 Mixin

Mixin有点像C语言的宏（macro），是可以重用的代码块。
使用@mixin命令，定义一个代码块。

```
@mixin left {
　　float: left;
　　margin-left: 10px;
}
```

使用@include命令，调用这个mixin。

```
div {
　　@include left;
}
```

mixin的强大之处，在于可以指定参数和缺省值。

```
@mixin left($value: 10px) {
　　float: left;
　　margin-right: $value;
}
```

使用的时候，根据需要加入参数：

```
div {
　　@include left(20px);
}
```

下面是一个mixin的实例，用来生成浏览器前缀:

```
@mixin rounded($vert, $horz, $radius: 10px) {
　　border-#{$vert}-#{$horz}-radius: $radius;
　　-moz-border-radius-#{$vert}#{$horz}: $radius;
　　-webkit-border-#{$vert}-#{$horz}-radius: $radius;
}
```

使用的时候，可以像下面这样调用：

```
#navbar li { @include rounded(top, left); }
#footer { @include rounded(top, left, 5px); }
```

* 4.3 颜色函数

SASS提供了一些内置的颜色函数，以便生成系列颜色。

```
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
grayscale(#cc3) // #808080
complement(#cc3) // #33c
```

* 4.4 插入文件

@import命令，用来插入外部文件。
`@import "path/filename.scss";`
如果插入的是.css文件，则等同于css的import命令。
`@import "foo.css";`

#### 五、高级用法 

* 5.1 条件语句

@if可以用来判断：

```
p {
　　@if 1 + 1 == 2 { border: 1px solid; }
　　@if 5 < 3 { border: 2px dotted; }
}
```
配套的还有@else命令：

```
@if lightness($color) > 30% {
　　background-color: #000;
} @else {
　　background-color: #fff;
}
```

* 5.2 循环语句
SASS支持for循环：

```
@for $i from 1 to 10 {
　　.border-#{$i} {
　　　　border: #{$i}px solid blue;
　　}
}


$oneNavStatusImg: ((className:'demandForecasting', imgHeight:1.1rem, format:'.png'),
  (className:'purchasePlan', imgHeight:1.05rem, format:'.png'),
  // (className:'oweGoodsWarning', imgHeight:1rem),
  (className:'historyRecord', imgHeight:1.1rem, format:'.svg'),
  (className:'statisticalReports', imgHeight:1.05rem, format:'.png'),
  (className:'ruleManagement', imgHeight:0.85rem, format:'.png'),
  (className:'systemOperational', imgHeight:1rem, format:'.png'),
  (className:'ltbFullDosePred', imgHeight:1.2rem, format:'.png'));

// 设置一级导航的图片及hover态图片
  @for $i from 1 through length($oneNavStatusImg) {
    $item: nth($oneNavStatusImg, $i);
    $className: map-get($item, className);
    $imgHeight: map-get($item, imgHeight);
    $format: map-get($item, format);

    li.#{$className} {
      .top {
        span.icon {
          background-image: url(../../../assets/sideBar/#{$className}_normal#{$format});
          height: #{$imgHeight};
        }
      }

      &:hover {
        .top:not(.notAllowDisabled) {
          span.icon {
            background-image: url(../../../assets/sideBar/#{$className}_hover#{$format});
          }
        }
      }

      &:active {
        .top:not(.notAllowDisabled) {
          span.icon {
            background-image: url(../../../assets/sideBar/#{$className}_hover#{$format});
          }
        }
      }

      .active:not(.notAllowDisabled) {
        background-color: #4ECEFF !important;

        span.icon {
          transition: all 10ms;
          background-image: url(../../../assets/sideBar/#{$className}_active.png) !important;
        }

        span.text {
          color: #fff;
        }
      }

      .active:not(.notAllowDisabled)+div.bottom {
        background-color: #4ECEFF !important;
        color: #fff;
      }
    }
  }
```

也支持while循环：

```
$i: 6;
@while $i > 0 {
　　.item-#{$i} { width: 2em * $i; }
　　$i: $i - 2;
}
```
each命令，作用与for类似：

```
@each $member in a, b, c, d {
　　.#{$member} {
　　　　background-image: url("/image/#{$member}.jpg");
　　}
}
```
* 5.3 自定义函数

SASS允许用户编写自己的函数。

```
@function double($n) {
　　@return $n * 2;
}
#sidebar {
　　width: double(5px);
}
```

























