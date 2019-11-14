import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { from } from 'rxjs/internal/observable/from';
import { merge } from 'rxjs/internal/observable/merge';
import { timestamp } from 'rxjs/internal/operators/timestamp';
import { withLatestFrom } from 'rxjs/internal/operators/withLatestFrom';
import { map } from 'rxjs/internal/operators/map';
import { of } from 'rxjs/internal/observable/of';
import { timer } from 'rxjs/internal/observable/timer';
import { interval } from 'rxjs/internal/observable/interval';
import { take } from 'rxjs/internal/operators/take';


// withLatestFrom  将源Observable与其他Observable组合以创建一个Observable，其值仅根据源发出的值从每个值的最新值计算。

export interface TimeStampItem {
    timeStampApply: () => void; // timeStamp用法
}

export class TimeStamp implements TimeStampItem {
    // 获取鼠标按下到抬起的时间差
    timeStampApply() {
        const rxjsOperatorBody = document.querySelector('#rxjsOperatorBody');
        {
            // 创建点击按钮
            const button = document.createElement('button');
            button.id = 'holdMe';
            button.className = 'btn btn-primary';
            button.innerHTML = 'test timeStamp';
            rxjsOperatorBody.appendChild(button);
        }

        timer(500).subscribe(() => {
            const holdMe = document.querySelector('#holdMe');
            const mouseUp$ = fromEvent(holdMe, 'mouseup');
            const mouseDown$ = fromEvent(holdMe, 'mousedown');
            const holdTime$ = mouseUp$.pipe(timestamp(), withLatestFrom(mouseDown$.pipe(timestamp()), (mouseUpEvent, mouseDownEvent) => {
                console.log(mouseUpEvent, mouseDownEvent);
                return mouseUpEvent.timestamp - mouseDownEvent.timestamp;
            }));
            holdTime$.subscribe((data) => {

                {
                    // merge操作符
                    const source1$ = from([5]);
                    const source2$ = from([6]);
                    const source3$ = merge(source1$, source2$);
                    source3$
                        .pipe(map((x: any) => x * x))
                        .subscribe((m) => { console.log(m, 'merge操作符'); });
                }
                console.log(data);
            });
        });
    }
}

