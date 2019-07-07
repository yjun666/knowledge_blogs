import { fromEvent, interval, of, zip, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

import { withLatestFrom } from 'rxjs/operators';

export interface ZipItem {
    zipApply: Function; // zip用法
}

export class Zip implements ZipItem {
    click$;
    zipApply() {
        const age$ = of(27, 25, 29);
        const name$ = of('Foo', 'Bar', 'Beer');
        const isDev$ = of(true, true, false);
        // 组合多个Observable以创建一个Observable，其值根据其每个输入Observable的值按顺序计算
        zip(age$, name$, isDev$).pipe(
            map(([age, name, isDev]) => ({ age, name, isDev })),
        )
            .subscribe(x => console.log(x));


        {
            const source$ = interval(300).pipe(take(6));
            const newest$ = interval(300).pipe(take(6));
            combineLatest(source$, newest$).subscribe(x => console.log(x)); // [0, 0]// [0, 1]// [0, 2]// [1, 2]// [1, 3]// [2, 3]//} [2, 4]// [2, 5]
        }

        {
            const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
            const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
            const combinedTimers = combineLatest(firstTimer, secondTimer);
            combinedTimers.subscribe(value => console.log(value));
        }

        {

            const source$ = interval(600).pipe(take(3));
            const newest$ = interval(300).pipe(take(6));

            source$.pipe(
                withLatestFrom(newest$)
            ).subscribe(x => console.log(x)); // [0, 0]// [1, 2]// [2, 4]

        }

        {
            const clicks = fromEvent(document, 'click');
            const result = clicks.pipe(withLatestFrom(interval(1000)));
            result.subscribe(x => console.log(x));
        }
    }
}
