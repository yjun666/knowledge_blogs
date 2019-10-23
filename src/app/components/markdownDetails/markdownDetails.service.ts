import { Injectable, Inject } from '@angular/core';

declare const $;
@Injectable()
export class MarkdownDetailsService {
    constructor() { }


    /**
     * 使用滚动条插件设置滚动条样式
     * @param id 元素id
     * @param init 是否是初始化设置，还是仅resize
     */
    public niceScroll(id, init) {
        if (init) {
            $(`#${id}`).niceScroll({
                cursorcolor: '#ccc', // #CC0071 光标颜色
                cursoropacitymax: 1, // 改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
                touchbehavior: false, // 使光标拖动滚动像在台式电脑触摸设备
                cursorwidth: '5px', // 像素光标的宽度
                cursorborder: '0', // 	游标边框css定义
                cursorborderradius: '5px', // 以像素为光标边界半径
                autohidemode: true // 是否隐藏滚动条
            });
        } else {
            $(`#${id}`).getNiceScroll().resize();
        }
    }

    /**
     * 触发滚动条回到顶部设置
     * @param id 带给你钱操作元素的id名称
     */
    public scrollTop(id) {
        const scrollTopInterval = setInterval(() => {
            document.getElementById(`${id}`).scrollTop -= 100;
            if (document.getElementById(`${id}`).scrollTop <= 0) {
                document.getElementById(`${id}`).scrollTop = 0;
                clearInterval(scrollTopInterval);
            }
        }, 10);
    }
}
