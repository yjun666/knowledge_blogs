// 拦截器记录日志，监听请求的返回时间成功还是失败------摘抄自官网
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';

import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
    messenger = [];
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const started = Date.now();
        let ok: string;
        let res: any;
        let authReq = req;

        let success = false;
        //     // extend server response observable with logging
        return next.handle(req)
            .pipe(
                tap(
                    (event) => {
                        // console.log(event);
                        success = true;
                        ok = 'success';
                        return res = event instanceof HttpResponse ? event : event;
                    },
                    (error) => {
                        // console.log(error);
                        success = false;
                        ok = '失败';
                        return res = error;
                    }
                ),
                // Log when response observable either completes or errors
                finalize(() => {
                    console.log(success, res, res.url);
                    const elapsed = Date.now() - started;
                    const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
                    this.messenger.push(msg);
                    console.log(this.messenger);
                })
            );
    }
}
