import { fromEvent, interval, of } from 'rxjs';
import { map, takeUntil, takeLast, first, last, skip, skipLast } from 'rxjs/operators';


export interface TakeUntilItem {
    takeUntilApply: Function; // takeUntil用法
}

export class TakeUntil implements TakeUntilItem {
    click$;
    takeUntilApply() {

        interval(1000).pipe(
            takeUntil(fromEvent(document, 'click'))
        )
            .subscribe(x => {
                console.log(x);
            });
    }
}

