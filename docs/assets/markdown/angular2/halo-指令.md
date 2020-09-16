#### halo 闪烁指令ts文件
```
import {
  Component,
  Input,
  Output,
  HostListener,
  Directive,
  ElementRef,
  Renderer,
  EventEmitter,
  DoCheck,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { animationOn } from '../../../app-config.animation';
/*
 * 指令
 * XLarge 字体变大
 */
@Directive({
  selector: '[halo]' // 用 [ ] 代表 属性
})
export class HaloDirective implements OnChanges {
  animation;
  @Input('halo') halo: any;
  @Output() cancelAnimation = new EventEmitter<void>();
  // @HostListener('click') onClick() {     console.log(this.animation);     if
  // (this.animation)         this.animation.cancel();     console.log('end'); }

  constructor(private element: ElementRef, renderer: Renderer) {
    // 设置 font size 成 x-large `nativeElement` 是作用元素
    // element.nativeElement.style.fontSize = 'x-large'; console.log(element); 为了让
    // server/webworker 支持 用  renderer 渲染
    // renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');

    // console.log(animationOn);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges'); console.log(changes);
    const chng = changes['halo'];
    let cur = chng.currentValue;
    let prev = chng.previousValue;
    // console.log(cur); console.log(prev);
    if (cur === prev) {
      console.log('meiy');
      return;
    }
    if (this.halo) {
      setTimeout(() => {
        if (this.animation)
          this.animation.cancel();
        this.animation = this.startHalo(this.halo);
      }, 15);
    } else {
      if (this.animation)
        this.animation.cancel();
    };
  }
  private startHalo(halo: string) {
    // console.log(this.halo);
    // let a: any = new Proxy({}, {     set(v: string) {
    // console.log('haha');         return true;     }, }); a.b = 1; if (!this.halo)
    // return;
    const elem: any = this.element.nativeElement;

    if (animationOn[this.halo])
      return elem.animate(animationOn[this.halo].keyframes, animationOn[this.halo].options);
  }
}

```
#### halo 闪烁文件配置.ts文件====app-config.animation

```
const a = [
    {
        id: 'halo',
        keyframes: [
            {
                offset: 0,

                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 1000,
        easing: '',
        iterations: 'Infinity',
    },

    {
        id: 'ficker1',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 300,
        easing: '',
        iterations: 'Infinity',
    },
    {
        id: 'ficker2',
        keyframes: [
            {
                offset: 0,
                style: { opacity: 0.2, },
            },
            {
                offset: 1,
                style: { opacity: 1, },
            },
        ],
        delay: '',
        direction: 'alternate',
        duration: 500,
        easing: '',
        iterations: 5,
    },
];

const animationOn = {
    id: {
        keyframes: [],
        options: {},
    },
};

for (let v of a) {
    const keyframes = [];
    v.keyframes.forEach(element => {
        const keyframe = {};
        if (element.offset) {
            Object.assign(keyframe, {
                offset: +element.offset,
            });
        }
        Object.assign(keyframe, element.style);
        keyframes.push(keyframe);
    });
    const options = {};
    if (v.delay) {
        Object.assign(options, {
            delay: v.delay,
        });
    }
    if (v.direction) {
        Object.assign(options, {
            direction: v.direction,
        });
    }
    if (v.duration) {
        Object.assign(options, {
            duration: +v.duration,
        });
    }
    if (v.easing) {
        Object.assign(options, {
            easing: v.easing,
        });
    }
    if (v.iterations) {
        let iterations;
        if (v.iterations === 'Infinity') {
            v.iterations = Infinity;

        }
        Object.assign(options, {
            iterations: +v.iterations,
        });
    }

    animationOn[v.id] = {
        keyframes: keyframes,
        options: options,
    };
}

export {
    animationOn,
}

```
