import { fromEvent, interval } from 'rxjs';
import { mapTo, map } from 'rxjs/operators';
export interface MapToItem {
    mapToApply: Function; // mapTo用法
}

export class MapTo implements MapToItem {
    // mapTo用法
    mapToApply() {
        fromEvent(document, 'click');
        interval(1000)
            .pipe(
                map(x => x * x),
                mapTo('Hi')
            ).subscribe(x => console.log(x));
    }
}

