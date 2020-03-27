// 拦截器修改请求头添加token--------摘抄自官网
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { getToken, isLogin } from '../utils/auth';

const filterNoHeadersUrlArr = ['http://10.110.147.33:8015/oauth/rest_token'];
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
    if (!filterNoHeadersUrlArr.includes(req.url)) {
      {
        // 登陆失效，跳转到登陆页面
        if (!isLogin()) {
          this.router.navigate(['/login']);
          return next.handle(req);
        }
      }
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${getToken()}`)
      });
    }
    return next.handle(authReq);
  }
}
