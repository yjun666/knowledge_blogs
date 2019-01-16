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





















