// 拦截器记录日志，监听请求的返回时间成功还是失败
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
window['messenger'] = [];
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const started = Date.now();
        let ok: string;

        //     // extend server response observable with logging
        return next.handle(req)
            .pipe(
                tap(
                    // Succeeds when there is a response; ignore other events
                    event => ok = event instanceof HttpResponse ? 'succeeded' : '',
                    // Operation failed; error is an HttpErrorResponse
                    error => ok = 'failed'
                ),
                // Log when response observable either completes or errors
                finalize(() => {
                    const elapsed = Date.now() - started;
                    const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
                    window['messenger'].push(msg);
                    console.log(window['messenger']);
                })
            );
    }
}
