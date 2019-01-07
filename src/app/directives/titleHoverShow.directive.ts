import { Directive, OnInit, ElementRef, Input, OnChanges, HostListener } from '@angular/core';

declare const $;
@Directive({ selector: '[appTitleHoverShow]' })
export class AppTitleHoverShowDirective implements OnInit {
    constructor(
        private element: ElementRef
    ) { }
    ngOnInit() { }

    @HostListener('mousemove', ['$event.target'])
    titleHoverShow(eventTarget, event) {
        const e = event || window.event;
        const removeClass = document.getElementsByClassName('titleHoverShow');
        const bodyScrollTop = $('html')[0].scrollTop;
        if (Array.from(removeClass).length !== 0) {
            Array.from(removeClass).map((item, index, arr) => {
                item.remove();
            });
        }
        const div = document.createElement('div');
        div.innerHTML = this.element.nativeElement.innerText;
        div.className = 'titleHoverShow';
        div.style.cssText = `
            position:absolute;
            left:${e.clientX}px;
            top:${e.clientY - 40 + bodyScrollTop}px;
            background-color:#d7e8fc;
            color:#000;
            border:1px solid #bcc8dc;
            z-index:1000;
            padding:5px 10px;
            border-radius:5px;`;
        document.body.appendChild(div);
    }


    @HostListener('mouseout', ['$event.target'])
    titleHoverhide(eventTarget) {
        const removeClass = document.getElementsByClassName('titleHoverShow');
        Array.from(removeClass).map((item, index, arr) => {
            item.remove();
        });
    }
}
