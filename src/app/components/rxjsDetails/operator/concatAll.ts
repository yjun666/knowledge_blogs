import { fromEvent, interval } from 'rxjs';
import { map, take, switchAll, concatAll, mergeAll } from 'rxjs/operators';

export interface ConcatAllItem {
    concatAllApply: Function; // concatAll用法
}

export class ConcatAll implements ConcatAllItem {
    // range用法
    concatAllApply() {
        const clicks = fromEvent(document, 'click');
        const higherOrder = clicks.pipe(
            map(ev => {
                console.log(123123);
                return interval(1000).pipe(take(1));
            }),
        );
        const firstOrder = higherOrder.pipe(concatAll());
        firstOrder.subscribe(x => console.log(x));



        interval(1000).pipe(
            take(2),
            map(x => interval(1000).pipe(
                map(y => x + ':' + y),
                take(2))
            ),
            concatAll()
        ).subscribe(console.log);

        interval(1000).pipe(
            take(2),
            map(x => interval(1000).pipe(
                map(y => x + ':' + y),
                take(2))
            ),
            mergeAll()
        ).subscribe(console.log);

        interval(1500).pipe(
            take(2),
            map(x => interval(1000).pipe(
                map(y => x + ':' + y),
                take(2))
            ),
            switchAll()
        ).subscribe(console.log); // 0:0// 1:0// 1:1
    }
}

