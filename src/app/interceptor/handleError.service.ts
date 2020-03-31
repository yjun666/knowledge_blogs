// 拦截器修改请求头添加token--------摘抄自官网
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { finalize, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
const filterNoHeadersUrlArr = ['http://10.110.147.33:8015/oauth/rest_token'];
/** Pass untouched request through to the next request handler. */
@Injectable()
export class HandleErrorInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log(req, next);
    let res: any;
    const authReq = req;
    let success = false;
    // console.log(req);
    return next.handle(authReq).pipe(
      tap(
        (event) => {
          // console.log(event);
          success = true;
          return res = event instanceof HttpResponse ? event : event;
        },
        (error) => {
          // console.log(error);
          success = false;
          return res = error;
        }
      ),
      finalize(() => {
        console.log(success, res, res.url);
        if (!success) {
          this.handleError(res); // 除超时以外的其他请求错误提示
        }
      })
    );
  }

  // 错误提示
  handleError(e) {
    console.log(e);
    console.warn(`${e.name},${e.status}`);
  }
}
