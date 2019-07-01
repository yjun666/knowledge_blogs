> css多行文本垂直居中

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>css居中对齐</title>
    <style> 
        *{padding: 0;margin:0;font-size: 12px;}  
        div{display: table-cell;width: 200px;height:150px;border:1px solid blue;vertical-align: middle;}  
    </style>
    <div>  
        <span>测试文字测试文字</span>  
    </div>  
    <div>  
        测试文字测试文字  
    </div>  
    <div>  
        <p>测试文字测试文字</p>
        <p>测试文字测试文字</p>
    </div>  
</body>
</html>
```

> css 景深用法，制作3d木马---还包含了animation的缩写用法

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    .box {
      position: relative;
      border: solid 1px #000;
      box-sizing: content-box;
      margin: 0px auto;
      width: 300px;
      height: 300px;
      /* 重点看这里 */
      perspective: 500px;/* 景深设置 */
      user-select: none;
    }
    .ul1 {
      list-style: none;
      position: absolute;
      width: 100px;
      height: 100px;
      left: 50%;
      top: 50%;
      margin-top: -50px;
      margin-left: -50px;
      transform-style: preserve-3d; /* 制造3d感觉，和景深搭配使用 */
      transition: all 10s;
    }
    .ul1 li {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      opacity: 0.5;
      /* 背景隐藏属性 */
      backface-visibility: hidden; /* 背部隐藏属性 */
    }
    .ul1 li:nth-child(1) {
      transform: rotateY(0deg) translateZ(150px);
    }
    .ul1 li:nth-child(2) {
      transform: rotateY(60deg) translateZ(150px);
    }
    .ul1 li:nth-child(3) {
      transform: rotateY(120deg) translateZ(150px);
    }
    .ul1 li:nth-child(4) {
      transform: rotateY(180deg) translateZ(150px);
    }
    .ul1 li:nth-child(5) {
      transform: rotateY(240deg) translateZ(150px);
    }
    .ul1 li:nth-child(6) {
      transform: rotateY(300deg) translateZ(150px);
    }
    .box:hover .ul1 {
      /* transform: rotateY(360deg); */
      animation-play-state: paused; /* 鼠标滑入时暂停animation动画 */
    }
    .ul1 {
      animation: move 5s 0ms linear infinite alternate;
      /* animation: move 5s 0ms linear infinite; */
      /* animation: move 5s 0ms linear 2 alternate; */
      /* animation: move 5s 0ms linear 2; */
    }
    @keyframes move {
      0% {
        transform: rotateY(0deg);
        width: 100px;
      }
      100% {
        transform: rotateY(360deg);
        width: 120px;
      }
    }
  </style>
  <title>Document</title>
</head>
<body>
  <div class="box">
    <ul class="ul1">
      <li style="background-color:red;">asdfasdf</li>
      <li style="background-color:yellow;">asdf</li>
      <li style="background-color:purple;">asdf</li>
      <li style="background-color:blue;">asdf</li>
      <li style="background-color:orange;">asdf</li>
      <li style="background-color:#000;">asdf</li>
    </ul>
  </div>
</body>
</html>
```

> mask 遮罩图片

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
    .mask-image {
      width: 250px;
      height: 187.5px;
      -webkit-mask-image: url(../../knowledge_img/mask.png);
      mask-image: url(../../knowledge_img/mask.png);
       <!-- 模糊 -->
      filter: blur(100px);
    }
  </style>
  <title>Document</title>
</head>
<body>
  <img src="../../knowledge_img/team.png" class="mask-image">
</body>
</html>
```

> box-reflect 倒影  blur模糊

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <style>
      *{
          margin: 0;
          padding: 0;
      }
    img {
        -webkit-box-reflect:right 10px -webkit-linear-gradient(transparent,transparent 0%,rgba(255,255,255,1));
      margin: 20px;
    }
  </style>
  <title>Document</title>
</head>
<body>
  <img width="100" height="100" src="../../../knowledge_img/team.png" alt="">
</body>
</html>
```

