import { fromEvent, interval, of } from 'rxjs';
import { map, takeLast, first, last, skip, skipLast, startWith } from 'rxjs/operators';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface StartWithItem {
    startWithApply: Function; // startWith用法
}

export class StartWith implements StartWithItem {
    startWithApply() {
        const source$ = fromEvent(document, 'click');
        let number = 0;
        const fakeRequest = x => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('aa');
                    resolve(number++);
                }, 1000);
            });
        };

        source$.pipe(
            startWith('initData'), // 初始化时默认调用了一次 这里通过 startWith 操作符获取了页面的初始数据，之后通过点击按钮获取更新数据。
            switchMap(x => from(fakeRequest(x)))
        ).subscribe(console.log);
    }
}
