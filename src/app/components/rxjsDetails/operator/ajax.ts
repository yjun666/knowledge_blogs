import { fromEvent, interval, defer, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


export interface AjaxItem {
    ajaxApply: Function; // take用法
}

export class Ajax implements AjaxItem {
    click$;
    // ajax defer用法
    ajaxApply() {
        ajax({
            url: '/assets/json/text2.json',
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
        ajax({
            url: '/assets/json/tex.json',
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
    }
}