> resize 设置后可拖拽div改变宽高相当于textarea，contenteditable设置为true后div可输入

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div style="border:1px solid #000;resize:both;overflow: auto;" contenteditable="true">asdfsadfasd</div>
</body>
</html>
```

> border-width 可设置4个值
>>currentColor 当前的color值
>>> 线尾型样式

```
.test {
    position: absolute;
    border-style: solid;
    width: 100px;
    height: 100px;
    color: #fff;
    border-radius: 50%;
    border-color: currentColor transparent transparent currentColor;
    border-width: 0.2em 0.2em 0em 0em;
    --deg: -45deg;
}
```

> loading 样式

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Comet rotating loader</title>
	<style>
		.test {
			position: absolute;
			border-style: solid;
			width: 100px;
			height: 100px;
			color: #fff;
			border-radius: 50%;
			border-color: currentColor transparent transparent currentColor;
			border-width: 0.2em 0.2em 0em 0em;
			--deg: -45deg;
			animation: animate 3s linear infinite;
		}
		.loader {
			width: 20em;
			height: 20em;
			font-size: 10px;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.loader .face {
			position: absolute;
			border-radius: 50%;
			border-style: solid;
			animation: animate 3s linear infinite;
		}
		.loader .face:nth-child(1) {
			width: 100%;
			height: 100%;
			color: gold;
			border-color: currentColor transparent transparent currentColor;
			border-width: 0.2em 0.2em 0em 0em;
			--deg: -45deg;
			animation-direction: normal;
		}
		.loader .face:nth-child(2) {
			width: 70%;
			height: 70%;
			color: lime;
			border-color: currentColor currentColor transparent transparent;
			border-width: 0.2em 0em 0em 0.2em;
			--deg: -135deg;
			animation-direction: reverse;
		}
		.loader .face .circle {
			position: absolute;
			width: 50%;
			height: 0.1em;
			top: 50%;
			left: 50%;
			background-color: transparent;
			transform: rotate(var(--deg));
			transform-origin: left;
		}
		.loader .face .circle::before {
			position: absolute;
			top: -0.5em;
			right: -0.5em;
			content: '';
			width: 1em;
			height: 1em;
			background-color: currentColor;
			border-radius: 50%;
			box-shadow: 0 0 2em,
				0 0 4em,
				0 0 6em,
				0 0 8em,
				0 0 10em,
				0 0 0 0.5em rgba(255, 255, 0, 0.1);
		}
		@keyframes animate {
			to {
				transform: rotate(360deg);
			}
		}
	</style>
</head>
<body>
	<div class="test">
	</div>
	<div class="loader">
		<div class="face">
			<div class="circle"></div>
		</div>
		<div class="face">
			<div class="circle"></div>
		</div>
	</div>
</body>
</html>
```

> border属性值
>> border-width----有四个值

```
border-width:1px 2px 3px 4px;
border-color:red yellow pink purple;
border-style:dashed dotted double dashed;
```

> background

```
background-attachment:fixed|scroll|local; // 北京相对于窗体固定||相对于元素固定||相对于元素内容固定
background-origin: padding-box|border-box|content-box; // 从padding区域（含padding）开始显示背景图像||
从border区域（含border）开始显示背景图像||从content区域开始显示背景图像.
background-clip:padding-box|border-box|content-box|text; // 
从padding区域（不含padding）开始向外裁剪背景||从border区域（不含border）开始向外裁剪背景||从content区域开始向外裁剪背景||从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果
```

> 文本text

