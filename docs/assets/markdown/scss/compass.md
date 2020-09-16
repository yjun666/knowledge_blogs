## compass

>sass-convert main.scss main.sass  编译scss文件为sass文件，也可以编译sass文件为scss文件

#### @at-root  在嵌套的时候使用可以使嵌套不生效

```
.headline{
    font-family:$headline-ff;
    @at-root{
        .main-sec{
            font: {
                family: $main-sec-ff;
                size:16px;
            }
        }
    }
}
```
#### compass compile编译文件
`compass compile`
#### compass watch 监听编译
`compass watch`

#### compass 核心模块
* reset  @import "compass/reset";
* Layout  @import "compass/layout";
>只需要引入@import "compass";就包括了其他的几大模块  

compass其余模块还包括css3,Helpers,Typography,Utilities,Browser







