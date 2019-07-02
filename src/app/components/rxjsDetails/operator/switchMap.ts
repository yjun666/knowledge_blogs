import { fromEvent, interval, of } from 'rxjs';
import { map, take, switchAll, mergeAll, switchMap, concatMap } from 'rxjs/operators';

export interface SwitchMapItem {
    switchMapApply: Function; // switchMap用法
}

export class SwitchMap implements SwitchMapItem {
    // range用法
    switchMapApply() {
        const clicks = fromEvent(document, 'click');
        {
            clicks.pipe(switchMap((ev) => interval(1000).pipe(map(x => {
                console.log(x);
                return x;
            })))).subscribe(console.log);
        }


        {
            // 限制每次点击响应事件次数为4次，可以限制1000ms内不响应事件
            const result = clicks.pipe(
                switchMap(ev => interval(1000).pipe(take(4)))
            );
            result.subscribe(x => console.log(x));
        }


        {
            const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
            switched.subscribe(x => console.log(x));
        }
    }
}

