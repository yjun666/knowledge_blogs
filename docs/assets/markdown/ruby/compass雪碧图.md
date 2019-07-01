### compass 生成雪碧图
> 确认ruby和sass是否安装成功
安装成功使用一下命令确认

```
$ ruby -v
ruby 2.0.0p451 (2014-02-24) [x64-mingw32]
$ sass -v
Sass 3.4.6 (Selective Steve)
```

> 安装compass

```
$ gem install compass

// 查看compass版本
$ compass -v
Compass 1.0.1 (Polaris)
```

> 配置compass项目
`$ compass init`

会生成相应的目录和配置文件。在images目录下建立share目录存放需合并的图标。项目目录结构如下：

```
- sass
- stylesheet
- images
  |-- share
  |-- magic
  |-- setting
```
`config.rb`文件配置如下：
```
http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

relative_assets = true	// 使用相对目录
line_comments = false	// 关闭行注释
```

完整的项目目录示例可在github上查看：https://github.com/8788/compass-sprite

## 合并雪碧图
#### 输出所有雪碧图样式
在sass目录下新建share.scss文件，并写入以下代码：

```
@import "compass/utilities/sprites";	// 加载compass sprites模块
@import "share/*.png";				// 导入share目录下所有png图片
@include all-share-sprites;			// 输出所有的雪碧图css
```

class规则是：.目录名-图片名。如果想自定义，我们可以通过下面调用单个雪碧图的方式来实现。
命令行调用compass compile进行编译，此时会发现images目录下出现了一个合并后的图片share-xxxxxxxx.png, stylesheet目录下生成了对应的share.css文件：
就运行compass compile,不用具体到具体的scss文件
```
.share-sprite, .share-github, .share-qq, .share-weibo {
  background-image: url('../images/share-s7fefca4b98.png');
  background-repeat: no-repeat;
}

.share-github {
  background-position: 0 0;
}

.share-qq {
  background-position: 0 -23px;
}

.share-weibo {
  background-position: 0 -47px;
}
```

#### 调用单个雪碧图样式

在sass目录下新建single-share.scss文件，并写入以下代码

```
@import "compass/utilities/sprites";	// 加载compass sprites模块
@import "share/*.png";					// 导入share目录下所有png图片
.test {
  @include share-sprites(github);
}
```
编译后的css为：

```
.share-sprite, .test {
  background-image: url('../images/share-s7fefca4b98.png');
  background-repeat: no-repeat;
}

.test {
  background-position: 0 -23px;
}
```

#### 利用魔术精灵选择器智能输出

有的时候我们的图标会有多种状态，比如hover, active, focus, target等。利用compass的魔术精灵选择器我们就可以智能的合并各状态的图标，并输出对应的css。使用时，我们需要将图标按照一定的规则命名。例如：
```
weibo.png    		// 默认状态图标
weibo_hover.png 	// hover状态图标
weibo_active.png 	// active状态图标
```
在sass目录下新建magic.scss文件，并写入以下代码：
```
@import "compass/utilities/sprites";
@import "magic/*.png";
@include all-magic-sprites;
```
编译后的css为：
```
.magic-sprite, .magic-weibo {
  background-image: url('../images/magic-s758f6928e8.png');
  background-repeat: no-repeat;
}

.magic-weibo {
  background-position: 0 0;
}
.magic-weibo:hover, .magic-weibo.weibo-hover {
  background-position: 0 -48px;
}
.magic-weibo:active, .magic-weibo.weibo-active {
  background-position: 0 -24px;
}
```

### 雪碧图配置

我们已经利用compass实现了简单雪碧图的合成。当然compass还提供了很多可供配置的选项，下面来一一介绍。

PS: 以下的配置选项不再单独举例，可参考示例项目中的setting.scss文件。

先来看下配置相关的语法：
```
$<map>-<property>: setting;				// 配置所有sprite
$<map>-<sprite>-<property>: setting;	// 配置单个sprite
```

说明：
* <map>: 对应图标存放的文件夹名称，如上面例子中的：share和magic
* <sprite>: 对应单个图标的名称，如上面例子中的: weibo, qq, github等

#### 配置sprite间距

```
$<map>-spacing: 5px;				// 配置所有sprite间距为5px，默认为0px
$<map>-<sprite>-spacing: 10px;		// 配置单个sprite间距为10px，默认继承$<map>-spacing的值
```

#### 配置sprite重复性

```
$<map>-repeat: no-repeat/repeat-x;		// 配置所有sprite的重复性，默认为no-repeat
$<map>-<sprite>-repeat: no-repeat/repeat-x;// 配置单个sprite的重复性，默认继承$<map>-repeat的值
```

#### 配置sprite的位置

```
$<map>-position: 0px;				// 配置所有sprite的位置，默认为0px
$<map>-<sprite>-position: 0px;		// 配置单个sprite的位置，默认继承$<map>-position的值
```

#### 配置sprite的布局方式

`$<map>-layout: vertical/horizontal/diagonal/smart;		// 默认布局方式为vertical`

#### 清除过期的sprite

每当添加、删除或改变图片后，都会生成新的sprite，默认情况下compass会自动的移除旧的sprite，当然也可以通过配置$<map>-clean-up: false;来保留旧的sprite。
`$<map>-clean-up: true/false;		// 默认值为true`

#### 配置sprite的基础类

在使用sprite时，compass会自动的生成一个基础类来应用公用的样式(如background-image)，默认的类名为$<map>-sprite，上面例子中的.share-sprite, .magic-sprite就是这个基础类，当然compass也提供了自定义这个类名的选项：
`$<map>-sprite-base-class: ".class-name";`

#### 魔术精灵选择器开关

上面已经介绍了怎样利用利用魔术精灵选择器智能输出sprite，默认情况下compass是开启这个功能的，也就是说compass默认会将以_hover, _active等名字结尾的图片自动输出对应的:hover, :active等伪类样式。当然如果不想这样的话，也可以禁用它。
`$disabled-magic-sprite-selectors: false;	// 默认为true`

#### 设置sprite尺寸

我们在合并雪碧图时，很多时候图片的尺寸都不一样，那么在使用时我们如何给每个sprite设置尺寸呢？compass有提供自动设置每个sprite尺寸的配置，默认是关闭的，我们只需手动启用即可。
`$setting-sprite-dimensions: true;	// 启用自动设置sprite尺寸，默认值为false`
这时输出的样式中会自动加上图片的尺寸，例如：
```
.setting-compass {
  background-position: -5px 0;
  height: 35px;
  width: 200px;
}
```
当然，如果只对某个sprite单独设置的话，compass也提供了这个功能。语法如下:
```
$<map>-sprite-width($name); 	// $name为合并前的图片名称
$<map>-sprite-height($name);
```
例如：
```
.special {
  @include setting-sprite(compass);
  width: setting-sprite-width(compass);
  height: setting-sprite-height(compass);
}
```
则输出的css为:
```
.special {
  background-position: -5px 0;
  width: 200px;
  height: 35px;
}
```