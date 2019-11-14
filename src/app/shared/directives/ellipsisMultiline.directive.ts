import { Directive, OnChanges, Input, SimpleChanges, ElementRef, OnDestroy } from '@angular/core';
declare const $;
// js控制多行文本溢出显示省略号，在浏览器屏幕缩小时会有一行文字都显示不开的情况会出没有文字显示的问题,设置最小高度也不好用
@Directive({ selector: '[appEllipsisMultiline]' })
export class EllipsisMultilineDirective implements OnChanges, OnDestroy {
    timer: any = '';
    @Input() appEllipsisMultiline: any = '';
    constructor(
        private ele: ElementRef
    ) { }
    ngOnChanges(changes: SimpleChanges): void {
        const isScroll = () => {
            $(this.ele.nativeElement).scrollTop(1); // 控制滚动条下移10px
            if ($(this.ele.nativeElement).scrollTop() > 0) {
                $(this.ele.nativeElement).scrollTop(0); // 滚动条返回顶部
                return true;
            } else {
                return false;
            }
        };

        const setEllipsis = () => {
            const vm = this;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                let aa = '';
                const pHtml = this.appEllipsisMultiline;
                if (!pHtml) {
                    return;
                }

                $(this.ele.nativeElement).html(pHtml);
                for (let i = pHtml.length - 1; i >= 0; i--) {
                    // (function (x) {
                    //     setTimeout(function () {
                    //         console.log(x);
                    if (isScroll()) {
                        aa = pHtml.slice(0, i);
                        $(vm.ele.nativeElement).html(aa);
                    } else {
                        aa = pHtml.slice(0, i - 2);
                        aa += '...';
                        $(vm.ele.nativeElement).html(aa);
                        break;
                    }
                    //     }, 0);
                    // })(i);
                    // }
                }
            }, 300);
        };

        {
            const body = document.querySelector('body');
            // 如果当前不是谷歌浏览器就使用js控制，如果是谷歌设置了css样式控制多行文本显示...
            if (body.className.indexOf('chrome') < 0) {
                setEllipsis();
                window.removeEventListener('resize', setEllipsis);
                window.addEventListener('resize', setEllipsis);
            } else {
                this.ele.nativeElement.style.display = '-webkit-box';
                this.ele.nativeElement.style.webkitLineClamp = 3;
                this.ele.nativeElement.style.webkitBoxOrient = 'vertical';
                this.ele.nativeElement.style.overflow = 'hidden';
            }
        }
    }

    ngOnDestroy(): void {
        clearTimeout(this.timer);
    }
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        EllipsisMultilineDirective
    ],
    exports: [
        EllipsisMultilineDirective
    ]
})
export class EllipsisMultilineDirectiveModule { }
