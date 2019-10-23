import { Directive, OnInit, ElementRef, Input, OnChanges } from '@angular/core';

// import marked from 'marked';

declare const $, hljs, marked;
@Directive({ selector: '[appMarked]' })
export class AppMarkedDirective implements OnInit {
    constructor(
        private element: ElementRef
    ) { }
    @Input() appMarked; // 整个对象
    ngOnInit() {
        marked.setOptions({
            'baseUrl': null,
            'breaks': false,
            'gfm': true,
            'headerIds': true,
            'headerPrefix': '',
            'langPrefix': 'language-',
            'mangle': true,
            'pedantic': false,
            'sanitize': false,
            'sanitizer': null,
            'silent': false,
            'smartLists': false,
            'smartypants': false,
            'tables': true,
            'xhtml': false,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
        });

        this.getMarkDownCallBack();
    }

    // 创建请求函数需使用到promise和内部的resolve，请求数据通过resolve传递给async 函数
    getMarkDown() {
        return new Promise((resolve) => {
            $.get(`${this.appMarked.mdSrc}`, (response, status, xhr) => {
                this.element.nativeElement.innerHTML = marked(response);
                resolve();
            });
        });
    }

    // async await使用 后续console.log会在成功resolve后调用
    // 可使用try catch 处理错误
    async getMarkDownCallBack() {
        try {
            const data = await this.getMarkDown();
            const code = this.element.nativeElement.getElementsByTagName('code');
            console.log(code);
            Array.from(code).map((item, itemIndex, itemArr) => {
                item['className'] = 'JavaScript hljs';
            });
        } catch (error) {
            console.error(error);
            alert('出错了');
        }
    }

}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppMarkedDirective
    ],
    exports: [
        AppMarkedDirective
    ]
})
export class AppMarkedModule { }
