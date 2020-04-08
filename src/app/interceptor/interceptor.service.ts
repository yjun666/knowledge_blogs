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
export class OtherInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const isToLogin = this.toLogin(req);
    console.log(isToLogin);
    return next.handle(req);
  }

  // 如果登陆失效，跳转到登陆页面
  private toLogin(req) {
    // 除登陆接口以外的所有接口都设置访问失效，跳转登陆
    if (req.url.indexOf('/oauth/rest_token') === -1) {
      // 登陆失效，跳转到登陆页面
      if (!isLogin()) {
        this.router.navigate(['/login']);
        return false;
      }
    }
    return true;
  }
}
