import { fromEvent, interval, defer, of } from 'rxjs';
import { map, take, catchError, repeatWhen } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


export interface RepeatWhenItem {
    repeatWhenApply: Function; // take用法
}

export class RepeatWhen implements RepeatWhenItem {
    repeatWhenApply$: any;

    // ajax defer用法
    repeatWhenApply() {

        const source = of('Repeat message');
        const documentClick$ = fromEvent(document, 'click');
        source.pipe(repeatWhen(() => documentClick$)
        ).subscribe(data => console.log(data));


        // const source$ = of(1, 2, 3);
        // const notifier = (notification$) => {
        //     return notification$.delay(2000);
        // };
        // const repeated$ = source$.pipe(repeatWhen(notifier));
        // repeated$.subscribe((data) => {
        //     console.log(data);
        // });
    }
}

