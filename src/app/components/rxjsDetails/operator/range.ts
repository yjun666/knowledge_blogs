import { pipe, range, of, Observable, interval } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
export interface RangeItem {
    rangeApply: () => void; // range用法
}

export class Range implements RangeItem {
    // range用法
    rangeApply() {
        {
            // 使用Observable创建
            // tslint:disable-next-line:no-shadowed-variable
            const source$ = new Observable(observer => {
                let num = 1;
                setInterval(() => {
                    observer.next(num++);
                }, 100);
            });
            const observer = {
                next: item => console.log(item)
            };
            const subscription = source$.subscribe(observer);

            setTimeout(() => {
                subscription.unsubscribe();
            }, 300);
        }

        range(1, 5).pipe(
            filter(x => x % 2 === 1),
            map(m => m * m)
        ).subscribe((data) => {
            console.log(data);
        });

        interval(100).pipe(
            take(5),
            map(x => x * x)
        ).subscribe(x => {
            console.log(Math.pow(x, 0.5), x);
        });
    }

}

