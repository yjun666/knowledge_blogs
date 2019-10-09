import { fromEvent, interval, defer, of, Observer, Observable, from } from 'rxjs';
import { map, take, catchError, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


export interface DeferItem {
    deferApply: Function; // take用法
}

export class Defer implements DeferItem {
    deferApply$: any;

    // defer用法
    deferApply() {
        let clicksOrInterval;
        let ajax$;
        {
            // @example 01
            clicksOrInterval = defer(function (): Observable<any> {
                console.log(Math.random());
                return Math.random() > 0.5
                    ? fromEvent(document, 'click')
                    : interval(1000);
            });
        }

        {
            // @example 02
            ajax$ = defer(function (): Observable<any> {
                return ajax({
                    url: '/assets/json/markdownCatalog.json',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'rxjs-custom-header': 'Rxjs'
                    },
                    body: {
                        rxjs: 'Hello World!'
                    }
                }).pipe(
                    map(res => {
                        console.log('response:', res);
                        return res.response;
                    }),
                    catchError(error => {
                        console.log('error: ', error);
                        return of(error);
                    })
                );
            });
        }

        setTimeout(() => {
            ajax$.subscribe(x => { console.log(x) }); // 只要不调用subscribe方法便不会调用发送ajax请求，所以defer的效果并不明显
            clicksOrInterval.subscribe(x => console.log(x));
        }, 10000);
    }
}

