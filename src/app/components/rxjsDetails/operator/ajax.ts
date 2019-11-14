import { fromEvent, interval, defer, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


export interface AjaxItem {
    ajaxApply: () => void; // take用法
}

export class Ajax implements AjaxItem {
    ajaxApply$: any;

    // ajax defer用法
    ajaxApply() {
        ajax({
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
        ).subscribe(x => console.log(x));

        this.ajaxApply$ = ajax({
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
        ).subscribe(x => console.log(x));

        this.ajaxApply$.unsubscribe(); // 取消订阅
    }
}

