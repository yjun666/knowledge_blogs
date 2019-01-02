import { Directive, OnInit, ElementRef, Input, OnChanges } from '@angular/core';
import marked from 'marked';

declare const $;
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
            'highlight': null,
            'langPrefix': 'language-',
            'mangle': true,
            'pedantic': false,
            'sanitize': false,
            'sanitizer': null,
            'silent': false,
            'smartLists': false,
            'smartypants': false,
            'tables': true,
            'xhtml': false
        });
        $.get(`${this.appMarked.mdSrc}`, (response, status, xhr) => {
            this.element.nativeElement.innerHTML = marked(response);
        });
    }

}