```
text-transform:none|capitalize|uppercase|lowercase|full-width; // 无转换||将每个单词的第一个字母转换成大写||将每个单词转换成大写||将每个单词转换成小写||将所有字符转换成fullwidth形式如果字符没有相应的fullwidth形式，将保留原样.
white-space:normal|pre|nowrap|pre-wrap|pre-line; // 默认处理方式||用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字超出边界时不换行||强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象||用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字碰到边界时发生换行||保持文本的换行，不保留文字间的空白距离，当文字碰到边界时发生换行.
work-break:normal|keep-all|break-all; //依照亚洲语言和非亚洲语言的文本规则，允许在字内换行||与所有非亚洲语言的normal相同||该行为与亚洲语言的normal相同.
word-wrap:normal|break-word; // 允许内容顶开或溢出指定的容器边界||内容将在边界内换行。如果需要，单词内部允许断行
text-indent:<length>|<percentage>; // 用长度值指定文本的缩进。可以为负值||用百分比指定文本的缩进。可以为负值。
```

> text-decoration 文本装饰

```
text-decoration-line:none|underline|overline|line-througn|blink; // 文本装饰的种类
text-decoration-style:; // 文本装饰的样式
text-decoration-color:; // 文本装饰的颜色
```

> direction 检索或设置文本流的方向
`direction:ltr|rtl; // 文本流从左向右||文本流从右向左`;

> 列表 list

```
list-style:
list-style-image:none|url(); // 不指定图像||图片
list-style-position: outside||inside; // 列表项目标记放置在文本以外，且环绕文本不根据标记对齐||列表项目标记放置在文本以内，且环绕文本根据标记对齐.
list-style-type:disc | circle | square | decimal | lower-roman | upper-roman | lower-alpha | upper-alpha | none | armenian | cjk-ideographic | georgian | lower-greek | hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-latin | upper-latin;// 所有 <' display '> 设置为list-item的元素
<!-- disc： -->
<!-- 实心圆(CSS1) -->
<!-- circle： -->
<!-- 空心圆(CSS1) -->
<!-- square： -->
<!-- 实心方块(CSS1) -->
<!-- decimal： -->
<!-- 阿拉伯数字(CSS1) -->
<!-- lower-roman： -->
<!-- 小写罗马数字(CSS1) -->
<!-- upper-roman： -->
<!-- 大写罗马数字(CSS1) -->
<!-- lower-alpha： -->
<!-- 小写英文字母(CSS1) -->
<!-- upper-alpha： -->
<!-- 大写英文字母(CSS1) -->
<!-- none： -->
<!-- 不使用项目符号(CSS1) -->
<!-- armenian： -->
<!-- 传统的亚美尼亚数字(CSS2) -->
<!-- cjk-ideographic： -->
<!-- 浅白的表意数字(CSS2) -->
<!-- georgian： -->
<!-- 传统的乔治数字(CSS2) -->
<!-- lower-greek： -->
<!-- 基本的希腊小写字母(CSS2) -->
<!-- hebrew： -->
<!-- 传统的希伯莱数字(CSS2) -->
<!-- hiragana： -->
<!-- 日文平假名字符(CSS2) -->
<!-- hiragana-iroha： -->
<!-- 日文平假名序号(CSS2) -->
<!-- katakana： -->
<!-- 日文片假名字符(CSS2) -->
<!-- katakana-iroha： -->
<!-- 日文片假名序号(CSS2) -->
<!-- lower-latin： -->
<!-- 小写拉丁字母(CSS2) -->
<!-- upper-latin： -->
<!-- 大写拉丁字母(CSS2) -->
```

> table 表格

```
table-layout: auto|fixed; // 默认的自动算法||固定布局的算法.
border-collapse: separate|collapse; // 边框独立|| 相邻边被合并
border-spacing:<length>; // 用长度值来定义行和单元格的边框在横向和纵向上的间距。不允许负值
caption-side:top|bottom; // 指定caption在表格上边|| 指定caption在表格下边.
empty-cells：hide | show; // 指定当表格的单元格无内容时，隐藏该单元格的边框|| 指定当表格的单元格无内容时，显示该单元格的边框
```

> user Interface(用户界面)

