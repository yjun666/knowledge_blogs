import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient
  ) {
    console.log('asdfasdfasdfasdfsafd');
  }
  isLoggedIn = sessionStorage.wwwYjunsCn || false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<any> {
    return this.http.get('/assets/json/markdownCatalog.json');  // 模拟请求，看subscribe是否等待请求成功才调用

    // // 下边使用延时模拟请求延时
    // return of(true).pipe(
    //     delay(5000),
    //     tap(val => this.isLoggedIn = true)
    // );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
