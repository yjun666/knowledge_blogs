// 拦截器修改请求头添加token--------摘抄自官网
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { getToken, isLogin } from '../utils/auth';

const noAuthorUrlArr = ['/oauth/rest_token', 'list/create']; // 这个数据里边的接口不添加Authorization
/** Pass untouched request through to the next request handler. */
@Injectable()
export class SetAuthorInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let authReq = req;

    // 排除设置Authorization等属性的接口，可能这类接口不允许设置这类字段
    if (noAuthorUrlArr.every(x => req.url.indexOf(x) === -1)) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${getToken()}`)
      });
    }
    return next.handle(authReq);
  }
}