```
text-overflow:clip|ellipsis; // 当内联内容溢出块容器时，将溢出部分裁切掉|| 当内联内容溢出块容器时，将溢出部分替换为（...）。
outline:;
outline-width:;
outline-color:;
outline-style:;
cursor:url(example.svg#linkcursor),url(hyper.cur),url(hyper.png) 2 3,pointer; // 优先使用第一个url,如果客户端不支持则使用第二个，以此类推，cursor只支持.cur图片
zoom: normal|<number>|<percentage>; // 使用对象的实际尺寸|| 用浮点数来定义缩放比例。不允许负值|| 用百分比来定义缩放比例。不允许负值
user-select: none|text|all|element; // 文本不能被选择|| 可以选择文本|| 当所有内容作为一个整体时可以被选择|| 可以选择文本，但选择范围受元素边界的约束

```

> cursor 用法

```
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<meta charset="utf-8" />
<title>cursor_CSS参考手册_web前端开发参考手册系列</title>
<meta name="author" content="Joy Du(飘零雾雨), dooyoe@gmail.com, www.doyoe.com" />
<style>
.test{width:400px;border-collapse:collapse;font:14px/1.5 georgia,arial,serif,sans-serif;}
.test td{padding:2px 10px;border:1px solid #ddd;}
.test td:hover{background:#eee;}
.auto{cursor:auto;}
.default{cursor:default;}
.none{cursor:none;}
.context-menu{cursor:context-menu;}
.help{cursor:help;}
.pointer{cursor:pointer;}
.progress{cursor:progress;}
.wait{cursor:wait;}
.cell{cursor:cell;}
.crosshair{cursor:crosshair;}
.text{cursor:text;}
.vertical-text{cursor:vertical-text;}
.alias{cursor:alias;}
.copy{cursor:copy;}
.move{cursor:move;}
.no-drop{cursor:no-drop;}
.not-allowed{cursor:not-allowed;}
.e-resize{cursor:e-resize;}
.n-resize{cursor:n-resize;}
.ne-resize{cursor:ne-resize;}
.nw-resize{cursor:nw-resize;}
.s-resize{cursor:s-resize;}
.se-resize{cursor:se-resize;}
.sw-resize{cursor:sw-resize;}
.w-resize{cursor:w-resize;}
.ew-resize{cursor:ew-resize;}
.ns-resize{cursor:ns-resize;}
.nesw-resize{cursor:nesw-resize;}
.nwse-resize{cursor:nwse-resize;}
.col-resize{cursor:col-resize;}
.row-resize{cursor:row-resize;}
.all-scroll{cursor:all-scroll;}
.zoom-in{cursor:zoom-in;}
.zoom-out{cursor:zoom-out;}
.url{cursor:url(skin/cursor.gif),
			url(skin/cursor.png),
			url(skin/cursor.jpg),
			pointer;}
</style>
</head>
<body>
<table class="test">
	<caption>cursor光标类型</caption>
	<tbody>
		<tr>
			<td class="auto">auto</td>
			<td class="default">default</td>
			<td class="none">none</td>
			<td class="context-menu">context-menu</td>
			<td class="help">help</td>
			<td class="pointer">pointer</td>
			<td class="progress">progress</td>
		</tr>
		<tr>
			<td class="wait">wait</td>
			<td class="cell">cell</td>
			<td class="crosshair">crosshair</td>
			<td class="text">text</td>
			<td class="vertical-text">vertical-text</td>
			<td class="alias">alias</td>
			<td class="copy">copy</td>
		</tr>
		<tr>
			<td class="move">move</td>
			<td class="no-drop">no-drop</td>
			<td class="not-allowed">not-allowed</td>
			<td class="e-resize">e-resize</td>
			<td class="n-resize">n-resize</td>
			<td class="ne-resize">ne-resize</td>
			<td class="nw-resize">nw-resize</td>
		</tr>
		<tr>
			<td class="s-resize">s-resize</td>
			<td class="se-resize">se-resize</td>
			<td class="sw-resize">sw-resize</td>
			<td class="w-resize">w-resize</td>
			<td class="ew-resize">ew-resize</td>
			<td class="ns-resize">ns-resize</td>
			<td class="nesw-resize">nesw-resize</td>
		</tr>
		<tr>
			<td class="nwse-resize">nwse-resize</td>
			<td class="col-resize">col-resize</td>
			<td class="row-resize">row-resize</td>
			<td class="all-scroll">all-scroll</td>
			<td class="url">url</td>
			<td class="zoom-in">zoom-in</td>
			<td class="zoom-out">zoom-out</td>
		</tr>
	</tbody>
</table>
</body>
</html>
```

