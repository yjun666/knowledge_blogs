import { fromEvent, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';


export interface TakeItem {
    takeApply: Function; // take用法
}

export class Take implements TakeItem {
    click$;
    takeApply() {
        this.click$ = fromEvent(document, 'click');
        this.click$.pipe(take(3))
            .subscribe(e => {
                console.log('只可点击三次');
            });
    }
}

