import { fromEvent, interval, defer, of, timer } from 'rxjs';
import { map, take, catchError, repeatWhen, repeat, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


export interface RepeatWhenItem {
    repeatWhenApply: Function; // take用法
}

export class RepeatWhen implements RepeatWhenItem {
    repeatWhenApply$: any;

    // ajax defer用法
    repeatWhenApply() {
        {
            // @example 01   点击一次触发一次
            const source = of('Repeat message');
            const documentClick$ = fromEvent(document, 'click');
            source.pipe(repeatWhen(() => documentClick$)
            ).subscribe(data => console.log(data));
        }


        {
            // @example 02    仅重复两次
            const source1 = interval(1000);
            const example1 = source1.pipe(take(3), repeat(2));
            example1.subscribe(x => console.log(x));
        }


        {
            // @example 03    每隔3s重播一次数据流
            const source2 = of(0, 1, 2, 3, 4, 5);
            const example2 = source2.pipe(repeatWhen(delay(3000)));
            example2.subscribe(console.log)
        }
    }
}