> transform-style：flat | preserve-3d
>> 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化。

```
flat： 指定子元素位于此元素所在平面内
preserve-3d： 指定子元素定位在三维空间内
```

> transition：<single-transition>[,<single-transition>]*;

```
<'transition-property'>： 检索或设置对象中的参与过渡的属性
<'transition-duration'>： 检索或设置对象过渡的持续时间
<'transition-timing-function'>： 检索或设置对象中过渡的动画类型
<'transition-delay'>： 检索或设置对象延迟过渡的时间
```

> animation：<single-animation>[,<single-animation>]*;
>> 复合属性。检索或设置对象所应用的动画特效。如果提供多组属性值，以逗号进行分隔。

```
<'animation-name'>： 检索或设置对象所应用的动画名称
<'animation-duration'>： 检索或设置对象动画的持续时间
<'animation-timing-function'>： 检索或设置对象动画的过渡类型
<'animation-delay'>： 检索或设置对象动画延迟的时间
<'animation-iteration-count'>： 检索或设置对象动画的循环次数
<'animation-direction'>： 检索或设置对象动画在循环中是否反向运动
<'animation-fill-mode'>： 检索或设置对象动画时间之外的状态
<'animation-play-state'>： 检索或设置对象动画的状态。w3c正考虑是否将该属性移除，因为动画的状态可以通过其它的方式实现，比如重设样式

animation-timing-function
linear： 线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
ease： 平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
ease-in： 由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
ease-out： 由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
ease-in-out： 由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
step-start： 等同于 steps(1, start)
step-end： 等同于 steps(1, end)
steps(<integer>[, [ start | end ] ]?)： 接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
cubic-bezier(<number>, <number>, <number>, <number>)： 特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内

animation-iteration-count
infinite： 无限循环
<number>： 指定对象动画的具体循环次数

animation-direction
normal： 正常方向
reverse： 反方向运行
alternate： 动画先正常运行再反方向运行，并持续交替运行
alternate-reverse： 动画先反运行再正方向运行，并持续交替运行

animation-play-state
running： 运动
paused： 暂停

animation-fill-mode
none： 默认值。不设置对象动画之外的状态
forwards： 设置对象状态为动画结束时的状态
backwards： 设置对象状态为动画开始时的状态
both： 设置对象状态为动画结束或开始的状态
```

> 伪对象选择符

```
E:first-letter/E::first-letter { sRules } // 设置对象内的第一个字符的样式。
E:first-line/E::first-line { sRules } // 设置对象内的第一行的样式。
E:before/E::before { sRules } // 设置在对象前（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性
E:after/E::after { sRules } // 设置在对象后（依据对象树的逻辑结构）发生的内容。用来和content属性一起使用，并且必须定义content属性
E::placeholder { sRules } // 设置对象文字占位符的样式。
E::selection { sRules } // 设置对象被选择时的样式。
```

> calc() 函数`width: calc(100% - 50px);`

> 元素垂直水平居中

```
仅居中元素定宽高适用
  absolute + 负margin
  absolute + margin auto
  absolute + calc
居中元素不定宽高
  absolute + transform
  lineheight
  writing-mode
  table
  css-table
  flex
  grid
```






