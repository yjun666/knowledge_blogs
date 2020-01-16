// 拦截器修改请求头添加token--------摘抄自官网
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

const filterNoHeadersUrlArr = ['https://npmsearch.com/query'];
/** Pass untouched request through to the next request handler. */
@Injectable()
export class SetAuthorInterceptorService implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log(req, next);
    let authReq = req;
    // 排除设置Authorization等属性的接口，可能这类接口不允许设置这类字段
    if (!filterNoHeadersUrlArr.includes(req.url)) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'asdf-asd-fa-sdf-asdf-sdf')
      });
    }
    return next.handle(authReq);
  }
}